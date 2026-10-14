---
class: "[[MATH 327]]"
tags: [scratch, phase-plane]
---
# Phase planes scratch
Class: [[MATH 327]] · Type `eigen(a,b,c,d)=` or `eigen(a,b,c,d)[(x,y)]=` on a new line to try a matrix. See [[Eigen Calculator & DEch]].

$$
\begin{aligned}
A &= \begin{bmatrix}0 & 1\\-2 & -3\end{bmatrix}\\
\lambda_1 &= -2, & v_1 &= \begin{bmatrix}1\\-2\end{bmatrix}\\
\lambda_2 &= -1, & v_2 &= \begin{bmatrix}1\\-1\end{bmatrix}
\end{aligned}
$$
$$
\begin{aligned}
\vec x(t) &= c_1e^{-2t}\begin{bmatrix}1\\-2\end{bmatrix} + c_2e^{-t}\begin{bmatrix}1\\-1\end{bmatrix}\\
\text{from }(2,\ -1)\!:\quad c_1 = -1,\ c_2 = 3 &\quad\Rightarrow\quad \vec x(t) = -e^{-2t}\begin{bmatrix}1\\-2\end{bmatrix} + 3e^{-t}\begin{bmatrix}1\\-1\end{bmatrix}\\
\text{from }(-1,\ 2)\!:\quad c_1 = -1,\ c_2 = 0 &\quad\Rightarrow\quad \vec x(t) = -e^{-2t}\begin{bmatrix}1\\-2\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = 0 1 -2 -3
points = (2,-1) (-1,2)
```

$$
\begin{aligned}
A &= \begin{bmatrix}2 & 2\\5 & -1\end{bmatrix}\\
\lambda_1 &= -3, & v_1 &= \begin{bmatrix}2\\-5\end{bmatrix}\\
\lambda_2 &= 4, & v_2 &= \begin{bmatrix}1\\1\end{bmatrix}
\end{aligned}
$$
$$
\begin{aligned}
\vec x(t) &= c_1e^{-3t}\begin{bmatrix}2\\-5\end{bmatrix} + c_2e^{4t}\begin{bmatrix}1\\1\end{bmatrix}\\
\text{from }(2,\ -1)\!:\quad c_1 = \frac{3}{7},\ c_2 = \frac{8}{7} &\quad\Rightarrow\quad \vec x(t) = \frac{3}{7}e^{-3t}\begin{bmatrix}2\\-5\end{bmatrix} + \frac{8}{7}e^{4t}\begin{bmatrix}1\\1\end{bmatrix}\\
\text{from }(-1,\ 2)\!:\quad c_1 = -\frac{3}{7},\ c_2 = -\frac{1}{7} &\quad\Rightarrow\quad \vec x(t) = -\frac{3}{7}e^{-3t}\begin{bmatrix}2\\-5\end{bmatrix} - \frac{1}{7}e^{4t}\begin{bmatrix}1\\1\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = 2 2 5 -1
points = (2,-1) (-1,2)
```

$$
\begin{aligned}
A &= \begin{bmatrix}1 & -4\\-2 & -1\end{bmatrix}\\
\lambda_1 &= -3, & v_1 &= \begin{bmatrix}1\\1\end{bmatrix}\\
\lambda_2 &= 3, & v_2 &= \begin{bmatrix}2\\-1\end{bmatrix}
\end{aligned}
$$
$$
\begin{aligned}
\vec x(t) &= c_1e^{-3t}\begin{bmatrix}1\\1\end{bmatrix} + c_2e^{3t}\begin{bmatrix}2\\-1\end{bmatrix}\\
\text{from }(2,\ -1)\!:\quad c_1 = 0,\ c_2 = 1 &\quad\Rightarrow\quad \vec x(t) = e^{3t}\begin{bmatrix}2\\-1\end{bmatrix}\\
\text{from }(-1,\ 2)\!:\quad c_1 = 1,\ c_2 = -1 &\quad\Rightarrow\quad \vec x(t) = e^{-3t}\begin{bmatrix}1\\1\end{bmatrix} - e^{3t}\begin{bmatrix}2\\-1\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = 1 -4 -2 -1
points = (2,-1) (-1,2)
```
$$
\begin{aligned}
A &= \begin{bmatrix}1 & -0.5\\0.5 & 1\end{bmatrix}\\
\lambda_1 &= 1 - \frac{1}{2}\,i, & v_1 &= \begin{bmatrix}1\\i\end{bmatrix}\\
\lambda_2 &= 1 + \frac{1}{2}\,i, & v_2 &= \begin{bmatrix}1\\-i\end{bmatrix}
\end{aligned}
$$
$$\text{Complex eigenvalues: particular solutions need the real (cos/sin) form, not written out here.}$$
```phase-plane
A = 1 -0.5 0.5 1
points = (1,0)
```
$$
\begin{aligned}
A &= \begin{bmatrix}0 & 2\\-2 & 0\end{bmatrix}\\
\lambda_1 &= -2\,i, & v_1 &= \begin{bmatrix}1\\-i\end{bmatrix}\\
\lambda_2 &= 2\,i, & v_2 &= \begin{bmatrix}1\\i\end{bmatrix}
\end{aligned}
$$
$$\text{Complex eigenvalues: particular solutions need the real (cos/sin) form, not written out here.}$$
```phase-plane
A = 0 2 -2 0
points = (1,0)
```
$$
\begin{aligned}
A &= \begin{bmatrix}3 & 2\\-5 & -3\end{bmatrix}\\
\lambda_1 &= -i, & v_1 &= \begin{bmatrix}2\\-3 - i\end{bmatrix}\\
\lambda_2 &= i, & v_2 &= \begin{bmatrix}2\\-3 + i\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = 3 2 -5 -3
```
$$
\begin{aligned}
A &= \begin{bmatrix}9 & 6\\-15 & -9\end{bmatrix}\\
\lambda_1 &= -3\,i, & v_1 &= \begin{bmatrix}2\\-3 - i\end{bmatrix}\\
\lambda_2 &= 3\,i, & v_2 &= \begin{bmatrix}2\\-3 + i\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = 9 6 -15 -9
```
$$
\begin{aligned}
A &= \begin{bmatrix}0 & -2\\2 & 0\end{bmatrix}\\
\lambda_1 &= -2\,i, & v_1 &= \begin{bmatrix}1\\i\end{bmatrix}\\
\lambda_2 &= 2\,i, & v_2 &= \begin{bmatrix}1\\-i\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = 0 -2 2 0
```
$$
\begin{aligned}
A &= \begin{bmatrix}0 & -0.2\\0.8 & 0\end{bmatrix}\\
\lambda_1 &= -\frac{2}{5}\,i, & v_1 &= \begin{bmatrix}1\\2\,i\end{bmatrix}\\
\lambda_2 &= \frac{2}{5}\,i, & v_2 &= \begin{bmatrix}1\\-2\,i\end{bmatrix}
\end{aligned}
$$
$$\text{Complex eigenvalues: particular solutions need the real (cos/sin) form, not written out here.}$$
```phase-plane
A = 0 -0.2 0.8 0
points = (1,2)
```
$$
\begin{aligned}
A &= \begin{bmatrix}0 & -.2\\.8 & -.08\end{bmatrix}\\
\lambda_1 &= -\frac{1}{25} - \frac{3}{25}\sqrt{11}\,i, & v_1 &= \begin{bmatrix}5\\1 + 3\sqrt{11}\,i\end{bmatrix}\\
\lambda_2 &= -\frac{1}{25} + \frac{3}{25}\sqrt{11}\,i, & v_2 &= \begin{bmatrix}5\\1 - 3\sqrt{11}\,i\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = 0 -.2 .8 -.08
```
$$
\begin{aligned}
A &= \begin{bmatrix}0.08 & -.2\\.8 & 0\end{bmatrix}\\
\lambda_1 &= \frac{1}{25} - \frac{3}{25}\sqrt{11}\,i, & v_1 &= \begin{bmatrix}5\\1 + 3\sqrt{11}\,i\end{bmatrix}\\
\lambda_2 &= \frac{1}{25} + \frac{3}{25}\sqrt{11}\,i, & v_2 &= \begin{bmatrix}5\\1 - 3\sqrt{11}\,i\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = 0.08 -.2 .8 0
```
