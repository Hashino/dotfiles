-- by Hashino https://github.com/Hashino/dotfiles
-------------------------------------------------------------------------------------------------------------------
local gears = require("gears")
local awful = require("awful")
local wibox = require("wibox")
local Theme	= require("beautiful")
-------------------------------------------------------------------------------------------------------------------
local get_layoutbox = function(s)
-------------------------------------------------------------------------------------------------------------------
local margin = Theme.UniversalSize * (1/5)
-------------------------------------------------------------------------------------------------------------------
    Theme.layout_tile 		  = gears.color.recolor_image(Theme.layout_tile, Theme.fg_normal)
    Theme.layout_fairh 		  = gears.color.recolor_image(Theme.layout_fairh, Theme.fg_normal)
    Theme.layout_fairv 		  = gears.color.recolor_image(Theme.layout_fairv, Theme.fg_normal)
    Theme.layout_floating 	= gears.color.recolor_image(Theme.layout_floating, Theme.fg_normal)
    Theme.layout_magnifier 	= gears.color.recolor_image(Theme.layout_magnifier, Theme.fg_normal)
    Theme.layout_max 		    = gears.color.recolor_image(Theme.layout_max, Theme.fg_normal)
    Theme.layout_fullscreen	= gears.color.recolor_image(Theme.layout_fullscreen, Theme.fg_normal)
    Theme.layout_tilebottom	= gears.color.recolor_image(Theme.layout_tilebottom, Theme.fg_normal)
    Theme.layout_tileleft 	= gears.color.recolor_image(Theme.layout_tileleft, Theme.fg_normal)
    Theme.layout_tiletop 	  = gears.color.recolor_image(Theme.layout_tiletop, Theme.fg_normal)
    Theme.layout_spiral 	  = gears.color.recolor_image(Theme.layout_spiral, Theme.fg_normal)
    Theme.layout_dwindle 	  = gears.color.recolor_image(Theme.layout_dwindle, Theme.fg_normal)
-------------------------------------------------------------------------------------------------------------------
	local layoutbox = wibox.widget
	{
		awful.widget.layoutbox(s),
		bottom 	= margin,
		top 	  = margin,
		left	  = margin,
		right	  = margin,
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
-------------------------------------------------------------------------------------------------------------------
return get_layoutbox
-------------------------------------------------------------------------------------------------------------------
