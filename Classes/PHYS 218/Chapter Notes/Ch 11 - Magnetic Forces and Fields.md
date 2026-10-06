---
class: "[[PHYS 218]]"
chapter: 11
textbook: "UPV2 Ch 11"
tags: [chapter-notes, magnetism, magnetic-force, magnetic-field]
---
# Ch 11: Magnetic Forces and Fields
Class: [[PHYS 218]] · Previous: [[Ch 10 - Direct-Current Circuits]] · Next: [[Ch 12 - Sources of Magnetic Fields]]

> [!abstract] The chapter in three lines
> A magnetic field pushes only on **moving** charge, sideways: $\vec F = q\vec v\times\vec B$. Because the force is always perpendicular to $\vec v$, it bends paths into **circles** and does **no work**. The same force on a current gives $\vec F = I\vec L\times\vec B$ on wires and a **torque** $\vec\tau = \vec\mu\times\vec B$ on loops, which is how motors work.

---

## 11.1 Magnetism and its historical discoveries
- Magnets have **north** and **south** poles. Like poles repel, unlike attract.
- **No magnetic monopoles:** cut a magnet in half and you get two smaller magnets, each with N and S.
- Oersted (1820): a current deflects a compass. **Moving charge makes magnetic fields.**
- Earth's geographic North Pole is near a magnetic **south** pole (that's why a compass's N end points there).

## 11.2 Magnetic fields and lines
$$\boxed{\vec F = q\vec v\times\vec B} \qquad F = qvB\sin\theta$$
- Unit: **tesla**, $1\ \text{T} = 1\ \text{N/(A·m)}$. Also gauss: $1\ \text{G} = 10^{-4}$ T. Earth's field is about $0.5$ G.
- Force is **zero** if the charge is at rest or moves parallel to $\vec B$. Maximum when $\vec v\perp\vec B$.
- $\vec F\perp\vec v$ always, so **the magnetic force does no work** and can't change speed or kinetic energy.
- **Right-hand rule 1 (RHR-1):** fingers along $\vec v$, curl toward $\vec B$ (or palm faces $\vec B$), thumb gives $\vec F$ on a **positive** charge. Flip it for a negative charge.
- **Field lines:** leave N, enter S outside the magnet, and form **closed loops** (no start or end). Denser lines = stronger field.
- Drawing convention: $\odot$ = out of the page, $\otimes$ = into the page.

## 11.3 Motion of a charged particle in a magnetic field
- $\vec v\perp\vec B$ (uniform field): uniform **circular motion**. Set $qvB = mv^2/r$.

| Quantity | Formula | Note |
|---|---|---|
| Radius | $r = \dfrac{mv}{qB}$ | faster or heavier = bigger circle |
| Period | $T = \dfrac{2\pi m}{qB}$ | independent of speed |
| Frequency (cyclotron) | $f = \dfrac{qB}{2\pi m}$ | independent of speed |
| Angular frequency | $\omega = \dfrac{qB}{m}$ | |

- $\vec v$ at an angle to $\vec B$: split it. $v_\perp$ makes a circle, $v_\parallel$ carries it along $\vec B$. Result is a **helix** with pitch $p = v_\parallel T$.
- Use $v_\perp$ in $r = mv_\perp/(qB)$.
- Non-uniform fields can trap particles (magnetic bottles, Van Allen belts, aurora).

## 11.4 Magnetic force on a current-carrying conductor
$$\boxed{\vec F = I\vec L\times\vec B} \qquad F = ILB\sin\theta$$
- $\vec L$ points along the wire in the direction of **conventional current**.
- Curved wire or non-uniform field: integrate $d\vec F = I\,d\vec l\times\vec B$.
- Any **closed loop** in a **uniform** field feels zero net force. A curved wire between two points feels the same force as a straight wire between those points.

## 11.5 Force and torque on a current loop
- Uniform field: net force is zero, but there is a **torque** that rotates the loop.
$$\boxed{\vec\tau = \vec\mu\times\vec B} \qquad \vec\mu = NI\vec A \qquad \tau = NIAB\sin\theta$$
- **Magnetic dipole moment** $\vec\mu$: curl right-hand fingers along the current, thumb points along $\vec\mu$ (normal to the loop). Units A·m².
- $\theta$ is between $\vec\mu$ and $\vec B$ (the **normal**, not the plane of the loop).
- Potential energy:
$$U = -\vec\mu\cdot\vec B = -\mu B\cos\theta$$
- Lowest energy when $\vec\mu$ lines up with $\vec B$. Same structure as the electric dipole, $\vec\tau = \vec p\times\vec E$.

## 11.6 The Hall effect
- Current through a strip in a perpendicular $\vec B$: carriers get pushed to one edge, building a sideways $\vec E$ until the forces balance, $qE = qv_dB$.
$$\boxed{V_H = v_d B\,l = \frac{IB\,l}{nqA} = \frac{IB}{nqt}}$$
- $l$ = width (across which $V_H$ is measured), $t$ = thickness along $\vec B$, $A = lt$, $n$ = carrier density.
- The **sign** of $V_H$ tells you the sign of the carriers. Used in Hall probes to measure $B$.

## 11.7 Applications of magnetic forces and fields
- **Velocity selector:** crossed $\vec E$ and $\vec B$. Particles go straight when $qE = qvB$:
$$v = \frac{E}{B}$$
- **Mass spectrometer:** selector, then a second field $B_0$ bends ions into circles. Heavier ions make bigger circles:
$$\frac{m}{q} = \frac{B_0 r}{v} = \frac{B B_0 r}{E}$$
- **Cyclotron:** two D-shaped electrodes in a field. The voltage flips at $f = qB/(2\pi m)$, which stays fixed as the particle speeds up. Exit energy at radius $R$:
$$K_{max} = \frac{q^2B^2R^2}{2m}$$

---

## Formula sheet
| Idea | Formula |
|---|---|
| Force on a charge | $\vec F = q\vec v\times\vec B$, $\ F = qvB\sin\theta$ |
| Circular motion | $r = mv/(qB)$, $\ T = 2\pi m/(qB)$, $\ \omega = qB/m$ |
| Helix pitch | $p = v_\parallel T$ |
| Force on a wire | $\vec F = I\vec L\times\vec B$ |
| Dipole moment | $\vec\mu = NI\vec A$ |
| Torque / energy | $\vec\tau = \vec\mu\times\vec B$, $\ U = -\vec\mu\cdot\vec B$ |
| Hall voltage | $V_H = v_dBl = IB/(nqt)$ |
| Velocity selector | $v = E/B$ |
| Cyclotron | $f = qB/(2\pi m)$, $\ K_{max} = q^2B^2R^2/(2m)$ |

| Right-hand rule | Fingers | Curl / palm | Thumb |
|---|---|---|---|
| Force on $+q$ (RHR-1) | $\vec v$ | toward $\vec B$ | $\vec F$ |
| Force on a wire | $\vec L$ (current) | toward $\vec B$ | $\vec F$ |
| Loop moment | curl with current | | $\vec\mu$ |

> [!warning] Watch out
> - Electrons: use RHR-1, then **reverse** the force.
> - The magnetic force never changes speed. If a problem says the particle speeds up, an electric field is doing it.
> - In $\tau = NIAB\sin\theta$, $\theta$ is measured from the loop's **normal**. Field in the plane of the loop gives **maximum** torque.
> - $\vec v\times\vec B$ is not $\vec B\times\vec v$. Order matters.
