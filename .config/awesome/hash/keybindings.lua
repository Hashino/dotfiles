-- by Hashino https://github.com/Hashino/dotfiles
-------------------------------------------------------------------------------------------------------------------
local awful 		    = require("awful")
------------------------------------------------------------------------------------------------------------------
awful.keyboard.append_global_keybindings
({
  -- awesome controls
	awful.key({ Global.Keys.ModKey,           }, "s", require("awful.hotkeys_popup").widget.show_help,
		{description = "show help", group = "awesome"}),
	awful.key({ Global.Keys.ModKey, "Control" }, "r", awesome.restart,
		{description = "reload awesome", group = "awesome"}),
------------------------------------------------------------------------------------------------------------------
  -- client controls
	awful.key({ Global.Keys.ModKey,           }, "Tab",     awful.tag.viewnext,
		{description = "view next tag", group = "tag-nav"}),
	awful.key({ Global.Keys.ModKey,           }, "Right",   awful.tag.viewnext,
		{description = "view next tag", group = "tag-nav"}),
	awful.key({ Global.Keys.ModKey,    "Shift"}, "Tab",     awful.tag.viewprev,
		{description = "view pevious tag", group = "tag-nav"}),
	awful.key({ Global.Keys.ModKey,           }, "Left",    awful.tag.viewprev,
		{description = "view pevious tag", group = "tag-nav"}),
	awful.key({ Global.Keys.ModKey,           }, "j", function () awful.client.focus.byidx(1) end,
		{description = "focus next by index", group = "client"}),
	awful.key({ Global.Keys.ModKey,           }, "Down", function () awful.client.focus.byidx(1) end,
		{description = "focus next by index", group = "client"}),
	awful.key({ Global.Keys.ModKey,           }, "k", function () awful.client.focus.byidx(-1) end,
		{description = "focus previous by index", group = "client"}),
	awful.key({ Global.Keys.ModKey,           }, "Up", function () awful.client.focus.byidx(-1) end,
		{description = "focus previous by index", group = "client"}),
------------------------------------------------------------------------------------------------------------------
	awful.key({ Global.Keys.ModKey,           }, "d", function ()
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
  -- tag controls
	awful.key({ Global.Keys.ModKey,  "Control"}, "n",
		function ()
			if #root.tags() < 9 then
				awful.tag.add("", {
					screen = awful.screen.focused(),
					layout = awful.layout.layouts[1] }):view_only()
			end
		end,
		{description = "add tag", group = "tag-nav"}),
	awful.key({ Global.Keys.ModKey,  "Control"}, "x",
		function ()
			if #root.tags() > 1 then
				awful.screen.focused().selected_tag:delete()
			end
		end,
		{description = "remove tag", group = "tag-nav"}),
------------------------------------------------------------------------------------------------------------------
  -- Standard programs
	awful.key({ Global.Keys.ModKey,           }, "Return", function ()
		awful.spawn(Global.Apps.Terminal)
	end, {description = "open a terminal", group = "launcher"}),
	awful.key({ Global.Keys.ModKey,           }, "b", function ()
		awful.spawn(Global.Apps.Browser)
	end, {description = "launch Browser", group = "launcher"}),
	awful.key({ Global.Keys.ModKey,           }, "e", function ()
		awful.spawn(Global.Apps.Filemanager)
	end, {description = "launch filemanager", group = "launcher"}),
------------------------------------------------------------------------------------------------------------------
  -- rofi
	awful.key({ Global.Keys.ModKey },            "r",     function ()
		awful.spawn("rofi -show run")
	end, {description = "rofi run", group = "rofi"}),
	awful.key({ Global.Keys.ModKey },            "l",     function ()
		awful.spawn("rofi -show power-menu -modi power-menu:~/.local/bin/rofi-power-menu")
	end, {description = "rofi powermenu", group = "rofi"}),
	awful.key({ Global.Keys.ModKey },            "t",     function ()
		awful.spawn("rofi-todo -f todo")
	end, {description = "rofi todo", group = "rofi"}),
------------------------------------------------------------------------------------------------------------------
  -- screenshot
	awful.key({ Global.Keys.ModKey, "Control" }, "p",     function ()
		awful.spawn("scrot -s -o -f print.png -e 'xclip -selection clipboard -t image/png -i $f'")
	end, {description = "screenshot selection", group = "screenshot"}),
	awful.key({ Global.Keys.ModKey,           }, "p",     function ()
		awful.spawn("scrot -o -f print.png -e 'xclip -selection clipboard -t image/png -i $f'")
	end, {description = "screenshot entire screen", group = "screenshot"}),
------------------------------------------------------------------------------------------------------------------
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
------------------------------------------------------------------------------------------------------------------
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
		awful.key({ Global.Keys.ModKey }, "#" .. i + 9,
			function ()
				local screen = awful.screen.focused()
				local tag = screen.tags[i]
				if tag then
					tag:view_only()
				end
			end),
		-- Move client to tag.
		awful.key({ Global.Keys.ModKey, "Shift" }, "#" .. i + 9,
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
		awful.button({ Global.Keys.ModKey }, 1, awful.mouse.client.move),
		awful.button({ Global.Keys.ModKey }, 3, awful.mouse.client.resize)
    })
end)
-----------------------------------------------------------------------------------------------------------------------
client.connect_signal("request::default_keybindings", function()
	awful.keyboard.append_client_keybindings
	({
		awful.key({ Global.Keys.ModKey }, "x", function (c) c:kill() end,
        {description = "close", group = "client"}),
		awful.key({ Global.Keys.ModKey }, "n",
			function (c)
				-- The client currently has the input focus, so it cannot be
				-- minimized, since minimized clients can't have the focus.
				c.minimized = true
			end ,
			{description = "minimize", group = "client"}),
		awful.key({ Global.Keys.ModKey }, "m",
			function (c)
				c.maximized = not c.maximized
				c:raise()
			end ,
		{description = "(un)maximize", group = "client"}),

		awful.key({ Global.Keys.ModKey }, "f", awful.client.floating.toggle,
		{description = "toggle floating", group = "client"}),
		awful.key({ Global.Keys.ModKey, "Control" }, "f",
		function (c)
			c.fullscreen = not c.fullscreen
			c:raise()
		end,
		{description = "toggle fullscreen", group = "client"}),
	})
end)
------------------------------------------------------------------------------------------------------------------
