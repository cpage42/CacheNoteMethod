predator prey system shown here:
$$
\begin{align}
 & d'=-.2d-.3m \\
 & m'=.3d-.2m \\
 & \vec{x}(t)=\begin{bmatrix}
 -.2 & -.3 \\
 .3 & -.2
 \end{bmatrix} \\
\end{align}
$$
$$
\begin{align}
 & A = \begin{bmatrix}-.2 & -.3\\.3 & -.2\end{bmatrix}\\
 & \lambda_1 = -\frac{1}{5} - \frac{3}{10}\,i, & v_1 &=  \begin{bmatrix}1\\i\end{bmatrix}\\
 & \lambda_2 = -\frac{1}{5} + \frac{3}{10}\,i, & v_2 &= \begin{bmatrix}1\\- i\end{bmatrix}
\end{align}
$$
```phase-plane
A = -.2 -.3 .3 -.2
```
$$
\begin{align}
 & e^{ (-.2-.3i)t }\begin{bmatrix}
1 \\
i
\end{bmatrix}=e^{ -.2t }e^{ -.3it }\begin{bmatrix}
1 \\
i
\end{bmatrix} \\
 & \text{use euler's formula:} \\ \\
 & e^{ \theta i }=\cos(\theta)+i\sin(\theta) \\
 & e^{ -.3ti }=\cos(-.3t)+i\sin(-.3t) \\
 & e^{ -.2t }(\cos (-.3t)+i\sin(-.3t))\begin{bmatrix}
 1 \\
 i
 \end{bmatrix}=e^{ -.2t }(\begin{bmatrix}
 \cos(-.3t) \\
 -\sin(-.3t)
 \end{bmatrix}+i\begin{bmatrix}
 \sin(-.3t) \\
 \cos(-.3t)
 \end{bmatrix} ) \\ \\
 
  & \begin{bmatrix}
  d \\
  m \\
  \end{bmatrix}=C_{1}e^{ -.2t }\begin{bmatrix}
 \cos(-.3t) \\
 -\sin(-.3t)
 \end{bmatrix}+C_{2}e^{ -.2t }\begin{bmatrix}
 \sin(-.3t) \\
 \cos(-.3t)
 \end{bmatrix}
\end{align}
$$



ex. 7.0.3
$$
\begin{aligned}
A &= \begin{bmatrix}0 & 1\\-2 & 0\end{bmatrix}\\
\lambda_1 &= -\sqrt{2}\,i, & v_1 &= \begin{bmatrix}1\\-\sqrt{2}\,i\end{bmatrix}\\
\lambda_2 &= \sqrt{2}\,i, & v_2 &= \begin{bmatrix}1\\\sqrt{2}\,i\end{bmatrix}
\end{aligned}
$$

$$
\begin{align}
 & \text{going with }\vec{v}=\begin{bmatrix}
 -\sqrt{ 2 }i \\
 2
 \end{bmatrix} \\
 & e^{ \sqrt{ 2 }it }=\begin{bmatrix}
 -\sqrt{ 2 }i \\
 2
 \end{bmatrix}=(\cos \sqrt{ 2 }t+i\sin \sqrt{ 2 }t) \begin{bmatrix}
 -\sqrt{ 2 }i \\
 2
 \end{bmatrix}\\
 & =\begin{bmatrix}
 \sqrt{ 2 }\sin \sqrt{ 2 }t \\
 2\cos \sqrt{ 2 }t
 \end{bmatrix}+i\begin{bmatrix}
 -\sqrt{ 2 }\cos \sqrt{ 2 }t \\
 2\sin \sqrt{ 2 }t
 \end{bmatrix} \\
 &  \begin{bmatrix}
 x \\
 y 
 \end{bmatrix}=A\begin{bmatrix}
 \sqrt{ 2 }\sin \sqrt{ 2 }t \\
 2\cos \sqrt{ 2 }t
 \end{bmatrix}+B\begin{bmatrix}
 -\sqrt{ 2 }\cos \sqrt{ 2 }t \\
 2\sin \sqrt{ 2 }t
 \end{bmatrix} \\
  & \text{solve for init val here: dont wanna do it rn.}
\end{align}
$$
why did e^t term disappear?




$$
\begin{aligned}
A &= \begin{bmatrix}-3 & 10\\-1 & 3\end{bmatrix}\\
\lambda_1 &= -i, & v_1 &= \begin{bmatrix}10\\3 - i\end{bmatrix}\\
\lambda_2 &= i, & v_2 &= \begin{bmatrix}10\\3 + i\end{bmatrix}
\end{aligned}
$$
```phase-plane
A = -3 10 -1 3
```
$$
\begin{align}
 & \text{lets use }i,\begin{bmatrix}
10 \\
3+i
\end{bmatrix} \\
 & e^{ it }\begin{bmatrix}
 10 \\
 3+i
 \end{bmatrix}=(\cos t+i\sin t)\begin{bmatrix}
 10 \\
 3+i
 \end{bmatrix} \\
  & =\begin{bmatrix}
  10\cos t+i10\sin t \\
  3\cos t+3i\sin t+\cos t-\sin t
  \end{bmatrix} \\
   & =\begin{bmatrix}
  10\cos t \\
  3\cos t-\sin t
  \end{bmatrix}+i\begin{bmatrix}
  10\sin t \\
  3\sin t+\cos t
  \end{bmatrix} \\
   & \begin{bmatrix}
  x \\
  y
  \end{bmatrix}=C_{1}\begin{bmatrix}
  10\cos t \\
  3\cos t-\sin t
  \end{bmatrix}+C_{2}\begin{bmatrix}
  10\sin t \\
  3\sin t+\cos t
  \end{bmatrix} \\
   & x(0)=1\\
   & y(0)=3 \\ \\
   & \text{solve for init value from here, then:} \\
   & \begin{bmatrix}
   x \\
   y
   \end{bmatrix}=\frac{1}{10}\begin{bmatrix}
   10\cos t \\
   3\cos t-\sin t
   \end{bmatrix}+\frac{27}{10}\begin{bmatrix}
   10\sin t \\
   3\sin t+\cos t
   \end{bmatrix} \\
    & x=\cos t+27\sin t \\
	& y=3\cos t+8\sin t
\end{align}
$$