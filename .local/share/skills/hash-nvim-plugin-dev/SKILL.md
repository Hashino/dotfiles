---
name: hash-nvim-plugin-dev
description: Code style and architecture standards for Hashino's Neovim plugins (learning.nvim, doing.nvim, askai.nvim). Use when writing, refactoring, or reviewing Lua for any of these plugins — or any new Neovim plugin in this author's style. Covers module layout, where code belongs (core vs utils vs domain modules), setup-first ordering, LuaCATS annotations, and the reliability/simplicity/readability principles. doing.nvim is the ground-truth reference implementation.
---

# Hashino Neovim plugin development

Standards for this author's Neovim plugins. The three guiding principles, in
order, are **reliability, simplicity, readability**. `doing.nvim` (installed at
`~/.local/share/nvim/site/pack/core/opt/doing.nvim`) is the canonical reference
— when unsure about style, read it.

## Keep this skill alive

**This skill is a living document — update it as you use it.** Whenever a session
surfaces a new convention, a clarified rule, a corrected misunderstanding, or a
pattern the author confirms (or rejects), edit this file to capture it. After
making a non-trivial styling/architecture decision for one of these plugins,
ask: "is this rule written down here?" — if not, add it. Prefer refining an
existing section over appending a new one, and keep examples concrete and tied
to the real plugins. The goal is that the next session starts from everything
learned in the previous ones.

## The core goal

**The core plugin file must have the least noise possible.** It should be
quickly readable and understood at a glance. A reader who wants the details
follows the function calls into the supporting modules. Optimize every decision
for "can someone open this file and immediately understand what the plugin does
and where its entry points are."

## File layout

```
lua/<plugin>.lua            -- CORE: setup + exported public API + thin internal pipeline
lua/<plugin>/config.lua     -- defaults table + ---@class type definitions
lua/<plugin>/utils.lua      -- generic, self-explanatory helpers
lua/<plugin>/<domain>.lua   -- a cohesive group of related helpers (diff.lua, state.lua, store.lua, ai.lua)
plugin/<plugin>.lua         -- user commands (:Command) via a dispatch table
```

## setup goes FIRST in the core file

`setup` is the very first function in `lua/<plugin>.lua`, right after the
module table. **Rationale: when someone opens the source it is usually because
of an error, so the plugin's entry point should be the first thing they see.**

Lua has a forward-reference trap: a `local function` defined lower in the file
is not visible to `setup` above it. Solve it by forward-declaring a *single*
local for the internal pipeline entry point, then assigning it at the bottom:

```lua
-- the debounced trigger; defined with the pipeline at the bottom, forward-
-- declared so `setup` can stay at the top where a reader lands first.
local schedule_work

function M.setup(opts)
  ...
  callback = function() schedule_work() end
end

-- ... public API ...

-- ===== internal pipeline (bottom of file) =====
function schedule_work() ... end   -- assigns the forward-declared local
```

Do **not** scatter the public API to work around the trap, and do not turn
internal helpers into public `M.x` methods just to forward-reference them.

## Where does a piece of code belong?

Decide by how central it is to the exported functions and how self-explanatory
it is:

1. **Keep it in the core file** when it is plugin-specific logic whose behavior
   is *not* guessable from its name — logic a reader needs to see to understand
   the plugin. The core file is where the "what makes this plugin tick" lives.

2. **Move it to `utils.lua`** when the function is trivial to understand from
   its name and signature alone. Examples: `utils.calculate_diff(prev, next)`,
   `utils.remove_empty_lines(lines)`, `utils.should_display()`. The reader sees
   the call site, understands it instantly, and never needs to open utils.lua.

3. **Give it its own domain module** (NOT utils.lua) when several related
   helpers form a group. e.g. all diff computation → `diff.lua`; task storage →
   `state.lua`/`store.lua`; AI request building → `ai.lua`; floating-window
   mechanics → `window.lua`. The module is named for its domain and the core
   file calls `diff.compute(old, new)`.

**UI / floating windows belong in `window.lua`** (see askai.nvim and
learning.nvim). It owns `win_id` state, `close()`, and a `show(opts)` that
creates the buffer, opens the window, sets the winbar, and wires the keymaps.
Keep it *purely mechanical*: pass the *meaning* of dismiss/accept in as
callbacks (`on_dismiss`/`on_accept`) so plugin-specific policy (e.g. recording a
dismissal, applying an edit) stays readable in the core file and the window
module never reaches into the store/business logic.

The litmus test: at the *call site* in the core file, is the intent obvious
without reading the implementation? If yes → it can move out. If the name alone
would mislead or under-explain → keep it inline.

## doing.nvim style conventions

Read `doing.nvim` for the living examples. The rules:

- **Module pattern.** `local Doing = {}` (PascalCase local matching the module),
  `require` block aligned at the top, `return Doing` at the bottom.
- **Indentation:** 2 spaces.
- **Trailing commas** everywhere in multi-line tables, *including* inline table
  args: `vim.api.nvim_create_augroup("Doing", { clear = true, })`.
- **LuaCATS annotations** on every public function: `---@param`, `---@return`.
  Types live in `config.lua` as `---@class <plugin>.Config [Hashino/<plugin>.nvim] ...`
  with `---@field` lines and inline `-- comment` docs on each default.
- **Comments** are lowercase and terse, and explain *why*, not *what*. Constants
  are UPPERCASE file-locals (`local HEIGHT = 25`). No ASCII banner/box separators
  (no `-- ====` lines) — a single plain comment is enough to head a section.
- **One augroup**, created once: `M.augroup = vim.api.nvim_create_augroup(...)`
  or on the utils module.
- **Per-buffer caching** of expensive eligibility checks via `vim.b.<plugin>_*`
  variables (see `should_display`/`should_suggest`): check the cached value
  first, compute once, store the result.
- **User commands** live in `plugin/<plugin>.lua`: a `do_cmds` table mapping
  subcommand → function, dispatched by `nvim_create_user_command` with a
  `complete` function returning `vim.tbl_keys(do_cmds)`.
- **Persistence idiom:** `local ok, lines = pcall(vim.fn.readfile, file)` to
  load, `vim.fn.writefile(lines, file)` to save. Wrap decode in `pcall`.
- **Prefer modern, non-deprecated APIs:** `vim.uv` over `vim.loop`,
  `vim.text.diff` over `vim.diff`, `vim.fs.joinpath` for paths. Check for
  deprecations when touching old code.
- **Validate in setup and bail loudly:** required provider/config fields checked
  up front with a `vim.notify(..., vim.log.levels.ERROR)` and early `return`.

## Reliability practices

- Guard external/model-supplied data before use (validate edit shapes, clamp
  numeric ranges, `pcall` around buffer mutations that take untrusted indices).
- Ensure callbacks that clear state run exactly once (guard async jobs with a
  `done` flag and an `on_exit` fallback so state never hangs).
- Check `nvim_buf_is_valid`/`nvim_buf_is_loaded` before acting on a buffer in an
  async callback.
- For AI/network requests, **retry a few times on a transient empty/unparseable
  response** (a `MAX_ATTEMPTS` bound around the per-attempt once-guard) before
  reporting failure — providers occasionally drop a forced tool call. See
  `learning.nvim`'s `ai.make_ai_request`.

## Testing AI-backed plugins

- **Prefer an automated headless runner** (`tests/run.lua`) over scraping a TUI:
  it drives the *real* plugin against whatever provider the launching config sets
  up, prints `PASS`/`FAIL`, and exits non-zero on failure (`vim.cmd("cq 1")`).
  Run it with `nvim --headless -u <config> -c "luafile tests/run.lua"`.
- **Always finish with one comprehensive single-session tui-use test**
  (`tests/smoke.sh`) that drives ONE real Neovim session through *every* behaviour
  and asserts each — it's the only thing that exercises the real
  `keystroke → autocmd → debounce → window → keymap` path the headless runner
  bypasses by calling functions directly. Make it self-asserting (bash driving
  `tui-use start/type/press/wait/find`, `PASS`/`FAIL` per behaviour, non-zero
  exit). Detect a window by its winbar text (e.g. `to dismiss`), **not** by a word
  that also appears in the `:Command` cmdline echo or the buffer.
- **Split path vs. content.** The smoke asserts *interactive behaviour* (a window
  does / doesn't open); assert *content relevance* (does the suggestion concern the
  edit) against the raw model response in the headless runner. A narrow float
  **wraps text mid-word**, so scraping the screen for a keyword like
  `comprehension` is unreliable — the word can be split across lines.
- **Isolate side-effecting state**: launch the runner with `XDG_DATA_HOME=/tmp/...`
  so on-disk plugin data (dismissals, etc.) doesn't touch the real one.
- **Eagerness/threshold-style gates**: the extremes (0, 1) short-circuit
  independent of the model and only prove the on/off switch. Test *nuanced* values
  and assert **consistency across repeated runs** — model scores are the flaky
  part, not the deterministic gate. Coarse scorers cluster (e.g. mercury-2 rates
  most idioms ~0.8), so don't assume an edit lands mid-band; probe importance.
- **Stubbing a `vim` API in tests narrows its workspace-wide inferred type.**
  `vim.notify = function(msg) ... end` makes lua-language-server think `vim.notify`
  takes one arg and falsely flag every real 2-arg call. Keep the original arity:
  `function(msg, ...)`. Run the LSP check from the **repo root** (where
  `.luarc.json` lives), not `lua/`. See [[lua-lsp-diagnostics]].
- **Quarantine the model behind a seam so the orchestration is deterministic.**
  Make the AI calls *injectable/replaceable* module fields (`ai.verify`,
  `ai.gen_example`, …) and split the decision logic into a **pure reducer** (e.g.
  learning.nvim's `teach_session.lua`: feed it events, assert the returned action
  + state — no model, no I/O). Tests then drive the real orchestration with stub
  AI callbacks and assert exact behaviour; the model's own *relevance/accuracy* is
  judged separately and leniently (an AI-judge over fixtures, never a brittle
  string match). Stubbing the plugin's **own** module function in a test trips
  `duplicate-set-field` — silence it per-line with
  `---@diagnostic disable-next-line: duplicate-set-field` (same spirit as the
  vim-API stub note above).

## Git workflow

- **Commit after every change.** As soon as a change is made and verified, commit
  it — keep the working tree in a committed state at all times so progress is
  recoverable and each step is isolated. Small, frequent commits during a session
  are expected; the message can be plain/work-in-progress at this stage.
- **Never push unprompted.** Pushing is manual — only when the author explicitly
  asks for it. Committing is automatic; pushing is not.
- **Before a (manual) push, squash/rebase into Conventional Commits.** The
  incremental commits are local safety, not public history. Before pushing,
  reshape them into a clean sequence where each commit is one coherent unit
  following Conventional Commits: `type(scope): summary` — `feat`, `fix`,
  `refactor`, `test`, `docs`, `chore`, `perf` (scope optional, e.g. `feat(ai):`,
  `docs(README.md):`). One concern per commit; the log should read as the intended
  story of the change, not the messy path taken to it.
- **Squash non-interactively** — `git rebase -i`/`git add -i` are unavailable in
  this environment. Reshape with `git reset --soft <base>` (e.g. the upstream
  merge-base) and re-commit in conventional units, or `git commit --amend` /
  `git rebase --onto` as needed.

## Checklist when finishing a change

- [ ] `setup` is the first function in the core file.
- [ ] Core file reads top-to-bottom with minimal noise; details are in modules.
- [ ] Trivial, self-naming helpers in `utils.lua`; grouped helpers in a domain
      module; only non-obvious plugin logic remains inline.
- [ ] No deprecated APIs (`vim.loop`, `vim.diff`, …).
- [ ] Public functions have `---@param`/`---@return`; types in `config.lua`.
- [ ] Trailing commas, 2-space indent, lowercase why-comments.
- [ ] Loads clean: `nvim --headless -c "lua require('<plugin>')" -c qa`.
- [ ] Change is committed (commit after every change; squash into Conventional
      Commits only before a manual, author-requested push).
