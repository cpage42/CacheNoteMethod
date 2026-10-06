---
class: "[[PHYS 218]]"
chapter: 6
textbook: "UPV2 Ch 6"
tags: [chapter-notes, electrostatics, gauss-law, electric-flux, conductors]
---
# Ch 6: Gauss's Law
Class: [[PHYS 218]] · Previous: [[Ch 05 - Electric Charges and Fields]] · Next: [[Ch 07 - Electric Potential]] · Deeper: [[Physics Intuition - Ch 5-10#Ch 6: Gauss's law]] · Drill: [[Flashcards - PHYS 218 Electrostatics (Ch 5-8)]]

> [!abstract] The chapter in three lines
> **Electric flux** counts how much field pokes through a surface. **Gauss's law** says the flux out of any closed surface depends only on the charge inside, $\Phi = q_{enc}/\varepsilon_0$. With enough symmetry that turns a hard integral into one line of algebra, and it explains why a conductor's charge sits on its surface.

---

## 6.1 Electric flux
- Flux = field times the area it crosses, counting only the **perpendicular** part.
- Area vector $\vec A$ points **perpendicular** to the surface. For a closed surface it points **outward**.
$$\boxed{\Phi = \int \vec E\cdot d\vec A} \qquad \text{uniform } \vec E,\ \text{flat surface: } \Phi = EA\cos\theta \qquad (\text{N·m}^2/\text{C})$$
- $\theta$ is the angle between $\vec E$ and $\vec A$ (the normal), not between $\vec E$ and the surface.
- Field leaving a closed surface: **positive** flux. Field entering: **negative**.
- Field parallel to a surface ($\theta = 90°$): **zero** flux through it.

## 6.2 Explaining Gauss's law
$$\boxed{\Phi = \oint \vec E\cdot d\vec A = \frac{q_{enc}}{\varepsilon_0}}$$
- True for **any** closed surface (a "Gaussian surface") and any charges. It's Coulomb's law repackaged.
- Only charge **inside** counts. Charges outside send in as much flux as they send out, so their net flux is 0.
- The flux doesn't depend on the surface's shape or size, only on $q_{enc}$.
- Careful: charges outside still change $\vec E$ on the surface. They just don't change the **total** flux.

## 6.3 Applying Gauss's law
Gauss's law always holds, but it only gives you $E$ when symmetry makes $E$ constant over the surface.

> [!tip] Recipe for Gauss's law problems
> 1. Identify the symmetry: **spherical**, **cylindrical**, or **planar**.
> 2. Pick a Gaussian surface that matches it (sphere, coaxial cylinder, pillbox) and passes through the point you want.
> 3. On each piece of the surface, $\vec E$ is either **parallel to $d\vec A$ and constant** (flux $= EA$) or **perpendicular** (flux $= 0$).
> 4. Find $q_{enc}$: use $\lambda L$, $\sigma A$, or $\rho V$ for the part **inside** the surface only.
> 5. Set $E \cdot A_{\text{piece}} = q_{enc}/\varepsilon_0$ and solve for $E$.

| Charge distribution | Gaussian surface | Field |
|---|---|---|
| Point charge or anything spherical, outside ($r > R$) | Sphere | $E = \dfrac{kQ}{r^2} = \dfrac{Q}{4\pi\varepsilon_0 r^2}$ |
| Thin spherical shell, inside ($r < R$) | Sphere | $E = 0$ |
| Uniform solid ball, inside ($r < R$) | Sphere | $E = \dfrac{kQr}{R^3} = \dfrac{\rho r}{3\varepsilon_0}$ |
| Infinite line, density $\lambda$ | Coaxial cylinder | $E = \dfrac{\lambda}{2\pi\varepsilon_0 r} = \dfrac{2k\lambda}{r}$ |
| Uniform solid cylinder, inside ($r < R$) | Coaxial cylinder | $E = \dfrac{\rho r}{2\varepsilon_0}$ |
| Uniform solid cylinder, outside ($r > R$) | Coaxial cylinder | $E = \dfrac{\lambda}{2\pi\varepsilon_0 r}$, with $\lambda = \rho\pi R^2$ |
| Infinite plane, density $\sigma$ | Pillbox through the plane | $E = \dfrac{\sigma}{2\varepsilon_0}$ |

> [!check] Sanity checks
> Inside a solid ball, $E$ grows linearly from 0 at the center to $kQ/R^2$ at the surface, then falls as $1/r^2$. The inside and outside formulas must agree at $r = R$.

## 6.4 Conductors in electrostatic equilibrium
- **$E = 0$ inside** the conducting material. Otherwise free electrons would still be moving.
- Any **excess charge sits on the outer surface**. (Gaussian surface just inside the metal: $E = 0$, so $q_{enc} = 0$.)
- Just outside, $\vec E$ is **perpendicular** to the surface:
$$\boxed{E = \frac{\sigma}{\varepsilon_0}} \qquad \text{(just outside a conductor)}$$
- **Cavity with a charge $q$ inside:** the inner wall gets $-q$, and the outer surface gets $+q$ plus whatever net charge the conductor had.
- **Empty cavity:** $E = 0$ in it, with no charge on the inner wall. This is shielding (a Faraday cage).

---

## Formula sheet
| Idea | Formula |
|---|---|
| Flux (general) | $\Phi = \int \vec E\cdot d\vec A$ |
| Flux (uniform, flat) | $\Phi = EA\cos\theta$ |
| Gauss's law | $\oint \vec E\cdot d\vec A = q_{enc}/\varepsilon_0$ |
| Spherical, outside | $E = kQ/r^2$ |
| Solid ball, inside | $E = kQr/R^3$ |
| Infinite line | $E = \lambda/2\pi\varepsilon_0 r$ |
| Infinite plane | $E = \sigma/2\varepsilon_0$ |
| Just outside a conductor | $E = \sigma/\varepsilon_0$ |

> [!warning] Watch out
> - Plane of charge: $\sigma/2\varepsilon_0$. Surface of a conductor: $\sigma/\varepsilon_0$. Different situations, don't mix them up.
> - $q_{enc}$ is only the charge **inside** the Gaussian surface. For a solid ball at $r < R$ that's $Q r^3/R^3$, not $Q$.
> - Zero net flux does **not** mean $E = 0$ on the surface. It means as much flux enters as leaves.
> - Gauss's law can't give you $E$ for a finite line, a disk, or a cube. Not enough symmetry. Use the Ch 5 integrals.
