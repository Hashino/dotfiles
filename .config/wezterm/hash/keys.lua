local wezterm = require 'wezterm'

return {
  {
    key = 'C',
    mods = 'CTRL',
    action = wezterm.action.CopyTo 'ClipboardAndPrimarySelection',
  },
  require('hash.scrollback'),
}
