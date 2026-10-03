# CacheNoteMethod

My Obsidian vault for class notes at Fort Lewis College (physics, math, chemistry), with a few homemade tools for differential equations. Clone it, open it in Obsidian, and everything works the same way it does for me, plugins and all.

## What's in here

- **Classes/**: one folder per class, with lectures, flashcards and homework notes.
- **Classes/MATH 327/Tools/**: the math tools.
  - `eigen.jl`: eigenvalues and eigenvectors of a 2×2 matrix, exact (fractions and square roots) when the entries are rational.
  - `dech.jl`: checks whether a proposed solution solves a differential equation. You type both the equation and the solution in as LaTeX.
  - `Eigen Calculator & DEch.md`: the note that runs both tools with Run buttons.
- **`eigen()` shortcut**: type `eigen(1,2,3,4)=` in any note (matrix entries row by row). As soon as you type the equals sign, it's replaced with the eigenvalues and eigenvectors as a LaTeX block. This is the small `eigen-inline` plugin in `.obsidian/plugins/eigen-inline`.
- **Guides/**: how the vault is set up, the plugins, and keyboard shortcuts. Start with `START HERE - Shortcuts`.
- **Templates/**: the class note template.
- **Archive/**: old versions, including the original Python tool (`de_tools.py`), which the Julia scripts replaced.

## Setup

1. **Install [Obsidian](https://obsidian.md)** and **[Julia](https://julialang.org/downloads/)** (1.9 or newer). During the Julia install, make sure Julia is added to your PATH. Check it by running `julia --version` in a terminal.
2. **Clone the repo:**
   ```
   git clone https://github.com/cpage42/CacheNoteMethod.git
   ```
3. **Open it in Obsidian:** Open folder as vault, pick the cloned folder, then click **Trust author and enable plugins**. All plugins and their settings come with the repo, so nothing else needs installing.
4. **Restart Obsidian** if you installed Julia while it was open, so it picks up the new PATH.
5. **Test it:** open `Classes/MATH 327/Tools/Eigen Calculator & DEch.md`, or type `eigen(0,1,-2,-3)=` in any note.

The Julia scripts use only Julia's standard library, so there's nothing to `Pkg.add`.

### Mac / Linux

The Run buttons in the tools note use PowerShell code blocks, which come with Windows. On Mac or Linux, install [PowerShell 7](https://learn.microsoft.com/powershell/scripting/install/installing-powershell). Then go to Settings → Execute Code → PowerShell and change the path from `powershell` to `pwsh`. The `eigen()` shortcut works everywhere without this.

If Obsidian can't find Julia (common on Mac, where apps don't see your shell's PATH), paste the full path to the `julia` program into **Settings → Eigen Inline → Julia path**.

## Command line

The scripts also work outside Obsidian:

```
julia "Classes/MATH 327/Tools/eigen.jl" 1 2 3 4
julia "Classes/MATH 327/Tools/eigen.jl" "sqrt(2)" 1 0 1/2
```
