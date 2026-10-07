# Math shortcuts (Latex Suite)
Back to [[Home]] · See also [[Plugin Guide]]

Type these and they expand instantly. **Tab** jumps to the next blank to fill in.

## Getting into math mode
| Type | Get |
|---|---|
| `mk` | inline math `$ $` (math inside a sentence) |
| `dm` | display math block `$$ $$` (centered on its own line) |

Everything below only works **inside** math mode.

## The big ones
| Type | Get | Looks like |
|---|---|---|
| `//` | fraction | $\frac{a}{b}$ |
| `3/` | fraction with 3 on top (type anything, then `/`) | $\frac{3}{}$ |
| `int` | integral | $\int \, dx$ |
| `dint` | definite integral (Tab through limits) | $\int_{0}^{1} \, dx$ |
| `sr` | squared | $x^{2}$ |
| `cb` | cubed | $x^{3}$ |
| `rd` | any power | $x^{n}$ |
| `_` | subscript | $x_{0}$ |
| `x1` | auto-subscript (letter + number) | $x_{1}$ |
| `sq` | square root | $\sqrt{x}$ |
| `ee` | e to the power | $e^{-t/\tau}$ |
| `invs` | inverse | $^{-1}$ |
| `lim` | limit | $\lim_{n \to \infty}$ |
| `sum` | sum (type `sum` then Tab) | $\sum_{i=1}^{N}$ |
| `ddt` | d/dt | $\frac{d}{dt}$ |
| `par` | partial derivative | $\frac{\partial y}{\partial x}$ |
| `ooo` | infinity | $\infty$ |

## Greek letters: `@` + letter
`@a` α · `@b` β · `@g` γ · `@d` δ · `@D` Δ · `@e` ε · `@t` θ · `@l` λ · `@s` σ · `@o` ω · `@O` Ω
Also just type the name: `rho` → ρ, `tau` → τ, `pi` → π, `mu` → μ, `phi` → φ

## Symbols
| Type | Get |
|---|---|
| `xx` | × |
| `**` | · (dot product) |
| `+-` | ± |
| `->` | → |
| `=>` | ⟹ (implies) |
| `lrh` | ⇌ (equilibrium, `\rightleftharpoons`) |
| `@E` | ℰ (emf, `\mathcal{E}`) |
| `!=` | ≠ |
| `<=` / `>=` | ≤ / ≥ |
| `approx` | ≈ |
| `prop` | ∝ |
| `del` / `nabl` | ∇ |
| `oint` | ∮ |
| `deg` | ° |

## Decorations (letter first, then the word)
| Type | Get |
|---|---|
| `Evec` | $\vec{E}$ |
| `rhat` | $\hat{r}$ |
| `xdot` | $\dot{x}$ |
| `xbar` | $\bar{x}$ |

## Functions: type them normally
`sin`, `cos`, `tan`, `ln`, `log`, `exp` are formatted automatically.

## Brackets
| Type | Get |
|---|---|
| `lr(` | big parentheses that grow to fit a fraction |
| `lr[` | big brackets |
| `lr\|` | big absolute value |
| `avg` | ⟨ ⟩ |

## Editing tricks
- **Select something, then type `C`**: crosses it out (for showing cancellation).
- **Select something, then type `S`**: puts it under a square root.
- **Ctrl+Z** right after an expansion undoes it (if a shortcut fires when you didn't want it).

## Try it: charge from a decaying current
1. On a new line, type `dm` (you're now in a math block).
2. Type `q = dint`. An integral appears with the lower limit highlighted.
3. Type `0`, press **Tab**, type `t` (upper limit), press **Tab**.
4. Type `I0 ee -t/tau` (the integrand), then press **Tab** until the `x` in `dx` is highlighted, and type `t`.

You should end up with:
$$
q = \int_{0}^{t} I_{0} e^{ -\frac{t}{\tau} } \, dt
$$

It feels slow the first few times. After a day or two it's faster than writing by hand.

---

## Practice challenges
Type each one in a `dm` block below it. Try not to peek. The answers are in the collapsed boxes (click the arrow to open).

### Level 1: warm-up
1. Ohm's law and power: $V = IR$, $P = I^{2}R$
2. Resistance of a wire: $R = \frac{\rho L}{A}$
3. Decaying current: $I(t) = I_{0}e^{-t/\tau}$

> [!tip]- Answer 1–3
> ```
> V = IR, \quad P = I^{2}R
> R = \frac{\rho L}{A}
> I(t) = I_{0}e^{ -t/\tau }
> ```

### Level 2: integrals
4. Charge from current:
   $$q = \int_{0}^{t} I_{0}e^{-t'/\tau}\,dt' = \tau I_{0}\left(1 - e^{-t/\tau}\right)$$
5. Current from non-uniform density:
   $$I = \int_{0}^{R} J_{0}\left(1 - \frac{r}{R}\right) 2\pi r\,dr = \frac{\pi J_{0}R^{2}}{3}$$
6. Coax leakage resistance:
   $$R = \int_{a}^{b} \frac{\rho\,dr}{2\pi rL} = \frac{\rho}{2\pi L}\ln\frac{b}{a}$$

> [!tip]- Answer 4–6
> ```
> q = \int_{0}^{t} I_{0}e^{ -t'/\tau } \, dt' = \tau I_{0}\left( 1 - e^{ -t/\tau } \right)
> I = \int_{0}^{R} J_{0}\left( 1 - \frac{r}{R} \right) 2\pi r \, dr = \frac{\pi J_{0}R^{2}}{3}
> R = \int_{a}^{b} \frac{\rho \, dr}{2\pi rL} = \frac{\rho}{2\pi L}\ln \frac{b}{a}
> ```

### Level 3: vectors, Greek, and E&M
7. Coulomb's law:
   $$\vec{F} = \frac{1}{4\pi\varepsilon_{0}}\frac{q_{1}q_{2}}{r^{2}}\hat{r}$$
8. Gauss's law:
   $$\oint \vec{E}\cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_{0}}$$
9. Potential from a field:
   $$V_{b} - V_{a} = -\int_{a}^{b} \vec{E}\cdot d\vec{\ell}$$

> [!tip]- Answer 7–9
> ```
> \vec{F} = \frac{1}{4\pi\varepsilon_{0}} \frac{q_{1}q_{2}}{r^{2}}\hat{r}
> \oint \vec{E}\cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_{0}}
> V_{b} - V_{a} = -\int_{a}^{b} \vec{E}\cdot d\vec{\ell}
> ```
> Hints: `:e` gives ε (the curly one), `oint` gives ∮, `rhat` gives r̂, `text` gives upright text for "enc".

### Level 4: differential equations (MATH 327)
10. Separable DE and its solution:
    $$\frac{dy}{dt} = ky \implies y(t) = y_{0}e^{kt}$$
11. Harmonic oscillator:
    $$m\ddot{x} + b\dot{x} + kx = 0, \qquad \omega_{0} = \sqrt{\frac{k}{m}}$$
12. Eigenvalue solution to a system:
    $$\vec{x}(t) = c_{1}e^{\lambda_{1}t}\vec{v}_{1} + c_{2}e^{\lambda_{2}t}\vec{v}_{2}$$

> [!tip]- Answer 10–12
> ```
> \frac{dy}{dt} = ky \implies y(t) = y_{0}e^{ kt }
> m\ddot{x} + b\dot{x} + kx = 0, \qquad \omega_{0} = \sqrt{ \frac{k}{m} }
> \vec{x}(t) = c_{1}e^{ \lambda_{1}t }\vec{v}_{1} + c_{2}e^{ \lambda_{2}t }\vec{v}_{2}
> ```
> Hints: `xddot` → ẍ, `xdot` → ẋ, `=>` → ⟹, `@l` → λ.

### Boss level: tapered conductor, full derivation
13. Type the whole thing, line by line, in one `dm` block. Type `align` first, then press **Enter** for each new line.
$$
\begin{align}
r(x) &= a + \frac{(b-a)x}{L} \\
R &= \int_{0}^{L} \frac{\rho\,dx}{\pi r(x)^{2}} \\
&= \frac{\rho}{\pi}\cdot\frac{L}{b-a}\int_{a}^{b} u^{-2}\,du \\
&= \frac{\rho L}{\pi(b-a)}\left(\frac{1}{a} - \frac{1}{b}\right) = \frac{\rho L}{\pi ab}
\end{align}
$$

> [!tip]- Answer 13
> Type `align` for the multi-line block. Press **Tab** for `&` (it marks where lines line up, so put it before the `=`) and **Enter** for a new line.
> ```
> \begin{align}
> r(x) &= a + \frac{(b-a)x}{L} \\
> R &= \int_{0}^{L} \frac{\rho \, dx}{\pi r(x)^{2}} \\
> &= \frac{\rho}{\pi}\cdot \frac{L}{b-a}\int_{a}^{b} u^{-2} \, du \\
> &= \frac{\rho L}{\pi(b-a)}\left( \frac{1}{a}-\frac{1}{b} \right) = \frac{\rho L}{\pi ab}
> \end{align}
> ```

---

## Matrices, multiple integrals, contour integrals

### Shortcuts
| Type | Get |
|---|---|
| `pmat` | matrix in ( ) |
| `bmat` | matrix in [ ] |
| `vmat` | determinant bars \| \| |
| `iden3` | 3×3 identity matrix (any number) |
| `cases` | piecewise function |
| `iint` / `iiint` | ∬ / ∭ |
| `oint` | ∮ (closed/contour integral) |
| `_` after the integral | put the region or curve underneath (∮_C, ∭_V) |

**Inside a matrix:** **Tab** = next column (`&`), **Enter** = next row (`\\`), **Shift+Enter** = a real new line.

### Challenges
14. A 2×2 system:
    $$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 3 & -4 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix}$$
15. Characteristic equation:
    $$\det(A - \lambda I) = \begin{vmatrix} 1-\lambda & 2 \\ 3 & -4-\lambda \end{vmatrix} = 0$$
16. Total charge in a volume:
    $$Q = \iiint_{V} \rho(r)\,dV = \int_{0}^{2\pi}\int_{0}^{\pi}\int_{0}^{R} \rho(r)\,r^{2}\sin\theta\,dr\,d\theta\,d\phi$$
17. Contour integral and circulation:
    $$\oint_{C} \vec{E}\cdot d\vec{\ell} = 0 \qquad \oint_{C} f(z)\,dz = 2\pi i \sum \operatorname{Res}$$
18. Piecewise field of a charged sphere:
    $$E(r) = \begin{cases} \dfrac{kQr}{R^{3}} & r < R \\[4pt] \dfrac{kQ}{r^{2}} & r \geq R \end{cases}$$

> [!tip]- Answer 14–18
> ```
> \begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 3 & -4 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix}
> \det(A - \lambda I) = \begin{vmatrix} 1-\lambda & 2 \\ 3 & -4-\lambda \end{vmatrix} = 0
> Q = \iiint_{V} \rho(r) \, dV = \int_{0}^{2\pi} \int_{0}^{\pi} \int_{0}^{R} \rho(r) \, r^{2}\sin\theta \, dr \, d\theta \, d\phi
> \oint_{C} \vec{E}\cdot d\vec{\ell} = 0 \qquad \oint_{C} f(z) \, dz = 2\pi i \sum \operatorname{Res}
> E(r) = \begin{cases} \dfrac{kQr}{R^{3}} & r < R \\ \dfrac{kQ}{r^{2}} & r \geq R \end{cases}
> ```
> Hints: for 16, use `dint` three times, and each one gives you its own `dx` to rename. For 18, type `cases`, then Tab between the value and the condition.

---

## Exporting
- **PDF:** click the `⋯` menu (top right of a note) → **Export to PDF**.
- **LaTeX (.tex):** the math is already LaTeX. Copy anything between `$...$` straight into a .tex file or Overleaf.
