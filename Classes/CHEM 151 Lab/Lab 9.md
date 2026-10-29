---
class: "[[CHEM 151 Lab]]"
tags: [chem-151-lab, pre-lab, lab-notebook]
---
# Lab 9
Class: [[CHEM 151 Lab]] · Related: [[CHEM 151 Lab - Completed Pre-Labs]]

## Pre-lab exercises

### 1. Weak acid / strong base titration curve

![[Lab 9 Titration Curve.png]]

Example plotted: 25 mL of 0.1 M HA with $pK_a = 4.75$, titrated with 0.1 M strong base.

- **Initial pH:** only the weak acid is present, so it is acidic but not very low (about 2.9 here).
- **Buffer region:** the shallow stretch before the jump, where HA and A⁻ coexist.
- **½ equivalence point:** half the HA has become A⁻, so $[\mathrm{HA}]=[\mathrm{A^-}]$ and pH = $pK_a$.
- **Equivalence point:** moles of base added = moles of acid originally present. Only A⁻ remains, so pH > 7 (about 8.7 here).
- **Endpoint:** where the indicator changes color. It sits just past the equivalence point.

### 2. Henderson–Hasselbalch

$$\mathrm{pH}=\mathrm{p}K_a+\log\frac{[\mathrm{A^-}]}{[\mathrm{HA}]}$$

Applies in the **buffer region**, roughly 10 % to 90 % neutralized. It is exact at the ½ equivalence point, where the log term is 0. It does not apply at the start, at equivalence, or past equivalence.

### 3. Grams for 100 mL of 0.1 M

Moles needed = 0.1 M × 0.100 L = 0.0100 mol, so mass = 0.0100 mol × molar mass.

| Compound | Molar mass (g/mol) | Mass |
|---|---|---|
| NaCl | 58.44 | **0.584 g** |
| NaF | 41.99 | **0.420 g** |
| NH₄Cl | 53.49 | **0.535 g** |

### 4. Net ionic equations and prediction

| Compound | Dissociation                                | Reacts with water?                                                                                          | Result                  |
| -------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------- |
| NaCl     | $\mathrm{NaCl(s)\to Na^+(aq)+Cl^-(aq)}$     | Neither ion does. Na⁺ is from a strong base and Cl⁻ from a strong acid.                                     | **Neutral**, about pH 7 |
| NaF      | $\mathrm{NaF(s)\to Na^+(aq)+F^-(aq)}$       | F⁻ is the conjugate base of weak HF: $\mathrm{F^-(aq)+H_2O(l)\rightleftharpoons HF(aq)+OH^-(aq)}$           | **Basic**               |
| NH₄Cl    | $\mathrm{NH_4Cl(s)\to NH_4^+(aq)+Cl^-(aq)}$ | NH₄⁺ is the conjugate acid of weak NH₃: $\mathrm{NH_4^+(aq)+H_2O(l)\rightleftharpoons NH_3(aq)+H_3O^+(aq)}$ | **Acidic**              |

## Objectives
- Determine the $K_a$ of an unknown weak acid from its titration curve with a strong base, and identify the acid.
- See how a buffer responds to added acid and base compared with distilled water.
- See how dissolving salts (hydrolysis) changes pH.

## Part A: $K_a$ of a weak acid

**Unknown #112.** 20 mL of 0.1 M unknown acid + 20 mL distilled water, titrated with 0.200 M NaOH, phenolphthalein indicator, pH probe in Logger Pro.

| Run | pH at equivalence | pH at ½ equivalence = p$K_a$ | $K_a = 10^{-\text{p}K_a}$ |
|---|---|---|---|
| 1 | 8.27 | 4.70 | $2.0\times10^{-5}$ |
| 2 | 8.29 | 4.81 | $1.5\times10^{-5}$ |
| **Average** | 8.28 | **4.76** | $\mathbf{1.8\times10^{-5}}$ |

*Run 2 is likely more accurate.*

> [!note] Titration curves
> Insert the stored Logger Pro titration curves (Runs 1 and 2) here.

**Calculation (Run 1):** at ½ equivalence, $[\mathrm{HA}] = [\mathrm{A^-}]$, so $[\mathrm{H^+}] = K_a$ and pH = p$K_a$.
$$K_a = 10^{-4.70} = 2.0\times10^{-5}$$

**Identification:** the average $K_a = 1.8\times10^{-5}$ matches **acetic acid** ($K_a = 1.8\times10^{-5}$, p$K_a$ = 4.74) in Table 2. The next closest acids are formic ($2.1\times10^{-4}$, p$K_a$ 3.68) and KHP ($3.9\times10^{-6}$, p$K_a$ 5.41), both about a full pH unit away from what was measured.

## Part B: Buffer vs. distilled water

**Buffer** (Run 3: titrated to ½ equivalence, pH ≈ p$K_a$ ≈ 4.76, so $[\mathrm{A^-}]/[\mathrm{HA}] \approx 1$)

| Addition | pH | Change |
|---|---|---|
| Start (½ equivalence) | ≈ 4.76 (not recorded; taken as p$K_a$) | — |
| + 5 drops 1 M NaOH | 5.07 | ≈ +0.3 |
| + 5 drops 1 M HCl | 4.74 | −0.33 |
| + 5 more drops 1 M HCl | 4.53 | −0.21 |

**Lab distilled water** (50 mL)

| Addition | pH | Change |
|---|---|---|
| Start | 7.6 | — |
| + 5 drops 1 M NaOH | 11.96 | +4.36 |
| + 5 drops 1 M HCl | 3.34 | −8.62 |

The buffer is far more resistant to pH change from acid and base than water: tenths of a pH unit versus 4–9 units for the same drops.

## Part C: Hydrolysis of salts

0.1 M of each salt in 100 mL ionic strength adjuster (ISA).

| Salt | Initial pH (ISA) | Final pH | Change | Result |
|---|---|---|---|---|
| NaCl | 7.85 | 8.04 | +0.19 | ≈ no change → **neutral** |
| NaF | 8.16 | 9.17 | +1.01 | **raised** → basic |
| NH₄Cl | 8.13 | 7.69 | −0.44 | **lowered** → acidic |

**Reactions with water (Part C step 7)**

NaCl:
- a. $\mathrm{NaCl(s)} \xrightarrow{\mathrm{H_2O}} \mathrm{Na^+(aq)} + \mathrm{Cl^-(aq)}$
	- i. $\mathrm{Na^+(aq)} + \mathrm{H_2O(l)} \rightleftharpoons \mathrm{NaOH(aq)} + \mathrm{H^+(aq)}$: strong base + strong acid, so Na⁺ is neutral.
	- ii. $\mathrm{Cl^-(aq)} + \mathrm{H_2O(l)} \rightleftharpoons \mathrm{HCl(aq)} + \mathrm{OH^-(aq)}$: strong acid + strong base, so Cl⁻ is neutral.
	- Overall **neutral**.

NaF:
- a. $\mathrm{NaF(s)} \xrightarrow{\mathrm{H_2O}} \mathrm{Na^+(aq)} + \mathrm{F^-(aq)}$
	- i. $\mathrm{Na^+(aq)} + \mathrm{H_2O(l)} \rightleftharpoons \mathrm{NaOH(aq)} + \mathrm{H^+(aq)}$: neutral, as above.
	- ii. $\mathrm{F^-(aq)} + \mathrm{H_2O(l)} \rightleftharpoons \mathrm{HF(aq)} + \mathrm{OH^-(aq)}$: HF is a weak acid and OH⁻ a strong base, so the OH⁻ wins.
	- Overall **basic**.

NH₄Cl:
- a. $\mathrm{NH_4Cl(s)} \xrightarrow{\mathrm{H_2O}} \mathrm{NH_4^+(aq)} + \mathrm{Cl^-(aq)}$
	- i. $\mathrm{NH_4^+(aq)} + \mathrm{H_2O(l)} \rightleftharpoons \mathrm{NH_3(aq)} + \mathrm{H_3O^+(aq)}$: NH₃ is a weak base and H₃O⁺ a strong acid, so the H₃O⁺ wins.
	- ii. $\mathrm{Cl^-(aq)} + \mathrm{H_2O(l)} \rightleftharpoons \mathrm{HCl(aq)} + \mathrm{OH^-(aq)}$: neutral, as above.
	- Overall **acidic**.

## Questions from the procedure

**A17. What is $K_a$, and which acid were you given?**
p$K_a$ = 4.70 (Run 1) and 4.81 (Run 2), so $K_a = 2.0\times10^{-5}$ and $1.5\times10^{-5}$, average $1.8\times10^{-5}$. Unknown #112 is acetic acid.

**A18. How do the two trials compare?**
They agree closely: equivalence pH 8.27 vs 8.29, and p$K_a$ 4.70 vs 4.81 (difference 0.11, about 2 % of the value). The small spread comes from reading the ½-equivalence point off the curve by estimating half the time to equivalence, which assumes a perfectly constant burette drip rate.

**B5. What can you conclude about the buffer's capacity to absorb acid or base? Why isn't distilled water exactly pH 7?**
The buffer absorbed 5 drops of 1 M NaOH or HCl with a change of only about 0.2–0.3 pH units, while the same additions moved distilled water by 4–9 units. At ½ equivalence the solution holds equal amounts of HA and A⁻: added OH⁻ is consumed by HA, and added H⁺ is consumed by A⁻, so [H⁺] barely moves. The capacity is limited, though: each addition used up some of one component, and the pH kept drifting in the same direction with each dose of HCl.
Distilled water read 7.6 instead of 7.0. Pure water has almost no buffering, so tiny amounts of dissolved substances shift it noticeably: dissolved CO₂ (forms carbonic acid, which would push it below 7), trace ions or residue from the lab, the probe's calibration and response in a solution with almost no ions, and temperature, since $K_w$ (and so neutral pH) changes slightly with temperature.

## Conclusion

**1. Titration curves, $K_a$, and unknown.** Both titrations of unknown #112 show the expected weak acid / strong base shape: a moderately acidic starting pH, a flat buffer region, a steep rise through the equivalence point, and a plateau in excess NaOH. The equivalence points were basic (pH 8.27 and 8.29) because at equivalence the solution contains only A⁻, which hydrolyzes to make OH⁻. (Theory for acetic acid under these conditions predicts about 8.7; reading the equivalence point slightly early on the steep part of the curve lowers the value.) The pH at ½ equivalence gave p$K_a$ = 4.70 and 4.81, an average $K_a$ of $1.8\times10^{-5}$, which identifies the unknown as **acetic acid**.

**2. Buffer and distilled water.** At ½ equivalence the solution was an acetic acid / acetate buffer. Adding 5 drops of 1 M NaOH raised the pH only to 5.07, and two rounds of 5 drops of 1 M HCl lowered it to 4.74 and then 4.53. The same additions to distilled water sent the pH from 7.6 to 11.96, then down to 3.34. This is as expected: the buffer neutralizes added H⁺ with A⁻ and added OH⁻ with HA, while water has nothing to neutralize either. The starting pH of distilled water (7.6, not 7.0) is attributed to dissolved substances, probe response in very low-ion water, and the temperature dependence of $K_w$.

**3. Salts and pH.** All three salts behaved as predicted in the pre-lab. NaCl barely changed the pH (+0.19) because Na⁺ and Cl⁻ come from a strong base and a strong acid and don't react with water. NaF raised the pH (+1.01) because F⁻, the conjugate base of the weak acid HF, takes H⁺ from water and releases OH⁻. NH₄Cl lowered the pH (−0.44) because NH₄⁺, the conjugate acid of the weak base NH₃, donates H⁺ to water. The sizes of the changes don't match theory for salts in pure water (about pH 8.1 for 0.1 M NaF and 5.1 for 0.1 M NH₄Cl), because the salts were dissolved in ionic strength adjuster, which started near pH 8 rather than in neutral water. The direction of each change is the meaningful result.
