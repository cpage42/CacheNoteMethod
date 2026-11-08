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

Graphed `y = 5cos(2x)` in Desmos. It goes between 5 and -5 and repeats every $\pi \approx 3.14$, so the amplitude and period check out.

```desmos-graph
left=0; right=12.57; bottom=-6.5; top=6.5; height=280
---
y=5\cos(2x)|#2a78d6
y=5|dashed|#8a8985
y=-5|dashed|#8a8985
(0,5)|label:amplitude 5|#eb6834
(3.1416,5)|label:one period = π|#eb6834
```

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
(I didn't need a $\sin(\omega t)$ term since there's no $y'$ in the equation, so plugging in a cosine only gives back cosines.)

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

Desmos: `y = (5 - 1/(4 - w^2))cos(2x) + cos(wx)/(4 - w^2)` with a slider for `w`. For $\omega$ near 2 you have to zoom out a lot on the $x$-axis because it takes a while for the peaks to line up.

The biggest the solution can get is $|C_1| + \left|\frac{1}{4-\omega^2}\right|$, which happens when both cosines peak at the same time.

| $\omega$ | $\frac{1}{4-\omega^2}$ | $C_1$ | Max amplitude |
| --- | --- | --- | --- |
| (a) 10 | $-0.0104$ | $5.010$ | $\approx 5.0$ |
| (b) 3 | $-0.200$ | $5.200$ | $\approx 5.4$ |
| (c) 2.5 | $-0.444$ | $5.444$ | $\approx 5.89$ |
| (d) 1.5 | $0.571$ | $4.429$ | $\approx 5.0$ |
| (e) 1 | $0.333$ | $4.667$ | $\approx 5.0$ |

For $\omega = 1.5$ and $\omega = 1$ both coefficients are positive, so the biggest value is just at $t = 0$, which is 5. For $\omega = 10$ the two cosines never hit opposite peaks at the same time, so it also stays at about 5.

**(a): $\omega = 10$**
```desmos-graph
left=0; right=20; bottom=-6.3; top=6.3; height=260
---
y=(5-\frac{1}{4-10^2})\cos(2x)+\frac{\cos(10x)}{4-10^2}|#2a78d6
y=5.00|dashed|#8a8985
y=-5.00|dashed|#8a8985
(0.00,5.000)|label:max ≈ 5.00|#eb6834
```

**(b): $\omega = 3$**
```desmos-graph
left=0; right=20; bottom=-6.7; top=6.7; height=260
---
y=(5-\frac{1}{4-3^2})\cos(2x)+\frac{\cos(3x)}{4-3^2}|#2a78d6
y=5.40|dashed|#8a8985
y=-5.40|dashed|#8a8985
(3.14,5.400)|label:max ≈ 5.40|#eb6834
```

**(c): $\omega = 2.5$**
```desmos-graph
left=0; right=20; bottom=-7.3; top=7.3; height=260
---
y=(5-\frac{1}{4-2.5^2})\cos(2x)+\frac{\cos(2.5x)}{4-2.5^2}|#2a78d6
y=5.89|dashed|#8a8985
y=-5.89|dashed|#8a8985
(6.28,5.889)|label:max ≈ 5.89|#eb6834
```

**(d): $\omega = 1.5$**
```desmos-graph
left=0; right=20; bottom=-6.2; top=6.2; height=260
---
y=(5-\frac{1}{4-1.5^2})\cos(2x)+\frac{\cos(1.5x)}{4-1.5^2}|#2a78d6
y=5.00|dashed|#8a8985
y=-5.00|dashed|#8a8985
(0.00,5.000)|label:max ≈ 5.00|#eb6834
```

**(e): $\omega = 1$**
```desmos-graph
left=0; right=20; bottom=-6.2; top=6.2; height=260
---
y=(5-\frac{1}{4-1^2})\cos(2x)+\frac{\cos(1x)}{4-1^2}|#2a78d6
y=5.00|dashed|#8a8985
y=-5.00|dashed|#8a8985
(0.00,5.000)|label:max ≈ 5.00|#eb6834
```

9. Which value gives the greatest maximum amplitude?

$\omega = 2.5$ gave the biggest max amplitude, about 5.89. It's one of the closest values to the natural frequency of 2, and its forcing term has the opposite sign of the starting motion, so the two cosines can add up instead of canceling.

You should see that the closer we are to the value 2, the larger the maximum amplitude gets. So the closer the period of our forcing function is to the natural period of the system, the larger the amplitude becomes; the forcing function is at just the right frequency to reinforce the natural oscillation. This is called **resonance**.

10. Explain how the algebra shows that the amplitude becomes large when $\omega$ is close to 2 by looking at the form of your equation.

Both terms have $\frac{1}{4 - \omega^2}$ in them. When $\omega$ gets close to 2, $4 - \omega^2$ gets close to 0, so $\frac{1}{4-\omega^2}$ gets really big, and so does $C_1 = 5 - \frac{1}{4-\omega^2}$. The solution is two cosines with almost the same frequency, so they slowly go in and out of phase (beats). When they line up, the amplitude is $|C_1| + \left|\frac{1}{4-\omega^2}\right|$, which is huge when $\omega$ is near 2. At exactly $\omega = 2$ you'd be dividing by zero, which is why Scenario 3 needs a different guess.

11. Let's try some values that are very close to 2. Graph each of these in Desmos and estimate the maximum amplitude for each of the following.

| $\omega$ | $\frac{1}{4-\omega^2}$ | $C_1$ | Max amplitude |
| --- | --- | --- | --- |
| (a) 2.3 | $-0.775$ | $5.775$ | $\approx 6.55$ |
| (b) 2.1 | $-2.439$ | $7.439$ | $\approx 9.88$ |
| (c) 2.02 | $-12.44$ | $17.44$ | $\approx 29.9$ |
| (d) 1.99 | $25.06$ | $-20.06$ | $\approx 45.1$ |
| (e) 1.97 | $8.396$ | $-3.396$ | $\approx 11.8$ |

The closer $\omega$ is to 2, the bigger the peaks get, but you have to wait longer to see them. The beats repeat about every $\frac{2\pi}{|\omega - 2|}$, which is around 630 for $\omega = 1.99$.

**(a): $\omega = 2.3$**
```desmos-graph
left=0; right=80; bottom=-8.0; top=8.0; height=260
---
y=(5-\frac{1}{4-2.3^2})\cos(2x)+\frac{\cos(2.3x)}{4-2.3^2}|#2a78d6
y=6.55|dashed|#8a8985
y=-6.55|dashed|#8a8985
(31.42,6.550)|label:max ≈ 6.55|#eb6834
```

**(b): $\omega = 2.1$**
```desmos-graph
left=0; right=80; bottom=-11.9; top=11.9; height=260
---
y=(5-\frac{1}{4-2.1^2})\cos(2x)+\frac{\cos(2.1x)}{4-2.1^2}|#2a78d6
y=9.88|dashed|#8a8985
y=-9.88|dashed|#8a8985
(31.42,9.878)|label:max ≈ 9.88|#eb6834
```

**(c): $\omega = 2.02$**
```desmos-graph
left=0; right=400; bottom=-34.9; top=34.9; height=260
---
y=(5-\frac{1}{4-2.02^2})\cos(2x)+\frac{\cos(2.02x)}{4-2.02^2}|#2a78d6
y=29.88|dashed|#8a8985
y=-29.88|dashed|#8a8985
(157.08,29.876)|label:max ≈ 29.88|#eb6834
```

**(d): $\omega = 1.99$**
```desmos-graph
left=0; right=700; bottom=-52.4; top=52.4; height=260
---
y=(5-\frac{1}{4-1.99^2})\cos(2x)+\frac{\cos(1.99x)}{4-1.99^2}|#2a78d6
y=45.13|dashed|#8a8985
y=-45.13|dashed|#8a8985
(314.16,-45.125)|label:max ≈ 45.13|#eb6834
```

**(e): $\omega = 1.97$**
```desmos-graph
left=0; right=700; bottom=-14.1; top=14.1; height=260
---
y=(5-\frac{1}{4-1.97^2})\cos(2x)+\frac{\cos(1.97x)}{4-1.97^2}|#2a78d6
y=11.79|dashed|#8a8985
y=-11.79|dashed|#8a8985
(314.16,-11.793)|label:max ≈ 11.79|#eb6834
```

## Scenario 3

Now suppose that the forcing function is $\cos(2t)$, so $\omega$ is exactly 2 and the frequency of the forcing function exactly matches our natural frequency. Our equation is now
$$
y'' + 4y = \cos(2t)
$$

12. Find the particular solution to this equation.

Since $\cos(2t)$ is already a solution to the homogeneous equation, the normal guess just gives 0, so I multiplied the guess by $t$:
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

The amplitude keeps growing and never levels off. The $\frac{t}{4}\sin(2t)$ term gets bigger as $t$ increases, so the oscillations keep getting larger forever (the outline on the graph is $\sqrt{25 + t^2/16}$, which is about $t/4$ for big $t$). This happens because the forcing is pushing at exactly the natural frequency, so every push adds to the motion.

```desmos-graph
left=0; right=60; bottom=-17; top=17; height=300
---
y=5\cos(2x)+\frac{x}{4}\sin(2x)|#2a78d6
y=\sqrt{25+\frac{x^2}{16}}|dashed|#eb6834
y=-\sqrt{25+\frac{x^2}{16}}|dashed|#eb6834
```


