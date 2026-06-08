local wezterm = require("wezterm")

return {
  {
    key = 'c',
    mods = 'CTRL|SHIFT',
    action = wezterm.action.ActivateCopyMode

  },
}
