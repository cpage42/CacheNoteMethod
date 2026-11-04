---
class: "[[MATH 327]]"
tags: [math327, worksheet, resonance]
due: 2026-10-30
---
Class: [[MATH 327]] · Previous: [[Worksheet 8]]

# Worksheet #9

Math 327 Differential Equations
Due: October 30

You are welcome to work together on this, but every person needs to upload their own files into Canvas (even if it is a copy of your partner's files). You should upload, with sensible file names:

- Your solutions to the questions below, including all steps in your calculations.
- Screenshots of your Desmos graphs.

Today we are going to study the phenomenon of resonance.

## Scenario 1

Consider an undamped spring mass system with mass $m = 1$ and spring constant $k = 4$. This leads to the differential equation
$$
y'' + 4y = 0
$$

1. Find the general solution to this system.
$$
\begin{aligned}
 & \lambda^2 + 4 = 0 \implies \lambda = \pm 2i \\
 & y(t) = C_1\cos(2t) + C_2\sin(2t)
\end{aligned}
$$
2. Find the solution to the system assuming that $y(0) = 5$ and $y'(0) = 0$.
$$
\begin{aligned}
 & y(0) = C_1 = 5 \\
 & y'(t) = -2C_1\sin(2t) + 2C_2\cos(2t) \\
 & y'(0) = 2C_2 = 0 \implies C_2 = 0 \\
 & y(t) = 5\cos(2t)
\end{aligned}
$$
3. What is the amplitude of the solution? What is the period?
$$
\begin{aligned}
 & \text{Amplitude} = 5 \\
 & \text{Period} = \frac{2\pi}{\omega_0} = \frac{2\pi}{2} = \pi
\end{aligned}
$$
4. Use Desmos to graph your solution. Check that your amplitude and period look right on your graph. Include a screenshot.

**Desmos:** `y = 5cos(2x)` — peaks at $\pm 5$, repeats every $\pi \approx 3.14$.

**Screenshot:** *(paste here)*

## Scenario 2

Next, we will introduce a forcing function on our spring system of varying period: $F(t) = \cos(\omega t)$ for a parameter $\omega$. So now our equation has become
$$
y'' + 4y = \cos(\omega t)
$$

5. Solve this system by solving the homogeneous and guessing the form of a particular solution. Your answer will have $\omega$ in it!
$$
\begin{aligned}
 & y_h = C_1\cos(2t) + C_2\sin(2t) \\
 & \text{Guess } y_p = A\cos(\omega t) \quad (\omega \neq 2) \\
 & y_p'' = -A\omega^2\cos(\omega t) \\
 & -A\omega^2\cos(\omega t) + 4A\cos(\omega t) = \cos(\omega t) \\
 & A(4 - \omega^2) = 1 \implies A = \frac{1}{4 - \omega^2} \\
 & y_p = \frac{\cos(\omega t)}{4 - \omega^2}
\end{aligned}
$$
(No $\sin(\omega t)$ term is needed: there's no $y'$ term, so a cosine guess only ever produces cosines.)

6. Write the general solution to the equation.
$$
y(t) = C_1\cos(2t) + C_2\sin(2t) + \frac{\cos(\omega t)}{4 - \omega^2}
$$
7. Find the solution to the system assuming that $y(0) = 5$ and $y'(0) = 0$. Yup, still $\omega$'s in your answer.
$$
\begin{aligned}
 & y(0) = C_1 + \frac{1}{4 - \omega^2} = 5 \implies C_1 = 5 - \frac{1}{4 - \omega^2} \\
 & y'(t) = -2C_1\sin(2t) + 2C_2\cos(2t) - \frac{\omega\sin(\omega t)}{4 - \omega^2} \\
 & y'(0) = 2C_2 = 0 \implies C_2 = 0 \\
 & y(t) = \left(5 - \frac{1}{4 - \omega^2}\right)\cos(2t) + \frac{1}{4 - \omega^2}\cos(\omega t)
\end{aligned}
$$
8. Use Desmos to graph the solution. You can make a slider for the $\omega$ value to try out different values. For each of the values below, use Desmos to graph the solution and estimate the maximum amplitude that you get.

**Desmos:** `y = (5 - 1/(4 - w^2))cos(2x) + cos(wx)/(4 - w^2)` with a slider for `w`. Zoom the $x$-axis out a long way: near $\omega = 2$ the peaks only line up after a long time.

The largest the solution can get is $\left|C_1\right| + \left|\frac{1}{4-\omega^2}\right|$, when both cosines peak together.

| $\omega$ | $\frac{1}{4-\omega^2}$ | $C_1$ | Max amplitude |
| --- | --- | --- | --- |
| (a) 10 | $-0.0104$ | $5.010$ | $\approx 5.0$ |
| (b) 3 | $-0.200$ | $5.200$ | $\approx 5.4$ |
| (c) 2.5 | $-0.444$ | $5.444$ | $\approx 5.89$ |
| (d) 1.5 | $0.571$ | $4.429$ | $\approx 5.0$ |
| (e) 1 | $0.333$ | $4.667$ | $\approx 5.0$ |

(For $\omega < 2$ both terms are positive at $t = 0$, so the max is just $y(0) = 5$. For $\omega = 10$, the two terms can't hit opposite peaks at the same time, so it also stays at $5$.)

**Screenshot:** *(paste here)*

9. Which value gives the greatest maximum amplitude?

$\omega = 2.5$ gives the greatest maximum amplitude ($\approx 5.89$). It's the value whose forcing frequency is closest to the natural frequency, $\omega_0 = 2$, among the ones that push against the initial motion.

You should see that the closer we are to the value 2, the larger the maximum amplitude gets. So the closer the period of our forcing function is to the natural period of the system, the larger the amplitude becomes; the forcing function is at just the right frequency to reinforce the natural oscillation. This is called **resonance**.

10. Explain how the algebra shows that the amplitude becomes large when $\omega$ is close to 2 by looking at the form of your equation.

Both coefficients contain $\frac{1}{4 - \omega^2}$. As $\omega \to 2$, the denominator $4 - \omega^2 \to 0$, so $\frac{1}{4-\omega^2}$ blows up, and $C_1 = 5 - \frac{1}{4-\omega^2}$ blows up with it. The solution is two cosines with almost the same frequency, so they drift in and out of phase (beats). When they line up, the amplitude reaches $|C_1| + \left|\frac{1}{4-\omega^2}\right|$, which is huge when $\omega$ is close to 2. At exactly $\omega = 2$ the formula divides by zero, which is why Scenario 3 needs a different particular solution.

11. Let's try some values that are very close to 2. Graph each of these in Desmos and estimate the maximum amplitude for each of the following.

| $\omega$ | $\frac{1}{4-\omega^2}$ | $C_1$ | Max amplitude |
| --- | --- | --- | --- |
| (a) 2.3 | $-0.775$ | $5.775$ | $\approx 6.55$ |
| (b) 2.1 | $-2.439$ | $7.439$ | $\approx 9.88$ |
| (c) 2.02 | $-12.44$ | $17.44$ | $\approx 29.9$ |
| (d) 1.99 | $25.06$ | $-20.06$ | $\approx 45.1$ |
| (e) 1.97 | $8.396$ | $-3.396$ | $\approx 11.8$ |

The closer $\omega$ is to 2, the bigger the peaks and the longer you have to wait for them (the beat period is about $\frac{2\pi}{|\omega - 2|}$, so $\approx 630$ for $\omega = 1.99$).

**Screenshot:** *(paste here)*

## Scenario 3

Now suppose that the forcing function is $\cos(2t)$, so $\omega$ is exactly 2 and the frequency of the forcing function exactly matches our natural frequency. Our equation is now
$$
y'' + 4y = \cos(2t)
$$

12. Find the particular solution to this equation.

$\cos(2t)$ already solves the homogeneous equation, so the usual guess gives $0$. Multiply by $t$:
$$
\begin{aligned}
 & y_p = t\,\big(A\cos(2t) + B\sin(2t)\big) = t f(t) \\
 & y_p'' = 2f' + t f'', \quad f'' = -4f \\
 & y_p'' + 4y_p = 2f' = -4A\sin(2t) + 4B\cos(2t) = \cos(2t) \\
 & 4B = 1 \implies B = \tfrac14, \qquad -4A = 0 \implies A = 0 \\
 & y_p = \frac{t}{4}\sin(2t)
\end{aligned}
$$
13. Find the solution to the system assuming that $y(0) = 5$ and $y'(0) = 0$.
$$
\begin{aligned}
 & y = C_1\cos(2t) + C_2\sin(2t) + \frac{t}{4}\sin(2t) \\
 & y(0) = C_1 = 5 \\
 & y'(t) = -2C_1\sin(2t) + 2C_2\cos(2t) + \frac14\sin(2t) + \frac{t}{2}\cos(2t) \\
 & y'(0) = 2C_2 = 0 \implies C_2 = 0 \\
 & y(t) = 5\cos(2t) + \frac{t}{4}\sin(2t)
\end{aligned}
$$
14. Graph this in Desmos. Include a screenshot. What happens to the amplitude in this case?

**Desmos:** `y = 5cos(2x) + (x/4)sin(2x)` (add `y = ±sqrt(25 + x^2/16)` to see the envelope).

The amplitude grows without bound. The $\frac{t}{4}\sin(2t)$ term has an amplitude that increases linearly with time, so the oscillations keep getting bigger forever (the envelope is $\sqrt{25 + t^2/16}$, roughly $t/4$ for large $t$). Every push from the forcing lands in phase with the natural motion, so energy keeps building up. That's pure resonance.

**Screenshot:** *(paste here)*

This resonance effect occasionally destroys poorly designed bridges when they are subject to forces that are close to their natural frequencies. You can find videos of the Tacoma Bridge collapse due to this phenomenon.
