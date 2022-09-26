-- by Hashino https://github.com/Hashino/dotfiles
-----------------------------------------------------------------------------------------------------------------------
local wibox 	= require("wibox")
local beautiful	= require("beautiful")
local awful 	= require("awful")
-----------------------------------------------------------------------------------------------------------------------
awful.tag({ "  ", "  ", "  ", "  ", "  " }, s, awful.layout.layouts[1])
-----------------------------------------------------------------------------------------------------------------------
local get_wibar = function(s)
    -- Create the wibox
    s.wibox = awful.wibar({ position = "top", screen = s, height = theme.universalsize, bg = theme.transparent })
	-- Add widgets to the wibox
    s.wibox:setup
    {
        {
            layout = wibox.layout.align.horizontal,
            { -- Left widget
                layout = wibox.layout.fixed.horizontal,
                {
                    require("hash.wibar.widgets.layoutbox")(s),
                    bg = theme.bg_accent3,
                    widget = wibox.container.background
                },
                {
                    require("hash.wibar.widgets.taglist")(s),
                    bg = theme.bg_accent2,
                    widget = wibox.container.background
                },
            },
            { -- Middle widget
                require("hash.wibar.widgets.tasklist")(s),
                bg = theme.transparent, 
                widget = wibox.container.background
            },
            { -- Right widgets
                layout = wibox.layout.fixed.horizontal,
                {
                    require("hash.wibar.widgets.player")(s),
                    bg = theme.bg_accent3,
                    widget = wibox.container.background
                },
                {
                    require("hash.wibar.widgets.systray")(s),
                    bg = theme.bg_accent2,
                    widget = wibox.container.background
                },
                require("hash.wibar.widgets.clock")(s),
            },
        },
        left	= theme.useless_gap * 2,
        right	= theme.useless_gap * 2,
        widget = wibox.container.margin,
    }
end
-----------------------------------------------------------------------------------------------------------------------
return get_wibar
-----------------------------------------------------------------------------------------------------------------------