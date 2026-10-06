---
class: "[[PHYS 218]]"
chapter: 8
textbook: "UPV2 Ch 8"
tags: [chapter-notes, electrostatics, capacitance, capacitors, dielectrics]
---
# Ch 8: Capacitance
Class: [[PHYS 218]] · Previous: [[Ch 07 - Electric Potential]] · Next: [[Ch 09 - Current and Resistance]] · Deeper: [[Physics Intuition - Ch 5-10#Ch 8: Capacitance]] · Drill: [[Flashcards - PHYS 218 Electrostatics (Ch 5-8)]]

> [!abstract] The chapter in three lines
> A **capacitor** is two conductors holding $+Q$ and $-Q$. Its **capacitance** $C = Q/V$ depends only on geometry, and it stores energy $\tfrac12 CV^2$ in the field between the plates. Filling the gap with a **dielectric** multiplies $C$ by $\kappa$.

---

## 8.1 Capacitors and capacitance
$$\boxed{C = \frac{Q}{V}} \qquad (\text{F} = \text{C/V})$$
- $Q$ is the charge on **one** plate (magnitude). $V$ is the potential difference between the plates.
- $C$ depends only on **shape, size, spacing** (and the material between). Not on $Q$ or $V$.
- A farad is huge. Real capacitors are $\mu$F, nF, pF.

> [!tip] Recipe for computing capacitance
> 1. Put $+Q$ on one conductor and $-Q$ on the other.
> 2. Find $E$ between them, usually with Gauss's law.
> 3. Integrate to get the potential difference, $V = \int E\,d\ell$ from one conductor to the other.
> 4. $C = Q/V$. The $Q$ must cancel. If it doesn't, something went wrong.

| Capacitor | Capacitance |
|---|---|
| Parallel plates, area $A$, gap $d$ | $C = \dfrac{\varepsilon_0 A}{d}$ |
| Spherical, radii $R_1 < R_2$ | $C = 4\pi\varepsilon_0\dfrac{R_1R_2}{R_2 - R_1}$ |
| Cylindrical, length $L$, radii $R_1 < R_2$ | $C = \dfrac{2\pi\varepsilon_0 L}{\ln(R_2/R_1)}$ |
| Isolated sphere, radius $R$ (other "plate" at infinity) | $C = 4\pi\varepsilon_0 R$ |

> [!check] Sanity checks
> Spherical with $R_2 \to \infty$ gives the isolated sphere, $4\pi\varepsilon_0R_1$. Spherical with a tiny gap $d = R_2 - R_1$ gives $\varepsilon_0(4\pi R^2)/d$, the parallel-plate result.

## 8.2 Capacitors in series and in parallel
| | Series | Parallel |
|---|---|---|
| Same on each | Charge $Q$ | Voltage $V$ |
| Adds up | $V = V_1 + V_2 + \cdots$ | $Q = Q_1 + Q_2 + \cdots$ |
| Equivalent | $\dfrac{1}{C_S} = \dfrac{1}{C_1} + \dfrac{1}{C_2} + \cdots$ | $C_P = C_1 + C_2 + \cdots$ |
| Result | $C_S$ smaller than the smallest | $C_P$ larger than the largest |

- Two in series: $C_S = \dfrac{C_1C_2}{C_1 + C_2}$.
- Combinations: collapse the innermost series or parallel group first, then work outward. Go back in to find each $Q$ and $V$.
- (Opposite of resistors, which add in series.)

## 8.3 Energy stored in a capacitor
$$\boxed{U_C = \frac{Q^2}{2C} = \frac12 CV^2 = \frac12 QV}$$
- It's $\tfrac12 QV$, not $QV$, because $V$ builds from 0 as the capacitor charges.
- The energy lives in the **field**. Energy density in vacuum:
$$\boxed{u_E = \frac12\varepsilon_0E^2} \qquad (\text{J/m}^3)$$
- Pick the form that uses what stays **fixed**: $Q^2/2C$ when isolated, $\tfrac12CV^2$ when connected to a battery.

## 8.4 Capacitor with a dielectric
$$\boxed{C = \kappa C_0} \qquad \kappa \ge 1 \ (\kappa = 1 \text{ for vacuum, about } 1 \text{ for air})$$

| Quantity | $Q$ fixed (battery disconnected) | $V$ fixed (battery connected) |
|---|---|---|
| Capacitance | $C = \kappa C_0$ | $C = \kappa C_0$ |
| Charge | $Q_0$ (same) | $\kappa Q_0$ |
| Voltage | $V_0/\kappa$ | $V_0$ (same) |
| Field between plates | $E_0/\kappa$ | $E_0$ (same, $E = V/d$) |
| Energy | $U_0/\kappa$ | $\kappa U_0$ |

- First ask: **is the battery still connected?** That decides what stays fixed.

## 8.5 Molecular model of a dielectric
- The field **polarizes** the molecules (lines up polar molecules, or stretches nonpolar ones into dipoles).
- That leaves an **induced surface charge** on the dielectric faces, opposite in sign to the nearby plate. It partly cancels the field:
$$E = \frac{E_0}{\kappa} \qquad Q_i = \left(1 - \frac1\kappa\right)Q$$
- Inside the dielectric, replace $\varepsilon_0$ with the **permittivity** $\varepsilon = \kappa\varepsilon_0$. So $C = \kappa\varepsilon_0A/d$ and $u_E = \tfrac12\kappa\varepsilon_0E^2$.
- **Dielectric strength:** the largest field a material can take before it breaks down and conducts. Air: about $3\times10^6$ V/m.

---

## Formula sheet
| Idea | Formula |
|---|---|
| Capacitance | $C = Q/V$ |
| Parallel plate | $C = \varepsilon_0A/d$ |
| Spherical / isolated sphere | $C = 4\pi\varepsilon_0R_1R_2/(R_2 - R_1)$ $\ /\ $ $C = 4\pi\varepsilon_0R$ |
| Cylindrical | $C = 2\pi\varepsilon_0L/\ln(R_2/R_1)$ |
| Series / parallel | $1/C_S = \sum 1/C_i$ $\ /\ $ $C_P = \sum C_i$ |
| Stored energy | $U = Q^2/2C = \tfrac12CV^2 = \tfrac12QV$ |
| Energy density | $u_E = \tfrac12\varepsilon_0E^2$ |
| Dielectric | $C = \kappa C_0$, $\ \varepsilon = \kappa\varepsilon_0$ |

> [!warning] Watch out
> - Series capacitors share **charge**, parallel ones share **voltage**. Backwards from resistors for the combining rules.
> - $C$ doesn't change when you change $Q$ or $V$. Only geometry and $\kappa$ change it.
> - Dielectric problems: decide first whether $Q$ or $V$ is fixed. The energy goes **down** by $\kappa$ in one case and **up** by $\kappa$ in the other.
> - $Q$ is the charge on one plate. The capacitor's total charge is zero.
