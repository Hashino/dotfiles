-- by Hashino https://github.com/Hashino/dotfiles
-----------------------------------------------------------------------------------------------------------------------
local awful 	= require("awful")
local wibox 	= require("wibox")
local beautiful = require("beautiful")
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
local get_layoutbox = function(s)
	local layoutbox = wibox.widget
	{
		awful.widget.layoutbox(s),
		bottom 	= theme.universalsize / 6,
		top 	= theme.universalsize / 6,
		left	= theme.universalsize / 4,
		right	= theme.universalsize / 4,
		widget	= wibox.container.margin,
	}    
	layoutbox:buttons 
	({
		awful.button({ }, 1, function () awful.layout.inc( 1) end),
		awful.button({ }, 3, function () awful.layout.inc(-1) end),
		awful.button({ }, 4, function () awful.layout.inc( 1) end),
		awful.button({ }, 5, function () awful.layout.inc(-1) end),
	})
	return layoutbox
end
--------------------------------------------------------------------------------------------------------------------------------------------
return get_layoutbox