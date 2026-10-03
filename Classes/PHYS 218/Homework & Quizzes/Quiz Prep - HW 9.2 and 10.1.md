# Quiz Prep: HW 9.2 and 10.1
Class: [[PHYS 218]] · Covers current, resistivity, power (HW 9.2) and batteries, series/parallel (HW 10.1) · Full chapter review: [[Exam 2 Review - Ch 9 and 10]]

> [!abstract] The whole quiz in one sentence
> A battery pushes charge around a loop. **Current** is how much flows, **resistance** is how hard the path fights it, and **power** is how fast energy gets burned. Every problem is one of those three ideas.

---

## Intuition

### Current, field, and conductivity (HW 9.2 #1)
- Think of a river. **Current** $I$ is the volume of water passing per second. **Current density** $J = I/A$ is how fast it flows *per unit of river width*.
- The electric field $E$ is the slope pushing the water, and conductivity $\sigma$ is how slippery the riverbed is: $J = \sigma E$.
- A wider wire (bigger $A$) carries more current for the same push: $I = \sigma E A$. That's why a square wire and a round wire with the same field need different areas (πr² vs. s²).
- Higher $\sigma$ means more current for the same $E$. Wire B had about 6.6 times the conductivity of wire A, which is why it carried more current.

### Energy of a charge (HW 9.2 #2)
- A charge $q$ dropping through a voltage $V$ gains energy $qV$, like a ball rolling downhill. For an electron that's $eV$.
- All of that work becomes kinetic energy if it starts from rest: $eV = \tfrac12 mv^2$. The voltage tells you the speed, nothing else.
- Electrons are so light that even 770 V gets them to about 5% of the speed of light.

### Power (HW 9.2 #3, #4)
- $P = IV$: current is how many charges per second, voltage is the energy each one drops. Multiply them for energy per second.
- Combine with Ohm's law to get $P = I^2 R = V^2/R$. Pick the form that uses what you were given.
- The energy has to go somewhere. In the defibrillator problem it heats tissue ($E = mc\,\Delta T$). In the train problem it becomes kinetic energy ($\tfrac12 mv^2$), with only 95% of the input making it there. Efficiency just scales the power.

### Real batteries (HW 10.1 #1, #2)
- A real battery is an ideal source $\varepsilon$ **in series with a small resistor $r$** built into it.
- When current flows, some voltage is lost inside: $V_{\text{terminal}} = \varepsilon - Ir$. More current means a lower terminal voltage.
- With no current ($I = 0$), the terminal voltage equals the emf.
- Total power produced is $I\varepsilon$. Power delivered to the circuit is $IV = I\varepsilon - I^2 r$. The $I^2 r$ part is wasted as heat inside the battery.
- Two measurements $(I, V)$ give you two equations, so you can solve for both $\varepsilon$ and $r$.

### Series vs. parallel (HW 10.1 #3, #4, #5)
- **Series** is one road: the *same current* goes through everything, and the voltages add up. Resistances add: $R = R_1 + R_2 + \dots$
- **Parallel** is multiple roads side by side: the *same voltage* is across each, and the currents add. More paths means *less* total resistance: $1/R = 1/R_1 + 1/R_2 + \dots$
- The parallel total is always **smaller than the smallest** branch. Use this to check your answer.
- The most resistance is everything in series. The least is everything in parallel.
- To solve a network, **reduce from the inside out** to get $R_{eq}$, find $I = V/R_{eq}$, then **work backwards** to find the voltage and current for each piece.

---

## Formula sheet

| Idea | Formula |
|---|---|
| Current | $I = \Delta Q/\Delta t$ |
| Ohm's law | $V = IR$ |
| Conductivity | $J = \sigma E$, so $I = \sigma E A$ |
| Charge through a voltage | $W = qV$, $\ \tfrac12 mv^2 = eV$ |
| Power | $P = IV = I^2R = V^2/R$ |
| Heating | $E = mc\,\Delta T$ |
| Real battery | $V = \varepsilon - Ir$ |
| Series | $R = \sum R_i$ (same $I$) |
| Parallel | $1/R = \sum 1/R_i$ (same $V$) |

Constants: $e = 1.602\times10^{-19}$ C, $m_e = 9.11\times10^{-31}$ kg, $c_{\text{water}} = 4186$ J/(kg·°C)

---

## Practice quiz

*Time yourself: 25 minutes. Calculator OK. Keep extra digits until the final step.*

**1. Wire (HW 9.2 style).** A round wire of diameter 2.0 mm has conductivity $5.0\times10^{7}\ \Omega^{-1}\text{m}^{-1}$ and carries an electric field of 0.040 V/m.
- (a) How much current flows through it?
- ${}I=\sigma EA = 6.28A{}$
- (b) A square wire of side 2.0 mm, same material and same field, carries how much current?
- ${}same,A=4 r^2,I=8A{}$

**2. Electron (HW 9.2 style).** An electron starts from rest and is accelerated through 450 V.
- (a) How much work does the electric force do on it?
- ${}W=\frac{1}{2}mv^2=eV=450e{}$
- (b) How fast is it moving at the end?
- ${}450e=\frac{1}{2}m_{e}v^2\implies v=\sqrt{900\frac{e}{m_{e}}}\to v=1.26*10^7 \frac{m}{s}{}$

**3. Heater (HW 9.2 style).** A 1500 W heater runs on 120 V.
- (a) What current does it draw?
- ${}I=\frac{P}{V}=12.5A{}$
- (b) What is its resistance?
- ${}R=\frac{V}{I}=9.6\Omega{}$
- (c) It runs for 10 minutes and all the energy heats 5.0 kg of water. What is the temperature rise?
- ${}\Delta T=\frac{E}{mc}\implies\Delta T=\frac{Pt}{mc}=43\degree C{}$

**4. Battery (HW 10.1 style).** A battery's terminal voltage is 11.4 V when it supplies 3.0 A and 11.0 V when it supplies 5.0 A. Assume the emf stays constant.
- (a) Find the internal resistance $r$.
- ${}V=\epsilon-Ir\implies \begin{bmatrix}11.4 \\  11\end{bmatrix}=\begin{bmatrix}\epsilon -3r \\  \epsilon -5r\end{bmatrix}\implies r=0.2\Omega{}$
- (b) Find the emf $\varepsilon$.
- ${}11.4=\epsilon-3(0.2)\implies\epsilon=12V{}$
- (c) At 5.0 A, how much power goes to the circuit, and how much is wasted inside the battery?
- ${}P_{L}=I^{2}R=(5A)^{2}(0.2\Omega)=5W{}$ wasted
- ${}P_{C}=IV=(5A)(12V)=55W{}$ to circuit

**5. Network (HW 10.1 style).** A 12 V source is connected to $R_1 = 20\ \Omega$ in series with the parallel pair $R_2 = 30\ \Omega$ and $R_3 = 60\ \Omega$.
- (a) Find the equivalent resistance.
- ${}R_{eq}=R_{1}+\left( \frac{1}{R_{2}}+\frac{1}{R_{3}} \right)^{-1}=R_{1}+\frac{R_{1}R_{2}}{R_{2}+R_{3}}=40\Omega{}$
- (b) Find the total current.
- ${}I=\frac{V}{R}=\frac{12}{40}=0.3A{}$
- (c) Find the voltage across the parallel pair.
- ${}V=12-IR=12-(0.3A)(20\Omega)=6V{}$
- (d) Find the currents through $R_2$ and $R_3$.
- ${}V=\text{const}\implies I\neq \text{const}\implies \begin{bmatrix}I_{2} \\  I_{3} \end{bmatrix}=\begin{bmatrix} \frac{V}{R_{2}} \\  \frac{V}{R_{3}} \end{bmatrix}\implies I_{2}=0.2A,\text{ }I_{3}=0.1A{}$

**6. Ladder (HW 10.1 #4 style).** A 14 V source feeds $R_1 = 10\ \Omega$ in series with a combination. The combination is $R_4 = 50\ \Omega$ in parallel with the series pair $R_2 = 20\ \Omega$ and $R_3 = 30\ \Omega$.
- (a) Find the total current.
- ${}I_{tot}=\frac{V}{R_{1}+\left( \frac{1}{R_{4}}+ \frac{1}{R_{2}+R_{3}}\right)^{-1}}=0.4A{}$
- (b) Find the current through $R_2$.
- ${}I_{2}=\frac{V-I_{tot}R_{1}}{R_{2}+R_{3}}=0.2A{}$
- (c) Find the power dissipated in $R_4$.
- ${}P_{4}=\frac{V^{2}}{R_{4}}=\frac{10^{2}}{50}=2W{}$

**7. Three resistors (HW 10.1 #5 style).** You have 10 Ω, 20 Ω, and 40 Ω resistors.
- (a) What is the largest resistance you can make with all three?
- put them in series ${}R_{s}=70\Omega{}$
- (b) What is the smallest?
- put them in parallel ${}R_{p}=\left( \frac{1}{10}+\frac{1}{20}+\frac{1}{40} \right)^{-1}=5.71\Omega{}$

**8. Quick concepts.**
- (a) Why does a battery's terminal voltage drop as it supplies more current?
- ${}V=\mathcal{E}-Ir\implies V\text{ drops as }I\text{ increases}{}$
- (b) Two resistors in parallel have a total resistance that is smaller than either one. Explain why in one sentence.
- ${}\text{More current flows for the same voltage, }\therefore \text{ R must drop}{}$
- (c) In a series circuit, which resistor has the larger voltage across it, the larger one or the smaller one? Why?
- $${}I_i = I \text{ for all resistors in series} \implies V_i = I R_i \implies \frac{V_a}{V_b} = \frac{R_a}{R_b} \implies \left(R_a > R_b \implies V_a > V_b\right){}$$

---

## Answer key

> [!success]- Problem 1
> $I = \sigma E A$.
> (a) $A = \pi r^2 = \pi(1.0\times10^{-3})^2 = 3.14\times10^{-6}\ \text{m}^2$, so $I = (5.0\times10^7)(0.040)(3.14\times10^{-6}) \approx$ **6.28 A**.
> (b) $A = s^2 = 4.0\times10^{-6}\ \text{m}^2$, so $I = (5.0\times10^7)(0.040)(4.0\times10^{-6}) =$ **8.0 A**. The square has more area, so it carries more current.

> [!success]- Problem 2
> (a) $W = eV = (1.602\times10^{-19})(450) \approx$ **$7.21\times10^{-17}$ J**.
> (b) $v = \sqrt{2W/m} = \sqrt{2(7.209\times10^{-17})/(9.11\times10^{-31})} \approx$ **$1.26\times10^{7}$ m/s**.

> [!success]- Problem 3
> (a) $I = P/V = 1500/120 =$ **12.5 A**.
> (b) $R = V^2/P = 120^2/1500 =$ **9.6 Ω**. This also equals $V/I = 120/12.5$.
> (c) $E = Pt = 1500 \times 600 = 9.0\times10^5$ J, so $\Delta T = E/(mc) = 9.0\times10^5/(5.0 \times 4186) \approx$ **43 °C**.

> [!success]- Problem 4
> Use $V = \varepsilon - Ir$ twice: $11.4 = \varepsilon - 3r$ and $11.0 = \varepsilon - 5r$.
> (a) Subtract: $0.4 = 2r$, so **$r = 0.20\ \Omega$**.
> (b) $\varepsilon = 11.4 + 3(0.20) =$ **12.0 V**. Check with the other equation: $11.0 + 5(0.20) = 12.0$. ✓
> (c) To the circuit: $IV = 5.0 \times 11.0 =$ **55 W**. Wasted: $I^2 r = 25 \times 0.20 =$ **5.0 W**. Total $= I\varepsilon = 60$ W. ✓

> [!success]- Problem 5
> (a) $R_{23} = (1/30 + 1/60)^{-1} = 20\ \Omega$, so $R_{eq} = 20 + 20 =$ **40 Ω**.
> (b) $I = 12/40 =$ **0.30 A**.
> (c) $V_{23} = 12 - (0.30)(20) =$ **6.0 V**.
> (d) $I_2 = 6/30 =$ **0.20 A** and $I_3 = 6/60 =$ **0.10 A**. They add to 0.30 A. ✓

> [!success]- Problem 6
> Branch 2-3 is $20 + 30 = 50\ \Omega$ in series. In parallel with $R_4 = 50\ \Omega$ gives $25\ \Omega$. Then $R_{eq} = 10 + 25 = 35\ \Omega$.
> (a) $I = 14/35 =$ **0.40 A**.
> (b) The voltage across the combination is $14 - (0.40)(10) = 10$ V. The 2-3 branch has $10/50 = 0.20$ A, and the same current flows through $R_2$: **0.20 A**.
> (c) $P_4 = V^2/R = 10^2/50 =$ **2.0 W**.

> [!success]- Problem 7
> (a) All in series: $10 + 20 + 40 =$ **70 Ω**.
> (b) All in parallel: $(1/10 + 1/20 + 1/40)^{-1} \approx$ **5.71 Ω**, which is smaller than the smallest resistor. ✓

> [!success]- Problem 8
> (a) The battery has internal resistance $r$. More current means a bigger voltage drop $Ir$ inside it, so less voltage is left at the terminals: $V = \varepsilon - Ir$.
> (b) Parallel branches give charge more paths to flow through, so the total current for a given voltage goes up, which means the total resistance goes down.
> (c) The **larger** resistor. In series the current is the same, and $V = IR$, so the bigger $R$ gets the bigger share of the voltage.

---

## Checklist before the quiz
- [x] Can I tell series from parallel just by looking at the circuit?
- [x] Do I know what stays the same in each (series: $I$, parallel: $V$)?
- [x] Can I reduce a network from the inside out and then work back?
- [x] Do I know $V = \varepsilon - Ir$ and which sign goes where?
- [x] Can I pick the right power formula from what's given?
- [x] Am I converting mm to m, and keeping the unrounded values until the end?
