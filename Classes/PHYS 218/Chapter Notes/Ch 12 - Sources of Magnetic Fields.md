---
class: "[[PHYS 218]]"
chapter: 12
textbook: "UPV2 Ch 12"
tags: [chapter-notes, magnetism, biot-savart, ampere]
---
# Ch 12: Sources of Magnetic Fields
Class: [[PHYS 218]] · Previous: [[Ch 11 - Magnetic Forces and Fields]] · Next: [[Ch 13 - Electromagnetic Induction]]

> [!abstract] The chapter in three lines
> Currents make magnetic fields. The **Biot-Savart law** adds up the field from every piece of current, like Coulomb's law for $\vec B$. When the current has enough symmetry, **Ampère's law** $\oint\vec B\cdot d\vec l = \mu_0 I_{enc}$ gets the answer in one line, which gives the long wire, solenoid and toroid.

---

## 12.1 The Biot-Savart law
$$\boxed{d\vec B = \frac{\mu_0}{4\pi}\frac{I\,d\vec l\times\hat r}{r^2}} \qquad \mu_0 = 4\pi\times10^{-7}\ \text{T·m/A}$$
- $d\vec l$ points along the current. $\hat r$ points **from the current element to the field point**.
- Magnitude: $dB = \dfrac{\mu_0}{4\pi}\dfrac{I\,dl\sin\theta}{r^2}$. Zero straight ahead of or behind the element.
- Same recipe as charge distributions: chop, find $d\vec B$, use symmetry to cancel components, integrate.

## 12.2 Magnetic field due to a thin straight wire
- **Infinite (long) wire**, distance $R$:
$$\boxed{B = \frac{\mu_0 I}{2\pi R}}$$
- **Finite segment:** $B = \dfrac{\mu_0 I}{4\pi R}(\sin\theta_2 - \sin\theta_1)$, angles measured from the perpendicular to the ends of the wire.
- Field lines are **circles** around the wire.
- **Right-hand rule 2 (RHR-2):** thumb along the current, fingers curl in the direction of $\vec B$.

## 12.3 Magnetic force between two parallel currents
- Wire 1 makes a field at wire 2; wire 2 feels $\vec F = I_2\vec L\times\vec B_1$.
$$\boxed{\frac{F}{l} = \frac{\mu_0 I_1 I_2}{2\pi r}}$$
- **Same direction: attract. Opposite: repel.** (Opposite of charges.)
- Historical ampere definition: 1 A each, 1 m apart, gives $2\times10^{-7}$ N per meter.

## 12.4 Magnetic field of a current loop
- Loop of radius $R$, on its axis at distance $y$ from the center:
$$B = \frac{\mu_0 I R^2}{2(y^2 + R^2)^{3/2}}$$
- At the **center** ($y = 0$), $N$ turns:
$$\boxed{B = \frac{\mu_0 N I}{2R}}$$
- Arc of angle $\theta$ (radians), at its center: $B = \dfrac{\mu_0 I\theta}{4\pi R}$.
- Far away ($y \gg R$) a loop is a magnetic dipole: $B \approx \dfrac{\mu_0\mu}{2\pi y^3}$ with $\mu = I\pi R^2$.
- Direction: curl fingers with the current, thumb gives $\vec B$ at the center (same as $\vec\mu$).

## 12.5 Ampère's law
$$\boxed{\oint\vec B\cdot d\vec l = \mu_0 I_{enc}}$$
- **Recipe:**
  1. Use symmetry to guess the shape of $\vec B$ (circles around a wire, straight lines inside a solenoid).
  2. Pick an **Amperian loop** where $\vec B$ is parallel to $d\vec l$ and constant in size, or perpendicular to it.
  3. Left side becomes $B \times (\text{length})$.
  4. Count $I_{enc}$ through the loop. Sign: curl fingers along the loop direction; current along the thumb is positive.
  5. Solve for $B$.
- Inside a long wire of radius $R$ with uniform current: $B = \dfrac{\mu_0 I r}{2\pi R^2}$ (grows linearly). Outside: $\mu_0 I/(2\pi r)$.
- Always true, but only **useful** with high symmetry. Otherwise use Biot-Savart.

## 12.6 Solenoids and toroids
- **Solenoid** (long, $n = N/l$ turns per meter): uniform field inside, about zero outside.
$$\boxed{B = \mu_0 n I}$$
- **Toroid** ($N$ total turns, radius $r$ from the center): field only inside the windings, falls with $r$.
$$\boxed{B = \frac{\mu_0 N I}{2\pi r}}$$
- Direction inside a solenoid: curl fingers with the current, thumb points along $\vec B$ (the N end).

| Source | Field |
|---|---|
| Long straight wire, distance $R$ | $B = \dfrac{\mu_0 I}{2\pi R}$ |
| Inside a uniform wire, $r < R$ | $B = \dfrac{\mu_0 I r}{2\pi R^2}$ |
| Center of loop, $N$ turns | $B = \dfrac{\mu_0 N I}{2R}$ |
| Axis of loop, height $y$ | $B = \dfrac{\mu_0 I R^2}{2(y^2+R^2)^{3/2}}$ |
| Inside long solenoid | $B = \mu_0 n I$ |
| Inside toroid | $B = \dfrac{\mu_0 N I}{2\pi r}$ |

> [!check] Sanity checks
> Set $y = 0$ in the axis formula and you get the center result $\mu_0 I/(2R)$. Make $r$ huge in a toroid and it looks like a straight solenoid: $N/(2\pi r) = n$.

## 12.7 Magnetism in matter
- Electron orbits and spins give atoms magnetic moments. A material's response is described by **susceptibility** $\chi$:
$$\mu = (1+\chi)\mu_0, \qquad B = (1+\chi)B_0$$

| Type | $\chi$ | Behavior |
|---|---|---|
| Paramagnetic | small, positive ($\sim10^{-5}$) | weakly attracted, moments partly align |
| Diamagnetic | small, negative | weakly repelled, induced moments oppose $\vec B$ |
| Ferromagnetic | huge ($10^3$ or more) | strongly attracted, **domains** align, can stay magnetized |

- Ferromagnets show **hysteresis** (magnetization depends on history) and lose it above the **Curie temperature**.
- Solenoid with an iron core: replace $\mu_0$ with $\mu$, so $B = \mu n I$.

---

## Formula sheet
| Idea | Formula |
|---|---|
| Permeability of free space | $\mu_0 = 4\pi\times10^{-7}$ T·m/A |
| Biot-Savart | $d\vec B = \dfrac{\mu_0}{4\pi}\dfrac{I\,d\vec l\times\hat r}{r^2}$ |
| Long wire | $B = \mu_0 I/(2\pi R)$ |
| Parallel wires | $F/l = \mu_0 I_1I_2/(2\pi r)$ |
| Loop center / axis | $B = \mu_0 NI/(2R)$ $\ /\ $ $B = \mu_0 IR^2/[2(y^2+R^2)^{3/2}]$ |
| Ampère's law | $\oint\vec B\cdot d\vec l = \mu_0 I_{enc}$ |
| Solenoid / toroid | $B = \mu_0 nI$ $\ /\ $ $B = \mu_0 NI/(2\pi r)$ |
| Material | $\mu = (1+\chi)\mu_0$ |

| Right-hand rule | Thumb | Fingers curl |
|---|---|---|
| Straight wire (RHR-2) | current | $\vec B$ circles |
| Loop or solenoid | $\vec B$ inside (and $\vec\mu$) | current |

> [!warning] Watch out
> - Wire vs. loop: $\mu_0 I/(2\pi R)$ vs. $\mu_0 I/(2R)$. The loop has no $\pi$.
> - Solenoid uses $n$ (turns per **meter**), toroid uses $N$ (total turns).
> - Parallel currents **attract**. Don't carry over "like repels" from charges.
> - In Ampère's law, only current **through** the loop counts. Current outside still makes field, it just integrates to zero.
