ex. 7.0.4
$$
\begin{aligned}
A &= \begin{bmatrix}0 & 2\\-3 & 2\end{bmatrix}\\
\lambda_1 &= 1 - \sqrt{5}\,i, & v_1 &= \begin{bmatrix}2\\1 - \sqrt{5}\,i\end{bmatrix}\\
\lambda_2 &= 1 + \sqrt{5}\,i, & v_2 &= \begin{bmatrix}2\\1 + \sqrt{5}\,i\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = 0 2 -3 2
```
we will use:
$$
\begin{align}
 & \lambda=1+\sqrt{ 5 }i,\text{ } \begin{bmatrix}
1-\sqrt{ 5 }i \\
3
\end{bmatrix} \\
 & e^{ (1+\sqrt{ 5 }i)t } \begin{bmatrix}
 1-\sqrt{ 5 }i \\
 3
 \end{bmatrix}=e^{ t }e^{ \sqrt{ 5 }it }\begin{bmatrix}
 1-\sqrt{ 5 }i \\
 3
 \end{bmatrix} \\
  & \text{now we use eulers formula:} \\
  & =e^{ t }(\cos(\sqrt{ 5 }t)+i\sin(\sqrt{ 5 }t))\begin{bmatrix}
  1-\sqrt{ 5 }i \\
  3
  \end{bmatrix} \\
   & e^{ t }(\begin{bmatrix}
   \cos \sqrt{ 5 }t+\sqrt{ 5 }\sin \sqrt{ 5 }t \\
   3\cos \sqrt{ 5 }t
   \end{bmatrix}+i\begin{bmatrix}
   \sin \sqrt{ 5 }t-\sqrt{ 5 }\cos \sqrt{ 5 }t \\
   3\sin \sqrt{ 5 }t
   \end{bmatrix}) \\
    & \begin{bmatrix}
   x \\
   y
   \end{bmatrix}=A e^{ t } \begin{bmatrix}
   \cos \sqrt{ 5 }t+\sqrt{ 5 }\sin \sqrt{ 5 }t \\
   3\cos \sqrt{ 5 }t
   \end{bmatrix}+B e^{ t }\begin{bmatrix}
   \sin \sqrt{ 5 }t-\sqrt{ 5 }\cos \sqrt{ 5 }t \\
   3\sin \sqrt{ 5 }t
   \end{bmatrix} \\
    & \text{now solving init vals} \\
	& 1=A+B(\sqrt{ 5 }) \\
	& 1=A(3) \\
	& A=\frac{1}{3},\text{ } B=-\frac{2}{3\sqrt{ 5 }}=-\frac{2\sqrt{ 5 }}{15} \\
	& \text{so then solve for init value. i would here but its fucking heiroglyphs on the board} \\
\end{align}
$$

$$
\begin{aligned}
A &= \begin{bmatrix}2 & 2\\-4 & 6\end{bmatrix}\\
\lambda_1 &= 4 - 2\,i, & v_1 &= \begin{bmatrix}1\\1 - i\end{bmatrix}\\
\lambda_2 &= 4 + 2\,i, & v_2 &= \begin{bmatrix}1\\1 + i\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = 2 2 -4 6
```
$$
\begin{aligned}
A &= \begin{bmatrix}-3 & -5\\3 & 1\end{bmatrix}\\
\lambda_1 &= -1 - \sqrt{11}\,i, & v_1 &= \begin{bmatrix}5\\-2 + \sqrt{11}\,i\end{bmatrix}\\
\lambda_2 &= -1 + \sqrt{11}\,i, & v_2 &= \begin{bmatrix}5\\-2 - \sqrt{11}\,i\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = -3 -5 3 1
```
$$
\begin{aligned}
A &= \begin{bmatrix}0 & -2\\2 & 1\end{bmatrix}\\
\lambda_1 &= \frac{1}{2} - \frac{1}{2}\sqrt{15}\,i, & v_1 &= \begin{bmatrix}4\\-1 + \sqrt{15}\,i\end{bmatrix}\\
\lambda_2 &= \frac{1}{2} + \frac{1}{2}\sqrt{15}\,i, & v_2 &= \begin{bmatrix}4\\-1 - \sqrt{15}\,i\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = 0 -2 2 1
```
$$
\begin{aligned}
A &= \begin{bmatrix}0 & 3\\-5 & 0\end{bmatrix}\\
\lambda_1 &= -\sqrt{15}\,i, & v_1 &= \begin{bmatrix}3\\-\sqrt{15}\,i\end{bmatrix}\\
\lambda_2 &= \sqrt{15}\,i, & v_2 &= \begin{bmatrix}3\\\sqrt{15}\,i\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = 0 3 -5 0
```
