# eigen.jl -- eigenvalues and eigenvectors of a 2x2 matrix [a b; c d].
#
#   julia eigen.jl 1 2 3 4
#   julia eigen.jl "A = 1 2 3 4"
#   julia eigen.jl "Eigen Calculator.md"     (reads the line  A = a b c d  from the note)
#
# The four numbers are the matrix row by row. A value can be an integer, a decimal,
# a fraction like 1/2, or use sqrt() and pi (no spaces inside one value).
# Output is exactly four lines: lambda1, lambda2, v1, v2.
# Exact (fractions and square roots) whenever the entries are rational.

const Q = Rational{BigInt}

# ---------- exact helpers ----------

# n >= 0 -> (s, k) with n == s^2 * k and k squarefree (for any realistic n)
function sqfree(n::BigInt)
    n == 0 && return (big(1), big(0))
    s = big(1)
    k = n
    f = big(2)
    while f * f <= k && f < 1000000
        f2 = f * f
        while k % f2 == 0
            k = div(k, f2)
            s *= f
        end
        f += (f == 2 ? 1 : 2)
    end
    return (s, k)
end

# a number  p + q*sqrt(k)   (k < 0 means q*sqrt(-k)*i; k == 1 means q == 0)
struct Sd
    p::Q
    q::Q
end

function rstr(r::Q)
    return denominator(r) == 1 ? string(numerator(r)) : string(numerator(r), "/", denominator(r))
end

function sdstr(x::Sd, k::BigInt)
    x.q == 0 && return rstr(x.p)
    r = k == -1 ? "i" : (k < 0 ? string("sqrt(", -k, ")*i") : string("sqrt(", k, ")"))
    aq = abs(x.q)
    body = aq == 1 ? r : (denominator(aq) == 1 ? string(rstr(aq), "*", r) : string("(", rstr(aq), ")*", r))
    if x.p == 0
        return (x.q < 0 ? "-" : "") * body
    end
    return string(rstr(x.p), x.q < 0 ? " - " : " + ", body)
end

function fval(x::Sd, k::BigInt)
    return k > 0 ? Float64(x.p) + Float64(x.q) * sqrt(Float64(k)) : Float64(x.p)
end

fmt(x::Float64) = string(round(abs(x) < 1e-12 ? 0.0 : x, sigdigits = 5))

# eigenvector for eigenvalue lam, scaled to the simplest integer form
function eigvec(a::Q, b::Q, c::Q, d::Q, lam::Sd, k::BigInt)
    if b != 0
        e1 = Sd(b, 0); e2 = Sd(lam.p - a, lam.q)
    else
        e1 = Sd(lam.p - d, lam.q); e2 = Sd(c, 0)
    end
    comps = Q[e1.p, e1.q, e2.p, e2.q]
    L = reduce(lcm, [denominator(x) for x in comps])
    ints = BigInt[numerator(x * L) for x in comps]
    g = reduce(gcd, ints)
    g == 0 && error("could not build an eigenvector")
    ints = BigInt[div(x, g) for x in ints]
    # make the first nonzero entry positive
    for i in (1, 3)
        s = k > 0 ? Float64(ints[i]) + Float64(ints[i + 1]) * sqrt(Float64(k)) :
            (ints[i] != 0 ? Float64(ints[i]) : Float64(ints[i + 1]))
        if abs(s) > 1e-12
            if s < 0
                ints = BigInt[-x for x in ints]
            end
            break
        end
    end
    return (Sd(ints[1] // 1, ints[2] // 1), Sd(ints[3] // 1, ints[4] // 1))
end

lamstr(x::Sd, k::BigInt) = k > 1 ? string(sdstr(x, k), "   ~ ", fmt(fval(x, k))) : sdstr(x, k)

function vecstr(v, k::BigInt)
    s = string("[", sdstr(v[1], k), ", ", sdstr(v[2], k), "]")
    if k > 1
        s = string(s, "   ~ [", fmt(fval(v[1], k)), ", ", fmt(fval(v[2], k)), "]")
    end
    return s
end

function exact(a::Q, b::Q, c::Q, d::Q)
    one = big(1)
    if b == 0 && c == 0
        # diagonal: eigenvalues a and d with the axis vectors
        pairs = [(a, "[1, 0]"), (d, "[0, 1]")]
        if d < a
            pairs = [pairs[2], pairs[1]]
        end
        println("lambda1 = ", rstr(pairs[1][1]))
        println("lambda2 = ", rstr(pairs[2][1]))
        println("v1 = ", pairs[1][2])
        println("v2 = ", pairs[2][2])
        return
    end
    tr = a + d
    disc = tr * tr - 4 * (a * d - b * c)
    half = tr / 2
    k = one
    rq = 0 // 1
    if disc != 0
        n = numerator(disc)
        m = denominator(disc)
        (s, kk) = sqfree(abs(n * m))
        k = n < 0 ? -kk : kk
        rq = s // m
    end
    if k == 1
        l1 = Sd(half - rq / 2, 0)
        l2 = Sd(half + rq / 2, 0)
    else
        l1 = Sd(half, -rq / 2)
        l2 = Sd(half, rq / 2)
    end
    println("lambda1 = ", lamstr(l1, k))
    println("lambda2 = ", lamstr(l2, k))
    println("v1 = ", vecstr(eigvec(a, b, c, d, l1, k), k))
    if disc == 0
        println("v2 = (repeated eigenvalue: no second independent eigenvector)")
    else
        println("v2 = ", vecstr(eigvec(a, b, c, d, l2, k), k))
    end
end

# ---------- decimal fallback (entries like sqrt(2) or pi) ----------

function cstr(z::Complex{Float64}, tol::Float64)
    abs(imag(z)) <= tol && return fmt(real(z))
    return string(fmt(real(z)), imag(z) < 0 ? " - " : " + ", fmt(abs(imag(z))), "i")
end

function approx(a::Float64, b::Float64, c::Float64, d::Float64)
    tol = 1e-12 * max(1.0, abs(a), abs(b), abs(c), abs(d))
    tr = a + d
    disc = tr * tr - 4 * (a * d - b * c)
    s = sqrt(complex(disc))
    lams = [(tr - s) / 2, (tr + s) / 2]
    vecs = Vector{Vector{Complex{Float64}}}()
    for l in lams
        if abs(b) > tol
            v = Complex{Float64}[b, l - a]
        elseif abs(c) > tol
            v = Complex{Float64}[l - d, c]
        else
            v = abs(l - a) <= tol ? Complex{Float64}[1, 0] : Complex{Float64}[0, 1]
        end
        j = abs(v[1]) > tol ? 1 : 2
        push!(vecs, v ./ v[j])
    end
    println("lambda1 = ", cstr(lams[1], tol))
    println("lambda2 = ", cstr(lams[2], tol))
    println("v1 = [", cstr(vecs[1][1], tol), ", ", cstr(vecs[1][2], tol), "]")
    println("v2 = [", cstr(vecs[2][1], tol), ", ", cstr(vecs[2][2], tol), "]")
end

# ---------- reading the four values ----------

function qsqrt(x)
    if x isa Q
        x < 0 && error("sqrt of a negative number")
        n = numerator(x)
        m = denominator(x)
        rn = isqrt(n)
        rm = isqrt(m)
        rn * rn == n && rm * rm == m && return rn // rm
        return sqrt(Float64(x))
    end
    x < 0 && error("sqrt of a negative number")
    return sqrt(x)
end

function qpow(x, y)
    if x isa Q && y isa Q && denominator(y) == 1 && abs(numerator(y)) < 10000
        return x ^ Int(numerator(y))
    end
    return Float64(x) ^ Float64(y)
end

function ev(ex)
    if ex isa Integer
        return Q(ex)
    elseif ex isa AbstractFloat
        return rationalize(BigInt, Float64(ex))
    elseif ex isa Symbol
        (ex == :pi || ex == :π) && return Float64(pi)
        error("unknown symbol $ex")
    elseif ex isa Expr && ex.head == :call
        op = ex.args[1]
        args = [ev(x) for x in ex.args[2:end]]
        if op == :+
            return reduce(+, args)
        elseif op == :-
            return length(args) == 1 ? -args[1] : args[1] - args[2]
        elseif op == :*
            return reduce(*, args)
        elseif op == :/
            return args[1] / args[2]
        elseif op == :^
            return qpow(args[1], args[2])
        elseif op == :sqrt || op == :√
            return qsqrt(args[1])
        end
    end
    error("unsupported expression")
end

function parse_values(s::AbstractString)
    s = replace(s, r"^\s*[A-Za-z]\s*=" => "")
    s = replace(s, r"[\[\],;]" => " ")
    toks = split(strip(s))
    length(toks) == 4 || error("need 4 values (a b c d, row by row), got $(length(toks))")
    vals = Any[]
    for t in toks
        v = try
            ev(Meta.parse(t))
        catch
            error("can't read the value '$t'")
        end
        push!(vals, v)
    end
    return vals
end

function read_line(note::AbstractString)
    for ln in eachline(note)
        m = match(r"^[>\s]*A\s*=\s*(\S.*)$", ln)
        m !== nothing && return String(m.captures[1])
    end
    error("no line like  A = 1 2 3 4  in the note")
end

function main(args)
    if length(args) == 1 && endswith(lowercase(args[1]), ".md") && isfile(args[1])
        txt = read_line(args[1])
    else
        txt = join(args, " ")
    end
    vals = parse_values(txt)
    if all(v -> v isa Q, vals)
        exact(vals[1], vals[2], vals[3], vals[4])
    else
        approx(Float64(vals[1]), Float64(vals[2]), Float64(vals[3]), Float64(vals[4]))
    end
end

if abspath(PROGRAM_FILE) == @__FILE__
    try
        main(ARGS)
    catch e
        msg = e isa ErrorException ? e.msg : sprint(showerror, e)
        println("error: ", msg)
    end
end
