---
name: vhs-nvim-plugin-demo
description: >-
  Record Neovim plugin demos as GIF/MP4 with VHS — headless init.lua, auto-indent-aware
  typing, waiting for async plugin UI, and sending keybinds VHS can't type. Builds on
  the `vhs` skill. Use when: demo a Neovim plugin, record nvim, plugin README gif,
  showcase a Neovim feature, animate an editor session.
---

# VHS Neovim Plugin Demo

Record Neovim plugin demonstrations with [VHS](https://github.com/charmbracelet/vhs):
full ANSI colors, syntax highlighting, and realistic typing.

> **This skill covers only the Neovim-specific parts.** For VHS syntax, `Set`
> settings, themes, `Output` formats, and GIF-size tuning, use the **`vhs`** skill.

## 1. Headless demo config

Drive the demo from a minimal `init.lua` so the recording is reproducible and
independent of your personal config:

```lua
-- demo/init.lua
vim.opt.number = true
vim.opt.relativenumber = false

-- Make the plugin loadable without your full setup
vim.opt.rtp:prepend("/abs/path/to/your-plugin")

require("your-plugin").setup({
  -- minimal config that triggers the behavior you want to show
})
```

Launch it inside a hidden block so the `nvim -u …` command never shows in the GIF:

```tape
Hide
Type "nvim -u init.lua demo-file.ext"
Enter
Sleep 2s
Show
```

## 2. Suggested defaults

`Set Theme "nord"` is the fixed theme for these demos (VHS theme names are
case-sensitive — it's lowercase `nord`). The rest are starting points — adjust
freely:

```tape
Output demo.gif
Require nvim

Set Theme "nord"                       # fixed — always nord (lowercase)
Set FontFamily "UbuntuMono Nerd Font"  # any Nerd Font (icons); see note below
Set FontSize 18
Set Width 1920
Set Height 1080
Set TypingSpeed 300ms                  # 250–350ms reads well
Set Padding 20
Set WindowBar "Colorful"
Set BorderRadius 12
```

Find an installed Nerd Font: `fc-list | grep -i nerd`.

## 3. Auto-indent-aware typing

Neovim adds indentation automatically. **Don't type leading spaces** — they
stack on top of the auto-indent and the code comes out wrong. Add a short
`Sleep` after each `Enter` so the indent settles before the next line:

```tape
Type "i"
Sleep 200ms

Type "function greet()"
Enter
Sleep 100ms

Type `print("hello")`     # no leading spaces — nvim already indented
Enter
Sleep 100ms

Type "end"                # de-indents on its own
Escape
```

Use backticks around strings that contain quotes or backslashes (a general VHS
rule — see the `vhs` skill).

## 4. Sending plugin keybinds (read this)

**VHS does not understand Vim keycodes.** `Type "<S-CR>"` types the literal
characters `<S-CR>` into the buffer — it does **not** send Shift+Enter. Use VHS's
own key commands instead.

What VHS can send (v0.11.0):

- `Ctrl [+Alt][+Shift]+<char>` — e.g. `Ctrl+X`, `Ctrl+Shift+P`
- `Alt+<key>`
- standalone: `Enter` `Tab` `Escape` `Backspace` `Delete` `Insert` `Space`
  `Up` `Down` `Left` `Right` `PageUp` `PageDown` `ScrollUp` `ScrollDown`
  (each takes an optional repeat count, e.g. `Backspace 5`)

There is **no `Shift+Enter`, `Shift+Tab`, or Shift+<arrow>** — Shift only exists
combined with `Ctrl`. So if your plugin binds an action to a key VHS can't emit,
**remap it to a sendable key in the demo `init.lua`** and press that:

```lua
-- demo init.lua: rebind to keys VHS can send
keys = { drilling = { submit = "<C-s>" } }   -- was "<S-CR>"
```

```tape
Ctrl+S            # works — NOT  Type "<S-CR>"
```

> Rule of thumb: **never `Type` a `<...>` keycode.** Either use a VHS key
> command, or remap the action to one.

## 5. Waiting for async plugin UI

Plugins that call out to LSP, an AI provider, or build a popup need time. Prefer
`Wait` (content-driven) over guessing with `Sleep`:

```tape
Sleep 5s                # crude fixed wait

Wait /ready/            # wait until "ready" appears on the last line
Wait+Screen /done/      # wait until "done" appears anywhere on screen
Wait@30s /complete/     # wait up to 30s for "complete"
```

Rough budgets: LSP init `3–5s`, file/index search `5–10s`, AI/LLM response
`10–30s`. Add a short `Sleep` after the UI appears so viewers can read it.

Using `Wait` instead of a long fixed `Sleep` isn't just tidier — it keeps the
recording **short**, which matters for the next section.

## 6. Keep the recording renderable (0-byte GIF trap)

A demo that waits on LSP/AI several times easily runs 60s+. **GIF encoding holds
the whole frame sequence for palette generation, so a long, high-resolution
recording can exhaust memory — and VHS does not check ffmpeg's exit code, so it
prints success and leaves a silent 0-byte `.gif`.** (Symptom: tape validates,
render "succeeds", output file is 0 bytes.)

Render cost scales with **resolution × frame-rate × duration**. In order of impact:

1. **Shorten the recording** — replace long fixed `Sleep`s with `Wait` (§5) so
   you only record the AI's real latency, not a padded guess.
2. **Cap the frame rate** — `Set Framerate 24` (or 12); code demos don't need 50.
3. **Drop the resolution** — 1280×720 is plenty for a README; 1920×1080 is the
   usual culprit. (At small sizes even a 60s tape encodes fine.)
4. **Render to MP4, then convert** — MP4 is a streaming H.264 encode with
   near-zero memory and never 0-bytes, regardless of length/resolution:
   ```tape
   Output demo.mp4
   ```
   ```sh
   # convert to GIF afterward, capping fps/scale so the palette pass stays small
   ffmpeg -i demo.mp4 -vf "fps=12,scale=960:-1:flags=lanczos,split[a][b];[a]palettegen[p];[b][p]paletteuse" demo.gif
   ```

Note VHS writes every frame as a PNG under `$TMPDIR`, which is usually `/tmp` —
often a RAM-backed `tmpfs`. A long high-res recording can also fill it; point
`TMPDIR` at a real disk path (kept **short** — Chromium's socket path has a ~108
char limit) if you hit that.

## File structure

```
demo/
├── init.lua          # minimal plugin config (rebind unsendable keys here)
├── demo.tape         # VHS script
├── demo.gif          # output
└── demo-file.ext     # buffer opened during recording
```

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Keycode like `<S-CR>` typed into the buffer | You used `Type "<...>"`. Use a VHS key command (`Ctrl+S`, `Enter`, …) and remap the action in `init.lua` if needed (§4) |
| Plugin action does nothing | The keybind isn't VHS-sendable, or the UI wasn't ready — remap the key and/or raise the `Wait`/`Sleep` |
| Code indented wrong | You typed leading spaces on top of auto-indent — drop them (§3) |
| Font icons render as boxes | Not a Nerd Font; pick one from `fc-list \| grep -i nerd` |
| Plugin never loads | Check the `rtp:prepend` path and `setup{}` in `init.lua` |
