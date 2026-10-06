---
class: "[[MATH 327]]"
tags: [scratch, phase-plane]
---
# Phase planes scratch
Class: [[MATH 327]] · Type `eigen(a,b,c,d)=` or `eigen(a,b,c,d)[(x,y)]=` on a new line to try a matrix. See [[Eigen Calculator & DEch]].

$$
\begin{aligned}
A &= \begin{bmatrix}-1 & 2\\-4 & 1\end{bmatrix}\\
\lambda_1 &= -\sqrt{7}\,i, & v_1 &= \begin{bmatrix}2\\1 - \sqrt{7}\,i\end{bmatrix}\\
\lambda_2 &= \sqrt{7}\,i, & v_2 &= \begin{bmatrix}2\\1 + \sqrt{7}\,i\end{bmatrix}
\end{aligned}
$$
$$\text{Complex eigenvalues: particular solutions need the real (cos/sin) form, not written out here.}$$
```phase-plane
A = -1 2 -4 1
points = (2,-1) (-1,2)
```
