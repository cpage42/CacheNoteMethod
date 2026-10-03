# Exam 2 Review: Ch 9 and 10 (Current, Resistance, DC Circuits)
Class: [[PHYS 218]] · Covers all of *University Physics Vol. 2* Ch 9 (9.1–9.6) and Ch 10 (10.1–10.6) · Related: [[Quiz Prep - HW 9.2 and 10.1]] · [[RC circuits]] · [[Flashcards - PHYS 218 Circuits (Ch 9-10)]]

> [!abstract] Both chapters in one paragraph
> An electric field inside a wire pushes free charges along slowly (the **drift velocity**), and the rate charge passes a point is the **current**. How hard a material fights that flow is its **resistivity**, and a shaped piece of it has a **resistance** $R = \rho L/A$. For ohmic materials $V = IR$. Pushing current through resistance burns energy at $P = IV$. A **battery** is an emf $\varepsilon$ with a small internal resistance $r$. Wire batteries and resistors into a network and two conservation laws solve everything: charge is conserved at junctions (**KCL**) and energy is conserved around loops (**KVL**). Add a capacitor and the circuit gets a clock, $\tau = RC$.

> [!tip] How to use this
> 1. Read a section, then cover the formulas and re-derive them. The derivations are short, and they're what the exam tests when it says "show your work."
> 2. Take the **practice exam** timed (75 min). Write your answers on the blank lines.
> 3. Check the **answer key** (click to expand). Redo anything you missed the next day.

---

# Part 1: Current and Resistance (Ch 9)

## 9.1 Electrical current

**Current** is the rate charge flows past a cross-section:
$$I_{ave} = \frac{\Delta Q}{\Delta t}, \qquad I = \frac{dQ}{dt}, \qquad 1\ \text{A} = 1\ \text{C/s}$$

- **Conventional current** points the way *positive* charge would move: out of the battery's $+$ terminal, through the circuit, into the $-$ terminal. In metals the actual carriers are electrons going the *other* way. Every formula uses conventional current, so you can ignore this unless a problem asks about electrons.
- Charge from current: $Q = \int I\,dt$. For a constant current, $Q = It$. The number of electrons is $N = Q/e$.

## 9.2 Model of conduction in metals

Free electrons zip around randomly at ~$10^6$ m/s, colliding constantly. A field adds a tiny average velocity along the wire: the **drift velocity** $v_d$.

> [!example] Derivation: current from drift velocity
> Take a wire of area $A$ with $n$ carriers per m³, each of charge $q$, all drifting at $v_d$.
> 1. In time $dt$ every carrier moves $v_d\,dt$, so all carriers in a cylinder of length $v_d\,dt$ pass through the end. That cylinder has volume $A\,v_d\,dt$.
> 2. Charge that passes: $dQ = (\text{number per volume})(\text{volume})(\text{charge each}) = n\,(A v_d\,dt)\,q$.
> 3. Divide by $dt$:
> $$\boxed{I = nqAv_d}$$

- **Current density** is current per area, a vector pointing along the flow: $\vec J = nq\vec v_d$. For uniform flow $J = I/A$. In general $I = \int \vec J\cdot d\vec A$.
- Copper has $n \approx 8.47\times10^{28}\ \text{m}^{-3}$ (one free electron per atom). That huge $n$ is why $v_d$ is tiny: fractions of a mm per second.
- **Why lights turn on instantly:** the *field* travels down the wire at nearly light speed and pushes every electron at once. Think of a hose that's already full of water. Water comes out the end immediately even though each drop moves slowly.

## 9.3 Resistivity and resistance

The material property is **resistivity** $\rho$ (Ω·m). Its inverse is **conductivity** $\sigma = 1/\rho$. Microscopically,
$$\vec E = \rho \vec J \qquad\Longleftrightarrow\qquad \vec J = \sigma\vec E$$

> [!example] Derivation: $R = \rho L/A$
> A uniform wire of length $L$ and area $A$ with voltage $V$ across it.
> 1. Uniform field: $E = V/L$. Uniform flow: $J = I/A$.
> 2. Plug into $E = \rho J$: $\ \dfrac{V}{L} = \rho\dfrac{I}{A}$, so $V = \left(\dfrac{\rho L}{A}\right) I$.
> 3. The thing multiplying $I$ is the resistance:
> $$\boxed{R = \frac{\rho L}{A}}$$
> Longer wire means more resistance, thicker wire means less. This matches the pipe intuition.

| Material | $\rho$ (Ω·m) at 20 °C | $\alpha$ (1/°C) |
|---|---|---|
| Silver | $1.59\times10^{-8}$ | $0.0038$ |
| Copper | $1.68\times10^{-8}$ | $0.0039$ |
| Aluminum | $2.65\times10^{-8}$ | $0.0039$ |
| Tungsten | $5.6\times10^{-8}$ | $0.0045$ |
| Nichrome | $1.00\times10^{-6}$ | $0.0004$ |
| Carbon | $3.5\times10^{-5}$ | $-0.0005$ |

Materials fall into **conductors** (tiny $\rho$), **semiconductors** (middle) and **insulators** (huge $\rho$, like glass at ~$10^{9}$–$10^{14}$).

**Temperature.** Hotter atoms vibrate more and scatter electrons more, so metals' resistivity rises with temperature. For modest changes:
$$\rho = \rho_0\left[1 + \alpha(T - T_0)\right], \qquad R = R_0\left[1 + \alpha(T - T_0)\right]$$
Semiconductors like carbon have $\alpha < 0$: heating frees up more carriers, so $\rho$ drops.

**When the shape isn't a simple wire,** slice it into thin pieces along the current, use $dR = \rho\,d\ell/A$ for each, and add (integrate) them because the slices are in series.

> [!example] Derivation: resistance of a coaxial cable (radial leakage)
> Current leaks *outward* through the insulation between an inner conductor (radius $a$) and an outer one (radius $b$), length $L$.
> 1. Slice the insulation into thin cylindrical shells of radius $r$ and thickness $dr$. Current crosses each shell, so its "length" is $dr$ and its "area" is the shell's surface $2\pi r L$.
> 2. $dR = \rho\dfrac{dr}{2\pi r L}$
> 3. Shells are in series, so add them:
> $$R = \int_a^b \frac{\rho\,dr}{2\pi L r} = \boxed{\frac{\rho}{2\pi L}\ln\frac{b}{a}}$$
> Same move works for a cone, a spherical shell, or anything else. Ask: which direction does current flow, what's the area it crosses, and how does that area change?

## 9.4 Ohm's law

$$V = IR \qquad (\text{macroscopic}) \qquad\qquad \vec J = \sigma \vec E \qquad (\text{microscopic})$$

- $1\ \Omega = 1$ V/A.
- Ohm's law is not a law of nature. It's an **empirical** rule that holds for **ohmic** materials, where $R$ stays constant as you change $V$. The $I$–$V$ graph is a straight line through the origin with slope $1/R$.
- **Nonohmic** devices break it: a **diode** conducts easily one way and barely at all the other. A light bulb filament's $R$ rises as it heats, so its $I$–$V$ curve bends over.
- In a circuit, $V$ in $V = IR$ is the voltage **drop** across that one resistor, in the direction of current.

## 9.5 Electrical energy and power

> [!example] Derivation: $P = IV$
> Moving charge $dq$ through a potential difference $V$ changes its energy by $dU = V\,dq$. Divide by $dt$:
> $$P = \frac{dU}{dt} = V\frac{dq}{dt} = \boxed{IV}$$
> Then substitute Ohm's law: $P = I(IR) = I^2R$, or $P = V(V/R) = V^2/R$.

- Use $P = I^2R$ when the current is shared (series), and $P = V^2/R$ when the voltage is shared (parallel).
- **Energy:** $E = Pt$ for constant power, $E = \int P\,dt$ otherwise.
- **Kilowatt-hour:** $1\ \text{kWh} = (1000\ \text{W})(3600\ \text{s}) = 3.6\times10^{6}$ J. Cost $=$ kWh $\times$ price per kWh.
- **Power ratings** like "60 W, 120 V" tell you the resistance: $R = V^2/P$. A lower-wattage bulb has a *higher* resistance.
- **Transmission lines:** a plant sends power $P = IV$ over wires of resistance $R_{line}$. The loss is $I^2R_{line} = (P/V)^2R_{line}$. Raising $V$ by 10× cuts the current by 10× and the loss by 100×. That's why long-distance lines run at hundreds of kV.

## 9.6 Superconductors

- Below a **critical temperature** $T_c$, some materials have **exactly zero** resistance. A current set up in a superconducting loop keeps flowing for years with no battery.
- They also expel magnetic fields from inside (the **Meissner effect**), which is why a magnet levitates over one.
- First seen in mercury (Onnes, 1911, $T_c \approx 4.2$ K). Ceramic "high-temperature" superconductors (1986 and after) work above 77 K, so cheap liquid nitrogen can cool them.
- Good conductors like copper, silver and gold do **not** become superconductors.
- Uses: MRI magnets, maglev trains, SQUIDs (super-sensitive magnetic field sensors).

---

# Part 2: Direct-Current Circuits (Ch 10)

## 10.1 Electromotive force and real batteries

**Emf** $\varepsilon$ is the work per charge a source does to push charge from its $-$ terminal to its $+$ terminal (units: volts). It isn't a force, despite the name. A real battery behaves like an **ideal emf in series with a small internal resistance $r$**.

> [!example] Derivation: terminal voltage and current
> Battery $(\varepsilon, r)$ connected to a load $R$. Walk around the loop with KVL:
> $$\varepsilon - Ir - IR = 0 \quad\Longrightarrow\quad \boxed{I = \frac{\varepsilon}{R + r}}$$
> The voltage across the terminals (which is also across the load) is what's left after the internal drop:
> $$\boxed{V_{terminal} = \varepsilon - Ir} = IR$$

- No current ($I = 0$, open circuit) means $V_{terminal} = \varepsilon$. A voltmeter barely draws current, so it reads $\approx \varepsilon$.
- A **short** across the battery ($R = 0$) gives the biggest possible current, $I = \varepsilon/r$, and all the power heats the battery.
- **Charging** a battery means forcing current *into* its $+$ terminal. Then $V_{terminal} = \varepsilon + Ir$: the charger has to beat both the emf and the internal resistance.
- **Power bookkeeping:** produced $I\varepsilon$ $=$ delivered to the load $IV_{terminal}$ $+$ wasted inside $I^2r$.
- **Batteries in series** (+ to −): emfs add and internal resistances add. **Identical batteries in parallel:** same emf, but $r$ is split, so they can supply more current.

> [!example] Derivation: maximum power to the load
> Power to the load: $P = I^2 R = \dfrac{\varepsilon^2 R}{(R + r)^2}$.
> Set $dP/dR = 0$:
> $$\frac{dP}{dR} = \varepsilon^2\,\frac{(R+r)^2 - 2R(R+r)}{(R+r)^4} = \varepsilon^2\,\frac{r - R}{(R+r)^3} = 0 \quad\Longrightarrow\quad \boxed{R = r}$$
> Then $P_{max} = \dfrac{\varepsilon^2}{4r}$. At this point the battery wastes exactly as much as it delivers (50% efficiency).

## 10.2 Resistors in series and parallel

> [!example] Derivation: series
> One path, so the **same current** $I$ goes through every resistor. KVL around the loop: $V = IR_1 + IR_2 + IR_3 = I(R_1 + R_2 + R_3)$. Comparing with $V = IR_s$:
> $$\boxed{R_s = R_1 + R_2 + R_3 + \cdots}$$

> [!example] Derivation: parallel
> Each resistor connects the same two nodes, so they all have the **same voltage** $V$. KCL at the node: $I = \dfrac{V}{R_1} + \dfrac{V}{R_2} + \dfrac{V}{R_3}$. Comparing with $I = V/R_p$:
> $$\boxed{\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \cdots}$$
> For two: $R_p = \dfrac{R_1R_2}{R_1 + R_2}$. For $N$ identical resistors: $R_p = R/N$.

- **Series:** total is bigger than the biggest. **Parallel:** total is smaller than the smallest.
- **Voltage divider** (two in series across $V$): $V_1 = V\dfrac{R_1}{R_1 + R_2}$. The bigger resistor gets more voltage.
- **Current divider** (two in parallel sharing $I$): $I_1 = I\dfrac{R_2}{R_1 + R_2}$. Notice the *other* resistor on top: the smaller resistor gets more current.
- **How to tell them apart:** two elements are in series if *all* current through one must go through the other (no junction between them). They're in parallel if both ends connect to the same two nodes.
- **Mixed networks:** reduce from the inside out to $R_{eq}$, find $I = V/R_{eq}$, then expand back out. Series pieces share $I$, parallel pieces share $V$.

## 10.3 Kirchhoff's rules

Use these when a circuit **can't** be reduced with series and parallel (usually because there's more than one battery in different branches).

**Junction rule (KCL):** $\sum I_{in} = \sum I_{out}$ at any junction. This is **conservation of charge**: charge can't pile up at a point in a steady circuit.

**Loop rule (KVL):** $\sum \Delta V = 0$ around any closed loop. This is **conservation of energy**: the electrostatic field is conservative ($\oint \vec E\cdot d\vec\ell = 0$), so a charge that returns to its starting point has the same potential it started with.

| Crossing… | in the direction you're walking | $\Delta V$ |
|---|---|---|
| a resistor | *with* your assumed current | $-IR$ |
| a resistor | *against* your assumed current | $+IR$ |
| a battery | from $-$ to $+$ | $+\varepsilon$ |
| a battery | from $+$ to $-$ | $-\varepsilon$ |

> [!example] The recipe
> 1. **Label** a current in every branch, with a guessed direction. (A branch is a path between two junctions. Everything in a branch shares one current.)
> 2. **KCL:** with $n$ junctions, write $n - 1$ junction equations.
> 3. **KVL:** write loop equations until you have as many equations as unknown currents. Each new loop must include at least one branch you haven't used.
> 4. **Solve.** Substitution works, and so does a matrix (Cramer's rule or your calculator's `rref`).
> 5. **Interpret:** a **negative** current just means the real current runs opposite your arrow. Keep the sign while you finish the problem.
> 6. **Check** with a loop you didn't use, or a power balance: total power from sources $=$ total power into resistors (and into batteries being charged).

## 10.4 Electrical measuring instruments

- An **ammeter** measures the current *through* a branch, so it goes **in series**. It must have a **very small** resistance so it doesn't change the current it measures.
- A **voltmeter** measures the voltage *across* an element, so it goes **in parallel**. It must have a **very large** resistance so it barely draws current.
- Both are built from a **galvanometer**: a coil whose needle reaches full scale at a small current $I_G$, with coil resistance $R_G$.

> [!example] Derivation: building meters from a galvanometer
> **Ammeter (range $0$ to $I$):** put a small **shunt** $R_{sh}$ in **parallel** with the galvanometer so most of the current bypasses it. At full scale the galvanometer carries $I_G$ and the shunt carries $I - I_G$, with the same voltage across both:
> $$I_G R_G = (I - I_G)R_{sh} \quad\Longrightarrow\quad \boxed{R_{sh} = \frac{I_G R_G}{I - I_G}}$$
> **Voltmeter (range $0$ to $V$):** put a big resistor $R$ in **series** so that full-scale voltage drives exactly $I_G$:
> $$V = I_G(R_G + R) \quad\Longrightarrow\quad \boxed{R = \frac{V}{I_G} - R_G}$$

- **Loading:** a real voltmeter in parallel lowers the resistance of the piece it's measuring, so it reads a bit low. It only matters when the voltmeter's resistance isn't much bigger than the resistor's.
- **Mistake to avoid:** an ammeter connected in parallel across a battery is nearly a short. Huge current, blown fuse.

## 10.5 RC circuits

Full derivations, graphs and the energy bookkeeping are in [[RC circuits]]. Here's the version to memorize.

> [!example] Derivation sketch: charging
> KVL with $I = dq/dt$: $\ \varepsilon - R\dfrac{dq}{dt} - \dfrac{q}{C} = 0$.
> Separate: $\dfrac{dq}{C\varepsilon - q} = \dfrac{dt}{RC}$. Integrate from $q = 0$ at $t = 0$: $\ -\ln\!\left(\dfrac{C\varepsilon - q}{C\varepsilon}\right) = \dfrac{t}{RC}$. Solve:
> $$q(t) = C\varepsilon\left(1 - e^{-t/\tau}\right), \qquad I(t) = \frac{\varepsilon}{R}e^{-t/\tau}, \qquad \tau = RC$$

> [!example] Derivation sketch: discharging
> No battery: $\ -R\dfrac{dq}{dt} - \dfrac{q}{C} = 0$, so $\dfrac{dq}{q} = -\dfrac{dt}{RC}$ and
> $$q(t) = Q_0e^{-t/\tau}, \qquad I(t) = -\frac{Q_0}{RC}e^{-t/\tau} \quad (\text{minus: current reverses})$$

| | $t = 0$ | $t = \tau$ | $t \to \infty$ |
|---|---|---|---|
| Charging $q$ | $0$ | $63\%$ of $C\varepsilon$ | $C\varepsilon$ |
| Charging $I$ | $\varepsilon/R$ (cap acts like a **wire**) | $37\%$ of $\varepsilon/R$ | $0$ (cap acts like a **break**) |
| Discharging $q$ | $Q_0$ | $37\%$ of $Q_0$ | $0$ |

- **Time to reach a fraction.** Charging to fraction $f$ of the final value: $1 - e^{-t/\tau} = f$, so $t = -\tau\ln(1 - f)$. Halfway (charging) or half left (discharging): $t = \tau\ln 2 \approx 0.693\tau$. "Fully charged" in practice: about $5\tau$ (99.3%).
- **Set $\tau$ equal to something vs. plug in $t$.** If the problem says the circuit must *respond on a time scale* ("the flash must last about as long as…", "time constant of 2 ms"), set $\tau = RC$ equal to that time and solve for $R$ or $C$. If it gives a specific time and asks for $q$, $I$ or $V$ at that moment, plug $t$ into the exponential.
- **Circuits with extra resistors.** Use the $t = 0$ (wire) and $t \to \infty$ (break) pictures to get starting and final values with plain resistor rules. The time constant is $\tau = R_{eq}C$, where $R_{eq}$ is the resistance the capacitor "sees" with the battery replaced by a wire.
- **Energy:** a capacitor charged to $V$ stores $U = \tfrac12 CV^2$. While charging from a battery, the battery supplies $C\varepsilon^2$: half is stored, half is burned in $R$, no matter what $R$ is.
- **Application:** in a **relaxation oscillator** (blinking light, pacemaker), a capacitor charges until a lamp or switch fires at a set voltage, dumps its charge, and starts over. The period is set by $RC$.

## 10.6 Household wiring and electrical safety

- US outlets are **AC at 120 V** (big appliances use 240 V). Every outlet and light is wired **in parallel**, so each gets the full voltage and runs independently. In series, one switch would turn everything off, and each device would get only part of the voltage.
- Three wires: **hot** (live, black), **neutral** (white, near 0 V), and **ground** (green or bare). Ground connects metal cases to the earth, so if the hot wire touches the case, the current goes to ground and trips the breaker instead of going through you.
- **Fuses** and **circuit breakers** go in series on the hot wire. They open when the current gets too big, so wires don't overheat. **Thermal hazard:** $P = I^2R$ heating in overloaded or shorted wires starts fires.
- **Shock hazard:** what hurts is the current through the body, especially across the heart. About 1 mA can be felt, about 10–20 mA causes muscles to lock up (can't let go), and about 100 mA can stop the heart (fibrillation). Wet skin has a far lower resistance, so the same voltage pushes much more current.
- A **GFCI** (ground fault circuit interrupter) compares the current in hot and neutral. If they differ by even a few mA, some current is leaking (maybe through a person), and it cuts power in milliseconds. Required near water.
- **Polarized plugs** (one wide prong) make sure the switch and fuse sit on the hot side.

---

# Formula sheet

| Idea | Formula |
|---|---|
| Current | $I = \dfrac{dQ}{dt}$, $\ Q = \int I\,dt$ |
| Drift velocity | $I = nqAv_d$, $\ \vec J = nq\vec v_d$ |
| Current density | $J = I/A$, $\ I = \int \vec J\cdot d\vec A$ |
| Microscopic Ohm's law | $\vec J = \sigma\vec E$, $\ \vec E = \rho\vec J$, $\ \sigma = 1/\rho$ |
| Resistance | $R = \dfrac{\rho L}{A}$, $\ R = \displaystyle\int \frac{\rho\,d\ell}{A(\ell)}$ |
| Temperature | $\rho = \rho_0[1 + \alpha\Delta T]$, $\ R = R_0[1 + \alpha\Delta T]$ |
| Ohm's law | $V = IR$ |
| Power | $P = IV = I^2R = V^2/R$ |
| Energy | $E = Pt$, $\ 1\ \text{kWh} = 3.6\times10^6$ J |
| Real battery | $I = \dfrac{\varepsilon}{R + r}$, $\ V_{terminal} = \varepsilon - Ir$ (charging: $\varepsilon + Ir$) |
| Max power to load | $R = r$, $\ P_{max} = \dfrac{\varepsilon^2}{4r}$ |
| Series | $R_s = \sum R_i$ (same $I$) |
| Parallel | $\dfrac{1}{R_p} = \sum \dfrac{1}{R_i}$ (same $V$) |
| Dividers | $V_1 = V\dfrac{R_1}{R_1 + R_2}$, $\ I_1 = I\dfrac{R_2}{R_1 + R_2}$ |
| Kirchhoff | $\sum I_{in} = \sum I_{out}$, $\ \sum_{loop}\Delta V = 0$ |
| Ammeter shunt | $R_{sh} = \dfrac{I_GR_G}{I - I_G}$ |
| Voltmeter series R | $R = \dfrac{V}{I_G} - R_G$ |
| RC charging | $q = C\varepsilon(1 - e^{-t/\tau})$, $\ I = \dfrac{\varepsilon}{R}e^{-t/\tau}$ |
| RC discharging | $q = Q_0e^{-t/\tau}$, $\ I = -\dfrac{Q_0}{RC}e^{-t/\tau}$ |
| Time constant | $\tau = RC$, $\ t_{1/2} = \tau\ln 2$ |
| Capacitor energy | $U = \tfrac12 CV^2 = \dfrac{Q^2}{2C}$ |

Constants: $e = 1.602\times10^{-19}$ C, $m_e = 9.11\times10^{-31}$ kg, $n_{Cu} = 8.47\times10^{28}\ \text{m}^{-3}$, $\rho_{Cu} = 1.68\times10^{-8}\ \Omega\cdot\text{m}$, $\alpha_{Cu} = 3.9\times10^{-3}\ /°\text{C}$

> [!warning] Mistakes that cost points
> - Diameter vs. radius in $A = \pi r^2$, and mm → m (mm² → m² is $10^{-6}$).
> - Using $V = \varepsilon$ when current is flowing. With current, the terminal voltage is $\varepsilon - Ir$.
> - Using the total voltage with one resistor's $R$ in $P = V^2/R$. The $V$ and $R$ have to belong to the same element.
> - Flipping a KVL sign. Decide your walking direction *before* writing terms, and follow the table.
> - Throwing out a negative current halfway through. Keep the sign until the end.
> - Using $q = C\varepsilon$ at every time in an RC circuit. That's only the final charge.
> - Mixing up the current divider: the **other** resistor goes on top.

---

# Practice exam

*Time yourself: 75 minutes. Calculator OK. Keep extra digits until the final step. Use the constants above.*

**1. Drift velocity (9.2).** A copper wire has diameter 1.63 mm and carries a steady 2.00 A.
- (a) Find the current density.
- 
- (b) Find the drift speed of the electrons.
- 
- (c) How long does an electron take to drift 1.00 m? Why does a lamp still turn on instantly?
- 

**2. Resistance and temperature (9.3).**
- (a) A nichrome wire is 2.0 m long with diameter 0.50 mm. Find its resistance at 20 °C.
- 
- (b) A copper coil has $R = 5.00\ \Omega$ at 20 °C. What is its resistance at 80 °C?
- 
- (c) In one sentence, why does a metal's resistance go up when it gets hot?
- 

**3. Derivation: coaxial leakage (9.3).** A coaxial cable of length 10 m has inner radius $a = 0.50$ mm and outer radius $b = 2.0$ mm. The insulation between them has resistivity $1.0\times10^{10}\ \Omega\cdot$m.
- (a) Derive the radial resistance $R = \dfrac{\rho}{2\pi L}\ln\dfrac{b}{a}$. Say what your slices are.
- 
- (b) Evaluate it. How much current leaks through the insulation at 100 V?
- 

**4. Energy and transmission (9.5).**
- (a) A 1200 W hair dryer runs 15 min a day for 30 days at \$0.12 per kWh. How much energy (kWh and J) and what does it cost?
- 
- (b) A plant sends 100 kW through lines with total resistance 0.50 Ω. Find the power lost if it transmits at 1000 V, then at 10 kV.
- 

**5. Real battery (10.1).** A battery with $\varepsilon = 9.0$ V and $r = 0.50\ \Omega$ is connected to a 4.0 Ω load.
- (a) Find the current and the terminal voltage.
- 
- (b) Find the power produced by the emf, delivered to the load, and wasted inside the battery. Check that they balance.
- 
- (c) What load resistance gets the most power, and how much is it? (Derive the condition.)
- 

**6. Charging a battery (10.1).** A 12.0 V car battery with internal resistance 0.020 Ω is being charged at 10.0 A.
- (a) What is its terminal voltage?
- 
- (b) How much power goes into chemical energy, and how much becomes heat?
- 

**7. Network (10.2).** A 24 V ideal battery is connected to $R_1 = 6\ \Omega$ in series with a combination: $R_2 = 12\ \Omega$ in parallel with the series pair $R_3 = 4\ \Omega$ and $R_4 = 8\ \Omega$.
- (a) Find $R_{eq}$ and the total current.
- 
- (b) Find the current through $R_2$ and the voltage across $R_3$.
- 
- (c) Find the power dissipated in $R_4$.
- 

**8. Two bulbs in series (9.5, 10.2).** A "60 W, 120 V" bulb and a "100 W, 120 V" bulb are connected in series across 120 V. Treat their resistances as constant.
- (a) Find each bulb's resistance.
- 
- (b) Find the power each one actually uses. Which glows brighter? Is that surprising?
- 

**9. Kirchhoff (10.3).** In the circuit below, $\varepsilon_1 = 12$ V, $\varepsilon_2 = 6.0$ V, $R_1 = 4.0\ \Omega$, $R_2 = 2.0\ \Omega$ and $R_3 = 6.0\ \Omega$. Both batteries have their $+$ terminal at the top. Take $I_1$ upward through the left branch, $I_3$ downward through the middle branch, and $I_2$ downward through the right branch.

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

- (a) Write the junction equation and two loop equations.
- 
- (b) Solve for $I_1$, $I_2$, $I_3$. Is $\varepsilon_2$ being charged or discharged?
- 
- (c) Check your answer with a power balance.
- 

**10. Building meters (10.4).** A galvanometer has coil resistance 50 Ω and reads full scale at 1.0 mA.
- (a) What shunt turns it into a 0–10 A ammeter? Series or parallel?
- 
- (b) What resistor turns it into a 0–10 V voltmeter? Series or parallel?
- 

**11. Meter loading (10.4).** Two 10 kΩ resistors in series sit across an ideal 10 V battery.
- (a) What is the true voltage across one of them?
- 
- (b) What does a voltmeter with 10 kΩ internal resistance read across it? With 1.0 MΩ?
- 

**12. RC charging (10.5).** A 5.0 µF capacitor charges through a 2.0 kΩ resistor from a 10 V battery, starting uncharged.
- (a) Find $\tau$ and the initial current.
- 
- (b) How long until the capacitor's voltage reaches 5.0 V? (Answer with a $\ln$, then a number.)
- 
- (c) How long to reach 99% of full charge? How much energy is stored at the end?
- 

**13. RC discharging (10.5).** A 100 µF capacitor charged to 50 V discharges through a 20 kΩ resistor.
- (a) Find the time constant and the initial current.
- 
- (b) How long until the voltage drops to 10 V?
- 
- (c) How much energy has the resistor dissipated by then?
- 

**14. RC with two resistors (10.5).** The switch $S$ is closed at $t = 0$ with the capacitor uncharged. $\varepsilon = 12$ V, $R_1 = 4.0$ kΩ, $R_2 = 8.0$ kΩ, $C = 10$ µF.

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

- (a) Find the current through the battery just after the switch closes.
- 
- (b) Find the current through the battery a long time later, and the final charge on the capacitor.
- 
- (c) Find the time constant for the charging. Then the switch is opened again: what's the time constant for the discharge?
- 

**15. Challenge: tapered resistor (9.3).** A copper rod of length $L$ is a truncated cone: its radius grows linearly from $a$ at one end to $b$ at the other.
- (a) Show that its resistance is $R = \dfrac{\rho L}{\pi ab}$.
- 
- (b) Check that your answer reduces to the plain wire formula when $a = b$. Evaluate it for $L = 5.0$ cm, $a = 1.0$ mm, $b = 2.0$ mm.
- 

**16. Quick concepts.**
- (a) An ammeter is accidentally connected in parallel across a resistor. What happens, and why?
- 
- (b) Which conservation law is behind each of Kirchhoff's rules?
- 
- (c) Why are household outlets wired in parallel instead of series?
- 
- (d) What does a GFCI detect, and why does that protect you?
- 
- (e) Is a diode ohmic? How would its $I$–$V$ graph show it?
- 

---

# Answer key

> [!success]- Problem 1
> $A = \pi r^2 = \pi(0.815\times10^{-3})^2 = 2.087\times10^{-6}\ \text{m}^2$.
> (a) $J = I/A = 2.00/2.087\times10^{-6} \approx$ **$9.58\times10^{5}$ A/m²**.
> (b) $v_d = \dfrac{I}{nqA} = \dfrac{2.00}{(8.47\times10^{28})(1.602\times10^{-19})(2.087\times10^{-6})} \approx$ **$7.06\times10^{-5}$ m/s** (about 0.07 mm/s).
> (c) $t = 1.00/7.06\times10^{-5} \approx 1.42\times10^4$ s, about **3.9 hours**. The lamp lights instantly because the *field* travels down the wire at nearly the speed of light and starts all the electrons, including the ones already in the filament, moving at once.

> [!success]- Problem 2
> (a) $A = \pi(0.25\times10^{-3})^2 = 1.963\times10^{-7}\ \text{m}^2$, so $R = \dfrac{(1.00\times10^{-6})(2.0)}{1.963\times10^{-7}} \approx$ **10.2 Ω**.
> (b) $R = 5.00[1 + 0.0039(60)] =$ **6.17 Ω**.
> (c) Hotter atoms vibrate harder, so drifting electrons collide with them more often, which makes it harder to push current through.

> [!success]- Problem 3
> (a) Current flows **radially**, from the inner conductor to the outer one. Slice the insulation into cylindrical shells of radius $r$, thickness $dr$ and length $L$. Current crosses each shell's surface (area $2\pi rL$) and travels its thickness $dr$, so $dR = \rho\,dr/(2\pi rL)$. The shells are in series, so integrate from $a$ to $b$: $R = \dfrac{\rho}{2\pi L}\displaystyle\int_a^b\frac{dr}{r} = \dfrac{\rho}{2\pi L}\ln\dfrac{b}{a}$.
> (b) $R = \dfrac{1.0\times10^{10}}{2\pi(10)}\ln 4 \approx$ **$2.2\times10^{8}\ \Omega$**. Leakage: $I = 100/2.2\times10^8 \approx$ **$4.5\times10^{-7}$ A** (0.45 µA). Tiny, which is the point of insulation.

> [!success]- Problem 4
> (a) $E = (1.2\ \text{kW})(0.25\ \text{h/day})(30\ \text{days}) =$ **9.0 kWh** $= 9.0 \times 3.6\times10^6 =$ **$3.24\times10^{7}$ J**. Cost: $9.0 \times 0.12 =$ **\$1.08**.
> (b) At 1000 V: $I = P/V = 100$ A, loss $= I^2R = 100^2(0.50) =$ **5000 W** (5% of the power). At 10 kV: $I = 10$ A, loss $= 10^2(0.50) =$ **50 W** (0.05%). Ten times the voltage, one hundredth the loss.

> [!success]- Problem 5
> (a) $I = \dfrac{\varepsilon}{R + r} = \dfrac{9.0}{4.5} =$ **2.0 A**. $V_{terminal} = 9.0 - 2.0(0.50) =$ **8.0 V** (also $= IR = 2.0 \times 4.0$ ✓).
> (b) Produced: $I\varepsilon = 18$ W. To the load: $I^2R = 16$ W. Wasted: $I^2r = 2.0$ W. $16 + 2 = 18$ ✓.
> (c) $P = \dfrac{\varepsilon^2R}{(R+r)^2}$. Setting $dP/dR = 0$ gives $\varepsilon^2\dfrac{r - R}{(R+r)^3} = 0$, so **$R = r = 0.50\ \Omega$**. Then $P_{max} = \dfrac{\varepsilon^2}{4r} = \dfrac{81}{2.0} =$ **40.5 W**.

> [!success]- Problem 6
> (a) Charging forces current *into* the $+$ terminal, so $V = \varepsilon + Ir = 12.0 + 10.0(0.020) =$ **12.2 V**.
> (b) Into chemical energy: $I\varepsilon = 120$ W. Heat: $I^2r =$ **2.0 W**. The charger supplies $IV = 122$ W ✓.

> [!success]- Problem 7
> (a) $R_3 + R_4 = 12\ \Omega$, in parallel with $R_2 = 12\ \Omega$ gives $6\ \Omega$. $R_{eq} = 6 + 6 =$ **12 Ω**, and $I = 24/12 =$ **2.0 A**.
> (b) Voltage across the parallel part: $2.0 \times 6 = 12$ V. $I_2 = 12/12 =$ **1.0 A**. The $R_3R_4$ branch also carries $12/12 = 1.0$ A, so $V_3 = 1.0 \times 4 =$ **4.0 V**.
> (c) $P_4 = I^2R_4 = 1.0^2 \times 8 =$ **8.0 W**.

> [!success]- Problem 8
> (a) $R = V^2/P$: $R_{60} = 120^2/60 =$ **240 Ω**, $R_{100} = 120^2/100 =$ **144 Ω**.
> (b) In series: $I = 120/(240 + 144) = 0.3125$ A. $P_{60} = I^2R_{60} \approx$ **23.4 W**, $P_{100} = I^2R_{100} \approx$ **14.1 W**. The **60 W** bulb glows brighter. In series the current is shared, so power goes as $I^2R$, and the bulb with the bigger resistance (the lower-rated one) wins. The ratings only describe what happens at the full 120 V.

> [!success]- Problem 9
> (a) Junction at the top: $I_1 = I_2 + I_3$.
> Left loop, walking up through $\varepsilon_1$, right through $R_1$, down through $R_3$: $\ +12 - 4I_1 - 6I_3 = 0$.
> Right loop, walking from the top junction down the right branch, along the bottom, then up through $R_3$: $\ -2I_2 - 6 + 6I_3 = 0$. (Through $\varepsilon_2$ from $+$ to $-$ is $-6$. Going up through $R_3$ is against $I_3$, so $+6I_3$.)
> (b) From the right loop, $I_2 = 3I_3 - 3$. Then $I_1 = 4I_3 - 3$. Into the left loop: $12 - 4(4I_3 - 3) - 6I_3 = 0$, so $22I_3 = 24$ and **$I_3 = 12/11 \approx 1.09$ A**. Then **$I_1 = 15/11 \approx 1.36$ A** and **$I_2 = 3/11 \approx 0.27$ A**.
> $I_2$ is positive and flows *down* through $\varepsilon_2$, into its $+$ terminal, so **$\varepsilon_2$ is being charged**.
> (c) $\varepsilon_1$ supplies $12 \times 15/11 = 16.36$ W. $\varepsilon_2$ absorbs $6 \times 3/11 = 1.64$ W. Resistors: $4(15/11)^2 + 2(3/11)^2 + 6(12/11)^2 = 14.73$ W. $1.64 + 14.73 = 16.37$ ✓.

> [!success]- Problem 10
> (a) Shunt in **parallel**: $R_{sh} = \dfrac{I_GR_G}{I - I_G} = \dfrac{(1.0\times10^{-3})(50)}{10 - 0.001} \approx$ **$5.0\times10^{-3}\ \Omega$** (5.0 mΩ).
> (b) Resistor in **series**: $R = \dfrac{V}{I_G} - R_G = \dfrac{10}{1.0\times10^{-3}} - 50 =$ **9950 Ω**.

> [!success]- Problem 11
> (a) Equal resistors split the voltage evenly: **5.0 V**.
> (b) The 10 kΩ meter in parallel with 10 kΩ makes 5 kΩ. The divider becomes 10 kΩ and 5 kΩ, so the meter reads $10 \times \dfrac{5}{15} \approx$ **3.3 V** (way off). With 1.0 MΩ: $10\,\text{k} \parallel 1\,\text{M} \approx 9.90$ kΩ, reading $\approx$ **4.98 V** (close). A voltmeter needs a resistance much larger than what it measures.

> [!success]- Problem 12
> (a) $\tau = RC = (2.0\times10^3)(5.0\times10^{-6}) =$ **0.010 s** (10 ms). $I_0 = \varepsilon/R = 10/2000 =$ **5.0 mA**.
> (b) $V_C = \varepsilon(1 - e^{-t/\tau})$. Setting $5 = 10(1 - e^{-t/\tau})$ gives $e^{-t/\tau} = \tfrac12$, so $t = \tau\ln 2 =$ **6.9 ms**.
> (c) $1 - e^{-t/\tau} = 0.99$ gives $t = \tau\ln 100 \approx$ **46 ms** (about $4.6\tau$). Stored energy: $U = \tfrac12 CV^2 = \tfrac12(5.0\times10^{-6})(10)^2 =$ **$2.5\times10^{-4}$ J**.

> [!success]- Problem 13
> (a) $\tau = (20\times10^3)(100\times10^{-6}) =$ **2.0 s**. $I_0 = V_0/R = 50/20000 =$ **2.5 mA**.
> (b) $V = V_0e^{-t/\tau}$, so $t = \tau\ln(V_0/V) = 2.0\ln 5 \approx$ **3.2 s**.
> (c) $U_0 = \tfrac12(100\times10^{-6})(50)^2 = 0.125$ J and $U = \tfrac12(100\times10^{-6})(10)^2 = 0.005$ J. The resistor dissipated the difference: **0.12 J**.

> [!success]- Problem 14
> (a) At $t = 0$ the uncharged capacitor acts like a **wire**, which shorts out $R_2$. All current goes through $R_1$ and the capacitor: $I_0 = \varepsilon/R_1 = 12/4000 =$ **3.0 mA**.
> (b) As $t \to \infty$ the capacitor acts like a **break**. Current flows through $R_1$ and $R_2$ in series: $I = 12/12000 =$ **1.0 mA**. The capacitor has the same voltage as $R_2$: $V_C = (1.0\ \text{mA})(8.0\ \text{k}\Omega) = 8.0$ V, so $Q = CV_C =$ **80 µC**.
> (c) Replace the battery with a wire. The capacitor then sees $R_1$ and $R_2$ in parallel: $R_{eq} = \dfrac{4 \cdot 8}{4 + 8} = 2.67$ kΩ, so $\tau = R_{eq}C \approx$ **26.7 ms**. With the switch opened, the capacitor discharges through $R_2$ alone: $\tau = R_2C =$ **80 ms**.

> [!success]- Problem 15
> (a) Slice the rod into thin disks of thickness $dx$ at distance $x$ from the small end. The radius is $r(x) = a + (b - a)\dfrac{x}{L}$, so $dR = \dfrac{\rho\,dx}{\pi r^2}$. Change variables with $dr = \dfrac{b - a}{L}dx$:
> $$R = \frac{\rho L}{\pi(b - a)}\int_a^b\frac{dr}{r^2} = \frac{\rho L}{\pi(b - a)}\left(\frac{1}{a} - \frac{1}{b}\right) = \frac{\rho L}{\pi(b - a)}\cdot\frac{b - a}{ab} = \frac{\rho L}{\pi ab}$$
> (b) With $a = b$: $R = \rho L/(\pi a^2) = \rho L/A$ ✓. Numbers: $R = \dfrac{(1.68\times10^{-8})(0.050)}{\pi(1.0\times10^{-3})(2.0\times10^{-3})} \approx$ **$1.3\times10^{-4}\ \Omega$**.

> [!success]- Problem 16
> (a) An ammeter has almost no resistance, so in parallel it **shorts out** the resistor. Nearly all the current goes through the meter instead. That changes the circuit, the reading is meaningless, and a big enough current can blow the meter's fuse.
> (b) Junction rule: **conservation of charge**. Loop rule: **conservation of energy** (the electrostatic field is conservative).
> (c) In parallel every device gets the full 120 V and can be switched on and off independently. In series they'd share the voltage, and one switched-off or burnt-out device would cut power to everything.
> (d) It detects a **difference between the hot and neutral currents**. Any difference means current is leaking somewhere else, possibly through a person to ground, so it shuts off the circuit within milliseconds, before a dangerous current can last.
> (e) **No.** An ohmic device has a straight-line $I$–$V$ graph through the origin. A diode's graph is nearly flat for reverse voltage and shoots up steeply once the forward voltage passes its turn-on value.

---

## Checklist before the exam
- [ ] Can I derive $I = nqAv_d$ and $R = \rho L/A$ from scratch?
- [ ] Can I set up a resistance integral for a non-uniform shape (coax, cone)?
- [ ] Do I know when to use $I^2R$ vs. $V^2/R$, and that ratings fix $R = V^2/P$?
- [ ] Do I know $V = \varepsilon - Ir$ (and $\varepsilon + Ir$ when charging)?
- [ ] Can I spot series vs. parallel, and use both dividers correctly?
- [ ] Can I set up and solve a two-loop Kirchhoff problem with correct signs?
- [ ] Do I know where ammeters and voltmeters go and why their resistances are small or large?
- [ ] Can I find $t = 0$ and $t \to \infty$ values in an RC circuit, and the right $R_{eq}$ for $\tau$?
- [ ] Do I know when to set $\tau$ equal to a time vs. plug $t$ into the exponential?
- [ ] Can I explain hot/neutral/ground, fuses and GFCIs in a sentence each?
