---
class: "[[PHYS 218]]"
chapter: 5
textbook: "UPV2 Ch 5"
tags: [chapter-notes, electrostatics, coulomb, electric-field]
---
# Ch 5: Electric Charges and Fields
Class: [[PHYS 218]] · Next: [[Ch 06 - Gauss's Law]] · Deeper: [[Physics Intuition - Ch 5-10#Ch 5: Charges and fields]] · Drill: [[Flashcards - PHYS 218 Electrostatics (Ch 5-8)]]

> [!abstract] The chapter in three lines
> Charge comes in two signs and is conserved. Point charges push and pull with **Coulomb's law**, $F \propto q_1q_2/r^2$. The **electric field** $\vec E = \vec F/q$ describes that push at every point, and fields from many charges simply **add as vectors**.

---

## 5.1 Electric charge
- Two kinds: **positive** and **negative**. Like charges repel, unlike attract.
- **Quantized:** every charge is a whole number of elementary charges, $q = ne$, with $e = 1.602\times10^{-19}$ C.
- **Conserved:** charge moves around but is never created or destroyed in total.
- Protons carry $+e$, electrons $-e$. Objects get charged by gaining or losing **electrons**.

## 5.2 Conductors, insulators, charging by induction
- **Conductors** (metals) have free electrons that move easily. **Insulators** (glass, plastic) hold charge in place.
- **Polarization:** a nearby charge shifts a neutral object's charges, so the near side gets the opposite sign. That's why a charged object attracts a neutral one.
- **Charging by induction:** bring a charge near a conductor, ground the far side, remove the ground, then remove the charge. The conductor keeps the **opposite** charge, without ever touching.

## 5.3 Coulomb's law
$$\boxed{F = k\frac{|q_1 q_2|}{r^2}} \qquad k = \frac{1}{4\pi\varepsilon_0} = 8.99\times10^{9}\ \frac{\text{N·m}^2}{\text{C}^2}, \qquad \varepsilon_0 = 8.85\times10^{-12}\ \frac{\text{C}^2}{\text{N·m}^2}$$
- Points along the line joining the charges. Get the **magnitude** from the formula and the **direction** from attract/repel.
- **Several charges:** add the force vectors (superposition). Break them into $x$ and $y$ components.
$$\vec F_{net} = \vec F_1 + \vec F_2 + \cdots$$

## 5.4 Electric field
$$\boxed{\vec E = \frac{\vec F}{q}} \qquad\Longleftrightarrow\qquad \vec F = q\vec E \qquad (\text{N/C} = \text{V/m})$$
- The field belongs to the **source** charges. A test charge just feels it.
- **Point charge:**
$$E = \frac{k|q|}{r^2} \quad\text{(away from } +\text{, toward } -\text{)}$$
- A negative charge in a field feels a force **opposite** to $\vec E$.

## 5.5 Fields of charge distributions
Chop the object into pieces $dq$, add their fields with an integral, and **use symmetry** to cancel components first.
$$d\vec E = \frac{k\,dq}{r^2}\hat r, \qquad dq = \lambda\,d\ell \ (\text{line}),\quad \sigma\,dA \ (\text{surface}),\quad \rho\,dV \ (\text{volume})$$

| Shape (on its axis or nearby) | Field |
|---|---|
| Ring, radius $R$, charge $Q$, at height $z$ | $E = \dfrac{kQz}{(z^2 + R^2)^{3/2}}$ |
| Disk, radius $R$, density $\sigma$, at height $z$ | $E = 2\pi k\sigma\left(1 - \dfrac{z}{\sqrt{z^2 + R^2}}\right)$ |
| Line segment, length $L$, above its middle | $E = \dfrac{k\lambda L}{z\sqrt{z^2 + L^2/4}}$ |
| Infinite line | $E = \dfrac{2k\lambda}{r} = \dfrac{\lambda}{2\pi\varepsilon_0 r}$ |
| Infinite plane | $E = \dfrac{\sigma}{2\varepsilon_0}$ (same at every distance) |
| Two opposite plates | $E = \dfrac{\sigma}{\varepsilon_0}$ between, 0 outside |

> [!check] Sanity checks
> Far away ($z \gg R$), every finite shape must look like a point charge: $E \to kQ/z^2$. At the center of a ring, $E = 0$.

## 5.6 Electric field lines
- Start on $+$, end on $-$ (or at infinity). Never cross.
- **Denser lines = stronger field.** The number of lines is proportional to the charge.
- The field at a point is **tangent** to the line through it.

## 5.7 Electric dipoles
- Equal and opposite charges $\pm q$ a distance $d$ apart. **Dipole moment** points from $-$ to $+$:
$$\vec p = q\vec d$$
- In a uniform field: **no net force**, but a **torque** that lines it up with the field.
$$\vec\tau = \vec p\times\vec E, \qquad U = -\vec p\cdot\vec E$$
- Far away the field falls as $1/r^3$ (the two charges nearly cancel). On the axis: $E \approx 2kp/r^3$.

---

## Formula sheet
| Idea | Formula |
|---|---|
| Quantization | $q = ne$ |
| Coulomb's law | $F = k\lvert q_1q_2\rvert/r^2$ |
| Field definition | $\vec E = \vec F/q$, $\ \vec F = q\vec E$ |
| Point charge field | $E = k\lvert q\rvert/r^2$ |
| Continuous charge | $d\vec E = k\,dq\,\hat r/r^2$ |
| Infinite line / plane | $E = 2k\lambda/r$ $\ /\ $ $E = \sigma/2\varepsilon_0$ |
| Dipole | $\vec p = q\vec d$, $\ \vec\tau = \vec p\times\vec E$, $\ U = -\vec p\cdot\vec E$ |

> [!warning] Watch out
> - Square the **distance**, not the charge. And it's the distance between the two charges, not from the origin.
> - Add forces and fields as **vectors**. Never add magnitudes when they point different ways.
> - $k\lvert q_1q_2\rvert/r^2$ gives a magnitude. Choose the direction from attract/repel.
