---
class: "[[CHEM 151]]"
date: 2026-10-29
tags: [worksheet, acid-base, titration]
---
# CHEM151 Titrations Worksheet
Class: [[CHEM 151]]

**Name:** 

---

## Weak Acid–Strong Base Titration

Consider the titration of 100.0 mL of 0.5 M hypothetical weak acid "HA" (where $\mathrm{p}K_a = 3.75$) with 1.00 M KOH.

a. What is the $K_a$ of this weak acid (no base added, just the weak acid)?

b. Calculate the initial pH of the weak acid (HA) solution (no base added yet)?

c. What is the pH after the addition of 10 mL of KOH?

c. What is the pH after the addition of 25 mL of KOH?

d. What is the pH after the addition of 50 mL of KOH?

e. What is the pH after the addition of 75 mL of KOH?

---

# Worked Solutions

> [!summary] Answers
> | Part | KOH added | Region | pH |
> | --- | --- | --- | --- |
> | a | — | — | $K_a = 1.78\times10^{-4}$ |
> | b | 0 mL | weak acid only | **2.03** |
> | c | 10 mL | buffer | **3.15** |
> | c (2nd) | 25 mL | half-equivalence | **3.75** |
> | d | 50 mL | equivalence | **8.64** |
> | e | 75 mL | excess base | **13.15** |

## The big picture: four regions, four methods

Every point on a weak acid / strong base titration curve falls into one of four regions. The first job in every part is figuring out **which region you're in**, because each one uses a different method.

| Region | What's in the beaker | Method |
| --- | --- | --- |
| Before any base | only HA | weak acid equilibrium: $[\mathrm{H^+}] = \sqrt{K_a C}$ |
| Before equivalence | HA and A⁻ | buffer: Henderson–Hasselbalch |
| At equivalence | only A⁻ | weak base equilibrium: $K_b$, $[\mathrm{OH^-}] = \sqrt{K_b C}$ |
| Past equivalence | A⁻ and extra OH⁻ | the leftover strong base sets the pH |

How to tell which region you're in: compare **moles of OH⁻ added** to **moles of HA you started with**.

**Starting moles of HA (used in every part):**
$$n_{\mathrm{HA}} = (0.1000\ \text{L})(0.5\ \text{M}) = 0.0500\ \text{mol}$$

**Volume of KOH needed to reach equivalence:**
$$V_{eq} = \frac{0.0500\ \text{mol}}{1.00\ \text{M}} = 0.0500\ \text{L} = 50\ \text{mL}$$

So 10 mL and 25 mL are before equivalence, 50 mL is exactly at equivalence, and 75 mL is past it.

---

## Part a: $K_a$ from p$K_a$

**Definition.** The "p" in front of anything means $-\log_{10}$:
$$\mathrm{p}K_a = -\log K_a$$

**Undo the log.** Multiply both sides by −1, then raise 10 to each side:
$$\log K_a = -\mathrm{p}K_a \quad\Rightarrow\quad K_a = 10^{-\mathrm{p}K_a}$$

**Plug in.**
$$K_a = 10^{-3.75} = \boxed{1.78\times10^{-4}}$$

**Sanity check.** $K_a$ is much less than 1, so HA is a weak acid: most of it stays as HA in water. A p$K_a$ between 3 and 4 means $K_a$ is between $10^{-4}$ and $10^{-3}$ ✓.

---

## Part b: Initial pH (0 mL KOH)

**Region:** no base has been added, so the beaker holds only the weak acid at $C = 0.5$ M.

### Set up the equilibrium
HA only partly dissociates:
$$\mathrm{HA(aq) \rightleftharpoons H^+(aq) + A^-(aq)} \qquad K_a = \frac{[\mathrm{H^+}][\mathrm{A^-}]}{[\mathrm{HA}]}$$

### ICE table (molarity)
Let $x$ be how much HA dissociates.

| | HA | H⁺ | A⁻ |
| --- | --- | --- | --- |
| Initial | 0.5 | 0 | 0 |
| Change | $-x$ | $+x$ | $+x$ |
| Equilibrium | $0.5 - x$ | $x$ | $x$ |

(Water's own H⁺, $10^{-7}$ M, is negligible next to what the acid makes.)

### Plug into $K_a$
$$K_a = \frac{x \cdot x}{0.5 - x} = \frac{x^2}{0.5 - x}$$

### The approximation
$K_a$ is small, so very little HA dissociates and $x \ll 0.5$. That means $0.5 - x \approx 0.5$:
$$K_a \approx \frac{x^2}{C} \quad\Rightarrow\quad x = [\mathrm{H^+}] = \sqrt{K_a C}$$

This is where the $\sqrt{K_a C}$ shortcut comes from. $C$ is just the starting concentration of the weak acid.

### Solve
$$[\mathrm{H^+}] = \sqrt{(1.78\times10^{-4})(0.5)} = \sqrt{8.89\times10^{-5}} = 9.43\times10^{-3}\ \text{M}$$
$$\mathrm{pH} = -\log(9.43\times10^{-3}) = \boxed{2.03}$$

### Check the approximation (5% rule)
The approximation is OK if $x$ is less than 5% of $C$:
$$\frac{x}{C} = \frac{9.43\times10^{-3}}{0.5} = 1.9\% < 5\% \ \checkmark$$

(Solving the full quadratic $x^2 + K_a x - K_a C = 0$ gives pH = 2.03 too.)

**Sanity check.** A 0.5 M *strong* acid would have pH = $-\log 0.5$ = 0.30. A weak acid at the same concentration should be much less acidic, and 2.03 is ✓.

---

## Part c: 10 mL KOH (buffer region)

**Region:** 10 mL < 50 mL, so we're before equivalence. Some HA has been converted to A⁻, and both are present. That's a buffer.

### Step 1: Moles of base added
$$n_{\mathrm{OH^-}} = (0.010\ \text{L})(1.00\ \text{M}) = 0.0100\ \text{mol}$$

### Step 2: Neutralization (do this in moles)
KOH is a strong base, so the OH⁻ reacts **completely** with HA. This is a one-way reaction, not an equilibrium, so it goes to completion before you think about any equilibrium:
$$\mathrm{HA + OH^- \to A^- + H_2O}$$

| | HA | OH⁻ | A⁻ |
| --- | --- | --- | --- |
| Before | 0.0500 | 0.0100 | 0 |
| Change | $-0.0100$ | $-0.0100$ | $+0.0100$ |
| After | **0.0400** | 0 | **0.0100** |

The OH⁻ is the limiting reactant and is used up completely.

**Why moles and not molarity?** Adding KOH changes the total volume (100 → 110 mL). Moles don't care about volume, so the stoichiometry is clean. You only convert to molarity when an equilibrium expression needs it.

### Step 3: Henderson–Hasselbalch
Both HA and A⁻ are present, so use the buffer equation.

**Derivation.** Start from $K_a$ and solve for $[\mathrm{H^+}]$:
$$K_a = \frac{[\mathrm{H^+}][\mathrm{A^-}]}{[\mathrm{HA}]} \quad\Rightarrow\quad [\mathrm{H^+}] = K_a\frac{[\mathrm{HA}]}{[\mathrm{A^-}]}$$
Take $-\log$ of both sides. The log of a product is the sum of the logs:
$$-\log[\mathrm{H^+}] = -\log K_a - \log\frac{[\mathrm{HA}]}{[\mathrm{A^-}]}$$
Recognize pH and p$K_a$, then flip the fraction (which flips the sign of the log):
$$\boxed{\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\mathrm{A^-}]}{[\mathrm{HA}]}}$$

**Why you can use moles in the ratio.** Both species are dissolved in the same 110 mL:
$$\frac{[\mathrm{A^-}]}{[\mathrm{HA}]} = \frac{n_{\mathrm{A^-}}/V}{n_{\mathrm{HA}}/V} = \frac{n_{\mathrm{A^-}}}{n_{\mathrm{HA}}}$$
The volume cancels.

**Why the equilibrium shift doesn't matter here.** In a buffer, both HA and A⁻ are present in large amounts, so the tiny bit of extra dissociation barely changes either one. The post-neutralization moles can be used directly.

### Step 4: Solve
$$\mathrm{pH} = 3.75 + \log\frac{0.0100}{0.0400} = 3.75 + \log(0.25) = 3.75 - 0.60 = \boxed{3.15}$$

**Sanity check.** Only 20% of the acid is neutralized, so there's more HA than A⁻. The ratio is less than 1, the log is negative, and pH < p$K_a$ ✓. It's also higher than the initial pH of 2.03, as it should be after adding base ✓.

---

## Part c (second): 25 mL KOH (half-equivalence)

**Region:** 25 mL is exactly half of 50 mL, so this is the half-equivalence point.

### Steps 1–2: Moles and neutralization
$$n_{\mathrm{OH^-}} = (0.025\ \text{L})(1.00\ \text{M}) = 0.0250\ \text{mol}$$

| | HA | OH⁻ | A⁻ |
| --- | --- | --- | --- |
| Before | 0.0500 | 0.0250 | 0 |
| Change | $-0.0250$ | $-0.0250$ | $+0.0250$ |
| After | **0.0250** | 0 | **0.0250** |

### Step 3: Henderson–Hasselbalch
$$\mathrm{pH} = 3.75 + \log\frac{0.0250}{0.0250} = 3.75 + \log(1) = 3.75 + 0 = \boxed{3.75}$$

**Why pH = p$K_a$ here.** Half the acid has been converted, so $[\mathrm{HA}] = [\mathrm{A^-}]$, the ratio is 1, and $\log 1 = 0$. This is exactly how you found $K_a$ in lab: read the pH at the half-equivalence point and that *is* the p$K_a$. It's also the point where the buffer is strongest, because it has equal reserves to neutralize added acid or added base.

---

## Part d: 50 mL KOH (equivalence point)

**Region:** 50 mL is the equivalence volume. Moles of OH⁻ added equal moles of HA started with.

### Steps 1–2: Moles and neutralization
$$n_{\mathrm{OH^-}} = (0.050\ \text{L})(1.00\ \text{M}) = 0.0500\ \text{mol}$$

| | HA | OH⁻ | A⁻ |
| --- | --- | --- | --- |
| Before | 0.0500 | 0.0500 | 0 |
| Change | $-0.0500$ | $-0.0500$ | $+0.0500$ |
| After | **0** | **0** | **0.0500** |

All the HA is gone. You **can't** use Henderson–Hasselbalch: $[\mathrm{HA}] = 0$ makes the ratio undefined. The beaker now holds only A⁻, which is the conjugate base of a weak acid, so it's a **weak base problem**.

### Step 3: Concentration of A⁻ (now the volume matters)
Total volume = 100.0 mL acid + 50.0 mL base = 150.0 mL.
$$C = [\mathrm{A^-}] = \frac{0.0500\ \text{mol}}{0.1500\ \text{L}} = 0.333\ \text{M}$$

This time the volume doesn't cancel, because there's only one species in the expression.

### Step 4: Get $K_b$ from $K_a$
**Derivation of $K_aK_b = K_w$.** Write the two reactions and their constants:
$$\mathrm{HA \rightleftharpoons H^+ + A^-} \qquad K_a = \frac{[\mathrm{H^+}][\mathrm{A^-}]}{[\mathrm{HA}]}$$
$$\mathrm{A^- + H_2O \rightleftharpoons HA + OH^-} \qquad K_b = \frac{[\mathrm{HA}][\mathrm{OH^-}]}{[\mathrm{A^-}]}$$
Multiply them. $[\mathrm{A^-}]$ and $[\mathrm{HA}]$ cancel:
$$K_aK_b = \frac{[\mathrm{H^+}]\cancel{[\mathrm{A^-}]}}{\cancel{[\mathrm{HA}]}}\cdot\frac{\cancel{[\mathrm{HA}]}[\mathrm{OH^-}]}{\cancel{[\mathrm{A^-}]}} = [\mathrm{H^+}][\mathrm{OH^-}] = K_w$$
(Adding the two reactions gives $\mathrm{H_2O \rightleftharpoons H^+ + OH^-}$, and adding reactions multiplies their K's.)

**Plug in.**
$$K_b = \frac{K_w}{K_a} = \frac{1.0\times10^{-14}}{1.78\times10^{-4}} = 5.62\times10^{-11}$$

The weaker the acid, the stronger its conjugate base, but this $K_b$ is still tiny, so A⁻ is a weak base.

### Step 5: ICE table for A⁻ reacting with water

| | A⁻ | HA | OH⁻ |
| --- | --- | --- | --- |
| Initial | 0.333 | 0 | 0 |
| Change | $-x$ | $+x$ | $+x$ |
| Equilibrium | $0.333 - x$ | $x$ | $x$ |

$$K_b = \frac{x^2}{0.333 - x} \approx \frac{x^2}{C} \quad\Rightarrow\quad x = [\mathrm{OH^-}] = \sqrt{K_b C}$$

Same shortcut as part b, but with $K_b$ and the base's concentration.

### Step 6: Solve
$$[\mathrm{OH^-}] = \sqrt{(5.62\times10^{-11})(0.333)} = \sqrt{1.87\times10^{-11}} = 4.33\times10^{-6}\ \text{M}$$

**Approximation check:** $x/C = 4.33\times10^{-6}/0.333 \approx 0.001\%$ ✓.

### Step 7: Convert to pH
This gives $[\mathrm{OH^-}]$, not $[\mathrm{H^+}]$, so go through pOH. Since $[\mathrm{H^+}][\mathrm{OH^-}] = 10^{-14}$, taking $-\log$ gives $\mathrm{pH} + \mathrm{pOH} = 14$.
$$\mathrm{pOH} = -\log(4.33\times10^{-6}) = 5.36$$
$$\mathrm{pH} = 14.00 - 5.36 = \boxed{8.64}$$

**Sanity check.** At equivalence only A⁻ is left, and A⁻ makes OH⁻ in water, so the pH must be above 7 ✓. Only a strong acid / strong base titration has its equivalence point at pH 7.

---

## Part e: 75 mL KOH (past equivalence)

**Region:** 75 mL > 50 mL. All the HA is used up and there's leftover strong base.

### Steps 1–2: Moles and neutralization
$$n_{\mathrm{OH^-}} = (0.075\ \text{L})(1.00\ \text{M}) = 0.0750\ \text{mol}$$

| | HA | OH⁻ | A⁻ |
| --- | --- | --- | --- |
| Before | 0.0500 | 0.0750 | 0 |
| Change | $-0.0500$ | $-0.0500$ | $+0.0500$ |
| After | 0 | **0.0250** | 0.0500 |

This time HA is the limiting reactant, and 0.0250 mol of OH⁻ is left over.

### Step 3: Which base controls the pH?
Two bases are present: the leftover OH⁻ (strong) and A⁻ (weak). The A⁻ adds only about $10^{-6}$ M of OH⁻ (from part d), and that's even less here because the existing OH⁻ pushes its equilibrium backward (Le Chatelier). The strong base wins completely, so **ignore A⁻**.

### Step 4: Concentration of excess OH⁻
Total volume = 100.0 + 75.0 = 175.0 mL.
$$[\mathrm{OH^-}] = \frac{0.0250\ \text{mol}}{0.1750\ \text{L}} = 0.143\ \text{M}$$

### Step 5: pH
$$\mathrm{pOH} = -\log(0.143) = 0.85$$
$$\mathrm{pH} = 14.00 - 0.85 = \boxed{13.15}$$

**Sanity check.** Past equivalence the curve flattens out near the pH of the KOH itself (1.00 M KOH has pH 14). Diluted and partly used up, it should be a bit lower: 13.15 ✓.

---

## Putting it together: the curve

| KOH added (mL) | pH | What's happening |
| --- | --- | --- |
| 0 | 2.03 | weak acid only |
| 10 | 3.15 | buffer, mostly HA |
| 25 | 3.75 | half-equivalence, pH = p$K_a$ |
| 50 | 8.64 | equivalence, only A⁻ (basic) |
| 75 | 13.15 | excess strong base |

The pH rises slowly through the buffer region (2.03 → 3.75 over 25 mL), then jumps about 5 units near 50 mL, then levels off. That shape is exactly what you saw in Lab 9.

## Common mistakes
- Using Henderson–Hasselbalch at equivalence, where [HA] = 0.
- Forgetting the total volume changes. It cancels in the buffer ratio, but matters at and past equivalence.
- Doing the neutralization in molarity instead of moles.
- At equivalence, using $K_a$ instead of $K_b$, or reporting pOH as the pH.
- Expecting pH 7 at equivalence. That's only true for strong acid / strong base.
