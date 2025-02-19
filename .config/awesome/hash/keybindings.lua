-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local awful = require("awful")
local utils = require("hash.utils")
--------------------------------------------------------------------------------
local function spawn_in_new_tag(app)
  if #root.tags() < 9 then
    local tag = awful.tag
       .add("", {
         screen   = awful.screen.focused(),
         layout   = awful.layout.layouts[1],
         volatile = true,
         index    = awful.screen.focused().selected_tag.index + 1,
       })
    tag:view_only()
    awful.spawn(app)
  end
end

awful.keyboard.append_global_keybindings({
  ------------------------------------------------------------------------------
  -- custom actions
  awful.key({ Global.Keys.ModKey, "Control", }, "w", function()
    awful.spawn("input_switch_237e")
  end, { description = "change monitor input", group = "custom actions", }),

  awful.key({ Global.Keys.ModKey, }, "w", function() awful.spawn("win") end,
    { description = "turn on windows vm (if it wasn't) and shows it", group = "custom actions", }),
  awful.key({ Global.Keys.ModKey, }, "c", function()
      awful.spawn(Global.Apps.Terminal .. " -e qlock", {
        titlebars_enabled = false,
        floating = true,
        sticky = true,
        focus = false,
        width = 770,
        height = 310,
        placement = awful.placement.bottom_right,
      })
    end,
    { description = "open qlock", group = "custom actions", }),

  ------------------------------------------------------------------------------
  -- awesome controls
  awful.key({ Global.Keys.ModKey, }, "s",
    require("awful.hotkeys_popup").widget.show_help,
    { description = "show help", group = "awesome", }),

  awful.key({ Global.Keys.ModKey, "Control", }, "r", awesome.restart,
    { description = "reload awesome", group = "awesome", }),

  --------------------------------------------------------------------------------
  -- screen controls
  awful.key({ Global.Keys.ModKey, "Control", }, "j", function()
    awful.screen.focus_relative(1)
  end, { description = "focus next screen", group = "tag-nav", }),

  awful.key({ Global.Keys.ModKey, "Control", }, "k", function()
    awful.screen.focus_relative(-1)
  end, { description = "focus previous screen", group = "tag-nav", }),

  ------------------------------------------------------------------------------
  -- tag navigation
  awful.key({ Global.Keys.ModKey, }, "Tab", awful.tag.viewnext,
    { description = "view next tag", group = "tag-nav", }),

  awful.key({ Global.Keys.ModKey, }, "l", awful.tag.viewnext,
    { description = "view next tag", group = "tag-nav", }),

  awful.key({ Global.Keys.ModKey, "Shift", }, "Tab", awful.tag.viewprev,
    { description = "view previous tag", group = "tag-nav", }),

  awful.key({ Global.Keys.ModKey, }, "h", awful.tag.viewprev,
    { description = "view previous tag", group = "tag-nav", }),

  ------------------------------------------------------------------------------
  -- tag controls
  awful.key({ Global.Keys.ModKey, "Control", }, "n", function()
    if #root.tags() < 9 then
      awful.tag
         .add("", {
           screen = awful.screen.focused(),
           layout = awful.layout.layouts[1],
           index  = awful.screen.focused().selected_tag.index + 1,
         }):view_only()
    end
  end, { description = "add tag", group = "tag", }),

  awful.key({ Global.Keys.ModKey, "Control", }, "q", function()
    if #root.tags() > 1 then
      awful.screen.focused().selected_tag:delete()
    end
  end, { description = "remove tag", group = "tag", }),

  awful.key({ Global.Keys.ModKey, "Control", }, "j", function()
    if #root.tags() > 1 then
      awful.layout.inc(1)
    end
  end, { description = "next tag layout", group = "tag", }),
  awful.key({ Global.Keys.ModKey, "Control", }, "k", function()
    if #root.tags() > 1 then
      awful.layout.inc(-1)
    end
  end, { description = "previous tag layout", group = "tag", }),

  ------------------------------------------------------------------------------
  -- launcher
  awful.key({ Global.Keys.ModKey, }, "Return", function()
    awful.spawn(Global.Apps.Terminal)
  end, { description = "open a terminal", group = "launcher", }),

  awful.key({ Global.Keys.ModKey, "Shift", }, "Return", function()
    spawn_in_new_tag(Global.Apps.Terminal)
  end, { description = "open a terminal in a new tag", group = "launcher", }),

  awful.key({ Global.Keys.ModKey, }, "v", function() awful.spawn("neovide") end,
    { description = "open neovide", group = "launcher", }),

  awful.key({ Global.Keys.ModKey, "Shift", }, "v", function()
    spawn_in_new_tag("neovide")
  end, { description = "open a neovide in a new tag", group = "launcher", }),

  awful.key({ Global.Keys.ModKey, }, "r", function()
    awful.spawn("rofi -show run")
  end, { description = "application launcher", group = "launcher", }),

  awful.key({ Global.Keys.ModKey, "Shift", }, "r", function()
    spawn_in_new_tag("rofi -show run")
  end, { description = "open launcher in a new tag", group = "launcher", }),

  awful.key({ Global.Keys.ModKey, }, "b", function()
    awful.spawn(Global.Apps.Browser)
  end, { description = "launch browser", group = "launcher", }),

  awful.key({ Global.Keys.ModKey, "Shift", }, "b", function()
    spawn_in_new_tag(Global.Apps.Browser)
  end, { description = "launch browser in a new tag", group = "launcher", }),

  awful.key({ Global.Keys.ModKey, }, "e", function()
    awful.spawn(Global.Apps.Filemanager)
  end, { description = "launch filemanager", group = "launcher", }),

  awful.key({ Global.Keys.ModKey, "Shift", }, "e", function()
    spawn_in_new_tag(Global.Apps.Filemanager)
  end, { description = "launch filemanager in a new tag", group = "launcher", }),

  ------------------------------------------------------------------------------
  -- rofi utilities
  awful.key({ Global.Keys.ModKey, }, "Escape", function()
    awful.spawn("rofi -show power-menu -modi power-menu:~/.dotfiles/.local/bin/rofi-power-menu")
  end, { description = "rofi powermenu", group = "rofi utilities", }),

  awful.key({ Global.Keys.ModKey, }, "KP_Subtract", function()
    awful.spawn(
      "rofi -show monitor-profile -modi monitor-profile:~/.dotfiles/.local/bin/monitor_config")
  end, { description = "rofi monitor config", group = "rofi utilities", }),

  ------------------------------------------------------------------------------
  -- screenshot
  awful.key({ Global.Keys.ModKey, "Control", }, "p", function()
    awful.spawn(
      "flameshot gui")
  end, { description = "screenshot selection", group = "screenshot", }),

  ------------------------------------------------------------------------------
  -- media
  awful.key({}, "XF86AudioRaiseVolume", function()
    awful.spawn("pactl -- set-sink-volume 0 +3%")
    utils.show_volume_notification()
  end, { description = "volume +/-", group = "media", }),

  awful.key({}, "XF86AudioLowerVolume", function()
    awful.spawn("pactl -- set-sink-volume 0 -3%")
    utils.show_volume_notification()
  end, { description = "volume +/-", group = "media", }),

  awful.key({}, "XF86AudioMute", function()
    awful.spawn("pactl set-sink-mute 0 toggle")
    utils.show_volume_notification()
  end, { description = "(un)mute", group = "media", }),

  awful.key({}, "XF86AudioPlay", function()
    awful.spawn("playerctl -a play-pause")
  end, { description = "play/pause", group = "media", }),

  awful.key({}, "XF86AudioPrev", function()
    awful.spawn("playerctl previous")
  end, { description = "previous", group = "media", }),

  awful.key({}, "XF86AudioNext", function()
    awful.spawn("playerctl next")
  end, { description = "next", group = "media", }),

  awful.key({}, "XF86Eject", function()
    awful.spawn.easy_async("soundswitch", utils.show_volume_notification)
  end, { description = "switch output device", group = "media", }),

  ------------------------------------------------------------------------------
  -- control
  awful.key({}, "XF86MonBrightnessUp", function()
    awful.spawn("brightnessctl s +5%")
  end, { description = "brightness +/-", group = "control", }),

  awful.key({}, "XF86MonBrightnessDown", function()
    awful.spawn("brightnessctl s 5%-")
  end, { description = "brightness +/-", group = "control", }),
})

--------------------------------------------------------------------------------
-- Client keybindings
--------------------------------------------------------------------------------
-- Bind all key numbers to tags.
-- Be careful: we use keycodes to make it work on any keyboard layout.
-- This should map on the top row of your keyboard, usually 1 to 9.
for i = 1, 9 do
  awful.keyboard.append_global_keybindings({
    -- View tag only.
    awful.key({ Global.Keys.ModKey, }, "#" .. i + 9, function()
      local screen = awful.screen.focused()
      local tag = screen.tags[i]
      if tag then
        tag:view_only()
      end
    end),
    -- Move client to tag.
    awful.key({ Global.Keys.ModKey, "Shift", }, "#" .. i + 9, function()
      if client.focus then
        local tag = client.focus.screen.tags[i]
        if tag then
          client.focus:move_to_tag(tag)
        end
      end
    end),
  })
end
--------------------------------------------------------------------------------
local function move_client_animated(client, tag)
  tag:view_only()
  client:tags({ tag, })
end
--------------------------------------------------------------------------------
-- client default_keybindings
-- by using this function we can easily get the current select client (c)
client.connect_signal("request::default_keybindings", function()
  awful.keyboard.append_client_keybindings({
    awful.key({ Global.Keys.ModKey, }, "q", function(client)
      client:kill()
    end, { description = "close", group = "client", }),

    awful.key({ Global.Keys.ModKey, }, "m", function(client)
      client.maximized = not client.maximized
      client:raise()
    end, { description = "(un)maximize", group = "client", }),

    awful.key({ Global.Keys.ModKey, }, "f",
      awful.client.floating.toggle,
      { description = "toggle floating", group = "client", }
    ),

    awful.key({ Global.Keys.ModKey, "Control", }, "f", function(client)
      client.fullscreen = not client.fullscreen
      client:raise()
    end, { description = "toggle fullscreen", group = "client", }),

    awful.key({ Global.Keys.ModKey, "Shift", }, "l", function(client)
      local screen = awful.screen.focused()

      local tag_index = screen.selected_tag.index

      -- if current tag is the last tag, wrap around
      if tag_index == #screen.tags then
        tag_index = 1
      else -- othewise use the next one
        tag_index = tag_index + 1
      end

      local next_tag = screen.tags[tag_index]

      if next_tag then
        move_client_animated(client, next_tag)
      end
    end, { description = "move window to next tag", group = "client", }),

    awful.key({ Global.Keys.ModKey, "Shift", }, "h", function(client)
      local screen = awful.screen.focused()

      local i = screen.selected_tag.index

      -- if current tag is the last tag, wrap around
      if i == 1 then
        i = #screen.tags
      else -- othewise use the next one
        i = i - 1
      end

      local previous_tag = screen.tags[i]

      if previous_tag then
        move_client_animated(client, previous_tag)
      end
    end, { description = "move window to previous tag", group = "client", }),

    awful.key({ Global.Keys.ModKey, "Shift", }, "n", function(client)
      if #root.tags() < 9 then
        local new_tag = awful.tag
           .add("", {
             screen   = awful.screen.focused(),
             layout   = awful.layout.layouts[1],
             volatile = true,
             index    = awful.screen.focused().selected_tag.index + 1,
           })
        move_client_animated(client, new_tag)
      end
    end, { description = "move window to a new tag", group = "client", }),

    awful.key({ Global.Keys.ModKey, "Shift", }, "j", function()
      awful.client.swap.byidx(1)
    end, { description = "swap window with next", group = "client", }),

    awful.key({ Global.Keys.ModKey, "Shift", }, "k", function()
      awful.client.swap.byidx(-1)
    end, { description = "swap window with previous", group = "client", }),

    awful.key({ Global.Keys.ModKey, }, "j", function()
      awful.client.focus.byidx(1)
    end, { description = "focus next window by index", group = "client", }),

    awful.key({ Global.Keys.ModKey, }, "k", function()
      awful.client.focus.byidx(-1)
    end, { description = "focus previous window by index", group = "client", }),
  })
end)

---------------------------------------------------------------------------------
client.connect_signal("request::default_mousebindings", function()
  awful.mouse.append_client_mousebindings({
    awful.button({}, 1, function(client)
      client.focus = client
      client:raise()
    end),
    awful.button({ Global.Keys.ModKey, }, 1, awful.mouse.client.move),
    awful.button({ Global.Keys.ModKey, }, 3, awful.mouse.client.resize),
  })
end)
-------------------------------------------------------------------------------
