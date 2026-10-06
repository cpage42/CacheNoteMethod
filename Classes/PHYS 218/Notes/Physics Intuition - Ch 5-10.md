# Physics Intuition: Ch 5–10
Class: [[PHYS 218]] · Formulas and practice: [[Exam 2 Review - Ch 9 and 10]] · [[Exam 1 - Corrections]] · Flashcards: [[Flashcards - PHYS 218 Electrostatics (Ch 5-8)]] · [[Flashcards - PHYS 218 Circuits (Ch 9-10)]]

> [!abstract] What this is
> This isn't a formula sheet. It's the mental pictures behind the formulas: *why* things work the way they do, so you can predict an answer before you calculate it and notice when a calculation comes out wrong. Read it like a short paper, one chapter at a time. Each chapter ends with **predict-then-check** questions: answer them in your head first, then open the box.

---

## The two big ideas under everything

Six chapters, but really only two ideas.

**1. Charges change the space around them.** A charge doesn't reach across empty space and grab another charge. It sets up a **field** everywhere around it, and any other charge just responds to the field *where it is*. Chapters 5 and 6 are about what that field looks like.

**2. Fields make an energy landscape.** Because the electric force is conservative, you can draw a "height map" for charges: the **potential** $V$. Positive charges roll downhill on it. Chapters 7 and 8 are about the landscape, and Chapters 9 and 10 are what happens when you let charges roll down it continuously through a wire.

Almost every concept has a gravity twin, and every circuit idea has a water twin. Keep this table in your head:

| Electricity | Gravity twin | Water twin |
|---|---|---|
| Charge $q$ | Mass $m$ | A bucket of water |
| Field $\vec E$ (force per charge) | $\vec g$ (force per mass) | The slope of the ground |
| Potential $V$ (energy per charge) | Height $\times g$ | Height, or water pressure |
| Potential energy $U = qV$ | $U = mgh$ | Energy of water held up high |
| Battery (emf $\varepsilon$) | A ski lift | A pump that lifts water up |
| Current $I$ | — | Flow rate (gallons per second) |
| Resistor | — | A narrow or gravel-filled pipe |
| Capacitor | — | A tank with a rubber membrane |
| Wire | — | A wide, empty pipe (no height lost) |

The one big difference from gravity: charge comes in **two signs**, so forces can repel, and the fields of $+$ and $-$ charges can cancel. That's why everyday objects feel no electric force at all, even though between two protons the electric force is about $10^{36}$ times stronger than gravity. Matter is almost perfectly neutral.

---

## Ch 5: Charges and fields

### Why the force goes as $1/r^2$
Picture a charge sending out a fixed number of field lines in every direction. At distance $r$, those lines are spread over a sphere of area $4\pi r^2$. Double the distance and the same lines cover four times the area, so they're a quarter as dense. **Field strength is line density**, so $E \propto 1/r^2$. The inverse-square law is just geometry: "something conserved spreading out in 3D."

This one picture also explains Gauss's law (Ch 6), why the field of a line falls as $1/r$ (lines spread over a *cylinder*, area $\propto r$), and why a plane's field doesn't fall at all (lines stay parallel and never spread).

### The field is the middleman
$\vec E = \vec F/q$ means "how hard would a $+1$ C charge get pushed here." It belongs to the *source* charges, not the test charge. If you double the test charge, the force doubles, but the field stays the same. Point a field arrow the way a **positive** charge would be pushed. A negative charge gets pushed the opposite way.

### Superposition: just add arrows
Fields from separate charges simply add as vectors. Everything in Ch 5 is this idea, applied to more and more charges. For a continuous object, chop it into tiny $dq$'s, write the arrow from each one, and add with an integral.

**Symmetry does half the work.** For a ring, a disk or a line segment, every $dq$ has a twin on the opposite side whose sideways component cancels its own. So only the component along the axis survives. That's why you integrate only $dE_z$.

### Sanity checks you can always do
- **Far away, everything looks like a point charge.** A ring or a disk with charge $Q$ must give $E \approx kQ/z^2$ when $z$ is huge. If your formula doesn't, it's wrong.
- **At the center of a ring, $E = 0$.** Every piece pulls equally in a different direction.
- **Near a big flat sheet, it looks like an infinite plane:** $E = \sigma/2\varepsilon_0$, the same at every distance.

```desmos-graph
left=0; right=4; bottom=0; top=1.2; height=260
---
y=x/(x^2+1)^{3/2}|x>0|#2a78d6|label:ring
y=1/x^2|x>0.4|dashed|#8a8985|label:point charge
```
Blue: field on the axis of a ring (radius 1, $kQ = 1$). Gray dashed: a point charge with the same $Q$. The ring's field is **zero at the center**, peaks near $z \approx 0.7R$, and then merges into the point-charge curve far away. Every ring, disk and line problem has this shape: an exact answer up close, and $kQ/r^2$ from far away.

### Why a plane's field doesn't weaken with distance
Step back from an infinite sheet. Each bit of charge is now farther away, so it pushes more weakly. But more of the sheet now pushes at you mostly straight on, instead of nearly sideways, which cancels. The two effects balance exactly. With field lines: the lines leave the sheet perpendicular and parallel to each other, they never spread out, so their density (the field) stays constant.

### Dipoles: why their field dies fast
A dipole has zero net charge. From far away, the $+$ and $-$ nearly sit on top of each other and nearly cancel. What's left is the small *difference* between two $1/r^2$ fields, and that difference falls off one power faster: $1/r^3$. That's the general rule: **the more completely charges cancel, the faster the field dies with distance.**

In a uniform field, a dipole feels no net force (equal and opposite pushes on its two ends), but it feels a **torque** that twists it to line up with the field, like a compass needle.

### Why a charged balloon sticks to a neutral wall
The balloon **polarizes** the wall. The wall's electrons shift slightly, so its surface near the balloon gets a tiny opposite charge. That opposite charge is *closer* than the like charge it left behind, and closer means stronger ($1/r^2$). The attraction wins, so a neutral object is always attracted to a charged one.

> [!question]- Predict: a point charge sits at the center of a square, with equal charges on all four corners. What's the net force on it? Now remove one corner charge.
> With all four corners, every push has an opposite push: **zero**. Remove one, and the net force is exactly the force the *missing* charge used to provide, but pointing the opposite way: **toward the empty corner** if the charges repel. (Superposition: the full square plus "minus one charge" gives the answer.)

> [!question]- Predict: two charges $+q$ and $+4q$ are on a line. Where can a third charge sit with no net force?
> **Between them, and closer to the smaller one.** Between them the pushes point opposite ways, and you need to be closer to the weaker charge to make its push as strong as the bigger one's. (Here it's at $1/3$ of the way from $+q$, because $1/x^2 = 4/(2x)^2$.)

---

## Ch 6: Gauss's law

### Flux means counting field lines
**Flux** is the number of field lines piercing a surface. A closed surface around a charge always has the same number of lines poking out, no matter how big or lumpy the surface is, because lines start and end only on charges. So:

> **Lines out of a closed surface = charge inside (÷ $\varepsilon_0$).** That's all Gauss's law says.

Charges outside the surface don't count. Their lines go in one side and come out the other, so they add zero to the total.

### Why Gauss's law only *calculates* fields with symmetry
Gauss's law is always true, but it only gives the *total* flux. To get $E$ out of the integral, you need a surface where $E$ has the same strength everywhere and is perpendicular to the surface. That only happens with perfect symmetry: spheres, infinite cylinders, infinite planes. With no symmetry, Gauss's law is true but useless for finding $E$, and you go back to integrating like in Ch 5.

### Why the field inside a charged shell is exactly zero
Stand anywhere inside a hollow shell of charge. Look one way: a small patch of shell is close to you. Look the other way: a farther patch. Draw a thin cone through you in both directions. The far patch cut by the cone is bigger (area $\propto r^2$), but it's farther (field $\propto 1/r^2$). These cancel **exactly**, for every cone and every point. That only works because the force is *exactly* inverse-square, which is why the empty shell is the classic test of Coulomb's law.

Gauss's version: a sphere drawn inside the shell encloses no charge, and by symmetry the field would have to be the same everywhere on it, so it must be zero.

### Inside a solid ball, the field grows as you go *out*
Inside a uniformly charged ball, only the charge *closer to the center than you* counts (the outer layers are shells, and shells push zero on the inside). That enclosed charge grows like $r^3$, while the distance factor shrinks like $1/r^2$. The net result: $E \propto r$. It starts at zero at the center, rises linearly to the surface, then falls as $1/r^2$ outside.

### Conductors: the charges keep moving until they can't
Here's the whole logic of conductors in equilibrium:
1. Charges in a conductor are free to move. If there were any field inside, they *would* move.
2. "Equilibrium" means nothing is moving. So **$E = 0$ inside**.
3. Gauss's surface just inside the metal encloses zero net charge. So **all excess charge sits on the surface**. (Like charges also push each other as far apart as they can get.)
4. A field component *along* the surface would slide charges sideways. So the field at the surface is **perpendicular**, with strength $\sigma/\varepsilon_0$.

A charge placed inside a cavity "pulls" an equal opposite charge onto the cavity wall, and that pushes the same amount of like charge to the outer surface. From outside, you can still "see" the hidden charge.

> [!question]- Predict: a point charge sits off-center inside a neutral spherical metal shell. Is the field outside the shell centered on the charge or on the shell?
> **On the shell.** The outer surface gets $+q$, and the charges on a conductor's outer surface don't know where the inner charge is (the metal shields that information). They spread out uniformly on the sphere, so outside it looks like a point charge at the shell's **center**.

> [!question]- Predict: does a Gaussian surface that encloses zero charge mean $E = 0$ everywhere on it?
> **No.** It means the *net flux* is zero: just as many lines go in as come out. A surface sitting in a uniform field has lines passing straight through, so $E \neq 0$ even though the total flux is zero.

---

## Ch 7: Electric potential

### Potential is altitude, field is slope
Picture a hilly landscape. **Potential $V$ is the height** at each point. **The field is the slope, pointing downhill**: $E_x = -dV/dx$. A positive charge is a ball rolling downhill (toward lower $V$). A negative charge is a helium balloon: it "rolls" uphill (toward higher $V$).

This picture answers most graph questions instantly:
- Steep $V$ graph → strong field. Flat $V$ → zero field.
- $V$ can't have a cliff (a jump), because that would be an infinite slope, an infinite field. So **$V$ is always continuous**.
- The slope *can* change suddenly at a crease. That happens at a sheet of surface charge, and it's where $E$ jumps.
- **Equipotentials are contour lines** on a topo map. The field always points straight downhill, perpendicular to the contours, and moving along a contour takes no work.

### Potential vs. potential energy
$V$ belongs to the place. $U = qV$ is what a particular charge has *at* that place. Like the gravity twin: height is a property of a ledge, and the energy depends on what mass you put there. A proton and an electron at the same point have the same $V$ but opposite $U$.

**Volts measure energy per charge.** An electron dropping through 1 V gains 1 eV. A 12 V battery gives every coulomb 12 J. Thinking "joules per coulomb" makes $P = IV$ obvious later: (C/s)(J/C) = J/s.

### Why potential is easier than field
The field is a vector: to add fields you split them into components and worry about cancellation. The potential is a plain number with a sign. To add potentials you add numbers: $V = \sum kq_i/r_i$, no angles at all. **When a problem asks for $V$ from point charges, never integrate the field.** Just add $kq/r$ for each charge (that's the Exam 1 lesson). Then, if you need[[]] $E$, take the slope of $V$.

### The disk, one more time
For a disk on its axis, every ring of the disk sits at the same distance $\sqrt{z^2+r^2}$ from the point, so each ring contributes $k\,dq/\sqrt{z^2+r^2}$ with no cancellation to worry about. Add the rings and you get $V$. Then $E = -dV/dz$ is just a derivative. The hard vector integral turns into an easy scalar integral plus one derivative.

### Conductors are flat plateaus
Since $E = 0$ inside a conductor, there's no slope inside, so the **whole conductor is one equipotential**: a flat plateau on the landscape. Two conductors connected by a wire become the same plateau.

**Charge piles up at sharp points.** Take a small sphere and a big sphere at the same potential: $kQ/R$ is the same for both, so $Q \propto R$. But the charge *density* is $Q/(4\pi R^2) \propto 1/R$. The smaller the radius of curvature, the higher the density and the stronger the field. That's why lightning rods are pointed and why sparks jump from corners.

```desmos-graph
left=0; right=5; bottom=-0.1; top=1.3; height=260
---
y=1|0<x<1|#30a46c|label:V
y=1/x|x>1|#30a46c
y=0|0<x<1|#2a78d6|label:E
y=1/x^2|x>1|#2a78d6
x=1|dashed|#8a8985
```
Green: $V(r)$, blue: $E(r)$ for a charged conducting sphere of radius 1. Inside, $V$ is a flat plateau and $E = 0$. At the surface $V$ stays continuous (just a crease), while $E$ jumps from 0 to its maximum, because that's where the surface charge is. Outside both look like a point charge. Check: the blue curve is minus the slope of the green one everywhere.

> [!question]- Predict: the potential at a point is zero. Must the field there be zero too?
> **No.** Zero height doesn't mean flat ground. Halfway between $+q$ and $-q$, $V = 0$ (the two $kq/r$ terms cancel), but the field is strong there, pointing from $+$ toward $-$. And the reverse: halfway between two $+q$ charges, $E = 0$ (the pushes cancel) but $V$ is not zero.

> [!question]- Predict: you release an electron from rest in a region where $V$ increases to the right. Which way does it go, and does its potential energy go up or down?
> It goes **right, toward higher $V$** (negative charges climb). Its potential energy $U = qV = -eV$ goes **down**, because $V$ is increasing while $q$ is negative. Released from rest, everything moves to lower **$U$**: that rule never changes sign.

---

## Ch 8: Capacitance

### A capacitor is a tank
Charge the plates, and you're storing separated charge, held apart by an electric field. **Capacitance $C = Q/V$ is how much charge you can store per volt of "pressure."** A big-$C$ capacitor is a wide, shallow tank: lots of charge for a small voltage.

$C$ depends only on the shape and the material between the plates, never on how much charge is on them. Double $Q$ and $V$ doubles too, so the ratio stays the same.

### Why $C = \varepsilon_0 A/d$ makes sense
- **Bigger plates:** the same charge spreads thinner (lower $\sigma$), so the field is weaker, so the voltage is lower. Same $Q$, lower $V$, so **more $C$**.
- **Closer plates:** the field is the same, but you cross less distance, so $V = Ed$ is smaller. **More $C$** again.

### Why there's a ½ in $U = \tfrac12 QV$
The first bit of charge you move across goes through almost zero voltage, since the capacitor is empty. The last bit goes through the full $V$. On average, charge moved through half the final voltage. On a graph of $V$ vs. $q$, the energy is the area of a triangle, not a rectangle. (Same reason a spring stores $\tfrac12 kx^2$.)

**The energy lives in the field.** $u = \tfrac12\varepsilon_0E^2$ per unit volume. You can think of a capacitor as a box of stored field. That idea becomes important in magnetism and light later.

### Series and parallel flip compared to resistors
- **Parallel capacitors** are like one capacitor with **more plate area**. More area means more $C$: they **add**.
- **Series capacitors** are like one capacitor with a **thicker gap**. More gap means less $C$: they add as **reciprocals**.
- Resistors are the opposite: series is a longer pipe (adds), parallel is more lanes (reciprocals).

In series, every capacitor gets the **same charge** (charge pushed onto one plate induces the same amount on the next). In parallel, every one gets the **same voltage**.

### Dielectrics: the material fights back
Put an insulator between the plates. Its molecules get polarized: each one lines up a little with the field, with $-$ toward the $+$ plate. Those lined-up charges make their own small field pointing *backwards*, which partly cancels the plates' field. Weaker field means lower voltage for the same charge, so **$C$ goes up by $\kappa$**.

What else happens depends on what's held fixed:
- **Disconnected** (charge can't change): $Q$ fixed, so $V$, $E$ and $U$ all drop by $\kappa$. The capacitor actually pulls the dielectric in, since that lowers its energy.
- **Battery connected** (voltage held): $V$ fixed, so the battery pushes in more charge. $Q$ and $U$ go up by $\kappa$.

> [!question]- Predict: you pull the plates of an isolated charged capacitor farther apart. What happens to $Q$, $E$, $V$ and $U$? Where does the extra energy come from?
> $Q$ can't change (it's isolated). $E = \sigma/\varepsilon_0$ depends only on $Q$ and the area, so **$E$ stays the same**. $V = Ed$ **goes up**, and $U = \tfrac12 QV$ **goes up**. The extra energy is **the work you did** pulling the plates apart against their attraction.

> [!question]- Predict: two capacitors in series across a battery, one large and one small. Which one gets more voltage?
> **The small one.** Both get the same $Q$, and $V = Q/C$, so the smaller $C$ needs more voltage to hold that same charge. (The opposite of resistors in series, where the bigger $R$ gets the bigger voltage.)

---

## Ch 9: Current and resistance

### Electrons crawl, but the signal flies
Inside a wire, electrons zoom around randomly at around $10^6$ m/s, bouncing off atoms like pinballs. A field adds a tiny average drift on top of that: **fractions of a millimeter per second.** You could outwalk an electron in a wire easily.

So why does the light turn on instantly? The wire is already full of electrons, like a hose already full of water. When you flip the switch, the *field* spreads down the wire at nearly the speed of light and starts every electron moving at the same moment, including the ones already in the bulb. The **signal** is fast. The **charges** are slow.

$I = nqAv_d$ is just counting: carriers per volume × charge each × the volume that passes per second. Copper has so many free electrons ($n \sim 10^{29}$ per m³) that a tiny drift is enough for a big current.

### Resistance: crowds in a hallway
Think of a crowd leaving a stadium through a hallway:
- A **longer** hallway means more bumping: $R \propto L$.
- A **wider** hallway means more people flow at once: $R \propto 1/A$.
- The material sets how much bumping there is per meter: $\rho$.
- **Heat** makes the atoms jiggle more, so there's more bumping: $R$ goes up with temperature in metals.

Microscopically, $\vec J = \sigma\vec E$: the field at a point sets how fast charge flows at that point. $V = IR$ is the same statement added up over a whole wire.

### For odd shapes, think "slices in series"
Cut the object into thin slices **perpendicular to the current**. Each slice is a short wire with its own area. The current goes through every slice one after another, so the slices are in series: **add their resistances**, $R = \int \rho\,d\ell/A$. The only real question is what area the current crosses at each step, like $2\pi rL$ for a coax, or $\pi r(x)^2$ for a cone.

### Power: energy per charge × charges per second
$P = IV$ is just units: $V$ is joules per coulomb, $I$ is coulombs per second, so their product is joules per second. Then:
- In **series**, the current is shared, so think $P = I^2R$: **more resistance means more power.** A 60 W bulb in series with a 100 W bulb glows *brighter*, because its resistance is higher.
- In **parallel**, the voltage is shared, so think $P = V^2/R$: **less resistance means more power.** Plugged into the wall side by side, the 100 W bulb wins.

### Why power lines use huge voltages
Wire losses depend on the **current**: $P_{loss} = I^2R$. To deliver the same power $P = IV$ with less current, raise the voltage. Ten times the voltage means a tenth of the current, and $\tfrac{1}{100}$ of the loss. It's like delivering water with a high-pressure trickle instead of a low-pressure flood through a leaky pipe.

> [!question]- Predict: you stretch a wire to twice its length (same volume). What happens to its resistance?
> The length doubles **and** the area halves (same volume), so $R = \rho L/A$ goes up by $2 \times 2 =$ **4 times**.

> [!question]- Predict: a light bulb's resistance is much lower when it's cold. When is it most likely to burn out?
> **Right when you switch it on.** The cold filament has low $R$, so a big surge of current flows ($P = V^2/R$ is huge) until it heats up and its resistance rises.

---

## Ch 10: DC circuits

### The circuit as a ski area
- The **battery is a ski lift.** It lifts every charge up by $\varepsilon$ volts of "height."
- **Resistors are the ski runs** down. Charges lose height going through them.
- **Wires are flat** (almost no height lost).
- **KVL:** go around any closed loop and you end up at the same altitude you started at. Every bit of height the lift gave you, the runs took away: $\sum \Delta V = 0$.
- **KCL:** skiers don't vanish or appear. Whatever flows into a junction flows out: $\sum I_{in} = \sum I_{out}$.

KVL is conservation of energy and KCL is conservation of charge. Every circuit problem is those two laws, organized.

### Real batteries have a narrow pipe inside
Internal resistance $r$ is a narrow section of pipe *inside* the pump. Draw more current, and more of the pump's push is used up just getting through its own insides, so less voltage is left at the terminals: $V = \varepsilon - Ir$. A **dead** battery often still has its emf. What changed is that $r$ got huge, so it collapses under load. That's why a weak battery can read nearly normal on a voltmeter (no current) but can't run anything.

**Max power to the load** happens when the load matches the battery ($R = r$). Too small a load: lots of current, but most of the power burns inside the battery. Too big a load: barely any current at all.

### Series and parallel without memorizing
- **Series = one lane.** Everything carries the same current. Adding a resistor makes the path longer, so the total resistance goes up and the current goes down for everyone.
- **Parallel = more checkout lanes.** Every lane sees the same voltage. Opening another lane *lowers* the total resistance and *raises* the total current, even if the new lane is slow. That's why the parallel total is always less than the smallest branch.
- **Dividers:** in series, the voltage splits in proportion to resistance (the big resistor takes the big share). In parallel, the current splits the other way (the easy path takes the big share).

### Meters must be invisible
A meter is a spy: it must not change what it measures.
- An **ammeter** sits *in* the path (series), so it must add almost **no resistance**, or it would slow the current down.
- A **voltmeter** sits *alongside* (parallel), so it must draw almost **no current**, which means a **huge resistance**, or it would act like an extra lane.
Get it backwards and the meter wrecks the circuit: an ammeter in parallel is a short circuit.

### RC circuits: filling a tank through a narrow pipe
A capacitor charging through a resistor is a tank filling through a narrow pipe from a pump.
- **At first** the tank is empty and pushes back with no pressure. Water rushes in at full speed: the capacitor acts like a **wire**, and $I = \varepsilon/R$.
- **As it fills,** back-pressure ($q/C$) builds, so less push is left for the pipe, and the flow slows.
- **When full,** the back-pressure equals the pump. Nothing flows: the capacitor acts like a **break**.

**Why exponential?** The filling rate is proportional to *how far you still are from full*. Any quantity whose rate of change is proportional to its distance from a target approaches that target exponentially, like a hot drink cooling to room temperature.

**What $\tau = RC$ means:** it's the circuit's built-in time scale. Bigger $R$ is a narrower pipe, and bigger $C$ is a bigger tank, so both make it slower. Here's the cleanest way to picture it:

```desmos-graph
left=0; right=5; bottom=0; top=1.2; height=260
---
y=1-e^{-x}|#30a46c|label:charge
y=x|0<x<1|dashed|#2a78d6
y=1|dashed|#8a8985
x=1|dashed|#8a8985
```
Green: charge vs. time in units of $\tau$. Blue dashed: the starting slope. **If the capacitor kept charging at its starting rate, it would be completely full after exactly one $\tau$.** It slows down, so it's only 63% full then. After about $5\tau$ it's essentially done.

When several resistors surround the capacitor, ask: "if the battery were a wire, what resistance would the capacitor see?" That $R_{eq}$ sets $\tau$, because it's the pipe the tank actually drains or fills through.

### Household wiring: everything in parallel
Each outlet is a separate lane straight across the 120 V supply, so each device gets the full voltage and runs independently. **Fuses** sit in series on the hot wire: if too much current flows, they open the single lane everything shares. **Ground** gives stray current an easy path that isn't you. A **GFCI** watches for any current that leaves on the hot wire but doesn't come back on the neutral wire, since that current must be going somewhere it shouldn't.

> [!question]- Predict: three identical bulbs are in series with a battery. You short out one bulb with a wire. Do the other two get brighter or dimmer?
> **Brighter.** The total resistance drops from $3R$ to $2R$, so the current goes up by 1.5×, and each remaining bulb's power ($I^2R$) goes up by 2.25×. The shorted bulb goes dark.

> [!question]- Predict: a bulb is connected to a battery. You add a second identical bulb in parallel. What happens to the first bulb's brightness, with an ideal battery? With a real battery?
> **Ideal battery:** no change. The first bulb still has the full $\varepsilon$ across it. The battery just supplies twice the current. **Real battery:** slightly **dimmer**. More total current means more $Ir$ lost inside the battery, so the terminal voltage drops a little for both bulbs.

> [!question]- Predict: in an RC charging circuit, you double $R$. What happens to the final charge and to the time it takes?
> The **final charge doesn't change** ($Q = C\varepsilon$; at the end no current flows, so $R$ doesn't matter). It takes **twice as long**, because $\tau = RC$ doubles. A narrower pipe fills the same tank, just more slowly.

---

## How it all connects

> [!summary] One story
> **Charges** (Ch 5) set up **fields**, and the fields' lines follow a counting rule, **Gauss's law** (Ch 6). The field is the slope of an energy landscape, the **potential** (Ch 7). Separate charges against that landscape and you've stored energy in a **capacitor** (Ch 8). Give charges a path down the landscape through a material and you get a **current**, fought by **resistance** and burning **power** (Ch 9). Add a pump (a **battery**) that keeps lifting them back up, and you have a **circuit**, solved by conservation of charge and energy, with capacitors adding a **time scale** (Ch 10).

When you're stuck on a problem, ask these in order:
1. **What are the charges doing,** and what symmetry do they have?
2. **Field or potential?** If you can add scalars ($V$) instead of vectors ($\vec E$), do that.
3. **What's conserved?** Charge at junctions, energy around loops, total charge on an isolated conductor.
4. **What happens in the limits?** Very far away, very close, $t = 0$, $t \to \infty$, $R \to 0$, $R \to \infty$. If your answer behaves badly in a limit, it's wrong.
5. **Do the units work?** Every boxed answer.
