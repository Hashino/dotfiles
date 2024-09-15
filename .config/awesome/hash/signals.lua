-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local awful = require("awful")
local wibox = require("wibox")
local capi  = { client = client, }
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
      -- c.tilebars_enabled = false

      if c.maximized or c.fullscreen then
        c.border_width = 0
      elseif c.floating or layout == "floating" then
        c.border_width = Theme.border_width
        c.ontop = true
        -- c.tilebars_enabled = true
      elseif layout == "max" or layout == "fullscreen" then
        c.border_width = 0
      else
        local tiled = awful.client.tiled(c.screen)
        -- if only one visible client
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
client.connect_signal("property::tilebars_enabled", function(c)
  if c.tilebars_enabled then
    awful.titlebar.show(c)
  else
    awful.titlebar.hide(c)
  end
end)
--------------------------------------------------------------------------------
-- {{{ Title bar
local instances = {}

-- Do the equivalent of
--     c:connect_signal(signal, widget.update)
-- without keeping a strong reference to the widget.
local function update_on_signal(c, signal, widget)
  local sig_instances = instances[signal]
  if sig_instances == nil then
    sig_instances = setmetatable({}, { __mode = "k", })
    instances[signal] = sig_instances
    capi.client.connect_signal(signal, function(cl)
      local widgets = sig_instances[cl]
      if widgets then
        for _, w in pairs(widgets) do
          w.update()
        end
      end
    end)
  end
  local widgets = sig_instances[c]
  if widgets == nil then
    widgets = setmetatable({}, { __mode = "v", })
    sig_instances[c] = widgets
  end
  table.insert(widgets, widget)
end
--- Honor the font.
local function draw_title(self, ctx, cr, width, height)
  wibox.widget.textbox.draw(self, ctx, cr, width, height)
end
--- Create a new title widget.
--
-- A title widget displays the name of a client.
-- Please note that this returns a textbox and all of textbox' API is available.
-- This way, you can e.g. modify the font that is used.
--
-- @tparam client c The client for which a titlewidget should be created.
-- @return The title widget.
-- @constructorfct awful.titlebar.widget.titlewidget
local function titlebar_text(c)
  local ret = wibox.widget.textbox()

  rawset(ret, "draw", draw_title)

  local function update()
    ret:set_text(c.name:lower())
  end
  ret.update = update
  update_on_signal(c, "property::name", ret)
  update()

  return ret
end

client.connect_signal("request::titlebars", function(c)
  local buttons = {
    awful.button({}, 1, function()
      c:activate { context = "titlebar", action = "mouse_move", }
    end),
    awful.button({}, 3, function()
      c:activate { context = "titlebar", action = "mouse_resize", }
    end),
  }
  -- buttons for the titlebar
  awful.titlebar(c).widget = {
    { -- Title
      halign = "center",
      widget = titlebar_text(c),
    },
    buttons = buttons,
    layout  = wibox.layout.flex.horizontal,
  }
end)
-- }}}
