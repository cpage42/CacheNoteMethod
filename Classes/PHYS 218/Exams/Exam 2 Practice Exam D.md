---
class: "[[PHYS 218]]"
tags: [exam, practice-exam, capacitance, circuits, rc-circuits, kirchhoff]
---
# Exam 2 Practice Exam D (Exam 1 difficulty)
Class: [[PHYS 218]] · Exam 2 is **Tue Oct 13** · Equation sheet: [[Exam 2 Equation Sheet]] · Calibrated to: [[Exam 1 - Corrections]]

*Same format as Exam 1: **4 problems, 25% each, 90 minutes** (about 22 min per problem). Answers are symbolic, and every part tells you which variables to use. The parts build on each other the way Exam 1's did, and include sketches and "explain" questions. Use only the [[Exam 2 Equation Sheet]]. No ac. The worked key is at the bottom.*

> [!tip] Habits from Exam 1
> - Spend the first 2 minutes reading all four problems. Start with your strongest one.
> - About 22 minutes per problem. When time's up, move on and come back.
> - Get the **direction from the physics**, then attach the magnitude (Exam 1, P1a).
> - **Check units** on every boxed answer (Exam 1, P3: σ vs λ).
> - Never leave a sketch blank. A best-guess shape earns points (Exam 1, P4d).

---

## Problem 1 (25%): Capacitor network and a dielectric
Three identical parallel-plate capacitors, each with plate area $A$ and plate separation $d$, are connected to a battery of voltage $V$ as shown.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,3) to[battery1, l_=$V$] (0,0);
\draw (0,3) to[C, l=$C_1$] (3,3);
\draw (3,3) to[C, l=$C_2$, *-*] (3,0);
\draw (3,3) -- (5.5,3) to[C, l=$C_3$] (5.5,0) -- (0,0);
\end{circuitikz}
\end{document}
```

- **(a) (3 pts)** Write the capacitance $C$ of one capacitor in terms of $\varepsilon_0$, $A$ and $d$.
- **(b) (4 pts)** Which capacitors are in series and which are in parallel? Explain in one sentence each, using what "the same charge" or "the same voltage" means.
- **(c) (4 pts)** Find the equivalent capacitance in terms of $C$.
- **(d) (6 pts)** Find the charge on and the voltage across each capacitor, in terms of $C$ and $V$.
- **(e) (4 pts)** Find the total energy stored. Which capacitor stores the most energy?
- **(f) (4 pts)** With the battery **still connected**, a slab with dielectric constant $\kappa$ is slid in to fill $C_1$. Find the new voltage across $C_1$. Does it go up or down? Check your answer with $\kappa = 1$.

## Problem 2 (25%): A real battery and a resistor network
A battery with emf $\mathcal{E}$ and internal resistance $r$ (the dashed box) drives the network shown.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,4) to[battery1, l_=$\mathcal{E}$] (0,2);
\draw (0,2) to[R, l_=$r$] (0,0);
\draw[dashed] (-1.3,-0.3) rectangle (0.7,4.3);
\draw (0,4) to[R, l=$R$] (3,4);
\draw (3,4) to[R, l=$3R$, *-*] (3,0);
\draw (3,4) -- (5.5,4) to[R, l=$6R$] (5.5,0) -- (0,0);
\end{circuitikz}
\end{document}
```

- **(a) (3 pts)** The resistor $R$ is a wire of length $L$ and radius $a$ made of a material with resistivity $\rho$. Write $R$ in terms of $\rho$, $L$ and $a$.
- **(b) (4 pts)** Find the equivalent resistance of the external network (everything outside the dashed box) in terms of $R$.
- **(c) (4 pts)** Find the current $I$ through the battery and the terminal voltage $V_T$, in terms of $\mathcal{E}$, $R$ and $r$.
- **(d) (5 pts)** Find the current through the $3R$ and $6R$ resistors in terms of $I$. Which one carries more, and why does that make sense?
- **(e) (5 pts)** Find the power dissipated in each of the four resistors (including $r$) in terms of $I$ and $R$, $r$. Show that they add up to the power supplied by the emf, $\mathcal{E}I$.
- **(f) (4 pts)** The wire $R$ heats up by $\Delta T$, and its temperature coefficient is $\alpha$. Write its new resistance. Does the battery current go up or down? Explain without doing algebra.

## Problem 3 (25%): Kirchhoff's rules
Both batteries are ideal and have their **+ terminal on top**. The left battery has emf $2\mathcal{E}$ and the right one has emf $\mathcal{E}$.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,1.8) to[battery1, l_=$2\mathcal{E}$] (0,0);
\draw (0,1.8) to[R, l=$R$] (0,4) -- (6,4);
\draw (3,4) to[R, l=$2R$, *-*] (3,0);
\draw (6,1.8) to[battery1, l=$\mathcal{E}$] (6,0);
\draw (6,1.8) to[R, l_=$R$] (6,4);
\draw (0,0) -- (6,0);
\end{circuitikz}
\end{document}
```

Use these current directions: $I_1$ **up** through the left branch, $I_2$ **down** through the middle $2R$, and $I_3$ **up** through the right branch.

- **(a) (3 pts)** Write the junction rule at the top junction.
- **(b) (4 pts)** Write the loop rule for the **left** loop (left branch and middle branch). State the direction you walk the loop.
- **(c) (4 pts)** Write the loop rule for the **right** loop (right branch and middle branch).
- **(d) (8 pts)** Solve for $I_1$, $I_2$ and $I_3$ in terms of $\mathcal{E}$ and $R$. If any current comes out negative, say what that means.
- **(e) (6 pts)** Which battery is supplying energy, and which is being charged? Find the power of each battery, and check that energy is conserved: power supplied = power absorbed + power dissipated.

## Problem 4 (25%): RC circuit
The capacitor is uncharged when switch $S$ closes at $t = 0$.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,3) to[battery1, l_=$\mathcal{E}$] (0,0);
\draw (0,3) to[nos, l=$S$] (2.5,3) to[R, l=$R$] (5,3) to[C, l=$C$] (5,0) -- (0,0);
\end{circuitikz}
\end{document}
```

- **(a) (4 pts)** Just after the switch closes ($t = 0^+$), find the current, the voltage across $R$ and the voltage across $C$. Explain why the capacitor acts like a wire.
- **(b) (4 pts)** A long time later ($t \to \infty$), find the current, the voltage across $C$ and the charge on $C$. Explain why the capacitor acts like a break in the circuit.
- **(c) (4 pts)** Write the time constant $\tau$, $q(t)$ and $i(t)$, and find the time when the capacitor has **half** its final charge, in terms of $R$ and $C$.
- **(d) (4 pts)** Sketch $q(t)$ and $i(t)$. Mark $\tau$, the final value of $q$ and the initial value of $i$.

Once the capacitor is fully charged, it's removed from the circuit and connected across a resistor $2R$:

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,0) to[C, l=$C$] (0,3) -- (3,3) to[R, l=$2R$] (3,0) -- (0,0);
\end{circuitikz}
\end{document}
```

- **(e) (5 pts)** Find the new time constant, the initial current, and $q(t)$. How does the current direction through the capacitor compare with during charging?
- **(f) (4 pts)** How much total energy is turned into heat in the $2R$ resistor during the full discharge? (No integral needed: think about where the energy goes.)

---
---

## Answer key

### Problem 1

**(a)** From the equation sheet:

$$\boxed{C = \frac{\varepsilon_0 A}{d}}$$

**(b)**

- **$C_2$ and $C_3$ are in parallel.** Both connect the same two nodes (the junction after $C_1$ and the bottom wire), so they have the same voltage.
- **$C_1$ is in series with the $C_2$–$C_3$ block.** All the charge that flows onto $C_1$ continues to the block, with no branch in between, so they have the same charge.

**(c)**

$$C_{23} = C + C = 2C$$

$$C_{eq} = \frac{C_1C_{23}}{C_1 + C_{23}} = \frac{C\cdot2C}{3C} = \boxed{\frac{2C}{3}}$$

**(d)** Work from the total charge.

- **$C_1$:** it's in series with everything, so it carries the total charge.
  $$Q_1 = C_{eq}V = \tfrac23CV, \qquad V_1 = \frac{Q_1}{C} = \tfrac23V$$
- **Block voltage:** what's left of $V$:
  $$V_{23} = V - \tfrac23V = \tfrac13V$$
- **$C_2$ and $C_3$:** each has $\tfrac13V$ across it.
  $$Q_2 = Q_3 = C\cdot\tfrac13V = \tfrac13CV$$

| | $C_1$ | $C_2$ | $C_3$ |
|---|---|---|---|
| $Q$ | $\frac23CV$ | $\frac13CV$ | $\frac13CV$ |
| $V$ | $\frac23V$ | $\frac13V$ | $\frac13V$ |

**Checks:**

- $Q_2 + Q_3 = \tfrac23CV = Q_1$ ✓ (the charge leaving $C_1$ lands on the block)
- $V_1 + V_{23} = V$ ✓

**(e)**

$$U = \tfrac12C_{eq}V^2 = \boxed{\tfrac13CV^2}$$

$$U_1 = \tfrac12C\left(\tfrac23V\right)^2 = \tfrac29CV^2, \qquad U_2 = U_3 = \tfrac12C\left(\tfrac13V\right)^2 = \tfrac1{18}CV^2$$

They add up: $\tfrac{4}{18} + \tfrac1{18} + \tfrac1{18} = \tfrac{6}{18} = \tfrac13$ ✓. **$C_1$ stores the most**, four times as much as each of the others. With equal $C$, energy goes as $V^2$, and $C_1$ has twice the voltage.

**(f)** Now $C_1 \to \kappa C$. The battery is connected, so $V$ stays fixed. Series capacitors share charge, so the voltage splits in inverse proportion to capacitance:

$$V_1' = V\frac{C_{23}}{C_1' + C_{23}} = V\frac{2C}{\kappa C + 2C} = \boxed{\frac{2V}{\kappa + 2}}$$

**It goes down** (for $\kappa > 1$). A bigger capacitor needs less voltage to hold the same charge, so the block picks up more of $V$.

Check: $\kappa = 1$ gives $\tfrac{2V}{3}$, matching (d) ✓.

### Problem 2

**(a)**

$$R = \frac{\rho L}{A_{\text{cross}}} = \boxed{\frac{\rho L}{\pi a^2}}$$

This one is **not on the equation sheet**, so memorize it.

**(b)** $3R$ and $6R$ connect the same two nodes, so they're in parallel:

$$R_p = \frac{3R\cdot6R}{9R} = 2R$$

$R$ carries all the current into that block, so it's in series:

$$R_{ext} = R + 2R = \boxed{3R}$$

**(c)** The emf drives current through $r$ and the external network in series:

$$I = \boxed{\frac{\mathcal{E}}{3R + r}}, \qquad V_T = \mathcal{E} - Ir = I(3R) = \boxed{\frac{3R\,\mathcal{E}}{3R + r}}$$

$V_T < \mathcal{E}$ as expected, and $V_T \to \mathcal{E}$ when $r \to 0$ ✓.

**(d)** The parallel block has voltage $V_p = I(2R)$.

$$I_{3R} = \frac{2IR}{3R} = \boxed{\tfrac23I}, \qquad I_{6R} = \frac{2IR}{6R} = \boxed{\tfrac13I}$$

They sum to $I$ ✓. **The $3R$ carries twice as much**: both have the same voltage, so current goes as $1/R$, and it prefers the easier path.

**(e)** Use $P = I^2R$ for each resistor:

| Resistor | Power |
|---|---|
| $R$ | $I^2R$ |
| $3R$ | $\left(\tfrac23I\right)^2(3R) = \tfrac43I^2R$ |
| $6R$ | $\left(\tfrac13I\right)^2(6R) = \tfrac23I^2R$ |
| $r$ | $I^2r$ |

Sum:

$$I^2R\left(1 + \tfrac43 + \tfrac23\right) + I^2r = I^2(3R + r)$$

Since $I(3R + r) = \mathcal{E}$, the sum is $I\cdot\mathcal{E}$ ✓. Every bit of power the emf supplies ends up as heat somewhere.

**(f)** From the sheet, $R' = R(1 + \alpha\Delta T)$. Heating raises $R$ (for $\alpha > 0$), so the total resistance $R_{ext} + r$ goes up while $\mathcal{E}$ is unchanged. The **current goes down**.

### Problem 3

**(a)** $I_1$ and $I_3$ flow into the top junction and $I_2$ flows out:

$$\boxed{I_1 + I_3 = I_2}$$

**(b)** Walk the left loop clockwise: up the left branch, then down the middle.

- Up through $2\mathcal{E}$, from − to +: $+2\mathcal{E}$
- Up through $R$, with $I_1$: $-I_1R$
- Down through $2R$, with $I_2$: $-2I_2R$

$$\boxed{2\mathcal{E} - I_1R - 2I_2R = 0}$$

**(c)** Walk the right loop: up the right branch, then down the middle.

- Up through $\mathcal{E}$, from − to +: $+\mathcal{E}$
- Up through $R$, with $I_3$: $-I_3R$
- Down through $2R$, with $I_2$: $-2I_2R$

$$\boxed{\mathcal{E} - I_3R - 2I_2R = 0}$$

**(d)** From (b) and (c):

$$I_1 = \frac{2\mathcal{E}}{R} - 2I_2, \qquad I_3 = \frac{\mathcal{E}}{R} - 2I_2$$

Substitute into (a):

$$\frac{2\mathcal{E}}{R} - 2I_2 + \frac{\mathcal{E}}{R} - 2I_2 = I_2 \;\Rightarrow\; \frac{3\mathcal{E}}{R} = 5I_2$$

$$\boxed{I_2 = \frac{3\mathcal{E}}{5R}}$$

Back-substitute:

$$I_1 = \frac{2\mathcal{E}}{R} - \frac{6\mathcal{E}}{5R} = \boxed{\frac{4\mathcal{E}}{5R}}$$

$$I_3 = \frac{\mathcal{E}}{R} - \frac{6\mathcal{E}}{5R} = \boxed{-\frac{\mathcal{E}}{5R}}$$

$I_3$ is **negative**, so the real current in the right branch flows **down**, with magnitude $\mathcal{E}/5R$.

Check (a): $\tfrac45 - \tfrac15 = \tfrac35$ ✓.

**(e)**

- **The $2\mathcal{E}$ battery supplies energy.** Current leaves its + terminal.
  $$P_{\text{supplied}} = (2\mathcal{E})I_1 = \frac{8\mathcal{E}^2}{5R}$$
- **The $\mathcal{E}$ battery is being charged.** Current is forced *into* its + terminal (downward).
  $$P_{\text{absorbed}} = \mathcal{E}|I_3| = \frac{\mathcal{E}^2}{5R}$$
- **Heat in the resistors:**
  $$I_1^2R + I_2^2(2R) + I_3^2R = \frac{\mathcal{E}^2}{R}\cdot\frac{16 + 18 + 1}{25} = \frac{7\mathcal{E}^2}{5R}$$

**Balance:**

$$\frac{8\mathcal{E}^2}{5R} = \frac{\mathcal{E}^2}{5R} + \frac{7\mathcal{E}^2}{5R} \;✓$$

### Problem 4

**(a)** At $t = 0^+$ the capacitor has no charge, so $V_C = q/C = 0$. A component with zero voltage across it that still lets current through behaves like a wire. All of $\mathcal{E}$ is across $R$:

$$\boxed{i_0 = \frac{\mathcal{E}}{R},\quad V_R = \mathcal{E},\quad V_C = 0}$$

**(b)** As $t\to\infty$ the capacitor charges until $V_C = \mathcal{E}$. Then there's no voltage left across $R$, so no current flows, and the capacitor acts like a break.

$$\boxed{i = 0,\quad V_C = \mathcal{E},\quad q_f = C\mathcal{E}}$$

**(c)** From the equation sheet:

$$\tau = RC, \qquad q(t) = C\mathcal{E}\left(1 - e^{-t/RC}\right), \qquad i(t) = \frac{\mathcal{E}}{R}e^{-t/RC}$$

Set $q = \tfrac12C\mathcal{E}$:

$$1 - e^{-t/RC} = \tfrac12 \;\Rightarrow\; e^{-t/RC} = \tfrac12 \;\Rightarrow\; \boxed{t = RC\ln2 \approx 0.69RC}$$

**(d)**

- $q(t)$ starts at 0 and rises steeply, then levels off toward $C\mathcal{E}$. At $t = \tau$ it reaches $63\%$ of $C\mathcal{E}$.
- $i(t)$ starts at $\mathcal{E}/R$ and decays toward 0. At $t = \tau$ it's down to $37\%$.

The two curves are mirror images: one approaches its final value the same way the other dies off. (Plots use $\tau = 1$, $C\mathcal{E} = 1$, $\mathcal{E}/R = 1$.)

```desmos-graph
left=0; right=5; bottom=-0.1; top=1.15; height=260
---
y=1-e^{-x}|x>0|#30a46c
y=e^{-x}|x>0|#e5484d
y=1|dashed|#8a8985
x=1|dashed|#8a8985
```
Green is $q(t)$, red is $i(t)$, and the dashed vertical line is $t = \tau$.

**(e)** The new loop is $C$ and $2R$ only:

$$\tau' = \boxed{2RC}$$

The capacitor starts at $V = \mathcal{E}$, so

$$i_0' = \boxed{\frac{\mathcal{E}}{2R}}, \qquad q(t) = \boxed{C\mathcal{E}\,e^{-t/2RC}}$$

The current through the capacitor **reverses** compared with charging. Charge now flows *out of* the + plate instead of onto it. That's why the equation sheet has a minus sign in the discharge current, $i = -\frac{q_0}{RC}e^{-t/RC}$.

**(f)** The capacitor starts with energy $\tfrac12C\mathcal{E}^2$ and ends with none. The only place that energy can go is the resistor, so:

$$E_{\text{heat}} = \boxed{\tfrac12C\mathcal{E}^2}$$

This doesn't depend on the resistance: a $2R$ resistor takes longer, but the total heat is the same.

---

## Scoring guide (100 pts)
| Problem | Where the points go |
|---|---|
| 1 | Topology explanation (4), the Q/V table (6), and a dielectric answer that passes the κ = 1 check (4) |
| 2 | ρL/A from memory (3), the current split with a reason (5), and the power balance (5) |
| 3 | Clean sign conventions in the loop equations (8), interpreting the negative current (part of 8), and identifying which battery is charging (6) |
| 4 | Explaining the wire and break behavior (8), sketches with labels (4), and energy reasoning without an integral (4) |
