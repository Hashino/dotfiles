-- by Hashino https://github.com/Hashino/dotfiles
-----------------------------------------------------------------------------------------------------------------------
local wibox 	= require("wibox")
local theme	    = require("beautiful")
-----------------------------------------------------------------------------------------------------------------------
local get_clock = function()
    spacer =
    {
        {
            layout = wibox.layout.fixed.horizontal,
            {
                right	= theme.spacing,
                widget = wibox.container.margin,
            },
        },
        bg = theme.transparent,
        widget = wibox.container.background
    }
    local clock = wibox.widget
    {
        layout = wibox.layout.fixed.horizontal,
        { -- Date
            {
                layout = wibox.layout.fixed.horizontal,
                spacer,
                wibox.widget.textclock("%a, %d - %b"),
                spacer,
            },
            bg = theme.bg_accent3,
            widget = wibox.container.background
        },
        { -- Time
            {
                layout = wibox.layout.fixed.horizontal,
                spacer,
                wibox.widget.textclock("%H:%M"),
                spacer,
            },
            bg = theme.bg_accent1,
            widget = wibox.container.background
        },
    }
    return clock
end
-----------------------------------------------------------------------------------------------------------------------
return get_clock
-----------------------------------------------------------------------------------------------------------------------