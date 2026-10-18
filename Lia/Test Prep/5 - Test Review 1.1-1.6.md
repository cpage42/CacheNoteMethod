---
tags: [tutoring, ap-precalc]
---
# Test Review: AP Precalc 1.1–1.6
Tutoring: [[Lia]] · [[1 - Unit 1 Refresher]] · [[2 - Key Points to Cover]] · [[3 - Visualizations]] · [[4 - Practice Problems]] · [[6 - Test Review 5.1-5.3]]

*For her make-up test. Section-by-section review with one worked example each, then a practice test (about 45 minutes) with the answer key at the bottom.*

---

## 1.1 Change in tandem
- **Increasing:** as $x$ goes up, $f(x)$ goes up. **Decreasing:** $f(x)$ goes down.
- **Concave up:** the rate of change is increasing (∪). **Concave down:** the rate of change is decreasing (∩).
- **From a table:** subtract consecutive outputs. Positive differences mean increasing. Differences that are themselves getting bigger mean concave up.
- Describe intervals with $x$-values, not points: "increasing on $(1, 3)$."

> [!example] Example
> | $x$ | −2 | −1 | 0 | 1 | 2 |
> |---|---|---|---|---|---|
> | $f(x)$ | 7 | 2 | −1 | −2 | −1 |
>
> Differences: −5, −3, −1, 1. Decreasing from −2 to 1, increasing from 1 to 2. The differences keep growing, so $f$ is concave up.

## 1.2 Rates of change
$$\text{Average rate of change on } [a, b] = \frac{f(b) - f(a)}{b - a}$$
- It's the slope of the secant line. **Always include units:** output units per input unit.
- **Rate of change at a point:** estimate it with average rates over tiny intervals on each side of the point.

> [!example] Example
> $f(x) = x^2$ at $x = 3$: on $[3, 3.1]$ the average rate is $\frac{9.61 - 9}{0.1} = 6.1$. On $[2.9, 3]$ it's $5.9$. So the rate at $x = 3$ is about 6.

## 1.3 Linear and quadratic functions
| | Over equal input steps… |
|---|---|
| **Linear** | first differences are constant (constant rate of change) |
| **Quadratic** | second differences are constant (the rate of change changes at a constant rate) |
| **Neither** | e.g. constant **ratios** (exponential, Unit 2) |

- A quadratic $ax^2 + bx + c$ is concave up if $a > 0$, concave down if $a < 0$.

> [!example] Example
> Outputs 2, 5, 10, 17, 26: first differences 3, 5, 7, 9; second differences 2, 2, 2. **Quadratic.**

## 1.4 Polynomials and rates of change
- **Local max:** switches from increasing to decreasing. **Local min:** decreasing to increasing.
- **Point of inflection:** concavity switches (the rate of change switches from increasing to decreasing or vice versa).
- A degree-$n$ polynomial has **at most $n$ real zeros** and **at most $n - 1$ turning points** (local max or min).
- **Sign between zeros:** a polynomial keeps the same sign between consecutive real zeros. Test one point in each interval.

> [!example] Example
> $f(x) = x^3 - 3x$ has a local max at $(-1, 2)$, a local min at $(1, -2)$, and a point of inflection at $(0, 0)$. Degree 3, so at most 2 turning points, which matches.

## 1.5 Complex zeros, multiplicity, symmetry
- A degree-$n$ polynomial has **exactly $n$ zeros** counting complex ones and repeats.
- Real coefficients mean complex zeros come in **conjugate pairs**: $a \pm bi$.
- **Quadratic formula** for complex zeros: $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, where $\sqrt{-k} = i\sqrt{k}$.
- **Multiplicity** at a real zero: odd **crosses**, even **bounces**. Multiplicity 3 or more flattens out near the zero.
- **Even:** $f(-x) = f(x)$, symmetric about the y-axis. **Odd:** $f(-x) = -f(x)$, symmetric about the origin. Test by plugging in $-x$.

> [!example] Example
> $x^2 - 4x + 13 = 0$: $\ x = \dfrac{4 \pm \sqrt{16 - 52}}{2} = \dfrac{4 \pm \sqrt{-36}}{2} = \dfrac{4 \pm 6i}{2} = 2 \pm 3i$.

## 1.6 End behavior
Only the **leading term** $a_nx^n$ matters.

| | $a_n > 0$ | $a_n < 0$ |
|---|---|---|
| **Even $n$** | ↑ both ends | ↓ both ends |
| **Odd $n$** | ↓ left, ↑ right | ↑ left, ↓ right |

- In limit notation: $\lim_{x\to\infty} f(x) = \infty$ means "rises on the right."
- **Factored form:** multiply the leading pieces together. $-2(x - 1)^2(x + 3)$ has leading term $-2x^3$.

> [!example] Example
> $f(x) = 4x^6 - x^7 + 1$: the leading term is $-x^7$ (put it in order first). Odd degree, negative, so $\lim_{x\to-\infty} f(x) = \infty$ and $\lim_{x\to\infty} f(x) = -\infty$.

---

## Practice test
*About 45 minutes. No calculator unless marked.*

**1. (1.1)** Use the table.

| $x$ | −2 | −1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|
| $f(x)$ | 8 | 3 | 0 | −1 | 0 | 3 |

- (a) On what interval is $f$ decreasing? Increasing?
- (b) Where are the zeros?
- (c) Is $f$ concave up or concave down? Justify using the table.

**2. (1.2)** Find the average rate of change of $f(x) = x^3$ on $[1, 3]$.

**3. (1.2)** The temperature is $50°$F at 2 PM and $62°$F at 6 PM. Find the average rate of change with units, and say what it means.

**4. (1.2)** Estimate the rate of change of $g(x) = x^2 + 1$ at $x = 2$ using the intervals $[2, 2.1]$ and $[1.9, 2]$. (Calculator OK)

**5. (1.3)** Linear, quadratic or neither? Justify.

| $x$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| (a) | 1 | 4 | 7 | 10 | 13 |
| (b) | 3 | 4 | 7 | 12 | 19 |
| (c) | 1 | 2 | 4 | 8 | 16 |

**6. (1.3)** $f(x) = 2x^2$. Find the average rate of change on $[0, 1]$, $[1, 2]$ and $[2, 3]$. By how much does it change each time?

**7. (1.4)** $f(x) = x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3)$.
- (a) What are the real zeros?
- (b) Is $f$ positive or negative on $(1, 2)$? On $(2, 3)$?
- (c) What is the most turning points $f$ could have?

**8. (1.4)** A polynomial has degree 5. What is the most real zeros it can have? The most turning points? The fewest real zeros?

**9. (1.5)** Find all zeros of $f(x) = x^4 - 16$.

**10. (1.5)** Solve $x^2 + 2x + 5 = 0$.

**11. (1.5)** Write a polynomial of least degree, with real coefficients and leading coefficient 1, that has a zero of $3$ with multiplicity 2 and a zero of $i$. Give it in standard form.

**12. (1.5)** For $f(x) = x^2(x - 4)^3$, list each zero with its multiplicity and say whether the graph crosses or bounces there.

**13. (1.5)** Even, odd or neither? Show the test. $\ $ (a) $x^5 - 2x^3$ $\ $ (b) $x^4 + x^2 - 7$ $\ $ (c) $x^2 + x$

**14. (1.6)** Describe the end behavior with limit notation. $\ $ (a) $f(x) = 4x^6 - x^7 + 1$ $\ $ (b) $g(x) = -(x - 1)^2(x + 3)^2$ $\ $ (c) $h(x) = 2x(x - 1)(x + 2)^2$

**15. (1.4–1.6)** Sketch $f(x) = (x + 1)^2(x - 2)$. Label the zeros, the y-intercept and the end behavior.

**16. (AP-style free response, 1.1–1.4)** The water level $W(t)$, in inches, in a tank is measured every hour.

| $t$ (hours) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| $W(t)$ (in.) | 20 | 25 | 36 | 47 | 52 | 45 |

- (a) Find the average rate of change of $W$ from $t = 1$ to $t = 4$. Include units and interpret it.
- (b) Over which one-hour interval(s) does the water level rise fastest?
- (c) Is $W$ concave up or concave down on $[3, 5]$? Justify with the table.
- (d) Based on the table, around when does the water level reach a local maximum? Explain.

---

## Answer key

1. (a) Decreasing on $(-2, 1)$, increasing on $(1, 3)$. (b) $x = 0$ and $x = 2$. (c) Concave up: the differences −5, −3, −1, 1, 3 are increasing. (It's $x^2 - 2x$.)
2. $\dfrac{27 - 1}{3 - 1} = 13$
3. $\dfrac{62 - 50}{6 - 2} = 3$ °F per hour. On average, the temperature rose 3 degrees each hour between 2 and 6 PM.
4. $\dfrac{5.41 - 5}{0.1} = 4.1$ and $\dfrac{5 - 4.61}{0.1} = 3.9$, so about **4**.
5. (a) Linear: the first differences are all 3. (b) Quadratic: first differences 1, 3, 5, 7; second differences all 2. (c) Neither: the differences 1, 2, 4, 8 aren't constant, and neither are the second differences. (It's exponential, with ratios all 2.)
6. 2, 6, 10. The rate goes up by 4 each time.
7. (a) 1, 2, 3. (b) Positive on $(1, 2)$ (test $x = 1.5$: $(0.5)(-0.5)(-1.5) > 0$). Negative on $(2, 3)$. (c) 2.
8. At most 5 real zeros and at most 4 turning points. At least 1 real zero (odd degree, so the ends go opposite ways and the graph must cross).
9. $(x - 2)(x + 2)(x^2 + 4)$, so $x = \pm2$ and $\pm2i$
10. $x = \dfrac{-2 \pm \sqrt{4 - 20}}{2} = -1 \pm 2i$
11. The zeros are 3, 3, $i$ and $-i$ (conjugate). $(x - 3)^2(x^2 + 1) = x^4 - 6x^3 + 10x^2 - 6x + 9$
12. $x = 0$, multiplicity 2, bounces. $x = 4$, multiplicity 3, crosses (flattening as it goes through).
13. (a) Odd: $(-x)^5 - 2(-x)^3 = -x^5 + 2x^3 = -f(x)$. (b) Even: all even powers, so $f(-x) = f(x)$. (c) Neither: $f(-x) = x^2 - x$, which is neither $f(x)$ nor $-f(x)$.
14. (a) $\lim_{x\to-\infty} f = \infty$ and $\lim_{x\to\infty} f = -\infty$. (b) Leading term $-x^4$: $\lim_{x\to\pm\infty} g = -\infty$. (c) Leading term $2x^4$: $\lim_{x\to\pm\infty} h = \infty$.
15. Zeros: −1 (bounces) and 2 (crosses). y-intercept $(1)^2(-2) = -2$. Degree 3, positive leading coefficient: down on the left, up on the right. The graph comes up from the bottom left, touches the axis at −1, turns down through $(0, -2)$, then turns back up and crosses at 2.
16. (a) $\dfrac{52 - 25}{4 - 1} = 9$ inches per hour. Between hour 1 and hour 4, the water rose 9 inches per hour on average. (b) $[1, 2]$ and $[2, 3]$, both 11 inches per hour. (c) Concave down: the one-hour changes are 5 then −7, so the rate of change is decreasing. (d) Around $t = 4$: the level rises up to $t = 4$ (change +5) and then falls (change −7), so it switches from increasing to decreasing there.
