-- by Hashino https://github.com/Hashino/dotfiles
-------------------------------------------------------------------------------------------------------------------
local wibox     = require("wibox")
local awful     = require("awful")
local theme	    = require("beautiful")
-------------------------------------------------------------------------------------------------------------------
screen.connect_signal("request::wallpaper", function(s)
    awful.wallpaper
    {
        screen = s,
        widget =
        {
            {
                image     = theme.wallpaper,
                upscale   = true,
                downscale = true,
                widget    = wibox.widget.imagebox,
            },
            valign = "center",
            halign = "center",
            tiled  = false,
            widget = wibox.container.tile,
        }
    }
end)
-------------------------------------------------------------------------------------------------------------------