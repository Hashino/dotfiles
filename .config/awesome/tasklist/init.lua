-- by Hashino https://github.com/Hashino/dotfiles
-------------------------------------------------
local awful 	= require("awful")
local gears 	= require("gears")
local wibox 	= require("wibox")
local beautiful = require("beautiful")
-------------------------------------------------
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
-------------------------------------------------
local get_tasklist = function(s)

	local tasklist_buttons = gears.table.join(
		awful.button({ }, 1, function (c)
		    -- Without this, the following
		    -- :isvisible() makes no sense
		    c.minimized = false
		    if not c:isvisible() and c.first_tag then
		        c.first_tag:view_only()
		    end
		    -- This will also un-minimize
		    -- the client, if needed
		    client.focus = c
		    c:raise()
		end), awful.button({ }, 3, function (c)
		    -- Without this, the following
		    -- :isvisible() makes no sense
		    c:kill()
		end)
	)
	
	local mytasklist =
	{
		{
			awful.widget.tasklist
			{
				screen   = s,
				filter   = awful.widget.tasklist.filter.minimizedcurrenttags,
				buttons  = tasklist_buttons,
				layout   = {
					--max_widget_size = 400,
					spacing = 0,
					layout  = wibox.layout.flex.horizontal
				},
				widget_template =
				{
					{
					    {
					        {
					            id     = "text_role",
					            widget = wibox.widget.textbox,
					        },
					        valign = "center",
					        halign = "center",
					        widget = wibox.container.place,
					    },
					    bg     = theme.bg_accent2,
					    widget = wibox.container.background,
					},
					left  = theme.universalsize / 10,
					right = theme.universalsize / 10,
					widget = wibox.container.margin
				},
			},
			bg     = theme.transparent,
			widget = wibox.container.background,
		},
		left  = theme.universalsize / 10,
		right = theme.universalsize / 10,
		widget = wibox.container.margin
	}
	
	return mytasklist
end
----------------------------------------------------------------------
return get_tasklist