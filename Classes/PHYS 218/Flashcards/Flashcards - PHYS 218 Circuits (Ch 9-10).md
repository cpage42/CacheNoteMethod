#flashcards/physics/circuits
Back to [[Home]] · Class: [[PHYS 218]] · Review: [[Exam 2 Review - Ch 8-10]] · Chapter notes: [[Ch 09 - Current and Resistance]] · [[Ch 10 - Direct-Current Circuits]] · [[10.4 Electrical Measuring Instruments]] · Other decks: [[Flashcards - PHYS 218 Electrostatics (Ch 5-8)]] · [[Flashcards - PHYS 218 Magnetism (Ch 11-16)]]

Covers all of Ch 9 (current and resistance) and Ch 10 (DC circuits). Study: Ctrl+P → "Review flashcards in this note", or pick `physics → circuits` in the flashcard sidebar.

## Current and conduction
Definition of current::$I = \frac{dQ}{dt}$ (charge per second, A = C/s)
Charge from current::$Q = \int I\,dt$ ($= It$ for constant current); number of electrons $N = Q/e$
Direction of conventional current::the way positive charge would move: out of the battery's $+$ terminal, through the circuit, into $-$. Electrons in a metal go the other way.
Current from drift velocity::$I = nqAv_{d}$ ($n$ = carriers per m³)
Derive $I = nqAv_{d}$::in time $dt$ the carriers in a cylinder of length $v_{d}\,dt$ pass the end: $dQ = n(Av_{d}\,dt)q$, divide by $dt$
Current density and drift velocity::$\vec J = nq\vec v_{d}$
Current density::$J = I/A$ (uniform flow), in general $I = \int \vec J\cdot d\vec A$
Typical drift speed in a copper wire::fractions of a mm per second ($n_{Cu} = 8.47\times10^{28}\ \text{m}^{-3}$ makes it tiny)
Why does a light turn on instantly if electrons drift so slowly?::the electric field travels down the wire at nearly light speed and pushes all the electrons at once (like a hose that's already full)

## Resistivity and resistance
Current density and the electric field::$J = \sigma E$ (or $E = \rho J$), so $I = \sigma E A$
Conductivity and resistivity::$\sigma = 1/\rho$
Resistance of a uniform wire::$R = \rho L/A$
Derive $R = \rho L/A$::$E = V/L$ and $J = I/A$; put them into $E = \rho J$ to get $V = (\rho L/A)I$
Area of a round wire / a square wire::$A = \pi r^{2}$ / $A = s^{2}$ (radius, not diameter; convert mm to m first)
Resistance when area or $\rho$ varies::$R = \int \rho \, d\ell / A(\ell)$ (slices along the current are in series)
Radial resistance of a coaxial cable::$R = \frac{\rho}{2\pi L}\ln\frac{b}{a}$ (shells of area $2\pi rL$, thickness $dr$)
Resistance of a truncated cone (radii $a$ and $b$)::$R = \frac{\rho L}{\pi ab}$
Temperature dependence of resistance::$R = R_{0}[1 + \alpha(T - T_{0})]$ (same form for $\rho$)
Why a metal's resistance rises with temperature::hotter atoms vibrate more, so drifting electrons collide more often
Sign of $\alpha$ for semiconductors like carbon::negative: heating frees more carriers, so $\rho$ drops
Resistivity of copper::$1.68\times10^{-8}\ \Omega\cdot\text{m}$, $\alpha = 0.0039$ /°C
Conductors, semiconductors, insulators::tiny $\rho$ / middle $\rho$ / huge $\rho$

## Ohm's law
Ohm's law::$V = IR$ (and microscopically $\vec J = \sigma\vec E$)
Unit of resistance::1 Ω = 1 V/A
Ohmic vs. nonohmic::ohmic: $R$ stays constant, so the $I$–$V$ graph is a straight line through the origin (slope $1/R$). Nonohmic: it isn't (diodes, hot filaments).
Is Ohm's law a fundamental law?::No. It's an empirical rule that only holds for ohmic materials.
How a diode breaks Ohm's law::it conducts easily one way and barely at all the other way

## Power and energy
Power (three forms)::$P = IV = I^{2}R = V^{2}/R$
Derive $P = IV$::moving $dq$ through $V$ changes its energy by $V\,dq$; divide by $dt$: $P = V\,dq/dt = IV$
Which power form to use::pick the one that uses the two quantities you were given. $V$ and $R$ must belong to the same resistor.
Resistance from a power rating ("60 W, 120 V")::$R = V^{2}/P$ (lower wattage means higher resistance)
Two bulbs of different ratings in series: which is brighter?::the lower-wattage one: same current, so $P = I^{2}R$ favors the bigger resistance
Energy from power::$E = Pt$ (time in seconds)
Kilowatt-hour in joules::$1\ \text{kWh} = 3.6\times10^{6}$ J
Electricity cost::kWh used × price per kWh
Power lost in a transmission line::$P_{loss} = I^{2}R_{line} = (P/V)^{2}R_{line}$: 10× the voltage means $1/100$ the loss
Heating a material::$E = mc\,\Delta T$, so $\Delta T = \frac{E}{mc}$ ($c$ = specific heat)
Energy gained by a charge through a voltage::$W = q\,\Delta V$ (an electron: $W = eV$)
Speed of a charge accelerated from rest::$\tfrac{1}{2}mv^{2} = q\,\Delta V$, so $v = \sqrt{2q\,\Delta V/m}$
Efficiency::useful power = (efficiency) × input power, e.g. $0.95\,IV$

## Superconductors
Superconductor::below a critical temperature $T_{c}$ its resistance is exactly zero
Meissner effect::a superconductor expels magnetic fields from its inside (that's why magnets levitate over one)
Do copper, silver or gold superconduct?::No
Why "high-temperature" superconductors matter::$T_{c}$ above 77 K, so cheap liquid nitrogen can cool them
Uses of superconductors::MRI magnets, maglev trains, SQUID magnetic sensors

## Real batteries
Emf::the work per charge a source does moving charge from $-$ to $+$ (in volts; not a force)
Model of a real battery::ideal emf $\varepsilon$ in series with an internal resistance $r$
Current from a battery into a load $R$::$I = \frac{\varepsilon}{R + r}$
Terminal voltage::$V = \varepsilon - Ir$ (minus when the battery supplies current)
Terminal voltage while charging a battery::$V = \varepsilon + Ir$
Terminal voltage with no current::$V = \varepsilon$ (the maximum; $V < \varepsilon$ whenever current flows)
Short-circuit current of a battery::$I = \varepsilon/r$
Finding $\varepsilon$ and $r$ from two readings::write $V = \varepsilon - Ir$ twice and subtract: $r = \frac{V_{1}-V_{2}}{I_{2}-I_{1}}$, then $\varepsilon = V_{1} + I_{1}r$
Power a battery produces (total)::$P = I\varepsilon$
Power a battery delivers to the circuit::$P = IV$ (use the terminal voltage)
Power wasted inside a battery::$P = I^{2}r = I\varepsilon - IV$
Load resistance for maximum power::$R = r$, giving $P_{max} = \frac{\varepsilon^{2}}{4r}$ (set $dP/dR = 0$)
Batteries in series::emfs add, internal resistances add

## Series and parallel
Resistors in series / parallel::$R = R_{1} + R_{2}$ / $\frac{1}{R} = \frac{1}{R_{1}} + \frac{1}{R_{2}}$
Derive the series rule::same $I$ through each; KVL: $V = IR_{1} + IR_{2} = I(R_{1} + R_{2})$
Derive the parallel rule::same $V$ across each; KCL: $I = V/R_{1} + V/R_{2}$, so $1/R = 1/R_{1} + 1/R_{2}$
Two resistors in parallel (shortcut)::$R = \frac{R_{1}R_{2}}{R_{1}+R_{2}}$ (product on top, sum on the bottom)
$N$ identical resistors in parallel::$R/N$
What stays the same in series?::the current $I$ (the voltages add up)
What stays the same in parallel?::the voltage $V$ (the currents add up)
Parallel total vs. the smallest resistor::the total is always smaller than the smallest branch
Largest and smallest resistance from a set::largest = all in series, smallest = all in parallel
Voltage divider::$V_{1} = V\frac{R_{1}}{R_{1}+R_{2}}$ (the bigger resistor gets the bigger voltage)
Current divider::$I_{1} = I\frac{R_{2}}{R_{1}+R_{2}}$ (the OTHER resistor on top; the smaller resistor gets more current)
How to tell series from parallel::series: all the current through one must go through the other. Parallel: both ends on the same two nodes.
How to solve a mixed network::reduce from the inside out to $R_{eq}$, find $I = V/R_{eq}$, then work back out (series shares $I$, parallel shares $V$)
What a short does::a wire across a component; all the current takes the wire and the component gets $V = 0$

## Kirchhoff's rules
Kirchhoff's Voltage Law (KVL)::$\sum \Delta V = 0$ around any closed loop
Kirchhoff's Current Law (KCL)::current in = current out at a junction
Conservation law behind KCL::conservation of charge
Conservation law behind KVL::conservation of energy (the electrostatic field is conservative)
KVL sign for a resistor::going with the current, $\Delta V = -IR$. Going against it, $+IR$.
KVL sign for a battery::going from − to + through the battery, $+\varepsilon$. Going from + to −, $-\varepsilon$.
How many junction equations?::one fewer than the number of junctions
Multi-loop problem steps::label currents (guess directions), KCL at a junction, KVL around each loop, solve. A negative current means the guess was backwards.
How to check a Kirchhoff answer::try a loop you didn't use, or check power: sources out = resistors + charging batteries in
When is a battery being charged in a circuit?::when current flows into its $+$ terminal (from + to − inside it)

## Meters
Voltmeter connected in series by mistake::its huge resistance acts like a break; current drops to almost zero and it reads about the source voltage
What a voltmeter reads across a battery::the terminal voltage $\varepsilon - Ir$; it equals $\varepsilon$ only when no current flows
Ohmmeter rules::isolate the part (or you read the whole network's $R_{eq}$) and never use it on a live circuit
Why digital meters are more accurate::they need less current to register, so they can have higher resistance (voltmeter) and disturb the circuit less
Ammeter: series or parallel? Resistance?::in series, very small resistance
Voltmeter: series or parallel? Resistance?::in parallel, very large resistance
Turning a galvanometer into an ammeter::small shunt in parallel: $R_{sh} = \frac{I_{G}R_{G}}{I - I_{G}}$
Turning a galvanometer into a voltmeter::big resistor in series: $R = \frac{V}{I_{G}} - R_{G}$
Voltmeter loading::a voltmeter in parallel lowers the resistance it measures, so it reads low unless $R_{V} \gg R$
Ammeter connected in parallel by mistake::it shorts the element: huge current, wrong reading, maybe a blown fuse

## RC circuits
Time constant of an RC circuit::$\tau = RC$ (Ω·F = s)
Loop rule for a charging RC circuit::$V_{0} - IR - \frac{q}{C} = 0$
Charge on a charging capacitor::$q = CV(1 - e^{-t/RC})$
Charge on a discharging capacitor::$q = q_{0}e^{-t/RC}$
Current while charging::$I = \frac{V}{R}e^{-t/RC}$
Current while discharging::$I = -\frac{q_{0}}{RC}e^{-t/RC}$ (minus: it flows backwards)
Voltages while charging::$V_{C} = V(1 - e^{-t/RC})$, $V_{R} = Ve^{-t/RC}$, and $V_{R} + V_{C} = V$ at every instant
Capacitor at $t = 0$ and $t \to \infty$ (charging)::at $t = 0$ it acts like a wire (current $V/R$). At $t \to \infty$ it acts like a break (no current).
Charging after one $\tau$::63% charged (37% left when discharging)
Time for the current to drop to half::$t = RC\ln 2$
Time to charge to a fraction $f$::$t = -\tau\ln(1 - f)$
How long until "fully" charged::about $5\tau$ (99.3%)
Set $\tau$ equal to a time, or plug in $t$?::"must respond on this time scale" → set $\tau = RC$ equal to it. A specific time and a value at that moment → plug $t$ into the exponential.
$\tau$ in a circuit with several resistors::$\tau = R_{eq}C$, where $R_{eq}$ is what the capacitor sees with the battery replaced by a wire
Energy split when charging a capacitor from a battery::battery gives $CV^{2}$: half stored in $C$, half burned in $R$ (for any $R$)

## Household wiring and safety
How household outlets are wired::in parallel, so each gets the full 120 V and works independently
Hot, neutral, ground::hot is live (black), neutral is near 0 V (white), ground connects metal cases to earth (green/bare)
Fuse or circuit breaker::in series on the hot wire; opens when the current is too big, so wires don't overheat
Thermal hazard::$I^{2}R$ heating in overloaded or shorted wires can start fires
What makes a shock dangerous::the current through the body (~10–20 mA: can't let go; ~100 mA: heart fibrillation)
GFCI::compares hot and neutral currents; a few mA difference means leakage (maybe through you), so it cuts power in ms

## Capacitors
Capacitance::$C = Q/V$
Energy stored in a capacitor::$U = \frac{1}{2}CV^{2} = \frac{Q^{2}}{2C}$
Capacitors in series / parallel::$\frac{1}{C} = \frac{1}{C_{1}} + \frac{1}{C_{2}}$ / $C = C_{1} + C_{2}$ (opposite of resistors)

## Symbols and units
$U$ vs. $V$::$U$ is potential energy (J). $V$ is voltage, energy per charge (V = J/C), and $\Delta U = q\,\Delta V$.
$Q$ vs. $q$::$Q$ is a total or source charge. $q$ is a test charge, or the charge at time $t$.
$E$: field or energy?::$E$ in N/C or V/m is the electric field. $E$ in joules is energy.
Symbol for emf::$\varepsilon$ (or $\mathcal{E}$), the battery's own voltage
Unit chain::1 V = 1 J/C, 1 A = 1 C/s, 1 Ω = 1 V/A, 1 W = 1 J/s

## Constants
Elementary charge::$e = 1.602\times10^{-19}$ C
Electron mass::$m_{e} = 9.11\times10^{-31}$ kg
Specific heat of water::$c = 4186$ J/(kg·°C)
