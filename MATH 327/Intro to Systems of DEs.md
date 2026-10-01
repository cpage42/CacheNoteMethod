---
class: "[[MATH 327]]"
week: 6
date: 2026-09-28
source: https://pub.pretext.plus/o/c37e31ca-1114-4043-aa68-257a6695ed9c/website/ho-monday-week-6.html
tags: [systems, eigenvalues]
---
# W6 Monday: Introduction to Systems of DEs

Class: [[MATH 327]] · Next: [[Phase Planes and Eigenvectors]]

> [!abstract] Objective
> Introduction to systems of differential equations: use **eigenvectors** to find straight-line solutions, then combine them into the general solution.

## Population model: rabbits & coyotes
> [!note] The handout leaves these as blanks. I filled them in so they match the matrix further down.

A rabbit population grows at a rate of 40%:
$$\frac{dr}{dt} = 0.4r$$

A coyote population grows at a rate of 10%:
$$\frac{dc}{dt} = 0.1c$$

**Coyotes eat rabbits!**
- More coyotes $\implies$ fewer rabbits: the rabbit population **decreases by 20% for each additional coyote**.
$$\frac{dr}{dt} = 0.4r - 0.2c$$
- More rabbits $\implies$ more coyotes: the coyote population **increases by 10% for each additional rabbit**.
$$\frac{dc}{dt} = 0.1c + 0.1r$$

**System of DEs:**
$$
\begin{align}
\frac{dr}{dt} &= 0.4r - 0.2c \\
\frac{dc}{dt} &= 0.1r + 0.1c
\end{align}
$$

**Technology:** try the online PPlane grapher starting from **300 rabbits, 200 coyotes**, then from **100 rabbits, 200 coyotes**. Or build it in Insight Maker.

---

## Definitions
> [!info] Definition 6.0.1: Linear, autonomous system
> This is a **linear** system of DEs: it contains no $x^{2}$, $\sin(x)$, etc.
> It is also **autonomous**: it does not depend on $t$.

**Recall:** for autonomous DEs we looked at equilibrium solutions and phase lines.
**Plan for systems:** use **eigenvectors** to give **straight-line solutions**.

> [!info] Definition 6.0.2: Eigenvector
> An eigenvector of a matrix $A$ is a vector $\vec{v}$ such that multiplying by the matrix gives a multiple of $\vec{v}$:
> $$A\vec{v} = \lambda\vec{v}$$
> for some number $\lambda$.

> [!info] Definition 6.0.3: Eigenvalue
> The number $\lambda$ is the **eigenvalue** for the eigenvector.

---

## Finding the straight-line solutions
Write the system in matrix form:
$$
\begin{bmatrix} r'(t) \\ c'(t) \end{bmatrix} = \begin{bmatrix} 0.4 & -0.2 \\ 0.1 & 0.1 \end{bmatrix}\begin{bmatrix} r(t) \\ c(t) \end{bmatrix}
$$
Straight-line solutions are given by the eigenvectors of the matrix, which are $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$ and $\begin{bmatrix} 2 \\ 1 \end{bmatrix}$. We can use these to find the eigenvalues.

### Example 6.0.4: $\vec{v} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$
$$
\begin{bmatrix} 0.4 & -0.2 \\ 0.1 & 0.1 \end{bmatrix}\begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 0.2 \\ 0.2 \end{bmatrix} = 0.2\begin{bmatrix} 1 \\ 1 \end{bmatrix} \implies \lambda = 0.2
$$
**Interpretation:** if we start with ratio $r = c$, we keep that ratio. Along the $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$ line, the system acts like $y' = 0.2y$, which has solution $y = Ae^{0.2t}$.
$$
\begin{bmatrix} r \\ c \end{bmatrix} = Ae^{0.2t}\begin{bmatrix} 1 \\ 1 \end{bmatrix} \qquad\Longrightarrow\qquad r = Ae^{0.2t},\quad c = Ae^{0.2t}
$$

### Example 6.0.5: $\vec{v} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$
$$
\begin{bmatrix} 0.4 & -0.2 \\ 0.1 & 0.1 \end{bmatrix}\begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 0.6 \\ 0.3 \end{bmatrix} = 0.3\begin{bmatrix} 2 \\ 1 \end{bmatrix} \implies \lambda = 0.3
$$
**Interpretation:** if we start with $r = 2c$ (twice as many rabbits as coyotes), we keep $r = 2c$. Along the $\begin{bmatrix} 2 \\ 1 \end{bmatrix}$ line, the system acts like $y' = 0.3y$, which has solution $y = Be^{0.3t}$.
$$
\begin{bmatrix} r \\ c \end{bmatrix} = Be^{0.3t}\begin{bmatrix} 2 \\ 1 \end{bmatrix} \qquad\Longrightarrow\qquad r = 2Be^{0.3t},\quad c = Be^{0.3t}
$$

---

## Putting it all together
| eigenvector | eigenvalue |
|---|---|
| $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$ | $\lambda = 0.2$ |
| $\begin{bmatrix} 2 \\ 1 \end{bmatrix}$ | $\lambda = 0.3$ |

> [!success] General solution
> $$\begin{bmatrix} r \\ c \end{bmatrix} = Ae^{0.2t}\begin{bmatrix} 1 \\ 1 \end{bmatrix} + Be^{0.3t}\begin{bmatrix} 2 \\ 1 \end{bmatrix}$$
> $$
> \begin{align}
> r(t) &= Ae^{0.2t} + 2Be^{0.3t} \\
> c(t) &= Ae^{0.2t} + Be^{0.3t}
> \end{align}
> $$

### Graph: populations over time
Starting with **300 rabbits, 200 coyotes** gives $A + 2B = 300$ and $A + B = 200$, so $A = B = 100$:
$$r(t) = 100e^{0.2t} + 200e^{0.3t}, \qquad c(t) = 100e^{0.2t} + 100e^{0.3t}$$
Blue = rabbits, orange = coyotes. Both grow, and the $e^{0.3t}$ term takes over, so the ratio heads toward $r:c = 2:1$.
```desmos-graph
left=0; right=10; bottom=0; top=5000
---
y=100e^{0.2x}+200e^{0.3x}|#2a78d6|x>0
y=100e^{0.2x}+100e^{0.3x}|#eb6834|x>0
```

### Graph: phase plane (rabbits → , coyotes ↑)
The two gray lines are the **straight-line solutions** (eigenvectors $[1,1]$ and $[2,1]$). The colored curves are the two starting points from the handout:
- **Blue**, from 300 rabbits and 200 coyotes: bends toward the $[2,1]$ line and both populations grow.
- **Orange**, from 100 rabbits and 200 coyotes ($A = 300$, $B = -100$): the rabbits hit **zero** at $t = 10\ln 1.5 \approx 4$.
```desmos-graph
left=0; right=800; bottom=0; top=500
---
y=x|x>0|#8a8985|dashed
y=0.5x|x>0|#8a8985|dashed
(100e^{0.2(18t-15)}+200e^{0.3(18t-15)}, 100e^{0.2(18t-15)}+100e^{0.3(18t-15)})|#2a78d6
(300e^{0.2(19.05t-15)}-200e^{0.3(19.05t-15)}, 300e^{0.2(19.05t-15)}-100e^{0.3(19.05t-15)})|#eb6834
(300,200)|#2a78d6
(100,200)|#eb6834
```
> [!tip] Reading a phase plane
> Every point is a (rabbits, coyotes) state, and the curves show where the system goes from there. Starting exactly on an eigenvector line keeps you on it. Starting anywhere else puts you on a curve that ends up following the line with the **bigger** eigenvalue ($\lambda = 0.3$, the $[2,1]$ direction).

**How do we find eigenvalues and eigenvectors?** Take a linear algebra course, or use the Python script: it's built into [[Eigen Calculator]] and runs right inside Obsidian. By hand: solve $\det(A - \lambda I) = 0$ for $\lambda$, then $(A - \lambda I)\vec{v} = \vec{0}$ for $\vec{v}$.

---

## Practice (from the handout)
Try each first. Solutions are collapsed below each one.

### Example 6.0.6
$$
\begin{align}
\frac{dx}{dt} &= -4x - y & x(0) &= 1 \\
\frac{dy}{dt} &= -2x - 5y & y(0) &= 1
\end{align}
$$
> [!example]- Solution
> $A = \begin{bmatrix} -4 & -1 \\ -2 & -5 \end{bmatrix}$, $\det(A-\lambda I) = \lambda^{2} + 9\lambda + 18 = (\lambda+3)(\lambda+6)$
> - $\lambda = -3$: $\vec{v} = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$
> - $\lambda = -6$: $\vec{v} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$
>
> General: $\vec{x} = Ae^{-3t}\begin{bmatrix} 1 \\ -1 \end{bmatrix} + Be^{-6t}\begin{bmatrix} 1 \\ 2 \end{bmatrix}$. Initial condition: $A + B = 1$, $-A + 2B = 1 \Rightarrow A = \tfrac13,\ B = \tfrac23$
> $$x(t) = \tfrac13 e^{-3t} + \tfrac23 e^{-6t}, \qquad y(t) = -\tfrac13 e^{-3t} + \tfrac43 e^{-6t}$$
> Both eigenvalues are negative, so everything decays to $(0,0)$: a **stable node (sink)**.

### Example 6.0.7
$$
\begin{align}
\frac{dx}{dt} &= x - 3y & x(0) &= 2 \\
\frac{dy}{dt} &= -2y & y(0) &= 5
\end{align}
$$
> [!example]- Solution
> $A = \begin{bmatrix} 1 & -3 \\ 0 & -2 \end{bmatrix}$ is triangular, so the eigenvalues are on the diagonal: $\lambda = 1, -2$
> - $\lambda = 1$: $\vec{v} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
> - $\lambda = -2$: $\vec{v} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$
>
> Initial condition: $A + B = 2$, $B = 5 \Rightarrow A = -3$
> $$x(t) = -3e^{t} + 5e^{-2t}, \qquad y(t) = 5e^{-2t}$$
> One positive and one negative eigenvalue: a **saddle**.

### Example 6.0.8
$$
\begin{align}
\frac{dx}{dt} &= x + 3y & x(0) &= 1 \\
\frac{dy}{dt} &= 2x + y & y(0) &= 0
\end{align}
$$
> [!example]- Solution
> $A = \begin{bmatrix} 1 & 3 \\ 2 & 1 \end{bmatrix}$, $\det(A-\lambda I) = \lambda^{2} - 2\lambda - 5 = 0 \Rightarrow \lambda = 1 \pm \sqrt{6}$
> - $\lambda = 1+\sqrt{6}$: $\vec{v} = \begin{bmatrix} 3 \\ \sqrt{6} \end{bmatrix}$
> - $\lambda = 1-\sqrt{6}$: $\vec{v} = \begin{bmatrix} 3 \\ -\sqrt{6} \end{bmatrix}$
>
> Initial condition: $3A + 3B = 1$, $\sqrt{6}A - \sqrt{6}B = 0 \Rightarrow A = B = \tfrac16$
> $$x(t) = \tfrac12 e^{(1+\sqrt{6})t} + \tfrac12 e^{(1-\sqrt{6})t}, \qquad y(t) = \tfrac{\sqrt{6}}{6}\left( e^{(1+\sqrt{6})t} - e^{(1-\sqrt{6})t} \right)$$
> $1+\sqrt6 > 0$ and $1-\sqrt6 < 0$: another **saddle**. Irrational eigenvalues are fine: the method is identical.

---

## What you should know
> [!success] Takeaways
> 1. Turn a word problem into a **system of DEs**, then into **matrix form** $\vec{x}\,' = A\vec{x}$.
> 2. An **eigenvector** gives a straight-line solution: along it, the system acts like the single DE $y' = \lambda y$.
> 3. **General solution** = a combination of the straight-line solutions: $\vec{x} = c_{1}e^{\lambda_{1}t}\vec{v}_{1} + c_{2}e^{\lambda_{2}t}\vec{v}_{2}$.
> 4. Use the **initial condition** to solve for $c_{1}, c_{2}$ (two equations, two unknowns).
> 5. **Check an eigenvector** by multiplying: $A\vec{v}$ should be a multiple of $\vec{v}$.
