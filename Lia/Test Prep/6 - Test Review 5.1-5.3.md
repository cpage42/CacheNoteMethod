---
tags: [tutoring, ap-precalc]
---
# Test Review: 5.1–5.3 (Composition, Inverses, Exponential Functions)
Tutoring: [[Lia]] · [[1 - Unit 1 Refresher]] · [[2 - Key Points to Cover]] · [[3 - Visualizations]] · [[4 - Practice Problems]] · [[5 - Test Review 1.1-1.6]]

> [!info] Section numbers
> These are textbook section numbers, not AP's. 5.1 = composite functions, 5.2 = one-to-one functions and inverses, 5.3 = exponential functions (the usual textbook order). In AP numbering this is 2.3–2.5 and 2.7–2.8. If her book splits it differently, adjust.

*Section-by-section review with worked examples and a few graphs, then a practice test (about 50 minutes) with the answer key at the bottom.*

---

## 5.1 Composite functions

### What it means
$$(f \circ g)(x) = f(g(x))$$
**Inside first.** Put $x$ into $g$, then put that output into $f$. The output of $g$ becomes the input of $f$.

- Order matters: usually $f(g(x)) \ne g(f(x))$.
- $(f \circ g)(x)$ is **not** multiplication. That would be $(f\cdot g)(x)$.

### Evaluating
- **From formulas:** work from the inside out. $f(g(1))$: find $g(1)$ first, then plug that number into $f$.
- **From a table:** look up $g(1)$ in the $g$ row, then find **that** number in the $x$ row and read across to $f$.
- **From a graph:** read $g(1)$ off the graph of $g$ (a y-value), then use it as an x-value on the graph of $f$.

### Finding the formula
Replace every $x$ in $f$ with the whole expression $g(x)$, in parentheses.

> [!example] Example
> $f(x) = x^2 - 1$, $g(x) = 3x + 2$.
> - $f(g(x)) = (3x + 2)^2 - 1 = 9x^2 + 12x + 3$
> - $g(f(x)) = 3(x^2 - 1) + 2 = 3x^2 - 1$

### Domain of a composite
$x$ is in the domain of $f(g(x))$ if **both**:
1. $x$ is in the domain of $g$ (you can do the first step), **and**
2. $g(x)$ is in the domain of $f$ (you can do the second step).

Find the domain **before simplifying**. Simplifying can hide a restriction.

> [!example] Example
> $f(x) = \dfrac{2}{x - 1}$, $g(x) = \dfrac4x$.
> 1. $g$ needs $x \ne 0$.
> 2. $f$ needs its input $\ne 1$: $\ \frac4x \ne 1$, so $x \ne 4$.
>
> Domain of $f(g(x))$: all reals except $0$ and $4$. (The simplified form $\frac{2x}{4 - x}$ hides the $x \ne 0$ restriction.)

### Decomposing
Spot an "inside" piece and an "outside" action.
- $h(x) = (2x + 5)^3$: inside $g(x) = 2x + 5$, outside $f(x) = x^3$.
- $h(x) = \sqrt{x^2 + 1}$: inside $g(x) = x^2 + 1$, outside $f(x) = \sqrt{x}$.

### In context
Composition chains two relationships together. If $n(t)$ = shirts made in $t$ hours and $C(n)$ = cost of making $n$ shirts, then $C(n(t))$ = **cost of $t$ hours of production**. The units line up: hours → shirts → dollars.

---

## 5.2 One-to-one functions and inverses

### One-to-one
A function is **one-to-one** if every output comes from exactly one input. No two different $x$'s give the same $y$.
- **Points/table:** no repeated $y$-values.
- **Graph: horizontal line test.** If any horizontal line hits the graph more than once, it's not one-to-one.
- Always increasing or always decreasing implies one-to-one.

```desmos-graph
left=-4; right=4; bottom=-2; top=8; height=230
---
y=x^{2}|#2a78d6
y=4|dashed|#eb6834
(-2,4)|label:x = −2|#eb6834
(2,4)|label:x = 2|#eb6834
```
*$x^2$ fails: $y = 4$ comes from both $x = 2$ and $x = -2$.*

### Inverses: switching inputs and outputs
Only one-to-one functions have inverses. $f^{-1}$ **undoes** $f$:
$$f(a) = b \iff f^{-1}(b) = a$$

| Form | How to get $f^{-1}$ |
|---|---|
| Points / table | **Swap** each pair: $(a, b) \to (b, a)$ |
| Graph | **Reflect over $y = x$** |
| Formula | Write $y = f(x)$, **swap $x$ and $y$**, solve for $y$ |

- **Domain and range swap:** domain of $f^{-1}$ = range of $f$, and range of $f^{-1}$ = domain of $f$.
- $f^{-1}(x)$ does **not** mean $\frac{1}{f(x)}$.

### Coordinate mapping and reflection
Every point $(a, b)$ on $f$ becomes $(b, a)$ on $f^{-1}$. Swapping the coordinates is exactly a reflection across the line $y = x$.

```desmos-graph
left=-3; right=9; bottom=-3; top=9; height=300
---
y=2x+1|#2a78d6
y=\frac{x-1}{2}|#eb6834
y=x|dashed|#8a8985
(1,3)|label:(1, 3)|#2a78d6
(3,1)|label:(3, 1)|#eb6834
(3,7)|label:(3, 7)|#2a78d6
(7,3)|label:(7, 3)|#eb6834
```

### Finding an inverse formula
> [!example] Example
> $f(x) = \dfrac{x + 1}{x - 2}$
> 1. $y = \dfrac{x + 1}{x - 2}$
> 2. Swap: $x = \dfrac{y + 1}{y - 2}$
> 3. Multiply up: $x(y - 2) = y + 1$, so $xy - 2x = y + 1$
> 4. Get the $y$ terms together: $xy - y = 2x + 1$, so $y(x - 1) = 2x + 1$
> 5. $f^{-1}(x) = \dfrac{2x + 1}{x - 1}$
>
> The domain of $f$ is $x \ne 2$, so the range of $f^{-1}$ is $y \ne 2$. The domain of $f^{-1}$ is $x \ne 1$, so the range of $f$ is $y \ne 1$.

### Checking
$f$ and $g$ are inverses if **both** $f(g(x)) = x$ and $g(f(x)) = x$.

### Restricting the domain
A function that isn't one-to-one can get an inverse if you keep only one "side" of it.

> [!example] Example
> $f(x) = (x - 2)^2$ fails the horizontal line test. Restrict it to $x \ge 2$ (the right half of the parabola). Then:
> - Swap: $x = (y - 2)^2$
> - Root: $\sqrt{x} = y - 2$ (the positive root, since $y \ge 2$)
> - $f^{-1}(x) = 2 + \sqrt{x}$, with domain $x \ge 0$ and range $y \ge 2$

```desmos-graph
left=-1; right=8; bottom=-1; top=8; height=280
---
y=(x-2)^{2}\left\{x\ge2\right\}|#2a78d6
y=(x-2)^{2}\left\{x<2\right\}|dotted|#c0c0c0
y=2+\sqrt{x}|#eb6834
y=x|dashed|#8a8985
```

---

## 5.3 Exponential functions

### The form
$$f(x) = ab^x \qquad a \ne 0,\ b > 0,\ b \ne 1$$
- $a$ = **initial value** ($f(0) = a$). $b$ = **growth factor**.
- $b > 1$: growth. $0 < b < 1$: decay.
- **Percent:** growth by $r$ means $b = 1 + r$; decay by $r$ means $b = 1 - r$.

### Graph features (for $a > 0$)
| Feature | $y = b^x$ |
|---|---|
| Domain | all reals |
| Range | $y > 0$ |
| Horizontal asymptote | $y = 0$ |
| y-intercept | $(0, 1)$ (or $(0, a)$ for $ab^x$) |
| Passes through | $(1, b)$ |
| One-to-one? | Yes, so it has an inverse (that's logs, next section) |

**Transformations** work like any other function: $f(x) = 2^{x-1} + 3$ is $2^x$ shifted right 1 and up 3. That moves the asymptote to $y = 3$, so the range becomes $y > 3$.

```desmos-graph
left=-4; right=5; bottom=-1; top=12; height=270
---
y=2^{x}|dotted|#8a8985
y=2^{x-1}+3|#2a78d6
y=3|dashed|#2a78d6
(0,3.5)|label:(0, 3.5)|#2a78d6
```

### Finding $a$ and $b$ from two points
- If one point has $x = 0$, its y-value **is** $a$.
- Otherwise **divide** the two equations to cancel $a$.

> [!example] Example
> Through $(1, 10)$ and $(3, 2.5)$: $\ \dfrac{ab^3}{ab^1} = \dfrac{2.5}{10}$, so $b^2 = 0.25$ and $b = 0.5$. Then $a(0.5) = 10$ gives $a = 20$. So $y = 20(0.5)^x$.

### Solving with the same base
Rewrite both sides with the same base, then set the exponents equal.
> [!example] Example
> $9^x = 27$: $\ (3^2)^x = 3^3$, so $3^{2x} = 3^3$, which gives $2x = 3$ and $x = \frac32$.

### Models
- **Compound interest:** $A = P\left(1 + \dfrac rn\right)^{nt}$ ($n$ = times per year). **Continuous:** $A = Pe^{rt}$, with $e \approx 2.718$.
- **Half-life $h$:** $A = A_0\left(\tfrac12\right)^{t/h}$. **Doubling time $d$:** $A = A_0\cdot2^{t/d}$.

---

## Practice test
*About 50 minutes. Calculator only where marked.*

**1. (5.1)** $f(x) = x^2 - 1$ and $g(x) = 3x + 2$. Find:
- (a) $f(g(1))$ $\quad$ (b) $g(f(1))$ $\quad$ (c) $f(f(2))$
- (d) $f(g(x))$ $\quad$ (e) $g(f(x))$

**2. (5.1)** Use the table.

| $x$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $f(x)$ | 3 | 4 | 1 | 2 |
| $g(x)$ | 2 | 1 | 4 | 3 |

Find $f(g(1))$, $g(f(1))$, $f(f(3))$ and $g(g(4))$.

**3. (5.1)** Find each composite and its domain.
- (a) $f(x) = \sqrt{x}$, $g(x) = x - 5$: find $f(g(x))$ and $g(f(x))$, each with its domain.
- (b) ★ $f(x) = \dfrac{2}{x - 1}$, $g(x) = \dfrac4x$: find $f(g(x))$ and its domain.

**4. (5.1)** Find $f$ and $g$ so that $h(x) = f(g(x))$. $\quad$ (a) $h(x) = (2x + 5)^3$ $\quad$ (b) $h(x) = \sqrt{x^2 + 1}$ $\quad$ (c) $h(x) = \dfrac{1}{x - 7}$

**5. (5.1)** A company makes $n(t) = 25t$ shirts in $t$ hours, and it costs $C(n) = 10n + 50$ dollars to make $n$ shirts.
- (a) Find $C(n(t))$ and say what it represents, with units.
- (b) Find $C(n(4))$ and interpret it.

**6. (5.2)** One-to-one or not? Explain.
- (a) $\{(1, 4), (2, 5), (3, 4)\}$ $\quad$ (b) $\{(-1, 2), (0, 3), (2, 7)\}$
- (c) $y = x^2$ $\quad$ (d) $y = x^3$ $\quad$ (e) $y = |x|$ $\quad$ (f) $y = 2^x$

**7. (5.2)** $f$ passes through $(-2, 1)$, $(0, 3)$ and $(4, 7)$, has domain $[-2, 4]$ and range $[1, 7]$.
- (a) List three points on $f^{-1}$.
- (b) If $f(5) = 11$, what is $f^{-1}(11)$?
- (c) What are the domain and range of $f^{-1}$?

**8. (5.2)** Use the table: find $f^{-1}(11)$, $f^{-1}(5)$ and $f^{-1}(f(3))$.

| $x$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $f(x)$ | 5 | 8 | 11 | 14 |

**9. (5.2)** Find the inverse.
- (a) $f(x) = 5x - 3$
- (b) $f(x) = x^3 + 4$
- (c) ★ $f(x) = \dfrac{x + 1}{x - 2}$. Also give the domain and range of $f$.

**10. (5.2)** Show that $f(x) = 2x - 6$ and $g(x) = \frac{x}{2} + 3$ are inverses.

**11. (5.2)** ★ $f(x) = (x - 2)^2$ is not one-to-one.
- (a) Restrict its domain so it is, keeping the right half.
- (b) Find $f^{-1}$ and give its domain and range.

**12. (5.2)** The graph of $f$ contains the points $(0, 1)$, $(1, 2)$ and $(2, 4)$. Sketch $f$ and $f^{-1}$ on the same axes along with the line $y = x$. Where do the points go?

**13. (5.3)** $f(x) = 3\cdot2^x$. Find $f(0)$, $f(3)$ and $f(-1)$.

**14. (5.3)** For each, give the initial value, growth or decay, and the percent rate. $\quad$ (a) $500(1.03)^t$ $\quad$ (b) $80(0.6)^t$

**15. (5.3)** $f(x) = 2^{x-1} + 3$. Describe the transformation from $2^x$, and give the domain, range, horizontal asymptote and y-intercept.

**16. (5.3)** Find the exponential function $y = ab^x$ through each pair of points. $\quad$ (a) $(0, 4)$ and $(2, 36)$ $\quad$ (b) $(1, 10)$ and $(3, 2.5)$

**17. (5.3)** Solve. $\quad$ (a) $2^{x+1} = 16$ $\quad$ (b) $9^x = 27$ $\quad$ (c) $\left(\frac12\right)^x = 8$ $\quad$ (d) ★ $3^{x^2} = 81$

**18. (5.3)** \$5,000 is invested at 6% for 5 years. Find the balance compounded quarterly and compounded continuously. (Calculator)

**19. (5.3)** A 200 g sample has a half-life of 10 years. Write a model and find how much is left after 25 years. (Calculator)

**20. (5.1–5.3, putting it together)** $f(x) = 2^x$ and $g(x) = x - 3$.
- (a) Find $h(x) = f(g(x))$. Describe it as a transformation of $2^x$.
- (b) Is $h$ one-to-one? How do you know?
- (c) $h(5) = 4$. What point must be on the graph of $h^{-1}$?
- (d) What is the horizontal asymptote of $h$? What vertical line would the graph of $h^{-1}$ approach instead?

---

## Answer key

1. (a) $g(1) = 5$, so $f(5) = 24$. (b) $f(1) = 0$, so $g(0) = 2$. (c) $f(2) = 3$, so $f(3) = 8$. (d) $9x^2 + 12x + 3$. (e) $3x^2 - 1$.
2. $f(g(1)) = f(2) = 4$. $\ g(f(1)) = g(3) = 4$. $\ f(f(3)) = f(1) = 3$. $\ g(g(4)) = g(3) = 4$.
3. (a) $f(g(x)) = \sqrt{x - 5}$, domain $x \ge 5$. $\ g(f(x)) = \sqrt{x} - 5$, domain $x \ge 0$. (b) $f(g(x)) = \dfrac{2}{\frac4x - 1} = \dfrac{2x}{4 - x}$. Domain: $x \ne 0$ (for $g$) and $\frac4x \ne 1$, so $x \ne 4$. All reals except 0 and 4.
4. (a) $g = 2x + 5$, $f = x^3$. (b) $g = x^2 + 1$, $f = \sqrt{x}$. (c) $g = x - 7$, $f = \frac1x$. (Other splits can work too.)
5. (a) $C(n(t)) = 10(25t) + 50 = 250t + 50$: the cost in dollars of running production for $t$ hours. (b) $C(n(4)) = 1050$: 4 hours of production (100 shirts) costs \$1,050.
6. (a) No: the output 4 comes from both 1 and 3. (b) Yes: no repeated outputs. (c) No: fails the horizontal line test. (d) Yes: always increasing. (e) No: $|2| = |-2|$. (f) Yes: always increasing.
7. (a) $(1, -2)$, $(3, 0)$, $(7, 4)$. (b) 5. (c) Domain $[1, 7]$, range $[-2, 4]$.
8. $f^{-1}(11) = 2$, $\ f^{-1}(5) = 0$, $\ f^{-1}(f(3)) = 3$
9. (a) $f^{-1}(x) = \dfrac{x + 3}{5}$. (b) $f^{-1}(x) = \sqrt[3]{x - 4}$. (c) $f^{-1}(x) = \dfrac{2x + 1}{x - 1}$. Domain of $f$: $x \ne 2$. Range of $f$: $y \ne 1$ (the domain of $f^{-1}$).
10. $f(g(x)) = 2\left(\frac x2 + 3\right) - 6 = x$ and $g(f(x)) = \frac{2x - 6}{2} + 3 = x$. Both give $x$, so they're inverses.
11. (a) $x \ge 2$. (b) $f^{-1}(x) = 2 + \sqrt{x}$, domain $x \ge 0$, range $y \ge 2$.
12. $f^{-1}$ contains $(1, 0)$, $(2, 1)$ and $(4, 2)$. Each point flips across $y = x$, at the same distance from the line on the other side.
13. $f(0) = 3$, $\ f(3) = 24$, $\ f(-1) = 1.5$
14. (a) Initial 500, growth, 3%. (b) Initial 80, decay, 40%.
15. Right 1, up 3. Domain all reals, range $y > 3$, horizontal asymptote $y = 3$, y-intercept $2^{-1} + 3 = 3.5$.
16. (a) $a = 4$, $b^2 = 9$, so $b = 3$: $\ y = 4\cdot3^x$. (b) $y = 20(0.5)^x$.
17. (a) $2^{x+1} = 2^4$, so $x = 3$. (b) $3^{2x} = 3^3$, so $x = \frac32$. (c) $2^{-x} = 2^3$, so $x = -3$. (d) $x^2 = 4$, so $x = \pm2$.
18. Quarterly: $5000(1.015)^{20} \approx \$6{,}734.28$. Continuous: $5000e^{0.3} \approx \$6{,}749.29$.
19. $A = 200\left(\frac12\right)^{t/10}$, and $A(25) = 200(0.5)^{2.5} \approx 35.4$ g
20. (a) $h(x) = 2^{x-3}$: $2^x$ shifted right 3. (b) Yes: it's always increasing, so it passes the horizontal line test. (c) $(4, 5)$. (d) $h$ has horizontal asymptote $y = 0$. Reflecting over $y = x$ turns it into the vertical asymptote $x = 0$ for $h^{-1}$.
