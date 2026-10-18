---
class: "[[PHYS 218]]"
tags: [exam, practice-exam, capacitance, circuits, rc-circuits, kirchhoff]
---
# Exam 2 Practice Exam B (old-exam style)
Class: [[PHYS 218]] · Exam 2 is **Tue Oct 13** · Built from: [[Exam 2 Past Exams - Worked Key]] (F18 + S18) · Also: [[Exam 2 Sample Exam]] · [[Exam 2 Review - Ch 8-10]]

*Five problems, 20% each, the same format as the real F18/S18 exams. Problems 1–3 are remixes of the old-exam problem types. Problem 4 is RC, which neither old exam had. Problem 5 is the multi-EMF Kirchhoff problem, which may not show up, so it's placed last. Time yourself: **50 minutes, about 10 min per problem**. Calculator and the [[Exam 2 Equation Sheet]] OK. No ac (not on this exam). Box your answers. The worked key is at the bottom.*

---

## Problem 1: Capacitor network, one charge given (F1 + S5 style)
$C_1 = 4.0\ \mu\text{F}$, $C_2 = 12\ \mu\text{F}$, $C_3 = 6.0\ \mu\text{F}$, $C_4 = 9.0\ \mu\text{F}$. A voltage $V_{ab}$ is applied between $a$ and $b$, and the charge on $C_3$ is measured to be $Q_3 = 54\ \mu\text{C}$.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,2) -- (0,4) to[C, l=$C_1$] (2.5,4) to[C, l=$C_2$] (5,4) -- (5,2);
\draw (0,2) to[C, l=$C_3$] (5,2);
\draw (0,2) to[C, l_=$C_4$] (0,0) node[circ]{} node[below]{$a$};
\draw (5,2) -- (5,0) node[circ]{} node[below]{$b$};
\end{circuitikz}
\end{document}
```

- (a) Find the equivalent capacitance between $a$ and $b$.
- (b) Find the charge on and the voltage across every capacitor.
- (c) Find $V_{ab}$.
- (d) Find the total energy stored in the network.

## Problem 2: Hot wire and a real battery (F3 + S1 style)
**Part A.** A heater element has resistance $9.6\ \Omega$ at 20 °C and temperature coefficient $\alpha = 4.0\times10^{-4}\ /°\text{C}$. It runs from a steady 120 V source at an operating temperature of 620 °C.

- (a) Find its resistance when it's running.
- (b) Find the current and power when it's running, and also at the instant it's switched on (cold). Which is larger, and why?

**Part B.** A 9.0 V battery runs two small bulbs connected in parallel. Each bulb is rated 3.0 W at 9.0 V. The battery's terminal voltage is measured at 8.6 V.

- (c) Find the battery's internal resistance.
- (d) How much power is wasted inside the battery?
- (e) A third identical bulb is added in parallel. Find the new terminal voltage. Does it go up or down, and why?

## Problem 3: Resistor network (F5 + S4 style)
$R_1 = 4.0\ \Omega$, $R_2 = 12\ \Omega$, $R_3 = 2.0\ \Omega$, $R_4 = 6.0\ \Omega$, $R_5 = 12\ \Omega$, and the battery is an ideal 24 V source.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,3) to[battery1, l_=$24$ V] (0,0);
\draw (0,3) to[R, l=$R_1$] (3,3) node[circ]{} node[above]{$C$};
\draw (3,3) to[R, l=$R_2$] (3,0);
\draw (3,3) to[R, l=$R_3$] (6,3) node[circ]{} node[above]{$D$};
\draw (6,3) to[R, l=$R_4$] (6,0);
\draw (6,3) -- (8.5,3) to[R, l=$R_5$] (8.5,0) -- (0,0);
\end{circuitikz}
\end{document}
```

- (a) Find the equivalent resistance connected to the battery.
- (b) Find the current through each of the five resistors.
- (c) Find the power dissipated in $R_5$.

## Problem 4: RC circuit (10.6)
The capacitor starts uncharged, and the switch closes at $t = 0$. $\mathcal{E} = 12$ V, $R = 50\ \text{k}\Omega$, $C = 40\ \mu\text{F}$.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,3) to[battery1, l_=$\mathcal{E}$] (0,0);
\draw (0,3) to[nos, l=$S$] (2.5,3) to[R, l=$R$] (5,3) to[C, l=$C$] (5,0) -- (0,0);
\end{circuitikz}
\end{document}
```

- (a) Find the time constant and the current just after the switch closes.
- (b) How long does it take the capacitor to reach 9.0 V? What is the current at that moment?
- (c) Find the final charge and the final stored energy. How much energy did the battery supply in total, and where did the rest go?
- (d) The charged capacitor is now disconnected from the battery and connected across a $150\ \text{k}\Omega$ resistor. How long until the **energy** stored in the capacitor falls to 10% of its starting value?

## Problem 5: Two batteries (F4 + S3 style), the multi-EMF one
$\mathcal{E}_1 = 12$ V with internal resistance $r_1 = 0.50\ \Omega$; $\mathcal{E}_2 = 4.0$ V with $r_2 = 0.50\ \Omega$; $R_1 = 5.5\ \Omega$, $R_2 = 4.0\ \Omega$, $R_3 = 1.5\ \Omega$. Both batteries have their **+ terminal on top** (the long plate).

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,1.8) to[battery1, l_=$\mathcal{E}_1$] (0,0);
\draw (0,1.8) to[R, l=$r_1$] (0,3.5) to[R, l=$R_1$] (0,5.5) -- (6,5.5);
\draw (0,5.5) node[circ]{} node[above]{$T$};
\draw (3,5.5) to[R, l=$R_2$] (3,0);
\draw (6,1.8) to[battery1, l=$\mathcal{E}_2$] (6,0);
\draw (6,1.8) to[R, l_=$r_2$] (6,3.5) to[R, l_=$R_3$] (6,5.5);
\draw (0,0) node[circ]{} node[below]{$G$} -- (6,0);
\end{circuitikz}
\end{document}
```

- (a) Define three unknown currents with directions, then box one junction equation and two loop equations.
- (b) Solve for the magnitude and direction of the current in each branch.
- (c) Find the terminal voltage of each battery. Is either one being **charged**?
- (d) Find $V_T - V_G$.

---
---

## Answer key

### Problem 1

**Topology.** $C_1$ and $C_2$ are on one path with no branch between them, so they're in series. That pair connects the same two nodes as $C_3$, so the pair is in parallel with $C_3$. That whole block shares one path with $C_4$, so the block is in series with $C_4$. This is the same shape as F1.

**(a)** Reduce from the inside out:

$$C_{12} = \frac{4\cdot12}{4+12} = 3.0\ \mu\text{F}, \qquad C_{123} = 3 + 6 = 9.0\ \mu\text{F}$$

$$C_{ab} = \frac{9\cdot 9}{9+9} = \boxed{4.5\ \mu\text{F}}$$

**(b)** Start from the one thing you know, $Q_3$.

- **$C_3$:** $V_3 = Q_3/C_3 = 54/6 = 9.0$ V. Parallel elements share voltage, so the whole block, including the $C_1$–$C_2$ branch, sits at 9.0 V.
- **$C_1$ and $C_2$:** they're in series, so they carry the same charge as their equivalent: $Q_1 = Q_2 = C_{12}(9.0) = 27\ \mu$C. Then $V_1 = 27/4 = 6.75$ V and $V_2 = 27/12 = 2.25$ V. Check: $6.75 + 2.25 = 9.0$ ✓.
- **$C_4$:** it's in series with the block, so it carries the block's total charge: $Q_4 = Q_{12} + Q_3 = 27 + 54 = 81\ \mu$C. Then $V_4 = 81/9 = 9.0$ V.

| | $C_1$ | $C_2$ | $C_3$ | $C_4$ |
|---|---|---|---|---|
| $Q$ (µC) | 27 | 27 | 54 | 81 |
| $V$ (V) | 6.75 | 2.25 | 9.0 | 9.0 |

**(c)** Series voltages add: $V_{ab} = V_{123} + V_4 = 9 + 9 = \boxed{18\ \text{V}}$.

Check: $C_{ab}V_{ab} = 4.5 \times 18 = 81\ \mu$C, which equals $Q_4$ ✓. The total charge drawn from the source has to equal the charge on the capacitor that's in series with everything.

**(d)**

$$U = \tfrac12 C_{ab}V_{ab}^2 = \tfrac12(4.5\times10^{-6})(18)^2 = \boxed{729\ \mu\text{J} \approx 0.73\ \text{mJ}}$$

Check by summing $\tfrac12 QV$ for each capacitor: $\tfrac12(27\cdot6.75 + 27\cdot2.25 + 54\cdot9 + 81\cdot9) = \tfrac12(1458) = 729$ ✓.

### Problem 2

**(a)** From the equation sheet:

$$R = R_0(1 + \alpha\Delta T) = 9.6\left[1 + (4.0\times10^{-4})(600)\right] = 9.6(1.24) = \boxed{11.9\ \Omega}$$

**(b)** The source fixes $V$, so use $I = V/R$ and $P = V^2/R$.

- Hot: $I = 120/11.9 = \boxed{10.1\ \text{A}}$ and $P = 120^2/11.9 = \boxed{1.21\ \text{kW}}$.
- Cold: $I = 120/9.6 = \boxed{12.5\ \text{A}}$ and $P = \boxed{1.50\ \text{kW}}$.

The **cold** values are larger. At fixed voltage, lower $R$ means more current and more power. Heating raises $R$, so the heater draws a surge at switch-on and then settles down. Incandescent bulbs burn out at switch-on for the same reason.

**(c)** Each bulb's resistance comes from its rating: $R_b = V^2/P = 81/3 = 27\ \Omega$. Two in parallel give $R_L = 13.5\ \Omega$. The load sees the terminal voltage, so:

$$I = \frac{V_T}{R_L} = \frac{8.6}{13.5} = 0.637\ \text{A}$$

$$r = \frac{\mathcal{E} - V_T}{I} = \frac{0.40}{0.637} = \boxed{0.63\ \Omega}$$

**(d)**

$$P_r = I^2 r = (0.637)^2(0.628) = \boxed{0.25\ \text{W}}$$

Equivalently, $(\mathcal{E}-V_T)\,I = 0.40 \times 0.637 = 0.25$ W.

**(e)** Three bulbs in parallel give $R_L = 27/3 = 9.0\ \Omega$.

$$I = \frac{\mathcal{E}}{R_L + r} = \frac{9.0}{9.628} = 0.935\ \text{A}$$

$$V_T = IR_L = \boxed{8.41\ \text{V}}$$

It **goes down**. Adding bulbs in parallel *lowers* the load resistance, which draws more current, so more voltage drops inside the battery ($Ir$ grows from 0.40 V to 0.59 V).

### Problem 3

**(a)** Fold from the far end (the same move as S4):

- $R_4 \parallel R_5$ (both connect D to the bottom wire): $\frac{6\cdot12}{18} = 4.0\ \Omega$.
- Add $R_3$ in series (the current to that block must pass through $R_3$): $2 + 4 = 6.0\ \Omega$.
- That branch is in parallel with $R_2$ (both connect C to the bottom wire): $\frac{12\cdot6}{18} = 4.0\ \Omega$.
- Add $R_1$ in series: $R_{eq} = 4 + 4 = \boxed{8.0\ \Omega}$.

**(b)** Now unfold back out.

- Total current, which is also the current in $R_1$: $I_1 = 24/8 = \boxed{3.0\ \text{A}}$.
- $V_C$ (above the bottom wire): $24 - 3(4) = 12$ V. Equivalently, $3.0\ \text{A} \times 4.0\ \Omega$ for the block.
- $R_2$ has 12 V across it: $I_2 = 12/12 = \boxed{1.0\ \text{A}}$.
- The $R_3$ branch gets the rest: $I_3 = 3 - 1 = \boxed{2.0\ \text{A}}$. Check: $12\ \text{V}/6\ \Omega = 2$ ✓.
- $V_D = 12 - 2(2) = 8.0$ V.
- $I_4 = 8/6 = \boxed{1.33\ \text{A}}$ and $I_5 = 8/12 = \boxed{0.67\ \text{A}}$. They sum to 2.0 A ✓.

**(c)**

$$P_5 = \frac{V_D^2}{R_5} = \frac{64}{12} = \boxed{5.3\ \text{W}}$$

Equivalently, $I_5^2R_5 = (0.667)^2(12) = 5.33$ W.

### Problem 4

Charging formulas: $V_C(t) = \mathcal{E}(1 - e^{-t/\tau})$ and $I(t) = \frac{\mathcal{E}}{R}e^{-t/\tau}$.

**(a)**

$$\tau = RC = (50\times10^3)(40\times10^{-6}) = \boxed{2.0\ \text{s}}$$

At $t = 0$ the uncharged capacitor has $V_C = 0$, so it acts like a wire and the battery's full voltage sits across $R$:

$$I_0 = \frac{\mathcal{E}}{R} = \frac{12}{50\,000} = \boxed{0.24\ \text{mA}}$$

**(b)** Set $V_C = 9$:

$$9 = 12(1 - e^{-t/2}) \;\Rightarrow\; e^{-t/2} = 0.25 \;\Rightarrow\; t = 2\ln 4 = \boxed{2.77\ \text{s}}$$

At that moment the resistor has $12 - 9 = 3$ V across it, so:

$$I = \frac{3}{50\,000} = \boxed{0.060\ \text{mA}}$$

Check: $I_0/4 = 0.06$ mA, matching the $e^{-t/\tau} = 1/4$ found above ✓.

**(c)**

$$Q_f = C\mathcal{E} = (40\ \mu\text{F})(12\ \text{V}) = \boxed{480\ \mu\text{C}}$$

$$U_f = \tfrac12 C\mathcal{E}^2 = \tfrac12(40\times10^{-6})(144) = \boxed{2.88\ \text{mJ}}$$

The battery moved $Q_f$ through $\mathcal{E}$, so it supplied $Q_f\mathcal{E} = 480\ \mu\text{C} \times 12\ \text{V} = \boxed{5.76\ \text{mJ}}$. Exactly **half** is stored. The other half (2.88 mJ) became heat in $R$. That 50/50 split holds for any R when charging from a fixed EMF.

**(d)** Discharging:

$$\tau' = (150\times10^3)(40\times10^{-6}) = 6.0\ \text{s}$$

Energy goes as $V^2$, so

$$U(t) = U_0\left(e^{-t/\tau'}\right)^2 = U_0e^{-2t/\tau'}$$

Set $e^{-2t/6} = 0.10$:

$$t = \frac{6}{2}\ln 10 = 3(2.303) = \boxed{6.9\ \text{s}}$$

**Trap:** using $e^{-t/\tau'} = 0.10$ gives 13.8 s. That's when the *voltage* (or charge) hits 10%, not the energy.

### Problem 5

**(a) Unknowns.** Take $V_G = 0$. Guess every current flowing **up** through the battery branches and **down** through $R_2$:

- $I_1$: up the left branch, $G \to T$
- $I_2$: down through $R_2$, $T \to G$
- $I_3$: up the right branch, $G \to T$

**The three boxed equations:**

*Junction T:*

$$\boxed{I_1 + I_3 = I_2}$$

*Left loop.* Go up the left branch, then down through $R_2$. Crossing $\mathcal{E}_1$ from − to + gives $+12$; with the current through $r_1$ and $R_1$ gives $-6I_1$; down through $R_2$ with $I_2$ gives $-4I_2$:

$$\boxed{12 - 6I_1 - 4I_2 = 0}$$

*Right loop.* Go up the right branch, then down through $R_2$. Crossing $\mathcal{E}_2$ from − to + gives $+4$; through $r_2 + R_3 = 2\ \Omega$ gives $-2I_3$; down $R_2$ gives $-4I_2$:

$$\boxed{4 - 2I_3 - 4I_2 = 0}$$

**(b) Solve.** From the loops:

$$I_1 = \frac{12 - 4I_2}{6}, \qquad I_3 = \frac{4 - 4I_2}{2}$$

Substitute into the junction equation and multiply through by 6:

$$(12 - 4I_2) + 3(4 - 4I_2) = 6I_2 \;\Rightarrow\; 24 = 22I_2 \;\Rightarrow\; I_2 = \tfrac{12}{11} = 1.09\ \text{A}$$

Then

$$I_1 = \frac{12 - 4.364}{6} = \tfrac{14}{11} = 1.27\ \text{A}$$

$$I_3 = \frac{4 - 4.364}{2} = -\tfrac{2}{11} = -0.18\ \text{A}$$

| Branch | Current | Direction |
|---|---|---|
| Left ($\mathcal{E}_1$, $r_1$, $R_1$) | $\boxed{1.27\ \text{A}}$ | up, out of $\mathcal{E}_1$'s + terminal |
| Middle ($R_2$) | $\boxed{1.09\ \text{A}}$ | down |
| Right ($\mathcal{E}_2$, $r_2$, $R_3$) | $\boxed{0.18\ \text{A}}$ | **down**, *into* $\mathcal{E}_2$'s + terminal |

$I_3$ came out negative, so the guess was wrong: current flows down the right branch. Check at T: 1.27 A in, and $1.09 + 0.18 = 1.27$ A out ✓.

**(c) Terminal voltages.**

- **$\mathcal{E}_1$ is discharging** (current leaves through +):

$$V_{T1} = \mathcal{E}_1 - I_1r_1 = 12 - 1.27(0.5) = \boxed{11.4\ \text{V}}$$

- **$\mathcal{E}_2$ is being charged** (current is forced *into* its + terminal):

$$V_{T2} = \mathcal{E}_2 + |I_3|r_2 = 4 + 0.18(0.5) = \boxed{4.09\ \text{V}}$$

So **yes**, $\mathcal{E}_2$ is being charged by $\mathcal{E}_1$. This is the same situation as the charging-a-battery problem in HW 10.2.

**(d)** $V_T - V_G$ is just the voltage across $R_2$:

$$V_T - V_G = I_2R_2 = \tfrac{12}{11}(4) = \boxed{4.36\ \text{V}}$$

Check up the left branch: $12 - 1.27(6) = 4.36$ ✓. Check up the right branch, walking against the current: $4 + 0.18(2) = 4.36$ ✓.

**A faster route (node voltage):** with $V_G = 0$ and the unknown $V_T$, write current out of T = 0:

$$\frac{V_T - 12}{6} + \frac{V_T}{4} + \frac{V_T - 4}{2} = 0 \;\Rightarrow\; 11V_T = 48 \;\Rightarrow\; V_T = 4.36\ \text{V}$$

Then every branch current is a one-line Ohm's law. With only two nodes, this is one equation instead of three.

---

## Scoring guide (100 pts)

| Problem | Points | Where people lose points |
|---|---|---|
| 1 | 20 | Not starting from $Q_3$; forgetting $Q_4 = Q_{12} + Q_3$ |
| 2 | 20 | Using $\Delta T$ = final temperature instead of the change; not seeing that more parallel bulbs lowers $V_T$ |
| 3 | 20 | Combining $R_3$ in parallel instead of series; not unfolding to get currents |
| 4 | 20 | $e^{-t/\tau}$ vs $e^{-2t/\tau}$ for energy; forgetting that half the energy goes to heat |
| 5 | 20 | Battery polarity; reporting a negative current without saying the direction flips; using $\mathcal{E} - Ir$ for the battery being charged |
