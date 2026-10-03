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
};

// eigen( a , b , c , d ) with one level of nested parens allowed, e.g. sqrt(2)
const CALL = String.raw`eigen\(((?:[^()]|\([^()]*\))*)\)`;
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
        this.start(editor, info, ln, m.index, end, m[1]);
      },
    });

    this.addSettingTab(new EigenSettings(this.app, this));
  }

  onChange(editor, info) {
    const cur = editor.getCursor();
    const before = editor.getLine(cur.line).slice(0, cur.ch);
    if (!before.endsWith("=")) return;
    const m = before.match(TRIGGER_RE);
    if (!m) return;
    this.start(editor, info, cur.line, cur.ch - m[0].length, cur.ch, m[1]);
  }

  async start(editor, info, line, from, to, argText) {
    const args = splitArgs(argText);
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
      // a $$ block needs its own lines
      const lineText = editor.getLine(line) || "";
      const idx = lineText.indexOf(tag);
      if (idx > 0 && lineText.slice(0, idx).trim()) replacement = "\n" + replacement;
      if (idx >= 0 && lineText.slice(idx + tag.length).trim()) replacement += "\n";
    } catch (e) {
      new obsidian.Notice("eigen(): " + e.message, 10000);
      replacement = `eigen(${args.join(", ")})`;
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
      .setName("Show decimals")
      .setDesc("Add ≈ decimal values next to square-root answers.")
      .addToggle(t => t.setValue(this.plugin.settings.showDecimals).onChange(async v => {
        this.plugin.settings.showDecimals = v; await this.plugin.saveData(this.plugin.settings);
      }));
  }
}

module.exports = EigenInline;
module.exports._test = { splitArgs, formatResult, TRIGGER_RE };
