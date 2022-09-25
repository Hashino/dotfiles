-- by Hashino https://github.com/Hashino/dotfiles
local wibox 	= require("wibox")
local beautiful	= require("beautiful")
-----------------------------------------------------------------------------------------------------------------------
-- {{{ Error handling
-- Check if awesome encountered an error during startup and fell back to
-- another config (This code will only ever execute for the fallback config)
local naughty 	= require("naughty")

if awesome.startup_errors then
    naughty.notify({ preset = naughty.config.presets.critical,
                     title = "Oops, there were errors during startup!",
                     text = awesome.startup_errors })
end

-- Handle runtime errors after startup
do
    local in_error = false
    awesome.connect_signal("debug::error", function (err)
        -- Make sure we don't go into an endless error loop
        if in_error then return end
        in_error = true

        naughty.notify({ preset = naughty.config.presets.critical,
                         title = "Oops, an error happened!",
                         text = tostring(err) })
        in_error = false
    end)
end
-- }}}
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
        {
            {
                layout = wibox.layout.fixed.horizontal,
                spacer,
                wibox.widget.textclock("%a"),
                spacer,
            },
            bg = theme.bg_accent1,
            widget = wibox.container.background
        },
        {
            {
                layout = wibox.layout.fixed.horizontal,
                spacer,
                wibox.widget.textclock("%d"),
                spacer,
            },
            bg = theme.bg_accent2,
            widget = wibox.container.background
        },
        {
            {
                layout = wibox.layout.fixed.horizontal,
                spacer,
                wibox.widget.textclock("%b"),
                spacer,
            },
            bg = theme.bg_accent3,
            widget = wibox.container.background
        },
        {
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