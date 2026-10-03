# RC Circuits
Class: [[PHYS 218]] · Review: [[Exam 2 Review - Ch 9 and 10]]

> [!abstract] Big picture
> A resistor and a capacitor in series. The capacitor can't charge or discharge instantly. Charge flows through the resistor, which limits the current, so everything changes **exponentially** with time constant $\tau = RC$.

## The circuit

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,4) to[battery1, l_=$\mathcal{E}$] (0,0);
\draw (0,4) -- (3,4) node[ocirc]{} node[above]{a};
\draw (3,2.4) node[ocirc]{} node[left]{b} -- (3,0) node[circ]{};
\draw (4.7,3.2) node[circ]{} node[above right]{S} -- (3.1,3.95);
\draw[dashed, gray] (4.7,3.2) -- (3.1,2.45);
\draw (4.7,3.2) -- (7,3.2) to[R, l=$R$] (7,1.4) to[C, l=$C$] (7,0) -- (0,0);
\end{circuitikz}
\end{document}
```
*S to a: charging (solid arm) · S to b: discharging (dashed arm)*

- Battery $+$ to contact **a**; battery $-$ to the junction at **b**; from the junction through $C$, then $R$, to the switch $S$.
- **Initially** the switch is on **b** and the capacitor is uncharged.
- **S to a (charging):** at first the empty capacitor accepts charge freely and **behaves like a short (a wire)**. As charge builds up it pushes back harder, and it ends up **behaving like an open circuit** (no current).
- **S to b (discharging):** the battery is out of the loop, and the charged capacitor drives current back through $R$ until it's empty.

---

## Charging (S to a)

### Results
$$
\begin{align}
q(t) &= CV\left( 1-e^{ -t/RC } \right) & &\text{charge on } C \\
i(t) &= \frac{dq}{dt} = \frac{V}{R}\,e^{ -t/RC } & &\text{current} \\
V_{C}(t) &= \frac{q}{C} = V\left( 1-e^{ -t/RC } \right) & &\text{voltage across } C \\
V_{R}(t) &= iR = V e^{ -t/RC } & &\text{voltage across } R
\end{align}
$$
where $q_{0} = CV$ is the **equilibrium (final) charge** and $\tau = RC$ is the **capacitive time constant**.

> [!check] Sanity checks
> - $t=0$: $q=0$ and $i = V/R$, so the capacitor acts like a wire.
> - $t\to\infty$: $q \to CV$ and $i\to 0$, so the capacitor acts like a break in the wire.
> - $V_{R} + V_{C} = V$ at every instant (the loop rule).

### Derivation
Apply the loop rule (KVL), going around the loop in the direction of the current:
$$
\begin{align}
& V - iR - \frac{q}{C} = 0 && \text{(KVL)} \\
& V - R\frac{dq}{dt} - \frac{q}{C} = 0 && (i = dq/dt) \\
& RC\frac{dq}{dt} = CV - q && \text{(multiply by } C\text{)} \\
& \frac{dq}{q - CV} = -\frac{dt}{RC} && \text{(separate variables)} \\
& \int_{0}^{q} \frac{dq'}{q'-CV} = -\frac{1}{RC}\int_{0}^{t} dt' && (q = 0 \text{ at } t = 0) \\
& \int_{-CV}^{\,q-CV} \frac{du}{u} = -\frac{t}{RC} && (u = q-CV,\ du = dq) \\
& \ln\left( \frac{q-CV}{-CV} \right) = -\frac{t}{RC} && \text{(both negative, so the ratio is positive)} \\
& q - CV = -CV e^{ -t/RC } \\
& q(t) = CV\left( 1-e^{ -t/RC } \right)
\end{align}
$$

---

## Discharging (S to b)

Now assume the capacitor is fully charged to $V_{0}$ (equal to the battery's emf), so $q_{0} = CV_{0}$. At a new $t = 0$, switch $S$ is thrown from **a** to **b**, and the capacitor discharges through $R$.

### Results
$$
\begin{align}
q(t) &= q_{0}\,e^{ -t/RC } & &\text{charge on } C \\
i(t) &= \frac{dq}{dt} = -\frac{V_{0}}{R}\,e^{ -t/RC } & &\text{current (negative: charge leaving } C\text{)} \\
V_{C}(t) &= V_{0}\,e^{ -t/RC } & &\text{voltage across } C
\end{align}
$$

### Derivation
No battery in the loop now. $\frac{dq}{dt} < 0$ because the capacitor is losing charge.
$$
\begin{align}
& \frac{q}{C} + R\frac{dq}{dt} = 0 && \text{(KVL)} \\
& \frac{dq}{q} = -\frac{dt}{RC} && \text{(separate variables)} \\
& \int_{q_{0}}^{q} \frac{dq'}{q'} = -\frac{1}{RC}\int_{0}^{t} dt' && (q = q_{0} \text{ at } t = 0) \\
& \ln\frac{q}{q_{0}} = -\frac{t}{RC} \\
& q(t) = q_{0}\,e^{ -t/RC } \\
& i(t) = \frac{dq}{dt} = -\frac{q_{0}}{RC}e^{ -t/RC } = -\frac{V_{0}}{R}e^{ -t/RC } && (q_{0} = CV_{0})
\end{align}
$$

---

## Graphs

**Charging** (horizontal axis in units of $\tau$; blue = $q/CV$, orange = $i/(V/R)$)
```desmos-graph
left=-0.2; right=5; bottom=-0.05; top=1.1; height=300
---
y=1-e^{-x}|#2a78d6
y=e^{-x}|#eb6834
x=1|dashed|#8a8985
(1, 1-e^{-1})|label:63%|#2a78d6
(1, e^{-1})|label:37%|#eb6834
```

**Discharging** ($q/q_{0}$ and $|i|/(V_{0}/R)$ are the same curve)
```desmos-graph
left=-0.2; right=5; bottom=-0.05; top=1.1; height=300
---
y=e^{-x}|#2a78d6
x=1|dashed|#8a8985
(1, e^{-1})|label:37%|#2a78d6
```

> [!tip] Reading the graphs
> - **Charging:** $q$ rises toward $CV$ while $i$ falls toward 0. They cross at about $0.7\tau$ ($\ln 2 \cdot \tau$).
> - **Discharging:** $q$ and $|i|$ are the *same* shape. Both start at their max and decay.
> - The dashed line marks $t = \tau$: charging is **63%** done, discharging has **37%** left.

### The time constant
| time | charging: $q / CV$ | discharging: $q / q_{0}$ |
|---|---|---|
| $\tau$ | 63% | 37% |
| $2\tau$ | 86% | 14% |
| $3\tau$ | 95% | 5% |
| $5\tau$ | 99.3% | 0.7% |

Rule of thumb: after $5\tau$, treat it as **fully charged / fully discharged**.

---

## Energy (charging)

While charging, a total charge $q = CV$ flows through the battery at constant voltage $V$:
$$
W_{\text{battery}} = qV = CV^{2}
$$

**Half is stored in the capacitor:**
$$
U_{C} = \int_{0}^{CV} V_{C}\,dq = \int_{0}^{CV} \frac{q}{C}\,dq = \frac{(CV)^{2}}{2C} = \frac{1}{2}CV^{2}
$$

**The other half goes to Joule heating in the resistor:**
$$
\begin{align}
& \frac{dW_{R}}{dt} = i^{2}R = \left( \frac{V}{R}e^{ -t/RC } \right)^{2}R = \frac{V^{2}}{R}e^{ -2t/RC } \\
& W_{R} = \frac{V^{2}}{R}\int_{0}^{\infty} e^{ -2t/RC } \, dt = \frac{V^{2}}{R}\left[ -\frac{RC}{2}e^{ -2t/RC } \right]_{0}^{\infty} = \frac{V^{2}}{R}\cdot\frac{RC}{2} \\
& W_{R} = \frac{1}{2}CV^{2}
\end{align}
$$

> [!note] Check
> $U_{C} + W_{R} = \tfrac12 CV^{2} + \tfrac12 CV^{2} = CV^{2} = W_{\text{battery}}$. Energy is conserved. Surprisingly, the split is always 50/50 no matter what $R$ is: a bigger $R$ just makes it take longer.

---

## What you should know

> [!success] By the end of these notes you should be able to…
> 1. **Write KVL for the loop** and turn it into a differential equation using $i = dq/dt$.
> 2. **Solve it** by separating variables, and set the integration limits from the initial condition.
> 3. **Know the four results** (or re-derive them in a minute):
>    - charging: $q = CV(1-e^{-t/RC})$ and $i = \frac{V}{R}e^{-t/RC}$
>    - discharging: $q = q_{0}e^{-t/RC}$ and $i = -\frac{V_{0}}{R}e^{-t/RC}$
> 4. **Explain the limiting behavior:** an uncharged capacitor acts like a **wire** at $t = 0$, and a fully charged one acts like an **open circuit** as $t \to \infty$.
> 5. **Use $\tau = RC$:** 63% charged or 37% remaining after one $\tau$, and "done" after about $5\tau$. Check units: $\Omega \cdot \text{F} = \text{s}$.
> 6. **Sketch** $q(t)$, $i(t)$ and $V_{C}(t)$ for both charging and discharging.
> 7. **Do the energy bookkeeping:** the battery supplies $CV^{2}$, the capacitor stores $\frac12 CV^{2}$ and the resistor dissipates $\frac12 CV^{2}$.

> [!warning] Common mistakes
> - Using $q = CV$ at every time: that's only the **final** charge.
> - Forgetting the minus sign on the discharging current.
> - Mixing up $\tau$ (a time) with the 63% / 37% (fractions).
> - Using $e^{-t/RC}$ for the charging *charge*: charging charge is $1 - e^{-t/RC}$, and only the current decays.
> - Forgetting to **square** $i$ in $P = i^{2}R$. The power decays as $e^{-2t/RC}$, twice as fast as the current.
