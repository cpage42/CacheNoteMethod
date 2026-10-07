# Quiz Prep: HW 10.2 and 10.3
Class: [[PHYS 218]] · Covers Kirchhoff's rules and multi-loop circuits (HW 10.2) and RC circuits (HW 10.3) · Quiz 10, **Wed Oct 7** · Previous: [[Quiz Prep - HW 9.2 and 10.1]] · Next: [[Quiz Prep - HW 10.4 and 10.5]] · Full review: [[Exam 2 Review - Ch 8-10]] · Notes: [[RC circuits]] · [[Ch 10 - Direct-Current Circuits]]

> [!abstract] The whole quiz in one sentence
> When a circuit won't reduce with series/parallel, **Kirchhoff's rules** (charge in = charge out, voltage around a loop adds to zero) solve it. When a capacitor is in it, everything changes **exponentially** with time constant $\tau = RC$: the capacitor starts as a **wire** and ends as a **break**.

---

## Intuition

### Kirchhoff's rules (HW 10.2)
- **Junction rule:** current in = current out. Charge can't pile up at a point.
- **Loop rule:** walk around any closed loop and the voltage changes add to zero. You end at the same "height" you started at.
- You need **one equation per unknown current**. Use junctions first (one fewer than the number of junctions), then loops. Each new loop has to include a branch you haven't used yet.
- **Guess the current directions.** If a current comes out negative, it just flows the other way. Keep the sign until the end.

| Crossing… | walking direction | $\Delta V$ |
|---|---|---|
| resistor | with your current arrow | $-IR$ |
| resistor | against your current arrow | $+IR$ |
| battery | $-$ to $+$ | $+\varepsilon$ |
| battery | $+$ to $-$ | $-\varepsilon$ |

- **A battery is being charged** when current goes *into* its $+$ terminal. It absorbs power $I\varepsilon$ instead of supplying it.
- **Check with power:** power from the sources = power into the resistors + power into any batteries being charged.

### Shorts and switches (HW 10.2)
- A **closed switch** or a **wire across a component** is a short: that component gets $V = 0$ and no current. All the current takes the wire.
- Shorting part of a circuit **lowers** $R_{eq}$, so the total current **goes up**.
- An **open switch** is a break: no current in that branch.

### RC circuits (HW 10.3)
- An **uncharged capacitor at $t = 0$ acts like a wire.** Current starts at its maximum, $I_0 = \varepsilon/R$.
- A **fully charged capacitor ($t \to \infty$) acts like a break.** No current, and $V_C = \varepsilon$ (or whatever voltage is across its branch).
- In between, everything is exponential with $\tau = RC$: 63% of the way after one $\tau$, about done after $5\tau$.
- $V_R + V_C = \varepsilon$ at every instant (the loop rule). As one goes up the other goes down.
- **Set $\tau$ equal to a time, or plug in $t$?** If the problem says the circuit should act on a certain time scale ("the flash lasts about…", "design a time constant of…"), set $RC$ equal to that time. If it gives a specific $t$ and asks for $q$, $I$ or $V$ then, plug $t$ into the exponential.
- **More than one resistor:** use the wire/break pictures for the start and end values. For $\tau$, use the resistance the capacitor "sees" with the battery replaced by a wire.

---

## Formula sheet

| Idea               | Formula                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------- |
| Junction rule      | $\sum I_{in} = \sum I_{out}$                                                              |
| Loop rule          | $\sum \Delta V = 0$                                                                       |
| Time constant      | $\tau = RC$                                                                               |
| Charging           | $q = C\varepsilon(1 - e^{-t/\tau})$, $\ I = \frac{\varepsilon}{R}e^{-t/\tau}$             |
| Charging voltages  | $V_C = \varepsilon(1 - e^{-t/\tau})$, $\ V_R = \varepsilon e^{-t/\tau}$                   |
| Discharging        | $q = Q_0e^{-t/\tau}$, $\ V = V_0e^{-t/\tau}$, $\ I = \frac{V_0}{R}e^{-t/\tau}$            |
| Time to a fraction | charging to fraction $f$: $t = -\tau\ln(1 - f)$; discharging to $V$: $t = \tau\ln(V_0/V)$ |
| Half-time          | $t_{1/2} = \tau\ln 2 \approx 0.693\,\tau$                                                 |
| Capacitor energy   | $U = \tfrac12CV^2 = \frac{Q^2}{2C}$                                                       |

Units: $\Omega\cdot\text{F} = \text{s}$. µF = $10^{-6}$ F, kΩ = $10^{3}$ Ω.

---

## Practice quiz

*Time yourself: 30 minutes. Calculator OK. Keep extra digits until the final step. The answer key is at the bottom.*

**1. Two-loop circuit (HW 10.2 style).** $\varepsilon_1 = 10$ V, $\varepsilon_2 = 4.0$ V, $R_1 = 2.0\ \Omega$, $R_2 = 2.0\ \Omega$, $R_3 = 4.0\ \Omega$. Both batteries have $+$ on top. Take $I_1$ up the left branch, $I_3$ down the middle, and $I_2$ down the right branch.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,3) to[battery1, l_=$\varepsilon_1$] (0,0);
\draw (0,3) to[R, l=$R_1$] (3,3) to[R, l=$R_3$, *-*] (3,0);
\draw (3,3) to[R, l=$R_2$] (6,3) to[battery1, l=$\varepsilon_2$] (6,0);
\draw (6,0) -- (0,0);
\end{circuitikz}
\end{document}
```

- (a) Write the junction equation and both loop equations.
- 
- (b) Solve for $I_1$, $I_2$ and $I_3$.
- 
- (c) Is $\varepsilon_2$ being charged or discharged? What's the voltage across $R_3$?
- 
- (d) Check your answer with a power balance.
- 

**2. Shorting with a switch (HW 10.2 style).** A 12 V battery is connected to $R_1 = 2.0\ \Omega$ in series with $R_2 = 6.0\ \Omega$ and $R_3 = 3.0\ \Omega$ in parallel. A switch $S$ is wired across $R_1$.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,3) to[battery1, l_=$\varepsilon$] (0,0);
\draw (0,3) -- (0.5,3) to[R, l_=$R_1$, *-*] (3,3) -- (4.5,3);
\draw (0.5,3) -- (0.5,4.2) to[nos, l=$S$] (3,4.2) -- (3,3);
\draw (4.5,3) to[R, l_=$R_2$, *-*] (4.5,0);
\draw (4.5,3) -- (6.5,3) to[R, l=$R_3$] (6.5,0) -- (0,0);
\end{circuitikz}
\end{document}
```

- (a) With $S$ open, find the total current and the current through $R_2$ and $R_3$.
- 
- (b) Now close $S$. What happens to $R_1$? Find the new total current and the currents through $R_2$ and $R_3$.
- 

**3. Charging a battery (HW 10.2 style).** An ideal 15 V source charges a 12 V battery (internal resistance 0.50 Ω) through a 1.0 Ω resistor, with the $+$ terminals connected together.
- (a) Find the current.
- 
- (b) Find the battery's terminal voltage.
- 
- (c) How much power goes into chemical energy, how much becomes heat, and how much does the source supply?
- 

**4. RC charging (HW 10.3 style).** A 20 µF capacitor charges through a 50 kΩ resistor from a 9.0 V battery, starting uncharged.
- (a) Find $\tau$, the initial current, and the final charge.
- 
- (b) How long until $V_C = 6.0$ V?
- 
- (c) Find the charge and the resistor's voltage at $t = 2.0$ s.
- 

**5. RC discharging (HW 10.3 style).** A 470 µF capacitor discharges from 12 V to 3.0 V in 5.0 s through a resistor.
- (a) Find the time constant and the resistance.
- 
- (b) How long did it take to reach 6.0 V?
- 

**6. Design a time constant (HW 10.3 "flash" style).** A camera flash needs its circuit to respond on a 2.0 ms time scale using a 100 µF capacitor.
- (a) What resistance do you need?
- 
- (b) With that resistor, how long until the discharge current drops to half its starting value?
- 

**7. RC with two resistors (HW 10.3 style).** $\varepsilon = 9.0$ V, $R_1 = 3.0$ kΩ, $R_2 = 6.0$ kΩ, $C = 5.0$ µF, capacitor uncharged. The switch closes at $t = 0$.

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

- (a) Current from the battery just after the switch closes?
- 
- (b) Current from the battery a long time later, and the final charge on $C$?
- 
- (c) Time constant for charging? If the switch is then opened, what's the discharge time constant?
- 

**8. Quick concepts.**
- (a) In a Kirchhoff problem one of your currents comes out negative. What does that mean, and what do you do?
- 
- (b) Why does an uncharged capacitor act like a wire at $t = 0$, and a charged one like a break?
- 
- (c) You double $R$ in an RC charging circuit. What happens to the final charge, and to how long it takes?
- 
- (d) After exactly one time constant, how charged is the capacitor? How much is left after one $\tau$ of discharging?
- 

---

## Checklist before the quiz
- [ ] Can I set up junction and loop equations with the right signs (use the table)?
- [ ] Do I know when a battery is being charged, and how to check with a power balance?
- [ ] Do I know what a closed switch across a component does?
- [ ] Can I write $q(t)$, $I(t)$, $V_C(t)$ for both charging and discharging?
- [ ] Can I solve for a time with a $\ln$, without using $e$ on the calculator?
- [ ] Do I know when to set $\tau$ equal to a time vs. plug in $t$?
- [ ] Can I find $t = 0$ and $t \to \infty$ values and the right $\tau$ in a two-resistor RC circuit?

---

## Answer key

**Problem 1**  
(a) Junction: $I_1 = I_2 + I_3$.  
Left loop (up through $\varepsilon_1$, across $R_1$, down $R_3$): $10 - 2I_1 - 4I_3 = 0$.  
Right loop (down the right branch, back up $R_3$): $-2I_2 - 4 + 4I_3 = 0$.  
(b) From the right loop, $I_2 = 2I_3 - 2$, so $I_1 = 3I_3 - 2$. Then $10 - 2(3I_3 - 2) - 4I_3 = 0$, so $10I_3 = 14$.  
**$I_3 = 1.4$ A, $I_1 = 2.2$ A, $I_2 = 0.80$ A.**  
(c) $I_2 > 0$ flows down through $\varepsilon_2$, into its $+$ terminal, so **$\varepsilon_2$ is being charged**. $V_3 = 4.0 \times 1.4 =$ **5.6 V**.  
(d) $\varepsilon_1$ supplies $10 \times 2.2 = 22$ W. $\varepsilon_2$ absorbs $4 \times 0.8 = 3.2$ W. Resistors: $2(2.2)^2 + 2(0.8)^2 + 4(1.4)^2 = 18.8$ W. $3.2 + 18.8 = 22$ ✓  

**Problem 2**  
(a) $R_2 \parallel R_3 = \frac{6 \cdot 3}{9} = 2.0\ \Omega$, so $R_{eq} = 4.0\ \Omega$ and $I = 12/4 =$ **3.0 A**. The parallel pair has $3.0 \times 2.0 = 6.0$ V, so $I_2 = 6/6 =$ **1.0 A** and $I_3 = 6/3 =$ **2.0 A**.  
(b) The closed switch **shorts out $R_1$**: no current through it, $V_1 = 0$. Now $R_{eq} = 2.0\ \Omega$, so $I = 12/2 =$ **6.0 A**, with the full 12 V across the pair: $I_2 =$ **2.0 A**, $I_3 =$ **4.0 A**. Shorting part of the circuit doubled the current.  

**Problem 3**  
(a) The two emfs oppose each other around the loop: $I = \frac{15 - 12}{1.0 + 0.50} =$ **2.0 A**.  
(b) Current goes into the $+$ terminal, so $V = \varepsilon + Ir = 12 + 2.0(0.50) =$ **13 V**.  
(c) Chemical: $I\varepsilon = 24$ W. Heat: $I^2(R + r) = 4(1.5) = 6.0$ W. Source: $15 \times 2.0 = 30$ W $= 24 + 6$ ✓  

**Problem 4**  
(a) $\tau = (50\times10^3)(20\times10^{-6}) =$ **1.0 s**. $I_0 = 9/50\,000 =$ **0.18 mA**. $Q_f = C\varepsilon = (20\times10^{-6})(9) =$ **180µC**. 
(b) $6 = 9(1 - e^{-t/\tau})$ gives $e^{-t} = \tfrac13$, so $t = \ln 3 \approx$ **1.10 s**.  
(c) $q = 180(1 - e^{-2}) \approx$ **156 µC**. $V_R = 9e^{-2} \approx$ **1.22 V** (and $V_C = 7.78$ V, adding to 9 ✓).  

**Problem 5**  
(a) $3 = 12e^{-5/\tau}$, so $\tau = \frac{5.0}{\ln 4} \approx$ **3.61 s**, and $R = \tau/C = 3.61/470\times10^{-6} \approx$ **7.7 kΩ**.  
(b) 12 V → 6 V is one half-life: $t = \tau\ln 2 =$ **2.5 s**. (Two half-lives, 12 → 6 → 3, take the full 5.0 s ✓.)  

**Problem 6**  
(a) "Responds on a 2.0 ms time scale" means set $\tau = RC = 2.0$ ms: $R = \frac{2.0\times10^{-3}}{100\times10^{-6}} =$ **20 Ω**.  
(b) $t = \tau\ln 2 = 2.0\text{ ms} \times 0.693 \approx$ **1.4 ms**.  

**Problem 7**  
(a) At $t = 0$ the capacitor is a wire, which shorts $R_2$: $I_0 = 9/3000 =$ **3.0 mA**.  
(b) At $t \to \infty$ the capacitor is a break: $I = \frac{9}{9000} =$ **1.0 mA**. $V_C = V_{R_2} = (1.0\text{ mA})(6.0\text{ k}\Omega) = 6.0$ V, so $Q = CV_C =$ **30 µC**.  
(c) Battery replaced by a wire: $C$ sees $R_1 \parallel R_2 = 2.0$ kΩ, so $\tau = (2.0\times10^3)(5.0\times10^{-6}) =$ **10 ms**. Switch opened: it discharges through $R_2$ alone, so $\tau = R_2C =$ **30 ms**.  

**Problem 8**  
(a) The actual current flows **opposite** your arrow. Keep the negative sign in every equation until you're done; only flip the direction when you report the answer.  
(b) Uncharged means no charge on the plates, so $V_C = q/C = 0$. Nothing pushes back, and current flows like through a wire. Once fully charged, $V_C$ equals the source voltage, nothing drives more charge, and the current stops, like a break.  
(c) The **final charge doesn't change** ($Q = C\varepsilon$). It takes **twice as long**, since $\tau = RC$ doubles.  
(d) **63%** charged ($1 - e^{-1}$). **37%** is left after one $\tau$ of discharging ($e^{-1}$).
