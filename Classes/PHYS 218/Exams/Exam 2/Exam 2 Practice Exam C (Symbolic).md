---
class: "[[PHYS 218]]"
tags: [exam, practice-exam, symbolic, capacitance, circuits, rc-circuits, kirchhoff]
---
# Exam 2 Practice Exam C (symbolic, no numbers)
Class: [[PHYS 218]] · Exam 2 is **Tue Oct 13** · Also: [[Exam 2 Practice Exam B]] · [[Exam 2 Past Exams - Worked Key]] · [[Exam 2 Sample Exam]] · [[Exam 2 Review - Ch 8-10]]

> [!warning] Stretch exam
> This is harder and longer than the real exam. For realistic timing, use [[Exam 2 Practice Exam D]].

*No ac (not on this exam). Uses the official [[Exam 2 Equation Sheet]]. Five problems, 20% each, **60 minutes** (about 12 per problem). Everything is in variables. Give every answer in terms of the given symbols, simplified, and **box it**. Then check it: units, limiting cases (what happens if $R\to0$, $R\to\infty$, $t\to\infty$), and symmetry. The worked key is at the bottom.*

---

## Problem 1: Capacitors (F1 + F2 style)
**Part A.** In the network below, the capacitances are given in terms of $C$. A voltage $V$ is applied between $a$ and $b$.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,2) -- (0,4) to[C, l=$C$] (2.5,4) to[C, l=$2C$] (5,4) -- (5,2);
\draw (0,2) to[C, l=$C$] (5,2);
\draw (0,2) to[C, l_=$2C$] (0,0) node[circ]{} node[below]{$a$};
\draw (5,2) -- (5,0) node[circ]{} node[below]{$b$};
\end{circuitikz}
\end{document}
```

- (a) Find the equivalent capacitance between $a$ and $b$.
- (b) Find the charge on and the voltage across each of the four capacitors, in terms of $C$ and $V$.
- (c) Find the total stored energy.

**Part B.** Two capacitors, $C$ and $xC$, store $n$ times more energy when connected in parallel to a battery than when connected in series to the same battery.

- (d) Find $x$ in terms of $n$.
- (e) What is the smallest possible value of $n$? What does it mean physically?

## Problem 2: Real batteries and power (F3 + S1 style)
A battery with emf $\mathcal{E}$ and internal resistance $r$ drives a load resistor $R$.

- (a) Find the current and the terminal voltage $V_T$.
- (b) A voltmeter across the terminals reads $V_0$ with nothing connected and $V_1$ with the load $R$ connected. Find $r$ in terms of $V_0$, $V_1$ and $R$.
- (c) Find the power delivered to $R$ as a function of $R$. Show that it is largest when $R = r$, and find that maximum power.
- (d) Find the efficiency, $P_R/P_{\text{battery}}$, in general and at the maximum-power point.
- (e) The load is replaced by $N$ identical bulbs in parallel, each of resistance $R_b$. Find $V_T$ as a function of $N$. What happens as $N \to \infty$?
- (f) The load is a heating wire with resistance $R_0$ when cold. Running, it warms by $\Delta T$, and its temperature coefficient is $\alpha$. Find the power delivered to it when hot. Using (c), explain when heating **raises** the power and when it **lowers** it.

## Problem 3: Resistor networks (F5 + S4 style)
**Part A: Bridge.**

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,2) node[circ]{} node[left]{$A$} to[R, l=$R$] (2.5,4) node[circ]{} node[above]{$X$} to[R, l=$2R$] (5,2) node[circ]{} node[right]{$B$};
\draw (0,2) to[R, l_=$2R$] (2.5,0) node[circ]{} node[below]{$Y$} to[R, l_=$4R$] (5,2);
\draw (2.5,4) to[R, l=$R_m$] (2.5,0);
\end{circuitikz}
\end{document}
```

- (a) With current flowing from $A$ to $B$, show that **no current** flows through $R_m$, whatever the value of $R_m$.
- (b) Find $R_{AB}$.
- (c) In general, if the four outer resistors are $R_{AX}$, $R_{XB}$, $R_{AY}$, $R_{YB}$, what condition makes the current in $R_m$ zero?

**Part B: Infinite ladder.** The ladder below repeats forever. Every resistor is $R$.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,2) node[left]{$A$} to[R, l=$R$] (2,2) to[R, l=$R$] (4,2) to[R, l=$R$] (6,2) -- (6.6,2);
\draw (0,0) node[left]{$B$} to[R, l_=$R$] (2,0) to[R, l_=$R$] (4,0) to[R, l_=$R$] (6,0) -- (6.6,0);
\draw (2,2) to[R, l=$R$] (2,0);
\draw (4,2) to[R, l=$R$] (4,0);
\draw (6,2) to[R, l=$R$] (6,0);
\draw (7.2,1) node{$\cdots$};
\end{circuitikz}
\end{document}
```

- (d) Find $R_{AB}$. *Hint: adding one more section to an infinite ladder doesn't change it.*
- (e) The finite 2-rung version (S4 on the old exam) gave $41R/15$. Compare the two answers and explain why they're so close.

## Problem 4: RC energy (10.6)
The capacitor starts uncharged, and the switch closes at $t = 0$.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,3) to[battery1, l_=$\mathcal{E}$] (0,0);
\draw (0,3) to[nos, l=$S$] (2.5,3) to[R, l=$R$] (5,3) to[C, l=$C$] (5,0) -- (0,0);
\end{circuitikz}
\end{document}
```

- (a) Write $V_C(t)$, $I(t)$ and $Q(t)$, and define $\tau$.
- (b) By integrating $I^2R$, find the total energy turned into heat in $R$ during the full charge. Compare it with the energy finally stored in $C$ and with the total work done by the battery.
- (c) At what time is the stored energy half its final value? Give the answer as a multiple of $\tau$.
- (d) At what time is energy flowing *into the capacitor* fastest? What is that maximum rate?
- (e) The fully charged capacitor is disconnected and discharged through $R$. How long until the stored energy is halved?

## Problem 5: Two batteries (F4 + S3 style)
Ideal batteries $\mathcal{E}_1$ and $\mathcal{E}_2$ both have their **+ terminal on top**.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,1.8) to[battery1, l_=$\mathcal{E}_1$] (0,0);
\draw (0,1.8) to[R, l=$R_1$] (0,4) -- (6,4);
\draw (0,4) node[circ]{} node[above]{$T$};
\draw (3,4) to[R, l=$R$] (3,0);
\draw (6,1.8) to[battery1, l=$\mathcal{E}_2$] (6,0);
\draw (6,1.8) to[R, l_=$R_2$] (6,4);
\draw (0,0) node[circ]{} node[below]{$G$} -- (6,0);
\end{circuitikz}
\end{document}
```

- (a) Define three currents, then write one junction equation and two loop equations.
- (b) Find the potential $V_T$ of the top wire, taking $V_G = 0$.
- (c) Find each branch current in terms of $V_T$.
- (d) Find the condition on $\mathcal{E}_1$ for battery 2 to be **charged**.
- (e) Special case: $\mathcal{E}_1 = \mathcal{E}_2 = \mathcal{E}$ and $R_1 = R_2 = r$. Show that the pair acts like a single battery, and find its emf and internal resistance.

---
---

## Answer key

### Problem 1

**(a)** Topology: $C$ and $2C$ (top) are in series. That pair is in parallel with the middle $C$. That block is in series with $2C$ (left).

$$C_{\text{top}} = \frac{C\cdot2C}{3C} = \frac{2C}{3}$$

$$C_{\text{block}} = \frac{2C}{3} + C = \frac{5C}{3}$$

$$C_{ab} = \frac{\frac{5C}{3}\cdot2C}{\frac{5C}{3}+2C} = \frac{10C^2/3}{11C/3} = \boxed{\frac{10C}{11}}$$

**(b)** Work outward from the total charge.

- **Left $2C$:** it's in series with everything, so it carries the full charge: $Q_4 = C_{ab}V = \frac{10}{11}CV$ and $V_4 = \frac{Q_4}{2C} = \frac{5}{11}V$.
- **Block voltage:** $V - \frac{5}{11}V = \frac{6}{11}V$.
- **Middle $C$:** $V_3 = \frac{6}{11}V$ and $Q_3 = \frac{6}{11}CV$.
- **Top pair:** it carries $Q_{\text{top}} = \frac{2C}{3}\cdot\frac{6V}{11} = \frac{4}{11}CV$. Both top capacitors get that same charge because they're in series:
  - top $C$: $V_1 = \frac{4}{11}V$
  - top $2C$: $V_2 = \frac{2}{11}V$

| | top $C$ | top $2C$ | middle $C$ | left $2C$ |
|---|---|---|---|---|
| $Q$ | $\frac{4}{11}CV$ | $\frac{4}{11}CV$ | $\frac{6}{11}CV$ | $\frac{10}{11}CV$ |
| $V$ | $\frac{4}{11}V$ | $\frac{2}{11}V$ | $\frac{6}{11}V$ | $\frac{5}{11}V$ |

**Checks:**

- $Q_{\text{top}} + Q_3 = \frac{4}{11} + \frac{6}{11} = \frac{10}{11}$, which equals $Q_4$ ✓
- Top route: $V_4 + V_1 + V_2 = \frac{5+4+2}{11}V = V$ ✓
- The smaller capacitor in a series pair takes the bigger voltage ✓

**(c)**

$$U = \tfrac12 C_{ab}V^2 = \boxed{\frac{5}{11}CV^2}$$

**(d)** Same battery, so $U \propto C_{eq}$:

$$\frac{C_\parallel}{C_s} = \frac{(1+x)C}{\dfrac{xC^2}{(1+x)C}} = \frac{(1+x)^2}{x} = n$$

$$x^2 + (2-n)x + 1 = 0$$

$$\boxed{x = \frac{(n-2) \pm \sqrt{n(n-4)}}{2}}$$

The two roots multiply to 1, so they're reciprocals: the same pair with the labels swapped. Check: $n = 5$ gives $(3\pm\sqrt5)/2$, which is F2 ✓.

**(e)** A real root needs $n(n-4) \ge 0$, so $\boxed{n_{\min} = 4}$, reached at $x = 1$. Equal capacitors give the *smallest* parallel-to-series ratio: parallel gives $2C$, series gives $C/2$, and the ratio is 4. Any mismatch makes the series combination fall further behind, because a series combination is dominated by its smaller capacitor.

### Problem 2

**(a)**

$$I = \boxed{\frac{\mathcal{E}}{R + r}}, \qquad V_T = \mathcal{E} - Ir = \boxed{\frac{\mathcal{E}R}{R + r}}$$

Limits: as $R\to\infty$, $V_T \to \mathcal{E}$ (open circuit). As $R \to 0$, $V_T \to 0$ (short circuit, $I = \mathcal{E}/r$) ✓.

**(b)**

- No current flows on open circuit, so $V_0 = \mathcal{E}$.
- With the load connected, $I = V_1/R$.

$$r = \frac{\mathcal{E} - V_1}{I} = \boxed{\frac{R(V_0 - V_1)}{V_1}}$$

This is S1 in symbols.

**(c)**

$$P_R = I^2R = \boxed{\frac{\mathcal{E}^2R}{(R+r)^2}}$$

Differentiate with respect to $R$:

$$\frac{dP_R}{dR} = \mathcal{E}^2\frac{(R+r)^2 - 2R(R+r)}{(R+r)^4} = \mathcal{E}^2\frac{r - R}{(R+r)^3} = 0 \;\Rightarrow\; R = r$$

$$P_{\max} = \frac{\mathcal{E}^2 r}{(2r)^2} = \boxed{\frac{\mathcal{E}^2}{4r}}$$

Why a maximum makes sense: at $R = 0$ there's lots of current but no voltage across the load, and at $R \to \infty$ there's voltage but no current. Both give zero power, so there has to be a peak in between.

**(d)**

$$\eta = \frac{I^2R}{I^2(R+r)} = \boxed{\frac{R}{R+r}}$$

At $R = r$, $\eta = \boxed{\tfrac12}$: maximum power transfer wastes half the energy inside the battery. That's why power grids don't run at maximum power transfer.

**(e)** $N$ bulbs in parallel give $R_L = R_b/N$, so

$$V_T = \frac{\mathcal{E}R_L}{R_L + r} = \boxed{\frac{\mathcal{E}R_b}{R_b + Nr}}$$

As $N\to\infty$, $V_T \to 0$. Each added bulb lowers the load resistance, draws more current and drops more voltage inside the battery. This is the S1 bulb problem in general form.

**(f)** From the equation sheet, $R' = R_0(1 + \alpha\Delta T)$. Plug that into (c):

$$P' = \boxed{\frac{\mathcal{E}^2R_0(1+\alpha\Delta T)}{\left[R_0(1+\alpha\Delta T) + r\right]^2}}$$

$P(R)$ rises up to $R = r$ and falls after it. Heating raises $R$ (for $\alpha > 0$), so:

- If $R' \le r$, the hot wire is closer to $r$, so the power **goes up**.
- If $R_0 \ge r$, heating moves $R$ further past $r$, so the power **goes down**.
- If $R_0 < r < R'$, it depends on which value is closer to the peak.

Common case: a wall heater has $R \gg r$, so it draws its highest power at the instant it's switched on, while still cold.

### Problem 3

**(a)** Find the potentials at X and Y with $R_m$ removed, taking $V_A = V$ and $V_B = 0$. Each side is a voltage divider:

$$V_X = V\frac{2R}{R + 2R} = \frac{2V}{3}, \qquad V_Y = V\frac{4R}{2R+4R} = \frac{2V}{3}$$

$V_X = V_Y$, so when $R_m$ is put back there is **no voltage across it**. With no voltage there's no current, whatever $R_m$ is. Putting $R_m$ back doesn't disturb anything, so the assumption holds.

**(b)** $R_m$ carries no current, so it can be deleted. That leaves two paths, $3R$ and $6R$, in parallel:

$$R_{AB} = \frac{3R\cdot6R}{9R} = \boxed{2R}$$

**(c)** For balance, X and Y must divide the voltage in the same proportion:

$$\frac{R_{XB}}{R_{AX}+R_{XB}} = \frac{R_{YB}}{R_{AY}+R_{YB}} \;\Longleftrightarrow\; \boxed{\frac{R_{AX}}{R_{XB}} = \frac{R_{AY}}{R_{YB}}}$$

Here $R/2R = 2R/4R$ ✓. This is the Wheatstone bridge condition.

**(d)** Call the answer $R_\infty$. Looking into the ladder from A–B, you see a top $R$ and a bottom $R$ in series, with a rung $R$ in parallel with *another infinite ladder*, which is again $R_\infty$:

$$R_\infty = 2R + \frac{R\,R_\infty}{R + R_\infty}$$

Multiply through by $(R + R_\infty)$:

$$R_\infty R + R_\infty^2 = 2R^2 + 2RR_\infty + RR_\infty \;\Rightarrow\; R_\infty^2 - 2RR_\infty - 2R^2 = 0$$

$$R_\infty = \frac{2R + \sqrt{4R^2 + 8R^2}}{2} = \boxed{(1+\sqrt3)R \approx 2.732R}$$

Take the + root, because resistance can't be negative.

**(e)** $41/15 = 2.7333$ compared with $1+\sqrt3 = 2.7321$, a difference of 0.05%. Each rung lets the current skip everything farther along, so far-away sections carry almost no current and barely affect $R_{AB}$. The ladder converges fast, which is also why folding from the far end works.

### Problem 4

**(a)**

$$V_C = \mathcal{E}(1 - e^{-t/\tau}), \qquad Q = C\mathcal{E}(1 - e^{-t/\tau}), \qquad I = \frac{\mathcal{E}}{R}e^{-t/\tau}, \qquad \tau = RC$$

**(b)**

$$E_{\text{heat}} = \int_0^\infty \frac{\mathcal{E}^2}{R^2}e^{-2t/\tau}R\,dt = \frac{\mathcal{E}^2}{R}\cdot\frac{\tau}{2} = \frac{\mathcal{E}^2}{R}\cdot\frac{RC}{2} = \boxed{\tfrac12 C\mathcal{E}^2}$$

- Stored in $C$: $\tfrac12C\mathcal{E}^2$. Same amount.
- Work done by the battery: $Q_f\mathcal{E} = C\mathcal{E}^2$, which is the sum of the two ✓.

Half the battery's energy is always lost as heat, and **$R$ cancels out**. A smaller $R$ means bigger current for a shorter time, and the two effects exactly offset.

**(c)** $U = \tfrac12CV_C^2 = U_f(1-e^{-t/\tau})^2$. Set this to $\tfrac12U_f$:

$$1 - e^{-t/\tau} = \frac{1}{\sqrt2} \;\Rightarrow\; e^{-t/\tau} = 1 - \frac{1}{\sqrt2} = \frac{\sqrt2 - 1}{\sqrt2}$$

$$t = \tau\ln\frac{\sqrt2}{\sqrt2-1} = \boxed{\tau\ln(2+\sqrt2) \approx 1.23\tau}$$

(Rationalize: $\frac{\sqrt2}{\sqrt2-1}\cdot\frac{\sqrt2+1}{\sqrt2+1} = 2 + \sqrt2$.)

Compare this with *voltage* at half its final value: $t = \tau\ln2 \approx 0.69\tau$. Energy lags behind voltage because it goes as $V^2$.

**(d)** The power into $C$ is

$$P_C = V_C I = \frac{\mathcal{E}^2}{R}(1-e^{-t/\tau})e^{-t/\tau}$$

Let $u = e^{-t/\tau}$. Then $u(1-u)$ is largest at $u = \tfrac12$:

$$t = \boxed{\tau\ln2}, \qquad P_{C,\max} = \frac{\mathcal{E}^2}{R}\cdot\frac14 = \boxed{\frac{\mathcal{E}^2}{4R}}$$

This is the same $\mathcal{E}^2/4r$ form as Problem 2(c). At that instant $V_C = \mathcal{E}/2$, so the capacitor and the resistor split the voltage evenly, just like at the max-power point.

**(e)** Discharging: $U = U_0e^{-2t/\tau}$. Set $e^{-2t/\tau} = \tfrac12$:

$$t = \boxed{\tfrac{\tau}{2}\ln2 \approx 0.35\,RC}$$

That's half the charge's half-life, because energy goes as $Q^2$.

### Problem 5

**(a)** Guess currents $I_1$ up the left branch, $I_2$ up the right branch, and $I$ down through $R$.

*Junction T:*

$$\boxed{I_1 + I_2 = I}$$

*Left loop* (up the left branch, down through $R$):

$$\boxed{\mathcal{E}_1 - I_1R_1 - IR = 0}$$

*Right loop* (up the right branch, down through $R$):

$$\boxed{\mathcal{E}_2 - I_2R_2 - IR = 0}$$

**(b)** Node method. Write each current in terms of $V_T$ and require the currents out of T to sum to zero:

$$\frac{V_T - \mathcal{E}_1}{R_1} + \frac{V_T - \mathcal{E}_2}{R_2} + \frac{V_T}{R} = 0$$

$$\boxed{V_T = \frac{\dfrac{\mathcal{E}_1}{R_1} + \dfrac{\mathcal{E}_2}{R_2}}{\dfrac{1}{R_1} + \dfrac{1}{R_2} + \dfrac1R} = \frac{R(R_2\mathcal{E}_1 + R_1\mathcal{E}_2)}{RR_1 + RR_2 + R_1R_2}}$$

$V_T$ is a weighted average of the emfs, with each battery weighted by the conductance $1/R$ of its branch. The $1/R$ term in the denominator pulls the result toward 0.

**(c)**

$$I_1 = \boxed{\frac{\mathcal{E}_1 - V_T}{R_1}}, \qquad I_2 = \boxed{\frac{\mathcal{E}_2 - V_T}{R_2}}, \qquad I = \boxed{\frac{V_T}{R}}$$

A negative result means that current really flows the other way.

**(d)** Battery 2 is charged when $I_2 < 0$, that is, when $V_T > \mathcal{E}_2$, so current is pushed *into* its + terminal. Substitute $V_T$:

$$R(R_2\mathcal{E}_1 + R_1\mathcal{E}_2) > \mathcal{E}_2(RR_1 + RR_2 + R_1R_2)$$

$$RR_2\mathcal{E}_1 > \mathcal{E}_2R_2(R + R_1)$$

$$\boxed{\mathcal{E}_1 > \mathcal{E}_2\left(1 + \frac{R_1}{R}\right)}$$

It isn't enough for $\mathcal{E}_1$ to beat $\mathcal{E}_2$. It has to beat $\mathcal{E}_2$ by the extra fraction $R_1/R$, because some of battery 1's push is used up driving current through the load. Check with Practice Exam B: $12 > 4(1 + 6/4) = 10$ ✓, and B found battery 2 being charged.

**(e)** With $\mathcal{E}_1 = \mathcal{E}_2 = \mathcal{E}$ and $R_1 = R_2 = r$:

$$V_T = \frac{2\mathcal{E}/r}{2/r + 1/R} = \frac{\mathcal{E}R}{R + r/2}$$

Compare with Problem 2(a), $V_T = \frac{\mathcal{E}R}{R + r_{\text{eff}}}$. The pair is the same as **one battery with emf $\mathcal{E}$ and internal resistance $r/2$**. Batteries in parallel keep the same emf and halve the internal resistance. That's why parallel packs deliver more current without raising the voltage.

---

## Scoring guide (100 pts)

| Problem | Points | Where people lose points |
|---|---|---|
| 1 | 20 | Combining the top pair in parallel; $n_{\min}$ needs the discriminant |
| 2 | 20 | Algebra in $dP/dR$; forgetting that the open-circuit voltage equals $\mathcal{E}$; $R = R_0(1+\alpha\Delta T)$ |
| 3 | 20 | Not checking $V_X = V_Y$ before deleting $R_m$; taking the negative root |
| 4 | 20 | Squaring: energy goes as $e^{-2t/\tau}$; leaving $R$ in the heat answer |
| 5 | 20 | Sign convention; stating the charging condition as just $\mathcal{E}_1 > \mathcal{E}_2$ |
