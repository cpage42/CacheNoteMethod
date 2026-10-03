#flashcards/physics/electrostatics
Back to [[Home]] · Class: [[PHYS 218]] · Mistakes to learn from: [[Exam 1 - Corrections]] · Other deck: [[Flashcards - PHYS 218 Circuits (Ch 9-10)]]

Covers Ch 5 (charges and fields), Ch 6 (Gauss's law), Ch 7 (electric potential) and Ch 8 (capacitance). This is Exam 1 material, and it all comes back on the cumulative final. Study: Ctrl+P → "Review flashcards in this note", or pick `physics → electrostatics` in the flashcard sidebar.

## Ch 5: Electric charge
Charge quantization::every charge is a whole multiple of $e$: $q = ne$
Conservation of charge::total charge of an isolated system never changes; charge only moves around
Like and unlike charges::like charges repel, unlike charges attract
Conductor vs. insulator::conductor: charges move freely through it. Insulator: charges stay where they're put.
Charging by induction::bring a charged object near, ground the far side, remove the ground, then the object: the conductor keeps the opposite charge
Why a charged object attracts a neutral one::it polarizes the neutral object; the closer opposite charge is pulled harder than the farther like charge is pushed
Coulomb's law::$F = k\frac{|q_{1}q_{2}|}{r^{2}}$, along the line between them
Coulomb constant and $\varepsilon_{0}$::$k = \frac{1}{4\pi\varepsilon_{0}} = 8.99\times10^{9}\ \text{N·m}^{2}/\text{C}^{2}$, $\varepsilon_{0} = 8.85\times10^{-12}\ \text{C}^{2}/(\text{N·m}^{2})$
Net force from several charges::superposition: add the force vectors (components!)
Direction of a Coulomb force::magnitude from the formula, direction from physics (attract or repel)
Where can the net force on a third charge be zero?::between two like charges, or outside (on the side of the smaller one) for unlike charges

## Ch 5: Electric field
Definition of the electric field::$\vec E = \vec F/q$ (force per unit test charge, N/C = V/m)
Force on a charge in a field::$\vec F = q\vec E$ (opposite $\vec E$ for negative charges)
Field of a point charge::$E = \frac{k|q|}{r^{2}}$, pointing away from $+$, toward $-$
Field-line rules::start on $+$, end on $-$; never cross; denser where $E$ is stronger; number ∝ charge
Charge elements for continuous distributions::$dq = \lambda\,d\ell$ (line), $\sigma\,dA$ (surface), $\rho\,dV$ (volume)
Recipe for $\vec E$ of a continuous charge::write $d\vec E$ from $dq$, use symmetry to cancel components, integrate what's left
Field on the axis of a ring::$E = \frac{kQz}{(z^{2}+R^{2})^{3/2}}$
Field on the axis of a disk::$E = 2\pi k\sigma\left(1 - \frac{z}{\sqrt{z^{2}+R^{2}}}\right) = \frac{\sigma}{2\varepsilon_{0}}\left(1 - \frac{z}{\sqrt{z^{2}+R^{2}}}\right)$
Field of an infinite line of charge::$E = \frac{2k\lambda}{r} = \frac{\lambda}{2\pi\varepsilon_{0}r}$
Field above the middle of a line segment of length $L$::$E = \frac{k\lambda L}{z\sqrt{z^{2}+L^{2}/4}}$
Field of an infinite plane::$E = \frac{\sigma}{2\varepsilon_{0}}$ (doesn't depend on distance)
Field between two oppositely charged plates::$E = \frac{\sigma}{\varepsilon_{0}}$ inside, 0 outside
Limit checks for a ring or disk field::far away ($z \gg R$) it should look like a point charge, $kQ/z^{2}$; at the center ($z = 0$) the ring gives 0
Electric dipole moment::$\vec p = q\vec d$, pointing from $-$ to $+$
Torque and energy of a dipole in a field::$\vec\tau = \vec p\times\vec E$, $U = -\vec p\cdot\vec E$ (lowest energy when aligned)
Dipole field far away::falls off as $1/r^{3}$ (on the axis: $E = 2kp/r^{3}$)

## Ch 6: Gauss's law
Electric flux::$\Phi = \int \vec E\cdot d\vec A$ ($= EA\cos\theta$ for a uniform field and flat surface)
Gauss's law::$\oint \vec E\cdot d\vec A = \frac{q_{enc}}{\varepsilon_{0}}$
Net flux through a closed surface with no charge inside::zero (as many field lines leave as enter)
When is Gauss's law useful for finding $E$?::only with high symmetry (spherical, cylindrical, planar), where $E$ is constant on the Gaussian surface
Gaussian surface for each symmetry::sphere → concentric sphere; line or cylinder → coaxial cylinder; plane → pillbox through it
Field outside any spherically symmetric charge::$E = \frac{kQ}{r^{2}}$, as if all the charge were at the center
Field inside a uniform solid sphere (insulator)::$E = \frac{kQr}{R^{3}} = \frac{\rho r}{3\varepsilon_{0}}$ (grows linearly from 0)
Field inside a thin charged shell::0
Field inside a uniform infinite cylinder of charge density $\rho$::$E = \frac{\rho r}{2\varepsilon_{0}}$
$q_{enc}$ for a uniformly charged ball at radius $r < R$::$q_{enc} = Q\frac{r^{3}}{R^{3}}$ (fraction of the volume)
Field inside a conductor in equilibrium::zero
Where excess charge sits on a conductor::on its surface
Field just outside a conductor::perpendicular to the surface, $E = \frac{\sigma}{\varepsilon_{0}}$
Charge $q$ in a cavity of a conductor::the cavity wall gets $-q$; the outer surface gets $+q$ (plus any net charge the conductor had)
Field and potential graph rules::$V$ is always continuous; $E$ jumps (by $\sigma/\varepsilon_{0}$) only at a surface charge; inside a conductor $E = 0$ and $V$ is constant

## Ch 7: Potential energy and potential
Work and potential energy::$W = -\Delta U$ (conservative force)
Potential energy of two point charges::$U = \frac{kq_{1}q_{2}}{r}$ (sign included; zero at infinity)
Potential energy of a group of charges::add $kq_{i}q_{j}/r_{ij}$ over every pair once
Electric potential::$V = U/q$ (energy per charge, V = J/C)
Potential difference from the field::$\Delta V = V_{B} - V_{A} = -\int_{A}^{B}\vec E\cdot d\vec\ell$
Potential difference in a uniform field::$\Delta V = -Ed$ along the field (between plates: $V = Ed$)
Change in potential energy of a charge::$\Delta U = q\,\Delta V$
Which way do charges move on their own?::positive charges toward lower $V$, negative charges toward higher $V$
Electron-volt::$1\ \text{eV} = 1.602\times10^{-19}$ J (energy an electron gains through 1 V)
Potential of a point charge::$V = \frac{kq}{r}$ (sign included, scalar)
Potential of several point charges::$V = \sum \frac{kq_{i}}{r_{i}}$ — add numbers, not vectors, no integral needed
Potential of a continuous charge::$V = \int \frac{k\,dq}{r}$
Potential on the axis of a ring::$V = \frac{kQ}{\sqrt{z^{2}+R^{2}}}$
Potential on the axis of a disk::$V = 2\pi k\sigma\left(\sqrt{z^{2}+R^{2}} - z\right)$
Disk potential: how to set up the integral::rings of radius $r$, width $dr$: $dq = \sigma\,2\pi r\,dr$, $dV = \frac{k\,dq}{\sqrt{z^{2}+r^{2}}}$, integrate $r$ from 0 to $R$
Potential of an infinite line of charge::$V(r) = -2k\lambda\ln(r/r_{0})$ (can't take $V = 0$ at infinity; pick a reference $r_{0}$)
Potential outside / inside a charged conducting sphere::$\frac{kQ}{r}$ outside; constant $\frac{kQ}{R}$ inside
Field from potential::$E_{x} = -\frac{\partial V}{\partial x}$ (in general $\vec E = -\nabla V$)
Which way does $\vec E$ point relative to $V$?::toward decreasing $V$ (downhill)
Equipotential surfaces::surfaces of constant $V$; always perpendicular to field lines; no work to move a charge along one
Conductor and potential::the whole conductor (surface and inside) is one equipotential
Where charge piles up on a conductor::at sharp points (small radius of curvature), where the field is strongest (lightning rods, corona discharge)
Units check for potential::$V$ must come out in volts: $kq/r$ is (N·m²/C²)(C)/m = N·m/C = J/C

## Ch 8: Capacitance
Capacitance::$C = Q/V$ (farads, F = C/V); depends only on geometry and the material between the conductors
Parallel-plate capacitor::$C = \frac{\varepsilon_{0}A}{d}$
Derive the parallel-plate capacitance::$E = \sigma/\varepsilon_{0} = Q/(\varepsilon_{0}A)$, $V = Ed = Qd/(\varepsilon_{0}A)$, so $C = Q/V = \varepsilon_{0}A/d$
Spherical capacitor::$C = 4\pi\varepsilon_{0}\frac{R_{1}R_{2}}{R_{2}-R_{1}}$
Isolated sphere::$C = 4\pi\varepsilon_{0}R$
Cylindrical capacitor (length $L$)::$C = \frac{2\pi\varepsilon_{0}L}{\ln(R_{2}/R_{1})}$
Recipe for any capacitance::put $\pm Q$ on the conductors, find $E$ (Gauss), integrate for $V$, then $C = Q/V$
Capacitors in series::$\frac{1}{C} = \frac{1}{C_{1}} + \frac{1}{C_{2}}$ — same $Q$ on each, voltages add
Capacitors in parallel::$C = C_{1} + C_{2}$ — same $V$ across each, charges add
Energy stored in a capacitor::$U = \frac{1}{2}CV^{2} = \frac{Q^{2}}{2C} = \frac{1}{2}QV$
Energy density of an electric field::$u = \frac{1}{2}\varepsilon_{0}E^{2}$ (J/m³)
Capacitance with a dielectric::$C = \kappa C_{0}$ ($\kappa > 1$)
Insert a dielectric, capacitor isolated ($Q$ fixed)::$V$, $E$ and $U$ all drop by a factor of $\kappa$
Insert a dielectric, battery connected ($V$ fixed)::$Q$ and $U$ both go up by a factor of $\kappa$
Why a dielectric reduces the field::its molecules polarize and the induced surface charge partly cancels the plates' field
Induced surface charge on a dielectric::$\sigma_{i} = \sigma\left(1 - \frac{1}{\kappa}\right)$
Permittivity of a material::$\varepsilon = \kappa\varepsilon_{0}$
Dielectric strength::the largest field a material can take before it breaks down and conducts (sets the max voltage)

## Habits from Exam 1
Before boxing any answer::check the units (catches $V = k$, wrong powers of $r$, a stray $\ln R$)
Time budget on an exam::about 25% per problem on a 4-problem exam; move on and come back
Setups to know cold::by integration: ring, disk, line. By Gauss's law: sphere, shell, cylinder, coax.
