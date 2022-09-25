-- by Hashino https://github.com/Hashino/dotfiles
-----------------------------------------------------------------------------------------------------------------------
local awful 	= require("awful")
local wibox 	= require("wibox")
local beautiful = require("beautiful")
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