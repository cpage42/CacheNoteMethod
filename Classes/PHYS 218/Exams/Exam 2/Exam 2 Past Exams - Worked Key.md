---
tags: [phys218, exam2, answer-key]
---
--# Exam 2 Past Exams (F18 + S18): Worked Key

Source files: `Documents/Exam_2_PS218_F18.pdf` and `Documents/Exam_2_PS218_S18.pdf`. Both are "Exam 2 - Circuits", 5 problems at 20% each. Together they show what this exam looks like: capacitor networks, power/resistance, internal resistance, Kirchhoff, and resistor networks.

Related: [[Exam 2 Practice Exam B]] (new exam built from these) · [[Exam 2 Review - Ch 8-10]] · [[Exam 2 Sample Exam]] · [[PHYS 218]]

> [!tip] How to use this
> Work the problems in Part 1 cold, with only your equation sheet and about 50 minutes per exam. Then check yourself against Part 2. Every solution says *why* each formula applies, not just which one.

---

## Part 1: Problems

### Fall 2018

**F1.** All capacitors have equal capacitance $C$. Find the capacitance between $a$ and $b$. Then find the charge on each capacitor and the voltage across each, in terms of $V$.

![[Exam2-F18-P1.jpg|220]]

**F2.** Two capacitors connected in parallel to a battery store **5 times** the energy they store when connected in series to the same battery. What is the ratio of the two capacitances?

**F3.** A 120 V hair dryer has two settings, 850 W and 1250 W. Find the resistance at each setting.

**F4.** What is the potential difference between points $a$ and $d$? What is the terminal voltage of each battery once its internal resistance is accounted for?

![[Exam2-F18-P4.jpg|380]]

**F5.** What is the net resistance of the circuit connected to the battery?

![[Exam2-F18-P5.jpg|220]]

### Spring 2018

**S1.** A battery with emf 12 V has a terminal voltage of 11.8 V while running two light bulbs in parallel. Each bulb is rated 8 W at 12 V. What is the battery's internal resistance?

**S2.** An 1800 W arc welder runs on a 660 V$_{\text{rms}}$ ac line. Find (a) the peak voltage and (b) the peak current.

**S3.** Find the magnitude and direction of the current in each resistor. $\mathcal{E}_1 = 9$ V, $\mathcal{E}_2 = 12$ V, $R_1 = 25\ \Omega$, $R_2 = 48\ \Omega$, $R_3 = 35\ \Omega$. Box three equations and name three unknowns. Hint given: the current in $R_2$ is 0.16 A to the left.

![[Exam2-S18-P3.jpg|260]]

**S4.** Find the equivalent resistance between $A$ and $B$ if every resistor is 125 Ω.

![[Exam2-S18-P4.jpg|380]]

**S5.** $C_1 = C_3 = 8\ \mu$F, $C_2 = C_4 = 15\ \mu$F, and $Q_3 = 23\ \mu$C. Find (a) the charge on each of the other capacitors, (b) the voltage across each capacitor, and (c) the voltage $V_{ba}$ across the whole combination.

![[Exam2-S18-P5.jpg|380]]

---

## Part 2: Worked Answer Key

### The toolkit these exams use

| Idea | Formula | When it applies |
|---|---|---|
| Capacitors in parallel | $C_{eq} = C_1 + C_2$ | Same two nodes means same $V$; the charges add |
| Capacitors in series | $\frac{1}{C_{eq}} = \frac{1}{C_1}+\frac{1}{C_2}$ | Same single path means same $Q$; the voltages add |
| Resistors in series | $R_{eq} = R_1 + R_2$ | Same current; the voltages add |
| Resistors in parallel | $\frac{1}{R_{eq}} = \frac{1}{R_1}+\frac{1}{R_2}$ | Same voltage; the currents add |
| Capacitor | $Q = CV$, $U = \tfrac12 CV^2$ | Always |
| Power | $P = IV = I^2R = V^2/R$ | Any resistor |
| Real battery | $V_{\text{terminal}} = \mathcal{E} - Ir$ | When current flows out of the + terminal (discharging) |
| AC | $V_0 = \sqrt2\,V_{\text{rms}}$, $\bar P = I_{\text{rms}}V_{\text{rms}}$ | Sinusoidal ac |
| Kirchhoff | Junction: $\sum I_{in} = \sum I_{out}$. Loop: $\sum \Delta V = 0$ | Any circuit that won't reduce to series and parallel |

**Sign rules for walking a loop:**

- Walk through a resistor *with* the current: $-IR$. Walk *against* it: $+IR$.
- Walk through a battery from − to +: $+\mathcal{E}$. From + to −: $-\mathcal{E}$.
- On a battery symbol, the **long thin** plate is +.

---

### F1: Capacitor network

**Step 1: Read the topology.** Trace from $a$ upward. You hit $C_4$, then a node; call it $P$. From $P$ two paths go to the right wire, which connects to $b$:

- the top path, $C_1$ then $C_2$
- the middle path, $C_3$

So $C_1$ and $C_2$ are in **series** (one path, nothing branching off between them). That pair is in **parallel** with $C_3$, because both connect node $P$ to the $b$ wire. That whole block is in **series** with $C_4$.

**Step 2: Reduce.**

$$C_{12} = \frac{C\cdot C}{C+C} = \frac{C}{2}$$

$$C_{123} = C_{12} + C_3 = \frac{C}{2} + C = \frac{3C}{2}$$

$$C_{ab} = \frac{C_{123}\,C_4}{C_{123}+C_4} = \frac{\frac{3C}{2}\cdot C}{\frac{5C}{2}} = \boxed{\frac{3C}{5}}$$

**Step 3: Total charge.** $C_4$ is in series with the block, and everything in series carries the **same** charge as the equivalent capacitor:

$$Q_4 = Q_{tot} = C_{ab}V = \boxed{\tfrac{3}{5}CV}, \qquad V_4 = \frac{Q_4}{C} = \boxed{\tfrac35 V}$$

**Step 4: Voltage across the parallel block.** The series voltages must add to $V$:

$$V_{123} = V - V_4 = \tfrac25 V$$

**Step 5: Split it.** $C_3$ sees the full block voltage:

$$V_3 = \boxed{\tfrac25 V}, \qquad Q_3 = CV_3 = \boxed{\tfrac25 CV}$$

The $C_1$–$C_2$ branch also sees $\tfrac25V$. Because they are identical and in series, they split it evenly:

$$V_1 = V_2 = \boxed{\tfrac15 V}, \qquad Q_1 = Q_2 = C_{12}\cdot\tfrac25V = \boxed{\tfrac15 CV}$$

**Checks:**

- Charge: the block's total is $Q_{12} + Q_3 = \tfrac15CV + \tfrac25CV = \tfrac35CV = Q_4$. ✓ (The charge that leaves $C_4$'s plate has to land on the block.)
- Voltage, top route: $V_4 + V_1 + V_2 = \tfrac35 + \tfrac15 + \tfrac15 = V$. ✓

| | $C_1$ | $C_2$ | $C_3$ | $C_4$ |
|---|---|---|---|---|
| $Q$ | $CV/5$ | $CV/5$ | $2CV/5$ | $3CV/5$ |
| $V$ | $V/5$ | $V/5$ | $2V/5$ | $3V/5$ |

---

### F2: Energy ratio, parallel vs series

**Why energy works here:** both setups use the same battery, so $V$ is the same. Then $U = \tfrac12 C_{eq}V^2$, and the energy ratio is just the ratio of the equivalent capacitances.

$$\frac{U_\parallel}{U_{series}} = \frac{\tfrac12 C_\parallel V^2}{\tfrac12 C_s V^2} = \frac{C_\parallel}{C_s} = 5$$

**Plug in the equivalents:**

$$C_\parallel = C_1 + C_2, \qquad C_s = \frac{C_1C_2}{C_1+C_2}$$

$$\frac{C_1+C_2}{\dfrac{C_1C_2}{C_1+C_2}} = \frac{(C_1+C_2)^2}{C_1C_2} = 5$$

**Make it one variable.** Let $x = C_1/C_2$ and divide the top and bottom by $C_2^2$:

$$\frac{(x+1)^2}{x} = 5 \;\Rightarrow\; x^2 + 2x + 1 = 5x \;\Rightarrow\; x^2 - 3x + 1 = 0$$

**Quadratic formula:**

$$x = \frac{3 \pm \sqrt{9-4}}{2} = \frac{3\pm\sqrt5}{2}$$

$$\boxed{\frac{C_1}{C_2} = 2.62 \text{ (or } 0.382\text{)}}$$

The two roots are reciprocals ($2.618 \times 0.382 = 1$). They are the same answer with the labels swapped: one capacitor is about 2.6 times the other.

**Check:** take $C_2 = 1$, $C_1 = 2.618$. Then $C_\parallel = 3.618$ and $C_s = 2.618/3.618 = 0.7236$, so the ratio is $3.618/0.7236 = 5.00$. ✓

---

### F3: Hair dryer resistance

**Why $P = V^2/R$:** the wall fixes the voltage at 120 V, and the setting changes $R$. Use the power formula that has $V$ and $R$ in it.

$$R = \frac{V^2}{P}$$

$$R_{850} = \frac{(120)^2}{850} = \frac{14400}{850} = \boxed{16.9\ \Omega}$$

$$R_{1250} = \frac{14400}{1250} = \boxed{11.5\ \Omega}$$

**Intuition:** at fixed voltage, **lower resistance gives more power**, because more current flows ($P = V^2/R$). People often guess backwards here. The high setting is the smaller resistor.

(These are rms values, but for household ac, $\bar P = V_{rms}^2/R$ has the same form, so nothing changes.)

---

### F4: Two batteries, three branches (Kirchhoff)

**Step 1: Read the batteries.** On each battery the long plate is +.

- $\mathcal{E}_2$ (45 V): the long plate is on the **c** side, so **c is +** and **d is −**.
- $\mathcal{E}_1$ (75 V): the long plate is on the **f** side, so **f is +** and **g is −**.

**Step 2: Name the unknowns.** These follow the arrows in the figure. Some may come out negative, which just means the true direction is opposite.

- $I_1$: from $a$ along the top (34 Ω) to $d$
- $I_2$: from $a$ down through $g \to f \to e$ (75 V battery, 1 Ω, 18 Ω) to $d$
- $I_3$: from $d$ through $c \to b$ (45 V battery, 1 Ω, 47 Ω) to $a$

**Step 3: Write the equations.** Use $V_{ad} = V_a - V_d$ as a fourth unknown. Each branch gives one expression for it.

*Top branch* (walk $a\to d$ with $I_1$; the voltage drops by $34I_1$):

$$V_a - V_d = 34 I_1 \tag{1}$$

*Middle branch* (walk $d \to a$ with $I_3$):

- $d\to c$ crosses $\mathcal{E}_2$ from − to +, so the voltage rises: $+45$.
- $c \to b$ crosses the 1 Ω internal resistance with the current: $-1\cdot I_3$.
- $b\to a$ crosses the 47 Ω with the current: $-47I_3$.

$$V_a = V_d + 45 - 48I_3 \;\Rightarrow\; V_a - V_d = 45 - 48 I_3 \tag{2}$$

*Bottom branch* (walk $a\to g\to f\to e\to d$ with $I_2$):

- $g \to f$ crosses $\mathcal{E}_1$ from − to +: $+75$.
- $f \to e$ crosses the 1 Ω: $-I_2$.
- $e\to d$ crosses the 18 Ω: $-18I_2$.

$$V_d = V_a + 75 - 19 I_2 \;\Rightarrow\; V_a - V_d = -75 + 19I_2 \tag{3}$$

*Junction at $a$.* $I_3$ comes in; $I_1$ and $I_2$ go out:

$$I_3 = I_1 + I_2 \tag{4}$$

**Step 4: Solve.** Set (1) = (2) and (1) = (3):

$$34 I_1 = 45 - 48 I_3 \quad\text{and}\quad 34 I_1 = -75 + 19I_2$$

Write $I_3$ and $I_2$ in terms of $I_1$:

$$I_3 = \frac{45 - 34I_1}{48}, \qquad I_2 = \frac{75 + 34I_1}{19}$$

Substitute into (4):

$$\frac{45 - 34I_1}{48} = I_1 + \frac{75+34I_1}{19}$$

Multiply through by $48\cdot19 = 912$:

$$19(45 - 34I_1) = 912 I_1 + 48(75 + 34I_1)$$

$$855 - 646 I_1 = 912 I_1 + 3600 + 1632 I_1$$

$$-2745 = 3190\,I_1 \;\Rightarrow\; I_1 = -0.861\text{ A}$$

Back-substitute:

$$I_2 = \frac{75 + 34(-0.861)}{19} = \frac{45.74}{19} = 2.41\text{ A}$$

$$I_3 = \frac{45 - 34(-0.861)}{48} = \frac{74.26}{48} = 1.55\text{ A}$$

Check (4): $-0.861 + 2.408 = 1.547$. ✓

**Interpretation:** $I_1$ is negative, so 0.86 A actually flows from **d to a** through the 34 Ω. The 75 V battery wins: it pushes 2.41 A around to $d$, and that current returns to $a$ along both upper branches.

**Answer 1: $V_{ad}$**

$$V_{ad} = V_a - V_d = 34(-0.861) = \boxed{-29.3\text{ V}}$$

So **$d$ is 29.3 V higher than $a$**. Cross-check with (2): $45 - 48(1.547) = -29.3$. ✓

**Answer 2: terminal voltages.** Both batteries are **discharging**: the current exits each + terminal ($I_3$ leaves $\mathcal{E}_2$ at c; $I_2$ leaves $\mathcal{E}_1$ at f). So the internal drop subtracts:

$$V_{T,1} = \mathcal{E}_1 - I_2 r = 75 - 2.41(1) = \boxed{72.6\text{ V}}$$

$$V_{T,2} = \mathcal{E}_2 - I_3 r = 45 - 1.55(1) = \boxed{43.5\text{ V}}$$

> [!note] Why minus and not plus?
> Current is forced *backwards* through a battery only when it is being charged, and then $V_T = \mathcal{E} + Ir$. Here both currents leave through +, so both batteries are doing work: minus.

---

### F5: Resistor network (find the real nodes first)

**Step 1: Find where the battery actually connects.** The battery's left wire runs straight up to **A**. Its right wire goes up through the bottom-right $R$ into **C**. So:

$$R_{net} = R_{\text{bottom}} + R_{AC}$$

Here $R_{AC}$ is everything connected between A and C.

**Step 2: List the resistors between A, B, C.** Call the top-left corner T.

- A–T (left vertical $R$) and T–B (top $R$) are in series, so the path A→T→B is $2R$.
- A–B diagonal: $R$.
- B–C (right vertical): $R$.
- A–C (horizontal): $R$.

**Step 3: Reduce from the far end.**

$A\to B$: the $2R$ path in parallel with the diagonal $R$:

$$R_{AB} = \frac{2R\cdot R}{3R} = \frac{2R}{3}$$

$A \to B\to C$: add $B$–$C$ in series:

$$\frac{2R}{3} + R = \frac{5R}{3}$$

That route is in parallel with the direct A–C resistor:

$$R_{AC} = \frac{\frac{5R}{3}\cdot R}{\frac{5R}{3}+R} = \frac{5R^2/3}{8R/3} = \frac{5R}{8}$$

**Step 4: Add the series bottom resistor.**

$$R_{net} = R + \frac{5R}{8} = \boxed{\frac{13R}{8} = 1.625R}$$

**Common trap:** treating the diagonal as connecting to C. It runs A→B. Trace the line all the way to its dot.

---

### S1: Internal resistance from a terminal-voltage drop

**Step 1: Get the bulb resistance from the rating.** "8 W at 12 V" means $P = V^2/R$ at 12 V. Assume the resistance stays constant.

$$R_{bulb} = \frac{V^2}{P} = \frac{144}{8} = 18\ \Omega$$

**Step 2: Load resistance.** Two equal bulbs in parallel:

$$R_L = \frac{18}{2} = 9\ \Omega$$

**Step 3: Current.** The terminal voltage is what the load actually sees:

$$I = \frac{V_T}{R_L} = \frac{11.8}{9} = 1.311\text{ A}$$

**Step 4: The missing 0.2 V is lost inside the battery.**

$$V_T = \mathcal{E} - Ir \;\Rightarrow\; r = \frac{\mathcal{E}-V_T}{I} = \frac{12 - 11.8}{1.311}$$

$$\boxed{r = 0.153\ \Omega}$$

**Check:** $I = \mathcal{E}/(R_L + r) = 12/9.153 = 1.311$ A. ✓

---

### S2: AC peak values

> [!warning] Not on this year's exam
> No ac on Exam 2 this year (it isn't on the [[Exam 2 Equation Sheet]]). Skip this one.


**(a)** For a sine wave, rms is the peak divided by $\sqrt2$:

$$V_0 = \sqrt2\,V_{rms} = \sqrt2(660) = \boxed{933\text{ V}}$$

**(b)** The 1800 W rating is **average** power, and $\bar P = I_{rms}V_{rms}$:

$$I_{rms} = \frac{\bar P}{V_{rms}} = \frac{1800}{660} = 2.73\text{ A}$$

$$I_0 = \sqrt2\, I_{rms} = \boxed{3.86\text{ A}}$$

**Trap:** don't compute $1800/933$. That mixes average power with a peak voltage. Use rms with rms, then convert.

---

### S3: Two-battery Kirchhoff problem

**Step 1: Read the batteries.** The long plate is +.

- $\mathcal{E}_1$ (9 V, top-left): long plate on **top**, so + is up.
- $\mathcal{E}_2$ (12 V, bottom-left): long plate on the **bottom**, so + is down.

The two batteries **oppose** each other going around the left side.

**Step 2: Name the nodes and unknowns.**

- Middle-left junction (between the batteries): **M**
- Right junction (where $R_1$, $R_2$, $R_3$ meet): **N**
- Bottom wire: **G**, set as $V_G = 0$

**Three unknowns:**

- $I_1$: through $R_1$, left to right (T → N)
- $I_2$: through $R_2$, right to left (N → M), matching the hint
- $I_3$: through $R_3$, upward (G → N)

**Step 3: The three boxed equations.**

*Junction N* (in: $I_1$, $I_3$; out: $I_2$):

$$\boxed{I_1 + I_3 = I_2} \tag{J}$$

*Top loop* (M → up through $\mathcal{E}_1$ → $R_1$ → N → $R_2$ → back to M):

- M → top crosses $\mathcal{E}_1$ from − to +: $+9$.
- Top → N crosses $R_1$ with $I_1$: $-25I_1$.
- N → M crosses $R_2$ with $I_2$: $-48I_2$.

$$\boxed{9 - 25 I_1 - 48 I_2 = 0} \tag{L1}$$

*Bottom loop* (G → up through $R_3$ → N → $R_2$ → M → down through $\mathcal{E}_2$ → G):

- G → N crosses $R_3$ with $I_3$: $-35 I_3$.
- N → M crosses $R_2$ with $I_2$: $-48I_2$.
- M → G crosses $\mathcal{E}_2$ from − (top) to + (bottom): $+12$.

$$\boxed{12 - 35I_3 - 48 I_2 = 0} \tag{L2}$$

**Step 4: Solve.** From (L1) and (L2):

$$I_1 = \frac{9 - 48I_2}{25}, \qquad I_3 = \frac{12 - 48I_2}{35}$$

Put into (J):

$$\frac{9-48I_2}{25} + \frac{12-48I_2}{35} = I_2$$

Multiply by 175:

$$7(9 - 48I_2) + 5(12-48I_2) = 175 I_2$$

$$63 + 60 - 336I_2 - 240I_2 = 175I_2$$

$$123 = 751 I_2 \;\Rightarrow\; I_2 = 0.164\text{ A}$$

That matches the given 0.16 A. ✓

$$I_1 = \frac{9 - 48(0.1638)}{25} = \frac{1.138}{25} = 0.0455\text{ A}$$

$$I_3 = \frac{12 - 48(0.1638)}{35} = \frac{4.138}{35} = 0.118\text{ A}$$

**Answers** (all positive, so the assumed directions were right):

| Resistor | Current | Direction |
|---|---|---|
| $R_1$ (25 Ω) | $\boxed{0.046\text{ A}}$ | left → right |
| $R_2$ (48 Ω) | $\boxed{0.164\text{ A}}$ | right → left |
| $R_3$ (35 Ω) | $\boxed{0.118\text{ A}}$ | upward (bottom → top) |

**Check (J):** $0.0455 + 0.1182 = 0.1637$. ✓

**Node-voltage check:** $V_M = -12$ V (12 V below G, because + of $\mathcal{E}_2$ is at the bottom), $V_T = -12 + 9 = -3$ V, and $V_N = -35(0.118) = -4.14$ V. Then:

- $R_1$: $(-3) - (-4.14) = 1.14$ V, and $1.14/25 = 0.046$ A ✓
- $R_2$: $(-4.14) - (-12) = 7.86$ V, and $7.86/48 = 0.164$ A ✓

---

### S4: Ladder network

**Strategy:** start at the end **farthest from A and B** and fold the ladder back toward the terminals. Each step is a series add followed by a parallel combine.

**Step 1: The far loop.** The top-right $R$, the right vertical $R$ and the bottom-right $R$ form one path in series between the two inner nodes of the last rung:

$$R_a = 3R$$

**Step 2: In parallel with the second rung ($R$):**

$$R_b = \frac{3R\cdot R}{4R} = \frac{3R}{4}$$

**Step 3: Add the middle top and middle bottom resistors in series:**

$$R_c = \frac{3R}{4} + 2R = \frac{11R}{4}$$

**Step 4: In parallel with the first rung ($R$):**

$$R_d = \frac{\frac{11R}{4}\cdot R}{\frac{11R}{4}+R} = \frac{11R^2/4}{15R/4} = \frac{11R}{15}$$

**Step 5: Add the A-side and B-side resistors in series:**

$$R_{AB} = \frac{11R}{15} + 2R = \frac{41R}{15} = 2.733R$$

With $R = 125\ \Omega$:

$$\boxed{R_{AB} = 342\ \Omega}$$

**Why "series" in step 3:** the current that goes past the middle rung must travel along the top, through the reduced block, and back along the bottom. There is no branch point in between, so it is one path.

---

### S5: Capacitor network with one charge given

**Step 1: Topology.** $C_1$ and $C_2$ connect the same two nodes ($a$ and the middle node), so they are **parallel**. Likewise $C_3 \parallel C_4$ between the middle node and $b$. The two parallel blocks are in **series**.

**Step 2: Start from the known charge.** $C_3$ and $C_4$ are in parallel, so they share a voltage:

$$V_3 = \frac{Q_3}{C_3} = \frac{23\ \mu\text{C}}{8\ \mu\text{F}} = 2.875\text{ V} = V_4$$

$$Q_4 = C_4V_4 = 15(2.875) = 43.1\ \mu\text{C}$$

**Step 3: Series means the same charge.** The right block's total charge is $Q_3 + Q_4 = 66.1\ \mu$C, so the left block carries the same total. Why: the middle node is isolated, so whatever charge one block's plates hold, the other's hold the opposite.

$$Q_1 + Q_2 = 66.1\ \mu\text{C}, \qquad V_{12} = \frac{66.1}{C_1+C_2} = \frac{66.1}{23} = 2.875\text{ V}$$

$$Q_1 = 8(2.875) = 23.0\ \mu\text{C}, \qquad Q_2 = 15(2.875) = 43.1\ \mu\text{C}$$

The two blocks are identical (8 + 15 on each side), so this mirror result makes sense.

**(a) Charges:**

$$\boxed{Q_1 = 23\ \mu\text{C},\quad Q_2 = 43\ \mu\text{C},\quad Q_4 = 43\ \mu\text{C}}$$

**(b) Voltages:** each capacitor has

$$\boxed{V_1 = V_2 = V_3 = V_4 = 2.88\text{ V}}$$

**(c) Across the combination:** the series block voltages add:

$$V_{ba} = V_{12} + V_{34} = 2.875 + 2.875 = \boxed{5.75\text{ V}}$$

(This is the magnitude. The figure doesn't show which side is +.)

**Check with $C_{eq}$:** each block is 23 µF, so two in series give 11.5 µF. Then $Q_{tot}/C_{eq} = 66.1/11.5 = 5.75$ V. ✓

---

## Answer summary

| # | Answer |
|---|---|
| F1 | $C_{ab} = 3C/5$. $Q_1 = Q_2 = CV/5$, $Q_3 = 2CV/5$, $Q_4 = 3CV/5$. $V_1 = V_2 = V/5$, $V_3 = 2V/5$, $V_4 = 3V/5$ |
| F2 | $C_1/C_2 = (3+\sqrt5)/2 \approx 2.62$ (or 0.382) |
| F3 | 16.9 Ω (850 W), 11.5 Ω (1250 W) |
| F4 | $V_{ad} = -29.3$ V ($d$ higher). $V_{T1} = 72.6$ V, $V_{T2} = 43.5$ V. Currents: $I_1 = 0.86$ A (d → a), $I_2 = 2.41$ A, $I_3 = 1.55$ A |
| F5 | $13R/8$ |
| S1 | $r = 0.153\ \Omega$ |
| S2 | $V_0 = 933$ V, $I_0 = 3.86$ A |
| S3 | $I_{R1} = 0.046$ A (→), $I_{R2} = 0.164$ A (←), $I_{R3} = 0.118$ A (↑) |
| S4 | 342 Ω ($41R/15$) |
| S5 | $Q_1 = 23$, $Q_2 = Q_4 = 43\ \mu$C. All $V = 2.88$ V. $V_{ba} = 5.75$ V |

**Patterns these two exams repeat:**

- capacitor network reduction with a charge/voltage table (F1, S5)
- $P = V^2/R$ from a rating (F3, S1)
- $\mathcal{E} - Ir$ (F4, S1)
- a 2- or 3-loop Kirchhoff problem (F4, S3)
- a resistor network that needs careful node-reading (F5, S4)

Expect the same mix tomorrow, plus probably RC (Ch 10.6), which neither old exam covers. RC is in [[Exam 2 Sample Exam]] P4.
