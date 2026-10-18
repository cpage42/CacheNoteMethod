---
tags: [tutoring, ap-precalc]
---
# AP Precalculus Refresher: Unit 1
Tutoring: [[Lia]] · Next: [[2 - Key Points to Cover]] · [[3 - Visualizations]] · [[4 - Practice Problems]] · [[5 - Test Review 1.1-1.6]] · [[6 - Test Review 5.1-5.3]]

> [!info] The course
> AP Precalculus has 4 units. Units 1–3 are on the AP exam; Unit 4 is not.
> - **Unit 1:** Polynomial and Rational Functions
> - **Unit 2:** Exponential and Logarithmic Functions (composition, inverses and exponentials are in [[6 - Test Review 5.1-5.3]])
> - **Unit 3:** Trigonometric and Polar Functions
> - **Unit 4:** Parameters, Vectors, and Matrices (not on the exam)
>
> The theme running through the whole course is **rate of change**: how the output changes as the input changes. It's the setup for calculus, without derivatives.

---

# Unit 1: Polynomial and Rational Functions

## 1.1 Change in tandem
Describe how the output changes as the input increases:
- **Increasing:** output goes up as input goes up. **Decreasing:** output goes down.
- **Concave up:** the rate of change is **increasing** (the graph curves like a cup ∪). **Concave down:** the rate of change is **decreasing** (like a cap ∩).
- **Zeros:** where the output is 0 (the x-intercepts).

## 1.2 Rates of change
$$\text{Average rate of change on } [a, b] = \frac{f(b) - f(a)}{b - a}$$
- It's the **slope of the secant line** through $(a, f(a))$ and $(b, f(b))$.
- **Units:** output units per input unit (like dollars per year).
- The **rate of change at a point** is approximated by average rates over smaller and smaller intervals around it. (This is the idea calculus makes exact.)

## 1.3 Linear and quadratic functions
Use **equal-length input steps** and compare output changes:

| Function | First differences (change in output) | Second differences |
|---|---|---|
| Linear | **constant** | 0 |
| Quadratic | change at a constant rate | **constant** |

- A linear function has a constant rate of change, its slope.
- For a quadratic, the average rates of change over consecutive equal intervals form an arithmetic sequence, so it's concave up or down everywhere.

## 1.4 Polynomial functions and rates of change
$$p(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0$$
- **Degree** $n$ = highest power. **Leading coefficient** $a_n$.
- **Local max:** the function switches from increasing to decreasing. **Local min:** decreasing to increasing.
- **Point of inflection:** the rate of change switches from increasing to decreasing (concavity changes).
- A degree-$n$ polynomial has at most $n - 1$ turning points, and its $n$th differences are constant.

## 1.5 Complex zeros
- A degree-$n$ polynomial has exactly $n$ zeros, counting complex ones and repeats.
- **Complex zeros come in conjugate pairs** (for real coefficients): if $a + bi$ is a zero, so is $a - bi$.
- **Multiplicity** = how many times a factor repeats. At a real zero:
  - **odd** multiplicity: the graph **crosses** the x-axis
  - **even** multiplicity: the graph **touches and bounces off**
- **Even function:** $f(-x) = f(x)$, symmetric about the y-axis. **Odd function:** $f(-x) = -f(x)$, symmetric about the origin.

## 1.6 End behavior of polynomials
Only the **leading term** matters for large $|x|$.

| | Leading coefficient + | Leading coefficient − |
|---|---|---|
| **Even degree** | up on both ends ↑↑ | down on both ends ↓↓ |
| **Odd degree** | down left, up right ↙↗ | up left, down right ↖↘ |

Written with limits: $\lim_{x\to\infty} p(x) = \infty$ and so on. Precalc uses this notation, but only for end behavior and asymptotes.

## 1.7 Rational functions and end behavior
$r(x) = \dfrac{p(x)}{q(x)}$. The end behavior comes from the ratio of the leading terms:

| Degree of top vs. bottom | End behavior |
|---|---|
| top < bottom | horizontal asymptote $y = 0$ |
| top = bottom | horizontal asymptote $y = \dfrac{\text{leading coeff. of top}}{\text{leading coeff. of bottom}}$ |
| top = bottom + 1 | **slant asymptote**, found by polynomial long division |
| top > bottom + 1 | no line; behaves like the quotient polynomial |

## 1.8–1.10 Zeros, vertical asymptotes, holes
**Factor the top and bottom completely first.**
- **Zeros:** zeros of the top that are not also zeros of the bottom.
- **Vertical asymptotes:** zeros of the bottom that **don't cancel**. Near one, the outputs blow up to $\pm\infty$.
- **Holes:** factors that **cancel**. Find the hole's height by plugging into the simplified function.
- Sign charts: rational functions can only change sign at zeros and vertical asymptotes.

## 1.11 Equivalent representations
- **Factored form** shows zeros. **Standard form** shows the leading term and y-intercept.
- **Polynomial long division:** $\dfrac{p(x)}{d(x)} = q(x) + \dfrac{r(x)}{d(x)}$. Used for slant asymptotes.
- **Binomial theorem / Pascal's triangle** for expanding $(a + b)^n$. Row 4 is 1 4 6 4 1.

## 1.12 Transformations
$$g(x) = a\,f\big(b(x - h)\big) + k$$
| Piece | Effect |
|---|---|
| $+k$ | shift up $k$ |
| $x - h$ | shift right $h$ (the sign is backwards from what it looks like) |
| $a$ | vertical stretch by $\lvert a\rvert$; flip over the x-axis if $a < 0$ |
| $b$ | horizontal stretch by $\frac{1}{\lvert b\rvert}$; flip over the y-axis if $b < 0$ |

Changes **outside** $f$ act on outputs (vertical) and behave how you'd expect. Changes **inside** act on inputs (horizontal) and behave "backwards."

## 1.13–1.14 Modeling
- Pick a model from how the data changes: constant first differences means linear, constant second differences means quadratic, and so on. Also consider the context (should it ever turn around? level off?).
- Build it from points (solve a system), from regression on a calculator, or piecewise.
- State the **assumptions and limits** of the model (domain where it makes sense).
