-- Standard awesome library
local gears = require("gears")
local awful = require("awful")
require("awful.autofocus")
-- Widget and layout library
local wibox = require("wibox")
-- Theme handling library
local beautiful = require("beautiful")
-- Notification library
local naughty = require("naughty")
local menubar = require("menubar")
local hotkeys_popup = require("awful.hotkeys_popup").widget



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




-- {{{ Variable definitions
-- Themes define colours, icons, font and wallpapers.
beautiful.init(awful.util.getdir("config") .. "/themes/theme.lua")

theme.layout_tile 	= gears.color.recolor_image(theme.layout_tile, theme.fg_normal)
theme.layout_fairh 	= gears.color.recolor_image(theme.layout_fairh, theme.fg_normal)
theme.layout_fairv 	= gears.color.recolor_image(theme.layout_fairv, theme.fg_normal)
theme.layout_floating 	= gears.color.recolor_image(theme.layout_floating, theme.fg_normal)
theme.layout_magnifier 	= gears.color.recolor_image(theme.layout_magnifier, theme.fg_normal)
theme.layout_max 	= gears.color.recolor_image(theme.layout_max, theme.fg_normal)
theme.layout_fullscreen	= gears.color.recolor_image(theme.layout_fullscreen, theme.fg_normal)
theme.layout_tilebottom	= gears.color.recolor_image(theme.layout_tilebottom, theme.fg_normal)
theme.layout_tileleft 	= gears.color.recolor_image(theme.layout_tileleft, theme.fg_normal)
theme.layout_tiletop 	= gears.color.recolor_image(theme.layout_tiletop, theme.fg_normal)
theme.layout_spiral 	= gears.color.recolor_image(theme.layout_spiral, theme.fg_normal)
theme.layout_dwindle 	= gears.color.recolor_image(theme.layout_dwindle, theme.fg_normal)

theme.titlebar_ontop_button_focus_inactive	= gears.color.recolor_image(theme.titlebar_ontop_button_focus_inactive, theme.fg_normal)
theme.titlebar_sticky_button_focus_inactive	= gears.color.recolor_image(theme.titlebar_sticky_button_focus_inactive, theme.fg_normal)
theme.titlebar_floating_button_focus_inactive	= gears.color.recolor_image(theme.titlebar_floating_button_focus_inactive, theme.fg_normal)
theme.titlebar_maximized_button_focus_inactive	= gears.color.recolor_image(theme.titlebar_maximized_button_focus_inactive, theme.fg_normal)
theme.titlebar_minimize_button_focus_inactive	= gears.color.recolor_image(theme.titlebar_minimize_button_focus_inactive, theme.fg_normal)
theme.titlebar_close_button_focus		= gears.color.recolor_image(theme.titlebar_close_button_focus, theme.fg_normal)
theme.titlebar_close_button_normal		= gears.color.recolor_image(theme.titlebar_close_button_normal, theme.fg_normal)


-- This is used later as the default terminal and editor to run.
terminal = "lxterminal"
browser = "firefox"
filemanager = "thunar"
editor = "mousepad"


modkey = "Mod4"

spacer =
{
    {
        layout = wibox.layout.fixed.horizontal,
        {
            right	= theme.universalsize / 6,
            widget = wibox.container.margin,
        },
    },
    bg = theme.transparent,
    widget = wibox.container.background
}

-- Table of layouts to cover with awful.layout.inc, order matters.
awful.layout.layouts = {
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

-- Create a wibox for each screen and add it
local taglist_buttons = gears.table.join(
    awful.button({ }, 1, function(t) t:view_only() end),
    awful.button({ modkey }, 1, function(t)
        if client.focus then
            client.focus:move_to_tag(t)
        end
    end),
    awful.button({ }, 3, awful.tag.viewtoggle),
    awful.button({ modkey }, 3, function(t)
        if client.focus then
            client.focus:toggle_tag(t)
        end
    end))

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

awful.screen.connect_for_each_screen(function(s)
    -- Wallpaper
    set_wallpaper(s)

    -- Each screen has its own tag table.
    awful.tag({ "  "}, s, awful.layout.layouts[1])

    -- Create a taglist widget
    --s.mytaglist = awful.widget.taglist(s, awful.widget.taglist.filter.all, taglist_buttons)


    -- Create a tasklist widget
    s.mytasklist =
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


    local systray = wibox.widget
    {
            wibox.widget.systray(),
            widget = wibox.container.margin
    }

    s.mylayoutbox = awful.widget.layoutbox {
        screen = s,
        -- Add buttons, allowing you to change the layout
        buttons = {
            awful.button({ }, 1, function () awful.layout.inc( 1) end),
            awful.button({ }, 3, function () awful.layout.inc(-1) end),
            awful.button({ }, 4, function () awful.layout.inc( 1) end),
            awful.button({ }, 5, function () awful.layout.inc(-1) end),
        }
    }

    -- Create the wibox
    s.mywibox = awful.wibar({ position = "top", screen = s, height = theme.universalsize, bg = theme.transparent })


    -- Add widgets to the wibox
    s.mywibox:setup
	{
		{
		    layout = wibox.layout.align.horizontal,
		    {
		    	layout = wibox.layout.fixed.horizontal,
				{
				    {
				        layout = wibox.layout.fixed.horizontal,
				        wibox.widget.textbox(" "),
				        {
				            s.mylayoutbox,
				            bottom 	= theme.universalsize / 8,
				            top 	= theme.universalsize / 8,
				            widget = wibox.container.margin,
				        },
				        wibox.widget.textbox(" "),
				    },
				    bg = theme.bg_accent3,
				    widget = wibox.container.background
				},
		        {
				    {
				        layout = wibox.layout.fixed.horizontal,
				        --wibox.widget.textbox(" "),
				        require("mytaglist")(s),
				        --wibox.widget.textbox(" "),
					},
					bg = theme.bg_accent2,
					widget = wibox.container.background
				},
			},
		    { -- Middle widget
		        s.mytasklist,
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
		        spacer,
		        {
		            {
		                layout = wibox.layout.fixed.horizontal,
		                {
		                    systray,
		                    bottom 	= theme.universalsize / 6,
		                    top 	= theme.universalsize / 6,
		                    left	= theme.universalsize * (2/3),
		                    right	= theme.universalsize * (2/3),
		                    widget = wibox.container.margin,
		                },
		            },
		            bg = theme.bg_accent2,
		            widget = wibox.container.background
		        },
		        {
		            {
		                layout = wibox.layout.fixed.horizontal,
		                wibox.widget.textbox("  "),
		                wibox.widget.textclock("%a"),
		                wibox.widget.textbox("  "),
		            },
		            bg = theme.bg_accent1,
		            widget = wibox.container.background
		        },
		        {
		            {
		                layout = wibox.layout.fixed.horizontal,
		                wibox.widget.textbox("  "),
		                wibox.widget.textclock("%d"),
		                wibox.widget.textbox("  "),
		            },
		            bg = theme.bg_accent2,
		            widget = wibox.container.background
		        },
		        {
		            {
		                layout = wibox.layout.fixed.horizontal,
		                wibox.widget.textbox("  "),
		                wibox.widget.textclock("%b"),
		                wibox.widget.textbox("  "),
		            },
		            bg = theme.bg_accent3,
		            widget = wibox.container.background
		        },
		        {
		            {
		                layout = wibox.layout.fixed.horizontal,
		                wibox.widget.textbox("  "),
		                wibox.widget.textclock("%H:%M"),
		                wibox.widget.textbox("  "),
		            },
		            bg = theme.bg_accent1,
		            widget = wibox.container.background
		        },
		    },
	    },
        top 	= theme.universalsize / 12,
        left	= theme.universalsize / 4,
        right	= theme.universalsize / 4,
        widget = wibox.container.margin,
    }
end)


-- }}}

-- {{{ Key bindings
globalkeys = gears.table.join(
    awful.key({ modkey,           }, "s",      hotkeys_popup.show_help,
        {description="show help", group="awesome"}),
    awful.key({ modkey, "Control" }, "r", awesome.restart,
        {description = "reload awesome", group = "awesome"}),


    awful.key({ modkey,           }, "Tab",   awful.tag.viewnext,
        {description = "view next tag", group = "tag-nav"}),
    awful.key({ modkey,    "Shift"}, "Tab",  awful.tag.viewprev,
        {description = "view pevious tag", group = "tag-nav"}),


    awful.key({ modkey,  "Control"}, "n",
        function ()
            if #root.tags() < 9 then
                awful.tag.add("", {
                    screen = awful.screen.focused(),
                    layout = awful.layout.layouts[1] }):view_only()
            end
        end,
        {description = "add tag", group = "tag-nav"}),
    awful.key({ modkey,  "Control"}, "x",
        function ()
            if #root.tags() > 1 then
                awful.screen.focused().selected_tag:delete()
            end
        end,
        {description = "remove tag", group = "tag-nav"}),



    awful.key({ modkey,           }, "j", function () awful.client.focus.byidx(1) end,
        {description = "focus next by index", group = "client"}),
    awful.key({ modkey,           }, "k", function () awful.client.focus.byidx(-1) end,
        {description = "focus previous by index", group = "client"}),

    awful.key({ modkey,           }, "d", function ()
        if #awful.screen.focused().clients > 0 then
            for _, c in ipairs(mouse.screen.selected_tag:clients()) do
                c.minimized = true
            end
        else
            for _, c in ipairs(mouse.screen.selected_tag:clients()) do
                c.minimized = false
            end
        end
    end,
    {description = "(un)minimize all clients", group = "client"}),

    -- Standard program
    awful.key({ modkey,           }, "Return", function () awful.spawn(terminal) end,
        {description = "open a terminal", group = "launcher"}),
    awful.key({ modkey, Shift     }, "b", function () awful.spawn(browser) end,
        {description = "launch Browser", group = "launcher"}),
    awful.key({ modkey,           }, "e", function () awful.spawn(filemanager) end,
        {description = "launch filemanager", group = "launcher"}),


    -- rofi
    awful.key({ modkey },            "r",     function () awful.spawn("rofi -show run") end,
        {description = "rofi run", group = "rofi"}),
    awful.key({ modkey },            "l",     function () awful.spawn("rofi -show power-menu -modi power-menu:rofi-power-menu") end,
        {description = "rofi powermenu", group = "rofi"}),
    awful.key({ modkey },            "t",     function () awful.spawn("rofi-todo -f todo") end,
        {description = "rofi todo", group = "rofi"}),



    --screenshot
    awful.key({ modkey, "Control" }, "p",     function () awful.spawn("scrot -s -o -f print.png -e 'xclip -selection clipboard -t image/png -i $f'") end,
        {description = "screenshot selection", group = "screenshot"}),
    awful.key({ modkey,           }, "p",     function () awful.spawn("scrot -o -f print.png -e 'xclip -selection clipboard -t image/png -i $f'") end,
        {description = "screenshot entire screen", group = "screenshot"}),

    awful.key({ }, "XF86AudioLowerVolume",     function () awful.spawn("amixer -q sset Master 5%-") end,
        {description = "volume up", group = "volume"}),
    awful.key({ }, "XF86AudioRaiseVolume",     function () awful.spawn("amixer -q sset Master 5%+") end,
        {description = "volume down", group = "volume"})


--XF86AudioLowerVolume
--XF86AudioRaiseVolume
)

clientkeys = gears.table.join(
    awful.key({ modkey,           }, "x",      function (c) c:kill()                         end,
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

    awful.key({ modkey,           }, "f",  awful.client.floating.toggle                     ,
              {description = "toggle floating", group = "client"})
)

-- Bind all key numbers to tags.
-- Be careful: we use keycodes to make it work on any keyboard layout.
-- This should map on the top row of your keyboard, usually 1 to 9.
for i = 1, 9 do
    globalkeys = gears.table.join(globalkeys,
        -- View tag only.
        awful.key({ modkey }, "#" .. i + 9,
            function ()
                local screen = awful.screen.focused()
                local tag = screen.tags[i]
                if tag then
                    tag:view_only()
                end
            end,
            {description = "view tag #"..i, group = "tag"}),
        -- Move client to tag.
        awful.key({ modkey, "Shift" }, "#" .. i + 9,
            function ()
                if client.focus then
                    local tag = client.focus.screen.tags[i]
                    if tag then
                        client.focus:move_to_tag(tag)
                    end
                end
            end,
            {description = "move focused client to tag #"..i, group = "tag"})
    )
end

clientbuttons = gears.table.join(
    awful.button({ }, 1, function (c) client.focus = c; c:raise() end),
    awful.button({ modkey }, 1, awful.mouse.client.move),
    awful.button({ modkey }, 3, awful.mouse.client.resize))

-- Set keys
root.keys(globalkeys)
-- }}}

-- {{{ Rules
-- Rules to apply to new clients (through the "manage" signal).
awful.rules.rules = {
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
    { rule_any = {
        instance = {
            "DTA",  -- Firefox addon DownThemAll.
            "copyq",  -- Includes session name in class.
        },
        class = {
            "Arandr",
            "Gpick",
            "Kruler",
            "MessageWin",  -- kalarm.
            "Sxiv",
            "Wpa_gui",
            "pinentry",
            "veromix",
            "xtightvncviewer"},

        name = {
            "Event Tester",  -- xev.
        },
        role = {
            "AlarmWindow",  -- Thunderbird's calendar.
            "pop-up",       -- e.g. Google Chrome's (detached) Developer Tools.
        }
    }, properties = { floating = true }},

    -- Add titlebars to normal clients and dialogs
    { rule_any = {type = { "normal", "dialog" } },
        properties = { titlebars_enabled = true }
    },
}
-- }}}

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

-- Add a titlebar if titlebars_enabled is set to true in the rules.
client.connect_signal("request::titlebars", function(c)
    -- buttons for the titlebar
    local buttons = gears.table.join(
        awful.button({ }, 1, function()
            client.focus = c
            c:raise()
            awful.mouse.client.move(c)
        end),
        awful.button({ }, 3, function()
            client.focus = c
            c:raise()
            awful.mouse.client.resize(c)
        end)
    )

    awful.titlebar(c) : setup {
        { -- Left
            buttons = buttons,
            layout  = wibox.layout.fixed.horizontal
        },
        { -- Middle
            { -- Title
                align  = "center",
                widget = awful.titlebar.widget.titlewidget(c)
        },
        buttons = buttons,
        layout  = wibox.layout.flex.horizontal
        },
        { -- Right
            awful.titlebar.widget.minimizebutton (c),
            awful.titlebar.widget.floatingbutton (c),
            awful.titlebar.widget.maximizedbutton (c),
            awful.titlebar.widget.closebutton (c),
            layout = wibox.layout.fixed.horizontal()
        },
        layout = wibox.layout.align.horizontal
    }
end)

-- Enable sloppy focus, so that focus follows mouse.
client.connect_signal("mouse::enter", function(c)
    if awful.layout.get(c.screen) ~= awful.layout.suit.magnifier
        and awful.client.focus.filter(c) then
        client.focus = c
    end
end)

client.connect_signal("focus", function(c) c.border_color = beautiful.border_focus end)
client.connect_signal("unfocus", function(c) c.border_color = beautiful.border_normal end)

-- Disable borders/titlebars on lone windows
-- Handle border sizes of clients.
for s = 1, screen.count() do screen[s]:connect_signal("arrange", function ()
    local clients = awful.client.visible(s)
    local layout = awful.layout.getname(awful.layout.get(s))

    for _, c in pairs(clients) do
        -- No titlebar with only one humanly visible client
    	if c.maximized then
            awful.titlebar.hide(c)
            --c.border_width = 0
        elseif c.floating or layout == "floating" then
            --awful.titlebar.show(c)
            awful.titlebar.hide(c)
            --c.border_width = theme.border_width
        elseif layout == "max" or layout == "fullscreen" then
            awful.titlebar.hide(c)
            --c.border_width = 0
        else
            local tiled = awful.client.tiled(c.screen)
            if #tiled == 1 then -- and c == tiled[1] then
                awful.titlebar.hide(c)
                --c.border_width = 0
            else
                --awful.titlebar.show(c)
                awful.titlebar.hide(c)
                --c.border_width = theme.border_width
            end
        end
    end
end)
end

-- }}}

awful.spawn.with_shell("~/.config/awesome/autorun.sh")
