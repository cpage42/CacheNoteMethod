---
class: "[[PHYS 218]]"
chapter: 10
textbook: "UPV2 Ch 10"
tags: [chapter-notes, circuits, kirchhoff, rc-circuits]
---
# Ch 10: Direct-Current Circuits
Class: [[PHYS 218]] · Previous: [[Ch 09 - Current and Resistance]] · Next: [[Ch 11 - Magnetic Forces and Fields]] · Full review: [[Exam 2 Review - Ch 8-10]] · Section notes: [[10.4 Electrical Measuring Instruments]] · [[RC circuits]] · Drill: [[Flashcards - PHYS 218 Circuits (Ch 9-10)]]

> [!abstract] The chapter in three lines
> A battery is an emf $\varepsilon$ with a small internal resistance $r$. Networks of resistors reduce with **series and parallel** rules, and anything harder is solved with **Kirchhoff's rules** (charge conserved at junctions, energy conserved around loops). Add a capacitor and the circuit changes over time with time constant $\tau = RC$.

---

## 10.1 Electromotive force
- **Emf** $\varepsilon$: work per charge the source does moving charge from $-$ to $+$ (volts, not a force).
- Real battery = ideal emf **in series with** internal resistance $r$.
$$\boxed{V_{terminal} = \varepsilon - Ir} \qquad I = \frac{\varepsilon}{R + r}$$
- No current: $V = \varepsilon$. Charging a battery: $V = \varepsilon + Ir$.
- Power: produced $I\varepsilon$ = delivered $IV$ + wasted $I^2r$. Max power to the load when $R = r$: $P_{max} = \varepsilon^2/4r$.
- Batteries in series: emfs and $r$'s add. Identical batteries in parallel: same $\varepsilon$, more current available.

## 10.2 Resistors in series and parallel
$$\boxed{R_s = R_1 + R_2 + \cdots} \qquad \boxed{\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots}$$
- **Series:** same current, voltages add. Total is bigger than the biggest.
- **Parallel:** same voltage, currents add. Total is smaller than the smallest. Two in parallel: $R_1R_2/(R_1 + R_2)$.
- **Dividers:** $V_1 = V\dfrac{R_1}{R_1 + R_2}$ (series), $\ I_1 = I\dfrac{R_2}{R_1 + R_2}$ (parallel; the *other* resistor on top).
- **Mixed networks:** reduce inside out to $R_{eq}$, get $I = V/R_{eq}$, then work back out.

## 10.3 Kirchhoff's rules
$$\textbf{Junction: } \sum I_{in} = \sum I_{out} \qquad\qquad \textbf{Loop: } \sum_{\text{loop}}\Delta V = 0$$

| Crossing | Direction you walk | $\Delta V$ |
|---|---|---|
| Resistor | with the current | $-IR$ |
| Resistor | against the current | $+IR$ |
| Battery | $-$ to $+$ | $+\varepsilon$ |
| Battery | $+$ to $-$ | $-\varepsilon$ |

**Recipe:** label branch currents (guess directions) → junction equations → loop equations until #equations = #unknowns → solve → a negative current just means it flows the other way → check with an unused loop or a power balance.

## 10.4 Electrical measuring instruments
- **Ammeter:** in **series**, very **small** resistance. **Voltmeter:** in **parallel**, very **large** resistance. **Ohmmeter:** only on a **disconnected** part.
- From a galvanometer ($R_G$, full scale $I_G$):
$$R_{shunt} = \frac{I_GR_G}{I - I_G} \ (\text{parallel, ammeter}) \qquad R_{series} = \frac{V}{I_G} - R_G \ (\text{voltmeter})$$
- Full notes: [[10.4 Electrical Measuring Instruments]].

## 10.5 RC circuits
$$\boxed{\tau = RC}$$
| | Charging (from 0) | Discharging (from $Q_0$) |
|---|---|---|
| Charge | $q = C\varepsilon\,(1 - e^{-t/\tau})$ | $q = Q_0e^{-t/\tau}$ |
| Current | $I = \dfrac{\varepsilon}{R}e^{-t/\tau}$ | $I = -\dfrac{Q_0}{RC}e^{-t/\tau}$ |
| After $1\tau$ | 63% charged | 37% left |

- Uncharged capacitor at $t = 0$: acts like a **wire**. Fully charged ($t \to \infty$): acts like a **break**.
- Half-time: $t = \tau\ln 2$. "Done" after about $5\tau$.
- Several resistors: $\tau = R_{eq}C$, with $R_{eq}$ seen by the capacitor when the battery is replaced by a wire.
- Full derivations and graphs: [[RC circuits]].

## 10.6 Household wiring and electrical safety
- Outlets are wired in **parallel** at 120 V AC, so every device gets full voltage.
- **Hot** (black), **neutral** (white), **ground** (green/bare). **Fuses/breakers** go in series on the hot wire.
- Danger comes from **current** through the body (~10–20 mA: can't let go; ~100 mA: can stop the heart). **GFCIs** cut power when hot and neutral currents differ.

---

## Formula sheet
| Idea | Formula |
|---|---|
| Real battery | $V = \varepsilon - Ir$, $\ I = \varepsilon/(R + r)$ |
| Series / parallel | $R_s = \sum R_i$, $\ 1/R_p = \sum 1/R_i$ |
| Dividers | $V_1 = VR_1/(R_1 + R_2)$, $\ I_1 = IR_2/(R_1 + R_2)$ |
| Kirchhoff | $\sum I_{in} = \sum I_{out}$, $\ \sum\Delta V = 0$ |
| Meters | $R_{sh} = I_GR_G/(I - I_G)$, $\ R = V/I_G - R_G$ |
| RC | $\tau = RC$, $\ q = C\varepsilon(1 - e^{-t/\tau})$, $\ q = Q_0e^{-t/\tau}$ |

> [!warning] Watch out
> - Terminal voltage is $\varepsilon - Ir$ whenever current flows, not $\varepsilon$.
> - Decide your loop direction *before* writing signs, and follow the table.
> - Keep negative currents negative until the end.
> - $q = C\varepsilon$ is only the **final** charge, not the charge at every time.
