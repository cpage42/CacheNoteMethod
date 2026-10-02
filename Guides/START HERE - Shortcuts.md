# Math shortcuts (Latex Suite)

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

## Exporting
- **PDF:** click the `⋯` menu (top right of a note) → **Export to PDF**.
- **LaTeX (.tex):** the math is already LaTeX. Copy anything between `$...$` straight into a .tex file or Overleaf.
