$$
\begin{align}
 & (A-\lambda I)\vec{\omega}=\vec{v} \\
\end{align}
$$
$$
\begin{aligned}
A &= \begin{bmatrix}0 & 2\\-2 & 4\end{bmatrix}\\
\lambda_1 &= 2, & v_1 &= \begin{bmatrix}1\\1\end{bmatrix}\\
\lambda_2 &= 2, & &\text{repeated: only one eigenvector}
\end{aligned}
$$
```phase-plane
A = 0 2 -2 4
```
$$
\begin{align}
 & A-\lambda I=\begin{bmatrix}
 0 & 2 \\
 -2 & 4
 \end{bmatrix}-\begin{bmatrix}
 2 & 0 \\
 0 & 2
 \end{bmatrix}=\begin{bmatrix}
 -2 & 2 \\
 -2 & 2
 \end{bmatrix} \\
  & \begin{bmatrix}
  -2 & 2 \\
  -2 & 2
  \end{bmatrix}\begin{bmatrix}
  \omega_{1} \\
  \omega_{2}
  \end{bmatrix}=\begin{bmatrix}
  1 \\
  1
  \end{bmatrix} \\
   & -2\omega_{1}+2\omega_{2}=1 \\
   & \omega_{1}=1,\omega_{2}=\frac{3}{2} \\
   & \vec{\omega}=\begin{bmatrix}
   1 \\
   \frac{3}{2}
   \end{bmatrix} \\
    & OR: \\
	& \vec{\omega}=\begin{bmatrix}
	0 \\
	\frac{1}{2}
	\end{bmatrix}
\end{align}
$$
$$
\begin{align}
 & \vec{x}(t)=C_{1} e^{\lambda t}\begin{bmatrix}
1 \\
1
\end{bmatrix}+C_{2}\left( te^{\lambda t}\begin{bmatrix}
1 \\
1
\end{bmatrix}+e^{\lambda t}\begin{bmatrix}
0 \\
\frac{1}{2}
\end{bmatrix} \right) \\
 & \vec{x}(0,0)=C_{1}\begin{bmatrix}
 1 \\
 1
 \end{bmatrix}+C_{2}\begin{bmatrix}
 0 \\
 \frac{1}{2}
 \end{bmatrix} \\ 
 & \begin{bmatrix}
 -1 \\
 3
 \end{bmatrix}=\begin{bmatrix}
 C_{1} \\
 C_{1}+\frac{1}{2}C_{2}
 \end{bmatrix} \\
  & C_{1}=-1 \\
  & 3=-1+\frac{1}{2}C_{2} \\
  & C_{2}=8
\end{align}
$$
---
$$
\begin{aligned}
A &= \begin{bmatrix}5 & 1\\-1 & 3\end{bmatrix}\\
\lambda_1 &= 4, & v_1 &= \begin{bmatrix}1\\-1\end{bmatrix}\\
\lambda_2 &= 4, & &\text{repeated: only one eigenvector}
\end{aligned}
$$
```phase-plane
A = 5 1 -1 3
```
$$
\begin{align}
 & \begin{bmatrix}
 1 & 1 \\
 -1 & -1
 \end{bmatrix}\begin{bmatrix}
 \omega_{1} \\
 \omega_{2}
 \end{bmatrix}=\begin{bmatrix}
 1 \\
 -1
 \end{bmatrix} \\
 & \vec{\omega}=\begin{bmatrix}
 1 \\
 0
 \end{bmatrix} \\
  & \begin{bmatrix}
  x \\
  y
  \end{bmatrix}=C_{1}e^{4t}\begin{bmatrix}
  1 \\
  -1
  \end{bmatrix}+C_{2}(te^{4t}\begin{bmatrix}
  1 \\
  -1
  \end{bmatrix}+e^{4t}\begin{bmatrix}
  1 \\
  0
  \end{bmatrix}) \\
   & -1=C_{1}+C_{2} \\
   & 3=-C_{1} \\
   & C_{1}=-3 \\
   & C_{2}=2 \\
   & \vec{y}(t)=-3\begin{bmatrix}
   e^{4t} \\
   -e^{4t}
   \end{bmatrix}+2\begin{bmatrix}
   te^{4t}+e^{4t} \\
   -te^{4t}
   \end{bmatrix}
\end{align}
$$

---
$$
\begin{aligned}
A &= \begin{bmatrix}3 & -1\\1 & 1\end{bmatrix}\\
\lambda_1 &= 2, & v_1 &= \begin{bmatrix}1\\1\end{bmatrix}\\
\lambda_2 &= 2, & &\text{repeated: only one eigenvector}
\end{aligned}
$$
```phase-plane
A = 3 -1 1 1
```

---
$$
\begin{aligned}
A &= \begin{bmatrix}-2 & 1\\-1 & 4\end{bmatrix}\\
\lambda_1 &= 1 - 2\sqrt{2} \approx -1.8284, & v_1 &= \begin{bmatrix}1\\3 - 2\sqrt{2}\end{bmatrix} \approx \begin{bmatrix}1\\0.17157\end{bmatrix}\\
\lambda_2 &= 1 + 2\sqrt{2} \approx 3.8284, & v_2 &= \begin{bmatrix}1\\3 + 2\sqrt{2}\end{bmatrix} \approx \begin{bmatrix}1\\5.8284\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = -2 1 -1 4
```
$$
\begin{aligned}
A &= \begin{bmatrix}-2 & 1\\-1 & -4\end{bmatrix}\\
\lambda_1 &= -3, & v_1 &= \begin{bmatrix}1\\-1\end{bmatrix}\\
\lambda_2 &= -3, & &\text{repeated: only one eigenvector}
\end{aligned}
$$
```phase-plane
A = -2 1 -1 -4
```
---
$$
\begin{aligned}
A &= \begin{bmatrix}3 & -1\\1 & 5\end{bmatrix}\\
\lambda_1 &= 4, & v_1 &= \begin{bmatrix}1\\-1\end{bmatrix}\\
\lambda_2 &= 4, & &\text{repeated: only one eigenvector}
\end{aligned}
$$
```phase-plane
A = 3 -1 1 5
```
$$
\begin{aligned}
A &= \begin{bmatrix}1 & -1\\1 & 1\end{bmatrix}\\
\lambda_1 &= 1 - i, & v_1 &= \begin{bmatrix}1\\i\end{bmatrix}\\
\lambda_2 &= 1 + i, & v_2 &= \begin{bmatrix}1\\-i\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = 1 -1 1 1
```
$$
\begin{align}
 & \frac{1}{2}mv^{2}=KE=W=Fd \\
 & mv^{2}=2Fd \\
 & v^{2}=\frac{2Fd}{m} \\
 & v=\sqrt{ \frac{2Fd}{m} } \\
 & \text{ } \\
 & F=\vec{L}I\times \vec{B}=LIB\sin\theta \\
 & \frac{F}{B}=LI\sin\theta
\end{align}
$$