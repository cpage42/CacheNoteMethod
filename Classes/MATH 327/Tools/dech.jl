# dech.jl: Differential Equation Checker. LaTeX in, yes/no out.
#
# Terminal:   julia dech.jl "y' = 2y" "y = e^{2t}"
# Obsidian:   julia dech.jl "<path to DEch.md>"   (reads the two $$ blocks after the %% input %% markers)
# REPL:       include("dech.jl");  dech(raw"y'' + 4y = 0", raw"y = c_1\sin(2t) + c_2\cos(2t)")
#
# Needs only Julia itself (no packages). How it works: the proposed solution is turned into a
# Taylor series at a few sample points (so y, y', y'', ... are exact, not finite differences),
# any unknown constants (c_1, C, k, ...) get random values, and the residual (left side minus
# right side of the differential equation) must vanish at every sample.

using Random

# ---------------------------------------------------------------------------
# Jets: a value together with its derivatives at one point
# ---------------------------------------------------------------------------
struct Jet
    c::Vector{Float64}      # c[k+1] is the coefficient of h^k, so y^(k) = k! * c[k+1]
end

const NORD = Ref(4)         # highest derivative order we carry

constjet(x::Real) = (v = zeros(NORD[] + 1); v[1] = Float64(x); Jet(v))

Base.:+(a::Jet, b::Jet) = Jet(a.c .+ b.c)
Base.:-(a::Jet, b::Jet) = Jet(a.c .- b.c)
Base.:-(a::Jet) = Jet(-a.c)

function Base.:*(a::Jet, b::Jet)
    n = length(a.c)
    r = zeros(n)
    for k in 1:n
        for j in 1:k
            r[k] += a.c[j] * b.c[k - j + 1]
        end
    end
    Jet(r)
end

function Base.:/(a::Jet, b::Jet)
    n = length(a.c)
    q = zeros(n)
    for k in 1:n
        s = a.c[k]
        for j in 2:k
            s -= b.c[j] * q[k - j + 1]
        end
        q[k] = s / b.c[1]
    end
    Jet(q)
end

function jexp(a::Jet)
    n = length(a.c)
    e = zeros(n)
    e[1] = exp(a.c[1])
    for m in 1:n-1
        s = 0.0
        for k in 1:m
            s += k * a.c[k + 1] * e[m - k + 1]
        end
        e[m + 1] = s / m
    end
    Jet(e)
end

function jlog(a::Jet)
    n = length(a.c)
    if a.c[1] <= 0
        throw(DomainError(a.c[1], "log of a non-positive number"))
    end
    l = zeros(n)
    l[1] = log(a.c[1])
    for m in 1:n-1
        s = 0.0
        for k in 1:m-1
            s += k * l[k + 1] * a.c[m - k + 1]
        end
        l[m + 1] = (a.c[m + 1] - s / m) / a.c[1]
    end
    Jet(l)
end

function jsincos(a::Jet)
    n = length(a.c)
    s = zeros(n)
    c = zeros(n)
    s[1] = sin(a.c[1])
    c[1] = cos(a.c[1])
    for m in 1:n-1
        ss = 0.0
        cc = 0.0
        for k in 1:m
            ss += k * a.c[k + 1] * c[m - k + 1]
            cc += k * a.c[k + 1] * s[m - k + 1]
        end
        s[m + 1] = ss / m
        c[m + 1] = -cc / m
    end
    (Jet(s), Jet(c))
end

function jsinhcosh(a::Jet)
    n = length(a.c)
    s = zeros(n)
    c = zeros(n)
    s[1] = sinh(a.c[1])
    c[1] = cosh(a.c[1])
    for m in 1:n-1
        ss = 0.0
        cc = 0.0
        for k in 1:m
            ss += k * a.c[k + 1] * c[m - k + 1]
            cc += k * a.c[k + 1] * s[m - k + 1]
        end
        s[m + 1] = ss / m
        c[m + 1] = cc / m
    end
    (Jet(s), Jet(c))
end

isconstjet(a::Jet) = all(x -> x == 0.0, a.c[2:end])

function jpow(a::Jet, b::Jet)
    if isconstjet(b)
        p = b.c[1]
        if p == round(p) && abs(p) <= 64
            k = Int(p)
            r = constjet(1)
            for _ in 1:abs(k)
                r = r * a
            end
            return k >= 0 ? r : constjet(1) / r
        end
    end
    if a.c[1] <= 0
        throw(DomainError(a.c[1], "negative base with a non-integer power"))
    end
    jexp(b * jlog(a))
end

function jderiv(a::Jet)
    n = length(a.c)
    d = zeros(n)
    for k in 1:n-1
        d[k] = k * a.c[k + 1]
    end
    Jet(d)
end

function jintegrate(d::Jet, c0::Float64)
    n = length(d.c)
    r = zeros(n)
    r[1] = c0
    for k in 1:n-1
        r[k + 1] = d.c[k] / k
    end
    Jet(r)
end

const FNAMES = ["arcsin", "arccos", "arctan", "sinh", "cosh", "tanh", "sin", "cos", "tan",
                "sec", "csc", "cot", "exp", "ln", "log", "sqrt"]
const FUNCS = Set(Symbol.(FNAMES))

function apply_fn(f::Symbol, a::Jet)
    if f == :sin
        return jsincos(a)[1]
    elseif f == :cos
        return jsincos(a)[2]
    elseif f == :tan
        sc = jsincos(a)
        return sc[1] / sc[2]
    elseif f == :sec
        return constjet(1) / jsincos(a)[2]
    elseif f == :csc
        return constjet(1) / jsincos(a)[1]
    elseif f == :cot
        sc = jsincos(a)
        return sc[2] / sc[1]
    elseif f == :sinh
        return jsinhcosh(a)[1]
    elseif f == :cosh
        return jsinhcosh(a)[2]
    elseif f == :tanh
        sc = jsinhcosh(a)
        return sc[1] / sc[2]
    elseif f == :exp
        return jexp(a)
    elseif f == :ln || f == :log
        return jlog(a)
    elseif f == :sqrt
        return jpow(a, constjet(0.5))
    elseif f == :arctan
        u = constjet(1) + a * a
        return jintegrate(jderiv(a) / u, atan(a.c[1]))
    elseif f == :arcsin
        u = jpow(constjet(1) - a * a, constjet(0.5))
        return jintegrate(jderiv(a) / u, asin(a.c[1]))
    elseif f == :arccos
        u = jpow(constjet(1) - a * a, constjet(0.5))
        return jintegrate(-(jderiv(a) / u), acos(a.c[1]))
    end
    error("unsupported function $(f)")
end

# Evaluate a parsed expression (Julia Expr) with Jet values.
function ev(ex, env::Dict{Symbol,Jet})
    if ex isa Number
        return constjet(ex)
    elseif ex isa Symbol
        haskey(env, ex) || error("unknown symbol $(ex)")
        return env[ex]
    elseif ex isa Expr && ex.head == :call
        f = ex.args[1]
        args = Jet[ev(x, env) for x in ex.args[2:end]]
        if f == :+
            return length(args) == 1 ? args[1] : reduce(+, args)
        elseif f == :-
            return length(args) == 1 ? -args[1] : args[1] - args[2]
        elseif f == :*
            return reduce(*, args)
        elseif f == :/
            return args[1] / args[2]
        elseif f == :^
            return jpow(args[1], args[2])
        elseif f isa Symbol && f in FUNCS
            return apply_fn(f, args[1])
        end
        error("unsupported operation $(f)")
    end
    error("could not read part of the expression")
end

function symbols_in(ex, acc = Set{Symbol}())
    if ex isa Symbol
        push!(acc, ex)
    elseif ex isa Expr
        for x in ex.args[2:end]
            symbols_in(x, acc)
        end
    end
    acc
end

# ---------------------------------------------------------------------------
# LaTeX -> tokens -> Julia expression
# ---------------------------------------------------------------------------
function matching(ch::Vector{Char}, i::Int)       # ch[i] == '{'  ->  index of its '}'
    depth = 0
    for j in i:length(ch)
        if ch[j] == '{'
            depth += 1
        elseif ch[j] == '}'
            depth -= 1
            if depth == 0
                return j
            end
        end
    end
    error("unbalanced { } in the LaTeX")
end

function find_sub(ch::Vector{Char}, pat::String)
    p = collect(pat)
    m = length(p)
    for i in 1:(length(ch) - m + 1)
        if view(ch, i:i+m-1) == p
            return i
        end
    end
    return 0
end

function convert_frac(s::String)
    ch = collect(s)
    while true
        i = find_sub(ch, "\\frac")
        i == 0 && break
        j = i + 5
        while j <= length(ch) && ch[j] == ' '
            j += 1
        end
        (j <= length(ch) && ch[j] == '{') || error("\\frac needs {top}{bottom}")
        e1 = matching(ch, j)
        k = e1 + 1
        while k <= length(ch) && ch[k] == ' '
            k += 1
        end
        (k <= length(ch) && ch[k] == '{') || error("\\frac needs {top}{bottom}")
        e2 = matching(ch, k)
        top = join(ch[j+1:e1-1])
        bot = join(ch[k+1:e2-1])
        ch = vcat(ch[1:i-1], collect("((" * top * ")/(" * bot * "))"), ch[e2+1:end])
    end
    join(ch)
end

function convert_sqrt(s::String)
    ch = collect(s)
    while true
        i = find_sub(ch, "\\sqrt")
        i == 0 && break
        j = i + 5
        root = nothing
        if j <= length(ch) && ch[j] == '['
            close = findnext(isequal(']'), ch, j)
            close === nothing && error("bad \\sqrt[n]{...}")
            root = join(ch[j+1:close-1])
            j = close + 1
        end
        (j <= length(ch) && ch[j] == '{') || error("\\sqrt needs {...}")
        e = matching(ch, j)
        arg = join(ch[j+1:e-1])
        txt = root === nothing ? "sqrt(" * arg * ")" : "((" * arg * ")^(1/(" * root * ")))"
        ch = vcat(ch[1:i-1], collect(txt), ch[e+1:end])
    end
    join(ch)
end

function convert_pow(s::String)
    ch = collect(s)
    out = Char[]
    i = 1
    while i <= length(ch)
        if ch[i] == '^'
            j = i + 1
            while j <= length(ch) && ch[j] == ' '
                j += 1
            end
            if j <= length(ch) && ch[j] == '{'
                e = matching(ch, j)
                inner = convert_pow(join(ch[j+1:e-1]))
                append!(out, collect("^(" * inner * ")"))
                i = e + 1
                continue
            end
        end
        push!(out, ch[i])
        i += 1
    end
    join(out)
end

# dy/dt, d^2y/dt^2 (as \frac or plain) -> yd1, yd2, ...
const RE_FRAC_D = r"\\frac\{\s*d\s*\^?\{?(\d*)\}?\s*y\s*\}\{\s*d\s*[a-zA-Z]\s*\^?\{?\d*\}?\s*\}"
const RE_PLAIN_D = r"d\^?\{?(\d*)\}?y\s*/\s*d[tx]\^?\{?\d*\}?"

function deriv_repl(m::AbstractString)
    mm = match(r"d\s*\^?\{?(\d*)\}?\s*y", replace(m, r"^\\frac\{" => ""))
    n = (mm === nothing || isempty(mm.captures[1])) ? 1 : parse(Int, mm.captures[1])
    "yd$(n)"
end

function prime_count(m::AbstractString)
    count(c -> c == '\'', m) + length(collect(eachmatch(r"\\prime", m)))
end

prime_repl(m::AbstractString) = "yd" * string(prime_count(m))

function clean(s::AbstractString)
    s = String(s)
    s = replace(s, r"\\left|\\right" => "")
    s = replace(s, r"\\[,;:! ]" => " ")
    s = replace(s, r"\\(?:quad|qquad|displaystyle)" => " ")
    s = replace(s, "\\cdot" => "*")
    s = replace(s, "\\times" => "*")
    s = replace(s, r"\\d?frac|\\tfrac" => "\\frac")
    s = replace(s, r"\\(?:text|mathrm|operatorname)\{([^}]*)\}" => s"\1")
    s = replace(s, r"\\(arcsin|arccos|arctan|sinh|cosh|tanh|sin|cos|tan|sec|csc|cot|exp|ln|log)\b" => s"\1")
    s = replace(s, r"\\pi\b" => "pi")
    # derivatives
    s = replace(s, RE_FRAC_D => deriv_repl)
    s = replace(s, RE_PLAIN_D => deriv_repl)
    s = replace(s, r"\\ddot\{\s*y\s*\}" => "yd2")
    s = replace(s, r"\\dot\{\s*y\s*\}" => "yd1")
    s = replace(s, r"y\s*\^\{?\(\s*(\d+)\s*\)\}?" => s"yd\1")
    s = replace(s, r"y\s*\^\{((?:\\prime|')+)\}" => prime_repl)
    s = replace(s, r"y\s*\^\s*(?:\\prime|')" => "y'")
    s = replace(s, r"y\s*\\prime" => "y'")
    s = replace(s, r"y\s*('+)" => prime_repl)
    s = replace(s, r"(yd\d+|y)\s*\(\s*[tx]\s*\)" => s"\1")
    # subscripts: c_1 or c_{12} -> c1, c12
    s = replace(s, r"([A-Za-z])_\{([A-Za-z0-9]+)\}" => s"\1\2")
    s = replace(s, r"([A-Za-z])_([A-Za-z0-9])" => s"\1\2")
    s = convert_frac(s)
    s = convert_sqrt(s)
    s = convert_pow(s)
    s = replace(s, '{' => '(', '}' => ')')
    s
end

const Tok = Tuple{Symbol,String}

function tokenize(s::String)
    ch = collect(s)
    n = length(ch)
    toks = Tok[]
    i = 1
    while i <= n
        c = ch[i]
        if isspace(c)
            i += 1
        elseif isdigit(c) || (c == '.' && i < n && isdigit(ch[i + 1]))
            j = i
            while j <= n && (isdigit(ch[j]) || ch[j] == '.')
                j += 1
            end
            push!(toks, (:num, join(ch[i:j-1])))
            i = j
        elseif isletter(c) || c == '\\'
            rest = join(ch[i:end])
            if c == '\\'
                j = i + 1
                while j <= n && isletter(ch[j])
                    j += 1
                end
                j == i + 1 && error("stray backslash in the LaTeX")
                push!(toks, (:id, join(ch[i+1:j-1])))
                i = j
                continue
            end
            matched = false
            for fn in FNAMES
                if startswith(rest, fn)
                    push!(toks, (:fn, fn))
                    i += length(fn)
                    matched = true
                    break
                end
            end
            matched && continue
            md = match(r"^yd\d+", rest)
            if md !== nothing
                push!(toks, (:id, md.match))
                i += length(md.match)
                continue
            end
            if startswith(rest, "pi") && !(length(rest) > 2 && isdigit(rest[3]))
                push!(toks, (:id, "PIC"))
                i += 2
                continue
            end
            j = i + 1
            while j <= n && isdigit(ch[j])
                j += 1
            end
            id = join(ch[i:j-1])
            push!(toks, (:id, id == "e" ? "EULER" : id))
            i = j
        elseif c == '('
            push!(toks, (:lp, "("))
            i += 1
        elseif c == ')'
            push!(toks, (:rp, ")"))
            i += 1
        elseif c in "+-*/^=,"
            push!(toks, (:op, string(c)))
            i += 1
        else
            error("can't read the symbol \"$(c)\"")
        end
    end
    for (idx, t) in enumerate(toks)
        if t[1] == :fn && !(idx < length(toks) && toks[idx + 1][1] == :lp)
            error("write $(t[2]) with parentheses, like \\$(t[2])(2t)")
        end
    end
    toks
end

function to_expr(toks::Vector{Tok})
    isempty(toks) && error("an empty expression")
    out = String[]
    prev = nothing
    for (kind, text) in toks
        if prev !== nothing
            left_ok = prev in (:num, :id, :rp)
            right_ok = kind in (:num, :id, :fn, :lp)
            if left_ok && right_ok
                push!(out, "*")
            end
        end
        push!(out, text)
        prev = kind
    end
    ex = try
        Meta.parse(join(out, " "))
    catch
        error("couldn't parse that expression (check the brackets)")
    end
    if ex isa Expr && ex.head in (:incomplete, :error)
        error("couldn't parse that expression (check the brackets)")
    end
    ex
end

function split_eq(toks::Vector{Tok})
    idx = findfirst(t -> t == (:op, "="), toks)
    idx === nothing && return (nothing, toks)
    (toks[1:idx-1], toks[idx+1:end])
end

# ---------------------------------------------------------------------------
# The check
# ---------------------------------------------------------------------------
function dech(de_latex::AbstractString, sol_latex::AbstractString)
    de_toks = tokenize(clean(de_latex))
    sol_toks = tokenize(clean(sol_latex))

    de_l, de_r = split_eq(de_toks)
    if de_l === nothing
        de_l, de_r = de_toks, Tok[(:num, "0")]
    end
    sol_l, sol_r = split_eq(sol_toks)
    if sol_l !== nothing && sol_l != Tok[(:id, "y")]
        error("write the solution as  y = ...")
    end

    ids = Set{String}()
    maxord = 1
    for t in vcat(de_toks, sol_toks)
        if t[1] == :id
            push!(ids, t[2])
            md = match(r"^yd(\d+)$", t[2])
            if md !== nothing
                maxord = max(maxord, parse(Int, md.captures[1]))
            end
        end
    end
    ivar = (("x" in ids) && !("t" in ids)) ? :x : :t
    NORD[] = maxord

    de_lhs = to_expr(de_l)
    de_rhs = to_expr(de_r)
    sol = to_expr(sol_r)

    names = union(symbols_in(de_lhs), symbols_in(de_rhs), symbols_in(sol))
    (:y in symbols_in(sol)) && error("the solution shouldn't contain y on its right side")
    consts = [s for s in names if !(s in (ivar, :y, :EULER, :PIC)) && !occursin(r"^yd\d+$", string(s))]
    qnames = vcat([:y], [Symbol("yd$(k)") for k in 1:maxord])

    rng = MersenneTwister(12345)
    tvals = [0.3, 0.7, 1.1, 1.6, 2.2, 0.15]
    valid = 0
    failed = false
    worst = 0.0
    worst_t = 0.0
    for t0 in tvals
        env = Dict{Symbol,Jet}()
        for c in consts
            env[c] = constjet(0.5 + 1.5 * rand(rng))
        end
        env[:EULER] = constjet(exp(1.0))
        env[:PIC] = constjet(pi)
        env[ivar] = Jet(vcat([t0, 1.0], zeros(NORD[] - 1)))
        ysol = nothing
        try
            ysol = ev(sol, env)
        catch err
            err isa DomainError && continue
            rethrow()
        end
        vals = Dict{Symbol,Float64}()
        vals[:y] = ysol.c[1]
        fact = 1.0
        for k in 1:maxord
            fact *= k
            vals[Symbol("yd$(k)")] = fact * ysol.c[k + 1]
        end
        denv = Dict{Symbol,Jet}()
        for (kk, vv) in env
            denv[kk] = constjet(vv.c[1])
        end
        function resid(v::Dict{Symbol,Float64})
            for q in qnames
                denv[q] = constjet(v[q])
            end
            ev(de_lhs, denv).c[1] - ev(de_rhs, denv).c[1]
        end
        r0 = 0.0
        try
            r0 = resid(vals)
        catch err
            err isa DomainError && continue
            rethrow()
        end
        isfinite(r0) || continue
        # size of the terms: how much does the residual move if each y-quantity moves 0.01%?
        scale = 0.0
        for q in qnames
            v2 = copy(vals)
            v2[q] = vals[q] * 1.0001 + (vals[q] == 0 ? 1.0e-4 : 0.0)
            scale += abs(resid(v2) - r0) / 1.0e-4
        end
        scale = scale == 0 ? 1.0 : scale
        valid += 1
        rel = abs(r0) / scale
        if rel > worst
            worst = rel
            worst_t = t0
        end
        if rel > 1.0e-7
            failed = true
        end
    end
    valid >= 2 || return "couldn't evaluate that (check the domain, e.g. ln of a negative number)"
    failed ? "no" : "yes"
end

# ---------------------------------------------------------------------------
# Reading the two math boxes out of the note, and the command line
# ---------------------------------------------------------------------------
function read_input(note::String, key::String)
    txt = read(note, String)
    pat = Regex(raw"%%\s*input:\s*" * key * raw"\s*%%\s*\$\$(.*?)\$\$", "s")
    m = match(pat, txt)
    m === nothing && error("couldn't find the \"$(key)\" math box in the note")
    strip(m.captures[1])
end

function main(args)
    if length(args) == 1 && endswith(lowercase(args[1]), ".md")
        de = read_input(args[1], "de")
        sol = read_input(args[1], "solution")
    elseif length(args) >= 2
        de, sol = args[1], args[2]
    else
        println("usage: julia dech.jl \"y' = 2y\" \"y = e^{2t}\"")
        return
    end
    println(dech(de, sol))
end

if abspath(PROGRAM_FILE) == @__FILE__
    try
        main(ARGS)
    catch err
        println("error: ", sprint(showerror, err))
    end
end
