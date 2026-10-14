---
class: "[[MATH 327]]"
tags: [diffeq, systems, nonhomogeneous]
sources:
  - "Lebl, Notes on Diffy Qs §3.9 (first-order parts): https://www.jirka.org/diffyqs/html/nonhomogsys_section.html"
  - "Paul's Online Notes, Nonhomogeneous Systems: https://tutorial.math.lamar.edu/classes/de/nonhomogeneoussystems.aspx"
---
# Nonhomogeneous Systems (first order)
Class: [[MATH 327]] · Before this: [[Phase Planes and Eigenvectors]] · [[Complex Eigenvalues]] · Tools: [[Eigen Calculator & DEch]]

*Written assuming shaky linear algebra: every matrix step is also written out as plain equations. Examples are from Paul's Online Notes (main) and Lebl §3.9 (extra).*

---

## 0. The linear algebra you actually need
You only need four moves. Everything else in this note is built from them.

### Move 1: A matrix times a vector = two ordinary equations
$$\begin{bmatrix} a & b \\ c & d \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} ax + by \\ cx + dy \end{bmatrix}$$
**Row times column:** go across the top row and down the vector, multiply pairs, add. Then do the same with the bottom row.

So a "matrix system" is just two equations stacked:
$$\vec x\,' = A\vec x + \vec f \quad\text{with}\quad A = \begin{bmatrix}1 & 2\\ 3 & 2\end{bmatrix},\ \vec f = \begin{bmatrix}2t\\ -4t\end{bmatrix} \quad\text{means}\quad \begin{cases} x' = x + 2y + 2t \\ y' = 3x + 2y - 4t \end{cases}$$

### Move 2: Vectors add and scale entry by entry
$$\begin{bmatrix}1\\2\end{bmatrix} + \begin{bmatrix}3\\5\end{bmatrix} = \begin{bmatrix}4\\7\end{bmatrix}, \qquad 3\begin{bmatrix}1\\2\end{bmatrix} = \begin{bmatrix}3\\6\end{bmatrix}, \qquad e^{2t}\begin{bmatrix}6\\-1\end{bmatrix} = \begin{bmatrix}6e^{2t}\\ -e^{2t}\end{bmatrix}$$

### Move 3: Matching vectors = matching each entry
$\begin{bmatrix}p\\q\end{bmatrix} = \begin{bmatrix}r\\s\end{bmatrix}$ means $p = r$ **and** $q = s$. One vector equation is two regular equations.

### Move 4: The inverse of a 2×2 (swap, negate, divide)
$$\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad - bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$
**Swap** $a$ and $d$, **negate** $b$ and $c$, **divide** everything by the determinant $ad - bc$. The inverse "undoes" the matrix, the way division undoes multiplication.

> [!tip] What's a "fundamental matrix" $X(t)$?
> Just your two homogeneous solutions **written side by side as columns**. If the homogeneous solutions are $e^{-t}\begin{bmatrix}1\\4\end{bmatrix}$ and $e^{-6t}\begin{bmatrix}-1\\1\end{bmatrix}$, then
> $$X(t) = \begin{bmatrix} e^{-t} & -e^{-6t} \\ 4e^{-t} & e^{-6t} \end{bmatrix}$$
> That's all it is: a container holding both solutions.

---

## 1. The big picture
A **nonhomogeneous** system has an extra term that doesn't involve $x$ or $y$:
$$\vec x\,' = A\vec x + \vec g(t) \qquad\text{(Paul writes } \vec g\text{; Lebl writes } \vec f\text{; same thing)}$$
That extra term is an outside push on the system: a voltage source, an inflow, a force.

> [!abstract] The one idea
> $$\boxed{\vec x = \vec x_c + \vec x_p}$$
> 1. $\vec x_c$ (**complementary**): solve the system with the push turned off, $\vec x\,' = A\vec x$. You already know how: eigenvalues and eigenvectors. It has the constants $c_1, c_2$.
> 2. $\vec x_p$ (**particular**): find **any one** solution of the full system. No constants.
> 3. Add them. Use the initial conditions **last**, on the sum.

It's the same structure as single equations: homogeneous solution + one particular solution.

## 2. Which method?
| Method | Use when | Difficulty with weak linear algebra |
|---|---|---|
| **Undetermined coefficients** | the push $\vec g$ is a polynomial, $e^{at}$, sin or cos | ⭐ **Easiest.** It's just matching equations. |
| **Variation of parameters** | anything, especially if guessing fails | ⭐⭐ Needs Move 4 (inverse) and an integral. |
| Eigenvector decomposition | constant $A$, as an alternative | ⭐⭐ Optional, see the bottom |
| Integrating factor ($e^{tA}$) | constant $A$ | ⭐⭐⭐ Needs the matrix exponential. Skip unless your class uses it. |

**Default plan:** try undetermined coefficients. If $\vec g$ is ugly (like $\tan t$ or $1/t$), use variation of parameters.

---

## 3. Undetermined coefficients
**Idea:** guess that $\vec x_p$ looks like $\vec g$, with unknown numbers in front. Plug in and solve for the unknowns.

### What to guess
| If the push $\vec g$ contains… | Guess (each letter is an unknown **vector**: 2 numbers)       |
| ------------------------------ | ------------------------------------------------------------- |
| a constant vector | $\vec b$ (one unknown constant vector, see 3a) |
| $t$                            | $t\vec a + \vec b$ (always include the constant $\vec b$ too) |
| $e^{at}$                       | $\vec a\,e^{at}$                                              |
| $\cos bt$ or $\sin bt$         | $\vec a\cos bt + \vec b\sin bt$                               |

**Conflict rule:** if $e^{at}$ already appears in $\vec x_c$ (that is, $a$ is an eigenvalue), guess $\vec a\,e^{at} + \vec b\,t\,e^{at}$. Keep **both** terms (unlike single equations, where you just multiply by $t$).

**Mixed pushes:** add the guesses. For example, $\vec g = t\begin{bmatrix}1\\0\end{bmatrix} + \begin{bmatrix}2\\5\end{bmatrix}$ is "a $t$ part plus a constant part," and $t\vec a + \vec b$ already covers both.

### 3a. The simplest case: a constant push
If $\vec g$ is a **constant vector** (just numbers, no $t$), like $\vec g = \begin{bmatrix}4\\-1\end{bmatrix}$:

**Guess:** $\vec x_p = \vec b = \begin{bmatrix}b_1\\b_2\end{bmatrix}$, a constant vector (2 unknown numbers).

**Why it's easy:** a constant has derivative zero, so $\vec x_p\,' = \vec 0$. Plugging into $\vec x\,' = A\vec x + \vec g$:
$$\vec 0 = A\vec b + \vec g \qquad\Longleftrightarrow\qquad A\vec b = -\vec g$$
That's just two ordinary equations for $b_1$ and $b_2$.

> [!example] Example
> $$\vec x\,' = \begin{bmatrix}1 & 2\\ 3 & 2\end{bmatrix}\vec x + \begin{bmatrix}4\\ -1\end{bmatrix}$$
> **Guess** $x_p = b_1$, $y_p = b_2$ (constants), so $x_p' = 0$ and $y_p' = 0$.
>
> **Plug into each row** (Move 1):
> - Top: $0 = b_1 + 2b_2 + 4$
> - Bottom: $0 = 3b_1 + 2b_2 - 1$
>
> **Solve:** subtract the top from the bottom: $0 = 2b_1 - 5$, so $b_1 = \tfrac52$. Then $2b_2 = -4 - \tfrac52 = -\tfrac{13}{2}$, so $b_2 = -\tfrac{13}{4}$.
> $$\vec x_p = \begin{bmatrix}5/2\\ -13/4\end{bmatrix}$$
> **Check** (always do this): plug $\vec b$ back into $A\vec b + \vec g$, row by row. It should come out to $\vec 0$, because the derivative of a constant is 0.
> - Top: $\tfrac52 + 2\left(-\tfrac{13}{4}\right) + 4 = \tfrac52 - \tfrac{13}{2} + 4 = 0$ ✓
> - Bottom: $3\left(\tfrac52\right) + 2\left(-\tfrac{13}{4}\right) - 1 = \tfrac{15}{2} - \tfrac{13}{2} - 1 = 0$ ✓
>
> **General solution:** $\vec x = c_1e^{-t}\begin{bmatrix}-1\\1\end{bmatrix} + c_2e^{4t}\begin{bmatrix}2\\3\end{bmatrix} + \begin{bmatrix}5/2\\ -13/4\end{bmatrix}$

> [!tip] What the constant means
> $\vec x_p = \vec b$ is an **equilibrium point**: if the system starts exactly there, it never moves. A constant push just **shifts the whole phase portrait** so it's centered at $\vec b$ instead of the origin. The eigenvalues still decide what kind it is (saddle, sink, spiral, …).

> [!warning] When the constant guess fails
> If $\det A = 0$ (one eigenvalue is 0), then $A\vec b = -\vec g$ usually has **no solution**: the two equations contradict each other. That's the constant-push version of a conflict, because a constant is $e^{0t}$ and $0$ is an eigenvalue. Fix: guess $t\vec a + \vec b$ instead.
> Quick test before guessing: compute $\det A = ad - bc$. If it isn't 0, the constant guess always works.

### 3b. A $t$ push

**Worked example (Paul's Example 1)**
$$\vec x\,' = \begin{bmatrix}1 & 2\\ 3 & 2\end{bmatrix}\vec x + t\begin{bmatrix}2\\ -4\end{bmatrix}$$
**Step 1: Homogeneous part.** The eigenvalues are $-1$ and $4$, with eigenvectors $\begin{bmatrix}-1\\1\end{bmatrix}$ and $\begin{bmatrix}2\\3\end{bmatrix}$:
$$\vec x_c = c_1e^{-t}\begin{bmatrix}-1\\1\end{bmatrix} + c_2e^{4t}\begin{bmatrix}2\\3\end{bmatrix}$$

**Step 2: Guess.** The push is "$t$ times a vector," so guess $\vec x_p = t\vec a + \vec b$, which means
$$x_p = a_1t + b_1, \qquad y_p = a_2t + b_2 \qquad(\text{4 unknowns})$$
No conflict: $t$ isn't $e^{-t}$ or $e^{4t}$.

**Step 3: Plug into each equation separately.** The derivatives are $x_p' = a_1$ and $y_p' = a_2$.
- Top equation, $x' = x + 2y + 2t$:
  $$a_1 = (a_1t + b_1) + 2(a_2t + b_2) + 2t$$
- Bottom equation, $y' = 3x + 2y - 4t$:
  $$a_2 = 3(a_1t + b_1) + 2(a_2t + b_2) - 4t$$

**Step 4: Match the $t$ terms and the constant terms** (the left sides have no $t$, so their $t$-coefficient is 0):

| | $t$ terms | constant terms |
|---|---|---|
| Top | $0 = a_1 + 2a_2 + 2$ | $a_1 = b_1 + 2b_2$ |
| Bottom | $0 = 3a_1 + 2a_2 - 4$ | $a_2 = 3b_1 + 2b_2$ |

**Step 5: Solve.** First the $t$ equations: $a_1 + 2a_2 = -2$ and $3a_1 + 2a_2 = 4$. Subtract the first from the second: $2a_1 = 6$, so $a_1 = 3$, and then $a_2 = -\tfrac52$.
Then the constant equations: $b_1 + 2b_2 = 3$ and $3b_1 + 2b_2 = -\tfrac52$. Subtract: $2b_1 = -\tfrac{11}{2}$, so $b_1 = -\tfrac{11}{4}$, and then $b_2 = \tfrac{23}{8}$.

**Step 6: Assemble.**
$$\vec x_p = t\begin{bmatrix}3\\ -5/2\end{bmatrix} + \begin{bmatrix}-11/4\\ 23/8\end{bmatrix}, \qquad \vec x = \vec x_c + \vec x_p$$
Or in plain form: $x = -c_1e^{-t} + 2c_2e^{4t} + 3t - \tfrac{11}{4}$ and $y = c_1e^{-t} + 3c_2e^{4t} - \tfrac52t + \tfrac{23}{8}$.

> [!tip] Notice
> You never needed a matrix inverse. Undetermined coefficients is **just algebra**: plug in, match terms, solve small systems of equations.

> [!example]- Extra example with a conflict (Lebl 3.9.3)
> $\vec x\,' = \begin{bmatrix}-1 & 0\\ -2 & 1\end{bmatrix}\vec x + \begin{bmatrix}e^t\\ t\end{bmatrix}$. The eigenvalues are $-1$ and $1$, so $e^t$ **conflicts** with $\vec x_c$.
> - Guess: $\vec x_p = \vec a\,e^t + \vec b\,te^t + \vec c\,t + \vec d$ (8 unknowns).
> - Plug in and match the $e^t$, $te^t$, $t$ and constant terms in each row. The result: $x_p = \tfrac12e^t$ and $y_p = -te^t - t - 1$.
> - General solution: $x = \tfrac12e^t + \alpha_1e^{-t}$ and $y = -te^t - t - 1 + \alpha_1e^{-t} + \alpha_2e^t$.

---

## 4. Variation of parameters
**Idea:** take the homogeneous solution, but replace the constants $c_1, c_2$ with unknown **functions**. It leads to one formula:
$$\boxed{\vec x_p = X\int X^{-1}\vec g\,dt}$$
In words: **(1)** put the solutions side by side to get $X$, **(2)** invert it, **(3)** multiply by the push, **(4)** integrate each entry, **(5)** multiply by $X$.

### Worked example (Paul's Example 2), every multiplication shown
$$\vec x\,' = \begin{bmatrix}-5 & 1\\ 4 & -2\end{bmatrix}\vec x + e^{2t}\begin{bmatrix}6\\ -1\end{bmatrix}$$

**Step 1: Homogeneous solutions.** The eigenvalues are $-1$ (eigenvector $\begin{bmatrix}1\\4\end{bmatrix}$) and $-6$ (eigenvector $\begin{bmatrix}-1\\1\end{bmatrix}$):
$$\vec x_c = c_1e^{-t}\begin{bmatrix}1\\4\end{bmatrix} + c_2e^{-6t}\begin{bmatrix}-1\\1\end{bmatrix}$$

**Step 2: Build $X$** (solutions as columns):
$$X = \begin{bmatrix} e^{-t} & -e^{-6t} \\ 4e^{-t} & e^{-6t} \end{bmatrix}$$

**Step 3: Invert it with Move 4.**
- Determinant: $ad - bc = (e^{-t})(e^{-6t}) - (-e^{-6t})(4e^{-t}) = e^{-7t} + 4e^{-7t} = 5e^{-7t}$
- Swap, negate, divide:
$$X^{-1} = \frac{1}{5e^{-7t}}\begin{bmatrix} e^{-6t} & e^{-6t} \\ -4e^{-t} & e^{-t} \end{bmatrix} = \frac15\begin{bmatrix} e^{t} & e^{t} \\ -4e^{6t} & e^{6t} \end{bmatrix}$$
  (Dividing by $e^{-7t}$ is multiplying by $e^{7t}$: $e^{-6t}e^{7t} = e^{t}$ and $e^{-t}e^{7t} = e^{6t}$.)

**Step 4: Multiply $X^{-1}\vec g$ (Move 1, row times column).** The push is $\vec g = \begin{bmatrix}6e^{2t}\\ -e^{2t}\end{bmatrix}$.
- Top: $\tfrac15\left[e^t(6e^{2t}) + e^t(-e^{2t})\right] = \tfrac15(5e^{3t}) = e^{3t}$
- Bottom: $\tfrac15\left[-4e^{6t}(6e^{2t}) + e^{6t}(-e^{2t})\right] = \tfrac15(-25e^{8t}) = -5e^{8t}$
$$X^{-1}\vec g = \begin{bmatrix} e^{3t} \\ -5e^{8t} \end{bmatrix}$$

**Step 5: Integrate each entry** (drop the $+C$; those constants would just recreate $\vec x_c$):
$$\int X^{-1}\vec g\,dt = \begin{bmatrix} \tfrac13e^{3t} \\ -\tfrac58e^{8t} \end{bmatrix}$$

**Step 6: Multiply by $X$ (Move 1 again).**
- Top: $e^{-t}\cdot\tfrac13e^{3t} + (-e^{-6t})(-\tfrac58e^{8t}) = \tfrac13e^{2t} + \tfrac58e^{2t} = \tfrac{23}{24}e^{2t}$
- Bottom: $4e^{-t}\cdot\tfrac13e^{3t} + e^{-6t}(-\tfrac58e^{8t}) = \tfrac43e^{2t} - \tfrac58e^{2t} = \tfrac{17}{24}e^{2t}$
$$\vec x_p = e^{2t}\begin{bmatrix} 23/24 \\ 17/24 \end{bmatrix}$$

**Step 7: General solution.** $\vec x = \vec x_c + \vec x_p$, or in plain form:
$$x = c_1e^{-t} - c_2e^{-6t} + \tfrac{23}{24}e^{2t}, \qquad y = 4c_1e^{-t} + c_2e^{-6t} + \tfrac{17}{24}e^{2t}$$

> [!check] Same answer by guessing
> The push is $e^{2t}$, and 2 isn't an eigenvalue, so undetermined coefficients also works: guess $x_p = a_1e^{2t}$, $y_p = a_2e^{2t}$. Plugging in gives $2a_1 = -5a_1 + a_2 + 6$ and $2a_2 = 4a_1 - 2a_2 - 1$, which solve to $a_1 = \tfrac{23}{24}$, $a_2 = \tfrac{17}{24}$. Same answer, no matrix inverse. **Pick the easier method when you can.**

> [!example]- Extra example where $A$ depends on $t$ (Lebl 3.9.4)
> Only variation of parameters handles this case. With $X = \begin{bmatrix}1 & -t\\ t & 1\end{bmatrix}$ and $\vec g = (t^2 + 1)\begin{bmatrix}t\\1\end{bmatrix}$: $\det X = 1 + t^2$, $X^{-1}\vec g = \begin{bmatrix}2t\\ 1 - t^2\end{bmatrix}$, which integrates to $\begin{bmatrix}t^2\\ t - t^3/3\end{bmatrix}$. Multiplying by $X$ gives $\vec x_p = \begin{bmatrix}t^4/3\\ 2t^3/3 + t\end{bmatrix}$.

---

## 5. Optional: eigenvector decomposition
*Only if your class covers it. It's a third way to do constant-$A$ problems.*

**Idea in plain words:** in the "eigenvector directions," the two equations stop affecting each other. You turn one coupled system into **two separate single-variable ODEs**, solve each one, and recombine.
1. Put the eigenvectors side by side as columns: $E = [\vec v_1\ \vec v_2]$.
2. Compute $\vec h = E^{-1}\vec g$ (Move 4, then Move 1). This splits the push into eigen-directions.
3. Solve $\xi_1' = \lambda_1\xi_1 + h_1$ and $\xi_2' = \lambda_2\xi_2 + h_2$ separately. These are ordinary first-order linear ODEs.
4. Recombine: $\vec x = \xi_1\vec v_1 + \xi_2\vec v_2$.

> [!example]- Example (Lebl 3.9.2)
> $A = \begin{bmatrix}1 & 3\\ 3 & 1\end{bmatrix}$, $\vec g = \begin{bmatrix}2e^t\\ 2t\end{bmatrix}$, $\vec x(0) = \begin{bmatrix}3/16\\ -5/16\end{bmatrix}$. The eigenvalues are $-2$ with $\begin{bmatrix}1\\-1\end{bmatrix}$ and $4$ with $\begin{bmatrix}1\\1\end{bmatrix}$.
> - $E^{-1}\vec g = \begin{bmatrix}e^t - t\\ e^t + t\end{bmatrix}$, and the initial conditions convert to $\xi_1(0) = \tfrac14$, $\xi_2(0) = -\tfrac1{16}$.
> - Solve $\xi_1' = -2\xi_1 + e^t - t$ and $\xi_2' = 4\xi_2 + e^t + t$ separately, then recombine:
> $$x_1 = \frac{e^{4t} - e^{-2t}}{3} + \frac{3 - 12t}{16}, \qquad x_2 = \frac{e^{-2t} + e^{4t} - 2e^t}{3} + \frac{4t - 5}{16}$$

*(The matrix integrating factor, Lebl 3.9.1, needs the matrix exponential $e^{tA}$. Skipped unless your class uses it.)*

---

## 6. Summary
> [!tip] Every problem, same skeleton
> 1. **Homogeneous:** eigenvalues and eigenvectors give $\vec x_c$ (with $c_1, c_2$).
> 2. **Particular:** guess (undetermined coefficients) or use the formula (variation of parameters). No constants.
> 3. **Add:** $\vec x = \vec x_c + \vec x_p$.
> 4. **Initial conditions** go on the **whole thing**, last.
> 5. **Check:** plug back in, one equation at a time (or use [[Eigen Calculator & DEch|DEch]]). For a constant guess the check is just $A\vec b + \vec g = \vec 0$.

> [!warning] Common mistakes
> - Forgetting that guess coefficients are **vectors**: $t\vec a + \vec b$ is 4 unknowns, not 2.
> - Forgetting the constant $\vec b$ in a $t\vec a + \vec b$ guess.
> - Constant push: forgetting that $\vec x_p\,' = \vec 0$, so the left side is **zero**, not $\vec b$.
> - Using a constant guess when $\det A = 0$ (it won't solve; guess $t\vec a + \vec b$).
> - In variation of parameters: getting the **order** wrong. It's $X^{-1}$ times $\vec g$, and later $X$ times the integral, both row-times-column.
> - Inverse slip-ups: swap the **diagonal**, negate the **off-diagonal**, divide by the **determinant**.
> - Applying the initial conditions to $\vec x_c$ before adding $\vec x_p$.
