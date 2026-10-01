---
class: "[[CHEM 151]]"
date: 2026-10-01
tags: [equilibrium, le-chatelier, thermodynamics]
---
# Equilibrium and Thermo
Class: [[CHEM 151]]

> [!abstract] Big picture
> At equilibrium the forward and reverse reactions run at the **same rate**, so the concentrations stop changing. They are *not* necessarily equal. $K$ tells you **where** equilibrium sits. $Q$ tells you **where you are right now**. Comparing $Q$ to $K$ tells you which way the reaction will move, and $\Delta G^\circ$ connects all of it to thermodynamics.

## The equilibrium constant
For $a\mathrm{A} + b\mathrm{B} \rightleftharpoons c\mathrm{C} + d\mathrm{D}$:
$$
K_{c} = \frac{[\mathrm{C}]^{c}[\mathrm{D}]^{d}}{[\mathrm{A}]^{a}[\mathrm{B}]^{b}} \qquad\qquad K_{p} = \frac{P_{\mathrm{C}}^{c}\,P_{\mathrm{D}}^{d}}{P_{\mathrm{A}}^{a}\,P_{\mathrm{B}}^{b}}
$$
- **Products over reactants**, each raised to its **coefficient**.
- **Leave out pure solids (s) and liquids (l).** Their "concentration" never changes.
- $K$ depends **only on temperature**.
- $K \gg 1$: products favored. $K \ll 1$: reactants favored.

**Converting between $K_p$ and $K_c$:**
$$
K_{p} = K_{c}(RT)^{\Delta n} \qquad \Delta n = (\text{mol gas products}) - (\text{mol gas reactants}), \quad R = 0.08206\ \tfrac{\mathrm{L\,atm}}{\mathrm{mol\,K}}
$$

> [!example] Example: $\mathrm{N_{2}O_{4}(g) \rightleftharpoons 2NO_{2}(g)}$
> $$K_{p} = \frac{P_{\mathrm{NO_{2}}}^{2}}{P_{\mathrm{N_{2}O_{4}}}} \qquad Q_{p} = \frac{\left(P_{\mathrm{NO_{2}}}\right)^{2}}{P_{\mathrm{N_{2}O_{4}}}}\ \text{(same form, current pressures)}$$
> $\Delta n = 2 - 1 = 1$, so $K_{p} = K_{c}RT$.

---

## Manipulating K

> [!tip] The three rules
> | Do this to the reaction | Do this to $K$ |
> |---|---|
> | Reverse it | $K_{\text{new}} = 1/K$ |
> | Multiply coefficients by $n$ | $K_{\text{new}} = K^{n}$ |
> | Add two reactions | $K_{\text{new}} = K_{1}K_{2}$ |

### Reversing: $K_{r} = 1/K_{f}$
$$
\begin{align}
& \mathrm{CH_{4}(g) + 2O_{2}(g) \rightleftharpoons CO_{2}(g) + 2H_{2}O(g)} & & K_{f} = \frac{[\mathrm{CO_{2}}][\mathrm{H_{2}O}]^{2}}{[\mathrm{CH_{4}}][\mathrm{O_{2}}]^{2}} \\
& \mathrm{CO_{2}(g) + 2H_{2}O(g) \rightleftharpoons CH_{4}(g) + 2O_{2}(g)} & & K_{r} = \frac{[\mathrm{CH_{4}}][\mathrm{O_{2}}]^{2}}{[\mathrm{CO_{2}}][\mathrm{H_{2}O}]^{2}} = \frac{1}{K_{f}}
\end{align}
$$
The whole fraction flips: everything that was on top goes to the bottom.

### Multiplying by $n$: $K_{\text{new}} = K^{n}$
$$
\begin{align}
& \mathrm{1.5\,O_{2} \rightleftharpoons O_{3}} & & K_{c} = c \\
& \times 2 \implies \mathrm{3O_{2} \rightleftharpoons 2O_{3}} & & K_{c} = c^{2}
\end{align}
$$
Multiplying by $\tfrac12$ means taking the square root of $K$.

### Adding reactions: $K_{\text{new}} = K_{1}K_{2}$
$$
\begin{align}
& \mathrm{C(s) + H_{2}O(g) \rightleftharpoons CO(g) + H_{2}(g)} & & K_{1} \\
& \mathrm{CO_{2}(g) + 2H_{2}(g) \rightleftharpoons 2H_{2}O(g) + C(s)} & & K_{2} \\
\hline
& \mathrm{CO_{2}(g) + H_{2}(g) \rightleftharpoons CO(g) + H_{2}O(g)} & & K = K_{1}K_{2}
\end{align}
$$
Cancel anything that shows up on both sides: here that's $\mathrm{C(s)}$, one $\mathrm{H_{2}O}$ and one $\mathrm{H_{2}}$. ($\mathrm{C(s)}$ is a solid, so it never appears in any of the $K$ expressions anyway.)

### Example: combining all three
> [!question] Given $\mathrm{A \rightleftharpoons \tfrac12 B + C}$ with $K_{c_1} = 0.0334$ and $\mathrm{3D \rightleftharpoons B + 2C}$ with $K_{c_2} = 2.35$, find $K_{c}$ for $\mathrm{2A \rightleftharpoons 3D}$.

$$
\begin{align}
& \mathrm{2A \rightleftharpoons B + 2C} & & K = K_{c_1}^{2} && \text{(multiply rxn 1 by 2)} \\
& \mathrm{B + 2C \rightleftharpoons 3D} & & K = \frac{1}{K_{c_2}} && \text{(reverse rxn 2)} \\
\hline
& \mathrm{2A \rightleftharpoons 3D} & & K_{c_3} = \frac{K_{c_1}^{2}}{K_{c_2}} = \frac{(0.0334)^{2}}{2.35} = 4.75\times10^{-4}
\end{align}
$$

> [!warning] Not $2K_{c_1} + K_{c_2}^{-1}$
> Multiplying a reaction by 2 **squares** $K$ (it doesn't double it), and adding reactions **multiplies** the $K$s (it doesn't add them). That's how the scratch answer of 0.492 went wrong.

---

## The reaction quotient Q
$Q$ has the **same form as $K$** but uses the concentrations (or pressures) **right now**, not at equilibrium.

| Compare | Meaning | Reaction shifts | What happens to $Q$ |
|---|---|---|---|
| $Q < K$ | Too few products | **Forward** ($\rightarrow$) | $Q$ rises until $Q = K$ |
| $Q = K$ | At equilibrium | No shift | — |
| $Q > K$ | Too many products | **Reverse** ($\leftarrow$) | $Q$ falls until $Q = K$ |

### Example: adding butane
Butane and isobutane are isomers: both are $\mathrm{C_{4}H_{10}}$.

```smiles
CCCC
```
$$\Large\rightleftharpoons$$
```smiles
CC(C)C
```
*Butane (top) ⇌ isobutane (bottom)*

> [!question] At equilibrium, [butane] = 0.50 M and [isobutane] = 1.25 M. You add 1.50 M butane. Find the new equilibrium concentrations.

**1. Find $K$** from the original equilibrium:
$$K_{c} = \frac{[\text{isobutane}]}{[\text{butane}]} = \frac{1.25}{0.50} = 2.5$$

**2. Find $Q$ right after adding:** [butane] = 0.50 + 1.50 = 2.00 M.
$$Q = \frac{1.25}{2.00} = 0.625 < K \implies \text{shifts forward}$$

**3. ICE table** (forward, so butane goes down and isobutane goes up):

| | Butane | Isobutane |
|---|---|---|
| **I**nitial | 2.00 | 1.25 |
| **C**hange | $-x$ | $+x$ |
| **E**quilibrium | $2.00 - x$ | $1.25 + x$ |

**4. Solve:**
$$
\begin{align}
& 2.5 = \frac{1.25 + x}{2.00 - x} \\
& 5.00 - 2.5x = 1.25 + x \\
& 3.5x = 3.75 \implies x = 1.07
\end{align}
$$

> [!success] Answer
> [butane] $= 2.00 - 1.07 = \mathbf{0.93\ M}$ · [isobutane] $= 1.25 + 1.07 = \mathbf{2.32\ M}$
> Check: $2.32 / 0.93 = 2.5 = K$ ✓

```desmos-graph
left=-2; right=5; bottom=0; top=2.6; height=300
---
y=0.5\{x<0\}|#2a78d6
y=1.25\{x<0\}|#eb6834
y=0.9286+1.0714e^{-x}\{x\ge0\}|#2a78d6
y=2.3214-1.0714e^{-x}\{x\ge0\}|#eb6834
x=0|dashed|#8a8985
(0, 2)|label:add 1.5 M butane|#2a78d6
(4.5, 0.93)|label:butane 0.93 M|#2a78d6
(4.5, 2.32)|label:isobutane 2.32 M|#eb6834
```
*Concentration vs. time (time scale is arbitrary). Blue is butane, orange is isobutane.*

The system **partly** undoes the change: butane ends up higher than before (0.93 > 0.50), but not as high as right after the addition (2.00). That's Le Chatelier's principle in numbers.

---

## ICE tables and the small-x approximation
**Recipe:**
1. Write the balanced reaction and the $K$ expression.
2. **I:** starting concentrations. **C:** changes in terms of $x$, scaled by the coefficients. **E:** I + C.
3. Plug the E row into $K$ and solve for $x$.

**Small-x shortcut:** when $K$ is very small, very little reacts, so $(\text{initial} - x) \approx \text{initial}$. That turns a quadratic into something easy.

> [!example] Example: $\mathrm{A \rightleftharpoons 2B}$, $K_{c} = 1.0\times10^{-6}$, $[\mathrm{A}]_{0} = 0.10$ M
> $$K_{c} = \frac{(2x)^{2}}{0.10 - x} \approx \frac{4x^{2}}{0.10} = 1.0\times10^{-6} \implies x = 1.6\times10^{-4}\ \text{M}$$
> **Check the 5% rule:** $\dfrac{1.6\times10^{-4}}{0.10} = 0.16\% < 5\%$ ✓, so the shortcut is fine. Then $[\mathrm{B}] = 2x = 3.2\times10^{-4}$ M.
> If $x$ came out to more than 5% of the initial value, you'd have to solve the full quadratic instead.

---

## Le Chatelier's principle
> [!info] Le Chatelier's principle
> If a system at equilibrium is disturbed, it shifts in the direction that **partly undoes the disturbance**.

| Change | Shift | Does $K$ change? |
|---|---|---|
| Add reactant / remove product | Forward | No (only $Q$ changes) |
| Add product / remove reactant | Reverse | No |
| Decrease $V$ (increase $P$) | Toward **fewer** moles of gas | No |
| Increase $V$ (decrease $P$) | Toward **more** moles of gas | No |
| Add an inert gas at constant $V$ | No shift | No |
| Add a catalyst | No shift (just gets there faster) | No |
| Raise $T$, **endothermic** ($\Delta H > 0$) | Forward | **Yes**: $K$ increases |
| Raise $T$, **exothermic** ($\Delta H < 0$) | Reverse | **Yes**: $K$ decreases |

**Temperature: treat heat as a reactant or a product.**
$$
\begin{align}
& \text{Endothermic:} & & \mathrm{R + heat \rightleftharpoons P} & & \text{add heat} \implies \text{forward} \\
& \text{Exothermic:} & & \mathrm{R \rightleftharpoons P + heat} & & \text{add heat} \implies \text{reverse}
\end{align}
$$
Temperature is the only change that alters $K$ itself. Everything else changes $Q$, and the system moves back to the same $K$.

> [!example] Example: volume
> $\mathrm{2H_{2}(g) + O_{2}(g) \rightleftharpoons 2H_{2}O(g)}$ in a closed container. **Decrease $V$.**
> The left side has 3 mol of gas and the right side has 2 mol, so the shift is **forward**, toward fewer moles of gas.

---

## Equilibrium and thermodynamics
$$
\begin{align}
& \Delta G = \Delta G^{\circ} + RT\ln Q & & \text{(at any moment)} \\
& 0 = \Delta G^{\circ} + RT\ln K & & \text{(at equilibrium, } \Delta G = 0,\ Q = K\text{)} \\
& \Delta G^{\circ} = -RT\ln K \quad\iff\quad K = e^{-\Delta G^{\circ}/RT}
\end{align}
$$
Here $R = 8.314\ \mathrm{J/(mol\,K)}$, so $\Delta G^{\circ}$ has to be in **J**, not kJ.

| $\Delta G^{\circ}$ | $K$ | At equilibrium |
|---|---|---|
| $< 0$ | $> 1$ | Products favored |
| $= 0$ | $= 1$ | Neither favored |
| $> 0$ | $< 1$ | Reactants favored |

This matches $Q$ vs. $K$: when $Q < K$, $\ln Q < \ln K$, so $\Delta G < 0$ and the forward reaction is spontaneous.

> [!example] Example: $\Delta G^{\circ} = -10.0$ kJ/mol at 298 K
> $$K = \exp\left( \frac{10\,000\ \mathrm{J/mol}}{(8.314)(298)} \right) = e^{4.04} = 56.6$$
> $\Delta G^{\circ} < 0$, so $K > 1$ and products are favored ✓

---

## What you should know

> [!success] By the end of these notes you should be able to…
> 1. **Write $K_c$ and $K_p$** from a balanced equation: products over reactants, coefficients become powers, and solids and liquids are left out.
> 2. **Convert** between them with $K_{p} = K_{c}(RT)^{\Delta n}$.
> 3. **Manipulate $K$:** reversing gives $1/K$, multiplying by $n$ gives $K^{n}$, and adding reactions gives $K_{1}K_{2}$.
> 4. **Compare $Q$ to $K$** to predict the direction: $Q < K$ goes forward and $Q > K$ goes in reverse.
> 5. **Set up and solve an ICE table**, and use the small-x shortcut when $K$ is small (then check the 5% rule).
> 6. **Predict shifts with Le Chatelier's principle** for changes in concentration, volume/pressure and temperature, and know that **only temperature changes $K$**.
> 7. **Connect to thermodynamics** with $\Delta G^{\circ} = -RT\ln K$: negative $\Delta G^{\circ}$ means $K > 1$.

> [!warning] Common mistakes
> - Putting solids or liquids in the $K$ expression.
> - **Adding** $K$s when combining reactions (you multiply), or **doubling** $K$ when you double a reaction (you square it).
> - Getting $Q$ vs. $K$ backwards. Think of it as $Q$ needing to grow toward $K$ when $Q < K$, so it goes forward.
> - Thinking a concentration change or a catalyst changes $K$. Only temperature does.
> - Using kJ with $R = 8.314$ J/(mol·K), or using 8.314 in $K_{p} = K_{c}(RT)^{\Delta n}$ (that one needs 0.08206).
> - Forgetting the coefficients in the ICE "change" row: $\mathrm{A \rightleftharpoons 2B}$ gives $-x$ and $+2x$.
> - Using `\leftrightharpoons` (⇋) instead of `\rightleftharpoons` (⇌). Type `lrh` to get the right one.
