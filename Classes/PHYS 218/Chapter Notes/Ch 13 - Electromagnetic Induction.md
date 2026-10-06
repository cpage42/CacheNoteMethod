---
class: "[[PHYS 218]]"
chapter: 13
textbook: "UPV2 Ch 13"
tags: [chapter-notes, magnetism, induction, faraday, lenz]
---
# Ch 13: Electromagnetic Induction
Class: [[PHYS 218]] · Previous: [[Ch 12 - Sources of Magnetic Fields]] · Next: [[Ch 14 - Inductance]]

> [!abstract] The chapter in three lines
> A **changing magnetic flux** through a loop induces an emf: $\varepsilon = -d\Phi_B/dt$ (**Faraday**). The minus sign is **Lenz's law**: the induced current fights the change. The flux can change because $B$ changes, the area changes, or the loop turns, which covers motional emf, generators and eddy currents.

---

## 13.1 Faraday's law
- **Magnetic flux** through a surface:
$$\Phi_B = \int\vec B\cdot d\vec A \qquad \Phi_B = BA\cos\theta \ \text{(uniform } B\text{, flat loop)}$$
- Unit: **weber**, $1\ \text{Wb} = 1\ \text{T·m}^2$. $\theta$ is between $\vec B$ and the loop's **normal**.
$$\boxed{\varepsilon = -N\frac{d\Phi_B}{dt}}$$
- Three ways to change the flux: change $B$, change $A$, change $\theta$.
- Induced current: $I = \varepsilon/R$. A constant flux, however large, induces nothing.

## 13.2 Lenz's law
- The induced current makes its own field that **opposes the change in flux**. Not the flux, the **change**.
- **Recipe:**
  1. Which way does the external $\vec B$ point through the loop?
  2. Is the flux increasing or decreasing?
  3. Increasing: induced $\vec B$ points **opposite** the external field. Decreasing: induced $\vec B$ points the **same** way.
  4. Use the loop right-hand rule (thumb along induced $\vec B$, fingers curl with the current) to get the current direction.
- Lenz's law is energy conservation: if the current helped the change, you'd get energy for free.

## 13.3 Motional emf
- Rod of length $l$ moving at $v$ through $\vec B$, all three mutually perpendicular:
$$\boxed{\varepsilon = Blv}$$
- Two views, same answer: the flux through the circuit grows at $Blv$, or the charges in the rod feel $q\vec v\times\vec B$.
- Rod on rails with resistance $R$: $I = Blv/R$. The current feels a force that **opposes** the motion:
$$F = IlB = \frac{B^2l^2v}{R}, \qquad P = Fv = \frac{B^2l^2v^2}{R} = I^2R$$
- Rod rotating about one end at $\omega$: $\varepsilon = \tfrac12 B\omega l^2$.

## 13.4 Induced electric fields
- A changing $\vec B$ creates an electric field, even with no wire present. Faraday's law in general form:
$$\boxed{\oint\vec E\cdot d\vec l = -\frac{d\Phi_B}{dt}}$$
- This $\vec E$ is **non-conservative**: field lines form closed loops, and you can't define a potential for it.
- Inside a long solenoid (radius $R$) with changing $B$:

| Region | $E$ |
|---|---|
| $r < R$ | $E = \dfrac{r}{2}\dfrac{dB}{dt}$ |
| $r > R$ | $E = \dfrac{R^2}{2r}\dfrac{dB}{dt}$ |

## 13.5 Eddy currents
- Changing flux through a solid conductor drives swirling currents inside it.
- By Lenz's law they **oppose** the motion: magnetic braking, damping in balances, a magnet falling slowly through a copper pipe.
- They waste energy as heat, so transformer cores are **laminated** (thin insulated sheets) to break up the current paths.
- Uses: metal detectors, induction braking on trains, sorting metals in recycling.

## 13.6 Electric generators and back emf
- Coil of $N$ turns, area $A$, spinning at $\omega$ in uniform $B$: $\Phi_B = BA\cos\omega t$, so
$$\boxed{\varepsilon = NBA\omega\sin\omega t} \qquad \varepsilon_0 = NBA\omega$$
- Output is AC. Peak emf when the plane of the coil is **parallel** to $\vec B$ (flux zero, but changing fastest).
- **Back emf:** a spinning motor is also a generator. Its emf opposes the supply voltage:
$$I = \frac{V - \varepsilon_{back}}{R}$$
- At startup $\varepsilon_{back} = 0$, so the current is large. As the motor speeds up the current drops. A jammed motor draws large current and can burn out.

## 13.7 Applications of electromagnetic induction
- **Transformers:** changing flux in one coil induces emf in another (details in later chapters).
- **Credit card strips, hard drives, tape:** moving magnetized regions past a coil induce signals.
- **Electric guitar pickups:** vibrating steel strings change the flux through a coil.
- **Ground fault interrupters (GFCI):** unequal currents in the hot and neutral wires make a net flux that trips the breaker.
- **Induction cooktops, wireless charging:** AC in a coil induces currents in a nearby pan or phone coil.

---

## Formula sheet
| Idea | Formula |
|---|---|
| Magnetic flux | $\Phi_B = \int\vec B\cdot d\vec A$, $\ \Phi_B = BA\cos\theta$ |
| Faraday's law | $\varepsilon = -N\,d\Phi_B/dt$ |
| Motional emf | $\varepsilon = Blv$ |
| Rod on rails | $I = Blv/R$, $\ F = B^2l^2v/R$ |
| Rotating rod | $\varepsilon = \tfrac12 B\omega l^2$ |
| Induced E field | $\oint\vec E\cdot d\vec l = -d\Phi_B/dt$ |
| Generator | $\varepsilon = NBA\omega\sin\omega t$ |
| Motor with back emf | $I = (V - \varepsilon_{back})/R$ |

> [!warning] Watch out
> - Emf depends on the **rate of change** of flux, not the flux itself.
> - Lenz: oppose the **change**. A decreasing flux gets an induced field in the **same** direction as the original.
> - $\theta$ in $BA\cos\theta$ is from the **normal**. A loop with its plane parallel to $\vec B$ has zero flux.
> - Don't forget $N$ for a coil. Every turn adds the same emf.
