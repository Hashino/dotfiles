-- by Hashino https://github.com/Hashino/dotfiles
-------------------------------------------------------------------------------------------------------------------
local wibox     = require("wibox")
local awful     = require("awful")
-------------------------------------------------------------------------------------------------------------------
screen.connect_signal("request::wallpaper", function(s)
    awful.wallpaper
    {
        screen = s,
        widget =
        {
            {
                image     = Theme.Wallpaper,
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
