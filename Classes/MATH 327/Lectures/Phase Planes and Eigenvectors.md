---
class: "[[MATH 327]]"
week: 6
date: 2026-09-30
source: https://pub.pretext.plus/o/c37e31ca-1114-4043-aa68-257a6695ed9c/website/ho-wednesday-week-6.html
tags: [systems, eigenvalues, phase-plane]
---
# W6 Wednesday: Phase Planes and Eigenvectors
Class: [[MATH 327]] · Previous: [[Intro to Systems of DEs]] · Tool: [[Eigen Calculator]]

> [!abstract] Objective
> Use eigenvalues and eigenvectors to **sketch phase planes**: draw the eigenvector spans, put arrows on them, and read off where every solution is headed.

> [!tip] How to read the plots
> - **Colored lines** = eigenvector spans (the straight-line solutions).
> - **Blue** = $\lambda < 0$, arrows point **in** toward the origin. **Orange** = $\lambda > 0$, arrows point **out**. **Dotted** = $\lambda = 0$, a line of equilibria.
> - **Gray curves** = other solutions. They can never cross a span.

---

## Recall: solving linear systems
### Example 6.0.9 (first example)
$$
\begin{align}
\frac{dx}{dt} &= x + 3y & x(0) &= 1 \\
\frac{dy}{dt} &= 2x + y & y(0) &= 0
\end{align}
\qquad\Longrightarrow\qquad
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} 1 & 3 \\ 2 & 1 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix}
$$
Eigenvalues: $\lambda^{2} - 2\lambda - 5 = 0 \implies \lambda = 1 \pm \sqrt{6}$
$$
\begin{align}
& \lambda = 1-\sqrt{6} \approx -1.45: \quad \vec{v} = \begin{bmatrix} -\sqrt{6} \\ 2 \end{bmatrix} & & \lambda = 1+\sqrt{6} \approx 3.45: \quad \vec{v} = \begin{bmatrix} \sqrt{6} \\ 2 \end{bmatrix}
\end{align}
$$
General solution:
$$
\begin{bmatrix} x \\ y \end{bmatrix} = Ae^{(1-\sqrt{6})t}\begin{bmatrix} -\sqrt{6} \\ 2 \end{bmatrix} + Be^{(1+\sqrt{6})t}\begin{bmatrix} \sqrt{6} \\ 2 \end{bmatrix}
$$
Solve for the initial value ($t = 0$):
$$
\begin{align}
1 &= -\sqrt{6}A + \sqrt{6}B \\
0 &= 2A + 2B \quad\implies\quad B = -A \\
\implies A &= -\frac{1}{2\sqrt{6}}, \qquad B = \frac{1}{2\sqrt{6}}
\end{align}
$$
> [!success] Solution
> $$x(t) = \tfrac12 e^{(1-\sqrt{6})t} + \tfrac12 e^{(1+\sqrt{6})t}, \qquad y(t) = \tfrac{\sqrt{6}}{6}\left( e^{(1+\sqrt{6})t} - e^{(1-\sqrt{6})t} \right)$$

![[pp_6.0.9.png|440]]
The green curve starts at $(1, 0)$ and gets pulled onto the outgoing (orange) span. That's a **saddle**.

---

## Analyzing phase planes
The recipe for each example:
1. Find the eigenvalues and eigenvectors.
2. Draw each eigenvector's **span** (the whole line through the origin).
3. Put arrows on each span: **in** if $\lambda < 0$, **out** if $\lambda > 0$.
4. Fill in the other solutions. They can't cross a span, so they bend between them.

### Example 6.0.10 (second example)
$$
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} -4 & -1 \\ -2 & -5 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix}
\qquad
\lambda = -6: \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad \lambda = -3: \begin{bmatrix} -1 \\ 1 \end{bmatrix}
$$
- As $t \to \infty$: every solution $\to (0, 0)$, because both terms decay.
- As $t \to -\infty$ (running time backwards): solutions blow up, away from the origin.
- A solution that **starts on a span stays on it**. It's a straight-line solution that slides into the origin.

![[pp_6.0.10.png|440]]
**Sink (stable node).** Close to the origin, curves come in tangent to the **slower** span ($\lambda = -3$, the $[-1, 1]$ line), because the $e^{-6t}$ part dies off first.

### Example 6.0.11 (third example)
$$
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} 4 & -2 \\ 1 & 1 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix}
\qquad
\lambda = 2: \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \quad \lambda = 3: \begin{bmatrix} 2 \\ 1 \end{bmatrix}
$$
- Sketch the eigenvectors: **no solution can cross the span of an eigenvector**, since two solutions can't pass through the same point.
- Where is every point heading? Both $\lambda > 0$, so everything moves **away from the origin**.

![[pp_6.0.11.png|440]]
**Source (unstable node).** Curves leave the origin along the slow span ($\lambda = 2$), then turn to run parallel to the fast span ($\lambda = 3$, the $[2, 1]$ line).

### Example 6.0.12 (fourth example)
$$
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 3 & 2 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix}
\qquad
\lambda = -1: \begin{bmatrix} -1 \\ 1 \end{bmatrix}, \quad \lambda = 4: \begin{bmatrix} 2 \\ 3 \end{bmatrix}
$$
**Which direction do the arrows point on each span?**

> [!success] Your guess was right: negative eigenvalues point in, positive point out
> On a span the solution is $\vec{x} = c\,e^{\lambda t}\vec{v}$. If $\lambda < 0$, then $e^{\lambda t} \to 0$ and the point slides **into** the origin. If $\lambda > 0$, then $e^{\lambda t}$ grows and the point moves **out**. The sign of $c$ only decides which half of the line you're on, not the direction.

![[pp_6.0.12.png|440]]
**Saddle.** Come in along $[-1, 1]$, leave along $[2, 3]$. Everything else starts near the incoming span and ends up hugging the outgoing one.

### Example 6.0.13
$$
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} -5 & -1 \\ -4 & -2 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix}
\qquad
\lambda = -6: \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \quad \lambda = -1: \begin{bmatrix} -1 \\ 4 \end{bmatrix}
$$
$$\vec{x}(t) = Ae^{-6t}\begin{bmatrix} 1 \\ 1 \end{bmatrix} + Be^{-t}\begin{bmatrix} -1 \\ 4 \end{bmatrix}$$
![[pp_6.0.13.png|440]]
**Sink.** Both spans point in. Curves arrive tangent to the slow span, $[-1, 4]$ ($\lambda = -1$).

### Example 6.0.14
$$
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} 5 & 1 \\ 4 & 2 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix}
\qquad
\lambda = 6: \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \quad \lambda = 1: \begin{bmatrix} 1 \\ -4 \end{bmatrix}
$$
$$\vec{x}(t) = Ae^{6t}\begin{bmatrix} 1 \\ 1 \end{bmatrix} + Be^{t}\begin{bmatrix} 1 \\ -4 \end{bmatrix}$$
![[pp_6.0.14.png|440]]
**Source.** It's the mirror image of 6.0.13: same shape, every arrow reversed.

### Example 6.0.15: one eigenvalue is $\lambda = 0$
$$
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} 2 & -1 \\ -2 & 1 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix}
\qquad
\lambda = 0: \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad \lambda = 3: \begin{bmatrix} -1 \\ 1 \end{bmatrix}
$$
$$
\begin{align}
\begin{bmatrix} x \\ y \end{bmatrix} &= Ae^{0t}\begin{bmatrix} 1 \\ 2 \end{bmatrix} + Be^{3t}\begin{bmatrix} -1 \\ 1 \end{bmatrix} = A\begin{bmatrix} 1 \\ 2 \end{bmatrix} + Be^{3t}\begin{bmatrix} -1 \\ 1 \end{bmatrix} \\
x &= A - Be^{3t} \\
y &= 2A + Be^{3t}
\end{align}
$$
As always, graph the spans and solve for the initial value if one is given.

![[pp_6.0.15.png|440]]
**Line of equilibria.** Every point on the $[1, 2]$ line is an equilibrium, since $e^{0t} = 1$ means it never moves. Every other point slides **away** from that line, parallel to $[-1, 1]$.

---

## Summary: reading the eigenvalues
| Eigenvalues | Arrows on spans | Picture | Examples |
|---|---|---|---|
| both $< 0$ | both in | **sink** (stable node) | 6.0.10, 6.0.13 |
| both $> 0$ | both out | **source** (unstable node) | 6.0.11, 6.0.14 |
| opposite signs | one in, one out | **saddle** | 6.0.9, 6.0.12 |
| one $= 0$ | line of equilibria, other span in/out | **line of equilibria** | 6.0.15 |

Shortcut: $\lambda_{1}\lambda_{2} = \det A$ and $\lambda_{1}+\lambda_{2} = \operatorname{tr}A$. If $\det A < 0$, it's a saddle. If $\det A > 0$, check the sign of the trace.

---

## What you should know
> [!success] Takeaways
> 1. **Each eigenvector's span is a straight-line solution.** Starting on it keeps you on it.
> 2. **Arrow direction = sign of $\lambda$:** negative points in, positive points out.
> 3. **Solutions never cross a span.** The spans divide the plane into regions.
> 4. **Classify:** sink, source, saddle, or line of equilibria (see the table).
> 5. **Near the origin**, curves follow the **slower** eigenvector (smaller $|\lambda|$). **Far away**, they run parallel to the **faster** one.
> 6. **With an initial condition**, solve for $A$ and $B$ at $t = 0$ (two equations, two unknowns).
> 7. **Check your eigenvalues** with $\lambda_{1}+\lambda_{2} = \operatorname{tr}A$ and $\lambda_{1}\lambda_{2} = \det A$, or run the [[Eigen Calculator]].
