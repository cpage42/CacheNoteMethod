---
class: "[[CHEM 151]]"
tags: [exam, review, equilibrium, ice-tables, q-vs-k, gibbs]
---
# CHEM 151 Exam 2 Review: Equilibrium
Class: [[CHEM 151]] · **Exam 2: Thu 10/15, 9:35 AM (in class)** · Your notes: [[Equilibrium and Thermo]] · [[Delta G and K with Favorability]] · [[Q vs K Worksheet]] · **Practice exam:** [[Exam 2 Practice Exam (Canvas)]]

> [!info] What Canvas says is on it
> **Module 2 material:** equilibrium basics · RICE tables · small x · Q vs K · ΔG and K relationships.
> The practice exam also tests **manipulating K** and **Le Chatelier**.
>
> Sources this sheet is built from:
> - Canvas → Module 2 → *Exam 2 Practice* (practice exam + key)
> - the two lecture decks (*151_Chemical Equilibrium part 1 & pt 2*)
> - your own notes
>
> **"Small x" is what you thought:** the approximation that $x$ is negligible next to an initial concentration when $K$ is small.

> [!note] Equation sheet (printed on page 1 of the practice exam, so expect the same)
> $K_c = \dfrac{[C]^c[D]^d}{[A]^a[B]^b}$ · $R = 8.314$ J/mol·K · $\Delta G = \Delta H - T\Delta S$ · $\Delta G^\circ_{rxn} = -RT\ln K_{eq}$ · $\Delta G = \Delta G^\circ_{rxn} + RT\ln Q$ · standard state = 1 mol, 1 atm, 298 K · plus a periodic table.
>
> **Not on it, so know these:**
> - Q vs K direction rules
> - K manipulation rules
> - the small-x rule
> - Le Chatelier shifts

---

## 1. Equilibrium basics

- **Dynamic equilibrium** means the forward rate equals the reverse rate. Both reactions keep running.
- It **looks static** because the concentrations stop changing.
- **The concentrations are not equal at equilibrium.** That's a classic wrong answer; equal concentrations would mean K = 1.
- The isotope experiment proves it's dynamic: add C-14 after equilibrium, and it eventually shows up in the CO₂.

**Writing K:**

$$aA + bB \rightleftharpoons cC + dD \qquad K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}$$

- It's products over reactants, each raised to its **coefficient**.
- **Leave out solids (s) and pure liquids (l).** Their "concentration" doesn't change.
- **K depends only on temperature.** Adding stuff or changing pressure changes Q, not K.

**Reading the size of K:**

| K | Meaning |
|---|---|
| > ~10¹⁰ | Goes essentially to completion (all products) |
| > 1 (the key's cutoff is 100) | Product-favored → **forward favored** |
| ~10⁻² to 10² | Intermediate: both present in real amounts ("neither" is acceptable) |
| < 1 | Reactant-favored |
| < ~10⁻¹⁰ | Essentially no reaction |

**Practice exam freebies:**

- **Q1:** K > 100 means the forward reaction is favored.
- **Q2:** Both (a) "rates equal" and (d) "appears static" are true.
- **Q3:** With only reactants, Q = [products]/[reactants] ≈ 0/something, so **Q ≈ 0**.
- **Q4:** $K = \dfrac{[CH_2Cl_2]^2[H_2]}{[CH_3Cl]^2[Cl_2]}$.
- **Q13:** $K_w = [H_3O^+][OH^-] = (10^{-7})(10^{-7}) = 1\times10^{-14}$. The two H₂O(l) don't appear.

---

## 2. Manipulating K

| Do this to the reaction | Do this to K |
|---|---|
| Reverse it | $1/K$ |
| Multiply coefficients by $n$ | $K^n$ (×½ means square root) |
| Add reactions | Multiply the K's |

**Practice exam Q5b:** For 2NOCl ⇌ 2NO + Cl₂, K = 0.04. For NO + ½Cl₂ ⇌ NOCl, flip it and halve it: $K = (1/0.04)^{1/2} = 5.0$.

**Practice exam Q8:** Find $K_p$ for C(s) + CO₂ ⇌ 2CO.

- Keep rxn 1 as is: C + 2H₂O ⇌ CO₂ + 2H₂, $K_{p1} = 3.21$.
- Flip rxn 2 and multiply by 2: 2H₂ + 2CO₂ ⇌ 2H₂O + 2CO, $K = (1/1.495)^2$.
- Add them. The H₂O, H₂ and one CO₂ cancel.

$$K_p = 3.21 \times \left(\tfrac{1}{1.495}\right)^2 = \boxed{1.436}$$

**Strategy:** match the target reaction one species at a time. Ask whether this species is on the correct side (if not, flip) and whether it has the correct coefficient (if not, multiply).

---

## 3. RICE tables (Reaction, Initial, Change, Equilibrium)

**Procedure** (from the slides):

1. Write the balanced reaction (the **R** row).
2. Convert everything to **molarity first**: mol ÷ L.
3. **I:** initial concentrations.
4. **C:** changes in terms of $x$, **scaled by the coefficients** (2A → −2x).
5. **E:** I + C.
6. Plug the E row into the K expression and solve.

> [!example] Practice exam Q5: find K from one measured concentration
> 2.00 mol NOCl in 2.00 L, so $[NOCl]_0 = 1.00$ M. At equilibrium, $[NO] = 0.33$ M.
>
> | R | 2 NOCl | ⇌ 2 NO | + Cl₂ |
> |---|---|---|---|
> | I | 1.00 | 0 | 0 |
> | C | −2x | +2x | +x |
> | E | 1 − 2x | **2x = 0.33** | x |
>
> So $x = 0.165$, giving $[NOCl] = 0.67$, $[NO] = 0.33$, $[Cl_2] = 0.165$.
> $$K_c = \frac{(0.33)^2(0.165)}{(0.67)^2} = \boxed{0.040}$$
> That's slightly reactant-favored, or "neither" (the key accepts both).

> [!example] Perfect-square shortcut (slides): H₂ + I₂ ⇌ 2HI, Kc = 55.64, starting with 2.00 M each of H₂ and I₂
> $$55.64 = \frac{(2x)^2}{(2.00-x)^2}$$
> Take the square root of both sides: $7.459 = \dfrac{2x}{2.00-x}$, so $x = 1.577$.
> **[HI] = 3.15 M**, **[H₂] = [I₂] = 0.423 M**. No quadratic needed when both sides are perfect squares.

---

## 4. Small x (the approximation)

**The rule, from the slides:**

- If **K is small** (less than about 10⁻³) and you're **adding or subtracting x from a much bigger number** (more than ~0.01 M), drop the x there.
- **Never drop x when it's multiplied** (the $(2x)^2$ on top stays).
- **Check afterward:** $\dfrac{x \text{ (or } 2x)}{\text{initial}} < 5\%$ means the approximation was OK.
- If it fails: solve the quadratic, or substitute your x back in and repeat (successive approximations).

**Why it works:** small K means the reaction barely moves forward, so the reactants hardly change.

> [!example] Practice exam Q6 (the cubic you'd rather not solve): 2H₂S ⇌ 2H₂ + S₂, Kc = 1.67×10⁻⁷ at 800 °C
> $[H_2S]_0 = 0.0375 \text{ mol} / 1.500 \text{ L} = 0.0250$ M
>
> | R | 2 H₂S | ⇌ 2 H₂ | + S₂ |
> |---|---|---|---|
> | I | 0.0250 | 0 | 0 |
> | C | −2x | +2x | +x |
> | E | 0.0250 − 2x ≈ **0.0250** | 2x | x |
>
> $$1.67\times10^{-7} = \frac{(2x)^2(x)}{(0.0250)^2} = \frac{4x^3}{6.25\times10^{-4}} \;\Rightarrow\; x = \left(\frac{1.67\times10^{-7}\cdot 6.25\times10^{-4}}{4}\right)^{1/3} = 2.97\times10^{-4}$$
> **[H₂] = 2x = 5.93×10⁻⁴ M**, **[S₂] = 2.97×10⁻⁴ M**, **[H₂S] = 0.0244 M**.
> Check: $5.93\times10^{-4}/0.0250 = 2.4\% < 5\%$ ✓

> [!example] Practice exam Q7: N₂ + O₂ ⇌ 2NO, Kc = 1.0×10⁻⁵, starting with [N₂] = 1.2 M and [O₂] = 0.80 M
> $$1.0\times10^{-5} = \frac{(2x)^2}{(1.2-x)(0.80-x)} \approx \frac{4x^2}{(1.2)(0.80)} \;\Rightarrow\; x = \sqrt{\frac{(0.96)(1.0\times10^{-5})}{4}} = 1.55\times10^{-3}$$
> **[NO] = 3.10×10⁻³ M**, **[N₂] = 1.198 M**, **[O₂] = 0.798 M**. Check: 0.0015/0.80 = 0.2% ✓

**When NOT to use small x:**

- When K isn't small (Q14 below has K = 0.143, so it's solved exactly).
- When the initial concentration is tiny.

---

## 5. Q vs K and Le Chatelier

**Q** has the same form as K but uses the concentrations **right now**, not at equilibrium.

| Compare | Shift | Why |
|---|---|---|
| **Q < K** | → **forward** (toward products) | Too few products, so make more |
| **Q > K** | ← **reverse** (toward reactants) | Too many products |
| Q = K | none | Already at equilibrium |

**Edge cases:** only reactants means Q = 0, so the reaction must go forward. Only products means Q = ∞, so it must go in reverse.

**Le Chatelier's principle:** a system at equilibrium that gets disturbed shifts to **reduce the disturbance**.

| Disturbance | Shift | Does K change? |
|---|---|---|
| Add reactant / remove product | Forward | No (Q drops below K) |
| Add product / remove reactant | Reverse | No (Q rises above K) |
| Decrease volume (increase P) | Toward **fewer moles of gas** | No |
| Increase T, endothermic (heat is a reactant) | Forward | **Yes, K increases** |
| Increase T, exothermic (heat is a product) | Reverse | **Yes, K decreases** |

**Practice exam Q11/12, in words:**

- *Le Chatelier:* if you stress an equilibrium, the system shifts to relieve the stress.
- *Using Q and K:* the disturbance makes Q ≠ K, and the reaction runs in whichever direction brings Q back to K. Q is the math behind the intuition.

**Practice exam Q9/10** (C + CO₂ ⇌ 2CO):

- Add CO₂ (a reactant): Q falls, so the reaction shifts **forward** until equilibrium is restored.
- Add CO (a product): Q rises, so the reaction shifts in **reverse**.

> [!example] Practice exam Q14: C₆H₁₂ ⇌ MCP, Kc = 0.143
> **(a)** For 2 MCP ⇌ 2 C₆H₁₂, flip and square: $K = (1/0.143)^2 = \boxed{48.9}$.
>
> **(b)** $Q = \dfrac{[MCP]}{[C_6H_{12}]} = \dfrac{0.0200}{0.0400} = \boxed{0.500}$
>
> **(c)** Q (0.500) > K (0.143), so it shifts in **reverse** (toward C₆H₁₂). There's too much MCP.
>
> **(d)** It goes in reverse, so MCP is $0.0200 - x$ and C₆H₁₂ is $0.0400 + x$:
> $$0.143 = \frac{0.0200 - x}{0.0400 + x} \;\Rightarrow\; x = 0.0125$$
> **[C₆H₁₂] = 0.0525 M**, **[MCP] = 0.0075 M**. Check: 0.0075/0.0525 = 0.143 ✓. K isn't small here, so it's solved exactly, which is easy because it's linear.
>
> **(e)** Add 0.020 M C₆H₁₂, so [C₆H₁₂] = 0.0725 M:
> $$Q = \frac{0.0075}{0.0725} = \boxed{0.103} < 0.143$$
> That means it shifts **forward** (toward MCP). *The key writes it upside down (C₆H₁₂/MCP = 9.66 vs K_reverse = 6.99). Same conclusion, but write Q for the reaction as given.*
>
> **(f)** $0.143 = \dfrac{0.0075 + x}{0.0725 - x} \Rightarrow x = 0.00251$, giving **[MCP] = 0.0100 M** and **[C₆H₁₂] = 0.0700 M**.

> [!example] Slide problem: add reactant, re-equilibrate. Butane ⇌ isobutane, Kc = 2.5
> At equilibrium, [butane] = 0.50 and [iso] = 1.25. Add 1.50 M butane, so butane becomes 2.00.
> - $Q = 1.25/2.00 = 0.625 < 2.5$, so it shifts **forward**.
> - $2.5 = \dfrac{1.25 + x}{2.00 - x} \Rightarrow x = 1.07$
> - **[butane] = 0.93 M**, **[iso] = 2.32 M**

---

## 6. ΔG and K

$$\Delta G^\circ = -RT\ln K \qquad\qquad \Delta G = \Delta G^\circ + RT\ln Q = RT\ln\frac{Q}{K}$$

| ΔG° | K | Favored at standard conditions |
|---|---|---|
| Negative | > 1 | Products (forward) |
| 0 | = 1 | Neither |
| Positive | < 1 | Reactants (reverse) |

**What the two equations mean:**

- **ΔG° goes with K.** It describes where equilibrium sits, based on standard states.
- **ΔG goes with Q.** It describes which way the reaction runs *right now*.
  - Q < K means ΔG < 0, so it runs forward.
  - Q > K means ΔG > 0, so it runs in reverse.
  - At equilibrium Q = K and **ΔG = 0**, but ΔG° isn't necessarily 0.

> [!warning] Unit trap
> R = 8.314 **J**/mol·K, so convert kJ to J (×1000) before plugging in. T must be in **kelvin** (°C + 273).

> [!example] From your notes
> - **I₂ + Cl₂ ⇌ 2ICl, Kp = 81.9 at 298 K:** $\Delta G^\circ = -(8.314)(298)\ln 81.9 = -1.09\times10^4$ J = **−10.9 kJ**. Negative, which matches K > 1.
> - **N₂O₄ ⇌ 2NO₂, ΔG° = +4.8 kJ:** $K = e^{-\Delta G^\circ/RT} = e^{-4800/(8.314)(298)} = $ **0.144**. Positive ΔG° matches K < 1.

**Getting an unfavorable reaction to go** (from your notes):

- Keep Q < K (Le Chatelier: keep feeding reactants or pulling off products).
- Couple it to a very favorable reaction.
- Change T, since ΔG = ΔH − TΔS depends on T.

---

## Common traps

- Forgetting to convert **mol → M** before the RICE table (Q5, Q6).
- Forgetting the **coefficients** in the C row (2x, not x) and as **exponents** in K.
- Putting **solids or liquids** in K (C(s) in Q8, H₂O(l) in Q13).
- Dropping x when it's **multiplied** rather than added or subtracted.
- Saying "concentrations are equal at equilibrium."
- Flipping the Q vs K direction. Memory hook: **Q is where you are, K is where you're going.** If Q is too small, go forward.
- kJ vs J in ΔG° = −RT ln K.
- Thinking Le Chatelier changes K. Only **temperature** changes K.

## Practice exam answers (quick check)
| # | Answer |
|---|---|
| 1 | (a) forward favored |
| 2 | (a) and (d) |
| 3 | (d) essentially 0 |
| 4 | $[CH_2Cl_2]^2[H_2]/[CH_3Cl]^2[Cl_2]$ |
| 5 | Kc = 0.040; (a) slightly reactant-favored or neither; (b) 5.0 |
| 6 | [H₂] = 5.93×10⁻⁴, [S₂] = 2.97×10⁻⁴, [H₂S] = 0.0244 M |
| 7 | [N₂] = 1.198, [O₂] = 0.798, [NO] = 3.10×10⁻³ M |
| 8 | Kp = 1.436 |
| 9, 10 | Add CO₂ → forward; add CO → reverse |
| 13 | Kw = 1×10⁻¹⁴ |
| 14 | (a) 48.9 (b) 0.500 (c) reverse (d) 0.0525 / 0.0075 M (e) Q = 0.103 → forward (f) MCP 0.0100, C₆H₁₂ 0.0700 M |
