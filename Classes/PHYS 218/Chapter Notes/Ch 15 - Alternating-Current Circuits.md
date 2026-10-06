---
class: "[[PHYS 218]]"
chapter: 15
textbook: "UPV2 Ch 15"
tags: [chapter-notes, ac-circuits, impedance, resonance, transformers]
---
# Ch 15: Alternating-Current Circuits
Class: [[PHYS 218]] · Previous: [[Ch 14 - Inductance]] · Next: [[Ch 16 - Electromagnetic Waves]]

> [!abstract] The chapter in three lines
> An AC source drives a sinusoidal voltage. Resistors, capacitors and inductors each "resist" it differently: $R$ stays put, $X_C$ and $X_L$ depend on frequency and shift the current's **phase**. Combine them into an **impedance** $Z$, use **rms** values for power, hit **resonance** at $\omega_0 = 1/\sqrt{LC}$, and use **transformers** to step voltages up or down.

---

## 15.1 AC sources
$$\boxed{v(t) = V_0\sin\omega t} \qquad i(t) = I_0\sin(\omega t - \phi), \qquad \omega = 2\pi f$$
- $V_0$ and $I_0$ are **amplitudes** (peak values). $\phi$ is how far the current lags the voltage.
- US outlets: 60 Hz, 120 V rms, so the peak is about 170 V.

## 15.2 Simple AC circuits
- Each element alone across $v = V_0\sin\omega t$:

| Element | Opposition | Amplitude | Current vs voltage |
|---|---|---|---|
| Resistor | $R$ | $I_0 = V_0/R$ | in phase |
| Capacitor | $X_C = \dfrac{1}{\omega C}$ | $I_0 = V_0/X_C$ | current **leads** by $\pi/2$ (90°) |
| Inductor | $X_L = \omega L$ | $I_0 = V_0/X_L$ | current **lags** by $\pi/2$ (90°) |

- **Reactance** is measured in ohms. $X_C$ drops at high frequency (capacitor passes it); $X_L$ grows (inductor blocks it).
- Memory aid: **ELI the ICE man**. In an inductor ($L$), $E$ (voltage) comes before $I$. In a capacitor ($C$), $I$ comes before $E$.

## 15.3 RLC series circuits with AC
- Same current through all three. Voltages add as **phasors** (rotating vectors), not as plain numbers.
$$\boxed{Z = \sqrt{R^2 + (X_L - X_C)^2}} \qquad \boxed{I_0 = \frac{V_0}{Z}}$$
$$\boxed{\tan\phi = \frac{X_L - X_C}{R}}$$
- $X_L > X_C$: $\phi > 0$, current lags (inductive). $X_C > X_L$: $\phi < 0$, current leads (capacitive).
- Phasor diagram: $V_R$ along $I$, $V_L$ 90° ahead of it, $V_C$ 90° behind. $V_0$ is the vector sum.

## 15.4 Power in an AC circuit
- **rms** ("root mean square") values are what meters read:
$$\boxed{I_{rms} = \frac{I_0}{\sqrt2}} \qquad \boxed{V_{rms} = \frac{V_0}{\sqrt2}}$$
- Average power delivered:
$$\boxed{P_{ave} = I_{rms}V_{rms}\cos\phi} = \tfrac12 I_0V_0\cos\phi = I_{rms}^2R$$
- $\cos\phi = R/Z$ is the **power factor**. Only the resistor uses power on average; ideal $L$ and $C$ store and return it.

## 15.5 Resonance in an AC circuit
- Current is largest when $X_L = X_C$, so $Z = R$ and $\phi = 0$:
$$\boxed{\omega_0 = \frac{1}{\sqrt{LC}}} \qquad I_{0,max} = \frac{V_0}{R}$$
- **Quality factor** measures how sharp the peak is ($\Delta\omega$ = full width at half the maximum power):
$$\boxed{Q = \frac{\omega_0}{\Delta\omega}} = \frac{\omega_0 L}{R}$$
- Small $R$: tall, narrow peak (high $Q$). This is how a radio tunes to one station.

## 15.6 Transformers
- Two coils on a shared iron core. Changing flux in the primary induces emf in the secondary.
$$\boxed{\frac{V_S}{V_P} = \frac{N_S}{N_P}} \qquad \boxed{\frac{I_S}{I_P} = \frac{N_P}{N_S}}$$
- Ideal transformer conserves power: $I_PV_P = I_SV_S$. Step **up** voltage means step **down** current.
- Works only with **AC** (needs changing flux).
- Power lines use high voltage so the current is small and $I^2R$ losses in the wires stay low.

---

## Formula sheet
| Idea | Formula |
|---|---|
| Source | $v = V_0\sin\omega t$, $\ i = I_0\sin(\omega t - \phi)$ |
| Capacitive reactance | $X_C = 1/(\omega C)$ |
| Inductive reactance | $X_L = \omega L$ |
| Impedance | $Z = \sqrt{R^2 + (X_L - X_C)^2}$, $\ I_0 = V_0/Z$ |
| Phase angle | $\tan\phi = (X_L - X_C)/R$ |
| rms values | $I_{rms} = I_0/\sqrt2$, $\ V_{rms} = V_0/\sqrt2$ |
| Average power | $P_{ave} = I_{rms}V_{rms}\cos\phi = I_{rms}^2R$ |
| Power factor | $\cos\phi = R/Z$ |
| Resonance | $\omega_0 = 1/\sqrt{LC}$, $\ Z = R$ |
| Quality factor | $Q = \omega_0/\Delta\omega = \omega_0L/R$ |
| Transformer | $V_S/V_P = N_S/N_P$, $\ I_S/I_P = N_P/N_S$ |

> [!warning] Watch out
> - Peak voltages across $R$, $L$, $C$ do **not** add to $V_0$. They peak at different times; add them as phasors.
> - Use $\omega$ (rad/s) in $X_L$ and $X_C$, not $f$. Convert with $\omega = 2\pi f$.
> - $P = I_{rms}V_{rms}$ only at resonance or for a pure resistor. Otherwise include $\cos\phi$.
> - Don't mix peak and rms in one equation. Wall "120 V" is rms.
