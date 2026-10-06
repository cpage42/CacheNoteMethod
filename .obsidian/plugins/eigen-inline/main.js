// Eigen Inline -- type  eigen(a,b,c,d)=  in any note and it is replaced with the
// eigenvalues and eigenvectors of [a b; c d], computed by eigen.jl.
// Command palette: "Eigen: evaluate eigen(...) on this line" does the same without the "=".
"use strict";

const obsidian = require("obsidian");
const { execFile } = require("child_process");
const fs = require("fs");
const path = require("path");

const DEFAULT_SETTINGS = {
  juliaPath: "",                                   // blank = find it automatically
  scriptPath: "Classes/MATH 327/Tools/eigen.jl",  // relative to the vault
  showDecimals: true,
  phasePlane: true,                                // draw a phase portrait under each result
};

// eigen( a , b , c , d ) with one level of nested parens allowed, e.g. sqrt(2)
const CALL = String.raw`eigen\(((?:[^()]|\([^()]*\))*)\)(?:\s*\[([^\]]*)\])?`;
const TRIGGER_RE = new RegExp(CALL + String.raw`\s*=$`);   // typed "=" right after it
const LINE_RE = new RegExp(CALL, "g");

function splitArgs(s) {
  const out = [];
  let depth = 0, cur = "";
  for (const ch of s) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if ((ch === "," || ch === ";") && depth === 0) { out.push(cur); cur = ""; }
    else cur += ch;
  }
  out.push(cur);
  let args = out.map(a => a.replace(/\s+/g, "")).filter(a => a.length);
  if (args.length === 1) args = s.trim().split(/\s+/);   // eigen(1 2 3 4) also works
  return args;
}

// ---------- turning eigen.jl's plain text into LaTeX ----------

function texNum(s) {
  s = s.trim().replace(/(\d)\.0(?!\d)/g, "$1");                  // 1.0 -> 1
  s = s.replace(/\((-?\d+)\/(\d+)\)/g, "\\frac{$1}{$2}");       // (1/2)
  s = s.replace(/sqrt\((\d+)\)/g, "\\sqrt{$1}");
  s = s.replace(/(^|[\s(\-+])(\d+)\/(\d+)/g, "$1\\frac{$2}{$3}"); // 5/2
  s = s.replace(/\*i\b/g, "\\,i");
  s = s.replace(/\*/g, "");
  return s;
}

function texVec(s) {
  const m = s.match(/^\[(.*),(.*)\]$/);
  if (!m) return texNum(s);
  return `\\begin{bmatrix}${texNum(m[1])}\\\\${texNum(m[2])}\\end{bmatrix}`;
}

function texValue(s, showDec) {
  const parts = s.split(/\s+~\s+/);
  let t = parts[0].trim().startsWith("[") ? texVec(parts[0].trim()) : texNum(parts[0]);
  if (showDec && parts[1]) {
    const d = parts[1].trim().replace(/(-?\d+)\.0(?!\d)/g, "$1");
    t += " \\approx " + (d.startsWith("[") ? texVec(d) : d);
  }
  return t;
}

function formatResult(args, stdout, showDec) {
  const lines = stdout.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const err = lines.find(l => l.startsWith("error:"));
  if (err) throw new Error(err.replace(/^error:\s*/, ""));
  const get = key => {
    const l = lines.find(x => x.startsWith(key + " ="));
    return l ? l.slice(key.length + 2).trim() : null;
  };
  const l1 = get("lambda1"), l2 = get("lambda2"), v1 = get("v1"), v2 = get("v2");
  if (l1 === null || v1 === null) throw new Error("unexpected output from eigen.jl:\n" + stdout);
  const A = args.map(a => texNum(a.replace(/sqrt\(([^)]*)\)/g, "sqrt($1)")));
  const rows = [
    `A &= \\begin{bmatrix}${A[0]} & ${A[1]}\\\\${A[2]} & ${A[3]}\\end{bmatrix}`,
    `\\lambda_1 &= ${texValue(l1, showDec)}, & v_1 &= ${texValue(v1, showDec)}`,
  ];
  if (v2 && v2.startsWith("(")) {
    rows.push(`\\lambda_2 &= ${texValue(l2, showDec)}, & &\\text{repeated: only one eigenvector}`);
  } else {
    rows.push(`\\lambda_2 &= ${texValue(l2, showDec)}, & v_2 &= ${texValue(v2, showDec)}`);
  }
  return "$$\n\\begin{aligned}\n" + rows.join("\\\\\n") + "\n\\end{aligned}\n$$";
}

// ---------- phase portraits for x' = A x ----------
// phaseSVG(A, opts) returns an SVG string: vector field, eigenvector lines with
// arrows showing growth/decay, and trajectories with arrows showing the direction of time.

function evalNum(s) {
  const t = String(s).trim();
  if (!/^[0-9eE+\-*/().\s^a-z]*$/.test(t)) throw new Error(`can't read the value '${s}'`);
  const js = t.replace(/\^/g, "**").replace(/\bsqrt\b/g, "Math.sqrt").replace(/\bpi\b/g, "Math.PI");
  if (/[a-z]/i.test(js.replace(/Math\.(sqrt|PI)/g, "").replace(/\d[eE][+-]?\d/g, ""))) throw new Error(`can't read the value '${s}'`);
  const v = Function(`"use strict"; return (${js});`)();
  if (typeof v !== "number" || !isFinite(v)) throw new Error(`can't read the value '${s}'`);
  return v;
}

function classify(a, b, c, d) {
  const tr = a + d, det = a * d - b * c, disc = tr * tr - 4 * det;
  const eps = 1e-12 * Math.max(1, Math.abs(a), Math.abs(b), Math.abs(c), Math.abs(d)) ** 2;
  const stab = tr < 0 ? "stable" : "unstable";
  let name;
  if (Math.abs(det) <= eps) name = "Degenerate: a whole line of equilibrium points (det = 0)";
  else if (det < 0) name = "Saddle point (unstable)";
  else if (Math.abs(disc) <= eps) name = (Math.abs(tr) <= eps ? "Center" : `Degenerate (improper) node, ${stab}`);
  else if (disc > 0) name = tr < 0 ? "Node, stable (sink)" : "Node, unstable (source)";
  else if (Math.abs(tr) <= eps) name = "Center (neutrally stable)";
  else name = tr < 0 ? "Spiral, stable (spiral sink)" : "Spiral, unstable (spiral source)";
  if (disc < -eps) name += c > 0 ? ", turns counterclockwise" : ", turns clockwise";
  return { tr, det, disc, name };
}

function realEigen(a, b, c, d) {
  const tr = a + d, det = a * d - b * c, disc = tr * tr - 4 * det;
  if (disc < 0) return [];
  const s = Math.sqrt(disc);
  const lams = disc === 0 ? [tr / 2] : [(tr - s) / 2, (tr + s) / 2];
  const out = [];
  for (const l of lams) {
    let v;
    if (Math.abs(b) > 1e-12) v = [b, l - a];
    else if (Math.abs(c) > 1e-12) v = [l - d, c];
    else v = Math.abs(l - a) < 1e-12 ? [1, 0] : [0, 1];
    const n = Math.hypot(v[0], v[1]);
    out.push({ lam: l, v: [v[0] / n, v[1] / n] });
  }
  // diagonal matrix with equal entries: every direction is an eigenvector; show the axes
  if (Math.abs(b) < 1e-12 && Math.abs(c) < 1e-12 && Math.abs(a - d) < 1e-12) {
    return [{ lam: a, v: [1, 0] }, { lam: a, v: [0, 1] }];
  }
  return out;
}

function fmtNum(x) {
  const r = Math.round(x * 1000) / 1000;
  return (Object.is(r, -0) ? 0 : r).toString().replace("-", "−");
}

function phaseSVG(A, opts = {}) {
  const [a, b, c, d] = A;
  const L = opts.range || 3;
  const W = 360, P = 28;            // drawing size and padding
  const S = W / (2 * L);            // pixels per unit
  const X = x => P + (x + L) * S;
  const Y = y => P + (L - y) * S;
  const f = (x, y) => [a * x + b * y, c * x + d * y];
  const inside = (x, y, m = 1.0) => Math.abs(x) <= L * m && Math.abs(y) <= L * m;
  const parts = [];
  const cls = classify(a, b, c, d);

  // grid and axes
  for (let k = -Math.floor(L); k <= Math.floor(L); k++) {
    if (k === 0) continue;
    parts.push(`<line class="pp-grid" x1="${X(k)}" y1="${Y(-L)}" x2="${X(k)}" y2="${Y(L)}"/>`);
    parts.push(`<line class="pp-grid" x1="${X(-L)}" y1="${Y(k)}" x2="${X(L)}" y2="${Y(k)}"/>`);
  }
  parts.push(`<line class="pp-axis" x1="${X(-L)}" y1="${Y(0)}" x2="${X(L)}" y2="${Y(0)}"/>`);
  parts.push(`<line class="pp-axis" x1="${X(0)}" y1="${Y(-L)}" x2="${X(0)}" y2="${Y(L)}"/>`);
  parts.push(`<text class="pp-label" x="${X(L) - 4}" y="${Y(0) - 6}" text-anchor="end">x₁</text>`);
  parts.push(`<text class="pp-label" x="${X(0) + 6}" y="${Y(L) + 12}">x₂</text>`);
  parts.push(`<text class="pp-tick" x="${X(L)}" y="${Y(0) + 14}" text-anchor="end">${fmtNum(L)}</text>`);

  // vector field: unit-length arrows, opacity by speed
  const N = 15, cell = (2 * L) / N, len = cell * 0.42;
  let vmax = 0;
  const field = [];
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const x = -L + (i + 0.5) * cell, y = -L + (j + 0.5) * cell;
    const [u, v] = f(x, y), m = Math.hypot(u, v);
    vmax = Math.max(vmax, m);
    field.push([x, y, u, v, m]);
  }
  for (const [x, y, u, v, m] of field) {
    if (m < 1e-12) { parts.push(`<circle class="pp-field-dot" cx="${X(x)}" cy="${Y(y)}" r="1.4"/>`); continue; }
    const ux = u / m, uy = v / m;
    const x0 = x - ux * len / 2, y0 = y - uy * len / 2, x1 = x + ux * len / 2, y1 = y + uy * len / 2;
    const op = (0.35 + 0.65 * Math.sqrt(m / vmax)).toFixed(2);
    parts.push(`<line class="pp-field" style="opacity:${op}" x1="${X(x0).toFixed(1)}" y1="${Y(y0).toFixed(1)}" x2="${X(x1).toFixed(1)}" y2="${Y(y1).toFixed(1)}" marker-end="url(#pp-ah-f)"/>`);
  }

  // trajectories (RK4 with a step that moves a fixed distance in the plane)
  const ds = L / 120;
  function trace(x, y, dir) {
    const pts = [[x, y]];
    for (let k = 0; k < 1500; k++) {
      const [u, v] = f(x, y), m = Math.hypot(u, v);
      if (m < 1e-9 || Math.hypot(x, y) < L * 0.01) break;
      const h = dir * ds / m;
      const k1 = f(x, y);
      const k2 = f(x + h * k1[0] / 2, y + h * k1[1] / 2);
      const k3 = f(x + h * k2[0] / 2, y + h * k2[1] / 2);
      const k4 = f(x + h * k3[0], y + h * k3[1]);
      x += h * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]) / 6;
      y += h * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]) / 6;
      pts.push([x, y]);
      if (!inside(x, y, 1.02)) break;
      // closed orbit (center): stop after one loop
      if (k > 40 && Math.hypot(x - pts[0][0], y - pts[0][1]) < ds * 1.5) break;
    }
    return pts;
  }
  const seeds = [];
  const nSeeds = 16;
  for (let i = 0; i < nSeeds; i++) {
    const t = (2 * Math.PI * (i + 0.5)) / nSeeds;
    seeds.push([0.92 * L * Math.cos(t), 0.92 * L * Math.sin(t)]);
  }
  const isCenter = cls.disc < 0 && Math.abs(cls.tr) < 1e-9 * Math.max(1, Math.abs(cls.det));
  if (isCenter) {
    // closed orbits: one per radius along the x1-axis, otherwise they all overlap
    seeds.length = 0;
    for (const r of [0.15, 0.3, 0.45, 0.6, 0.75, 0.9]) seeds.push([r * L, 0]);
  }
  const eig = realEigen(a, b, c, d);
  const paths = [];
  for (const [sx, sy] of seeds) {
    const fwd = trace(sx, sy, +1), bwd = trace(sx, sy, -1).reverse();
    const pts = bwd.concat(fwd.slice(1));
    if (pts.length > 3) paths.push(pts);
  }
  function pathD(pts) {
    return pts.map((p, i) => `${i ? "L" : "M"}${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`).join("");
  }
  function arrowAt(pts, frac, klass) {
    // arrowhead at a fraction of the arc length, pointing forward in time
    let total = 0;
    const seg = [];
    for (let i = 1; i < pts.length; i++) {
      const l = Math.hypot(X(pts[i][0]) - X(pts[i - 1][0]), Y(pts[i][1]) - Y(pts[i - 1][1]));
      seg.push(l); total += l;
    }
    let target = total * frac, i = 0;
    while (i < seg.length - 1 && target > seg[i]) { target -= seg[i]; i++; }
    const p = pts[i], q = pts[Math.min(i + 1, pts.length - 1)];
    const px = X(p[0]), py = Y(p[1]), qx = X(q[0]), qy = Y(q[1]);
    const ang = Math.atan2(qy - py, qx - px) * 180 / Math.PI;
    if (!isFinite(ang) || (px === qx && py === qy)) return "";
    return `<path class="${klass}" d="M4,0 L-4,-3.5 L-4,3.5 Z" transform="translate(${px.toFixed(1)},${py.toFixed(1)}) rotate(${ang.toFixed(1)})"/>`;
  }
  const dim = (opts.points || []).length ? ' style="opacity:.4"' : "";
  for (const pts of paths) {
    parts.push(`<path class="pp-traj"${dim} d="${pathD(pts)}"/>`);
    parts.push(arrowAt(pts, 0.35, "pp-traj-head"));
    parts.push(arrowAt(pts, 0.7, "pp-traj-head"));
  }

  // eigenvector lines, with arrows: outward if lambda > 0, inward if lambda < 0
  const colors = ["pp-e1", "pp-e2"];
  eig.forEach((e, idx) => {
    const [vx, vy] = e.v, klass = colors[idx % 2];
    // extend the line to the edge of the box
    const tmax = Math.min(vx !== 0 ? L / Math.abs(vx) : Infinity, vy !== 0 ? L / Math.abs(vy) : Infinity);
    parts.push(`<line class="${klass}" x1="${X(-vx * tmax)}" y1="${Y(-vy * tmax)}" x2="${X(vx * tmax)}" y2="${Y(vy * tmax)}"/>`);
    for (const sgn of [1, -1]) for (const r of [0.35, 0.75]) {
      const px = sgn * vx * tmax * r, py = sgn * vy * tmax * r;
      if (Math.abs(e.lam) < 1e-12) continue; // zero eigenvalue: line of equilibria, no motion
      const out = e.lam > 0 ? 1 : -1;
      const ang = Math.atan2(-(sgn * vy * out), sgn * vx * out) * 180 / Math.PI;
      parts.push(`<path class="${klass}-head" d="M5,0 L-5,-4.5 L-5,4.5 Z" transform="translate(${X(px).toFixed(1)},${Y(py).toFixed(1)}) rotate(${ang.toFixed(1)})"/>`);
    }
  });

  parts.push(`<circle class="pp-origin" cx="${X(0)}" cy="${Y(0)}" r="3"/>`);

  // trajectories through the starting points the user asked for
  (opts.points || []).forEach((pt, k) => {
    const col = POINT_COLORS[k % POINT_COLORS.length];
    const fwd = trace(pt.x, pt.y, +1), bwd = trace(pt.x, pt.y, -1).reverse();
    const pts = bwd.concat(fwd.slice(1));
    if (pts.length > 2) {
      parts.push(`<path d="${pathD(pts)}" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round"/>`);
      if (fwd.length > 3) {
        parts.push(arrowAt(fwd, 0.45, "pp-pt-head").replace('class="pp-pt-head"', `fill="${col}"`).replace("M4,0 L-4,-3.5 L-4,3.5 Z", "M6,0 L-6,-5 L-6,5 Z"));
        parts.push(arrowAt(fwd, 0.85, "pp-pt-head").replace('class="pp-pt-head"', `fill="${col}"`).replace("M4,0 L-4,-3.5 L-4,3.5 Z", "M6,0 L-6,-5 L-6,5 Z"));
      }
    }
    parts.push(`<circle cx="${X(pt.x).toFixed(1)}" cy="${Y(pt.y).toFixed(1)}" r="5.5" fill="${col}" stroke="var(--background-primary,#fff)" stroke-width="1.8"/>`);
    const right = X(pt.x) < P + W - 70;
    parts.push(`<text class="pp-pt-text" x="${(X(pt.x) + (right ? 9 : -9)).toFixed(1)}" y="${(Y(pt.y) - 8).toFixed(1)}" text-anchor="${right ? "start" : "end"}" fill="${col}">(${fmtNum(pt.x)}, ${fmtNum(pt.y)})</text>`);
  });

  const H = W + 2 * P;
  const style = `
  .pp-bg{fill:var(--background-primary,#fff)}
  .pp-grid{stroke:var(--background-modifier-border,#ddd);stroke-width:0.6}
  .pp-axis{stroke:var(--text-muted,#666);stroke-width:1}
  .pp-label,.pp-tick{fill:var(--text-muted,#666);font:12px var(--font-interface,sans-serif)}
  .pp-tick{font-size:10px}
  .pp-field{stroke:var(--text-faint,#999);stroke-width:1}
  .pp-field-dot,#pp-ah-f path{fill:var(--text-faint,#999)}
  .pp-traj{fill:none;stroke:var(--interactive-accent,#7c5cff);stroke-width:1.5;opacity:.85}
  .pp-traj-head{fill:var(--interactive-accent,#7c5cff)}
  .pp-e1{stroke:#e8590c;stroke-width:2.4}
  .pp-e2{stroke:#1c9e6b;stroke-width:2.4}
  .pp-e1-head,.pp-e1-text{fill:#e8590c}
  .pp-e2-head,.pp-e2-text{fill:#1c9e6b}
  .pp-e1-text,.pp-e2-text{font:bold 12px var(--font-interface,sans-serif);paint-order:stroke;stroke:var(--background-primary,#fff);stroke-width:3px}
  .pp-origin{fill:var(--text-normal,#222)}
  .pp-pt-text{font:bold 12px var(--font-interface,sans-serif);paint-order:stroke;stroke:var(--background-primary,#fff);stroke-width:3.5px}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W + 2 * P} ${H}" width="100%" style="max-width:${W + 2 * P}px" class="pp-svg">
<style>${style}</style>
<defs><marker id="pp-ah-f" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L6,3 L0,6 Z"/></marker></defs>
<rect class="pp-bg" x="0" y="0" width="${W + 2 * P}" height="${H}" rx="6"/>
<clipPath id="pp-clip"><rect x="${P}" y="${P}" width="${W}" height="${W}"/></clipPath>
<g clip-path="url(#pp-clip)">${parts.join("\n")}</g>
</svg>`;
}

function phaseCaption(A, points = []) {
  const cls = classify(...A);
  const eig = realEigen(...A);
  const sw = (col, txt) => `<span style="white-space:nowrap"><span style="display:inline-block;width:14px;height:3px;background:${col};vertical-align:middle;margin-right:4px;border-radius:2px"></span>${txt}</span>`;
  const items = [];
  const cols = ["#e8590c", "#1c9e6b"];
  eig.forEach((e, i) => {
    const what = Math.abs(e.lam) < 1e-12 ? "every point on this line is an equilibrium"
      : e.lam > 0 ? "moves out along this line" : "moves in along this line";
    items.push(sw(cols[i % 2], `λ${eig.length > 1 ? (i ? "₂" : "₁") : ""} = ${fmtNum(e.lam)}: ${what}`));
  });
  items.push(sw("var(--interactive-accent,#7c5cff)", "trajectories, arrows point forward in time"));
  points.forEach((p, k) => items.push(sw(POINT_COLORS[k % POINT_COLORS.length], `starts at (${fmtNum(p.x)}, ${fmtNum(p.y)})`)));
  return `<div style="font-weight:600;margin-bottom:2px">${cls.name}</div><div style="display:flex;flex-wrap:wrap;gap:4px 14px;font-size:0.85em;color:var(--text-muted)">${items.join("")}</div>`;
}

const POINT_COLORS = ["#2a6fdb", "#c2185b", "#8e44ad", "#00897b", "#d68910", "#5d6d7e"];

// "(2,-1),(-1,2)" or "(2,-1) (-1,2)" or "2,-1; -1,2" -> [{x, y, raw}]
function parsePoints(text) {
  const out = [];
  const paren = [...text.matchAll(/\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g)];
  let pairs;
  if (paren.length) pairs = paren.map(m => m[1].split(/[,;\s]+/).filter(Boolean));
  else {
    const nums = text.split(/[,;\s]+/).filter(Boolean);
    if (nums.length % 2) throw new Error("starting points come in pairs: [(x, y), (x, y)]");
    pairs = [];
    for (let i = 0; i < nums.length; i += 2) pairs.push([nums[i], nums[i + 1]]);
  }
  for (const pr of pairs) {
    if (pr.length !== 2) throw new Error(`a starting point needs 2 numbers: (${pr.join(", ")})`);
    out.push({ x: evalNum(pr[0]), y: evalNum(pr[1]), raw: pr });
  }
  if (!out.length) throw new Error("no starting points found inside [ ]");
  return out;
}

// x as a fraction p/q when it is one (to rounding), else a short decimal; LaTeX
function fracTex(x) {
  if (Math.abs(x) < 1e-12) return "0";
  let h1 = 1, h0 = 0, k1 = 0, k0 = 1, b = Math.abs(x);
  for (let i = 0; i < 30; i++) {
    const a = Math.floor(b);
    [h1, h0] = [a * h1 + h0, h1];
    [k1, k0] = [a * k1 + k0, k1];
    if (k1 > 10000) break;
    if (Math.abs(Math.abs(x) - h1 / k1) < 1e-9 * Math.max(1, Math.abs(x))) {
      const s = x < 0 ? "-" : "";
      return k1 === 1 ? s + h1 : `${s}\\frac{${h1}}{${k1}}`;
    }
    if (b - a < 1e-12) break;
    b = 1 / (b - a);
  }
  return Number(x.toPrecision(4)).toString();
}

// particular solutions x(t) = c1 e^{l1 t} v1 + c2 e^{l2 t} v2 through each starting point
function formatParticular(stdout, pts) {
  const lines = stdout.split(/\r?\n/).map(l => l.trim());
  const get = key => {
    const l = lines.find(x => x.startsWith(key + " ="));
    return l ? l.slice(key.length + 2).split(/\s+~\s+/)[0].trim() : null;
  };
  const l1 = get("lambda1"), l2 = get("lambda2"), v1 = get("v1"), v2 = get("v2");
  const note = s => `$$\\text{${s}}$$`;
  if (!l1 || !v1 || !v2) return note("(could not read the eigenvectors for the particular solutions)");
  if (v2.startsWith("(")) return note("Repeated eigenvalue with one eigenvector: particular solutions need a generalized eigenvector, not written out here.");
  if (/(^|[\s*])i$/.test(l1)) {
    return note("Complex eigenvalues: particular solutions need the real (cos/sin) form, not written out here.");
  }
  const vec = s => s.replace(/^\[|\]$/g, "").split(",").map(x => evalNum(x.trim()));
  const [a1, b1] = vec(v1), [a2, b2] = vec(v2);
  const det = a1 * b2 - a2 * b1;
  if (Math.abs(det) < 1e-12) return note("(eigenvectors are parallel; can't split the starting point)");
  const lamExp = s => {
    const tx = texNum(s);
    return /^-?\d+$/.test(s.trim()) ? (s.trim() === "1" ? "t" : s.trim() === "-1" ? "-t" : `${s.trim()}t`) : `\\left(${tx}\\right)t`;
  };
  const e1 = Math.abs(evalNum(l1)) < 1e-12 ? "" : `e^{${lamExp(l1)}}`;
  const e2 = Math.abs(evalNum(l2)) < 1e-12 ? "" : `e^{${lamExp(l2)}}`;
  const V1 = texVec(v1), V2 = texVec(v2);
  const term = (c, e, V, first) => {
    if (Math.abs(c) < 1e-12) return "";
    const f = fracTex(Math.abs(c));
    const coef = f === "1" ? "" : f;
    const sign = c < 0 ? (first ? "-" : " - ") : (first ? "" : " + ");
    return `${sign}${coef}${e}${V}`;
  };
  const rows = [`\\vec x(t) &= c_1${e1}${V1} + c_2${e2}${V2}`];
  for (const p of pts) {
    const c1 = (p.x * b2 - a2 * p.y) / det, c2 = (a1 * p.y - b1 * p.x) / det;
    let rhs = term(c1, e1, V1, true);
    rhs += term(c2, e2, V2, !rhs);
    if (!rhs) rhs = "\\vec 0";
    rows.push(`\\text{from }(${fmtNum(p.x).replace("−", "-")},\\ ${fmtNum(p.y).replace("−", "-")})\\!:\\quad c_1 = ${fracTex(c1)},\\ c_2 = ${fracTex(c2)} &\\quad\\Rightarrow\\quad \\vec x(t) = ${rhs}`);
  }
  return "$$\n\\begin{aligned}\n" + rows.join("\\\\\n") + "\n\\end{aligned}\n$$";
}

// parse a phase-plane block: "A = a b c d" (or "a b c d"), optional "range = 5"
function parsePhaseBlock(src) {
  let A = null, range = null, points = [];
  for (const raw of src.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    const pm = line.match(/^points?\s*=\s*(.+)$/i);
    if (pm) { points = parsePoints(pm[1]); continue; }
    const r = line.match(/^range\s*=\s*(.+)$/i);
    if (r) { range = evalNum(r[1]); continue; }
    const m = line.replace(/^A\s*=\s*/i, "").replace(/[\[\],;]/g, " ").trim().split(/\s+/);
    if (m.length === 4) A = m.map(evalNum);
  }
  if (!A) throw new Error("write the matrix as  A = a b c d  (row by row)");
  if (!range || range <= 0) {
    // default window: 3, or big enough to show every starting point
    const far = Math.max(0, ...points.map(p => Math.max(Math.abs(p.x), Math.abs(p.y))));
    range = Math.max(3, Math.ceil(far * 1.3));
  }
  return { A, range, points };
}

// ---------- finding julia ----------

function candidateJulias() {
  const c = ["julia"];
  const env = process.env;
  if (env.LOCALAPPDATA) {
    c.push(path.join(env.LOCALAPPDATA, "Microsoft", "WindowsApps", "julia.exe"));
    const progs = path.join(env.LOCALAPPDATA, "Programs");
    try {
      for (const d of fs.readdirSync(progs)) {
        if (/^julia/i.test(d)) c.push(path.join(progs, d, "bin", "julia.exe"));
      }
    } catch (e) {}
  }
  if (env.USERPROFILE) {
    c.push(path.join(env.USERPROFILE, ".juliaup", "bin", "julia.exe"));
  }
  for (const pf of [env.ProgramFiles, env["ProgramFiles(x86)"]]) {
    if (!pf) continue;
    try {
      for (const d of fs.readdirSync(pf)) {
        if (/^julia/i.test(d)) c.push(path.join(pf, d, "bin", "julia.exe"));
      }
    } catch (e) {}
  }
  return c;
}

function run(cmd, args, cwd) {
  return new Promise((resolve, reject) => {
    execFile(cmd, args, { cwd, timeout: 120000, windowsHide: true }, (err, stdout, stderr) => {
      if (err && err.code === "ENOENT") return reject(Object.assign(new Error("not found"), { notFound: true }));
      if (err && !stdout) return reject(new Error((stderr || err.message).trim()));
      resolve(stdout);
    });
  });
}

class EigenInline extends obsidian.Plugin {
  async onload() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.julia = null;
    this.counter = 0;

    this.registerEvent(this.app.workspace.on("editor-change", (editor, info) => this.onChange(editor, info)));

    this.addCommand({
      id: "eval-line",
      name: "Evaluate eigen(...) on this line",
      editorCallback: (editor, info) => {
        const ln = editor.getCursor().line;
        const text = editor.getLine(ln);
        LINE_RE.lastIndex = 0;
        const m = LINE_RE.exec(text);
        if (!m) { new obsidian.Notice("No eigen(a,b,c,d) on this line."); return; }
        let end = m.index + m[0].length;
        const eq = text.slice(end).match(/^\s*=/);
        if (eq) end += eq[0].length;
        this.start(editor, info, ln, m.index, end, m[1], m[2]);
      },
    });

    // ```phase-plane``` code blocks: A = a b c d (row by row), optional range = 5
    this.registerMarkdownCodeBlockProcessor("phase-plane", (src, el) => {
      try {
        const { A, range, points } = parsePhaseBlock(src);
        const box = el.createDiv({ cls: "eigen-phase-plane" });
        box.style.margin = "0.5em 0";
        const pic = box.createDiv();
        pic.innerHTML = phaseSVG(A, { range, points });
        const cap = box.createDiv();
        cap.style.marginTop = "4px";
        cap.innerHTML = phaseCaption(A, points);
      } catch (e) {
        el.createEl("pre", { text: "phase-plane: " + e.message });
      }
    });

    this.addSettingTab(new EigenSettings(this.app, this));
  }

  onChange(editor, info) {
    const cur = editor.getCursor();
    const before = editor.getLine(cur.line).slice(0, cur.ch);
    if (!before.endsWith("=")) return;
    const m = before.match(TRIGGER_RE);
    if (!m) return;
    this.start(editor, info, cur.line, cur.ch - m[0].length, cur.ch, m[1], m[2]);
  }

  async start(editor, info, line, from, to, argText, ptsText) {
    const args = splitArgs(argText);
    let pts = [];
    if (ptsText && ptsText.trim()) {
      try { pts = parsePoints(ptsText); }
      catch (e) { new obsidian.Notice("eigen(): " + e.message, 8000); return; }
    }
    if (args.length !== 4) {
      new obsidian.Notice(`eigen() needs 4 numbers (a, b, c, d row by row), got ${args.length}.`);
      return;
    }
    const file = info && info.file;
    const tag = `⏳eigen#${Date.now().toString(36)}${this.counter++}`;
    editor.replaceRange(tag, { line, ch: from }, { line, ch: to });

    let replacement;
    try {
      const out = await this.compute(args);
      replacement = formatResult(args, out, this.settings.showDecimals);
      if (pts.length) replacement += "\n" + formatParticular(out, pts);
      if (this.settings.phasePlane || pts.length) {
        replacement += "\n```phase-plane\nA = " + args.join(" ") +
          (pts.length ? "\npoints = " + pts.map(p => `(${p.raw[0]},${p.raw[1]})`).join(" ") : "") + "\n```";
      }
      // a $$ block needs its own lines
      const lineText = editor.getLine(line) || "";
      const idx = lineText.indexOf(tag);
      if (idx > 0 && lineText.slice(0, idx).trim()) replacement = "\n" + replacement;
      if (idx >= 0 && lineText.slice(idx + tag.length).trim()) replacement += "\n";
    } catch (e) {
      new obsidian.Notice("eigen(): " + e.message, 10000);
      replacement = `eigen(${args.join(", ")})` + (ptsText ? `[${ptsText}]` : "");
    }
    await this.swap(editor, file, tag, replacement);
  }

  async swap(editor, file, tag, replacement) {
    // same note still open in this editor: edit in place so undo works
    const content = editor.getValue();
    const i = content.indexOf(tag);
    if (i >= 0) {
      editor.replaceRange(replacement, editor.offsetToPos(i), editor.offsetToPos(i + tag.length));
      return;
    }
    if (file) {
      await this.app.vault.process(file, t => t.replace(tag, replacement));
    }
  }

  async compute(args) {
    const base = this.app.vault.adapter.getBasePath();
    let script = this.settings.scriptPath;
    if (!path.isAbsolute(script)) script = path.join(base, script);
    if (!fs.existsSync(script)) {
      const f = this.app.vault.getFiles().find(x => x.name === "eigen.jl");
      if (!f) throw new Error("can't find eigen.jl (set its path in Settings → Eigen Inline)");
      script = path.join(base, f.path);
    }
    const tries = this.settings.juliaPath ? [this.settings.juliaPath] : (this.julia ? [this.julia] : candidateJulias());
    for (const j of tries) {
      try {
        const out = await run(j, [script, ...args], path.dirname(script));
        this.julia = j;
        return out;
      } catch (e) {
        if (!e.notFound) throw e;
      }
    }
    throw new Error("can't find Julia. Put julia.exe's full path in Settings → Eigen Inline.");
  }
}

class EigenSettings extends obsidian.PluginSettingTab {
  constructor(app, plugin) { super(app, plugin); this.plugin = plugin; }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("p", { text: "Type eigen(a,b,c,d)= in a note (matrix row by row) and it is replaced with the eigenvalues and eigenvectors." });
    new obsidian.Setting(containerEl)
      .setName("Julia path")
      .setDesc("Leave blank to find it automatically, or paste the full path to julia.exe.")
      .addText(t => t.setValue(this.plugin.settings.juliaPath).onChange(async v => {
        this.plugin.settings.juliaPath = v.trim(); this.plugin.julia = null; await this.plugin.saveData(this.plugin.settings);
      }));
    new obsidian.Setting(containerEl)
      .setName("eigen.jl location")
      .setDesc("Path inside the vault (or an absolute path).")
      .addText(t => t.setValue(this.plugin.settings.scriptPath).onChange(async v => {
        this.plugin.settings.scriptPath = v.trim(); await this.plugin.saveData(this.plugin.settings);
      }));
    new obsidian.Setting(containerEl)
      .setName("Draw phase portrait")
      .setDesc("Add a phase-plane graph (vector field, eigenvector lines, trajectories) under each result.")
      .addToggle(t => t.setValue(this.plugin.settings.phasePlane).onChange(async v => {
        this.plugin.settings.phasePlane = v; await this.plugin.saveData(this.plugin.settings);
      }));
    new obsidian.Setting(containerEl)
      .setName("Show decimals")
      .setDesc("Add ≈ decimal values next to square-root answers.")
      .addToggle(t => t.setValue(this.plugin.settings.showDecimals).onChange(async v => {
        this.plugin.settings.showDecimals = v; await this.plugin.saveData(this.plugin.settings);
      }));
  }
}

module.exports = EigenInline;
module.exports._test = { splitArgs, formatResult, TRIGGER_RE, phaseSVG, phaseCaption, parsePhaseBlock, parsePoints, formatParticular, fracTex };
