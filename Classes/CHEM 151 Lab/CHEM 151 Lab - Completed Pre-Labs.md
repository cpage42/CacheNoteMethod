Pre-lab work from all 11 manuals, answered. Sections 1 to 4 are written pre-lab exercises (Acid-Base, Kinetics I, Le Chatelier, Intermolecular Forces). Section 5 is Making Solutions and Dilutions, whose required pre-lab calculations I missed on the first pass. Sections 6 to 8 are not labeled pre-lab in the manuals but contain tables and calculations you can prepare before lab (Equilibrium Constant, Electrochemistry predictions, Freezing Point Depression predictions). Kinetics II and Thermochemistry have no pre-lab and nothing computable in advance. Copy answers into your notebook by hand, and check any that depend on your instructor's conventions.

# 1. Acid-Base Chemistry

**Q1. Sketch the weak acid / strong base titration curve and label it.**

![[Pre-Lab Titration Curve.png]]

Key points (example: 25 mL of 0.1 M HA, $K_a = 1.8\times10^{-5}$, titrated with 0.1 M NaOH):

- *Initial pH*: only the weak acid is present, so $[\mathrm{H^+}]=\sqrt{K_aC}$ and pH $\approx 2.9$.
- *Buffer region*: from the first drops of base until about 90 % of the equivalence volume. HA and A$^-$ coexist.
- *½ equivalence point*: half the HA has been converted to A$^-$, so $[\mathrm{HA}]=[\mathrm{A^-}]$ and pH = p$K_a$. This is how you read $K_a$ off the curve.
- *Equivalence point*: moles of base added = moles of acid originally present. Only A$^-$ remains, which is a weak base, so pH $>7$ (about 8.7 here).
- *Endpoint*: the point where the indicator or probe signals a change. It is just past equivalence and is not the same thing as the equivalence point, though it is close for a well-chosen indicator such as phenolphthalein.

**Q2. Henderson–Hasselbalch equation.**

$$\mathrm{pH}=\mathrm{p}K_a+\log\frac{[\mathrm{A^-}]}{[\mathrm{HA}]}$$

It applies in the **buffer region**, the rising section before the equivalence point and roughly between 10 % and 90 % neutralized. It is exact at the half-equivalence point, where the log term is zero. It does not apply at the initial point (no A$^-$ yet), at the equivalence point (no HA left), or after it (excess OH$^-$ sets the pH).

**Q3. Mass needed for 100 mL of 0.1 M.** Moles needed = 0.1 M × 0.100 L = 0.0100 mol, so mass = 0.0100 mol × molar mass.

| Compound | Molar mass (g/mol) | Mass for 100 mL of 0.1 M |
|---|---|---|
| NaCl | 22.99 + 35.45 = 58.44 | **0.584 g** |
| NH$_4$Cl | 14.01 + 4(1.008) + 35.45 = 53.49 | **0.535 g** |
| NaF | 22.99 + 19.00 = 41.99 | **0.420 g** |

**Q4. Net ionic equations and prediction.** Each salt dissociates completely. Then check whether either ion reacts with water.

NaCl: $\mathrm{NaCl(s)\to Na^+(aq)+Cl^-(aq)}$. Na$^+$ is the cation of a strong base and Cl$^-$ is the anion of a strong acid. Neither reacts with water. **Neutral** (pH $\approx 7$).

NH$_4$Cl: $\mathrm{NH_4Cl(s)\to NH_4^+(aq)+Cl^-(aq)}$, then $\mathrm{NH_4^+(aq)+H_2O(l)\rightleftharpoons NH_3(aq)+H_3O^+(aq)}$. NH$_4^+$ is the conjugate acid of a weak base and Cl$^-$ does nothing. **Acidic** (pH $<7$).

NaF: $\mathrm{NaF(s)\to Na^+(aq)+F^-(aq)}$, then $\mathrm{F^-(aq)+H_2O(l)\rightleftharpoons HF(aq)+OH^-(aq)}$. F$^-$ is the conjugate base of the weak acid HF. **Basic** (pH $>7$).

# 2. Kinetics of H$_2$O$_2$ Decomposition, Part I

**Table 1** is given in the manual (all mixtures total 60.0 mL: 15.0 + 35.0 + 10.0, 15.0 + 25.0 + 20.0, 30.0 + 20.0 + 10.0). Use $M_1V_1=M_2V_2$, i.e. $M_2=M_1V_1/V_{\text{total}}$.

Sample: Mixture 1 KI, $(0.10)(15.0)/60.0=0.025$ M. Mixture 1 H$_2$O$_2$, $(0.88)(10.0)/60.0=0.147$ M.

**Table 2. Final concentrations**

| Component | Mixture 1 | Mixture 2 | Mixture 3 |
|---|---|---|---|
| [H$_2$O$_2$] | **0.147 M** | **0.293 M** | **0.147 M** |
| [KI] = [I$^-$] | **0.025 M** | **0.025 M** | **0.050 M** |

What the design shows: Mixture 2 doubles only H$_2$O$_2$ (compare with 1), and Mixture 3 doubles only I$^-$ (compare with 1). If rate doubles, the order is 1. If it quadruples, the order is 2. If it does not change, the order is 0.

# 3. Le Chatelier's Principle

Balanced net ionic equations for each compound dissolved in water:

| Compound | Equation |
|---|---|
| K$_2$CrO$_4$ | $\mathrm{K_2CrO_4(s)\rightleftharpoons 2\,K^+(aq)+CrO_4^{2-}(aq)}$ |
| H$_2$SO$_4$ | $\mathrm{H_2SO_4(aq)\to H^+(aq)+HSO_4^-(aq)}$ (strong, complete), then $\mathrm{HSO_4^-(aq)\rightleftharpoons H^+(aq)+SO_4^{2-}(aq)}$ |
| NaOH | $\mathrm{NaOH(s)\to Na^+(aq)+OH^-(aq)}$ |
| CH$_3$COOH | $\mathrm{CH_3COOH(aq)\rightleftharpoons H^+(aq)+CH_3COO^-(aq)}$ (weak, partial) |
| NaCH$_3$COO | $\mathrm{NaCH_3COO(s)\to Na^+(aq)+CH_3COO^-(aq)}$ |
| HCl | $\mathrm{HCl(aq)\to H^+(aq)+Cl^-(aq)}$ (strong, complete) |
| NH$_4$Cl | $\mathrm{NH_4Cl(s)\rightleftharpoons NH_4^+(aq)+Cl^-(aq)}$ |

Strong electrolytes use a single arrow in most textbooks, while the manual's example uses a double arrow for the dissolving equilibrium. Follow whichever your instructor wants. You can write H$_3$O$^+$ in place of H$^+$.

# 4. Intermolecular Forces

**Table 1. Pre-Lab Table**

| Substance | Formula | Structural formula | Molar mass (g/mol) | H-bond? |
|---|---|---|---|---|
| ethanol | C$_2$H$_5$OH | CH$_3$–CH$_2$–O–H | 46.07 | Yes |
| 1-propanol | C$_3$H$_7$OH | CH$_3$–CH$_2$–CH$_2$–O–H | 60.10 | Yes |
| 1-butanol | C$_4$H$_9$OH | CH$_3$–CH$_2$–CH$_2$–CH$_2$–O–H | 74.12 | Yes |
| n-pentane | C$_5$H$_{12}$ | CH$_3$–CH$_2$–CH$_2$–CH$_2$–CH$_3$ | 72.15 | No |
| methanol | CH$_3$OH | CH$_3$–O–H | 32.04 | Yes |
| n-hexane | C$_6$H$_{14}$ | CH$_3$–(CH$_2$)$_4$–CH$_3$ | 86.18 | No |

Draw each structure out fully in the notebook, with every C–H bond shown and the O–H bond drawn explicitly on the alcohols. The H-bond column is "Yes" only where H is bonded directly to O (or N or F). Alkanes have only C–H bonds, so they have dispersion forces only. Dispersion forces grow with molar mass, which explains the trend among the alcohols and between pentane and hexane.

# 5. Making Solutions and Dilutions

Molar masses: Fe(NO$_3$)$_3$·9H$_2$O = 55.845 + 3(62.004) + 9(18.015) = 404.00 g/mol. KSCN = 39.098 + 32.06 + 12.011 + 14.007 = 97.18 g/mol. Mass = M × V(L) × molar mass.

**Part A: mass needed for each stock solution (100 mL, solvent is the nitric acid solution)**

| Solution | Moles needed | Mass |
|---|---|---|
| a. 0.1 M Fe$^{3+}$ from Fe(NO$_3$)$_3$·9H$_2$O | 0.1 M × 0.100 L = 0.0100 mol | 0.0100 × 404.00 = **4.040 g** |
| b. 20 mM Fe$^{3+}$ | 0.020 M × 0.100 L = 0.00200 mol | 0.00200 × 404.00 = **0.808 g** |
| c. 20 mM SCN$^-$ from KSCN | 0.00200 mol | 0.00200 × 97.18 = **0.194 g** |

The older version of the manual adds *d.* 250 mL of 0.12 M S$_2$O$_3^{2-}$ from Na$_2$S$_2$O$_3$·5H$_2$O (248.18 g/mol), in distilled water: 0.12 × 0.250 = 0.0300 mol, so **7.445 g**.

**Part B: dilutions, using $M_1V_1=M_2V_2$ so $V_1=M_2V_2/M_1$**

| Solution | Calculation | Stock to use | Nitric acid solution to add |
|---|---|---|---|
| a. 50 mL of 8 mM Fe$^{3+}$ | (8)(50)/20 | **20.0 mL** | 30.0 mL |
| b. 50 mL of 6 mM Fe$^{3+}$ | (6)(50)/20 | **15.0 mL** | 35.0 mL |
| c. 50 mL of 4 mM Fe$^{3+}$ | (4)(50)/20 | **10.0 mL** | 40.0 mL |
| d. 100 mL of 0.2 mM SCN$^-$ | (0.2)(100)/20 | **1.00 mL** | 99.0 mL |

Fill the 50 mL (or 100 mL) volumetric flask to the mark with the nitric acid solution. The volume added is the final volume minus the stock volume.

**Part C: tables for next week's Equilibrium Constant lab**

Table 2 (calibration, 30.0 mL final each). SCN$^-$ is diluted from 0.2 mM: $[\mathrm{SCN^-}]_{in}=(0.2\text{ mM})(V_{SCN})/30.0$. Because SCN$^-$ is limiting, $[\mathrm{FeSCN^{2+}}]_{eq}=[\mathrm{SCN^-}]_{in}$. The Fe$^{3+}$ is the same in all four: (0.100 M)(10.0)/30.0 = 0.0333 M.

| Solution | SCN$^-$ volume | [SCN$^-$]$_{in}$ (M) | [FeSCN$^{2+}$]$_{eq}$ (M) |
|---|---|---|---|
| Blank | 0.0 mL | 0 | 0 |
| 1 | 5.0 mL | $3.33\times10^{-5}$ | $3.33\times10^{-5}$ |
| 2 | 10.0 mL | $6.67\times10^{-5}$ | $6.67\times10^{-5}$ |
| 3 | 20.0 mL | $1.33\times10^{-4}$ | $1.33\times10^{-4}$ |

Table 3 (reaction solutions, 20.0 mL final each, 10.0 mL of each reagent, so every concentration is halved):

| Solution | Fe$^{3+}$ used | [Fe$^{3+}$]$_{in}$ (M) | [SCN$^-$]$_{in}$ (M) |
|---|---|---|---|
| 4 | 10.0 mL of 4.00 mM | $2.00\times10^{-3}$ | $1.00\times10^{-4}$ |
| 5 | 10.0 mL of 6.00 mM | $3.00\times10^{-3}$ | $1.00\times10^{-4}$ |
| 6 | 10.0 mL of 8.00 mM | $4.00\times10^{-3}$ | $1.00\times10^{-4}$ |

The Equilibrium Constant manual's Table 4 uses the same solutions (10.0 mL of 4.00, 6.00 and 8.00 mM Fe$^{3+}$ plus 10.0 mL of 0.2 mM SCN$^-$).

# 6. Measuring an Equilibrium Constant (what can be prepared)

No written pre-lab, but the manual says to use dilution calculations to fill in Table 4, and the ICE setup can be done ahead. The initial concentrations are in Section 5, Part C.

ICE setup for solutions 4 to 6, with $x=[\mathrm{FeSCN^{2+}}]_{eq}$ from the calibration line ($x=(A-b)/m$):

| | Fe$^{3+}$ | SCN$^-$ | FeSCN$^{2+}$ |
|---|---|---|---|
| I | $[\mathrm{Fe^{3+}}]_{in}$ | $1.00\times10^{-4}$ M | 0 |
| C | $-x$ | $-x$ | $+x$ |
| E | $[\mathrm{Fe^{3+}}]_{in}-x$ | $1.00\times10^{-4}-x$ | $x$ |

$$K_c=\frac{[\mathrm{FeSCN^{2+}}]}{[\mathrm{Fe^{3+}}][\mathrm{SCN^-}]}=\frac{x}{([\mathrm{Fe^{3+}}]_{in}-x)([\mathrm{SCN^-}]_{in}-x)}$$

Upper bound for $x$: it cannot exceed $1.00\times10^{-4}$ M, since SCN$^-$ is limiting. Expect $K_c$ in the low hundreds (literature is about 150 to 300 depending on conditions).

# 7. Electrochemistry (predictions for Tables 1 to 4)

No pre-lab is printed. These are the table entries worked out from the manual's Table 16.1, with $E^\circ_{cell}=E^\circ_{red}(\text{cathode})-E^\circ_{red}(\text{anode})$. Confirm against what you observe.

**Part A. Metals in 6 M HCl.** Overall: $\mathrm{M(s)+2H^+(aq)\to M^{2+}(aq)+H_2(g)}$, with oxidation $\mathrm{M\to M^{2+}+2e^-}$ and reduction $\mathrm{2H^+ + 2e^-\to H_2}$ ($E^\circ=0.00$ V).

| Metal | Oxidation half-reaction | $E^\circ_{ox}$ (V) | $E^\circ_{cell}$ (V) | Expected observation |
|---|---|---|---|---|
| Cu | Cu $\to$ Cu$^{2+}$ + 2e$^-$ | $-0.34$ | $-0.34$ | No reaction (non-spontaneous) |
| Sn | Sn $\to$ Sn$^{2+}$ + 2e$^-$ | $+0.1375$ | $+0.1375$ | Very slow, few bubbles |
| Fe | Fe $\to$ Fe$^{2+}$ + 2e$^-$ | $+0.447$ | $+0.447$ | Steady slow bubbling |
| Zn | Zn $\to$ Zn$^{2+}$ + 2e$^-$ | $+0.7618$ | $+0.7618$ | Faster bubbling |
| Mg | Mg $\to$ Mg$^{2+}$ + 2e$^-$ | $+2.372$ | $+2.372$ | Vigorous, fast |

Ordering of reactivity (Mg > Zn > Fe > Sn > Cu) follows the reduction table: the more negative $E^\circ_{red}$, the stronger the reducing agent. Cu sits above H$^+$ and does not react.

**Part B. Aluminum can in CuCl$_2$.** The scratched interior removes the Al$_2$O$_3$ layer.

- Oxidation: $\mathrm{Al\to Al^{3+}+3e^-}$, $E^\circ_{ox}=+1.662$ V (times 2)
- Reduction: $\mathrm{Cu^{2+}+2e^-\to Cu}$, $E^\circ_{red}=+0.34$ V (times 3)
- Cell: $\mathrm{2\,Al(s)+3\,Cu^{2+}(aq)\to 2\,Al^{3+}(aq)+3\,Cu(s)}$, $E^\circ_{cell}=0.34+1.662=$ **+2.00 V**

Observation: copper-colored deposit on the scratched ring, and the can tears along it because the aluminum wall is eaten through.

**Part C. Sodium in water.**

- Oxidation: $\mathrm{Na\to Na^++e^-}$, $E^\circ_{ox}=+2.71$ V (times 2)
- Reduction: $\mathrm{2\,H_2O+2e^-\to H_2+2\,OH^-}$
- Cell: $\mathrm{2\,Na(s)+2\,H_2O(l)\to 2\,Na^+(aq)+2\,OH^-(aq)+H_2(g)}$

Using the manual's table (writing the reduction as $\mathrm{2H^++2e^-\to H_2}$, 0.00 V) gives $E^\circ_{cell}=+2.71$ V. In water, where the reduction is the one above ($E^\circ=-0.828$ V), it is +1.88 V. Either way it is strongly spontaneous. Phenolphthalein turns pink because OH$^-$ is produced (basic), and the H$_2$ can ignite.

**Part D. Zn/Cu cell.**

- Anode (oxidation): $\mathrm{Zn(s)\to Zn^{2+}+2e^-}$, $E^\circ_{ox}=+0.7618$ V
- Cathode (reduction): $\mathrm{Cu^{2+}+2e^-\to Cu(s)}$, $E^\circ_{red}=+0.34$ V
- Cell: $\mathrm{Zn(s)+Cu^{2+}(aq)\to Zn^{2+}(aq)+Cu(s)}$, $E^\circ_{cell}\approx$ **+1.10 V** (manual: 1.100 V; its Table 16.1 values give 1.10 V)
- Shorthand: $\mathrm{Zn(s)\,|\,Zn^{2+}(aq,1\,M)\,\|\,Cu^{2+}(aq,1\,M)\,|\,Cu(s)}$, where $\|$ is the salt bridge (KNO$_3$).

Why the leads go as stated: the red (positive) lead goes on the metal with the larger reduction potential (Cu, the cathode) and black on Zn (the anode). The probe reports the potential of red relative to black, so this arrangement reads a positive voltage, consistent with the spontaneous direction. Reversed leads would read about $-1.10$ V.

NaOH additions, using $E=E^\circ-\dfrac{RT}{nF}\ln Q$ with $Q=\dfrac{[\mathrm{Zn^{2+}}]}{[\mathrm{Cu^{2+}}]}$:

- Adding OH$^-$ to the **Cu$^{2+}$** side precipitates Cu(OH)$_2$, lowering [Cu$^{2+}$]. Q rises, so the voltage **drops** and the reaction becomes less spontaneous.
- Adding OH$^-$ to the **Zn$^{2+}$** side precipitates Zn(OH)$_2$, lowering [Zn$^{2+}$]. Q falls, so the voltage **rises** and the reaction becomes more spontaneous. (With a lot of excess OH$^-$, the zinc hydroxide can re-dissolve as Zn(OH)$_4^{2-}$, so the effect has a limit.)

# 8. Freezing Point Depression (predictions)

No pre-lab is printed. These are the expected values to compare against, using $\Delta T_{fp}=K_{fp}\,m\,i$ with $K_{fp}=1.86\ ^\circ\mathrm{C\,kg/mol}$ for water.

| Solute | Moles | Molality (mol/kg) | $i$ (ideal) | Predicted $\Delta T_{fp}$ | Predicted $T_{fp}$ |
|---|---|---|---|---|---|
| Sucrose, 17 g (342.30 g/mol) in 50 g water | 0.0497 | 0.993 | 1 | 1.85 $^\circ$C | $-1.85\ ^\circ$C |
| NaCl, 2.5 g (58.44 g/mol) in 50 g water | 0.0428 | 0.856 | 2 | 3.18 $^\circ$C | $-3.18\ ^\circ$C |

The manual does not state the water mass for NaCl ("repeat Part D using 2.5 g"), so I assumed 50 g, the same as sucrose. If your water mass differs, redo the molality. At about 0.9 m, NaCl will measure below the ideal $i=2$ (roughly 1.8), since the manual notes ions stop behaving independently at higher concentration. After the lab, $i=\Delta T_{fp}/(K_{fp}\,m)$.

# 9. Not included

Kinetics II (Table 1 is just Mixture 1 from Kinetics I, with the same concentrations: 0.147 M H$_2$O$_2$ and 0.025 M I$^-$) and Thermochemistry (all work is measured in lab) have nothing to prepare beyond reading. For Kinetics II, convert your three temperatures to kelvin before plotting $\ln k$ against $1/T$.
