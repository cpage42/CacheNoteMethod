---
class: "[[MATH 327]]"
tags:
  - tool
  - eigenvalues
---
# Eigen Calculator
Class: [[MATH 327]] · Used in [[Intro to Systems of DEs]]

> [!tip] How to use
> 1. **Eigenvalues:** type the numbers after x1 =, x2 =, y1 =, y2 = in the Coefficients box. **Solution checker:** type in its math boxes with your Latex Suite shortcuts.
> 2. Switch to **Reading view** (**Ctrl+E**, or the book icon top-right). The Run buttons only exist there. Hover over a code block and click **Run** at its bottom-right. Press **Ctrl+E** again to go back to editing.
> 3. The answer appears under the code block. **Clear** removes it.
>
> Write functions with parentheses: `\sin(t)`, not `\sin t\cos t`. Constants like $C$, $c_{1}$, $c_{2}$ are fine.

---

## 1. Eigenvalues & general solution
Type the numbers after the `=` signs:  x′ = x1·x + x2·y  and  y′ = y1·x + y2·y. Decimals, fractions (`1/2`) and roots (`sqrt(6)`) all work.

> [!question] Coefficients
> x1 = 1
> x2 = 2
> y1 = 3
> y2 = 4

> [!example] Your system
> ```dataviewjs
> const txt = await dv.io.load(dv.current().file.path);
> const get = k => { const m = txt.match(new RegExp("^>?\\s*" + k + "\\s*=[ \\t]*(.*)$", "m")); return m ? m[1].trim() : ""; };
> const tex = v => { v = String(v ?? "").trim(); if (!v) return "\\square";
>   return v.replace(/sqrt\(([^)]*)\)/g, "\\sqrt{$1}").replace(/^(-?)([\w.\\{}]+)\/([\w.\\{}]+)$/, "$1\\frac{$2}{$3}"); };
> const term = (c, v, first) => { c = String(c ?? "").trim(); if (!c) return (first ? "" : " + ") + "\\square\\," + v;
>   if (c === "0") return ""; const neg = c.startsWith("-"); let a = neg ? c.slice(1) : c;
>   a = (a === "1") ? "" : tex(a) + "\\,"; return (neg ? (first ? "-" : " - ") : (first ? "" : " + ")) + a + v; };
> const row = (a, b) => { const t = term(a, "x", true); return (t + term(b, "y", !t)) || "0"; };
> const [x1, x2, y1, y2] = ["x1", "x2", "y1", "y2"].map(get);
> dv.paragraph(`$$\\begin{aligned} x' &= ${row(x1, x2)} \\\\ y' &= ${row(y1, y2)} \\end{aligned} \\qquad A = \\begin{bmatrix} ${tex(x1)} & ${tex(x2)} \\\\ ${tex(y1)} & ${tex(y2)} \\end{bmatrix}$$`);
> ```

```python
import sys, os; sys.dont_write_bytecode = True
NOTE = os.path.join(@vault_path, @note_path)
sys.path.insert(0, os.path.dirname(NOTE))   # de_tools.py lives next to this note
from de_tools import *
eigen_report(read_system(NOTE))
```

It prints the characteristic equation, the eigenvalues and eigenvectors, the **general solution** and the **equilibrium type**. It handles complex eigenvalues (sin/cos solutions) and repeated eigenvalues (generalized eigenvector) too.

---

## 2. Solution checker

**Input: the differential equation** (use $y$ and $t$; derivatives as $y'$, $y''$ or $\frac{dy}{dt}$)
%% input: de %%
$$
y'' + 4y = 0
$$

**Input: the proposed solution**
%% input: solution %%
$$
y = c_{1}\sin(2t) + c_{2}\cos(2t)
$$

```python
import sys, os; sys.dont_write_bytecode = True
NOTE = os.path.join(@vault_path, @note_path)
sys.path.insert(0, os.path.dirname(NOTE))   # de_tools.py lives next to this note
from de_tools import *
check_solution(read_input(NOTE, "de"), read_input(NOTE, "solution"))
```

> [!info] How it works
> The code reads the math block right after each `%% input: … %%` marker (the markers are hidden comments), converts the LaTeX to Python (SymPy), and does the math. The engine is `de_tools.py`, which must stay **in the same folder as this note** (move them together), which is based on Prof. McAlister's *SympyEigs.py* and *CheckSols.py* from Canvas.
