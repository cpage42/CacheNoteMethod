---
tags: [tutoring, ap-precalc]
---
# Visualizations: Unit 2 Summative
Tutoring: [[Lia]] · [[1 - In-Person Worksheet]]

*Each graph matches a worksheet problem, so you can pull it up right after she works it.*

## Polynomials

### End behavior: the four cases (degree even/odd, leading coefficient +/−)
**Even, positive:** $\lim_{x\to\pm\infty} = \infty$ (both ends up)
```desmos-graph
left=-3; right=3; bottom=-5; top=5; height=170
---
y=x^{4}-3x^{2}|#2a78d6
```
**Even, negative:** $\lim_{x\to\pm\infty} = -\infty$ (both ends down)
```desmos-graph
left=-3; right=3; bottom=-5; top=5; height=170
---
y=-x^{4}+3x^{2}|#eb6834
```
**Odd, positive:** $\lim_{x\to-\infty} = -\infty$, $\lim_{x\to\infty} = \infty$ (down-left, up-right)
```desmos-graph
left=-3; right=3; bottom=-5; top=5; height=170
---
y=x^{3}-3x|#1c9e6b
```
**Odd, negative:** $\lim_{x\to-\infty} = \infty$, $\lim_{x\to\infty} = -\infty$ (up-left, down-right)
```desmos-graph
left=-3; right=3; bottom=-5; top=5; height=170
---
y=-x^{3}+3x|#8a6bd6
```
*Only the leading term matters far out. The middle terms just add wiggles.*

### Multiplicity: $f(x) = (x + 2)^2(x - 1)^3(x - 4)$ (worksheet 4E, scaled down)
```desmos-graph
left=-3.5; right=5; bottom=-11; top=4; height=320
---
y=\frac{1}{20}(x+2)^{2}(x-1)^{3}(x-4)|#2a78d6
(-2,0)|label:x = −2, mult 2: bounces|#eb6834
(1,0)|label:x = 1, mult 3: flattens and crosses|#1c9e6b
(4,0)|label:x = 4, mult 1: crosses|#8a6bd6
```
*Even multiplicity bounces; odd crosses. Higher multiplicity means flatter at the zero.*

### Imaginary zeros don't touch the axis: $(x - 1)(x^2 - 4x + 5)$ (worksheet 3H)
```desmos-graph
left=-1; right=4; bottom=-4; top=4; height=260
---
y=(x-1)(x^{2}-4x+5)|#2a78d6
(1,0)|label:x = 1 (the only real zero; 2 ± i are invisible here)|#eb6834
```
*Degree 3 means 3 zeros total, but only the real ones are $x$-intercepts.*

## Rational functions

### Anatomy: $r(x) = \dfrac{2x^2 - 8}{x^2 - x - 6} = \dfrac{2(x - 2)}{x - 3}$, $x \ne -2$ (worksheet 5H)
```desmos-graph
left=-7; right=9; bottom=-6; top=10; height=340
---
y=\frac{2(x-2)}{x-3}|#2a78d6
x=3|dashed|#8a8985
y=2|dashed|#8a8985
(-2,1.6)|open|label:hole (−2, 8/5): factor cancelled|#2a78d6
(2,0)|label:x-int (2, 0)|#eb6834
(0,1.3333)|label:y-int (0, 4/3)|#1c9e6b
(3,8)|label:VA x = 3 (factor left in the bottom)|#8a8985
(6.5,2)|label:HA y = 2 (same degree: 2/1)|#8a8985
```
*Cancelled factor → hole. Factor left in the denominator → vertical asymptote.*

### Sign chart and one-sided limits: $r(x) = \dfrac{x + 1}{x^2 - 4}$ (worksheet 6H)
```desmos-graph
left=-6; right=6; bottom=-4; top=4; height=320
---
y=\frac{x+1}{x^{2}-4}|#2a78d6
x=-2|dashed|#8a8985
x=2|dashed|#8a8985
(-4,-0.6)|label:−|#eb6834
(-1.5,1.2)|label:+|#1c9e6b
(0.5,-1.2)|label:−|#eb6834
(4,0.6)|label:+|#1c9e6b
(-1,0)|label:crosses its HA y = 0 here|#8a6bd6
```
*The sign on each side of an asymptote tells you whether it shoots to $+\infty$ or $-\infty$.*

### Slant asymptote and the remainder: $r(x) = \dfrac{x^2 + x - 4}{x - 2} = x + 3 + \dfrac{2}{x - 2}$ (worksheet 7H)
```desmos-graph
left=-8; right=10; bottom=-8; top=16; height=340
---
y=\frac{x^{2}+x-4}{x-2}|#2a78d6
y=x+3|dashed|#eb6834
y=\frac{2}{x-2}|#8a8985
x=2|dashed|#8a8985
(7,10)|label:quotient y = x + 3 = slant asymptote|#eb6834
(7,0.4)|label:remainder term 2/(x − 2) → 0|#8a8985
```
*The gray remainder term is exactly the gap between the curve and the dashed line. As it dies off, the curve hugs $y = x + 3$.*
