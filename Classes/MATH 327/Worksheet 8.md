---
class: "[[MATH 327]]"
tags: [math327, worksheet]
due: 2026-10-27
---
Class: [[MATH 327]]

# Worksheet #8

Math 327 Differential Equations
Due: October 27

You are welcome to work together on this, but every person needs to upload their own files into Canvas (even if it is a copy of your partner's files). You should upload, with sensible file names:

- Your solutions to the questions below, including all steps in your calculations.
- Screenshots of your Insight Maker simulation results.

## Set-up: Harmonic Oscillator and Spring-Mass Systems

- Hooke's Law: $F_{spring} = -kx(t)$, where the spring constant $k$ depends on the stiffness of the spring.
- Damping force depends on current velocity: $F_{damping} = -bx'(t)$.
- $F = ma$ where $a$ is acceleration.

### Questions

1. Put the information above together to write a second order differential equation for the displacement of the spring $x$. Your equation will involve $x''$, $x'$ and $x$.
2. Turn your equation into a system of two equations, and write your system in matrix form.
3. Write down the characteristic equation for this system.

## Scenario 1: Overdamped

Mass $= 2$ kg, spring constant $= 18$ N/m, damping coefficient $b = 20$ N/(m/s).

1. Write the second order differential equation that models this.
2. Find the eigenvalues from the characteristic equation and write down the general solution.
3. Using initial value $x(0) = 5$ and $x'(0) = 0$, find the solution.
4. Make an Insight Maker file that models this scenario, and use it to graph the result. Use your graph to estimate the time it takes until the spring is staying within $0.1$ m of its resting position. Include a screenshot.

## Scenario 2: Underdamped

Same mass and spring constant as Scenario 1, with $b = 2$ N/(m/s).

1. Write the second order differential equation that models this.
2. Find the eigenvalues from the characteristic equation and write down the general solution.
3. Using initial value $x(0) = 5$ and $x'(0) = 0$, find the solution.
4. Make an Insight Maker file that models this scenario, and use it to graph the result. Use your graph to estimate the time it takes until the spring is staying within $0.1$ m of its resting position. Include a screenshot.

## Scenario 3: Critically Damped

When we have real eigenvalues the system is overdamped, and when we have complex eigenvalues the system is underdamped. The dividing line is when the system is critically damped and we have one repeated eigenvalue. We assume that the mass is 2 kg and the spring constant is 18 N/m.

1. Calculate the value for the damping coefficient $b$ that makes the system critically damped.
2. Using this value, find the eigenvalues from the characteristic equation and write down the general solution.
3. Using initial value $x(0) = 5$ and $x'(0) = 0$, find the solution.
4. Make an Insight Maker file that models this scenario, and use it to graph the result. Use your graph to estimate the time it takes until the spring is staying within $0.1$ m of its resting position. Include a screenshot.

## Wrap-Up

1. Compare the three scenarios. Which one of them results in the fastest damping? Why do you think this is?
