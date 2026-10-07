---
class: "[[PHYS 218]]"
chapter: 9
textbook: "UPV2 Ch 9"
tags: [chapter-notes, circuits, current, resistance, power]
---
# Ch 9: Current and Resistance
Class: [[PHYS 218]] · Previous: [[Ch 08 - Capacitance]] · Next: [[Ch 10 - Direct-Current Circuits]] · Full review: [[Exam 2 Review - Ch 8-10]] · Deeper: [[Physics Intuition - Ch 5-10#Ch 9: Current and resistance]] · Drill: [[Flashcards - PHYS 218 Circuits (Ch 9-10)]]

> [!abstract] The chapter in three lines
> **Current** is the rate charge flows, carried by electrons drifting slowly through a wire. A material's **resistivity** and a wire's shape set its **resistance**, and for ohmic materials $V = IR$. Pushing current through resistance turns electrical energy into heat at a rate $P = IV$.

---

## 9.1 Electrical current
$$\boxed{I = \frac{dQ}{dt}} \qquad I_{ave} = \frac{\Delta Q}{\Delta t} \qquad 1\ \text{A} = 1\ \text{C/s}$$
- **Conventional current** points the way **positive** charge would move: out of the battery's $+$ terminal. Electrons in a metal actually move the other way.
- Charge from current: $Q = \int I\,dt$ (just $It$ if $I$ is constant). Number of electrons: $N = Q/e$.

## 9.2 Model of conduction in metals
- Free electrons move randomly and fast; a field adds a tiny average **drift velocity** $v_d$ (fractions of a mm/s).
$$\boxed{I = nqAv_d} \qquad \vec J = nq\vec v_d \qquad J = \frac{I}{A}, \quad I = \int\vec J\cdot d\vec A$$
- $n$ = carriers per m³ ($n_{Cu} = 8.47\times10^{28}\ \text{m}^{-3}$).
- Lights turn on instantly because the **field** travels down the wire at nearly light speed, not the electrons.

## 9.3 Resistivity and resistance
$$\vec E = \rho\vec J \qquad \sigma = \frac1\rho \qquad \boxed{R = \frac{\rho L}{A}}$$
- Longer wire, more $R$. Thicker wire, less $R$. Units: $\rho$ in Ω·m.
- **Odd shapes:** slice along the current and add the slices in series: $R = \int \rho\,d\ell/A(\ell)$.
- **Temperature** (metals get more resistive when hot):
$$\rho = \rho_0[1 + \alpha(T - T_0)], \qquad R = R_0[1 + \alpha(T - T_0)]$$

| Material | $\rho$ (Ω·m) | $\alpha$ (/°C) |
|---|---|---|
| Copper | $1.68\times10^{-8}$ | 0.0039 |
| Aluminum | $2.65\times10^{-8}$ | 0.0039 |
| Nichrome | $1.00\times10^{-6}$ | 0.0004 |
| Carbon | $3.5\times10^{-5}$ | $-0.0005$ |

## 9.4 Ohm's law
$$\boxed{V = IR} \qquad\qquad \vec J = \sigma\vec E \ \ (\text{microscopic form})$$
- **Ohmic:** $R$ is constant, so the $I$–$V$ graph is a straight line through the origin.
- **Nonohmic:** diodes (conduct one way), light bulb filaments ($R$ rises as they heat).

## 9.5 Electrical energy and power
$$\boxed{P = IV = I^2R = \frac{V^2}{R}} \qquad E = Pt \qquad 1\ \text{kWh} = 3.6\times10^6\ \text{J}$$
- Use $I^2R$ when current is shared (series), $V^2/R$ when voltage is shared (parallel).
- A rating like "60 W, 120 V" gives $R = V^2/P$.
- **Transmission lines:** loss $= I^2R_{line} = (P/V)^2R_{line}$, so high voltage means low loss.

## 9.6 Superconductors
- Below a **critical temperature** $T_c$: resistance exactly **zero**, and magnetic fields are expelled (**Meissner effect**).
- Good conductors (Cu, Ag, Au) don't superconduct. "High-$T_c$" ceramics work above 77 K (liquid nitrogen).
- Uses: MRI magnets, maglev trains, SQUIDs.

---

## Formula sheet
| Idea | Formula |
|---|---|
| Current | $I = dQ/dt$ |
| Drift velocity | $I = nqAv_d$, $\ J = I/A = nqv_d$ |
| Microscopic Ohm | $\vec J = \sigma\vec E$, $\ \sigma = 1/\rho$ |
| Resistance | $R = \rho L/A$ |
| Temperature | $R = R_0[1 + \alpha\Delta T]$ |
| Ohm's law | $V = IR$ |
| Power | $P = IV = I^2R = V^2/R$ |
| Energy | $E = Pt$, $\ 1\text{ kWh} = 3.6\times10^6$ J |

> [!warning] Watch out
> - Radius, not diameter, in $A = \pi r^2$. Convert mm to m first (mm² → m² is $\times10^{-6}$).
> - In $P = V^2/R$, the $V$ and $R$ must belong to the **same** resistor.
> - Drift speed is tiny, but the signal is fast. Don't confuse the two.
