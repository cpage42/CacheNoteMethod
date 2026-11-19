---
tags: [chem151-lab, pre-lab]
course: CHEM 151 Lab
lab: Kinetics of H2O2 Decomposition, Parts I and II
week: 12-13
date: 2026-11-16
---
# Pre-Lab: Kinetics of H₂O₂ Decomposition (Parts I and II)
Class: [[CHEM 151 Lab]] · Manuals: [[Kinetics of H2O2 Decomposition Part 1 Lab Manual.pdf]], [[Kinetics of H2O2 Decomposition Part 2 Lab Manual.pdf]] · Talks: [[Prelab talk_Kinetics Part 1.pdf]], [[Prelab talk_Kinetics Part 2.pdf]] · Summaries: [[Kinetics Part I - Manual Summary]], [[Kinetics Part II - Manual Summary]]

**Jump to:** [[#Lab record|Lab record (do and record)]] · [[#Part II lab record (Mon 11/16)|Part II run log]] · [[#Spreadsheet set-up|Spreadsheet]] · [[#Submission checklist|Submission checklist]]

> [!note] How the two parts fit together
> **Part I** (11/9) finds the rate law $\text{rate}=k[\mathrm{H_2O_2}]^x[\mathrm{I^-}]^y$ at room temperature: the orders $x$ and $y$ and a value of $k$. **Part II** (11/16) reuses those orders and Mixture 1, repeats it at three temperatures, and gets $E_a$ from how $k$ changes with $T$. Only Part I has a written pre-lab (Table 2 of concentrations). Part II has none; the Part II sections below are the notebook entry to have ready. Copy by hand into the notebook.

# Shared background
$$2\,\mathrm{H_2O_2}(aq)\ \xrightarrow{\ I^-\ }\ 2\,\mathrm{H_2O}(l)+\mathrm{O_2}(g)$$
H₂O₂ is unstable (it disproportionates), but the reaction is slow on its own. Iodide is a **homogeneous catalyst**: it is dissolved in the solution, takes part in the slow step, and is regenerated, so it is not in the overall equation.

Rate is measured as O₂ pressure rising in a sealed flask at constant volume and temperature. By $PV=nRT$, pressure is proportional to moles of O₂, so
$$\text{rate}=\frac{\Delta(\text{moles O}_2)}{\Delta t}\ \propto\ \frac{\Delta P}{\Delta t}\ \ (\text{atm/min}).$$
The rate is the **slope of the linear fit** of pressure (atm) against time (min).

Apparatus (both parts): stir bar and 250 mL Erlenmeyer flask in a water bath, thermometer clamped in the bath, pressure sensor on a gas-tight stopper, Logger Pro. Watch for leaks.

**The three mixtures** (all 60.0 mL total):

| Reagent | Mix 1 | Mix 2 | Mix 3 |
|---|---|---|---|
| 0.10 M KI | 15.0 mL | 15.0 mL | 30.0 mL |
| Distilled water | 35.0 mL | 25.0 mL | 20.0 mL |
| 3 % H₂O₂ (0.88 M) | 10.0 mL | 20.0 mL | 10.0 mL |
| Total | 60.0 mL | 60.0 mL | 60.0 mL |

**Final concentrations** (Table 2 of the Part I pre-lab), from $M_2=M_1V_1/V_\text{total}$. For example, Mix 1 KI: $(0.10)(15.0)/60.0=0.025$ M. Mix 1 H₂O₂: $(0.88)(10.0)/60.0=0.147$ M.

| Component | Mix 1 | Mix 2 | Mix 3 |
|---|---|---|---|
| [H₂O₂] | **0.147 M** | **0.293 M** | **0.147 M** |
| [KI] = [I⁻] | **0.025 M** | **0.025 M** | **0.050 M** |

---
# Part I: Concentration effects (finding the orders $x$ and $y$)

## Purpose
Use the method of initial rates to find the reaction orders $x$ (H₂O₂) and $y$ (I⁻), and the rate constant $k$ at room temperature.

## Design
- Mix 2 doubles **only** [H₂O₂] (compare with Mix 1).
- Mix 3 doubles **only** [I⁻] (compare with Mix 1).
- If the rate doubles, that order is 1. If it quadruples, the order is 2. If it doesn't change, the order is 0.

## Procedure (short form)
1. Set up the apparatus. Bath at room temperature (**20–24 °C**) for **all three** runs. Record the actual bath temperature.
2. Add the KI and water for the mixture to the flask and put a stir bar in the bath. Measure the H₂O₂ in a graduated cylinder and set it aside.
3. Start stirring at a moderate speed and **keep that speed for every run**.
4. Logger Pro: check the pressure reading, set pressure in **atm** and time in **min**.
5. Click **COLLECT**, add the H₂O₂ quickly and completely, stopper firmly and twist so it is gas tight.
6. Collect for **8–10 min** or until the stopper pops out. **STOP**.
7. **Analyze → Examine**, drag over the most linear 2–4 min, **Linear Fit**. The slope is the rate. Record the equation.
8. Waste in the waste container. Repeat for Mix 2 and Mix 3. Use **Store Latest Run**. Put all three plots in the data section.

## Data table

| Mixture | Bath $T$ (°C) | Fit equation     | Slope = rate (atm/min) | ${}x,y{}$                      |
| ------- | ------------- | ---------------- | ---------------------- | ------------------------------ |
| 1       | 19.6          | 0.012276t+0.7727 | 0.012276               | N/A                            |
| 2       | 20            | 0.025944t+0.7620 | 0.025944               | x${}\approx 1.0796\approx 1{}$ |
| 3       | 20.5          | 0.019848t+0.7716 | 0.019848               | y${}\approx 0.6931\approx 1{}$ |


## Calculations
**Orders.** With $\text{rate}=k[\mathrm{H_2O_2}]^x[\mathrm{I^-}]^y$:
$$\frac{\text{rate}_2}{\text{rate}_1}=\Big(\frac{0.293}{0.147}\Big)^x=2^x\ \Rightarrow\ x=\log_2\frac{\text{rate}_2}{\text{rate}_1}$$
$$\frac{\text{rate}_3}{\text{rate}_1}=\Big(\frac{0.050}{0.025}\Big)^y=2^y\ \Rightarrow\ y=\log_2\frac{\text{rate}_3}{\text{rate}_1}$$
Round to the nearest whole number (or half). Experimental ratios will not be exactly 1, 2, or 4.

**Rate constant** for each mixture, then average the three:
$$k=\frac{\text{rate}}{[\mathrm{H_2O_2}]^x[\mathrm{I^-}]^y}$$
The units of $k$ must cancel the concentrations and leave the rate's units (atm/min). For $x=y=1$, $k$ is in $\mathrm{atm\,min^{-1}\,M^{-2}}$. Report the average $k$ **at the bath temperature**.

| Mixture | Rate (atm/min) | $[\mathrm{H_2O_2}]$ (M) | $[\mathrm{I^-}]$ (M) | $k$          |
| ------- | -------------- | ----------------------- | -------------------- | ------------ |
| 1       | 0.012276       | 0.147                   | 0.025                | 3.3404       |
| 2       | 0.025944       | 0.293                   | 0.025                | 3.5418       |
| 3       | 0.019848       | 0.147                   | 0.050                | 2.7004       |
|         |                |                         | Average $k$          | 3.1942 @ 20C |

## Pre-lab questions
**Why change one concentration at a time?** Only then can a change in rate be attributed to that reactant. If both changed together, the effects could not be separated.

**Why use the linear part and the early rate?** The method of initial rates measures the rate before the reactants are used up. Later in the run concentrations have fallen and the slope is no longer the rate at the starting concentrations.

**Why must the bath stay at room temperature for all three runs?** $k$ depends on temperature. Comparing mixtures at different temperatures would mix up two effects.

**Why add the H₂O₂ quickly and stopper at once?** The reaction starts when it is added, and O₂ released before the stopper is in is lost from the data, which lowers the apparent rate.

**Conclusion should report:** orders $x$ and $y$, the average $k$ at the measured temperature, and what the orders say about the reaction (for example, that both reactants appear in the rate-determining step).

---
# Part II: Temperature effect (finding the activation energy $E_a$)

## Purpose
Measure how temperature changes the rate of the iodide-catalyzed decomposition using **Mixture 1 only**, then get $E_a$ from an Arrhenius plot.

## Rate law
Use the orders from Part I (the talk assumes first order in each: $\text{rate}=k[\mathrm{H_2O_2}]^1[\mathrm{I^-}]^1$). Concentrations are the Mix 1 values and are the same in every run: [H₂O₂] = 0.147 M, [I⁻] = 0.025 M. Only $T$ changes.

## Runs
Three runs, **same mixture, same stir rate**:

| Run | Bath target | Note |
|---|---|---|
| Cold | **10 °C** | Ice/water bath. Don't get too cold. |
| Room temp | about 20–24 °C | |
| Warm | **30 °C** | Hot tap water or a 30 °C bath |

> [!warning] Source mismatch
> The manual says cold = 10 °C *below* room temperature and warm = 10 °C *above*. The talk says 10 °C and 30 °C. If room temperature is about 20 °C they agree. Record the actual temperatures either way.

**Start with the cold run.** Use KI, water, and H₂O₂ at the same temperature as the bath.

## Procedure (short form)
1. Apparatus as in Part I. Make the ice/water bath at 10 °C and record its temperature.
2. Put the KI and water in the flask and set it in the bath. Wait **at least 5 min** for the mixture to reach the bath temperature (check with the thermometer).
3. Logger Pro: atm and min, run at least **10 min**, check the sampling rate.
4. **COLLECT**, add the H₂O₂ quickly, stopper gas-tight, stir at a moderate speed (the same in every run).
5. Collect at least 10 min, **STOP**. Record the initial temperature $T_i$ and final temperature $T_f$.
6. **Analyze → Examine**, choose the most linear 2–4 min, **Linear Fit**. Record the equation and the slope to the correct significant figures.
7. Waste in the waste container. Repeat for room temperature, then warm. **Store Latest Run** each time.

## Data table

| Run | Bath target (°C) | $T_i$ (°C) | $T_f$ (°C) | Slope = rate (atm/min) |
|---|---|---|---|---|
| Cold | 10 | | | |
| Room temp | | | | |
| Warm | 30 | | | |

Glue in or sketch the three pressure-vs-time graphs with the fitted region marked.

## Calculation table (Table 2 in the Part II manual)
Use $T=T_\circ+273.15$ K, taking the average of $T_i$ and $T_f$ for each run unless told otherwise.

| Trial | $k$ | $T$ (°C) | $T$ (K) | $1/T$ (K⁻¹) | $\ln k$ |
|---|---|---|---|---|---|
| Cool | | | | | |
| Room temp | | | | | |
| Warm | | | | | |

$$k=\frac{\text{rate}}{[\mathrm{H_2O_2}][\mathrm{I^-}]}=\frac{\text{rate}}{(0.147)(0.025)}=\frac{\text{rate}}{3.67\times10^{-3}\ \mathrm{M^2}}$$
(first order in each; if Part I gave other orders, use those and adjust the units of $k$.)

## Activation energy
$$k=Ae^{-E_a/RT}\ \Rightarrow\ \ln k=-\frac{E_a}{R}\cdot\frac1T+\ln A\qquad(y=mx+b)$$
Plot $\ln k$ (y) against $1/T$ (x) in Excel or Sheets with a linear fit, equation, title, labeled axes, and units. Then
$$E_a=-m\times R,\qquad R=8.314\ \mathrm{J/(mol\,K)},\qquad\text{report in kJ/mol}.$$
The slope is negative, so $E_a$ is positive. In a spreadsheet: `=SLOPE(lnk_range, invT_range)`, then `=-slope*8.314/1000`.

## Pre-lab questions
**Why does a higher temperature speed the reaction up?** More molecules have at least the minimum energy $E_a$ for a collision to produce products. The fraction of such molecules grows exponentially with $T$, which is the $e^{-E_a/RT}$ factor.

**Why wait 5 minutes before the cold run?** The rate is sensitive to temperature. A flask that hasn't reached the bath temperature gives a rate at the wrong $T$ and puts a point off the line.

**Why record $T_i$ and $T_f$?** The mixture can drift during a run. If $T_f$ differs from $T_i$, use the average and note it.

**Why plot $\ln k$ vs $1/T$?** $k$ vs $T$ is an exponential curve. $\ln k$ vs $1/T$ is a straight line whose slope gives $E_a$ directly.

**Why keep the stir rate constant?** Stirring affects how fast O₂ leaves the solution into the gas space and so the measured pressure rise. It must be identical in each run so only temperature changes.

**What does the catalyst do?** Iodide provides a pathway with a lower $E_a$. It is regenerated, so it doesn't appear in the overall equation.

## What to expect
- The rate should rise with temperature, roughly a factor of 2 per 10 °C, which corresponds to $E_a$ near 50–60 kJ/mol. For $E_a\approx56$ kJ/mol the rate ratios are about 2.25 from 10 °C to 20 °C and about 2.13 from 20 °C to 30 °C.
- Values for iodide-catalyzed H₂O₂ decomposition around 50–60 kJ/mol are commonly reported (the uncatalyzed reaction is higher, catalase much lower). This is a rough sanity check only. With three points your result may differ.
- The three points should fall close to a line. If one is far off, check that run's temperatures first.

## Conclusion should report
1. The observed $E_a$ in kJ/mol.
2. What the value says about the decomposition: a moderate $E_a$ means the reaction is slow at room temperature but quite temperature sensitive, and the catalyst has lowered the barrier compared with the uncatalyzed reaction.

> [!todo] Due
> The Part II talk says this is the **last lab notebook upload, due Sunday 11:59 PM**. The Canvas snapshot in [[CHEM 151 Lab]] says Wed 11/18, so check Canvas. The Final Lab Practical is next week (11/30).

---
# Lab record
Fill this in at the bench, then copy into the bound notebook. Checkboxes are clickable in Obsidian.

## Before you leave for lab
- [ ] Goggles, bound lab notebook, pen, calculator, lab manual (on Canvas)
- [ ] Notebook entry started: date, title, purpose, procedure, data tables
- [ ] Part I results in hand (below), because Part II uses the orders
- [ ] Plan: cold bath 10 °C, then room temp, then warm 30 °C (hot tap or 30 °C bath)
- [ ] Mix 1 volumes ready: **15.0 mL** 0.10 M KI · **35.0 mL** distilled water · **10.0 mL** 0.88 M H₂O₂ (60.0 mL total)

## Part I results (from the 11/9 lab)

| Item | Value |
|---|---|
| Bath temperature (°C) | |
| Rate, Mix 1 (atm/min) | |
| Rate, Mix 2 (atm/min) | |
| Rate, Mix 3 (atm/min) | |
| $x$ = log₂(rate₂/rate₁) | |
| $y$ = log₂(rate₃/rate₁) | |
| Orders used for Part II ($x$, $y$) | |
| Average $k$ at that temperature | |

## Part II lab record (Mon 11/16)
Date: ____ · Partner: ____ · Room temp (°C): ____ · Stir setting: ____ (keep the same all day)

### Setup
- [ ] Flask, stir bar, thermometer in the bath, pressure sensor on the stopper, connections airtight
- [ ] Logger Pro open: pressure in **atm**, time in **min**, run length ≥ **10 min**, sampling rate checked
- [ ] Waste container located

### Run 1: Cold (do this one first)
- [ ] Ice/water bath made, target 10 °C. Bath temperature: ____ °C
- [ ] 15.0 mL KI + 35.0 mL water in the flask, flask in the bath
- [ ] Waited ≥ 5 min. Start of wait: ____ End: ____ Mixture temperature: ____ °C
- [ ] 10.0 mL H₂O₂ measured and (kept cold) ready
- [ ] $T_i$ recorded: ____ °C
- [ ] **COLLECT**, H₂O₂ added all at once, stopper in gas-tight, stir on
- [ ] Ran ≥ 10 min, **STOP**. $T_f$ recorded: ____ °C
- [ ] Analyze → Examine, most linear 2–4 min: from ____ to ____ min
- [ ] Linear Fit equation: ______________ Slope: ____ atm/min
- [ ] Store Latest Run · [ ] waste disposed · [ ] flask rinsed

### Run 2: Room temperature
- [ ] Bath at room temp. Bath temperature: ____ °C
- [ ] 15.0 mL KI + 35.0 mL water in the flask, flask in the bath, wait for temperature
- [ ] $T_i$ recorded: ____ °C
- [ ] **COLLECT**, H₂O₂ added, stopper, stir on (same stir setting)
- [ ] Ran ≥ 10 min, **STOP**. $T_f$: ____ °C
- [ ] Examine region: ____ to ____ min
- [ ] Equation: ______________ Slope: ____ atm/min
- [ ] Store Latest Run · [ ] waste disposed

### Run 3: Warm
- [ ] Bath at 30 °C (hot tap or 30 °C bath). Bath temperature: ____ °C
- [ ] KI and water in the flask, in the bath, wait for temperature. **Also bring the H₂O₂ to temperature.**
- [ ] $T_i$ recorded: ____ °C
- [ ] **COLLECT**, H₂O₂ added, stopper, stir on (same stir setting)
- [ ] Ran ≥ 10 min, **STOP**. $T_f$: ____ °C
- [ ] Examine region: ____ to ____ min
- [ ] Equation: ______________ Slope: ____ atm/min
- [ ] Store Latest Run · [ ] waste disposed · [ ] bath emptied

### Run summary

| Run | Bath target (°C) | Bath actual (°C) | $T_i$ (°C) | $T_f$ (°C) | Fit region (min) | Fit equation | Slope = rate (atm/min) |
|---|---|---|---|---|---|---|---|
| 1 Cold | 10 | | | | | | |
| 2 Room | | | | | | | |
| 3 Warm | 30 | | | | | | |

### Observations and problems
Anything that could affect a run: leaks, stopper pops, bubbles, temperature drift, late stopper, stirring changes, a run that looks off.

- Run 1:
- Run 2:
- Run 3:

## Calculations
Average $T=(T_i+T_f)/2$, $T(K)=T(°C)+273.15$, $k=\text{rate}/[(0.147)(0.025)]$ (first order in each; adjust if Part I gave other orders).

| Trial | rate (atm/min) | $k$ | $T$ (°C) | $T$ (K) | $1/T$ (K⁻¹) | $\ln k$ |
|---|---|---|---|---|---|---|
| Cool | | | | | | |
| Room temp | | | | | | |
| Warm | | | | | | |

| Result | Value |
|---|---|
| Slope $m$ of $\ln k$ vs $1/T$ (K) | |
| Intercept $\ln A$ | |
| $R^2$ of the fit | |
| $E_a=-m\times8.314$ J/mol → kJ/mol | |

### Spreadsheet set-up
Put the data in Excel or Sheets so the unit conversions and the fit are done by formula. Columns, with row 2 as the first run:

| Column | A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|---|
| Header | Trial | Avg T (°C) | T (K) | 1/T (1/K) | Rate (atm/min) | k | ln k |
| Row 2 formula | Cool | `=AVERAGE(Ti,Tf)` | `=B2+273.15` | `=1/C2` | slope from Logger Pro | `=E2/(0.147*0.025)` | `=LN(F2)` |

Fit and results (rows 2–4 hold the three runs):
- Slope: `=SLOPE(G2:G4, D2:D4)`
- Intercept: `=INTERCEPT(G2:G4, D2:D4)`
- $R^2$: `=RSQ(G2:G4, D2:D4)`
- $E_a$ in kJ/mol: `=-SLOPE(G2:G4, D2:D4)*8.314/1000`

Scatter plot: **x = column D (1/T), y = column G (ln k)**. Add a linear trendline with the equation and $R^2$ displayed. Include a title, axis labels (with units), and no connecting lines.

## Conclusion scaffold
- The activation energy for the iodide-catalyzed decomposition of H₂O₂ was found to be ______ kJ/mol (from the slope ______ K of $\ln k$ vs $1/T$, $R^2=$ ____).
- Compared with the expected range of roughly 50–60 kJ/mol: ______.
- What it means: a value this size means ______ (how temperature-sensitive the rate is, and that the I⁻ catalyst lowers the barrier compared with the uncatalyzed reaction).
- Sources of error: temperature drift during a run ($T_i$ vs $T_f$), the cold or warm mixture not at the bath temperature, H₂O₂ added slowly or the stopper in late, stir rate changes, leaks, only three points.

## Submission checklist
- [ ] Notebook entry: date, title, purpose, procedure (written before lab)
- [ ] Data section: the three pressure-vs-time plots, each with the fit region and equation
- [ ] Run temperatures ($T_i$, $T_f$) and slopes recorded with correct significant figures
- [ ] Table 2 (k, T in °C and K, 1/T, ln k) filled in
- [ ] Scatter plot of $\ln k$ vs $1/T$ with trendline, equation, title, labeled axes, units
- [ ] $E_a$ with units (kJ/mol)
- [ ] Conclusion
- [ ] Single PDF with a table of contents, uploaded on Canvas. **No late submissions.** The talk says the last upload is due Sunday 11:59 PM, so check Canvas for the date.
