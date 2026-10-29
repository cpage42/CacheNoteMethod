---
class: "[[MATH 327]]"
tags: [math327, worksheet]
due: 2026-10-27
---
Class: [[MATH 327]]

# Worksheet #8 (done in latex, by me)

Math 327 Differential Equations
Due: October 27

You are welcome to work together on this, but every person needs to upload their own files into Canvas (even if it is a copy of your partner's files). You should upload, with sensible file names:

- Your solutions to the questions below, including all steps in your calculations.
- Screenshots of your Insight Maker simulation results.

## Set-up: Harmonic Oscillator and Spring-Mass Systems

- Hooke's Law: $F_{spring} = -kx(t)$, where the spring constant $k$ depends on the stiffness of the spring.
- Damping force depends on current velocity: $F_{damping} = -bx'(t)$.
- $F = ma$ where $a$ is acceleration.

### Questions

1. Put the information above together to write a second order differential equation for the displacement of the spring $x$. Your equation will involve $x''$, $x'$ and $x$.
   $$
   \begin{align}
    & mx''(t)=-bx'(t)-kx(t) \\
    & mx''(t)+bx'(t)+kx(t)=0
   \end{align}
   $$
2. Turn your equation into a system of two equations, and write your system in matrix form.
$$
\begin{align}
 & x_{1}=x \\
 & x_{2}=x' \\
 & x_{1}'=x_{2} \\
 & x_{2}'=x'' \\
 & x''=-\frac{k}{m}x-\frac{b}{m}x' \\
 & \begin{bmatrix}
 x_{1}' \\
 x_{2}'
 \end{bmatrix}=\begin{bmatrix}
 0 & 1 \\
 -\frac{k}{m} & -\frac{b}{m}
 \end{bmatrix}\begin{bmatrix}
 x_{1} \\
 x_{2}
 \end{bmatrix} \\
\end{align}
$$
3. Write down the characteristic equation for this system.
$$
\lambda^{2}+ \frac{b}{m}\lambda+\frac{k}{m}=0
$$

## Scenario 1: Overdamped

Mass $= 2$ kg, spring constant $= 18$ N/m, damping coefficient $b = 20$ N/(m/s).

1. Write the second order differential equation that models this.
$$
\begin{align}
 & 2x''+20x'+18x=0 \\
 & x''+10x'+9x=0
\end{align}
$$
2. Find the eigenvalues from the characteristic equation and write down the general solution.
$$
\begin{align}
 & \lambda^2+10\lambda+9=0 \\
 & (\lambda+1)(\lambda+9)=0\therefore\lambda=-1,-9 \\
 & x(t)=C_{1}e^{-t}+C_{2}e^{-9t}
\end{align}
$$
3. Using initial value $x(0) = 5$ and $x'(0) = 0$, find the solution.
$$
\begin{align}
 & x'(t)=-C_{1}e^{-t}-9C_{2}e^{-9t} \\
 & \text{at } t=0: \\
 & C_{1}+C_{2}=5 \\
 & -C_{1}-9C_{2}=0 \\
 & \text{adding: } -8C_{2}=5\therefore C_{2}=-\frac{5}{8},\quad C_{1}=\frac{45}{8} \\
 & x(t)=\frac{45}{8}e^{-t}-\frac{5}{8}e^{-9t}
\end{align}
$$
4. Make an Insight Maker file that models this scenario, and use it to graph the result. Use your graph to estimate the time it takes until the spring is staying within $0.1$ m of its resting position. Include a screenshot.

The spring stays within $0.1$ m of rest after about $t\approx 4.0$ s.

![[Pasted image 20261027211520.png]]
## Scenario 2: Underdamped

Same mass and spring constant as Scenario 1, with $b = 2$ N/(m/s).

1. Write the second order differential equation that models this.
$$
\begin{align}
 & 2x''+2x'+18x=0 \\
 & x''+x'+9x=0
\end{align}
$$
2. Find the eigenvalues from the characteristic equation and write down the general solution.
$$
\begin{align}
 & \lambda^2+\lambda+9=0 \\
 & \lambda=\frac{-1\pm\sqrt{1-36}}{2}=-\frac{1}{2}\pm\frac{\sqrt{35}}{2}i \\
 & x(t)=e^{-t/2}\left(C_{1}\cos\frac{\sqrt{35}}{2}t+C_{2}\sin\frac{\sqrt{35}}{2}t\right)
\end{align}
$$
3. Using initial value $x(0) = 5$ and $x'(0) = 0$, find the solution.
$$
\begin{align}
 & x(0)=C_{1}=5 \\
 & x'(t)=e^{-t/2}\left[\left(-\frac{1}{2}C_{1}+\frac{\sqrt{35}}{2}C_{2}\right)\cos\frac{\sqrt{35}}{2}t+\left(-\frac{1}{2}C_{2}-\frac{\sqrt{35}}{2}C_{1}\right)\sin\frac{\sqrt{35}}{2}t\right] \\
 & x'(0)=-\frac{1}{2}C_{1}+\frac{\sqrt{35}}{2}C_{2}=0\therefore C_{2}=\frac{5}{\sqrt{35}} \\
 & x(t)=e^{-t/2}\left(5\cos\frac{\sqrt{35}}{2}t+\frac{5}{\sqrt{35}}\sin\frac{\sqrt{35}}{2}t\right)
\end{align}
$$
4. Make an Insight Maker file that models this scenario, and use it to graph the result. Use your graph to estimate the time it takes until the spring is staying within $0.1$ m of its resting position. Include a screenshot.

The spring oscillates about rest and stays within $0.1$ m after about $t\approx 7.6$ s.

![[Pasted image 20261027211959.png]]

## Scenario 3: Critically Damped

When we have real eigenvalues the system is overdamped, and when we have complex eigenvalues the system is underdamped. The dividing line is when the system is critically damped and we have one repeated eigenvalue. We assume that the mass is 2 kg and the spring constant is 18 N/m.

1. Calculate the value for the damping coefficient $b$ that makes the system critically damped.
$$
\begin{align}
 & m\lambda^2+b\lambda+k=0 \text{ has a repeated root when the discriminant is } 0 \\
 & b^2-4mk=0 \\
 & b=2\sqrt{mk}=2\sqrt{(2)(18)}=12 \text{ N/(m/s)}
\end{align}
$$
2. Using this value, find the eigenvalues from the characteristic equation and write down the general solution.
$$
\begin{align}
 & 2x''+12x'+18x=0\implies x''+6x'+9x=0 \\
 & \lambda^2+6\lambda+9=(\lambda+3)^2=0\therefore\lambda=-3 \text{ (repeated)} \\
 & x(t)=(C_{1}+C_{2}t)e^{-3t}
\end{align}
$$
3. Using initial value $x(0) = 5$ and $x'(0) = 0$, find the solution.
$$
\begin{align}
 & x(0)=C_{1}=5 \\
 & x'(t)=C_{2}e^{-3t}-3(C_{1}+C_{2}t)e^{-3t} \\
 & x'(0)=C_{2}-3C_{1}=0\therefore C_{2}=15 \\
 & x(t)=(5+15t)e^{-3t}
\end{align}
$$
4. Make an Insight Maker file that models this scenario, and use it to graph the result. Use your graph to estimate the time it takes until the spring is staying within $0.1$ m of its resting position. Include a screenshot.

The spring stays within $0.1$ m of rest after about $t\approx 1.9$ s.

![[Pasted image 20261027212340.png]]

## Wrap-Up

1. Compare the three scenarios. Which one of them results in the fastest damping? Why do you think this is?

The critically damped system settles fastest. The underdamped spring has too little damping, so it overshoots and keeps oscillating while its amplitude decays only as $e^{-t/2}$. The overdamped spring has so much damping that it creeps back slowly; its slow eigenvalue $\lambda=-1$ controls the decay, so it behaves like $e^{-t}$. Critical damping is the balance point: it gives the fastest decay ($e^{-3t}$) possible without oscillating.
