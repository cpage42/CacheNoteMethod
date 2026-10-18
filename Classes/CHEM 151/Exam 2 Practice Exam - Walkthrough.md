---
class: "[[CHEM 151]]"
tags: [exam, walkthrough, equilibrium]
---
# CHEM 151 Practice Exam #2: Step-by-Step Walkthrough
Class: [[CHEM 151]] · Problems: [[Exam 2 Practice Exam (Canvas)]] · Review sheet: [[Exam 2 Review - Equilibrium]]

Each problem below has three parts:

- **What it's testing:** the idea the question is checking.
- **Steps:** with the *reason* for each move.
- **Watch out:** the trap the question is built around.

All numbers match the instructor's key, re-checked.

> [!tip] The four tools this whole exam uses
> 1. **K expression:** products over reactants, each raised to its coefficient. Leave out (s) and (l).
> 2. **RICE table:** convert to molarity first. The changes follow the coefficients.
> 3. **Small x:** if K is small, drop x where it's added to or subtracted from a big number. Check it's under 5%.
> 4. **Q vs K:** Q < K → forward. Q > K → reverse.

---

## Problem 1: What does K > 100 mean?
**What it's testing:** reading the size of K.

**Steps:**

1. $K = \dfrac{[\text{products}]}{[\text{reactants}]}$ at equilibrium. *A ratio over 100 means the top is much bigger than the bottom.*
2. A big top means equilibrium sits on the **product side**, so the forward reaction is favored → **(a)**.

**Why not the others:**

- (b) "Reverse favored" would need K < 1 (small).
- (c) "Neither" fits an intermediate K, roughly 10⁻² to 10².
- (d) and (e) are about temperature. Whether heating helps the forward or reverse direction depends on whether the reaction is exo- or endothermic, and the question gives no ΔH. The size of K alone says nothing about temperature.

**Answer: (a)**

---

## Problem 2: Which statements about equilibrium are true?
**What it's testing:** what equilibrium actually is.

**Steps:** judge each statement on its own, since there may be more than one true.

- **(a) True.** At equilibrium the forward and reverse reactions are both still running, at the **same rate**. That's the definition of *dynamic* equilibrium.
- **(b) False.** Reversing a reaction flips the K expression upside down: $K_{rev} = 1/K_{fwd}$. They're only equal if K = 1.
- **(c) False.** The amounts stop *changing*; they don't become *equal*. Equal amounts would give K = 1, which is just one special case. (In Problem 7, K = 10⁻⁵ and equilibrium is almost all reactant.)
- **(d) True.** From the outside it looks like nothing's happening, because the concentrations are constant. Molecules are still reacting both ways; the rates just cancel.

**Answer: (a) and (d).** They're the same fact from two angles: equal rates at the molecular level, constant concentrations as seen from outside.

---

## Problem 3: Q for a mixture of only reactants
**What it's testing:** what Q looks like at the extremes.

**Steps:**

1. $Q = \dfrac{[\text{products}]}{[\text{reactants}]}$, the same form as K but using the *current* amounts.
2. With only reactants present, the top is ≈ 0 and the bottom is some positive number.
3. 0 ÷ (positive number) = **0**.

**Why it matters:** Q = 0 is always less than K, so a reactants-only mixture **must go forward**. That matches intuition, since it can't go backward from zero product.

**Watch out:** (e) is tempting, but you don't need actual numbers. Anything with a zero numerator is zero.

**Answer: (d) essentially 0**

---

## Problem 4: Write K for 2CH₃Cl + Cl₂ ⇌ 2CH₂Cl₂ + H₂
**What it's testing:** writing the K expression.

**Steps:**

1. Products go on top: CH₂Cl₂ (coefficient 2) and H₂ (coefficient 1).
2. Reactants go on the bottom: CH₃Cl (coefficient 2) and Cl₂ (coefficient 1).
3. Each coefficient becomes an exponent.
4. Everything is (g), so nothing gets left out.

$$\boxed{K_c = \frac{[\mathrm{CH_2Cl_2}]^2\,[\mathrm{H_2}]}{[\mathrm{CH_3Cl}]^2\,[\mathrm{Cl_2}]}}$$

**Watch out:** the coefficients are **exponents**, not multipliers. Write $[\mathrm{CH_2Cl_2}]^2$, not $2[\mathrm{CH_2Cl_2}]$.

---

## Problem 5: Find K from one measured concentration
**What it's testing:** a RICE table where you're *given* an equilibrium value and have to back out x.

**Given:** 2.00 mol NOCl in 2.00 L. At equilibrium, [NO] = 0.33 M. Reaction: 2NOCl ⇌ 2NO + Cl₂.

**Step 1: Convert to molarity.** *K uses concentrations, and the RICE table must be in M.*
$$[\mathrm{NOCl}]_0 = \frac{2.00\ \text{mol}}{2.00\ \text{L}} = 1.00\ \mathrm{M}$$

**Step 2: Set up RICE.** *The changes follow the coefficients: NOCl loses 2x, NO gains 2x, and Cl₂ gains 1x. Products start at 0 because only NOCl was added.*

| R | 2 NOCl | ⇌ 2 NO | + Cl₂ |
|---|---|---|---|
| I | 1.00 | 0 | 0 |
| C | −2x | +2x | +x |
| E | 1.00 − 2x | 2x | x |

**Step 3: Use the given value to find x.** *They told you the equilibrium [NO], and the table says [NO] = 2x.*
$$2x = 0.33 \;\Rightarrow\; x = 0.165$$

**Step 4: Fill in the E row.**

- [NOCl] = 1.00 − 0.33 = **0.67 M**
- [NO] = **0.33 M**
- [Cl₂] = **0.165 M**

**Step 5: Plug into K.**
$$K_c = \frac{[\mathrm{NO}]^2[\mathrm{Cl_2}]}{[\mathrm{NOCl}]^2} = \frac{(0.33)^2(0.165)}{(0.67)^2} = \frac{0.01797}{0.4489} = \boxed{0.040 = 4\times10^{-2}}$$

**Watch out:** two classic mistakes here.

- Using 2.00 M instead of converting 2.00 mol / 2.00 L.
- Setting x = 0.33. It's 2x = 0.33, because of the coefficient.

### 5a: Reactant favored, product favored, or neither?
- K = 0.04 is **less than 1**, so equilibrium leans slightly toward reactants.
- But it's well within the "both present" range (10⁻² to 10²).

**Answer: slightly reactant favored (the key also accepts "neither").**

### 5b: K for NO + ½Cl₂ ⇌ NOCl
**What it's testing:** manipulating K.

**Steps:** compare the new reaction to the original 2NOCl ⇌ 2NO + Cl₂.

1. **It's flipped.** NOCl is now a product. *Reversing gives 1/K.*
2. **It's halved.** The coefficients are 1, ½, 1 instead of 2, 2, 1. *Multiplying by ½ means raising K to the ½ power, i.e. taking the square root.*

$$K_{new} = \left(\frac{1}{K}\right)^{1/2} = \left(\frac{1}{0.04}\right)^{1/2} = \sqrt{25} = \boxed{5.0}$$

**Sanity check:** the original reaction was reactant-favored (K < 1), so its reverse should be product-favored (K > 1). ✓

---

## Problem 6: H₂S decomposition (small x)
**What it's testing:** the small-x approximation, in the setting where it's most useful.

**Given:** 2H₂S ⇌ 2H₂ + S₂, Kc = 1.67×10⁻⁷ at 800 °C. 0.0375 mol H₂S in 1.500 L.

**Step 1: Molarity.**
$$[\mathrm{H_2S}]_0 = \frac{0.0375\ \text{mol}}{1.500\ \text{L}} = 0.0250\ \mathrm{M}$$

**Step 2: RICE.** *Only H₂S at the start, so it can only go forward. H₂S loses 2x, H₂ gains 2x, S₂ gains x.*

| R | 2 H₂S | ⇌ 2 H₂ | + S₂ |
|---|---|---|---|
| I | 0.0250 | 0 | 0 |
| C | −2x | +2x | +x |
| E | 0.0250 − 2x | 2x | x |

**Step 3: Write K.**
$$1.67\times10^{-7} = \frac{(2x)^2(x)}{(0.0250 - 2x)^2}$$

*Solved exactly, this would be a cubic. Nobody wants that on an exam.*

**Step 4: Decide whether small x applies.**

- K is tiny (10⁻⁷), so the reaction barely goes forward and x will be tiny.
- In the denominator, 2x is **subtracted from** 0.0250, a much bigger number, so drop it: $0.0250 - 2x \approx 0.0250$.
- In the numerator, x is **multiplied** ($(2x)^2 \cdot x$), so it stays. *Dropping it there would make the whole numerator zero.*

**Step 5: Solve.**
$$1.67\times10^{-7} = \frac{4x^3}{(0.0250)^2} = \frac{4x^3}{6.25\times10^{-4}}$$
$$x^3 = \frac{(1.67\times10^{-7})(6.25\times10^{-4})}{4} = 2.61\times10^{-11} \;\Rightarrow\; x = 2.97\times10^{-4}$$

**Step 6: Equilibrium concentrations.**

- [H₂] = 2x = **5.93×10⁻⁴ M**
- [S₂] = x = **2.97×10⁻⁴ M**
- [H₂S] = 0.0250 − 0.000593 = **0.0244 M**

**Step 7: Check the approximation.** *It's valid if what you dropped is under 5% of what it was subtracted from.*
$$\frac{2x}{0.0250} = \frac{5.93\times10^{-4}}{0.0250} = 2.4\% < 5\% \;✓$$

**Watch out:** the question asks for H₂ and S₂, so report **2x** for H₂, not x.

---

## Problem 7: N₂ + O₂ ⇌ 2NO (small x)
**What it's testing:** small x again, this time with two reactants.

**Given:** [N₂]₀ = 1.2 M, [O₂]₀ = 0.80 M, Kc = 1.0×10⁻⁵.

**Step 1: RICE.** *Already in molarity. Each reactant loses x, and NO gains 2x because of its coefficient.*

| R | N₂ | + O₂ | ⇌ 2 NO |
|---|---|---|---|
| I | 1.2 | 0.80 | 0 |
| C | −x | −x | +2x |
| E | 1.2 − x | 0.80 − x | 2x |

**Step 2: K expression.**
$$1.0\times10^{-5} = \frac{(2x)^2}{(1.2 - x)(0.80 - x)}$$

**Step 3: Small x.** K = 10⁻⁵ is small, and x is subtracted from 1.2 and 0.80, both large. Drop those x's; keep $(2x)^2$.
$$1.0\times10^{-5} = \frac{4x^2}{(1.2)(0.80)} = \frac{4x^2}{0.96}$$

**Step 4: Solve.**
$$4x^2 = (0.96)(1.0\times10^{-5}) = 9.6\times10^{-6} \;\Rightarrow\; x^2 = 2.4\times10^{-6} \;\Rightarrow\; x = 1.55\times10^{-3}$$

**Step 5: Concentrations.**

- [N₂] = 1.2 − 0.00155 = **1.198 M**
- [O₂] = 0.80 − 0.00155 = **0.798 M**
- [NO] = 2x = **3.10×10⁻³ M**

**Step 6: Check.** 0.00155 / 0.80 = 0.19%, well under 5% ✓

**Why this works so nicely:** with small x it's just a square root. Without it, you'd have a quadratic. That's the payoff of the approximation.

---

## Problem 8: Find Kp by combining reactions
**What it's testing:** manipulating K, in its trickiest form.

**Target:** C(s) + CO₂ ⇌ 2CO

**Given:**

- Rxn 1: C(s) + 2H₂O ⇌ CO₂ + 2H₂, with Kp1 = 3.21
- Rxn 2: H₂O + CO ⇌ H₂ + CO₂, with Kp2 = 1.495

**Step 1: Match the target, one species at a time.**

- **C(s)** needs to be a reactant. It's a reactant in rxn 1 → **keep rxn 1 as written.**
- **CO** needs to be a product with coefficient 2. It's a *reactant* in rxn 2 with coefficient 1 → **flip rxn 2 and multiply by 2.**

**Step 2: Apply the K rules.**

- Rxn 1 unchanged: $K = 3.21$
- Rxn 2 flipped and ×2: 2H₂ + 2CO₂ ⇌ 2H₂O + 2CO, with $K = (1/1.495)^2$

**Step 3: Add the reactions and check that the extras cancel.**
$$\mathrm{C} + 2\mathrm{H_2O} + 2\mathrm{H_2} + 2\mathrm{CO_2} \;\rightleftharpoons\; \mathrm{CO_2} + 2\mathrm{H_2} + 2\mathrm{H_2O} + 2\mathrm{CO}$$

- 2H₂O cancels from both sides.
- 2H₂ cancels from both sides.
- One CO₂ cancels, leaving one CO₂ on the left.

That leaves **C + CO₂ ⇌ 2CO** ✓

**Step 4: Adding reactions means multiplying K's.**
$$K_p = (3.21)\left(\frac{1}{1.495}\right)^2 = \frac{3.21}{2.235} = \boxed{1.436}$$

**Watch out:** always do the cancellation check in Step 3. If the extras don't cancel, you flipped or scaled the wrong reaction.

---

## Problems 9 & 10: Adding CO₂ or CO (Le Chatelier)
**What it's testing:** predicting the shift when you disturb an equilibrium.

**Reaction:** C(s) + CO₂ ⇌ 2CO, so $Q = \dfrac{P_{CO}^2}{P_{CO_2}}$. C(s) is a solid and stays out.

**Problem 9, add CO₂ (a reactant):**

- CO₂ is on the bottom of Q, so adding it makes **Q smaller**: Q < K.
- The system shifts **forward**, using up some of the added CO₂ and making CO, until Q = K again.
- *In words:* the system pushes back against what you added.

**Problem 10, add CO (a product):**

- CO is on top of Q, so adding it makes **Q bigger**: Q > K.
- The system shifts in **reverse**, using up CO, until equilibrium is re-established.

**Watch out:** K doesn't change in either case. Only temperature changes K. Adding stuff changes **Q**, and the reaction moves to bring Q back to K.

---

## Problems 11 & 12: Le Chatelier in words, then with Q and K
**Problem 11:** *If a system at equilibrium is disturbed (by changing a concentration, the pressure/volume, or the temperature), it shifts in the direction that reduces the disturbance.*

**Problem 12:** *A disturbance makes Q ≠ K. If Q < K the reaction runs forward, and if Q > K it runs in reverse, until Q = K again. Comparing Q to K is the mathematical version of Le Chatelier's principle.*

**Why they ask both:** Le Chatelier is the intuition ("push back against the change"), and Q vs K is how you prove it with numbers. Problems 9 and 10 show the two give the same answer.

---

## Problem 13: Kw for water
**What it's testing:** writing K when liquids are involved.

**Reaction:** H₂O(l) + H₂O(l) ⇌ OH⁻(aq) + H₃O⁺(aq)

**Step 1: Write K.**

- Products on top: $[\mathrm{OH^-}][\mathrm{H_3O^+}]$.
- The reactants are **pure liquid** water, so they **don't appear**. *A pure liquid's "concentration" doesn't change.*
- So the bottom is just 1:

$$K_w = [\mathrm{H_3O^+}][\mathrm{OH^-}]$$

**Step 2: Find [OH⁻].** The reaction makes H₃O⁺ and OH⁻ **one to one**, so in pure water [OH⁻] = [H₃O⁺] = 1×10⁻⁷ M.

**Step 3: Plug in.**
$$K_w = (1\times10^{-7})(1\times10^{-7}) = \boxed{1\times10^{-14}}$$

*Remember this one. It comes back in the acid-base unit (Module 3).*

---

## Problem 14: Cyclohexane ⇌ MCP (the long one)
**Reaction:** C₆H₁₂ ⇌ MCP, Kc = 0.143.

### 14a: K for 2MCP ⇌ 2C₆H₁₂
**Steps:**

1. **Flipped.** MCP is now the reactant → take 1/K.
2. **Doubled.** The coefficients are 2 → square it.

$$K = \left(\frac{1}{0.143}\right)^2 = (6.99)^2 = \boxed{48.9}$$

### 14b: Q at the start
**Steps:** use the current concentrations in the same form as K, for the **top reaction** (C₆H₁₂ ⇌ MCP).
$$Q_c = \frac{[\mathrm{MCP}]}{[\mathrm{C_6H_{12}}]} = \frac{0.0200}{0.0400} = \boxed{0.500}$$

### 14c: Which way does it shift?
**Steps:**

- Q = 0.500 and K = 0.143, so **Q > K**.
- Q being too big means there's **too much product (MCP)** relative to equilibrium.
- So it shifts in **reverse**, turning MCP back into C₆H₁₂.

### 14d: Equilibrium concentrations
**Step 1: RICE, going in reverse.** *We know from 14c it goes in reverse, so MCP **loses** x and C₆H₁₂ **gains** x. Building that direction into the table keeps x positive.*

| R | C₆H₁₂ | ⇌ MCP |
|---|---|---|
| I | 0.0400 | 0.0200 |
| C | +x | −x |
| E | 0.0400 + x | 0.0200 − x |

**Step 2: Write K and solve.** *K = 0.143 isn't small, so there's no small x here. It's linear anyway, so it's easy.*
$$0.143 = \frac{0.0200 - x}{0.0400 + x}$$

Solve it step by step:

1. Cross-multiply: $0.143(0.0400 + x) = 0.0200 - x$
2. Expand: $0.00572 + 0.143x = 0.0200 - x$
3. Collect the x terms: $1.143x = 0.01428$
4. So $x = 0.0125$

**Step 3: Concentrations.**

- [C₆H₁₂] = 0.0400 + 0.0125 = **0.0525 M**
- [MCP] = 0.0200 − 0.0125 = **0.0075 M**

**Check:** 0.0075 / 0.0525 = 0.143 = K ✓

*The key does the same thing using the reverse reaction (K = 6.99). Either way works if you stay consistent.*

### 14e: New Q after adding 0.020 M C₆H₁₂
**Steps:**

1. New [C₆H₁₂] = 0.0525 + 0.020 = 0.0725 M. MCP is unchanged at 0.0075 M.
2. Q for the reaction as written:

$$Q = \frac{0.0075}{0.0725} = \boxed{0.103}$$

3. Q (0.103) < K (0.143), so it shifts **forward** (toward MCP). This makes sense: we added reactant, so the system uses it up (Le Chatelier).

*The key writes Q upside down (for the reverse reaction): 0.0725/0.0075 = 9.66 vs K = 6.99. That's Q > K for the reverse reaction, which means the reverse of the reverse, i.e. forward. Same conclusion. Write it for the reaction as given to avoid confusing yourself.*

### 14f: Re-established equilibrium
**Step 1: RICE, going forward this time.** C₆H₁₂ loses x and MCP gains x.

| R | C₆H₁₂ | ⇌ MCP |
|---|---|---|
| I | 0.0725 | 0.0075 |
| C | −x | +x |
| E | 0.0725 − x | 0.0075 + x |

**Step 2: Solve.**
$$0.143 = \frac{0.0075 + x}{0.0725 - x}$$

1. Cross-multiply: $0.143(0.0725 - x) = 0.0075 + x$
2. Expand: $0.01037 - 0.143x = 0.0075 + x$
3. Collect the x terms: $0.00287 = 1.143x$
4. So $x = 0.00251$

**Step 3: Concentrations.**

- [MCP] = 0.0075 + 0.00251 = **0.0100 M**
- [C₆H₁₂] = 0.0725 − 0.00251 = **0.0700 M**

**Check:** 0.0100 / 0.0700 = 0.143 ✓

**The big-picture point of Problem 14:** after the disturbance, the concentrations changed but **K didn't**. The system found a new equilibrium with the same ratio. That's Le Chatelier and Q vs K working together, which is the whole module in one problem.
