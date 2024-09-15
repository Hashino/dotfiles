-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local wibox = require("wibox")
local awful = require("awful")
--------------------------------------------------------------------------------
screen.connect_signal("request::wallpaper", function(s)
  awful.wallpaper
  {
    screen = s,
    widget =
    {
      image                 = Theme.Wallpaper,
      upscale               = true,
      downscale             = true,
      horizontal_fit_policy = "fit",
      vertical_fit_policy   = "fit",
      widget                = wibox.widget.imagebox,
    },
  }
end)
--------------------------------------------------------------------------------
