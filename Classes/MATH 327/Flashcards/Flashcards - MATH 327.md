#flashcards/math
Back to [[Home]] · Class: [[MATH 327]] · Lectures: [[Intro to Systems of DEs]] · [[Phase Planes and Eigenvectors]] · [[Complex Eigenvalues]]

Covers systems of DEs through complex eigenvalues (Weeks 6–7). Study: Ctrl+P → "Review flashcards in this note", or pick the `math` deck in the flashcard sidebar.

## Matrix basics
Multiply a 2×2 matrix by a vector::$\begin{bmatrix} a & b \\ c & d \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} ax + by \\ cx + dy \end{bmatrix}$
Determinant of a 2×2::$\det\begin{bmatrix} a & b \\ c & d \end{bmatrix} = ad - bc$
Trace of a matrix::the sum of the diagonal entries, $\text{tr}A = a + d$ for a 2×2
Inverse of a 2×2::$\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad - bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$
Write a system $x' = ax + by,\ y' = cx + dy$ in matrix form::$\vec{x}\,' = A\vec{x}$ with $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ and $\vec{x} = \begin{bmatrix} x \\ y \end{bmatrix}$

## Finding eigenvalues
Eigenvector definition::$A\vec{v} = \lambda\vec{v}$
How to find eigenvalues::solve $\det(A - \lambda I) = 0$
Characteristic equation of a 2×2 (shortcut)::$\lambda^{2} - (\text{tr}A)\lambda + \det A = 0$
Trace & determinant shortcut::$\lambda_{1}+\lambda_{2} = \text{tr}A$, $\lambda_{1}\lambda_{2} = \det A$
<!--SR:!2026-10-05,4,270-->
Eigenvalues of a triangular matrix::the diagonal entries
When are the eigenvalues complex?::when the discriminant $(\text{tr}A)^{2} - 4\det A < 0$

## Finding eigenvectors
How to find the eigenvector for a given $\lambda$::solve $(A - \lambda I)\vec{v} = \vec{0}$. The two rows are multiples of each other, so use just one row.
Quick 2×2 eigenvector::from the top row of $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, $\vec{v} = \begin{bmatrix} b \\ \lambda - a \end{bmatrix}$ (when $b \neq 0$)
Check an eigenvector::compute $A\vec{v}$. It must equal $\lambda\vec{v}$.
Scaling an eigenvector::any nonzero multiple of an eigenvector is also an eigenvector, so pick the simplest one
Why can two calculators give different eigenvectors?::eigenvectors are only defined up to a scalar multiple; $(1, -2)$ and $(-1, 2)$ are the same line

## Solving a system (real eigenvalues)
General solution of $\vec{x}\,' = A\vec{x}$ (real, distinct $\lambda$)::$\vec{x} = c_{1}e^{\lambda_{1}t}\vec{v}_{1} + c_{2}e^{\lambda_{2}t}\vec{v}_{2}$
Using an initial condition::set $t = 0$: $c_{1}\vec{v}_{1} + c_{2}\vec{v}_{2} = \vec{x}(0)$. That's two equations for $c_{1}, c_{2}$.
Find $c_1, c_2$ with matrices::put $\vec{v}_{1}, \vec{v}_{2}$ in the columns of $P$; then $\vec{c} = P^{-1}\vec{x}(0)$
Why eigenvectors give straight-line solutions::start on an eigenvector and you stay on its line. Along it the system acts like $y' = \lambda y$.
Long-run behavior ($t \to \infty$) with real eigenvalues::the term with the **largest** $\lambda$ dominates (if its $c \neq 0$)
What decides which way a saddle trajectory leaves?::the sign of the $c$ on the positive-$\lambda$ (unstable) eigenvector
Starting point exactly on an eigenvector::the other $c$ is 0, so the solution is a straight line along that eigenvector

## Reading the phase plane (real eigenvalues)
Both eigenvalues negative::sink (stable node)
Both eigenvalues positive::source (unstable node)
<!--SR:!2026-10-02,1,230-->
Eigenvalues of opposite sign::saddle
One eigenvalue is zero::a line of equilibria
Arrow direction on an eigenvector line::$\lambda < 0$ points in toward the origin, $\lambda > 0$ points out
Shortcut for a saddle::$\det A < 0$ means opposite signs, so it's a saddle
Near the origin of a node, curves follow which eigenvector?::the **slower** one (smaller $\lvert\lambda\rvert$); far away they run parallel to the faster one
Can trajectories cross an eigenvector line?::no; the eigenvector lines divide the plane into regions
Classify from trace and determinant::$\det < 0$ saddle; $\det > 0$ and $\text{tr} < 0$ stable; $\det > 0$ and $\text{tr} > 0$ unstable; discriminant $< 0$ means spiral

## Complex eigenvalues
Complex eigenvalues $\lambda = \alpha \pm \beta i$ mean::rotation: spirals or closed loops, no straight-line solutions
Euler's formula::$e^{i\theta} = \cos\theta + i\sin\theta$
How many complex eigenvalues do you need to use?::just one; its conjugate gives the same real solutions
Complex method in one line::expand $e^{\lambda t}\vec{v} = e^{\alpha t}(\cos\beta t + i\sin\beta t)\vec{v}$, split into real + $i$·imaginary; each part is a real solution
General solution with complex eigenvalues::$\vec{x} = C_{1}\vec{x}_{re}(t) + C_{2}\vec{x}_{im}(t)$
$\alpha < 0$ / $\alpha > 0$ / $\alpha = 0$::spiral sink (stable) / spiral source (unstable) / center (closed loops)
Why does $e^{\alpha t}$ "disappear" for a center?::$\alpha = 0$, so $e^{0t} = 1$
Period of one loop::$2\pi/\beta$
Clockwise or counterclockwise?::bottom-left entry $c$ of $A$: $c > 0$ counterclockwise, $c < 0$ clockwise (velocity at $(1,0)$ is $(a, c)$)
Simplify $\cos(-\theta)$ and $\sin(-\theta)$::$\cos(-\theta) = \cos\theta$, $\sin(-\theta) = -\sin\theta$
Where does $i \cdot i$ go when you split real and imaginary parts?::$i^{2} = -1$, so that term moves into the **real** part with a minus sign

## Tools
Calculator shortcut in the vault::type `eigen(a,b,c,d)=` (add `[(x,y)]` for starting points) to get $\lambda$, $\vec v$, particular solutions and a phase portrait
