# Quiz Prep: HW 11.2, 11.3, 11.4, 12.1
Class: [[PHYS 218]] · Equation sheets: [[Ch 11 + 12.1 Equation Sheet]] · PDF copy: ![[Quiz Prep - HW 11.2 to 12.1.pdf]]

The quiz has two problems: one from **11.2 or 11.3**, and one from **11.4 or 12.1**.

I read the Expert TA problem sets for 11.3, 11.4, and 12.1, plus the 11.2 velocity-selector problem. I only saw problem 1 of 11.2, so the 11.2 section is the least certain.

## Equation sheet

### Constants
| Quantity | Value |
|---|---|
| $\mu_0$ (permeability of free space) | $4\pi\times10^{-7}$ T·m/A |
| $\mu_0/2\pi$ | $2\times10^{-7}$ T·m/A |
| $\mu_0/4\pi$ | $1\times10^{-7}$ T·m/A |
| $e$ (elementary charge) | $1.602\times10^{-19}$ C |
| $m_p$, $m_e$ (proton, electron mass) | $1.673\times10^{-27}$ kg, $9.109\times10^{-31}$ kg |

### Group 1: HW 11.2 and 11.3 (force on charges and wires)

| Idea | Equation | What the variables mean |
|---|---|---|
| Magnetic force on a moving charge | $\vec F=q\vec v\times\vec B$, $\ F=qvB\sin\theta$ | $q$ = charge of the particle (C, with sign); $\vec v$ = its velocity (m/s); $\vec B$ = magnetic field (T); $\theta$ = angle between $\vec v$ and $\vec B$ |
| Lorentz force | $\vec F=q\vec E+q\vec v\times\vec B$ | $\vec E$ = electric field (V/m) from the plates or source, the other symbols as above |
| Velocity selector (net force zero) | $qE=qvB \Rightarrow v=E/B$ | $E$ = electric field strength between the plates; $B$ = magnetic field strength; $v$ = the one speed that passes undeflected |
| Force on a current-carrying wire | $\vec F=I\vec L\times\vec B$, $\ F=ILB\sin\theta$ | $I$ = current in the wire (A); $\vec L$ = length of wire inside the field, pointing along the current (m); $\vec B$ = field the wire sits in; $\theta$ = angle between $\vec I$ and $\vec B$ |
| Circular motion in $B$ | $r=\dfrac{mv}{qB}$, $\ T=\dfrac{2\pi m}{qB}$ | $r$ = radius of the circular path; $T$ = time for one orbit; $m$ = particle mass; $v$ = speed (perpendicular to $B$) |
| Work-energy for a rod, no friction | $W=Fd=\tfrac12mv^2 \Rightarrow v=\sqrt{2Fd/m}$ | $F$ = magnetic force on the rod; $d$ = distance it slides; $m$ = rod mass; $v$ = final speed, from rest |
| Force per unit field strength on a straight segment | $F/B=IL$ | $I$ = loop current; $L$ = length of the segment that is inside the field |

- A magnetic force on a free charge does no work, since $\vec F\perp\vec v$.
- No force when $\vec v\parallel\vec B$ (or $\vec I\parallel\vec B$).
- Unit vectors: $\hat x\times\hat y=\hat z$, $\hat y\times\hat z=\hat x$, $\hat z\times\hat x=\hat y$. Reverse the order and the sign flips. Dots are out of the page, crosses are into it.
- Right-hand rule: fingers along $\vec v$ (or $\vec I$), curl toward $\vec B$, thumb gives $\vec F$ for a positive charge. For a negative charge, flip it.

### Group 2: HW 11.4 and 12.1 (loops, torque, fields from wires)

| Idea | Equation | What the variables mean |
|---|---|---|
| Force per length between parallel wires | $\dfrac Fl=\dfrac{\mu_0I_1I_2}{2\pi d}$ | $F/l$ = force per unit length (N/m); $I_1,I_2$ = the currents in the two wires; $d$ = distance between them |
| Field of a long straight wire | $B=\dfrac{\mu_0I}{2\pi r}$ | $I$ = current in the wire; $r$ = perpendicular distance from the wire to the point where you want $B$ |
| Dipole moment of a coil | $\mu=NIA$ | $N$ = number of turns; $I$ = current in the coil; $A$ = area of one turn ($\pi R^2$ for a circle of radius $R$) |
| Torque on a coil | $\vec\tau=\vec\mu\times\vec B$, $\ \tau=\mu B\sin\theta$ | $\vec\mu$ = dipole moment (points along the coil's axis); $\vec B$ = external field; $\theta$ = angle between $\vec\mu$ and $\vec B$ |
| Potential energy of a coil | $U=-\vec\mu\cdot\vec B=-\mu B\cos\theta$ | same symbols; $U=0$ when $\mu\perp B$ |
| Rectangular loop torque | $\tau=IAB\sin\theta$ | $A=L_1L_2$, the loop's area; $I$ = loop current; $B$ = field |
| Hall voltage | $V=\dfrac{IBw}{neA}$, round wire: $V=\dfrac{4IB}{ne\pi d}$ | $I$ = current in the wire; $B$ = field across it; $n$ = free-electron density (m⁻³); $e$ = electron charge; $w$ = width the voltage is measured across; $A$ = wire cross-section; $d$ = wire diameter |
| Drift speed | $v_d=\dfrac{I}{neA}$ | $v_d$ = average speed of the charge carriers along the wire |
| Work to move parallel wires from $d$ to $2d$, per length | $w=\dfrac{\mu_0I_1I_2}{2\pi}\ln 2$ | $w$ = work per unit length (J/m); $I_1,I_2$ = currents; $d$ = starting separation |
| Biot-Savart | $d\vec B=\dfrac{\mu_0}{4\pi}\dfrac{I\,d\vec l\times\hat r}{r^2}$ | $d\vec l$ = a tiny piece of wire along the current; $\hat r$ = unit vector from that piece to the point P; $r$ = distance to P |

- Right-hand rule for the field around a wire: thumb along $I$, fingers curl the way $\vec B$ circles it.
- Right-hand rule for $\vec\mu$: fingers follow the current, thumb gives $\vec\mu$.
- The torque turns $\vec\mu$ toward $\vec B$. Stable position is $\vec\mu\parallel\vec B$ ($U=-\mu B$, $\tau=0$).

## What to know, by homework

### HW 11.2 (force on a moving charge, velocity selector)
- **Setup:** a positive charge $+q$ moves right with speed $v$ through a uniform field $\vec B$ pointing out of the page. A velocity selector adds an electric field $\vec E$ so the particle goes straight.
- Use $\vec F=q\vec v\times\vec B$ for the direction: $v$ right, $B$ out of the page, $+q$ gives a magnetic force **down**. The electric force must cancel it, so it points **up**, and for a positive charge $\vec E$ points **up**.
- $E=vB$. The charge and mass cancel, so any particle at $v=E/B$ goes straight.
- Negative charge: both force directions flip, so $\vec E$ would point down.

### HW 11.3 (force on wires)
1. **Find $\vec B$ from $\vec I$ and $\vec F$.** $I$ = current in the wire, $F$ = the magnetic force shown. Test each direction for $\vec B$ until $\vec I\times\vec B$ points along $\vec F$.
2. **Find $\vec F$ from $\vec I$ and $\vec B$.** $\vec I\times\vec B$. Antiparallel or parallel gives zero.
3. **Rod on rails.** $m=0.95$ kg is the rod's mass, $L=0.55$ m the distance between the rails (the length of rod carrying current), $I=2.3$ A the current in the rod, $B=0.15$ T the field pointing up, $d=0.55$ m the distance the rod slides. $F=ILB=0.190$ N, $W=Fd=0.104$ J, $v=\sqrt{2Fd/m}=0.469$ m/s.
4. **Loop partly in a field.** $I=4.5$ A is the loop current, $L=0.200$ m the width of the section inside the field. Forces on the two vertical sides cancel, so only the segment inside matters. $F/B=IL=0.900$ N/T.

### HW 11.4 (loops, torque, Hall)
1. **Wire next to a rectangular loop.** The long wire carries one current and the loop carries another (15.0 A and 30.0 A, check which is which in the figure). $L=0.300$ m is the length of each horizontal side, and $d$ is the distance from the long wire to that side: 7.50 cm for the top side, 17.5 cm for the bottom. The two short sides cancel. The near side wins because it is closer. Net force $2.06\times10^{-4}$ N, away from the wire.
2. **Three wires on a triangle.** $d=0.100$ m is the distance between each pair of wires. Wire A carries 5 A out of the page, B carries 10 A into it, and C carries 20 A into it. Find each pair force $\mu_0I_iI_j/2\pi d$, add as vectors, and check the sum over all three wires is zero.
3. **Coil in a field.** $N=390$ turns, $I=3.5$ A is the coil current, $R=0.55$ m is the coil radius, $B=1.1$ T points right. $\mu=NI\pi R^2=1.30\times10^3$ A·m² (points up). $\tau=\mu B=1.43\times10^3$ N·m, into the page, and $U=0$ since $\mu\perp B$. If $B$ points along $\mu$, $U=-\mu B$ and $\tau=0$.
4. **Square loop.** $L_1=L_2=0.45$ m are the loop's side lengths, $I=0.65$ A its current, $B=0.65$ T the field in the loop's plane. $\tau=IAB=0.0856$ N·m.
5. **Hall voltage.** $I=21$ A is the wire's current, $B=2.1$ T the field, $n=8.34\times10^{28}$ m⁻³ the free-electron density of copper, $d=2.588$ mm the wire's diameter (the width the voltage is measured across). $\varepsilon=4IB/(ne\pi d)=1.62\ \mu$V.

### HW 12.1 (fields from wires, forces between wires)
1. **Four wires on a square.** Each carries the same current and is the same distance from the center. Out-of-page wires on one side, into-page wires on the other, so $B$ at the center points **north**. Draw each wire's field at the center.
2. **Equilateral triangle, opposite currents.** $d=2.7$ cm is both the separation of the wires and the distance from each wire to P. $I_1=I_2=3.5$ A. Each wire alone gives $B_1=\mu_0I/2\pi d=2.59\times10^{-5}$ T. Two equal fields 120° apart sum to $B_1$, pointing up.
3. **Two perpendicular wires.** Both carry $I=4.5$ mA. $d_1=45$ cm and $d_2=5.5$ cm are distances from the points to the wires. All fields are along the page normal, so add them as signed numbers. Point A: $1.44\times10^{-8}$ T into. Point B: 0. Point C: $1.84\times10^{-8}$ T into.
4. **Parallel wires.** $d=0.091$ m is the separation, $I_1=0.312$ A and $I_2=0.683$ A are the currents. $f=\mu_0I_1I_2/2\pi d=4.68\times10^{-7}$ N/m, attractive. $w=(\mu_0I_1I_2/2\pi)\ln 2=2.95\times10^{-8}$ J/m is the minimum work per length to double the separation. The $\ln$ comes from $\int_d^{2d} dr/r$, where $r$ is the separation while you pull them apart.

## Common mistakes
- Dropping the sign when reversing the cross-product order.
- Mixing up the two right-hand rules (force versus field around a wire).
- Adding forces or fields as plain numbers when they point different ways. Use components, or signed numbers if all point along the page normal.
- Not converting cm or mm to m.
- Forgetting a negative charge flips the force.
- Using $\sin\theta$ with the wrong angle. In $\tau=\mu B\sin\theta$ it is the angle between $\vec\mu$ and $\vec B$, not between the plane and $\vec B$.
