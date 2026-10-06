---
class: "[[PHYS 218]]"
chapter: 16
textbook: "UPV2 Ch 16"
tags: [chapter-notes, maxwell-equations, em-waves, radiation-pressure, em-spectrum]
---
# Ch 16: Electromagnetic Waves
Class: [[PHYS 218]] · Previous: [[Ch 15 - Alternating-Current Circuits]]

> [!abstract] The chapter in three lines
> Maxwell added the **displacement current** to Ampère's law, and the four equations then predict self-sustaining waves of $\vec E$ and $\vec B$ moving at $c = 1/\sqrt{\mu_0\varepsilon_0}$. In those waves $E = cB$, both fields are perpendicular to each other and to the motion, and the wave carries **energy** and **momentum**. Light is one slice of a spectrum that runs from radio to gamma rays.

---

## 16.1 Maxwell's equations and electromagnetic waves
- **Displacement current:** a changing electric flux acts like a current in Ampère's law (fixes the capacitor-gap problem).
$$I_d = \varepsilon_0\frac{d\Phi_E}{dt}$$
- The four equations (integral form):

| Law | Equation | Says |
|---|---|---|
| Gauss (E) | $\displaystyle\oint \vec E\cdot d\vec A = \dfrac{q_{in}}{\varepsilon_0}$ | charges make $\vec E$ |
| Gauss (B) | $\displaystyle\oint \vec B\cdot d\vec A = 0$ | no magnetic monopoles |
| Faraday | $\displaystyle\oint \vec E\cdot d\vec s = -\dfrac{d\Phi_m}{dt}$ | changing $\vec B$ makes $\vec E$ |
| Ampère-Maxwell | $\displaystyle\oint \vec B\cdot d\vec s = \mu_0 I + \mu_0\varepsilon_0\dfrac{d\Phi_E}{dt}$ | currents and changing $\vec E$ make $\vec B$ |

- Changing $\vec E$ makes $\vec B$ and changing $\vec B$ makes $\vec E$, so they keep each other going: a wave.
$$\boxed{c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} = 3.00\times10^8\ \text{m/s}}$$

## 16.2 Plane electromagnetic waves
- Wave along $+x$ with $\vec E$ along $y$ and $\vec B$ along $z$:
$$E_y = E_0\sin(kx - \omega t), \qquad B_z = B_0\sin(kx - \omega t), \qquad \boxed{E = cB}$$
- $\vec E$, $\vec B$ and the direction of travel are **mutually perpendicular**. The wave travels along $\vec E\times\vec B$.
- $\vec E$ and $\vec B$ are **in phase**: they peak together.
- Usual wave relations: $c = f\lambda = \omega/k$.

## 16.3 Energy carried by electromagnetic waves
- Energy density splits equally between the two fields:
$$u = \tfrac12\varepsilon_0E^2 + \frac{B^2}{2\mu_0} = \varepsilon_0E^2$$
- **Poynting vector** (power per area, points along the travel direction):
$$\vec S = \frac{1}{\mu_0}\vec E\times\vec B$$
- **Intensity** = time-average of $S$:
$$\boxed{I = c\varepsilon_0E_{rms}^2} = \tfrac12c\varepsilon_0E_0^2 = \frac{E_0B_0}{2\mu_0} = \frac{cB_0^2}{2\mu_0}, \qquad E_{rms} = \frac{E_0}{\sqrt2}$$
- Point source of power $P$ radiating equally in all directions: $I = \dfrac{P}{4\pi r^2}$.

## 16.4 Momentum and radiation pressure
- A wave carrying energy $U$ also carries momentum $p = U/c$. Hitting a surface, it pushes:

| Surface | Radiation pressure |
|---|---|
| Absorbs completely | $p_{rad} = \dfrac{I}{c}$ |
| Reflects completely | $p_{rad} = \dfrac{2I}{c}$ |

- Reflection gives twice the push (momentum reverses instead of just stopping). Force $= p_{rad}A$.
- Tiny in everyday life (sunlight is about $5\times10^{-6}$ Pa), but it drives solar sails and comet tails.

## 16.5 The electromagnetic spectrum
- All EM waves travel at $c$ in vacuum. They differ only in $f$ and $\lambda$, with $c = f\lambda$.

| Type (long $\lambda$ to short) | Rough wavelength |
|---|---|
| Radio | longer than about 1 m |
| Microwave | 1 mm to 1 m |
| Infrared | 700 nm to 1 mm |
| Visible | 400 nm (violet) to 700 nm (red) |
| Ultraviolet | 10 nm to 400 nm |
| X-ray | 0.01 nm to 10 nm |
| Gamma ray | shorter than about 0.01 nm |

- Shorter wavelength means higher frequency and more energy per photon. Band edges overlap and are set by source, not a sharp cutoff.

---

## Formula sheet
| Idea | Formula |
|---|---|
| Displacement current | $I_d = \varepsilon_0\,d\Phi_E/dt$ |
| Speed of light | $c = 1/\sqrt{\mu_0\varepsilon_0}$ |
| Field ratio | $E = cB$ |
| Wave relation | $c = f\lambda = \omega/k$ |
| Energy density | $u = \varepsilon_0E^2 = B^2/\mu_0$ |
| Poynting vector | $\vec S = \vec E\times\vec B/\mu_0$ |
| Intensity | $I = c\varepsilon_0E_{rms}^2 = \tfrac12c\varepsilon_0E_0^2 = E_0B_0/2\mu_0$ |
| Point source | $I = P/4\pi r^2$ |
| Radiation pressure | $I/c$ absorbed, $\ 2I/c$ reflected |

> [!warning] Watch out
> - $E = cB$ makes $B$ look tiny, but the electric and magnetic fields carry **equal** energy.
> - Intensity uses rms or includes the $\tfrac12$ with peak values. Don't do both, and don't do neither.
> - The pressure symbol $p_{rad}$ is not momentum $p$, and the intensity $I$ is not current $I$. Read the context.
> - Reflected light pushes twice as hard as absorbed light, not half.
