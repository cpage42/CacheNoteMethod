# Quiz Prep: HW 10.4 and 10.5
Class: [[PHYS 218]] · Quiz 11, **Fri Oct 9** (Exam 2 review day) · Covers the Week 7 material: DC and RC circuit analysis, meters, hazards and safety (UPV2 10.3–10.6) · Previous: [[Quiz Prep - HW 10.2 and 10.3]] · Full review: [[Exam 2 Review - Ch 8-10]] · Notes: [[10.4 Electrical Measuring Instruments]] · [[RC circuits]] · [[Ch 10 - Direct-Current Circuits]]

> [!info] What this is based on
> Expert TA doesn't show problem titles in Canvas, so the coverage here comes from the course schedule. HW 10.4 was due on the "DC and RC circuit analysis" day and HW 10.5 on the day after, both reading 10.3–10.6. Problems here avoid repeating the ones in the 10.2/10.3 prep. If the real HW turns out to lean on something else, tell me and I'll add it.

> [!abstract] The whole quiz in one sentence
> Meters only work if they barely disturb the circuit (**ammeter tiny $R$ in series, voltmeter huge $R$ in parallel**). A capacitor inside a bigger network starts as a **wire** and ends as a **break**, with $\tau = R_{eq}C$ in between. Household circuits are **parallel at 120 V**, and what hurts you is **current**.

---

## Intuition

### Meters (10.4)
- **Ammeter:** goes **in series**, so its resistance adds to the circuit. It needs to be tiny compared to the circuit's resistance, or it lowers the current it's measuring.
- **Voltmeter:** goes **in parallel**, so it steals some current. It needs to be huge compared to what it's across, or it lowers the voltage it's measuring.
- Both are built from a **galvanometer** ($R_G$, full scale at $I_G$). A small **shunt in parallel** makes an ammeter, and a big **resistor in series** makes a voltmeter.
- **Loading error:** redo the circuit with the meter's resistance included, and compare with the ideal answer.

### Capacitors inside networks (10.5)
- **$t = 0$, uncharged:** the capacitor is a **wire** (zero voltage across it). Whatever is in parallel with it is shorted.
- **$t \to \infty$:** it's a **break** (no current in its branch). A resistor in series with the capacitor then has **no voltage across it**, so $V_C$ equals the voltage across whatever the capacitor branch is in parallel with.
- **Time constant:** $\tau = R_{eq}C$, where $R_{eq}$ is what the capacitor "sees" with batteries replaced by wires. Charging and discharging can have **different** $\tau$'s if a switch changes the circuit.
- **One formula for any RC transient:**
$$V(t) = V_{final} + (V_{start} - V_{final})\,e^{-t/\tau}$$
Charging from 0 and discharging to 0 are just special cases. It also handles "starts at 20 V, heads toward 100 V."

### Energy in RC circuits
- Charging from a battery: the battery supplies $Q\varepsilon = C\varepsilon^2$, the capacitor keeps $\tfrac12C\varepsilon^2$, and the resistor burns the other half, **for any $R$**.
- Discharging: $U = U_0e^{-2t/\tau}$ (energy goes as $V^2$, so it decays twice as fast as $V$). Half the energy is gone at $t = \tfrac{\tau}{2}\ln 2$.

### Hazards and safety (10.6)
- Outlets are **parallel** at 120 V. Every device adds current, and the **breaker** on the hot wire trips when the total gets too big.
- Shock danger is set by **current**: $I = V/R_{body}$. Wet skin can drop $R_{body}$ from ~100 kΩ to ~1 kΩ.
- **Thermal hazard:** an overloaded wire heats at $I^2R$.

---

## Formula sheet
| Idea | Formula |
|---|---|
| Ammeter shunt (parallel) | $R_{sh} = \dfrac{I_GR_G}{I - I_G}$ |
| Voltmeter resistor (series) | $R = \dfrac{V}{I_G} - R_G$ |
| Time constant | $\tau = R_{eq}C$ (batteries → wires) |
| Any RC transient | $V(t) = V_f + (V_0 - V_f)e^{-t/\tau}$ |
| Time between two voltages | $t = \tau\ln\dfrac{V_f - V_1}{V_f - V_2}$ |
| Capacitor energy | $U = \tfrac12CV^2$; discharging $U = U_0e^{-2t/\tau}$ |
| Resistor power | $P = I^2R = V^2/R$ |
| Device current | $I = P/V$ |

---

## Practice quiz
*Aim for 30 minutes. The answer key is at the bottom.*

**1. Building meters (HW 10.4 style).** A galvanometer has $R_G = 25\ \Omega$ and reads full scale at $I_G = 2.0$ mA.
- (a) What shunt makes it a 0–5.0 A ammeter? Series or parallel?
- 
- (b) What resistor makes it a 0–20 V voltmeter? Series or parallel?
- 
- (c) What is the voltmeter's total resistance?
- 

**2. Ammeter loading (HW 10.4 style).** An ideal 6.0 V battery drives a 3.0 Ω resistor. You measure the current with an ammeter that has 0.50 Ω of internal resistance.
- (a) What is the true current, and what does the ammeter read? What is the percent error?
- 
- (b) How small does the ammeter's resistance need to be for the error to be under 1%?
- 

**3. Capacitor in a network (HW 10.4/10.5 style).** $\varepsilon = 18$ V (+ on top), $R_1 = 3.0\ \Omega$, $R_2 = 6.0\ \Omega$, $R_3 = 10\ \Omega$, $C = 4.0$ µF. The capacitor starts uncharged when the battery is connected.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,3) to[battery1, l_=$\varepsilon$] (0,0);
\draw (0,3) to[R, l=$R_1$] (3,3) to[R, l=$R_2$, *-*] (3,0);
\draw (3,3) -- (6,3) to[R, l=$R_3$] (6,1.5) to[C, l=$C$] (6,0) -- (0,0);
\end{circuitikz}
\end{document}
```

- (a) Just after the battery is connected: find the battery current and the current into the capacitor branch.
- 
- (b) A long time later: find the battery current, the voltage across $C$, and its charge.
- 
- (c) Find the charging time constant.
- 
- (d) Now the battery branch is disconnected. Find the discharge time constant and the initial discharge current.
- 

**4. Energy bookkeeping (HW 10.5 style).** A 50 µF capacitor charges from 0 through a 2.0 kΩ resistor from a 20 V battery.
- (a) Find $\tau$ and the energy stored at the end.
- 
- (b) How much energy did the battery supply? How much did the resistor burn?
- 
- (c) Find the resistor's power at $t = 0$ and at $t = \tau$.
- 

**5. Defibrillator (HW 10.5 / hazards style).** A 32 µF capacitor charged to 5.0 kV discharges through a patient's chest, about 50 Ω.
- (a) Find the time constant, the peak current, and the stored energy.
- 
- (b) How long until half the energy has been delivered? What's the current then?
- 

**6. Blinking light (relaxation oscillator).** A 100 V supply charges a 0.50 µF capacitor through 1.0 MΩ. A neon lamp across the capacitor fires at 80 V and dumps the capacitor down to 20 V almost instantly, then the cycle repeats.
- (a) Write $V_C(t)$ for one charging stretch starting at 20 V.
- 
- (b) Find the time between flashes and the flash rate.
- 

**7. Household circuit (HW 10.5 / 10.6 style).** A 120 V kitchen circuit has a 15 A breaker. You run a 1500 W space heater and a 1100 W microwave on it.
- (a) Find each device's current and the total. What happens?
- 
- (b) What is the most power the circuit can supply? What is the heater's resistance?
- 
- (c) Touching 120 V with dry hands ($R_{body} \approx 100$ kΩ) vs. wet hands ($\approx 1.0$ kΩ): find the currents. What does each do to you?
- 

**8. Quick concepts.**
- (a) A voltmeter is accidentally wired in series with a resistor and a battery. What does it read, and roughly what current flows?
- 
- (b) Why do fuses and breakers go on the **hot** wire, not the neutral?
- 
- (c) A bird stands on one high-voltage line. Why is it fine?
- 
- (d) In problem 3, why is there no voltage across $R_3$ at $t \to \infty$?
- 
- (e) Why is the discharge $\tau$ in problem 3 different from the charging $\tau$?
- 

---

## Checklist before the quiz
- [ ] Can I build an ammeter (shunt in parallel) and a voltmeter (series resistor) from a galvanometer?
- [ ] Can I compute a meter's loading error?
- [ ] For a capacitor in a network, can I get the $t = 0$ and $t \to \infty$ values from the wire/break pictures?
- [ ] Can I find $R_{eq}$ for $\tau$, and see when charging and discharging $\tau$ differ?
- [ ] Can I use $V(t) = V_f + (V_0 - V_f)e^{-t/\tau}$ for a start that isn't zero?
- [ ] Do I know the half-and-half energy split and $U = U_0e^{-2t/\tau}$?
- [ ] Can I add device currents on a 120 V circuit and check a breaker?

---

## Answer key

**Problem 1**  
(a) Shunt in **parallel**: $R_{sh} = \dfrac{(2.0\times10^{-3})(25)}{5.0 - 0.0020} \approx$ **0.010 Ω** (10 mΩ).  
(b) Resistor in **series**: $R = \dfrac{20}{2.0\times10^{-3}} - 25 =$ **9975 Ω**.  
(c) $R_{total} = 9975 + 25 =$ **10.0 kΩ** (that's $V/I_G$, which is a quick check).  

**Problem 2**  
(a) True: $I = 6.0/3.0 =$ **2.0 A**. With the meter: $I = 6.0/3.5 =$ **1.71 A**. That's **14% low**.  
(b) Need $\dfrac{6.0}{3.0 + r} \ge 0.99(2.0)$, so $3.0 + r \le 3.03$ and **$r \le 0.030\ \Omega$**. Rule of thumb: the ammeter's resistance has to be about 1% of the circuit's.  

**Problem 3**  
(a) Capacitor = **wire**, so $R_3$ is in parallel with $R_2$: $\dfrac{(6)(10)}{16} = 3.75\ \Omega$. Total $3.0 + 3.75 = 6.75\ \Omega$, so $I = 18/6.75 =$ **2.67 A**. The parallel part has $2.67 \times 3.75 = 10$ V across it, so the capacitor branch gets $10/10 =$ **1.0 A** (and $R_2$ gets 1.67 A).  
(b) Capacitor = **break**, so current only flows through $R_1$ and $R_2$: $I = 18/9.0 =$ **2.0 A**. No current through $R_3$ means no drop across it, so $V_C = V_{R_2} = 2.0 \times 6.0 =$ **12 V** and $Q = CV =$ **48 µC**.  
(c) Battery → wire. From the capacitor's view: $R_3$ in series with ($R_1 \parallel R_2$) $= 10 + 2.0 = 12\ \Omega$. $\tau = (12)(4.0\times10^{-6}) =$ **48 µs**.  
(d) With the battery branch gone, $R_1$ is out. The capacitor discharges through $R_3 + R_2 = 16\ \Omega$: $\tau = (16)(4.0\times10^{-6}) =$ **64 µs**. Initial current $= 12/16 =$ **0.75 A**.  

**Problem 4**  
(a) $\tau = (2000)(50\times10^{-6}) =$ **0.10 s**. $U = \tfrac12(50\times10^{-6})(20)^2 =$ **0.010 J**.  
(b) Battery: $Q\varepsilon = C\varepsilon^2 =$ **0.020 J**. Resistor: the other half, **0.010 J**. That doesn't depend on $R$.  
(c) $t = 0$: $P = \varepsilon^2/R = 400/2000 =$ **0.20 W**. At $t = \tau$ the current is $e^{-1}$ of its start, so the power is $e^{-2}$ of its start: $0.20e^{-2} \approx$ **0.027 W**.  

**Problem 5**  
(a) $\tau = (50)(32\times10^{-6}) =$ **1.6 ms**. $I_0 = 5000/50 =$ **100 A**. $U_0 = \tfrac12(32\times10^{-6})(5000)^2 =$ **400 J**.  
(b) $U = U_0e^{-2t/\tau} = \tfrac12U_0$ gives $t = \tfrac{\tau}{2}\ln 2 \approx$ **0.55 ms**. Then $I = I_0e^{-t/\tau} = 100e^{-\ln 2/2} = 100/\sqrt2 \approx$ **71 A**.  

**Problem 6**  
(a) $\tau = (1.0\times10^6)(0.50\times10^{-6}) = 0.50$ s. With $V_{final} = 100$ V and a 20 V start: **$V_C = 100 - 80e^{-t/0.50}$** (volts, $t$ in seconds).  
(b) Set $V_C = 80$: $80e^{-t/\tau} = 20$, so $t = \tau\ln 4 =$ **0.69 s** between flashes, about **1.4 flashes per second**.  

**Problem 7**  
(a) $I = P/V$: heater $1500/120 =$ **12.5 A**, microwave $1100/120 =$ **9.2 A**. Total **21.7 A**, which is over 15 A, so **the breaker trips**.  
(b) $P_{max} = (120)(15) =$ **1800 W**. Heater: $R = V^2/P = 120^2/1500 =$ **9.6 Ω**.  
(c) Dry: $120/100{,}000 =$ **1.2 mA**, a tingle you can feel. Wet: $120/1000 =$ **120 mA**, enough to stop the heart. The voltage didn't change. The resistance did.  

**Problem 8**  
(a) Its huge resistance dominates the loop, so almost **no current** flows and it reads nearly the **full battery voltage**.  
(b) The breaker has to disconnect the **high-voltage** side. On the neutral, a tripped breaker would leave the device still connected to 120 V.  
(c) Both feet are on the same wire at the same potential, so there's essentially **no potential difference** across the bird and no current through it.  
(d) At steady state no current flows in the capacitor's branch, and $V = IR = 0$ for a resistor with no current.  
(e) $\tau$ depends on the resistance the capacitor sees. Charging, it sees $R_3 + (R_1 \parallel R_2)$. With the battery branch removed, $R_1$ drops out and it sees $R_3 + R_2$.

