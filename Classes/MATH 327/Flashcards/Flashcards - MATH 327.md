#flashcards/math
Back to [[Home]] · Class: [[MATH 327]]

Focus: how to find eigenvalues and eigenvectors by hand (real numbers only). Study: Ctrl+P → "Review flashcards in this note", or pick the `math` deck in the flashcard sidebar.

## Matrix basics
Multiply a 2×2 matrix by a vector::$\begin{bmatrix} a & b \\ c & d \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} ax + by \\ cx + dy \end{bmatrix}$
Determinant of a 2×2::$\det\begin{bmatrix} a & b \\ c & d \end{bmatrix} = ad - bc$
Trace of a matrix::the sum of the diagonal entries, $\text{tr}A = a + d$ for a 2×2

## Finding eigenvalues
Eigenvector definition::$A\vec{v} = \lambda\vec{v}$
How to find eigenvalues::solve $\det(A - \lambda I) = 0$
Characteristic equation of a 2×2 (shortcut)::$\lambda^{2} - (\text{tr}A)\lambda + \det A = 0$
Trace & determinant shortcut::$\lambda_{1}+\lambda_{2} = \text{tr}A$, $\lambda_{1}\lambda_{2} = \det A$
<!--SR:!2026-10-05,4,270-->
Eigenvalues of a triangular matrix::the diagonal entries

## Finding eigenvectors
How to find the eigenvector for a given $\lambda$::solve $(A - \lambda I)\vec{v} = \vec{0}$. The two rows are multiples of each other, so use just one row.
Quick 2×2 eigenvector::from the top row of $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, $\vec{v} = \begin{bmatrix} b \\ \lambda - a \end{bmatrix}$ (when $b \neq 0$)
Check an eigenvector::compute $A\vec{v}$. It must equal $\lambda\vec{v}$.
Scaling an eigenvector::any nonzero multiple of an eigenvector is also an eigenvector, so pick the simplest one

## Solving a system
General solution of $\vec{x}\,' = A\vec{x}$ (real, distinct $\lambda$)::$\vec{x} = c_{1}e^{\lambda_{1}t}\vec{v}_{1} + c_{2}e^{\lambda_{2}t}\vec{v}_{2}$
Using an initial condition::set $t = 0$: $c_{1}\vec{v}_{1} + c_{2}\vec{v}_{2} = \vec{x}(0)$. That's two equations for $c_{1}, c_{2}$.
Why eigenvectors give straight-line solutions::start on an eigenvector and you stay on its line. Along it the system acts like $y' = \lambda y$.

## Reading the phase plane (real eigenvalues)
Both eigenvalues negative::sink (stable node)
Both eigenvalues positive::source (unstable node)
<!--SR:!2026-10-02,1,230-->
Eigenvalues of opposite sign::saddle
One eigenvalue is zero::a line of equilibria
Arrow direction on an eigenvector line::$\lambda < 0$ points in toward the origin, $\lambda > 0$ points out
Shortcut for a saddle::$\det A < 0$ means opposite signs, so it's a saddle
