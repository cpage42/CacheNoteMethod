---
class: "[[MATH 327]]"
week: 7
date: 2026-10-05
source: https://pub.pretext.plus/o/c37e31ca-1114-4043-aa68-257a6695ed9c/website/ho-monday-week-7.html
tags: [systems, eigenvalues, complex, phase-plane]
---
# W7 Monday: Complex Eigenvalues
Class: [[MATH 327]] · Previous: [[Phase Planes and Eigenvectors]] · Tool: [[Eigen Calculator & DEch]]

> [!abstract] Objective
> When $A$ has complex eigenvalues $\lambda = \alpha \pm \beta i$, there are no straight-line solutions. Instead, solutions **spiral** (or circle). One complex solution, split into its **real and imaginary parts**, gives two real solutions, and those build the general solution.

---

## The method

1. **Find one eigenvalue and its eigenvector**, $\lambda = \alpha + \beta i$ and $\vec v$ (complex). You only need one of the pair; the other is its conjugate and gives nothing new.
2. **Write the complex solution** $e^{\lambda t}\vec v = e^{\alpha t}e^{\beta i t}\vec v$.
3. **Use Euler's formula** $e^{i\theta} = \cos\theta + i\sin\theta$:
$$e^{\lambda t}\vec v = e^{\alpha t}(\cos\beta t + i\sin\beta t)\,\vec v$$
4. **Multiply out and split** into $\vec{x}_{re} + i\,\vec{x}_{im}$. Both $\vec{x}_{re}$ and $\vec{x}_{im}$ are real solutions on their own.
5. **General solution:**
$$\vec x(t) = C_1\,\vec x_{re}(t) + C_2\,\vec x_{im}(t)$$
6. **Initial condition:** plug in $t = 0$ (where $\cos 0 = 1$, $\sin 0 = 0$) and solve for $C_1$ and $C_2$.

> [!tip] Reading the picture from $\lambda = \alpha \pm \beta i$
> - $\alpha < 0$: **spiral sink** (stable), since $e^{\alpha t} \to 0$.
> - $\alpha > 0$: **spiral source** (unstable).
> - $\alpha = 0$: **center**, closed loops forever. The $e^{\alpha t}$ factor is just $e^{0} = 1$.
> - $\beta$ sets how fast it turns: one loop takes $2\pi/\beta$.
> - **Direction:** look at the bottom-left entry $c$ of $A$. At the point $(1, 0)$ the velocity is $(a, c)$, so $c > 0$ means **counterclockwise** and $c < 0$ means **clockwise**.

---

## Example 7.0.1: deer and mountain lions (spiral sink)

$$d' = -0.2d - 0.3m, \qquad m' = 0.3d - 0.2m \qquad\Longrightarrow\qquad \begin{bmatrix}d\\m\end{bmatrix}' = \begin{bmatrix}-0.2 & -0.3\\0.3 & -0.2\end{bmatrix}\begin{bmatrix}d\\m\end{bmatrix}$$

$$\lambda = -\tfrac15 \pm \tfrac{3}{10}i, \qquad \lambda_1 = -0.2 - 0.3i \text{ has } \vec v_1 = \begin{bmatrix}1\\i\end{bmatrix}$$

```phase-plane
A = -.2 -.3 .3 -.2
```

Use $\lambda_1 = -0.2 - 0.3i$:

$$
\begin{aligned}
e^{(-0.2 - 0.3i)t}\begin{bmatrix}1\\i\end{bmatrix} &= e^{-0.2t}\big(\cos(-0.3t) + i\sin(-0.3t)\big)\begin{bmatrix}1\\i\end{bmatrix}\\
&= e^{-0.2t}\left(\begin{bmatrix}\cos(-0.3t)\\-\sin(-0.3t)\end{bmatrix} + i\begin{bmatrix}\sin(-0.3t)\\\cos(-0.3t)\end{bmatrix}\right)
\end{aligned}
$$

$$\begin{bmatrix}d\\m\end{bmatrix} = C_1e^{-0.2t}\begin{bmatrix}\cos(-0.3t)\\-\sin(-0.3t)\end{bmatrix} + C_2e^{-0.2t}\begin{bmatrix}\sin(-0.3t)\\\cos(-0.3t)\end{bmatrix}$$

> [!note] Cleaner form
> Since $\cos(-\theta) = \cos\theta$ and $\sin(-\theta) = -\sin\theta$, this is the same as
> $$\begin{bmatrix}d\\m\end{bmatrix} = C_1e^{-0.2t}\begin{bmatrix}\cos 0.3t\\\sin 0.3t\end{bmatrix} + C_2e^{-0.2t}\begin{bmatrix}-\sin 0.3t\\\cos 0.3t\end{bmatrix}$$
> (The class handout leaves it in the $-0.3t$ form; both are correct.)

**Meaning:** $\alpha = -0.2 < 0$, so both populations oscillate while dying down to 0. A spiral sink. $c = 0.3 > 0$, so it turns counterclockwise.

---

## Example 7.0.2: a center

$$x' = y,\quad y' = -2x,\qquad x(0) = 1,\quad y(0) = 3 \qquad\Longrightarrow\qquad A = \begin{bmatrix}0 & 1\\-2 & 0\end{bmatrix}$$

$$\lambda = \pm\sqrt2\,i, \qquad \lambda = \sqrt2\,i \text{ has } \vec v = \begin{bmatrix}-\sqrt2\,i\\2\end{bmatrix} \quad\left(\text{a multiple of } \begin{bmatrix}1\\\sqrt2\,i\end{bmatrix}\right)$$

```phase-plane
A = 0 1 -2 0
points = (1,3)
```

$$
\begin{aligned}
e^{\sqrt2\,it}\begin{bmatrix}-\sqrt2\,i\\2\end{bmatrix} &= \big(\cos\sqrt2 t + i\sin\sqrt2 t\big)\begin{bmatrix}-\sqrt2\,i\\2\end{bmatrix}\\
&= \begin{bmatrix}\sqrt2\sin\sqrt2 t\\2\cos\sqrt2 t\end{bmatrix} + i\begin{bmatrix}-\sqrt2\cos\sqrt2 t\\2\sin\sqrt2 t\end{bmatrix}
\end{aligned}
$$

$$\begin{bmatrix}x\\y\end{bmatrix} = C_1\begin{bmatrix}\sqrt2\sin\sqrt2 t\\2\cos\sqrt2 t\end{bmatrix} + C_2\begin{bmatrix}-\sqrt2\cos\sqrt2 t\\2\sin\sqrt2 t\end{bmatrix}$$

> [!question] Why did the $e^{t}$ term disappear?
> It didn't really. The real part of $\lambda = 0 \pm \sqrt2\,i$ is $\alpha = 0$, so the growth factor is $e^{\alpha t} = e^{0t} = 1$. Nothing grows or decays, so the solutions go around **closed loops** forever: a **center**.

**Initial condition** ($t = 0$: $\sin 0 = 0$, $\cos 0 = 1$):
$$x(0) = -\sqrt2\,C_2 = 1 \;\Rightarrow\; C_2 = -\tfrac{\sqrt2}{2}, \qquad y(0) = 2C_1 = 3 \;\Rightarrow\; C_1 = \tfrac32$$

$$\boxed{x(t) = \cos\sqrt2 t + \tfrac{3\sqrt2}{2}\sin\sqrt2 t, \qquad y(t) = 3\cos\sqrt2 t - \sqrt2\sin\sqrt2 t}$$

> [!check] Check
> $x' = -\sqrt2\sin\sqrt2 t + 3\cos\sqrt2 t = y$ ✓ and $y' = -3\sqrt2\sin\sqrt2 t - 2\cos\sqrt2 t = -2x$ ✓

---

## Example 7.0.3: another center

$$x' = -3x + 10y,\quad y' = -x + 3y,\qquad x(0) = 1,\quad y(0) = 3 \qquad\Longrightarrow\qquad A = \begin{bmatrix}-3 & 10\\-1 & 3\end{bmatrix}$$

$$\lambda = \pm i, \qquad \lambda = i \text{ has } \vec v = \begin{bmatrix}10\\3 + i\end{bmatrix}$$

```phase-plane
A = -3 10 -1 3
points = (1,3)
range = 6
```

$$
\begin{aligned}
e^{it}\begin{bmatrix}10\\3 + i\end{bmatrix} &= (\cos t + i\sin t)\begin{bmatrix}10\\3 + i\end{bmatrix}
= \begin{bmatrix}10\cos t + 10i\sin t\\3\cos t + 3i\sin t + i\cos t - \sin t\end{bmatrix}\\
&= \begin{bmatrix}10\cos t\\3\cos t - \sin t\end{bmatrix} + i\begin{bmatrix}10\sin t\\3\sin t + \cos t\end{bmatrix}
\end{aligned}
$$
(The $i\cdot i\sin t = -\sin t$ term is the one that moves into the real part.)

$$\begin{bmatrix}x\\y\end{bmatrix} = C_1\begin{bmatrix}10\cos t\\3\cos t - \sin t\end{bmatrix} + C_2\begin{bmatrix}10\sin t\\3\sin t + \cos t\end{bmatrix}$$

**Initial condition:** $x(0) = 10C_1 = 1 \Rightarrow C_1 = \tfrac{1}{10}$, and $y(0) = 3C_1 + C_2 = 3 \Rightarrow C_2 = \tfrac{27}{10}$.

$$\boxed{x(t) = \cos t + 27\sin t, \qquad y(t) = 3\cos t + 8\sin t}$$

> [!check] Check
> $x' = -\sin t + 27\cos t$ and $-3x + 10y = -3\cos t - 81\sin t + 30\cos t + 80\sin t = 27\cos t - \sin t$ ✓

---

## What you should know
> [!success] Takeaways
> 1. Complex eigenvalues $\alpha \pm \beta i$ mean **rotation**: spirals or closed loops, no straight-line solutions.
> 2. Use **one** eigenvalue/eigenvector pair, apply **Euler's formula**, and split into real and imaginary parts. Each part is a real solution.
> 3. $\vec x = C_1\vec x_{re} + C_2\vec x_{im}$, then use the initial condition at $t = 0$.
> 4. **Sign of $\alpha$** decides the type: $\alpha < 0$ spiral sink, $\alpha > 0$ spiral source, $\alpha = 0$ center.
> 5. **Turning direction** from the sign of $A$'s bottom-left entry: positive is counterclockwise.
> 6. `eigen(a,b,c,d)=` gives the eigenvalues/vectors and draws the spiral; it doesn't write out the cos/sin solution, so that part is by hand.
