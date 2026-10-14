---
class: "[[PHYS 218]]"
tags: [exam, practice-exam, capacitance, circuits, rc-circuits]
---
# Exam 2 Sample Exam (Ch 8–10)
Class: [[PHYS 218]] · Exam 2 is **Tue Oct 13** · Full review: [[Exam 2 Review - Ch 8-10]] · Chapter notes: [[Ch 08 - Capacitance]] · [[Ch 09 - Current and Resistance]] · [[Ch 10 - Direct-Current Circuits]]

*Four multi-part problems, one per major topic: capacitors (Ch 8), resistance and real batteries (Ch 9–10.1), Kirchhoff's rules (10.3), and RC circuits with a meter (10.4–10.5). Time yourself: **50 minutes**. Calculator and equation sheet OK. Show your work and give units. The worked key is at the bottom.*

$\varepsilon_0 = 8.85\times10^{-12}\ \text{C}^2/(\text{N}\cdot\text{m}^2)$

---

## Problem 1: Capacitor network (Ch 8)
$C_1 = 6.0\ \mu\text{F}$ and $C_2 = 3.0\ \mu\text{F}$ are in series, and that pair is in parallel with $C_3 = 4.0\ \mu\text{F}$. The network is connected to a 24 V battery.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,3) to[battery1, l_=$24$ V] (0,0);
\draw (0,3) -- (2.5,3) to[C, l=$C_1$] (2.5,1.5) to[C, l=$C_2$] (2.5,0) -- (0,0);
\draw (2.5,3) to[short,*-] (2.5,3) -- (5,3) to[C, l=$C_3$] (5,0) -- (2.5,0) node[circ]{};
\end{circuitikz}
\end{document}
```

- (a) Find the equivalent capacitance.
- (b) Find the charge on and the voltage across each capacitor.
- (c) Find the total energy stored.
- (d) The battery is **disconnected**. Then a slab with $\kappa = 3.0$ is slid into $C_3$, filling it. Find the new voltage across the network and the new total stored energy. Did the energy go up or down, and why?

## Problem 2: Heater wire and a real battery (Ch 9, 10.1)
A heater element is a nichrome wire 4.0 m long with diameter 0.40 mm ($\rho = 1.10\times10^{-6}\ \Omega\cdot\text{m}$, $\alpha = 4.0\times10^{-4}\ /°\text{C}$). It's connected to a battery with $\varepsilon = 12.0$ V and internal resistance $r = 1.0\ \Omega$.

- (a) Find the resistance of the wire at 20 °C.
- (b) Find the current and the battery's terminal voltage.
- (c) Find the power delivered to the heater, the power wasted inside the battery, and the efficiency (useful power ÷ total power).
- (d) Once running, the wire reaches 320 °C. Find its new resistance and the new current. Explain in one sentence why the current changes.

## Problem 3: Kirchhoff's rules (10.3)
$\varepsilon_1 = 18$ V, $\varepsilon_2 = 6.0$ V, $R_1 = 3.0\ \Omega$, $R_2 = 6.0\ \Omega$, $R_3 = 2.0\ \Omega$. Both batteries have their $+$ terminal on top. Take $I_1$ up through the left branch, $I_2$ down through the middle branch ($R_2$), and $I_3$ down through the right branch.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,3) to[battery1, l_=$\varepsilon_1$] (0,0);
\draw (0,3) to[R, l=$R_1$] (3,3) to[R, l=$R_2$, *-*] (3,0);
\draw (3,3) to[R, l=$R_3$] (6,3) to[battery1, l=$\varepsilon_2$] (6,0);
\draw (6,0) -- (0,0);
\end{circuitikz}
\end{document}
```

- (a) Write the junction equation and two loop equations.
- (b) Solve for $I_1$, $I_2$ and $I_3$.
- (c) Is $\varepsilon_2$ being charged or discharged? How do you know?
- (d) Check your answer with a power balance.

## Problem 4: RC circuit with a meter (10.4, 10.5)
$\varepsilon = 12$ V, $R_1 = 2.0$ kΩ, $R_2 = 4.0$ kΩ, $C = 50\ \mu\text{F}$. The capacitor is uncharged when switch $S$ closes at $t = 0$.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,3) to[battery1, l_=$\varepsilon$] (0,0);
\draw (0,3) to[nos, l=$S$] (2.5,3) to[R, l=$R_1$] (5,3);
\draw (5,3) to[R, l=$R_2$, *-*] (5,0);
\draw (5,3) -- (7.5,3) to[C, l=$C$] (7.5,0) -- (0,0);
\end{circuitikz}
\end{document}
```

- (a) Find the current through $R_1$ just after the switch closes.
- (b) Find the current through $R_1$ a long time later, and the final charge on the capacitor.
- (c) Find the time constant for charging.
- (d) After it's fully charged, the switch is opened. How long until the capacitor's voltage drops to 2.0 V? How much energy does $R_2$ dissipate over the whole discharge?
- (e) Back at steady state with the switch closed, you measure the voltage across $C$ with a voltmeter whose resistance is 40 kΩ. What does it read? Why isn't it the true value?

---

## Answer key

### Problem 1
**(a)** Series pair first: $C_{12} = \dfrac{C_1C_2}{C_1 + C_2} = \dfrac{(6)(3)}{9} = 2.0\ \mu\text{F}$. In parallel with $C_3$, capacitances add: $C_{eq} = 2.0 + 4.0 = \boxed{6.0\ \mu\text{F}}$.

**(b)** Both branches have the full 24 V across them (they're in parallel with the battery).
- Series branch: $Q_{12} = C_{12}V = (2.0\ \mu\text{F})(24\ \text{V}) = 48\ \mu\text{C}$. Series capacitors carry the **same** charge, so $Q_1 = Q_2 = \boxed{48\ \mu\text{C}}$.
  $V_1 = Q/C_1 = 48/6 = \boxed{8.0\ \text{V}}$ and $V_2 = 48/3 = \boxed{16\ \text{V}}$. Check: $8 + 16 = 24$ ✓. (The smaller capacitor takes the bigger voltage.)
- $C_3$: $V_3 = \boxed{24\ \text{V}}$ and $Q_3 = (4.0)(24) = \boxed{96\ \mu\text{C}}$.

**(c)** $U = \tfrac12C_{eq}V^2 = \tfrac12(6.0\times10^{-6})(24)^2 = \boxed{1.73\times10^{-3}\ \text{J}}$.

**(d)** With the battery disconnected, **charge is conserved**: the network holds $Q = 48 + 96 = 144\ \mu\text{C}$.
- New $C_3 = \kappa C_3 = 12\ \mu\text{F}$, so $C_{eq}' = 2.0 + 12 = 14\ \mu\text{F}$.
- $V' = \dfrac{Q}{C_{eq}'} = \dfrac{144}{14} = \boxed{10.3\ \text{V}}$
- Use the form with what's fixed ($Q$): $U' = \dfrac{Q^2}{2C_{eq}'} = \dfrac{(144\times10^{-6})^2}{2(14\times10^{-6})} = \boxed{7.41\times10^{-4}\ \text{J}}$
- The energy went **down** (from 1.73 mJ to 0.74 mJ). With $Q$ fixed and $C$ bigger, $Q^2/2C$ drops. The missing energy went into work: the field pulls the dielectric into the capacitor.

### Problem 2
**(a)** $A = \pi r^2 = \pi(0.20\times10^{-3})^2 = 1.257\times10^{-7}\ \text{m}^2$ (half the diameter!).
$R = \dfrac{\rho L}{A} = \dfrac{(1.10\times10^{-6})(4.0)}{1.257\times10^{-7}} = \boxed{35.0\ \Omega}$

**(b)** One loop: $\varepsilon - Ir - IR = 0$, so $I = \dfrac{\varepsilon}{R + r} = \dfrac{12.0}{36.0} = \boxed{0.333\ \text{A}}$.
Terminal voltage: $V = \varepsilon - Ir = 12.0 - 0.333(1.0) = \boxed{11.67\ \text{V}}$ (equal to $IR$ ✓).

**(c)**
- Heater: $P_R = I^2R = (0.333)^2(35.0) = \boxed{3.89\ \text{W}}$
- Wasted in the battery: $P_r = I^2r = (0.333)^2(1.0) = \boxed{0.111\ \text{W}}$
- Total from the emf: $I\varepsilon = 4.00$ W ✓ (sum of the two).
- Efficiency: $\dfrac{3.89}{4.00} = \dfrac{R}{R + r} = \boxed{97.2\%}$

**(d)** $R = R_0[1 + \alpha\Delta T] = 35.0[1 + (4.0\times10^{-4})(300)] = 35.0(1.12) = \boxed{39.2\ \Omega}$.
$I = \dfrac{12.0}{39.2 + 1.0} = \boxed{0.298\ \text{A}}$.
The current **drops** because a hotter metal has more atomic vibration, so electrons collide more often and the resistance goes up.

### Problem 3
**(a)**
- Junction (top middle): $I_1 = I_2 + I_3$
- Left loop (up through $\varepsilon_1$, across $R_1$, down $R_2$): $18 - 3I_1 - 6I_2 = 0$
- Right loop (start at the top junction, down through $R_3$'s branch: across $R_3$, down through $\varepsilon_2$ from $+$ to $-$, then back up $R_2$ against $I_2$): $-2I_3 - 6 + 6I_2 = 0$

**(b)** From the right loop, $I_3 = 3I_2 - 3$. Junction: $I_1 = I_2 + 3I_2 - 3 = 4I_2 - 3$. Into the left loop: $18 - 3(4I_2 - 3) - 6I_2 = 0$, so $27 - 18I_2 = 0$ and $I_2 = 1.5$ A.
$$\boxed{I_1 = 3.0\ \text{A},\quad I_2 = 1.5\ \text{A},\quad I_3 = 1.5\ \text{A}}$$
Fast check with the node voltage $V$ at the top junction (bottom wire = 0): $\frac{18 - V}{3} = \frac{V}{6} + \frac{V - 6}{2}$ gives $36 - 2V = 4V - 18$, so $V = 9$ V. Then $I_1 = (18 - 9)/3 = 3$, $I_2 = 9/6 = 1.5$, $I_3 = (9 - 6)/2 = 1.5$ ✓.

**(c)** $I_3$ is positive and flows **down** through $\varepsilon_2$, entering its $+$ terminal. So $\varepsilon_2$ is **being charged**. (The junction sits at 9 V, above $\varepsilon_2$'s 6 V, so current is pushed into it.)

**(d)** $\varepsilon_1$ supplies $18 \times 3.0 = 54$ W. $\varepsilon_2$ absorbs $6 \times 1.5 = 9$ W. Resistors: $3(3.0)^2 + 6(1.5)^2 + 2(1.5)^2 = 27 + 13.5 + 4.5 = 45$ W. And $9 + 45 = 54$ ✓.

### Problem 4
**(a)** At $t = 0$ the uncharged capacitor acts like a **wire**, which shorts out $R_2$. Only $R_1$ limits the current:
$I_0 = \dfrac{\varepsilon}{R_1} = \dfrac{12}{2000} = \boxed{6.0\ \text{mA}}$

**(b)** As $t \to \infty$ the capacitor acts like a **break**, so current flows only through $R_1$ and $R_2$ in series:
$I_\infty = \dfrac{12}{6000} = \boxed{2.0\ \text{mA}}$.
The capacitor is in parallel with $R_2$, so $V_C = I_\infty R_2 = (2.0\ \text{mA})(4.0\ \text{k}\Omega) = 8.0$ V, and $Q = CV_C = (50\ \mu\text{F})(8.0\ \text{V}) = \boxed{400\ \mu\text{C}}$.

**(c)** Replace the battery with a wire and look from the capacitor: $R_1$ and $R_2$ are then in parallel.
$R_{eq} = \dfrac{(2)(4)}{2 + 4} = 1.33\ \text{k}\Omega$, so $\tau = R_{eq}C = (1333)(50\times10^{-6}) = \boxed{66.7\ \text{ms}}$.

**(d)** With the switch open, $R_1$ is cut off and the capacitor discharges through $R_2$ alone: $\tau' = R_2C = (4000)(50\times10^{-6}) = 0.20$ s.
$V = V_0e^{-t/\tau'}$ gives $2.0 = 8.0e^{-t/0.20}$, so $t = 0.20\ln 4 = \boxed{0.277\ \text{s}}$.
Over the whole discharge, all of the stored energy ends up as heat in $R_2$: $U = \tfrac12CV_0^2 = \tfrac12(50\times10^{-6})(8.0)^2 = \boxed{1.6\times10^{-3}\ \text{J}}$.

**(e)** At steady state the capacitor is a break, so the voltmeter (40 kΩ) sits in parallel with $R_2$:
$R_2 \parallel R_V = \dfrac{(4)(40)}{44} = 3.64\ \text{k}\Omega$. The divider becomes $V = 12\cdot\dfrac{3.64}{2 + 3.64} = \boxed{7.74\ \text{V}}$, instead of the true 8.0 V.
The voltmeter draws current, which lowers the effective resistance of that section. Its 40 kΩ is only 10× bigger than $R_2$, so it noticeably loads the circuit. (The capacitor ends up charged to the new value, 7.74 V.)

---

## Scoring guide
| Problem | Topic | Points |
|---|---|---|
| 1 | Capacitor network, energy, dielectric | 25 |
| 2 | Resistivity, real battery, power, temperature | 25 |
| 3 | Kirchhoff two-loop circuit | 25 |
| 4 | RC charging/discharging and meter loading | 25 |
