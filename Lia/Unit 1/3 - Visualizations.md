---
tags: [tutoring, ap-precalc]
---
# Visualizations: AP Precalc Unit 1
Tutoring: [[Lia]] · [[1 - Unit 1 Refresher]] · [[2 - Key Points to Cover]] · [[4 - Practice Problems]] · [[5 - Test Review 1.1-1.6]] · [[6 - Test Review 5.1-5.3]]

# Unit 1: Polynomial and rational functions

### Increasing, concave up (rate of change increasing)
```desmos-graph
left=-0.5; right=4; bottom=-0.5; top=10; height=220
---
y=x^{2}\left\{x\ge0\right\}|#2a78d6
```

### Increasing, concave down (rate of change decreasing)
```desmos-graph
left=-0.5; right=9; bottom=-0.5; top=3.5; height=220
---
y=\sqrt{x}|#eb6834
```

### Average rate of change = slope of the secant: $-x^2 + 6x$ on $[0, 2]$, $[2, 4]$, $[4, 6]$
```desmos-graph
left=-0.5; right=6.5; bottom=-1; top=10.5; height=300
---
y=-x^{2}+6x|#2a78d6
y=4x\left\{0\le x\le2\right\}|#eb6834
y=8\left\{2\le x\le4\right\}|#8a8985
y=-4(x-4)+8\left\{4\le x\le6\right\}|#1c9e6b
(1,4)|label:slope 4|#eb6834
(3,8)|label:slope 0|#8a8985
(5,4)|label:slope −4|#1c9e6b
```

### Quadratic: equal steps in x, outputs change by 3, 5, 7, 9 (second differences constant)
```desmos-graph
left=-0.5; right=4.5; bottom=-1; top=27; height=280
---
y=(x+1)^{2}|dashed|#8a8985
(0,1)|label:1|#2a78d6
(1,4)|label:4|#2a78d6
(2,9)|label:9|#2a78d6
(3,16)|label:16|#2a78d6
(4,25)|label:25|#2a78d6
```

### Multiplicity: $(x + 2)(x - 1)^2(x - 3)$ crosses at −2 and 3, bounces at 1
```desmos-graph
left=-3; right=4; bottom=-20; top=10; height=300
---
y=(x+2)(x-1)^{2}(x-3)|#2a78d6
(-2,0)|label:cross|#eb6834
(1,0)|label:bounce|#1c9e6b
(3,0)|label:cross|#eb6834
```

### End behavior: even degree
```desmos-graph
left=-3; right=3; bottom=-6; top=6; height=250
---
y=x^{4}-3x^{2}|#2a78d6
y=-x^{4}+3x^{2}|dashed|#eb6834
```

### End behavior: odd degree
```desmos-graph
left=-3; right=3; bottom=-6; top=6; height=250
---
y=x^{3}-2x|#2a78d6
y=-x^{3}+2x|dashed|#eb6834
```

### Complex zeros: $x^3 - x^2 + 4x - 4 = (x - 1)(x^2 + 4)$ touches the axis only once
```desmos-graph
left=-3; right=3; bottom=-15; top=10; height=260
---
y=x^{3}-x^{2}+4x-4|#2a78d6
(1,0)|label:x = 1 (the other two zeros are ±2i)|#eb6834
```

### Even vs. odd symmetry
```desmos-graph
left=-3; right=3; bottom=-4; top=4; height=250
---
y=x^{4}-3x^{2}|#2a78d6
y=x^{3}+x|#eb6834
```

### Rational function: zero, hole, vertical and horizontal asymptotes, $\dfrac{2x^2 - 8}{x^2 - x - 6}$
```desmos-graph
left=-8; right=10; bottom=-8; top=10; height=320
---
y=\frac{2x^{2}-8}{x^{2}-x-6}|#2a78d6
x=3|dashed|#8a8985
y=2|dashed|#8a8985
(-2,1.6)|open|label:hole|#2a78d6
(2,0)|label:zero|#eb6834
```

### Slant asymptote: $\dfrac{x^2 + 1}{x - 1}$ approaches $y = x + 1$
```desmos-graph
left=-8; right=10; bottom=-10; top=14; height=300
---
y=\frac{x^{2}+1}{x-1}|#2a78d6
y=x+1|dashed|#eb6834
x=1|dashed|#8a8985
```

### Horizontal asymptotes compared: bottom bigger, equal degrees, top bigger
```desmos-graph
left=-10; right=10; bottom=-4; top=6; height=280
---
y=\frac{3x+1}{x^{2}+2}|#2a78d6
y=\frac{2x^{2}}{x^{2}+1}|#eb6834
y=\frac{x^{3}}{x^{2}+4}|#1c9e6b
```

### Transformations: $x^2$ → $-2(x + 1)^2 - 4$
```desmos-graph
left=-6; right=4; bottom=-12; top=8; height=300
---
y=x^{2}|dashed|#8a8985
y=-2(x+1)^{2}-4|#2a78d6
(-1,-4)|label:vertex (−1, −4)|#2a78d6
```

### Horizontal vs. vertical stretch of $x^2$: $(2x)^2$ and $2x^2$
```desmos-graph
left=-4; right=4; bottom=-1; top=10; height=250
---
y=x^{2}|dashed|#8a8985
y=(2x)^{2}|#2a78d6
y=\frac{1}{2}x^{2}|#eb6834
```
