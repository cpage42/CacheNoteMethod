---
class: "[[PHYS 218]]"
chapter: 14
textbook: "UPV2 Ch 14"
tags: [chapter-notes, inductance, rl-circuits, lc-circuits, magnetic-energy]
---
# Ch 14: Inductance
Class: [[PHYS 218]] · Previous: [[Ch 13 - Electromagnetic Induction]] · Next: [[Ch 15 - Alternating-Current Circuits]] · Compare: [[RC circuits]]

> [!abstract] The chapter in three lines
> A changing current makes a changing magnetic flux, which induces an emf that **opposes the change**. **Inductance** ($M$ between two coils, $L$ for one coil) measures how strong that effect is. Inductors store energy in their magnetic field, make current rise and fall smoothly in RL circuits, and trade energy back and forth with capacitors in LC circuits.

---

## 14.1 Mutual inductance
- Current $I_1$ in coil 1 sends flux through coil 2. Change $I_1$ and coil 2 gets an emf.
$$\boxed{M = \frac{N_2\Phi_{21}}{I_1}} \qquad \varepsilon_2 = -M\frac{dI_1}{dt}$$
- $M_{21} = M_{12} = M$: the same number both ways. Unit: **henry**, $1\ \text{H} = 1\ \text{V·s/A} = 1\ \text{Wb/A}$.
- $M$ depends only on **geometry** (sizes, turns, spacing, orientation), not on the current.

## 14.2 Self-inductance and inductors
- A coil's own changing current induces an emf in itself (a **back emf**).
$$\boxed{L = \frac{N\Phi_m}{I}} \qquad \boxed{\varepsilon = -L\frac{dI}{dt}}$$
- The inductor fights **changes** in current, not the current itself. Steady current: no emf.
- **Solenoid** ($N$ turns, area $A$, length $l$):
$$\boxed{L = \frac{\mu_0 N^2 A}{l}}$$
- Toroid (rectangular cross-section, height $h$): $L = \dfrac{\mu_0 N^2 h}{2\pi}\ln\dfrac{R_2}{R_1}$.

## 14.3 Energy in a magnetic field
- Work done pushing current against the back emf is stored in the field:
$$\boxed{U_L = \tfrac12 L I^2} \qquad \boxed{u_m = \frac{B^2}{2\mu_0}}$$
- $u_m$ is energy per volume and holds for any magnetic field. Compare $u_E = \tfrac12\varepsilon_0E^2$.
- Can also find $L$ from energy: integrate $u_m$ over the volume, then set it equal to $\tfrac12LI^2$.

## 14.4 RL circuits
- Time constant:
$$\boxed{\tau_L = \frac{L}{R}}$$
- **Growth** (switch closed with battery $\varepsilon$):
$$I(t) = \frac{\varepsilon}{R}\left(1 - e^{-t/\tau_L}\right), \qquad \varepsilon_L = \varepsilon\,e^{-t/\tau_L}$$
- **Decay** (battery removed, $L$ and $R$ left in a loop):
$$I(t) = I_0\,e^{-t/\tau_L}$$
- Just after closing: inductor acts like an **open switch** ($I = 0$). Long after: like a **plain wire** ($I = \varepsilon/R$).
- After one $\tau$: 63% of the way up, or down to 37%.

| | RC | RL | LC |
|---|---|---|---|
| Time scale | $\tau = RC$ | $\tau = L/R$ | $\omega = \dfrac{1}{\sqrt{LC}}$ |
| Behavior | exponential charge/discharge | exponential current rise/decay | oscillates forever (no $R$) |
| At $t = 0$ | uncharged $C$ acts like a wire | $L$ acts like an open switch | depends on initial $q$ and $i$ |
| As $t \to \infty$ | $C$ acts like an open switch | $L$ acts like a wire | never settles |
| Energy stored | $\dfrac{q^2}{2C}$ in $\vec E$ | $\tfrac12LI^2$ in $\vec B$ | sloshes between the two |

## 14.5 Oscillations in an LC circuit
- Charged capacitor discharges through an inductor. With no resistance, charge oscillates forever.
$$q(t) = q_0\cos(\omega t + \phi), \qquad i(t) = -\omega q_0\sin(\omega t + \phi), \qquad \boxed{\omega = \frac{1}{\sqrt{LC}}}$$
- **Energy sloshes** between the capacitor's $\vec E$ and the inductor's $\vec B$; the total stays fixed:
$$\frac{q^2}{2C} + \frac12 L i^2 = \frac{q_0^2}{2C} = \frac12 L I_0^2, \qquad I_0 = \omega q_0$$
- When $q$ is max, $i = 0$ (all energy in $C$). When $q = 0$, $i$ is max (all energy in $L$). Twice per period each way.

| Mass on spring | LC circuit |
|---|---|
| position $x$ | charge $q$ |
| velocity $v$ | current $i$ |
| mass $m$ | inductance $L$ |
| spring constant $k$ | $1/C$ |
| $\tfrac12 mv^2$ | $\tfrac12 Li^2$ |
| $\tfrac12 kx^2$ | $\dfrac{q^2}{2C}$ |
| $\omega = \sqrt{k/m}$ | $\omega = 1/\sqrt{LC}$ |

## 14.6 RLC series circuits
- Add a resistor: it drains energy as heat, so the oscillation dies out (a damped oscillator; $R$ plays the role of friction).
- **Underdamped** (small $R$):
$$q(t) = q_0\,e^{-Rt/2L}\cos(\omega' t + \phi), \qquad \boxed{\omega' = \sqrt{\frac{1}{LC} - \left(\frac{R}{2L}\right)^2}}$$
- Underdamped if $R < \sqrt{4L/C}$. **Critically damped** at $R = \sqrt{4L/C}$. **Overdamped** if larger (no oscillation, slow decay).
- $\omega'$ is a bit less than $1/\sqrt{LC}$. Amplitude envelope decays with $e^{-Rt/2L}$.

---

## Formula sheet
| Idea | Formula |
|---|---|
| Mutual inductance | $M = N_2\Phi_{21}/I_1$, $\ \varepsilon_2 = -M\,dI_1/dt$ |
| Self-inductance | $L = N\Phi_m/I$, $\ \varepsilon = -L\,dI/dt$ |
| Solenoid | $L = \mu_0N^2A/l$ |
| Energy in inductor | $U = \tfrac12LI^2$ |
| Magnetic energy density | $u_m = B^2/2\mu_0$ |
| RL time constant | $\tau_L = L/R$ |
| RL growth / decay | $I = \dfrac{\varepsilon}{R}(1 - e^{-t/\tau_L})$ $\ /\ $ $I = I_0e^{-t/\tau_L}$ |
| LC frequency | $\omega = 1/\sqrt{LC}$ |
| LC energy | $\dfrac{q^2}{2C} + \tfrac12Li^2 = \text{const}$ |
| Underdamped RLC | $q = q_0e^{-Rt/2L}\cos(\omega't + \phi)$, $\ \omega' = \sqrt{1/LC - (R/2L)^2}$ |

> [!warning] Watch out
> - The emf depends on $dI/dt$, not $I$. A huge steady current through an inductor gives zero emf.
> - RL is $\tau = L/R$, RC is $\tau = RC$. Don't flip them: more $R$ makes RC slower but RL **faster**.
> - The minus sign in $\varepsilon = -L\,dI/dt$ is Lenz's law: the emf opposes the change, so it can point either way depending on whether $I$ is rising or falling.
> - $\omega$ is angular frequency. $f = \omega/2\pi$ and $T = 2\pi\sqrt{LC}$.
