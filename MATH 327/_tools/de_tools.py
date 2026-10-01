import re, sympy as sp
from sympy.parsing.sympy_parser import (parse_expr, standard_transformations, convert_xor,
    split_symbols_custom, implicit_multiplication, implicit_application, function_exponentiation)

# split "Ct" -> C*t, but keep c1, c2, lambda, alpha ... as single names
_keep = lambda name: not re.fullmatch(r'[A-Za-z]\d+|lambda|alpha|beta|gamma|delta|omega|theta|tau|sigma|mu|phi|rho|pi|oo', name)
T = standard_transformations + (split_symbols_custom(_keep), implicit_multiplication,
                                implicit_application, function_exponentiation, convert_xor)
t = sp.symbols('t')
yf = sp.Function('y')
FUNCS = ['arcsin','arccos','arctan','sinh','cosh','tanh','sin','cos','tan','sec','csc','cot','exp','ln','log']

def _group(s, i):
    """s[i] is '{' -> return (content, index after the matching '}')."""
    depth = 0
    for j in range(i, len(s)):
        if s[j] == '{': depth += 1
        elif s[j] == '}':
            depth -= 1
            if depth == 0: return s[i+1:j], j+1
    raise ValueError("unbalanced braces")

def _arg(s, i):
    """Read one argument at s[i]: a {group} or a single character."""
    while i < len(s) and s[i] == ' ': i += 1
    if s[i] == '{': return _group(s, i)
    if s[i] == '\\':
        m = re.match(r'\\[A-Za-z]+', s[i:]); return m.group(), i + m.end()
    return s[i], i+1

def to_py(s):
    s = s.strip().strip('$').strip()
    s = re.sub(r'\\(left|right|displaystyle|,|;|!|quad|qquad)', ' ', s)
    s = s.replace('\\cdot', '*').replace('\\times', '*').replace('\\dfrac', '\\frac').replace('\\tfrac', '\\frac')
    # derivatives written as fractions
    s = re.sub(r'\\frac\{\s*d\^\{?2\}?\s*y\s*\}\{\s*d\s*t\^\{?2\}?\s*\}', "y''", s)
    s = re.sub(r'\\frac\{\s*dy\s*\}\{\s*dt\s*\}', "y'", s)
    s = re.sub(r"y\^\{?\\prime\\prime\}?", "y''", s); s = re.sub(r"y\^\{?\\prime\}?", "y'", s)
    out, i = '', 0
    while i < len(s):
        if s.startswith('\\frac', i):
            a, i = _arg(s, i+5); b, i = _arg(s, i)
            out += f'(({to_py(a)})/({to_py(b)}))'
        elif s.startswith('\\sqrt', i):
            i += 5
            if i < len(s) and s[i] == '[':
                j = s.index(']', i); n = s[i+1:j]; a, i = _arg(s, j+1)
                out += f'(({to_py(a)})**(1/({n})))'
            else:
                a, i = _arg(s, i); out += f'sqrt({to_py(a)})'
        elif s[i] == '^':
            a, i = _arg(s, i+1); out += f'**({to_py(a)})'
        elif s[i] == '_':
            a, i = _arg(s, i+1); out += a + ' '      # c_{1} -> c1
        elif s[i] == '\\':
            m = re.match(r'\\([A-Za-z]+)', s[i:]); name = m.group(1); i += m.end()
            out += ' ' + {'ln': 'log', 'pi': 'pi', 'infty': 'oo'}.get(name, name) + ' '
        elif s[i] in '{}':
            out += '(' if s[i] == '{' else ')'; i += 1
        else:
            out += s[i]; i += 1
    # e^(...) -> exp(...)
    out = re.sub(r'(?<![A-Za-z])e\s*\*\*', 'E**', out)
    return out

def parse(s, local=None):
    d = {'t': t, 'E': sp.E, 'e': sp.E, 'pi': sp.pi, 'I': sp.I, 'i': sp.I}
    d.update(local or {})
    return parse_expr(to_py(s), local_dict=d, transformations=T)

def parse_matrix(s):
    body = re.search(r'\\begin\{[pbvBV]?matrix\}(.*?)\\end\{[pbvBV]?matrix\}', s, re.S)
    body = body.group(1) if body else s
    rows = [r for r in re.split(r'\\\\', body) if r.strip()]
    return sp.Matrix([[sp.nsimplify(parse(c)) for c in r.split('&')] for r in rows])

def parse_ode(s):
    s = s.strip().strip('$')
    lhs, rhs = (s.split('=', 1) + ['0'])[:2]
    Y = yf(t)
    loc = {'t': t, 'E': sp.E, 'e': sp.E, 'pi': sp.pi,
           'YY': Y, 'DA': Y.diff(t), 'DB': Y.diff(t, 2)}
    def conv(x):
        x = to_py(x).replace("y''", " DB ").replace("y'", " DA ").replace("y", " YY ")
        return parse_expr(x, local_dict=loc, transformations=T)
    return sp.Eq(conv(lhs), conv(rhs))

def parse_solution(s):
    s = s.strip().strip('$')
    if '=' in s: s = s.split('=', 1)[1]          # drop "y ="
    return parse(s)


# ---------- eigenvalue calculator ----------
def eigen_report(A):
    A = sp.Matrix(A)
    t = sp.symbols('t', real=True)
    A = A.applyfunc(sp.nsimplify)          # 0.4 -> 2/5 so answers stay exact
    lam = sp.symbols('lambda')
    I2 = sp.eye(A.rows)

    def nice(v):                            # scale a vector to small whole numbers when possible
        v = sp.simplify(v)
        if all(x.is_rational for x in v) and any(x != 0 for x in v):
            from math import gcd, lcm
            v = v * lcm(*[int(sp.fraction(x)[1]) for x in v])
            v = v / gcd(*[int(x) for x in v if x != 0])
            return v
        nz = [x for x in v if x != 0]
        return sp.simplify(v / nz[-1]) if nz else v

    print("Characteristic eq:", sp.factor(A.charpoly(lam).as_expr()), "= 0")
    print(f"trace = {A.trace()},  det = {A.det()}\n")

    pairs = A.eigenvects()
    for val, mult, vecs in pairs:
        print(f"lambda = {val}   (multiplicity {mult})")
        for v in vecs:
            print(f"   eigenvector v = {list(nice(v))}")
    print()

    vals = [complex(sp.N(v)) for v, _, _ in pairs]
    if any(abs(z.imag) > 1e-12 for z in vals):
        # complex pair: use one eigenvalue, split e^(lambda t) v into real and imaginary parts
        val, _, vecs = next(p for p in pairs if sp.im(p[0]) > 0)
        v = nice(vecs[0])
        x = sp.expand_complex(sp.exp(val * t) * v)
        re, im = x.applyfunc(sp.re), x.applyfunc(sp.im)
        print("Complex eigenvalues -> real solutions from Re and Im of e^(lambda t) v:")
        print("  x(t) = c1", list(sp.simplify(re)), "\n       + c2", list(sp.simplify(im)))
        a = sp.re(val)
        kind = "spiral sink" if a < 0 else "spiral source" if a > 0 else "center"
    elif len(pairs) == 1 and len(pairs[0][2]) == 1 and A.rows == 2:
        # repeated eigenvalue with only one eigenvector: need a generalized eigenvector w
        val, _, vecs = pairs[0]
        v = nice(vecs[0])
        w_sym = sp.Matrix(sp.symbols('w1 w2'))
        sol = sp.solve(list((A - val * I2) * w_sym - v), list(w_sym), dict=True)[0]
        w = w_sym.subs(sol).subs({s: 0 for s in w_sym})
        print("Repeated eigenvalue, only one eigenvector -> generalized eigenvector w with (A - lambda I) w = v:")
        print(f"   w = {list(w)}")
        print(f"  x(t) = c1 e^({val} t) {list(v)}  +  c2 e^({val} t) ( t {list(v)} + {list(w)} )")
        kind = "degenerate node (sink)" if val < 0 else "degenerate node (source)" if val > 0 else "degenerate"
    else:
        terms = [(val, nice(v)) for val, _, vs in pairs for v in vs]
        print("General solution:")
        print("  x(t) = " + "  +  ".join(f"c{k} e^(({val}) t) {list(v)}" for k, (val, v) in enumerate(terms, 1)))
        r = [z.real for z in vals]
        kind = ("saddle" if min(r) < 0 < max(r) else "sink (stable node)" if max(r) < 0
                else "source (unstable node)" if min(r) > 0 else "has a zero eigenvalue (line of equilibria)")
    print("\nEquilibrium type:", kind)


# ---------- reading inputs from the note ----------
def read_input(note_path, name):
    """Return the LaTeX in the first $$...$$ (or $...$) block after the marker  %% input: name %%"""
    text = open(note_path, encoding="utf-8").read()
    m = re.search(r"%%\s*input:\s*" + re.escape(name) + r"\s*%%(.*?)(\$\$(.*?)\$\$|\$(.*?)\$)", text, re.S)
    if not m:
        raise SystemExit(f"Couldn't find the input box '%% input: {name} %%' followed by a math block.")
    return (m.group(3) or m.group(4)).strip()


# ---------- solution checker ----------
def check_solution(de_latex, sol_latex):
    eq = parse_ode(de_latex)
    s = parse_solution(sol_latex)
    Y = yf(t)
    sub = lambda e: e.subs(Y.diff(t, 2), s.diff(t, 2)).subs(Y.diff(t), s.diff(t)).subs(Y, s)
    lhs, rhs = sp.simplify(sub(eq.lhs)), sp.simplify(sub(eq.rhs))
    print("DE read as:       ", eq)
    print("Solution read as:  y(t) =", s, "\n")
    if sp.simplify(lhs - rhs) == 0:
        print("YES: it's a solution!")
    else:
        print("NO: not a solution.")
        print("   plugging in gives  LHS =", lhs)
        print("                      RHS =", rhs)


# ---------- reading "x1 = ..." lines from the note ----------
def read_system(note_path, keys=("x1", "x2", "y1", "y2")):
    """Build A from lines like  x1 = -5  :  x' = x1*x + x2*y,  y' = y1*x + y2*y"""
    text = open(note_path, encoding="utf-8").read()
    vals = {}
    for k in keys:
        m = re.search(rf"^>?\s*{k}\s*=[ \t]*(.*)$", text, re.M)
        raw = m.group(1).strip() if m else ""
        if raw == "":
            raise SystemExit(f"Fill in {k} = ... (it's empty).")
        vals[k] = sp.nsimplify(parse(raw))
    A = sp.Matrix([[vals["x1"], vals["x2"]], [vals["y1"], vals["y2"]]])
    X, Yv = sp.symbols('x y')
    show = lambda e: str(e).replace('*', '')
    print("System:  x' =", show(vals['x1']*X + vals['x2']*Yv))
    print("         y' =", show(vals['y1']*X + vals['y2']*Yv), "\n")
    return A
