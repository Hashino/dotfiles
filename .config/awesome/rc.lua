-- Standard awesome library
local gears 	= require("gears")
local awful 	= require("awful")
require("awful.autofocus")
local wibox 	= require("wibox")
local beautiful	= require("beautiful")
beautiful.init(awful.util.getdir("config") .. "/themes/theme.lua")
local menubar 	= require("menubar")
local naughty 	= require("naughty")
--------------------------------------------------------------------------------------------------
-- {{{ Error handling
-- Check if awesome encountered an error during startup and fell back to
-- another config (This code will only ever execute for the fallback config)
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
--------------------------------------------------------------------------------------------------
theme.layout_tile 		= gears.color.recolor_image(theme.layout_tile, theme.fg_normal)
theme.layout_fairh 		= gears.color.recolor_image(theme.layout_fairh, theme.fg_normal)
theme.layout_fairv 		= gears.color.recolor_image(theme.layout_fairv, theme.fg_normal)
theme.layout_floating 	= gears.color.recolor_image(theme.layout_floating, theme.fg_normal)
theme.layout_magnifier 	= gears.color.recolor_image(theme.layout_magnifier, theme.fg_normal)
theme.layout_max 		= gears.color.recolor_image(theme.layout_max, theme.fg_normal)
theme.layout_fullscreen	= gears.color.recolor_image(theme.layout_fullscreen, theme.fg_normal)
theme.layout_tilebottom	= gears.color.recolor_image(theme.layout_tilebottom, theme.fg_normal)
theme.layout_tileleft 	= gears.color.recolor_image(theme.layout_tileleft, theme.fg_normal)
theme.layout_tiletop 	= gears.color.recolor_image(theme.layout_tiletop, theme.fg_normal)
theme.layout_spiral 	= gears.color.recolor_image(theme.layout_spiral, theme.fg_normal)
theme.layout_dwindle 	= gears.color.recolor_image(theme.layout_dwindle, theme.fg_normal)
--------------------------------------------------------------------------------------------------
-- {{{ Variable definitions
-- Themes define colours, icons, font and wallpapers.
-- This is used later as the default terminal and editor to run.
terminal = "lxterminal"
browser = "firefox"
filemanager = "thunar"
editor = "mousepad"
modkey = "Mod4"
--------------------------------------------------------------------------------------------------
thin_spacer =
{
    {
        layout = wibox.layout.fixed.horizontal,
        {
            right	= theme.spacing / 4,
            widget = wibox.container.margin,
        },
    },
    bg = theme.transparent,
    widget = wibox.container.background
}

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
--------------------------------------------------------------------------------------------------
-- Table of layouts to cover with awful.layout.inc, order matters.
awful.layout.layouts = 
{
    awful.layout.suit.tile,
    --awful.layout.suit.tile.left,
    --awful.layout.suit.tile.top,
    awful.layout.suit.tile.bottom,
    awful.layout.suit.max,
    awful.layout.suit.floating,
    awful.layout.suit.fair,
    --awful.layout.suit.fair.horizontal,
    --awful.layout.suit.spiral,
    --awful.layout.suit.spiral.dwindle,
    --awful.layout.suit.max.fullscreen,
    --awful.layout.suit.magnifier,
    --awful.layout.suit.corner.nw,
    --awful.layout.suit.corner.ne,
    --awful.layout.suit.corner.sw,
    --awful.layout.suit.corner.se,
}
-- }}}
--------------------------------------------------------------------------------------------------
local function set_wallpaper(s)
    -- Wallpaper
    if beautiful.wallpaper then
        local wallpaper = beautiful.wallpaper
        -- If wallpaper is a function, call it with the screen
        if type(wallpaper) == "function" then
            wallpaper = wallpaper(s)
        end
        gears.wallpaper.maximized(wallpaper, s, true)
    end
end

-- Re-set wallpaper when a screen's geometry changes (e.g. different resolution)
screen.connect_signal("property::geometry", set_wallpaper)
--------------------------------------------------------------------------------------------------
-- {{{ Screen setup
awful.screen.connect_for_each_screen(function(s)
    -- Wallpaper
    set_wallpaper(s)

    -- Each screen has its own tag table.
    awful.tag({ "  ", "  ", "  ", "  ", "  " }, s, awful.layout.layouts[1])
        
    -- Margin around layoutbox
    s.mylayoutbox = wibox.widget
    {
        awful.widget.layoutbox(s),
        bottom 	= theme.universalsize / 6,
        top 	= theme.universalsize / 6,
        left	= theme.universalsize / 4,
        right	= theme.universalsize / 4,
        widget	= wibox.container.margin,
    }    
    s.mylayoutbox:buttons 
    ({
        awful.button({ }, 1, function () awful.layout.inc( 1) end),
        awful.button({ }, 3, function () awful.layout.inc(-1) end),
        awful.button({ }, 4, function () awful.layout.inc( 1) end),
        awful.button({ }, 5, function () awful.layout.inc(-1) end),
    })
    
    -- Systray
    s.systray = wibox.widget
    {
        wibox.widget.systray(),
        bottom 	= theme.universalsize / 6,
        top 	= theme.universalsize / 6,
        left	= theme.universalsize * (2/3),
        right	= theme.universalsize * (2/3),
        widget = wibox.container.margin
    }
    
    -- Time and date
    s.myclock = wibox.widget
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
    
	-- Create the wibox
    s.mywibox = awful.wibar({ position = "top", screen = s, height = theme.universalsize, bg = theme.transparent })
	
	-- Add widgets to the wibox
    s.mywibox:setup
	{
		{
		    layout = wibox.layout.align.horizontal,
		    { -- Left widget
		    	layout = wibox.layout.fixed.horizontal,
				{
				    require("layoutbox")(s),
				    bg = theme.bg_accent3,
				    widget = wibox.container.background
				},
		        {
			        require("taglist")(s),
					bg = theme.bg_accent2,
					widget = wibox.container.background
				},
			},
		    { -- Middle widget
		        require("tasklist")(s),
		        bg = theme.transparent,
		        widget = wibox.container.background
		    },
		    { -- Right widgets
		        layout = wibox.layout.fixed.horizontal,
		        {
		        	require("player"),
		            bg = theme.bg_accent3,
		            widget = wibox.container.background
		        },
		        thin_spacer,
		        {
                    s.systray,
		            bg = theme.bg_accent2,
		            widget = wibox.container.background
		        },
		        s.myclock,
		    },
	    },
        left	= theme.useless_gap * 2,
        right	= theme.useless_gap * 2,
        widget = wibox.container.margin,
    }
end)
-- }}}
--------------------------------------------------------------------------------------------------
-- {{{ Clients
clientkeys = gears.table.join
(
    awful.key({ modkey,           }, "x",      function (c) c:kill() end,
        {description = "close", group = "client"}),
    awful.key({ modkey,           }, "n",
        function (c)
            -- The client currently has the input focus, so it cannot be
            -- minimized, since minimized clients can't have the focus.
            c.minimized = true
        end ,
        {description = "minimize", group = "client"}),
    awful.key({ modkey,           }, "m",
        function (c)
            c.maximized = not c.maximized
            c:raise()
        end ,
        {description = "(un)maximize", group = "client"}),

    awful.key({ modkey,           }, "f",  awful.client.floating.toggle,
              {description = "toggle floating", group = "client"})
)

clientbuttons = gears.table.join
(
    awful.button({ }, 1, function (c) client.focus = c; c:raise() end),
    awful.button({ modkey }, 1, awful.mouse.client.move),
    awful.button({ modkey }, 3, awful.mouse.client.resize)
)


-- {{{ Rules
-- Rules to apply to new clients (through the "manage" signal).
awful.rules.rules = 
{
    -- All clients will match this rule.
    { rule = { },
        properties = {
            border_width = beautiful.border_width,
            border_color = beautiful.border_normal,
            focus = awful.client.focus.filter,
            raise = true,
            keys = clientkeys,
            buttons = clientbuttons,
            size_hints_honor = false, -- Remove gaps between terminals
            screen = awful.screen.preferred,
            callback = awful.client.setslave,
            placement = awful.placement.no_overlap+awful.placement.no_offscreen
        }
    },

    -- Floating clients.
    { 
		rule_any = 
		{
		    instance = 
		    {
		    	
		    },
		    class = 
		    {
		    	
	        },
		    name = 
		    {
		        "Event Tester",  -- xev.
		    },
		    role = 
		    {
		        "pop-up",       -- e.g. Google Chrome's (detached) Developer Tools.
		    }
		}, 
		properties = { floating = true }},

		-- Add titlebars to normal clients and dialogs
		{ rule_any = {type = { "normal", "dialog" } },
		    properties = { titlebars_enabled = false }
    },
}
-- }}}
-- }}}
--------------------------------------------------------------------------------------------------

-- {{{ Signals

-- Signal function to execute when a new client appears.
client.connect_signal("manage", function (c)
    -- Set the windows at the slave,
    -- i.e. put it at the end of others instead of setting it master.
    -- if not awesome.startup then awful.client.setslave(c) end
    if awesome.startup and
        not c.size_hints.user_position
        and not c.size_hints.program_position then
        -- Prevent clients from being unreachable after screen count changes.
        awful.placement.no_offscreen(c)
    end
end)


-- Enable sloppy focus, so that focus follows mouse.
client.connect_signal("mouse::enter", function(c)
    if awful.layout.get(c.screen) ~= awful.layout.suit.magnifier
        and awful.client.focus.filter(c) then
        client.focus = c
    end
end)

client.connect_signal("focus", function(c) 
	c.border_color = beautiful.border_focus
end)
client.connect_signal("unfocus", function(c) c
	.border_color = beautiful.border_normal
end)


--[[
-- Disable borders/titlebars on lone windows
-- Handle border sizes of clients.
for s = 1, screen.count() do screen[s]:connect_signal("arrange", 
function ()
    local clients = awful.client.visible(s)
    local layout = awful.layout.getname(awful.layout.get(s))

    for _, c in pairs(clients) do
        -- No titlebar with only one humanly visible client
    	if c.maximized then
            ---awful.titlebar.hide(c)
            --c.border_width = 0
        elseif c.floating or layout == "floating" then
            --awful.titlebar.show(c)
            --awful.titlebar.hide(c)
            --c.border_width = theme.border_width
        elseif layout == "max" or layout == "fullscreen" then
            --awful.titlebar.hide(c)
            --c.border_width = 0
        else
            local tiled = awful.client.tiled(c.screen)
            if #tiled == 1 then -- and c == tiled[1] then
                --awful.titlebar.hide(c)
                --c.border_width = 0
            else
                --awful.titlebar.show(c)
                --awful.titlebar.hide(c)
                --c.border_width = theme.border_width
            end
        end
    end
end)
]]--

-- }}}

--------------------------------------------------------------------------------------------------
-- Set global keys
root.keys(require("globalkeys")(s))
--------------------------------------------------------------------------------------------------
awful.spawn.with_shell("~/.config/awesome/autorun.sh")
