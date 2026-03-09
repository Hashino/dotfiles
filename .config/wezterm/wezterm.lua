local wezterm = require "wezterm"
local config = wezterm.config_builder()
local colors = require("hash.colors")

config.colors = colors

config.font = wezterm.font("UbuntuMono Nerd Font",
  { weight = "Regular", stretch = "Normal", style = "Normal", })

config.font_size = 18.0

config.window_close_confirmation = "NeverPrompt"

config.use_fancy_tab_bar = false

config.keys = require("hash.keys")
config.hide_tab_bar_if_only_one_tab = true

return config
