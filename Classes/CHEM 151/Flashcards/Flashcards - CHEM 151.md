#flashcards/chem
Back to [[Home]] · Class: [[CHEM 151]] · Notes: [[Equilibrium and Thermo]] · Practice: [[Q vs K Worksheet]]

Covers chemical equilibrium: $K$, $Q$, ICE tables, Le Chatelier and $\Delta G$. Study: Ctrl+P → "Review flashcards in this note", or pick the `chem` deck in the flashcard sidebar.

## The equilibrium constant
What is true at equilibrium?::forward and reverse rates are equal, so concentrations stop changing (they are **not** necessarily equal)
$K_c$ for $a\mathrm{A} + b\mathrm{B} \rightleftharpoons c\mathrm{C} + d\mathrm{D}$::$K_c = \frac{[\mathrm{C}]^{c}[\mathrm{D}]^{d}}{[\mathrm{A}]^{a}[\mathrm{B}]^{b}}$ (products over reactants, coefficients become powers)
$K_p$ for the same reaction::$K_p = \frac{P_{\mathrm{C}}^{c}P_{\mathrm{D}}^{d}}{P_{\mathrm{A}}^{a}P_{\mathrm{B}}^{b}}$
What gets left out of $K$?::pure solids (s) and pure liquids (l)
What does $K$ depend on?::only temperature
$K \gg 1$ / $K \ll 1$::products favored / reactants favored
Convert $K_p$ and $K_c$::$K_p = K_c(RT)^{\Delta n}$, $\Delta n$ = mol gas products − mol gas reactants, $R = 0.08206$ L·atm/(mol·K)

## Manipulating K
Reverse a reaction::$K_{new} = 1/K$
Multiply a reaction's coefficients by $n$::$K_{new} = K^{n}$ (multiply by ½ means square root)
Add two reactions::$K_{new} = K_{1}K_{2}$ (multiply, never add)

## Q vs K
Reaction quotient $Q$::same expression as $K$, but with the concentrations **right now**
$Q < K$::too few products; the reaction shifts **forward** (→)
$Q > K$::too many products; the reaction shifts in **reverse** (←)
$Q = K$::at equilibrium, no shift
Starting with only reactants, which way does it go?::forward, since $Q = 0 < K$
In $Q$ for $\mathrm{N_2 + O_2 \rightleftharpoons 2NO}$, what gets squared?::only $[\mathrm{NO}]$: $Q = \frac{[\mathrm{NO}]^{2}}{[\mathrm{N_2}][\mathrm{O_2}]}$

## ICE tables
What does ICE stand for?::Initial, Change, Equilibrium
ICE table steps::write $K$; fill Initial; use $Q$ vs $K$ for direction; Change in terms of $x$ times each coefficient; E = I + C; plug E into $K$ and solve; plug $x$ back in
Signs in the Change row when shifting forward / reverse::forward: reactants $-x$, products $+x$ / reverse: reactants $+x$, products $-x$
Change row for $\mathrm{A \rightleftharpoons 2B}$ going forward::A: $-x$, B: $+2x$
Perfect-square trick::if both sides of $K = \frac{(\ldots)^2}{(\ldots)^2}$ are squares, take the square root instead of solving a quadratic
Small-$x$ approximation::when $K$ is very small, $(\text{initial} - x) \approx \text{initial}$
5% rule::the small-$x$ shortcut is OK if $x$ is under 5% of the initial value; otherwise use the quadratic
Last step people forget::plug $x$ back into the E row and give the actual concentrations (then check they reproduce $K$)

## Le Chatelier's principle
Le Chatelier's principle::a system at equilibrium shifts to partly undo a disturbance
Add reactant or remove product::shifts forward; $K$ unchanged
Add product or remove reactant::shifts reverse; $K$ unchanged
Decrease volume (increase pressure)::shifts toward **fewer** moles of gas
Increase volume (decrease pressure)::shifts toward **more** moles of gas
Add an inert gas at constant volume::no shift
Add a catalyst::no shift; equilibrium is just reached faster
Raise $T$ for an endothermic reaction ($\Delta H > 0$)::shifts forward and $K$ **increases** (heat acts like a reactant)
Raise $T$ for an exothermic reaction ($\Delta H < 0$)::shifts reverse and $K$ **decreases** (heat acts like a product)
The only change that alters $K$ itself::temperature

## Equilibrium and thermodynamics
$\Delta G$ at any moment::$\Delta G = \Delta G^{\circ} + RT\ln Q$
$\Delta G^{\circ}$ and $K$::$\Delta G^{\circ} = -RT\ln K$, so $K = e^{-\Delta G^{\circ}/RT}$
$\Delta G^{\circ} < 0$ / $= 0$ / $> 0$::$K > 1$ products favored / $K = 1$ / $K < 1$ reactants favored
Units trap with $R = 8.314$::$\Delta G^{\circ}$ must be in **J**/mol, not kJ
Which $R$ goes with which formula?::$8.314$ J/(mol·K) for $\Delta G$; $0.08206$ L·atm/(mol·K) for $K_p = K_c(RT)^{\Delta n}$
