---
class: "[[PHYS 218]]"
date: 2026-09-15
score: 62/100
tags: [exam, corrections]
---
# PHYS 218 – Fall 2026 – Exam 1 – Electrostatics
Class: [[PHYS 218]] · Original: [graded exam PDF](<file:///C:/Users/Cache/Documents/School/Fall 2026/PHYS 218/Exams/Exam 1 - graded (Merged_Exam_Pages).pdf>) · Drill it: [[Flashcards - PHYS 218 Electrostatics (Ch 5-8)]]

**Name:** Cache Page  **Score: 62 / 100**

> [!info] How to read this
> - Black/normal text = **your work that was correct**.
> - <span style="color:#e5484d">Red = your work that was incorrect</span> (copied as you wrote it).
> - <span style="color:#30a46c">Green = the correction</span>.
> - Scores in the margins are the grader's.

| Problem | Score | Points lost | Main cause |
|---|---|---|---|
| 1: Point charges | 16/25 | 9 | sign/direction, wrong distances, wrong method for $V$ |
| 2: Spherical shell | 21/25 | 4 | continuity concept, sketching $V$ from $E$ |
| 3: Cylindrical conductor | 19/25 | 6 | units didn't match |
| 4: Charged disk | 6/25 | 19 | ran out of time + wrong distance in $dV$ |

> [!note]- Equation sheet (from the exam)
> $F_{12} = \dfrac{kq_1q_2}{r^2}$ · $\vec F = q\vec E$ · $k = \dfrac{1}{4\pi\varepsilon_0} = 9\times10^{9}\ \mathrm{\frac{N\,m^2}{C^2}}$ · $\varepsilon_0 = 8.854\times10^{-12}\ \mathrm{\frac{C^2}{N\,m^2}}$
>
> $\vec E = \dfrac{kq}{r^2}\hat r$ and $V = \dfrac{kq}{r}$ (point charge or outside a spherical charge distribution)
>
> $\Phi_E = \displaystyle\int \vec E\cdot d\vec A$ · $\displaystyle\oint \vec E\cdot d\vec A = \frac{Q_{\text{encl}}}{\varepsilon_0}$ · $\Delta V = -\displaystyle\int \vec E\cdot d\vec s$ · $E_s = -\dfrac{dV}{ds}$ · $\vec E = -\nabla V$
>
> $V = k\displaystyle\int\frac{dq}{r}$ · $\vec E = k\displaystyle\int\frac{dq}{r^2}\hat r$ · $dq = \rho\,dV$ or $\sigma\,dA$ or $\lambda\,dL$
>
> $\vec\tau = \vec p\times\vec E$ · $U = -\vec p\cdot\vec E$ · $W = -\Delta U$ · $U = qV$ · $U = \dfrac{kq_1q_2}{r}$ · $\Delta K + \Delta U = 0$

---

## Problem 1 (25%) · 16/25
> Charges $q_1$ and $q_2$ are on the $x$-axis with $q_1$ at the origin and $q_2$ a distance $d$ to the right of $q_1$. Both are negative charges, and $q_1$ is 4 times greater magnitude than $q_2$: $q_1 = -4Q$ and $q_2 = -Q$, where $Q$ is a positive value of charge. Also consider a positive charge $q$.
>
> **(a)** Suppose the positive charge $q$ is placed on the $x$-axis at $x = -a$, where $a \ll d$. **Draw vectors and write expressions** for the following forces using $Q, q, a, d, k$, and $\hat\imath$. Your drawings should clearly indicate the directions and relative magnitudes of the forces.

### (a)(i) (4 pts) The force on $q$ due to $q_1$ · 3/4
$$\vec F_1 = \boxed{k\,\frac{4Qq}{a^2}\,\hat\imath}\quad \text{(points in the }+\hat\imath\text{ direction)}$$
Side work: ${\color{#e5484d} k\dfrac{(-4Q)(q)}{a^2}\,\hat\imath}$ <span style="color:#e5484d">(this comes out negative, so it contradicts the boxed answer; −1 for sign)</span>

<span style="color:#30a46c"><b>Fix:</b> get the magnitude from $k|q_1||q_2|/r^2$, then get the direction from physics. Opposite charges attract, so $q$ is pulled toward $q_1$, which is the $+\hat\imath$ direction.</span>

### (a)(ii) (4 pts) The force on $q$ due to $q_2$ · 4/4
$$\vec F_2 = \boxed{k\,\frac{Qq}{(a+d)^2}\,\hat\imath}\quad \text{(also points in the }+\hat\imath\text{ direction)}$$

### (a)(iii) (4 pts) The net force on $q$ · 2/4
$${\color{#e5484d} \vec F_{net} = \left(-\frac{kQq}{(a+d)^2} - \frac{4kQq}{a^2}\right)\hat\imath = \frac{-kQq\left(a^2 + (a+d)^2\right)}{a^2(a+d)^2}\,\hat\imath}$$
<span style="color:#e5484d">Both terms are negative (this contradicts (i) and (ii)), the factor of 4 is dropped in the combined fraction, and there's no drawing of $\vec F_{net}$.</span>
$${\color{#30a46c} \vec F_{net} = kQq\left[\frac{4}{a^2} + \frac{1}{(a+d)^2}\right]\hat\imath = kQq\,\frac{4(a+d)^2 + a^2}{a^2(a+d)^2}\,\hat\imath}$$
<span style="color:#30a46c">Drawing: $\vec F_1$ is a long arrow to the right, $\vec F_2$ is a much shorter arrow to the right (since $a \ll d$), and $\vec F_{net}$ is slightly longer than $\vec F_1$, also to the right.</span>

> **(b)** Express your answers in terms of $Q$, $d$, and $k$ (the distance $a$ is not part of these questions).

### (b)(i) (7 pts) What $x$-coordinate $x_0$ (not infinity) could $q$ be placed at such that the net force on it is zero? · 6/7
Your work: $F = 0$ where $E_1 = E_2$
$${\color{#e5484d} \frac{-4kQ}{(d-x)^2} = \frac{-kQ}{(x-d)^2} \;\to\; \frac{2}{d-x} = \frac{1}{x-d} \;\to\; 2x - 2d = d - x \;\to\; \boxed{x_0 = d}}$$
<span style="color:#e5484d">$x_0 = d$ is exactly where $q_2$ sits, so the force there is infinite, not zero. Two errors: the distance to $q_1$ is $x$, not $d-x$; and $(x-d)^2 = (d-x)^2$, so the square roots must match.</span>

<span style="color:#30a46c">Both charges are negative, so positive $q$ is attracted to both. The pulls can only cancel <b>between</b> them ($0 < x < d$):</span>
$${\color{#30a46c} \frac{4kQq}{x^2} = \frac{kQq}{(d-x)^2} \;\Longrightarrow\; \frac{2}{x} = \frac{1}{d-x} \;\Longrightarrow\; \boxed{x_0 = \tfrac{2d}{3}}}$$
<span style="color:#30a46c">Sanity check: $x_0$ is closer to the weaker charge $q_2$. ✓</span>

### (b)(ii) (6 pts) What is the electric potential $V$ at that position? Assume $V \to 0$ as $x \to \pm\infty$. · 1/6
$${\color{#e5484d} V(x_0) = V(d) = V(q_2) - V(\infty) = -\int_\infty^{q_2} \frac{-kQ}{r^2}\,dr = kQ\left(-\frac{1}{q_2} - 0\right) \;\Rightarrow\; \boxed{V(d) = -\frac{kQ}{q_2} = \frac{-kQ}{-Q} = k}}$$
<span style="color:#e5484d">This integrates only $E_2$ (ignores $q_1$), uses the charge $q_2$ as a position, and gives $V = k$, which has units of N·m²/C², not volts.</span>

<span style="color:#30a46c">Grader's note: <b>use $V = V_1 + V_2$</b>. Potential is a scalar and $V = kq/r$ is on the formula sheet:</span>
$${\color{#30a46c} V(x_0) = \frac{k(-4Q)}{2d/3} + \frac{k(-Q)}{d/3} = -\frac{6kQ}{d} - \frac{3kQ}{d} = \boxed{-\frac{9kQ}{d}}}$$

---

## Problem 2 (25%) · 21/25
> A spherical shell centered on the origin has inner radius $R_1$ and outer radius $R_2$. The shell has a **uniform** volume charge density $\rho$. The inside of the shell ($r < R_1$) is empty.

### (a) (3 pts) Is the shell a conductor or an insulator? Explain. · 3/3
It is an **insulator**: in a conductor, charge gathers at the surface, so it wouldn't be uniform.

### (b) (3 pts) What is the total charge of the shell $Q_{tot}$ in terms of $\rho$, $R_1$, and $R_2$? · 3/3
$$Q = \rho V = \rho\big(V(R_2) - V(R_1)\big) = \boxed{\rho\,\tfrac{4}{3}\pi\left(R_2^3 - R_1^3\right) = Q_{tot}}$$

### (c) (9 pts) Find the electric field $\vec E(r)$ for $r < R_1$, $R_1 < r < R_2$, and $r > R_2$. · 9/9
$$
\begin{align}
r < R_1:&\quad \boxed{\vec E(r) = 0} \quad \text{by Gauss's law (no charge enclosed)} \\
R_1 < r < R_2:&\quad E(4\pi r^2) = \frac{\rho\,\tfrac43\pi(r^3 - R_1^3)}{\varepsilon_0} \;\Rightarrow\; \boxed{E = \frac{\rho r^3 - \rho R_1^3}{3\varepsilon_0 r^2}} \\
r > R_2:&\quad E(4\pi r^2) = \frac{\rho\,\tfrac43\pi(R_2^3 - R_1^3)}{\varepsilon_0} \;\Rightarrow\; \boxed{E = \frac{\rho R_2^3 - \rho R_1^3}{3\varepsilon_0 r^2}}
\end{align}
$$

### (d) (4 pts) Is $E(r)$ continuous at $r = R_1$? At $r = R_2$? · 2/4
Insert $R_1$ into $E(r)$ for $R_1 < r < R_2$ $\to 0$.
$${\color{#e5484d} E(r)\ \text{not continuous at } r = R_1\text{, vertical jump}}\text{, but continuous at } r = R_2\ {\color{#e5484d} \text{(linear to exponential decay)}}$$
<span style="color:#e5484d">Your own check (plugging in $R_1$ gives 0) proves it IS continuous at $R_1$. "Linear" and "exponential" are also wrong: inside, $E \propto r - R_1^3/r^2$, and outside, $E \propto 1/r^2$ (a power law).</span>

<span style="color:#30a46c"><b>Continuous at both.</b> $E$ only jumps where there's a <b>surface</b> charge $\sigma$ (jump $= \sigma/\varepsilon_0$). A volume charge $\rho$ never makes $E$ jump, and $V$ is always continuous.</span>

### (e) (3 pts) Sketch $E(r)$ vs $r$. Indicate $R_1$ and $R_2$. · 2/3
<span style="color:#e5484d">Your sketch: a point at $R_1$ then an "$(r)$ term" rising to $R_2$ and a "$1/r^2$ term" falling. It showed a jump at $R_1$.</span>

<span style="color:#30a46c">Correct: starts at <b>0</b> at $R_1$ with <b>no jump</b>, rises to a peak at $R_2$, then falls as $1/r^2$. (Plot uses $R_1 = 1$, $R_2 = 2$, $\rho/3\varepsilon_0 = 1$.)</span>
```desmos-graph
left=0; right=5; bottom=-0.3; top=2.2; height=280
---
y=0|0<x<1|#30a46c
y=(x^3-1)/x^2|1<x<2|#30a46c
y=(8-1)/x^2|x>2|#30a46c
x=1|dashed|#8a8985
x=2|dashed|#8a8985
```

### (f) (3 pts) Sketch $V(r)$. Indicate $R_1$ and $R_2$. Assume $V \to 0$ as $r \to \infty$. · 2/3
Your reasoning: $V \approx$ some $\frac1r$ term for $r > R_2$ ✓ · <span style="color:#e5484d">"$V \approx$ constant for $R_1 < r < R_2$" and "$V \approx -\frac{r^2}{2}$ for $r < R_1$"</span> <span style="color:#e5484d">(the regions are backwards)</span>

<span style="color:#30a46c">Use $E = -dV/dr$: where $E = 0$ ($r < R_1$), $V$ is <b>flat</b>; where $E > 0$, $V$ <b>decreases</b> outward. So: flat at its <b>maximum</b> for $r < R_1$, curving smoothly down through the shell, then $kQ/r$ outside. $V(0)$ is the highest value, not 0.</span>
```desmos-graph
left=0; right=5; bottom=-0.3; top=5; height=280
---
y=4.5|0<x<1|#30a46c
y=6-x^2/2-1/x|1<x<2|#30a46c
y=7/x|x>2|#30a46c
x=1|dashed|#8a8985
x=2|dashed|#8a8985
```

---

## Problem 3 (25%) · 19/25
> An infinitely long cylindrical **conducting** shell of inner radius $R_1$ and outer radius $R_2$ initially carries a positive surface charge density $\sigma$. A thin wire, with positive linear charge density $\lambda$, is inserted along the shell's axis. The shell and the wire do not touch and there is no charge exchanged between them.

Grader: *"Generally right approach"* · *"check dimensions"*

### (a) (4 pts) New surface charge density $\sigma_{in}$ on the inner surface? · 2/4
$${\color{#e5484d} \boxed{\sigma_{inner} = -\lambda}} \quad (\vec E \text{ must} = 0 \text{ in the conductor};\ q_{rod} + q_{inner} = 0)$$
<span style="color:#e5484d">$\sigma$ is C/m² and $\lambda$ is C/m, so they can't be equal. The reasoning is right; the units aren't.</span>
$${\color{#30a46c} \sigma_{in} = -\frac{\lambda}{2\pi R_1}}$$

### (b) (4 pts) New surface charge density $\sigma_{out}$ on the outer surface? · 3/4
$${\color{#e5484d} \boxed{\sigma_{outer} = \sigma + \lambda}}$$
$${\color{#30a46c} \sigma_{out} = \sigma + \frac{\lambda}{2\pi R_2}}$$

### (c) (6 pts) Find $\vec E(r)$ for $r < R_1$, $R_1 < r < R_2$, $r > R_2$. · 5/6
$$
\begin{align}
r < R_1:&\quad \oint \vec E\cdot d\vec A = \frac{Q_{enc}}{\varepsilon_0} \;\to\; E(2\pi rL) = \frac{\lambda L}{\varepsilon_0} \;\to\; \boxed{\vec E = \frac{\lambda}{2\pi\varepsilon_0 r}\,\hat r} \\
R_1 < r < R_2:&\quad \boxed{\vec E = 0} \quad \text{(no } \vec E \text{ in a conductor)} \\
r > R_2:&\quad {\color{#e5484d} \boxed{\vec E = \tfrac12(\sigma + \lambda)\,r\,\hat r}}
\end{align}
$$
<span style="color:#e5484d">This grows with $r$, has no $\varepsilon_0$, and adds $\sigma$ to $\lambda$ (different units). You wrote the right enclosed charge $\frac{\sigma 2\pi R_2 L + \lambda L}{\varepsilon_0}$ but didn't finish the algebra.</span>
$${\color{#30a46c} E(2\pi rL) = \frac{(2\pi R_2\sigma + \lambda)L}{\varepsilon_0} \;\Longrightarrow\; \vec E = \frac{2\pi R_2\sigma + \lambda}{2\pi\varepsilon_0 r}\,\hat r}$$

### (d) (3 pts) Sketch $E(r)$. Indicate $R_1$ and $R_2$. · 3/3
Your sketch: $1/r$ decay for $r < R_1$, zero in the conductor, then decay again for $r > R_2$ ✓

### (e) (5 pts) Write $V(r)$ for all $r$. Assume $V = 0$ at $r = R_1$. · 4/5
$$
\begin{align}
r < R_1:&\quad {\color{#e5484d} V(r) = \frac{\lambda}{2\pi\varepsilon_0}\ln\left|\frac{r}{R_1}\right|} \\
R_1 < r < R_2:&\quad V(R_2) - V(R_1) = 0 \;\Rightarrow\; V(R_2) = V(R_1)\ \checkmark \\
&\quad {\color{#e5484d} V(R_2) = -\frac{\lambda}{2\pi\varepsilon_0}\ln R_1} \\
r > R_2:&\quad {\color{#e5484d} V(r) = -\frac{\lambda}{2\pi\varepsilon_0}\ln(R_1) + \frac{(\sigma+\lambda)R_2^2}{4} - \frac{(\sigma+\lambda)r^2}{4}}
\end{align}
$$
<span style="color:#e5484d">You'd just shown $V(R_1) = 0$, and you can't take the log of a length ($\ln R_1$). What's inside a log has to be unitless. The $r^2$ terms come from the wrong $E$ in (c). Check the sign inside the wire region too: $V$ should be <b>positive</b> as you get closer to a positive wire.</span>
$$
{\color{#30a46c} 
\begin{aligned}
r < R_1:&\quad V = \frac{\lambda}{2\pi\varepsilon_0}\ln\frac{R_1}{r} \quad (> 0) \\
R_1 \le r \le R_2:&\quad V = 0 \\
r > R_2:&\quad V = -\frac{2\pi R_2\sigma + \lambda}{2\pi\varepsilon_0}\ln\frac{r}{R_2}
\end{aligned}
}
$$

### (f) (3 pts) Sketch $V(r)$. Indicate $R_1$ and $R_2$. · 2/3
<span style="color:#e5484d">Your sketch: a finite value at $r = 0$ curving down to a flat "c term" plateau above 0, then an "$-r^2$ term" dropping off.</span>

<span style="color:#30a46c">Correct: $V \to +\infty$ as $r \to 0$, falls like a log to <b>0 at $R_1$</b>, stays flat at 0 through the conductor, then decreases like a log (negative) for $r > R_2$. (Plot uses $R_1 = 1$, $R_2 = 2$, $\lambda/2\pi\varepsilon_0 = 1$, outer coefficient $= 2$.)</span>
```desmos-graph
left=0; right=6; bottom=-3; top=3; height=280
---
y=\ln(1/x)|0<x<1|#30a46c
y=0|1<x<2|#30a46c
y=-2\ln(x/2)|x>2|#30a46c
x=1|dashed|#8a8985
x=2|dashed|#8a8985
```

---

## Problem 4 (25%) · 6/25
> A flat disk of radius $R_0$ is centered on the $x$-axis and lies in a plane perpendicular to the $x$-axis. The disk carries uniform positive surface charge density $\sigma$.

### (a) (3 pts) A small patch of charge $dq$ at distance $r$ from the center of the disk: what is its contribution $dV$ to the potential? · 3/3
$$V = k\int\frac{dq}{r} \;\to\; dV = k\frac{dq}{r} = {\color{#e5484d} \boxed{k\frac{\sigma\,dA}{r}}}$$
<span style="color:#e5484d">Graded full credit, but the denominator must be the distance from the patch to the point $P$ on the axis, not $r$ (the distance to the disk's center).</span>
$${\color{#30a46c} dV = k\frac{\sigma\,dA}{\sqrt{x^2 + r^2}}}$$

### (b) (8 pts) Determine $V(x)$ along the $x$-axis. Assume $V \to 0$ as $x \to \pm\infty$. · 2/8
$${\color{#e5484d} V(x) = -k\int\frac{Q(2\pi r\ldots)}{\sqrt{x^2 + r^2}}\ \ldots}$$
<span style="color:#e5484d">Grader: "Need to integrate over disk area. Involves $\int\frac{r}{\sqrt{x^2+r^2}}\,dr$."</span>

<span style="color:#30a46c">Split the disk into rings: $dq = \sigma(2\pi r\,dr)$. Every point on a ring is $\sqrt{x^2 + r^2}$ from $P$.</span>
$${\color{#30a46c} V(x) = k\sigma\int_0^{R_0}\frac{2\pi r\,dr}{\sqrt{x^2 + r^2}} = \frac{\sigma}{2\varepsilon_0}\left(\sqrt{x^2 + R_0^2} - |x|\right)}$$

### (c) (8 pts) Determine $\vec E(x)$ along the $x$-axis. · 1/8
$${\color{#e5484d} \vec E(x) = k\frac{Q\pi r^2}{(x^2 + r^2)}\cos\theta\ \hat\imath}$$
$${\color{#30a46c} \vec E(x) = -\frac{dV}{dx}\,\hat\imath = \frac{\sigma}{2\varepsilon_0}\left(\operatorname{sgn}(x) - \frac{x}{\sqrt{x^2 + R_0^2}}\right)\hat\imath}$$
<span style="color:#30a46c">Checks: near the disk ($x \to 0^+$), $E \to \sigma/2\varepsilon_0$ (the infinite-plane result). Far away, $V \to kQ/|x|$ and $E \to kQ/x^2$ (a point charge).</span>

### (d) (6 pts) Sketch $V(x)$ and $E(x)$. · 0/8
<span style="color:#e5484d">Left blank ("ran out of time here"). Guess on the back: both positive and getting weaker as $x$ increases, covering $x > 0$ only.</span> Grader: *"Give your best guess."*

<span style="color:#30a46c">$V(x)$: a symmetric peak at $x = 0$ with height $\sigma R_0/2\varepsilon_0$, a sharp point at $x = 0$, decaying on both sides. $E(x)$: an <b>odd</b> function that jumps from $-\sigma/2\varepsilon_0$ to $+\sigma/2\varepsilon_0$ at $x = 0$ (a surface charge), then decays. (Plots use $\sigma/2\varepsilon_0 = 1$, $R_0 = 1$.)</span>
```desmos-graph
left=-4; right=4; bottom=-1.3; top=1.3; height=280
---
y=\sqrt{x^2+1}-\left|x\right||#30a46c|label:V(x)
y=1-x/\sqrt{x^2+1}|x>0|#2a78d6
y=-1-x/\sqrt{x^2+1}|x<0|#2a78d6
```
<span style="color:#30a46c">Green = $V(x)$, blue = $E(x)$.</span>

---

## What to take away
> [!success] Fixes that would have recovered most of the 38 points
> 1. **Time:** budget ~25% of the exam per problem. The page spent on 1(b)(ii) (6 pts) cost most of Problem 4 (25 pts).
> 2. **Units check every boxed answer:** it catches $V = k$, $\sigma = -\lambda$, $\ln R_1$, and $E \propto r$.
> 3. **Directions from physics:** magnitude from the formula, then attract/repel for the direction.
> 4. **Use the formula sheet:** $V = \sum kq/r$ for point charges, with no integral.
> 5. **Graph rules:** $E = -dV/dr$; $V$ is always continuous; $E$ jumps only at a surface charge; inside a conductor $E = 0$ and $V$ is constant.
> 6. **Know the standard setups cold:** ring, disk, and line by integration; sphere, shell, cylinder, and coax by Gauss's law.
