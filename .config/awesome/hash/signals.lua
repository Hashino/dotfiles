-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local awful = require("awful")
local wibox = require("wibox")
--------------------------------------------------------------------------------
client.connect_signal("manage", function(c)
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
--------------------------------------------------------------------------------
-- Enable sloppy focus, so that focus follows mouse.
client.connect_signal("mouse::enter", function(c)
  if awful.layout.get(c.screen) ~= awful.layout.suit.magnifier
      and awful.client.focus.filter(c) then
    client.focus = c
  end
end)
--------------------------------------------------------------------------------
-- Change border on focus
client.connect_signal("focus", function(c)
  c.border_color = Theme.border_focus
end)
client.connect_signal("unfocus", function(c)
  c.border_color = Theme.border_normal
end)
--------------------------------------------------------------------------------
-- Handle border sizes of clients.
for s = 1, screen.count() do
  screen[s]:connect_signal("arrange", function()
    local clients = awful.client.visible(s)
    local layout = awful.layout.getname(awful.layout.get(s))

    for _, c in pairs(clients) do
      c.ontop = false
      -- No titlebar with only one humanly visible client
      if c.maximized or c.fullscreen then
        c.border_width = 0
      elseif c.floating or layout == "floating" then
        c.border_width = Theme.border_width
        c.ontop = true
      elseif layout == "max" or layout == "fullscreen" then
        c.border_width = 0
      else
        local tiled = awful.client.tiled(c.screen)
        if #tiled == 1 then -- and c == tiled[1] then
          c.border_width = 0
        else
          c.border_width = Theme.border_width
        end
      end
    end
  end)
end
--------------------------------------------------------------------------------
-- {{{ Titlebars
-- Add a titlebar if titlebars_enabled is set to true in the rules.
client.connect_signal("request::titlebars", function(c)
  -- buttons for the titlebar
  local buttons = {
    awful.button({}, 1, function()
      c:activate { context = "titlebar", action = "mouse_move" }
    end),
    awful.button({}, 3, function()
      c:activate { context = "titlebar", action = "mouse_resize" }
    end),
  }

  awful.titlebar(c).widget = {
    { -- Left
      awful.titlebar.widget.iconwidget(c),
      buttons = buttons,
      layout  = wibox.layout.fixed.horizontal
    },
    {   -- Middle
      { -- Title
        halign = "center",
        widget = awful.titlebar.widget.titlewidget(c)
      },
      buttons = buttons,
      layout  = wibox.layout.flex.horizontal
    },
    { -- Right
      awful.titlebar.widget.floatingbutton(c),
      awful.titlebar.widget.maximizedbutton(c),
      awful.titlebar.widget.stickybutton(c),
      awful.titlebar.widget.ontopbutton(c),
      awful.titlebar.widget.closebutton(c),
      layout = wibox.layout.fixed.horizontal()
    },
    layout = wibox.layout.align.horizontal
  }
end)
-- }}}
