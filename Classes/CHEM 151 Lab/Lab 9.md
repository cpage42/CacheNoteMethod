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
Find the $K_a$ of an unknown weak acid by titrating it with NaOH, see how a buffer handles added acid/base compared to water, and see how dissolving salts changes pH.

## Part A: Finding $K_a$

Unknown #112. 20 mL of 0.1 M acid + 20 mL DI water, titrated with 0.200 M NaOH (phenolphthalein + pH probe in Logger Pro).

| Run | pH at eq. pt. | pH at ½ eq. pt. (= p$K_a$) | $K_a$ |
|---|---|---|---|
| 1 | 8.27 | 4.70 | $2.0\times10^{-5}$ |
| 2 | 8.29 | 4.81 | $1.5\times10^{-5}$ |
| avg | 8.28 | 4.76 | $1.8\times10^{-5}$ |

Run 2 probably more accurate.

*(titration curves from Logger Pro go here)*

At the ½ eq. point [HA] = [A⁻], so pH = p$K_a$:
$$K_a = 10^{-\text{p}K_a} = 10^{-4.70} = 2.0\times10^{-5}$$

Avg $K_a$ = $1.8\times10^{-5}$ → matches **acetic acid** from Table 2 (p$K_a$ 4.74). Formic (p$K_a$ 3.68) and KHP (p$K_a$ 5.41) are both way off.

## Part B: Buffer

Run 3: titrated to the ½ eq. point (pH ≈ 4.76, didn't write down exact value), then added acid/base.

| Added | Buffer pH | Lab water pH |
|---|---|---|
| nothing | ~4.76 | 7.6 |
| 5 drops 1 M NaOH | 5.07 | 11.96 |
| 5 drops 1 M HCl | 4.74 | 3.34 |
| 5 more drops 1 M HCl | 4.53 | — |

Buffer is way more resistant to pH change than water. Buffer only moved ~0.2–0.3 each time, water jumped 4+ units.

## Part C: Salts

0.1 M of each in 100 mL ISA.

| Salt | Initial | Final | Change |
|---|---|---|---|
| NaCl | 7.85 | 8.04 | +0.19 (basically nothing) |
| NaF | 8.16 | 9.17 | +1.01 (more basic) |
| NH₄Cl | 8.13 | 7.69 | −0.44 (more acidic) |

**Reactions:**

NaCl → neutral
- $\mathrm{NaCl(s)} \to \mathrm{Na^+(aq)} + \mathrm{Cl^-(aq)}$
- $\mathrm{Na^+} + \mathrm{H_2O} \rightleftharpoons \mathrm{NaOH} + \mathrm{H^+}$ (strong base + strong acid, cancels out)
- $\mathrm{Cl^-} + \mathrm{H_2O} \rightleftharpoons \mathrm{HCl} + \mathrm{OH^-}$ (strong acid + strong base, cancels out)

NaF → basic
- $\mathrm{NaF(s)} \to \mathrm{Na^+(aq)} + \mathrm{F^-(aq)}$
- $\mathrm{Na^+} + \mathrm{H_2O} \rightleftharpoons \mathrm{NaOH} + \mathrm{H^+}$ (neutral)
- $\mathrm{F^-} + \mathrm{H_2O} \rightleftharpoons \mathrm{HF} + \mathrm{OH^-}$ (HF is weak, OH⁻ is strong → basic)

NH₄Cl → acidic
- $\mathrm{NH_4Cl(s)} \to \mathrm{NH_4^+(aq)} + \mathrm{Cl^-(aq)}$
- $\mathrm{NH_4^+} + \mathrm{H_2O} \rightleftharpoons \mathrm{NH_3} + \mathrm{H_3O^+}$ (NH₃ is weak, H₃O⁺ is strong → acidic)
- $\mathrm{Cl^-} + \mathrm{H_2O} \rightleftharpoons \mathrm{HCl} + \mathrm{OH^-}$ (neutral)

## Questions

**A17.** p$K_a$ = 4.70 and 4.81, so $K_a$ ≈ $1.8\times10^{-5}$ avg. Unknown #112 is acetic acid.

**A18.** The two runs were really close (eq. pt. 8.27 vs 8.29, p$K_a$ 4.70 vs 4.81). The difference is probably from estimating the ½ eq. point as half the time to the eq. point, which only works if the burette drips at a perfectly steady rate.

**B5.** The buffer can absorb a decent amount of acid or base without the pH changing much, since the HA eats added OH⁻ and the A⁻ eats added H⁺. It's not unlimited though; the pH kept slowly dropping as we added more HCl. Water has nothing to neutralize anything so it swings like crazy.
DI water wasn't exactly 7 (we got 7.6) because pure water has basically no buffering, so tiny amounts of stuff change it a lot: dissolved CO₂, random dissolved lab stuff, probe error (probes don't read well in water with almost no ions), and $K_w$ changes a little with temperature.

## Conclusion
Both titration curves had the normal weak acid/strong base shape: starts kind of acidic, flat buffer region, big jump at the equivalence point, then levels off. The eq. points were basic (~8.28) because at that point only A⁻ is left and it makes OH⁻ with water. This is a bit lower than the ~8.7 you'd expect for acetic acid, probably from picking the eq. point a little early on the steep part. Using pH = p$K_a$ at the ½ eq. point we got $K_a$ ≈ $1.8\times10^{-5}$, so our unknown was acetic acid.

The buffer only changed by a few tenths when we added NaOH and HCl, while the same drops sent DI water from 7.6 to 11.96 and then down to 3.34. That's what we expected since the buffer has both HA and A⁻ to neutralize whatever gets added.

The salts all went the way we predicted. NaCl barely changed because Na⁺ and Cl⁻ come from a strong base and strong acid so they don't react with water. NaF went up because F⁻ is the conjugate base of a weak acid and pulls H⁺ off water, making OH⁻. NH₄Cl went down because NH₄⁺ is the conjugate acid of a weak base and gives H⁺ to water. The actual pH values weren't what you'd get in pure water (should be ~8.1 for NaF and ~5.1 for NH₄Cl) since we dissolved them in ISA, which already started around pH 8, but the direction of the change is what we were looking for.
