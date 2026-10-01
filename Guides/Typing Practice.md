# Typing Practice

## The 15 shortcuts you'll actually use
| Type | Get |
|---|---|
| `mk` | inline math |
| `dm` | math block |
| `//` or `a/` | fraction |
| `int` / `dint` | integral / integral with limits |
| `sr` / `rd` | squared / any power |
| `x1` | subscript (automatic) |
| `ee` | e to the power |
| `sq` | square root |
| `@` + letter or the name | Greek (`@t` θ, `rho` ρ, `tau` τ, `pi` π) |
| `Evec` | vector arrow |
| `xx` / `**` | × / · |
| `->` | → |
| `lr(` | big parentheses |
| **Tab** | jump to next blank |
| **Ctrl+Z** | undo a shortcut you didn't want |

---

## Challenges
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
