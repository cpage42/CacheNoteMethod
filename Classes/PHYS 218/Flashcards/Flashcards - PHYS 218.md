#flashcards/physics
Back to [[Home]] · Class: [[PHYS 218]]

Covers HW 9.2 to 10.3. Study: Ctrl+P → "Review flashcards in this note", or pick the `physics` deck in the flashcard sidebar.

## Current and resistance
Definition of current::$I = \frac{dQ}{dt}$ (charge per second, A = C/s)
Ohm's law::$V = IR$
Resistance of a uniform wire::$R = \rho L/A$
Conductivity and resistivity::$\sigma = 1/\rho$
Current density::$J = I/A$ (uniform flow)
Current density and the electric field::$J = \sigma E$, so $I = \sigma E A$
Current density and drift velocity::$J = nqv_{d}$
Area of a round wire / a square wire::$A = \pi r^{2}$ / $A = s^{2}$ (convert mm to m first)
Resistance when area or $\rho$ varies::$R = \int \rho \, d\ell / A(\ell)$
Temperature dependence of resistance::$R = R_{0}[1 + \alpha(T - T_{0})]$

## Power and energy
Power (three forms)::$P = IV = I^{2}R = V^{2}/R$
Which power form to use::pick the one that uses the two quantities you were given. $V$ and $R$ must belong to the same resistor.
Energy from power::$E = Pt$ (time in seconds)
Heating a material::$E = mc\,\Delta T$, so $\Delta T = \frac{E}{mc}$ ($c$ = specific heat)
Energy gained by a charge through a voltage::$W = q\,\Delta V$ (an electron: $W = eV$)
Speed of a charge accelerated from rest::$\tfrac{1}{2}mv^{2} = q\,\Delta V$, so $v = \sqrt{2q\,\Delta V/m}$
Efficiency::useful power = (efficiency) × input power, e.g. $0.95\,IV$

## Real batteries
Terminal voltage::$V = \varepsilon - Ir$ (minus when the battery supplies current)
Terminal voltage with no current::$V = \varepsilon$ (the maximum; $V < \varepsilon$ whenever current flows)
Finding $\varepsilon$ and $r$ from two readings::write $V = \varepsilon - Ir$ twice and subtract: $r = \frac{V_{1}-V_{2}}{I_{2}-I_{1}}$, then $\varepsilon = V_{1} + I_{1}r$
Power a battery produces (total)::$P = I\varepsilon$
Power a battery delivers to the circuit::$P = IV$ (use the terminal voltage)
Power wasted inside a battery::$P = I^{2}r = I\varepsilon - IV$

## Series and parallel
Resistors in series / parallel::$R = R_{1} + R_{2}$ / $\frac{1}{R} = \frac{1}{R_{1}} + \frac{1}{R_{2}}$
Two resistors in parallel (shortcut)::$R = \frac{R_{1}R_{2}}{R_{1}+R_{2}}$ (product on top, sum on the bottom)
What stays the same in series?::the current $I$ (the voltages add up)
What stays the same in parallel?::the voltage $V$ (the currents add up)
Parallel total vs. the smallest resistor::the total is always smaller than the smallest branch
Largest and smallest resistance from a set::largest = all in series, smallest = all in parallel
Voltage across a resistor in series::$V_{i} = IR_{i}$, so $V_{a}/V_{b} = R_{a}/R_{b}$ (the bigger resistor gets the bigger voltage)
How to solve a mixed network::reduce from the inside out to $R_{eq}$, find $I = V/R_{eq}$, then work back out (series shares $I$, parallel shares $V$)

## Kirchhoff's rules
Kirchhoff's Voltage Law (KVL)::$\sum \Delta V = 0$ around any closed loop
Kirchhoff's Current Law (KCL)::current in = current out at a junction
KVL sign for a resistor::going with the current, $\Delta V = -IR$. Going against it, $+IR$.
KVL sign for a battery::going from − to + through the battery, $+\varepsilon$. Going from + to −, $-\varepsilon$.
Multi-loop problem steps::label currents (guess directions), KCL at a junction, KVL around each loop, solve. A negative current means the guess was backwards.

## RC circuits
Time constant of an RC circuit::$\tau = RC$
Loop rule for a charging RC circuit::$V_{0} - IR - \frac{q}{C} = 0$
Charge on a charging capacitor::$q = CV(1 - e^{-t/RC})$
Charge on a discharging capacitor::$q = q_{0}e^{-t/RC}$
Current while charging::$I = \frac{V}{R}e^{-t/RC}$
Voltages while charging::$V_{C} = V(1 - e^{-t/RC})$, $V_{R} = Ve^{-t/RC}$, and $V_{R} + V_{C} = V$ at every instant
Capacitor at $t = 0$ and $t \to \infty$ (charging)::at $t = 0$ it acts like a wire (current $V/R$). At $t \to \infty$ it acts like a break (no current).
Charging after one $\tau$::63% charged (37% left when discharging)
Time for the current to drop to half::$t = RC\ln 2$

## Capacitors
Capacitance::$C = Q/V$
Energy stored in a capacitor::$U = \frac{1}{2}CV^{2} = \frac{Q^{2}}{2C}$
Capacitors in series / parallel::$\frac{1}{C} = \frac{1}{C_{1}} + \frac{1}{C_{2}}$ / $C = C_{1} + C_{2}$

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
