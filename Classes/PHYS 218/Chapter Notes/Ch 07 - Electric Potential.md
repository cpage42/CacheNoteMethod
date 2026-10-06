---
class: "[[PHYS 218]]"
chapter: 7
textbook: "UPV2 Ch 7"
tags: [chapter-notes, electrostatics, electric-potential, potential-energy, equipotentials]
---
# Ch 7: Electric Potential
Class: [[PHYS 218]] · Previous: [[Ch 06 - Gauss's Law]] · Next: [[Ch 08 - Capacitance]] · Deeper: [[Physics Intuition - Ch 5-10#Ch 7: Electric potential]] · Drill: [[Flashcards - PHYS 218 Electrostatics (Ch 5-8)]] · Review: [[Exam 1 - Corrections]]

> [!abstract] The chapter in three lines
> The electric force is conservative, so charges have **potential energy** $U$. Dividing by the charge gives the **potential** $V = U/q$, a scalar that belongs to the source charges and adds without vectors. The field is the downhill slope of the potential, $E_x = -dV/dx$, and it always points from high $V$ to low $V$.

---

## 7.1 Electric potential energy
- The electric force is **conservative**: work done depends only on start and end points.
$$\Delta U = -W_{\text{field}} \qquad\qquad \boxed{U = \frac{kqQ}{r}} \quad (U \to 0 \text{ at } r = \infty)$$
- **Keep the signs** of $q$ and $Q$. Like charges: $U > 0$. Unlike: $U < 0$.
- Several charges: add $kq_iq_j/r_{ij}$ over **every pair**, once each.
- Energy conservation: $K_i + U_i = K_f + U_f$.

## 7.2 Electric potential and potential difference
$$\boxed{V = \frac{U}{q}} \qquad \Delta V = \frac{\Delta U}{q} \qquad (\text{V} = \text{J/C})$$
$$\boxed{\Delta V = V_B - V_A = -\int_A^B \vec E\cdot d\vec\ell}$$
- Only **differences** in $V$ are physical. You choose where $V = 0$ (usually infinity, or ground).
- **Uniform field** over a distance $d$ along the field: $\lvert\Delta V\rvert = Ed$. Moving **with** $\vec E$, $V$ drops.
- Positive charges fall to lower $V$. Negative charges (electrons) climb to higher $V$. Both lose $U$.
- **Electron-volt:** the energy one elementary charge gains across 1 V.
$$1\ \text{eV} = 1.602\times10^{-19}\ \text{J}$$

## 7.3 Calculations of electric potential
- **Point charges:** $V$ is a **scalar**. Just add, keeping signs. No components.
$$\boxed{V = \frac{kq}{r}} \qquad V_{net} = \sum_i \frac{kq_i}{r_i} \qquad V = \int \frac{k\,dq}{r}$$

| Source | Potential ($V = 0$ at infinity) |
|---|---|
| Point charge $q$ | $V = \dfrac{kq}{r}$ |
| Ring, radius $R$, charge $Q$, on axis at height $z$ | $V = \dfrac{kQ}{\sqrt{z^2 + R^2}}$ |
| Disk, radius $R$, density $\sigma$, on axis at height $z > 0$ | $V = 2\pi k\sigma\left(\sqrt{z^2 + R^2} - z\right)$ |
| Infinite line, density $\lambda$ (difference only) | $V_A - V_B = 2k\lambda\ln\dfrac{r_B}{r_A}$ |
| Conducting sphere, charge $Q$, radius $R$ | $V = \dfrac{kQ}{r}$ outside, $V = \dfrac{kQ}{R}$ everywhere inside |

- Infinite line (and plane) can't use $V = 0$ at infinity because the charge extends to infinity. Pick another reference.
- Every point on a ring is the same distance from an axis point, which is why the ring integral is easy. A disk is a stack of rings.

> [!check] Sanity checks
> Far away ($z \gg R$) the ring and disk both give $V \to kQ/z$, with $Q = \sigma\pi R^2$ for the disk. At the disk's center, $V = 2\pi k\sigma R$, finite and **not** zero, even though the on-axis field there is $\sigma/2\varepsilon_0$.

## 7.4 Determining field from potential
$$\boxed{E_x = -\frac{\partial V}{\partial x},\quad E_y = -\frac{\partial V}{\partial y},\quad E_z = -\frac{\partial V}{\partial z}} \qquad \vec E = -\nabla V$$
- Radial symmetry: $E_r = -dV/dr$. Check: $V = kq/r$ gives $E_r = kq/r^2$.
- **Disk on axis:** differentiate $V(z)$ to recover the Ch 5 result.
$$E_z = -\frac{dV}{dz} = 2\pi k\sigma\left(1 - \frac{z}{\sqrt{z^2 + R^2}}\right)$$
- $E$ = minus the **slope** of $V$. $V = 0$ at a point does not mean $E = 0$ there, and $E = 0$ does not mean $V = 0$.
- On a graph of $V(x)$: steep slope = strong field, flat = zero field, field points downhill.

> [!example] Reading $V(r)$ graphs (Exam 1 lost points here)
> Charged conducting sphere (or thin shell), radius $R$:
> - **Inside:** $V$ is **flat** at $kQ/R$, so $E = 0$.
> - **Outside:** $V = kQ/r$ falls off as $1/r$, so $E = kQ/r^2$.
> - $V$ is **continuous** at $r = R$ (no jump). $E$ **jumps** from 0 to $kQ/R^2$, because the slope of $V$ changes suddenly.

## 7.5 Equipotential surfaces and conductors
- **Equipotential:** a surface where $V$ is the same everywhere. Moving along it takes **no work**.
- $\vec E$ is always **perpendicular** to equipotentials and points toward lower $V$.
- Point charge: concentric spheres. Uniform field: flat planes perpendicular to $\vec E$.
- Closer spacing (for equal $\Delta V$ steps) = stronger field.
- **A conductor in equilibrium is an equipotential**, surface and inside. ($E = 0$ inside means no change in $V$.)
- **Charge piles up at sharp points.** Two connected spheres share one $V$, so $kQ_1/R_1 = kQ_2/R_2$, which gives $\sigma_1R_1 = \sigma_2R_2$. Small radius means large $\sigma$ and large $E = \sigma/\varepsilon_0$.
- That's why lightning rods are pointed and sharp edges spark (corona discharge).

## 7.6 Applications of electrostatics
- **Van de Graaff generator:** a belt carries charge to the inside of a metal dome. Charge moves to the outer surface, so the dome can reach very high $V$.
- **Xerography (photocopiers, laser printers):** light discharges parts of a charged drum. Toner sticks only to the charged image.
- **Inkjet printers** and **electrostatic precipitators** (smokestack filters): charge the drops or particles, then steer or collect them with a field.

---

## Formula sheet
| Idea | Formula |
|---|---|
| Potential energy, two charges | $U = kqQ/r$ |
| Potential definition | $V = U/q$, $\ \Delta U = q\Delta V$ |
| Potential from field | $\Delta V = -\int \vec E\cdot d\vec\ell$ |
| Uniform field | $\lvert\Delta V\rvert = Ed$ |
| Point charges | $V = \sum kq_i/r_i$ (scalar, keep signs) |
| Ring on axis | $V = kQ/\sqrt{z^2 + R^2}$ |
| Disk on axis | $V = 2\pi k\sigma(\sqrt{z^2 + R^2} - z)$ |
| Field from potential | $E_x = -\partial V/\partial x$, $\ \vec E = -\nabla V$ |
| Electron-volt | $1\ \text{eV} = 1.602\times10^{-19}$ J |

> [!warning] Watch out
> - $V$ is $kq/r$, not $kq/r^2$. And keep the **sign** of $q$: a negative charge makes negative $V$.
> - Add potentials as plain numbers. Add fields as vectors. Don't swap the two.
> - Inside a charged conductor $E = 0$ but $V$ is **not** zero. It equals the surface value.
> - The minus sign in $E = -dV/dx$ matters: the field points toward **decreasing** $V$.
> - $\Delta U = q\Delta V$. For an electron, $q = -e$, so a positive $\Delta V$ means $U$ goes **down**.
