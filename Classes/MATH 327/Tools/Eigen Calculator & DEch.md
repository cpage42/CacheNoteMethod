---
class: "[[MATH 327]]"
tags:
  - tool
  - eigenvalues
---
# Eigen Calculator & DEch
Class: [[MATH 327]] · Used in [[Intro to Systems of DEs]]

> [!tip] How to use
> 1. Type your input in the box (matrix numbers for the eigen calculator, LaTeX for the checker).
> 2. Switch to **Reading view** (**Ctrl+E**). The Run buttons only exist there. Hover over a code block and click **Run** at its bottom-right. Ctrl+E again goes back to editing.
> 3. The answer appears under the block. These run the Julia scripts `eigen.jl` and `dech.jl`, which sit in this folder.

---

## 1. Eigen calculator
Type the four entries of the matrix **row by row** after `A =`. Integers, decimals, fractions (`1/2`) and `sqrt(6)` work. No spaces inside one value.

> [!question] Matrix
> A = 0 1 -2 -3


> [!example] Your matrix
> ```dataviewjs
> const txt = await dv.io.load(dv.current().file.path);
> const m = txt.match(/^>?\s*A\s*=[ \t]*(.*)$/m);
> const tex = v => String(v).replace(/sqrt\(([^)]*)\)/g, "\\sqrt{$1}").replace(/^(-?)([\w.\\{}]+)\/([\w.\\{}]+)$/, "$1\\frac{$2}{$3}");
> const t = m ? m[1].trim().split(/[\s,;]+/).filter(Boolean) : [];
> const [a, b, c, d] = [0, 1, 2, 3].map(i => t[i] === undefined ? "\\square" : tex(t[i]));
> dv.paragraph(`$$A = \\begin{bmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{bmatrix}$$`);
> ```

```powershell
$v = @vault_path
$n = @note_path
if (-not (Get-Command julia -ErrorAction SilentlyContinue)) { Write-Output "Julia not found. Make sure it is on your PATH, then restart Obsidian."; exit }
julia "$v/Classes/MATH 327/Tools/eigen.jl" "$v/$n"
```

It prints only `lambda1`, `lambda2`, `v1`, `v2`. Answers are exact (fractions and square roots) with a decimal beside irrational ones, and eigenvectors are scaled to the simplest whole numbers. A repeated eigenvalue gives one eigenvector.

---

## 2. Solution checker (LaTeX in, yes/no out)

**The differential equation** (use $y$ and $t$; derivatives as $y'$, $y''$ or $\frac{dy}{dt}$)
%% input: de %%
$$
y'' + 4y = 0
$$

**The proposed solution**
%% input: solution %%
$$
y = c_{1}\sin(2t) + c_{2}\cos(2t)
$$

```powershell
$v = @vault_path
$n = @note_path
if (-not (Get-Command julia -ErrorAction SilentlyContinue)) { Write-Output "Julia not found. Make sure it is on your PATH, then restart Obsidian."; exit }
julia "$v/Classes/MATH 327/Tools/dech.jl" "$v/$n"
```

> [!info] How it works
> The script reads the math block right after each `%% input: ... %%` marker, plugs the solution into the equation at several values of $t$ (unknown constants like $c_{1}$ get random values), and answers `yes` or `no`. Supported: `y'`, `y''`, `\frac{dy}{dt}`, `\frac{d^2y}{dt^2}`, `\dot{y}`, `\frac{a}{b}`, `\sqrt{x}`, `x^{n}`, `e`, `\pi`, `\sin \cos \tan \sinh \cosh \tanh \ln \exp \cdot`. Functions need parentheses: `\sin(t)`, not `\sin t`.

---

## 3. Shortcut: `eigen()` in any note
Type `eigen(a,b,c,d)=` anywhere in any note, with the matrix entries **row by row**. As soon as you type the equals sign, it turns into the matrix, both eigenvalues and both eigenvectors as a LaTeX block (it takes a few seconds while Julia starts). Same inputs as above: integers, decimals, `1/2`, `sqrt(6)`.

- Example: `eigen(0,1,-2,-3)=` gives $\lambda_1=-2,\ v_1=\begin{bmatrix}1\\-2\end{bmatrix}$ and $\lambda_2=-1,\ v_2=\begin{bmatrix}1\\-1\end{bmatrix}$.
- Forgot the equals sign? Put the cursor on the line, press **Ctrl+P** and run **Eigen Inline: Evaluate eigen(...) on this line**.
- **Ctrl+Z** undoes it. Settings → Eigen Inline lets you turn off the ≈ decimals.
- This is the `eigen-inline` plugin in `.obsidian/plugins`; it runs `eigen.jl` from this folder.

### Phase portraits
Every `eigen()` result now comes with a phase portrait of $\vec x\,' = A\vec x$ right under it:
- **Gray arrows:** the vector field (darker means faster).
- **Orange and green lines:** the eigenvectors. Their arrows point **out** when that eigenvalue is positive and **in** when it's negative.
- **Purple curves:** trajectories, with arrowheads pointing forward in time.
- **Caption:** the type (saddle, node, spiral, center), whether it's stable, and which way spirals turn.

You can also draw one by itself. Make a code block named `phase-plane`, put `A = a b c d` inside, and optionally a line `range = 5` to zoom out:

```phase-plane
A = -1 -2 2 -1
```

Don't want the graph? Turn off **Draw phase portrait** in Settings → Eigen Inline.
