---
tags: [tutoring, ap-precalc]
---
# AP Precalc Unit 2 Review Sheet: Exponential and Logarithmic Functions
Tutoring: [[Lia]] · [[1 - Unit 2 Review Sheet]] · [[2 - Practice Test]] · [[3 - In-Person Worksheet]]

*A one-stop reference for tutoring Unit 2. The unit is about one idea: **exponentials change by a constant factor, and logarithms undo them**.*

## The unit at a glance

| AP topic | What it covers | Anchor idea |
|---|---|---|
| 2.1 | Arithmetic vs geometric sequences | Add a constant vs multiply by a constant |
| 2.2 | Linear vs exponential change | Equal steps in $x$ give equal *differences* (linear) or equal *ratios* (exponential) |
| 2.3 | Exponential functions | $f(x) = ab^x$: $a$ is the start, $b$ the growth factor |
| 2.4 | Exponential models in context | $b = 1 \pm r$ for a percent change $r$ |
| 2.5 | Competing models | Random residuals mean a good fit; a pattern means the wrong model type |
| 2.6 | Composition | $f(g(x))$: inside first |
| 2.7 | Inverse functions | Swap $x$ and $y$; reflect over $y = x$ |
| 2.8–2.9 | Logarithms as inverses of exponentials | $\log_b x = y \iff b^y = x$ |
| 2.10 | Logarithmic functions | Domain $x > 0$, vertical asymptote $x = 0$ |
| 2.11 | Log properties | Product, quotient, power |
| 2.12 | Equations and inequalities | Same base, or take logs; check domain |
| 2.13–2.14 | Log modeling and semi-log plots | A straight line on a semi-log plot means exponential |

## 1. Linear vs exponential (2.1–2.3)

- **Linear / arithmetic:** constant *difference*. $f(x) = mx + b$.
- **Exponential / geometric:** constant *ratio*. $f(x) = ab^x$, with $a = f(0)$.
- **Percent language:** $b = 1 + r$ for growth, $b = 1 - r$ for decay. A factor of 1.07 is 7% growth; 0.80 is 20% decay; 3 is 200% growth.
- **Features:** domain all reals; horizontal asymptote $y = 0$ (or $y = k$ for $ab^x + k$); $b > 1$ rises, $0 < b < 1$ falls; always concave up if $a > 0$.
- **Finding $a$ and $b$ from two points:** divide the equations to eliminate $a$. Through $(0,6)$ and $(2,54)$: $b^2 = 9$, $b = 3$.
- **Why the rate isn't constant:** the change over an interval is proportional to the current value, so the *average rate of change* grows (or shrinks) with $x$.

## 2. Modeling (2.4–2.5)

- **Model:** $A = a(1 \pm r)^t$. Say what $t$ and $A$ are, and give units.
- **Doubling / half-life:** use exponent $t/\text{period}$: $A(t) = A_0\left(\tfrac12\right)^{t/h}$.
- **Competing models:** compare residual plots. **Random scatter around 0** means a good fit. A **U shape or other pattern** means the wrong function type.
- Residual $=$ actual $-$ predicted.

## 3. Composition and inverses (2.6–2.7)

- $(f\circ g)(x) = f(g(x))$: work from the inside out. Order matters.
- **Inverse:** swap $x$ and $y$ and solve. Domain and range of $f$ become range and domain of $f^{-1}$.
- **One-to-one:** passes the horizontal line test. Only these have inverses (e.g. $x^2$ does not).
- Facts to say out loud: $f(f^{-1}(x)) = x$; if $f(a) = b$ then $f^{-1}(b) = a$; graphs reflect over $y = x$.

## 4. Logarithms (2.8–2.10)

- $\log_b x = y$ means $b^y = x$. Read it as **"what power of $b$ gives $x$?"**
- $\log_b 1 = 0$, $\log_b b = 1$, $\log_b b^x = x$, $b^{\log_b x} = x$.
- $\log$ is base 10, $\ln$ is base $e$.
- **Graph of $\log_b x$:** domain $x > 0$; vertical asymptote $x = 0$; passes through $(1, 0)$ and $(b, 1)$; increasing if $b > 1$, always concave down.
- **Transformations:** in $a\log_b(x - h) + k$, the asymptote is $x = h$ and the domain is $x > h$. A negative $a$ flips it over.

![[Unit 2 - exp and log.png]]

## 5. Properties (2.11)

| Rule | Formula |
|---|---|
| Product | $\log_b(MN) = \log_b M + \log_b N$ |
| Quotient | $\log_b(M/N) = \log_b M - \log_b N$ |
| Power | $\log_b(M^p) = p\log_b M$ |
| Change of base | $\log_b x = \dfrac{\ln x}{\ln b}$ |

**There is no rule for $\log(M + N)$.** This is the most common error.

## 6. Solving (2.12)

1. **Exponential equation, same base available:** write both sides with one base and set exponents equal. $4^{x+1} = 8^x \Rightarrow 2^{2x+2} = 2^{3x}$.
2. **Not the same base:** isolate the power, then take a log of both sides. $7^x = 20 \Rightarrow x = \ln 20/\ln 7$.
3. **Log equation:** condense to one log, rewrite as an exponential, solve, then **check the domain**. Answers that make a log's input $\le 0$ are *extraneous*.
4. **Inequalities:** the direction flips only when you multiply or divide by a negative, or when the base is between 0 and 1.
5. **Quadratic form:** $2^{2x} - 5\cdot2^x + 4 = 0$ with $u = 2^x$ (stretch).

## 7. Log models and semi-log plots (2.13–2.14)

- **Log model:** $y = a + b\ln x$. Rises fast, then slows (concave down).
- **Semi-log plot:** plot $\log y$ against $x$. If it is a **straight line**, $y$ is exponential: $\log y = \log a + x\log b$, so the slope is $\log b$ and the intercept is $\log a$.
- Useful for data spanning huge ranges (earthquakes, pH, decibels).

## Common mistakes to watch for

- Writing $\log(a + b) = \log a + \log b$.
- Saying 0.85 is "85% decay" (it is 15% decay).
- Using $b = r$ instead of $b = 1 + r$.
- Forgetting to check log domain: extraneous solutions.
- Dropping the negative: $\log_{1/2} 8 = -3$, not 3.
- Treating $f^{-1}$ as $1/f$.
- Using $\ln 0.5 / \ln 0.97$ with the wrong sign or swapped (check: a decay-to-half time must be positive).
- Mixing up $\ln(x^2)$ with $(\ln x)^2$.

## Suggested session order (60 minutes)

1. 5 min: **retrieval warm-up.** What's the difference between linear and exponential?
2. 15 min: exponentials and models (2.2–2.4). Percent to factor.
3. 15 min: logs as inverses (2.8–2.10). Evaluate several by "what power?".
4. 15 min: properties and equations (2.11–2.12). Always check the domain.
5. 10 min: one modeling problem start to finish (half-life) and the semi-log idea.

Use the *In-Person Worksheet*: do the easy problem first; if she gets it, move to the hard one. The *Practice Test* is for homework or a timed run (about 45 minutes).
