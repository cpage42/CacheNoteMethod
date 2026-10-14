---
class: "[[PHYS 218]]"
tags: [phys218, lecture, transcript, magnetism, ch11]
source: Downloads/lecmtorque.mp3 (54 min)
---
# Lecture: Magnetic Bottles, Cyclotrons, Force on Currents, Torque
Class: [[PHYS 218]] · Machine-transcribed from `lecmtorque.mp3` and cleaned up. Timestamps are [mm:ss] into the recording. The audio cuts out in places, so those spots are marked *[audio cut]* or *[unclear]*. Physics terms the transcriber garbled have been fixed (it heard "v cross B" as "B cross B," for example).

## Key equations from this lecture
| Topic | Equation | Notes |
|---|---|---|
| Magnetic force on a charge | $\vec F = q\vec v\times\vec B$, $F = qvB\sin\phi$ | $\phi$ = angle between $\vec v$ and $\vec B$ |
| Circular motion in B | $\dfrac{mv^2}{r} = qvB \Rightarrow r = \dfrac{mv}{qB}$ | |
| Period | $T = \dfrac{2\pi r}{v} = \dfrac{2\pi m}{qB}$ | Independent of speed |
| Cyclotron frequency | $f = \dfrac{qB}{2\pi m}$ | Non-relativistic only |
| Max cyclotron KE | $K = \dfrac{q^2B^2R^2}{2m}$ | $R$ = exit radius |
| Lorentz force | $\vec F = q\vec E + q\vec v\times\vec B$ | Technically the *sum* of both terms |
| Velocity filter | $qE = qvB \Rightarrow v = E/B$ | Independent of mass |
| Mass spectrometer | $m = \dfrac{qB^2r^2}{2V} = \dfrac{qB^2x^2}{8V}$ | $x = 2r$ (entry to detector); accelerated from rest through $V$ |
| Current from drift | $I = nqv_dA$ | Units check: $(1/\text{m})(\text{C})(\text{m/s}) = \text{C/s}$ |
| Force on a straight wire | $\vec F = I\vec L\times\vec B$, $F = ILB\sin\theta$ | $\vec L$ points along conventional current |
| Force on any wire shape | $d\vec F = I\,d\vec l\times\vec B$ | Integrate along the wire |
| Torque | $\vec\tau = \dfrac{d\vec L}{dt}$, $\vec L = \vec r\times\vec p$ → $\vec\tau = \vec r\times\vec F$ | "One you should remember." Holds in general, not just at constant radius |
| Current loop in B | $\vec F_{net} = 0$; $\lvert\tau\rvert = IAB\sin\theta$ | Lecture ended here (sign comes out negative in his setup) |

**Right-hand rules used:**

- $\vec v\times\vec B$: index finger along $\vec v$ (or $I$), middle finger along $\vec B$, and your thumb gives $\vec F$ (for $+q$).
- Field around a wire: thumb along the current, and your fingers curl in the direction of $\vec B$.
- Angular momentum: fingers curl along the motion, and your thumb gives $\vec L$.

---

## Transcript

### Review: magnetic force and the cross product [00:00–01:50]
*[First ~minute is mostly inaudible. He's going over the cross product.]*

**[01:00]** We evaluate the magnitude of the result of the cross product. It has to do with the sine of the angle φ, which is the angle between the velocity vector and the magnetic field direction.

**[01:25]** This is from last week's lecture, and you saw a couple of examples on the homework where you were asked to find, for example, the radius of circular or helical motion. Some of these we didn't get to last Wednesday, but we did cover through this slide, which was what the homework needed.

### Magnetic bottles and the Van Allen belts [02:03–06:56]
**[02:07]** I think this is pretty interesting. I don't think it goes on the homework, but it's an interesting phenomenon. You have a charged particle undergoing helical motion: into the board at the top, out of the board at the bottom. It has some velocity to the right, and there are magnetic field lines (the green lines here).

**[03:05]** *[Student question about fusion.]* When I looked this up, this device, called a **magnetic bottle**, was mentioned in connection with early fusion efforts. It's a similar problem of confining charged particles. Not this exact geometry, but similar themes.

**[03:49]** So you have this particle doing circular or helical motion. The field lines start out parallel, bulge outward, then go back to parallel. Let's do a little $\vec F = q\vec v\times\vec B$ at two locations.

**[04:28]** At the top of the trajectory, where the field line starts bending upward, you get a component of force that's a little toward the right. On the other side, the field is bent slightly the other way. The force is still *mostly* down, which is the centripetal force that keeps it in helical motion. But on each side there's a small **component pointing toward the middle**.

**[05:28]** So there's a restoring force, kind of like a spring force from Physics 1, that keeps the particle localized between the two ends. In the extreme case, where the field lines diverge and reconverge at pinch points, particles bounce back and forth between the two ends.

**[05:54]** This is happening in the **Van Allen radiation belts** around the Earth. Tie either end of that shape to Earth's magnetic poles: the field lines diverge and converge, and charged particles get trapped, bouncing back and forth between the poles.

**[06:37]** Sometimes those charged particles get enough energy, or there are enough of them, that they get into the upper atmosphere, collide with the air, and give off colors. That's one of the phenomena behind the northern lights.

### Cyclotrons [07:02–14:50]
**[07:02]** Cyclotrons and synchrotrons are one application of accelerating charged particles in magnetic fields. For a charge circulating in a uniform magnetic field, the acceleration is centripetal and keeps it on a circular path. The period and frequency of the circular orbit are given by this.

**[07:42]** Where does that come from? We've got $mv^2/r$, the centripetal force, and we set it equal to $qvB$, the magnetic force. $T$ is what we use for the period of oscillatory or periodic motion. $2\pi r$ is the circumference, and dividing by the speed $v$ gives the period. Maybe it's easier the other way: $v = 2\pi r/T$, distance over time, where $T$ is the time to go one circumference.

**[08:57]** Plug in the tangential speed for $v$ and you get the period in terms of the charge, the mass and the magnetic field. **[09:14]** The frequency is one over the period, so we just invert the equation. That's how many complete circles the particle makes per second. This is called the **cyclotron frequency**.

**[09:49]** The cyclotron was invented by Ernest Lawrence around 1930. It's an early particle accelerator. Charged particles are accelerated by an AC voltage when they're between the **"dees,"** the D-shaped halves of the device (shown in blue here).

**[10:26]** This only works for **non-relativistic** particles. We're not really talking about relativity here, but the formula is only true in that limit.

**[10:40]** The frequency of the AC voltage you need to accelerate the particles is the cyclotron frequency. **[11:14]** Every time the particle goes through the gap, the AC voltage gives it a little kick, a boost of energy, so its speed increases a bit each time.

**[11:35]** Notice the frequency is **independent of the velocity**. It only depends on the charge, the magnetic field and the mass. That's why you can keep the magnetic field constant: every time the particle crosses the gap you kick it, and it goes faster and faster.

**[12:06]** This is from Lawrence's paper. You can see he's drawn the electric lines of force in the gap. *[Partly unclear.]* You start the particle near the middle, it spirals faster and faster, and then it launches out.

> **Example [13:01]:** A small cyclotron with maximum radius $R = 0.25$ m accelerates protons in a $1.7$ T field.
> (a) Find the frequency needed for the applied alternating voltage.
> (b) Find the kinetic energy of the protons when they leave.
>
> **(a)** Just the cyclotron frequency. The field in the gap has to switch direction in sync with it. Plugging in the proton's charge and mass and $B = 1.7$ T gives $f = qB/2\pi m \approx$ **26 MHz** (radio frequency).
>
> **(b)** Maximum KE is at the maximum radius, when the particle exits. From $r = mv/qB$, square both sides: $r^2q^2B^2 = m^2v^2 = 2mK$, so $K = q^2B^2R^2/2m \approx$ **8.65 MeV**.

### Synchrotrons [14:50–15:40]
**[14:50]** Larger accelerators are **synchrotrons**. In a cyclotron the magnetic field is constant. A synchrotron is much bigger, and having a uniform field over the whole region, starting the particle in the middle and spiraling outward, would be a lot to build. Instead, the particle travels at a fixed radius and you **increase the magnetic field** as it speeds up. The particles move in a narrow circular tunnel lined with a ring of magnets, so you only need field around that circumference.

### Lorentz force and the velocity filter [15:41–19:44]
**[15:41]** We had $\vec F = q\vec v\times\vec B$, and from electrostatics, the force on a charge in an electric field is $q\vec E$. The total force on a charged particle is the sum: the **Lorentz force law**. Sometimes physicists call just the $q\vec v\times\vec B$ part "the Lorentz force," but technically it's the sum of the two.

**[16:45]** One application is the **velocity filter**, which uses crossed electric and magnetic fields.

**[16:58]** X's mean the field points **into** the board. A positively charged particle goes in moving to the right, between two charged plates: positive on top, negative on the bottom. So $\vec E$ points down, and the electric force $q\vec E$ is down.

**[18:04]** Magnetic force: $\vec v$ to the right, $\vec B$ into the board. Index is $v$, middle is $B$, thumb is force, which points up. The magnetic force is proportional to $v$:

- If $v$ is **too slow**, the magnetic force is small, so the particle accelerates toward the negative plate.
- If $v$ is **too fast**, the magnetic force dominates, so it deflects toward the positive plate.
- If it's **just right**, the forces cancel and it goes straight through at constant velocity.

**[19:20]** One application: if you want all your particles to enter a mass spectrometer at exactly the same velocity, you tune $E$ and $B$ to select that velocity. This is independent of mass.

### Mass spectrometer [19:49–24:43]
**[19:49]** You had a homework problem on this. It uses the radius relation again. An oven heats and ionizes the sample, and the ions leave with all different velocities. *[Partly unclear.]* They travel a circular arc and hit a detector. Solving for mass, $m = qB^2r^2/2V$, where $V$ is the accelerating potential and $r$ comes from where it lands on the detector.

**[20:45]** By looking at where charge builds up on the detector, you get the mass-to-charge ratios of the ions in the sample.

**[21:26]** A quick check. A charged particle is accelerated through $V$ volts and enters a region with a uniform field perpendicular to its velocity. Dots mean the field points **out of** the page, and the velocity is upward as it enters. Accelerating through a potential $V$ means its kinetic energy is $K = qV$: the potential energy becomes kinetic energy. Then solve for the radius. The detected position $x$ is **twice the radius**, because $x$ is the distance between where it enters and where it lands.

> **Example [22:55]:** Two chlorine isotopes, 35 u and 37 u, are singly ionized (one elementary charge each). They're accelerated from rest through $7.3$ kV and sent into a field *[value garbled in the recording; $B = 0.50$ T reproduces the answer]*. What is the separation $\Delta x$ between them on the detector?
>
> Plug and chug with the last slide's equation, $m = qB^2x^2/8V$. Instead of computing $x_1$ and $x_2$ separately, take the derivative: $dm/dx = qB^2(2x)/8V$, then treat it as a discrete derivative, $\Delta m = \dfrac{qB^2\,2x}{8V}\Delta x$. Solving for $\Delta x$ and plugging in gives **8.2 mm**.

### Magnetic fields due to currents [24:43–31:50]
**[25:03]** Hans Christian Ørsted (the oersted is also a field unit you sometimes see, in CGS along with the gauss) discovered in 1820 that a **current-carrying wire produces a magnetic field** that deflects a compass needle. André-Marie Ampère built on that work and proposed what's now **Ampère's law**.

**[25:48]** It's hard to see on the screen, but the blue end of each compass needle is its north end, which points along the field. The meter stick is the wire, with current going up, and the compasses sit in a plane perpendicular to it. The field goes **in a circle around the wire**, and you can trace it with the needles.

**[27:11]** Another right-hand rule: **point your thumb along the current and your fingers curl in the direction of the field.** With current going up, the field circulates counterclockwise seen from above.

**[28:03]** Now a **loop** of current. Current comes out of the board at the top and goes in at the bottom. Put your thumb along the current at each point and your fingers curl the way the field circulates. **[29:42]** Everywhere around the loop, the field goes through the **center of the loop in one direction** (to the right here) and comes back around the outside the other way.

**[30:34]** *[Demo with the sink faucet:]* If charge flows the way the water flows, along a curved path with my thumb pointing along the flow, my fingers point toward you in the center of the loop and away from you on the outside. Practice this yourself. Next time we'll formalize it into a mathematical law.

### Force on a current-carrying wire [32:01–41:01]
**[32:01]** From the force on a single charge, $q\vec v\times\vec B$: a current in a wire is a lot of charges, so the force on the wire is the sum of the forces on all of them.

**[32:46]** Going from a single charge to a continuum, the first step is usually the **number density** $n$ (charges per m³). A wire segment of length $L$ with cross-sectional area $A$ has volume $AL$, so it contains $nAL$ charges.

**[34:23]** Total force: $\vec F = (nAL)\,q\,\vec v_d\times\vec B$, where $v_d$ is the **drift velocity** from when we covered resistance: charges bouncing around randomly, with a slight net drift when an electric field is applied.

**[35:00]** *Concept question recap:* drift velocities are really slow, but the lights turn on immediately because the signal propagates through the wire quickly.

**[35:23]** Relate this to current: $I = nAqv_d$. Check the units: $nA$ is 1/m, times C, times m/s, gives C/s, which is current. "Doing that sort of unit analysis is oftentimes a really useful way to check that you have the right product."

**[36:14]** Substituting gives $\vec F = I\vec L\times\vec B$. $L$ is now a **vector**: its magnitude is the segment's length, and its direction is the direction of conventional current (positive-charge flow, opposite to electron flow). We took the vector off the drift velocity and put it on $L$.

**[37:41]** That's great for a straight segment. For a wire of arbitrary shape, the calculus move is to apply it to an infinitesimal segment: $d\vec F = I\,d\vec l\times\vec B$. Then you can integrate over any wire shape. *[Different slides use $dl$ vs. $dL$; it's the same thing.]*

**[39:38]** This gives another operational definition of the magnetic field. Wires are a lot easier to work with experimentally than individual charges flying through space.

**[40:07]** $F = ILB\sin\theta$ comes straight from evaluating the cross product. $\theta$ is the angle between the wire and the field, and the force is perpendicular to both the current and the field.

### Examples: which way does the wire bend? [41:01–43:40]
**[41:25]** (a) Current is zero, so no force and the wire stays straight. (b) Current goes up the page with $B$ out of the page (dots). With $I$ in place of $q\vec v$, the right-hand rule gives a **force to the right**, so the wire bows right. (c) Flip the current and the force is to the left.

**[42:04]** Tip: when you do these, notice what stays constant and what changes. Here $B$ is fixed, so pivot your hand around that and flip the current.

**[42:54]** *Lab setup:* the wire is connected to a battery, between magnet poles. With current into the page and $B$ pointing north to south (to the right), the force is **down**. Reverse the current and the force is **up**.

### Concept question: two parallel wires [43:42–46:43]
**[43:42]** Two wires, both with current **going up**. What's the direction of the force on wire 2 (right) from wire 1's field?

**[44:35]**

- First find the field at wire 2 from $I_1$: thumb up along $I_1$, so on the right side of wire 1 the field points **into** the board.
- Then $I_2\times B_1$, with $I_2$ up and $B_1$ in, gives a force to the **left**. Wire 2 is attracted to wire 1.
- By symmetry, wire 2's field at wire 1 is out of the board, so the force on wire 1 is to the right.

**Parallel currents attract.**

**[46:16]** Flip one current and the forces flip: **antiparallel currents repel.**

### Torque: refresher [46:43–49:24]
**[46:51]** From mechanics, torque is the **rate of change of angular momentum**: $\vec\tau = d\vec L/dt$.

**[47:01]** For a mass in circular motion (it doesn't have to be circular, that's just convenient), curl your fingers along the motion and your thumb points along $\vec L$. *Not to be confused with the length vector $\vec L$ from before. "Physics quickly runs out of symbols, so we have to recycle some."*

**[47:51]** $\vec L = \vec r\times\vec p$, where $\vec r$ is the position vector from the origin to the particle and $\vec p = m\vec v$ is the linear momentum (tangential here).

**[48:31]** For **constant radius**, the time derivative only hits the momentum, and $d\vec p/dt$ is force. So **$\vec\tau = \vec r\times\vec F$**. *[Editor's note: this holds even when $r$ changes, because the extra term $\dot{\vec r}\times\vec p = \vec v\times m\vec v = 0$.]* "That's one that you should remember, so write it down." It's also one of those physical quantities that comes up in daily life.

### Torque on a current loop [49:26–54:06]
**[49:26]** A **square current loop** in a magnetic field, drawn in perspective in the first octant of xyz space, with a side view as well. Current comes out of the page on one side and goes in on the other.

**[50:04]** **Net force:** a sum of $I\vec L\times\vec B$ terms, one per side. $F_1$ and $F_3$ (out of and into the page) are equal and opposite, and so are $F_2$ and $F_4$. **The net force on a closed current loop is zero.** That's consistent with last week: magnetic forces do no work. *[Editor's note: the zero net force really comes from the loop being closed in a uniform field. The no-work property is related but isn't the reason.]*

**[51:06]** **Torque** with $\vec\tau = \vec r\times\vec F$:

- For $F_1$ and $F_3$, $\vec r$ and $\vec F$ are parallel (both out of the page), so the angle is 0, $\sin 0 = 0$, and those torques vanish.
- **[52:11]** For the other sides, $\vec r$ and $\vec F$ aren't parallel, which gives a torque pointing into the page *[along $\hat\imath$ in his coordinates]*.

**[52:32]** *[Rushed, audio cutting out. Out of time.]* Each term comes from $rF\sin\theta$, where $x$ is the distance from the pivot to a segment and $(a - x)$ is the displacement component for the other segment. With side length $b$, the $b(a-x)$ and $bx$ terms combine into the **area of the loop**, giving

$$\tau = -IAB\sin\theta$$

*[the angle is defined on the slide; the end of the sentence is lost]*.

**[54:06]** "All right, that's time."
