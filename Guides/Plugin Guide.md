# Plugin Guide
Back to [[Home]]

Each section below has a live example. If it renders as a picture or graph, the plugin is working.

---

## 1. Desmos: graphs right in your notes
Great for: DE solutions, phase portraits, RC curves, anything you'd sketch.
Write a code block named `desmos-graph`. Settings go above the `---`, and equations go one per line below it.

```desmos-graph
left=0; right=5; bottom=0; top=1.1
---
y=1-e^{-x}
y=e^{-x}
```
---

## 2. TikZJax: real circuit diagrams (CircuiTikZ)
Great for: PHYS 218 circuits, drawn exactly like the textbook. It also does `chemfig` (chemical structures) and `pgfplots`.
Write a code block named `tikz`:

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,0) to[battery1, l=$\mathcal{E}$] (0,3)
      to[R, l=$R$] (3,3)
      to[C, l=$C$] (3,0) -- (0,0);
\end{circuitikz}
\end{document}
```

Cheat sheet: `to[R]` resistor · `to[C]` capacitor · `to[L]` inductor · `to[battery1]` battery · `to[switch]` switch · `to[short]` wire · `l=$...$` label.

---

## 3. Draw.io: neat diagrams
Great for: box-and-line diagrams and clean circuit sketches.
- **Ctrl+P** → type `Diagram` → create a new diagram → draw → close. It's saved as an `.svg` you can embed with `![[name.svg]]`.

---

## 4. Spaced Repetition: flashcards from your notes
Great for: formulas, definitions, units, chem reactions.
- Any note tagged `#flashcards` becomes a deck. Write cards as `Question::Answer`.
- Click the **flashcard icon** in the left sidebar (or Ctrl+P → `Review flashcards`) to study.
- It schedules each card based on how well you knew it.
- Decks: [[Flashcards - PHYS 218 Electrostatics (Ch 5-8)]] (`#flashcards/physics/electrostatics`), [[Flashcards - PHYS 218 Circuits (Ch 9-10)]] (`#flashcards/physics/circuits`), [[Flashcards - PHYS 218 Magnetism (Ch 11-16)]] (`#flashcards/physics/magnetism`), [[Flashcards - MATH 327]] (`#flashcards/math`) and [[Flashcards - CHEM 151]] (`#flashcards/chem`). Tags like `#flashcards/<name>` make subdecks, so you can practice one class at a time.

---

## 5. Dataview: auto-updating lists
Great for: class hub pages that list their own notes.
Each class hub (e.g. [[PHYS 218]]) uses this, so any note that links to the class shows up automatically:

```dataview
LIST FROM [[PHYS 218]]
```

---

## 6. Templates (built in): new class note in one click
- Make a new note → **Ctrl+P** → `Templates: Insert template` → **Class Note**.
- Then link your class hub on the `Class:` line, e.g. `[[MATH 327]]`, so the note shows up on that class's hub page.
- The template lives in the `Templates` folder, and you can edit it however you want.
