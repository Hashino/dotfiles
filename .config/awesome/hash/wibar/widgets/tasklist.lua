-- by Hashino https://github.com/Hashino/dotfiles
-- TODO: clean code
--------------------------------------------------------------------------------
local capi         = { screen = screen, client = client, }
local ipairs       = ipairs
local setmetatable = setmetatable
local table        = table
local common       = require("awful.widget.common")
local tag          = require("awful.tag")
local timer        = require("gears.timer")
local base         = require("wibox.widget.base")
local gtable       = require("gears.table")
local wibox        = require("wibox")
local awful        = require("awful")
--------------------------------------------------------------------------------
local function get_screen(s)
  return s and screen[s]
end

local tasklist = {}

local instances

tasklist.filter, tasklist.source = {}, {}
--------------------------------------------------------------------------------
local function tasklist_label(c, tb)
  tb:set_font(Theme.tasklist_font)

  return "<span color='" ..
     Theme.fg_focus ..
     "'>" .. c.class:lower() .. " - " .. c.name:lower() .. "</span>"
end

local function create_callback(w, t)
  common._set_common_property(w, "client", t)
end
--------------------------------------------------------------------------------
local function tasklist_update(s, self, buttons, filter, data, update_function)
  local clients = {}

  local list = capi.client.get()

  for _, c in ipairs(list) do
    if
       not (c.skip_taskbar or c.hidden
         or c.type == "splash" or c.type == "dock" or c.type == "desktop")
       and filter(c, s)
    then
      table.insert(clients, c)
    end
  end

  if self._private.last_count ~= #clients then
    local old = self._private.last_count
    self._private.last_count = #clients
    self:emit_signal("property::count", #clients, old)
  end

  local function label(c, tb)
    return tasklist_label(c, tb)
  end

  update_function(self._private.base_layout, buttons, label, data, clients, {
    widget_template = self._private.widget_template,
    create_callback = create_callback,
  })
end
--------------------------------------------------------------------------------
function tasklist:layout(_, width, height)
  if self._private.base_layout then
    return { base.place_widget_at(self._private.base_layout, 0, 0, width, height), }
  end
end

--------------------------------------------------------------------------------
for _, prop in ipairs(
  {
    "screen",
    "filter",
    "update_function",
    "widget_template",
    "source",
  }) do
  tasklist["set_" .. prop] = function(self, value)
    if value == self._private[prop] then
      return
    end

    self._private[prop] = value

    self._do_tasklist_update()

    self:emit_signal("widget::layout_changed")
    self:emit_signal("widget::redraw_needed")
    self:emit_signal("property::" .. prop, value)
  end

  tasklist["get_" .. prop] = function(self)
    return self._private[prop]
  end
end
--------------------------------------------------------------------------------
local function update_screen(self, screen, old)
  if not instances then
    return
  end

  if old and instances[old] then
    for k, w in ipairs(instances[old]) do
      if w == self then
        table.remove(instances[old], k)
        break
      end
    end
  end

  local list = instances[screen]

  if not list then
    list = setmetatable({}, { __mode = "v", })
    instances[screen] = list
  end

  table.insert(list, self)
end
--------------------------------------------------------------------------------
function tasklist.new(screen, widget_template)
  local uf = common.list_update

  local w = base.make_widget(nil, nil, {
    enable_properties = true,
  })

  gtable.crush(w._private, {
    filter = awful.widget.tasklist.filter.focused,
    style = {},
    screen = screen,
    widget_template = widget_template,
    data = setmetatable({}, { __mode = "k", }),
  })

  gtable.crush(w, tasklist, true)
  rawset(w, "filter", nil)
  rawset(w, "source", nil)

  local queued_update = false

  -- For the tests
  function w._do_tasklist_update_now()
    queued_update = false
    if w._private.screen.valid then
      tasklist_update(w._private.screen, w, w._private.buttons, w._private
        .filter, w._private.data, uf)
    end
  end

  function w._do_tasklist_update()
    -- Add a delayed callback for the first update.
    if not queued_update then
      timer.delayed_call(w._do_tasklist_update_now)
      queued_update = true
    end
  end

  function w._unmanage(c)
    w._private.data[c] = nil
  end

  if instances == nil then
    instances = setmetatable({}, { __mode = "k", })
    local function us(s)
      local i = instances[get_screen(s)]
      if i then
        for _, tlist in pairs(i) do
          tlist._do_tasklist_update()
        end
      end
    end
    local function u()
      for s in pairs(instances) do
        if s.valid then
          us(s)
        end
      end
    end

    tag.attached_connect_signal(nil, "property::selected", u)
    tag.attached_connect_signal(nil, "property::activated", u)
    capi.client.connect_signal("property::name", u)
    capi.client.connect_signal("property::screen", function(c, old_screen)
      us(c.screen)
      us(old_screen)
    end)
    capi.client.connect_signal("property::hidden", u)
    capi.client.connect_signal("tagged", u)
    capi.client.connect_signal("untagged", u)
    capi.client.connect_signal("request::unmanage", function(c)
      u()
      for _, i in pairs(instances) do
        for _, tlist in pairs(i) do
          tlist._unmanage(c)
        end
      end
    end)
    capi.client.connect_signal("list", u)
    capi.client.connect_signal("property::active", u)
    capi.screen.connect_signal("removed", function(s)
      instances[get_screen(s)] = nil
    end)
  end

  local layout = {
    spacing = 0,
    layout = wibox.layout.flex.horizontal,
  }

  awful.widget.tasklist.set_base_layout(w, layout)

  w._do_tasklist_update()

  update_screen(w, screen)

  return w
end

--------------------------------------------------------------------------------
-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local get_tasklist = function(s)
  local widget_template = {
    {
      {
        {
          id = "text_role",
          widget = wibox.widget.textbox,
        },
        valign = "center",
        halign = "center",
        widget = wibox.container.place,
      },
      bg = Theme.Colors.Transparent,
      widget = wibox.container.background,
    },
    left = Theme.UniversalSize / 14,
    right = Theme.UniversalSize / 14,
    widget = wibox.container.margin,
  }
  local mytasklist = {
    {
      tasklist.new(s, widget_template),
      bg = Theme.Transparent,
      widget = wibox.container.background,
    },
    left = Theme.UniversalSize,
    right = Theme.UniversalSize,
    widget = wibox.container.margin,
  }
  return mytasklist
end
--------------------------------------------------------------------------------
return get_tasklist
--------------------------------------------------------------------------------
