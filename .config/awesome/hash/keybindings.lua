-- by Hashino https://github.com/Hashino/dotfiles
-------------------------------------------------------------------------------------------------------------------
local awful 		= require("awful")
local gears 		= require("gears")
local hotkeys_popup	= require("awful.hotkeys_popup").widget
------------------------------------------------------------------------------------------------------------------
awful.keyboard.append_global_keybindings
({
	--
  -- awesome controls
	awful.key({ modkey,           }, "s", hotkeys_popup.show_help,
		{description = "show help", group = "awesome"}),
	awful.key({ modkey, "Control" }, "r", awesome.restart,
		{description = "reload awesome", group = "awesome"}),
------------------------------------------------------------------------------------------------------------------
	--
  -- client controls
	awful.key({ modkey,           }, "Tab",     awful.tag.viewnext,
		{description = "view next tag", group = "tag-nav"}),
	awful.key({ modkey,           }, "Right",   awful.tag.viewnext,
		{description = "view next tag", group = "tag-nav"}),
	awful.key({ modkey,    "Shift"}, "Tab",     awful.tag.viewprev,
		{description = "view pevious tag", group = "tag-nav"}),
	awful.key({ modkey,           }, "Left",    awful.tag.viewprev,
		{description = "view pevious tag", group = "tag-nav"}),
	awful.key({ modkey,           }, "j", function () awful.client.focus.byidx(1) end,
		{description = "focus next by index", group = "client"}),
	awful.key({ modkey,           }, "Down", function () awful.client.focus.byidx(1) end,
		{description = "focus next by index", group = "client"}),
	awful.key({ modkey,           }, "k", function () awful.client.focus.byidx(-1) end,
		{description = "focus previous by index", group = "client"}),
	awful.key({ modkey,           }, "Up", function () awful.client.focus.byidx(-1) end,
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
------------------------------------------------------------------------------------------------------------------
	--
  -- tag controls
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
------------------------------------------------------------------------------------------------------------------
	--
  -- Standard programs
	awful.key({ modkey,           }, "Return", function ()
		awful.spawn(terminal)
	end, {description = "open a terminal", group = "launcher"}),
	awful.key({ modkey,           }, "b", function ()
		awful.spawn(browser)
	end, {description = "launch Browser", group = "launcher"}),
	awful.key({ modkey,           }, "e", function ()
		awful.spawn(filemanager)
	end, {description = "launch filemanager", group = "launcher"}),
------------------------------------------------------------------------------------------------------------------
	--
  -- rofi
	awful.key({ modkey },            "r",     function ()
		awful.spawn("rofi -show run")
	end, {description = "rofi run", group = "rofi"}),
	awful.key({ modkey },            "l",     function ()
		awful.spawn("rofi -show power-menu -modi power-menu:~/.local/bin/rofi-power-menu")
	end, {description = "rofi powermenu", group = "rofi"}),
	awful.key({ modkey },            "t",     function ()
		awful.spawn("rofi-todo -f todo")
	end, {description = "rofi todo", group = "rofi"}),
------------------------------------------------------------------------------------------------------------------
	--
  -- screenshot
	awful.key({ modkey, "Control" }, "p",     function ()
		awful.spawn("scrot -s -o -f print.png -e 'xclip -selection clipboard -t image/png -i $f'")
	end, {description = "screenshot selection", group = "screenshot"}),
	awful.key({ modkey,           }, "p",     function ()
		awful.spawn("scrot -o -f print.png -e 'xclip -selection clipboard -t image/png -i $f'")
	end, {description = "screenshot entire screen", group = "screenshot"}),
------------------------------------------------------------------------------------------------------------------
	--
  -- media
	awful.key({ }, "XF86AudioRaiseVolume",     function ()
		awful.spawn("pactl -- set-sink-volume 0 +3%")
	end, {description = "volume +/-", group = "media"}),
	awful.key({ }, "XF86AudioLowerVolume",     function ()
		awful.spawn("pactl -- set-sink-volume 0 -3%")
	end, {description = "volume +/-", group = "media"}),
	awful.key({ }, "XF86AudioMute",     function ()
		awful.spawn("pactl set-sink-mute 0 toggle")
	end, {description = "(un)mute", group = "media"}),
	awful.key({ }, "XF86AudioPlay",     function ()
		awful.spawn("playerctl play-pause")
	end, {description = "play/pause", group = "media"}),
	awful.key({ }, "XF86AudioPrev",     function ()
		awful.spawn("playerctl previous")
	end, {description = "previous", group = "media"}),
	awful.key({ }, "XF86AudioNext",     function ()
		awful.spawn("playerctl next")
	end, {description = "next", group = "media"}),
  --
  -- control
	awful.key({ }, "XF86MonBrightnessUp",     function ()
		awful.spawn("brightnessctl s +5%")
	end, {description = "brightness +/-", group = "control"}),
	awful.key({ }, "XF86MonBrightnessDown",     function ()
		awful.spawn("brightnessctl s 5%-")
	end, {description = "brightness +/-", group = "control"}),
})
------------------------------------------------------------------------------------------------------------------
-- Bind all key numbers to tags.
-- Be careful: we use keycodes to make it work on any keyboard layout.
-- This should map on the top row of your keyboard, usually 1 to 9.
for i = 1, 9 do awful.keyboard.append_global_keybindings ({
		-- View tag only.
		awful.key({ modkey }, "#" .. i + 9,
			function ()
				local screen = awful.screen.focused()
				local tag = screen.tags[i]
				if tag then
					tag:view_only()
				end
			end),
		-- Move client to tag.
		awful.key({ modkey, "Shift" }, "#" .. i + 9,
			function ()
				if client.focus then
					local tag = client.focus.screen.tags[i]
					if tag then
						client.focus:move_to_tag(tag)
					end
				end
			end)
	})
end
------------------------------------------------------------------------------------------------------------------
client.connect_signal("request::default_mousebindings", function()
    awful.mouse.append_client_mousebindings({
		awful.button({ }, 1, function (c) client.focus = c; c:raise() end),
		awful.button({ modkey }, 1, awful.mouse.client.move),
		awful.button({ modkey }, 3, awful.mouse.client.resize)
    })
end)
-----------------------------------------------------------------------------------------------------------------------
client.connect_signal("request::default_keybindings", function()
	awful.keyboard.append_client_keybindings
	({
		awful.key({ modkey }, "x", function (c) c:kill() end,
        {description = "close", group = "client"}),
		awful.key({ modkey }, "n",
			function (c)
				-- The client currently has the input focus, so it cannot be
				-- minimized, since minimized clients can't have the focus.
				c.minimized = true
			end ,
			{description = "minimize", group = "client"}),
		awful.key({ modkey }, "m",
			function (c)
				c.maximized = not c.maximized
				c:raise()
			end ,
		{description = "(un)maximize", group = "client"}),

		awful.key({ modkey }, "f", awful.client.floating.toggle,
		{description = "toggle floating", group = "client"}),
		awful.key({ modkey, "Control" }, "f",
		function (c)
			c.fullscreen = not c.fullscreen
			c:raise()
		end,
		{description = "toggle fullscreen", group = "client"}),
	})
end)
------------------------------------------------------------------------------------------------------------------
