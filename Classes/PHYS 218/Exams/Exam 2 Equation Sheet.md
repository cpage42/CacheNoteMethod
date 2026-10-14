---
class: "[[PHYS 218]]"
tags: [exam, equation-sheet]
---
# Exam 2 Equation Sheet
Class: [[PHYS 218]] · Exam 2 is **Tue Oct 13** · Practice: [[Exam 2 Practice Exam C (Symbolic)]] · [[Exam 2 Practice Exam B]] · [[Exam 2 Past Exams - Worked Key]] · [[Exam 2 Sample Exam]]

![[Exam_2_Eqn_Sheet.pdf]]

## What's on it
- **Capacitors:** $q = CV$; $U = \tfrac12CV^2 = Q^2/2C = \tfrac12QV$
- **Capacitance formulas:** parallel plate, with dielectric ($\kappa$), **spherical**
- **Combining:** capacitors in series and parallel; resistors in series and parallel
- **RC:** charging and discharging, written as $q(t)$, $V_C(t)$, $i(t)$
- **Basics:** Ohm's law; $P = iV = i^2R = V^2/R$
- **Energy:** $\Delta U = q\Delta V$, $\Delta E = \Delta U + \Delta K$
- **Kirchhoff:** loop, resistance, emf and junction rules, with the sign conventions spelled out
- **Temperature:** $R = R_0(1+\alpha\Delta T)$

**No ac** (not on the exam).

## Not on it: memorize these
| Need | Formula |
|---|---|
| Real battery | $V_T = \mathcal{E} - Ir$ when discharging; $V_T = \mathcal{E} + Ir$ when being charged |
| Resistivity | $R = \rho L/A$; $\rho = \rho_0(1+\alpha\Delta T)$ |
| Current and drift | $I = nqv_dA$; $J = I/A = \sigma E$ |
| Cylindrical capacitor | $C = \dfrac{2\pi\varepsilon_0 L}{\ln(b/a)}$ |
| Field energy density | $u = \tfrac12\varepsilon_0E^2$ (times $\kappa$ inside a dielectric) |
| Dielectric slid in | Battery **connected**: $V$ fixed, so $Q$ and $U$ go up by a factor of $\kappa$. Battery **disconnected**: $Q$ fixed, so $V$ and $U$ go down by a factor of $\kappa$ |
| Time constant | $\tau = RC$. Use the $R$ the capacitor actually sees (for two resistors, often $R_1 \parallel R_2$ while charging) |
| Time to a fraction | $t = \tau\ln\!\left(\frac{1}{1-f}\right)$ when charging to fraction $f$; $t = \tau\ln(1/f)$ when discharging; for energy, $U \propto e^{-2t/\tau}$ |
| RC limits | $t = 0$: an uncharged C acts like a **wire**. $t\to\infty$: C acts like a **break** (no current) |
| Meters | Ammeter: small shunt in **parallel** with the galvanometer, placed in series with the circuit. Voltmeter: big resistor in **series** with the galvanometer, placed in parallel with what it measures |

## Things the sheet hints at
- **Spherical capacitor and $\Delta E = \Delta U + \Delta K$** suggest a possible "charge or electron accelerated between plates or shells" question: $q\Delta V = -\Delta K$.
- **Temperature resistance** is on the sheet, so expect a hot-wire part: switch-on surge, or a power change while heating ([[Exam 2 Practice Exam B]] P2, [[Exam 2 Practice Exam C (Symbolic)]] P2f).
- **Discharge current** has a minus sign on the sheet: $i = -\frac{q_0}{RC}e^{-t/RC}$. It just means the current flows opposite to the charging current. Give the magnitude and state the direction.
