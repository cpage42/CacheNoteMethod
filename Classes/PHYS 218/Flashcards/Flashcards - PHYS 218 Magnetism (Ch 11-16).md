#flashcards/physics/magnetism
Back to [[Home]] · Class: [[PHYS 218]] · Chapter notes: [[Ch 11 - Magnetic Forces and Fields]] · [[Ch 12 - Sources of Magnetic Fields]] · [[Ch 13 - Electromagnetic Induction]] · [[Ch 14 - Inductance]] · [[Ch 15 - Alternating-Current Circuits]] · [[Ch 16 - Electromagnetic Waves]] · Other decks: [[Flashcards - PHYS 218 Electrostatics (Ch 5-8)]] · [[Flashcards - PHYS 218 Circuits (Ch 9-10)]]

Covers Ch 11–16: magnetic forces, sources of fields, induction, inductance, AC circuits and EM waves. Study: Ctrl+P → "Review flashcards in this note", or pick `physics → magnetism` in the flashcard sidebar.

## Ch 11: Magnetic forces
Magnetic force on a moving charge::$\vec F = q\vec v\times\vec B$, magnitude $F = qvB\sin\theta$
Unit of magnetic field::tesla: 1 T = 1 N/(A·m); 1 gauss = $10^{-4}$ T
Right-hand rule for the force on a charge::fingers along $\vec v$, curl toward $\vec B$, thumb gives $\vec F$ on a **positive** charge (flip it for negative)
Does a magnetic force do work?::no; it's always perpendicular to $\vec v$, so it changes direction, not speed
Radius of circular motion in a uniform $B$::$r = \frac{mv}{qB}$
Period and cyclotron frequency::$T = \frac{2\pi m}{qB}$, $f = \frac{qB}{2\pi m}$ (independent of speed)
Velocity at an angle to $\vec B$::a helix: circles from $v_\perp$, steady drift along $\vec B$ from $v_\parallel$
Velocity selector::crossed $\vec E$ and $\vec B$ pass only $v = E/B$ undeflected
Force on a current-carrying wire::$\vec F = I\vec L\times\vec B$, $F = ILB\sin\theta$
Magnetic dipole moment of a loop::$\vec\mu = NI\vec A$ (direction by right-hand curl of the current)
Torque on a current loop::$\vec\tau = \vec\mu\times\vec B$, $\tau = NIAB\sin\theta$
Energy of a magnetic dipole::$U = -\vec\mu\cdot\vec B$ (lowest when aligned)
Hall voltage::$V_H = v_dBl = \frac{IB}{nqt}$; its sign tells you the sign of the charge carriers

## Ch 12: Sources of magnetic fields
Permeability of free space::$\mu_0 = 4\pi\times10^{-7}$ T·m/A
Biot-Savart law::$d\vec B = \frac{\mu_0}{4\pi}\frac{I\,d\vec l\times\hat r}{r^{2}}$
Field of a long straight wire::$B = \frac{\mu_0 I}{2\pi r}$, circling the wire
Right-hand rule for a wire::thumb along the current, fingers curl the way $\vec B$ circles
Force per length between parallel wires::$\frac{F}{l} = \frac{\mu_0I_1I_2}{2\pi r}$; same direction attract, opposite repel
Field at the center of a loop ($N$ turns)::$B = \frac{\mu_0NI}{2R}$
Field on the axis of a loop::$B = \frac{\mu_0IR^{2}}{2(y^{2} + R^{2})^{3/2}}$
Ampère's law::$\oint\vec B\cdot d\vec l = \mu_0I_{enc}$
Ampère's law recipe::pick a loop where $B$ is constant and parallel to $d\vec l$ (or perpendicular), so $B\cdot(\text{length}) = \mu_0I_{enc}$
Field inside a uniform wire ($r < R$)::$B = \frac{\mu_0Ir}{2\pi R^{2}}$
Field inside a long solenoid::$B = \mu_0nI$, $n$ = turns per meter (zero outside)
Field inside a toroid::$B = \frac{\mu_0NI}{2\pi r}$
Paramagnetic / diamagnetic / ferromagnetic::weakly attracted / weakly repelled / strongly attracted, domains align, can stay magnetized

## Ch 13: Induction
Magnetic flux::$\Phi_B = \int\vec B\cdot d\vec A$, or $BA\cos\theta$ for uniform $B$ and a flat loop (unit: Wb = T·m²)
Faraday's law::$\varepsilon = -N\frac{d\Phi_B}{dt}$
Three ways to change flux::change $B$, change the area, or change the angle
Lenz's law::the induced current makes a field that **opposes the change** in flux
Lenz's law recipe::is the flux through the loop increasing or decreasing? → induced $\vec B$ opposes that change → right-hand rule gives the current direction
Motional emf of a rod on rails::$\varepsilon = Blv$
Rod on rails: current and force::$I = \frac{Blv}{R}$, magnetic drag $F = \frac{B^{2}l^{2}v}{R}$
Induced electric field::$\oint\vec E\cdot d\vec l = -\frac{d\Phi_B}{dt}$ (non-conservative, loops around)
Eddy currents::current loops induced in bulk metal; they oppose the motion (magnetic braking) and waste energy as heat
Generator emf::$\varepsilon = NBA\omega\sin\omega t$, peak $NBA\omega$
Back emf in a motor::the spinning coil makes an emf opposing the supply: $I = \frac{V - \varepsilon_{back}}{R}$ (largest current at startup)

## Ch 14: Inductance
Mutual inductance::$M = \frac{N_2\Phi_{21}}{I_1}$, $\varepsilon_2 = -M\frac{dI_1}{dt}$
Self-inductance::$L = \frac{N\Phi}{I}$, $\varepsilon = -L\frac{dI}{dt}$ (unit: henry, H)
Inductance of a solenoid::$L = \frac{\mu_0N^{2}A}{l}$
What does an inductor resist?::**changes** in current (not current itself)
Energy stored in an inductor::$U = \tfrac12LI^{2}$
Magnetic energy density::$u_B = \frac{B^{2}}{2\mu_0}$
RL time constant::$\tau = L/R$
RL current growing / decaying::$I = \frac{\varepsilon}{R}(1 - e^{-t/\tau})$ / $I = I_0e^{-t/\tau}$
Inductor at $t = 0$ and $t \to \infty$ (switch just closed)::acts like an **open switch** at first, like a **wire** at the end (opposite of a capacitor)
LC oscillation frequency::$\omega = \frac{1}{\sqrt{LC}}$
Energy in an LC circuit::sloshes between the capacitor ($q^{2}/2C$) and the inductor ($\tfrac12Li^{2}$); the total stays constant
Mass-spring analog of an LC circuit::$q \leftrightarrow x$, $i \leftrightarrow v$, $L \leftrightarrow m$, $1/C \leftrightarrow k$
Underdamped RLC::$q = q_0e^{-Rt/2L}\cos(\omega't + \phi)$, $\omega' = \sqrt{\frac{1}{LC} - \left(\frac{R}{2L}\right)^{2}}$

## Ch 15: AC circuits
AC source::$v = V_0\sin\omega t$, $\omega = 2\pi f$
Capacitive reactance::$X_C = \frac{1}{\omega C}$; current **leads** voltage by 90°
Inductive reactance::$X_L = \omega L$; current **lags** voltage by 90°
Resistor in AC::current and voltage in phase
Impedance of a series RLC::$Z = \sqrt{R^{2} + (X_L - X_C)^{2}}$, $I_0 = V_0/Z$
Phase angle::$\tan\phi = \frac{X_L - X_C}{R}$
rms values::$I_{rms} = \frac{I_0}{\sqrt2}$, $V_{rms} = \frac{V_0}{\sqrt2}$
Average power in AC::$P_{ave} = I_{rms}V_{rms}\cos\phi = I_{rms}^{2}R$ (only the resistor uses power)
Resonance::$\omega_0 = \frac{1}{\sqrt{LC}}$: $X_L = X_C$, $Z = R$, current is maximum
Quality factor::$Q = \frac{\omega_0}{\Delta\omega} = \frac{\omega_0L}{R}$ (sharper peak = bigger $Q$)
Transformer::$\frac{V_s}{V_p} = \frac{N_s}{N_p}$, $\frac{I_s}{I_p} = \frac{N_p}{N_s}$ (step up voltage, step down current)
Why can't a transformer work on DC?::it needs a **changing** flux to induce an emf

## Ch 16: Electromagnetic waves
Maxwell's four equations (names)::Gauss for $E$, Gauss for $B$ (no monopoles), Faraday, Ampère-Maxwell
What Maxwell added to Ampère's law::a changing electric flux also makes $\vec B$: displacement current $I_d = \varepsilon_0\frac{d\Phi_E}{dt}$
Speed of light from constants::$c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} = 3.00\times10^{8}$ m/s
$E$ and $B$ in an EM wave::perpendicular to each other and to the direction of travel, in phase, with $E = cB$
Wave relation::$c = f\lambda$
Intensity of an EM wave::$I = \tfrac12c\varepsilon_0E_0^{2} = c\varepsilon_0E_{rms}^{2}$
Intensity from a point source::$I = \frac{P}{4\pi r^{2}}$
Radiation pressure::$I/c$ if absorbed, $2I/c$ if reflected
EM spectrum, long wavelength to short::radio, microwave, infrared, visible (700 nm red to 400 nm violet), ultraviolet, X-ray, gamma
