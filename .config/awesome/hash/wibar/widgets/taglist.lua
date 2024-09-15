-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local awful                 = require("awful")
local gears                 = require("gears")
local wibox                 = require("wibox")
--------------------------------------------------------------------------------
local font                  = Theme.Font_Name .. " " .. tostring((Theme.UniversalSize * (1 / 2)))
local outer_margin_width    = Theme.UniversalSize * (1 / 4)
local inner_margin_width    = Theme.UniversalSize * (1 / 8)
local outer_margin_vertical = 0

local icon_inactive_empty   = ""
local icon_inactive_single  = ""
local icon_inactive_many    = ""
local icon_selected         = ""
--------------------------------------------------------------------------------
local get_taglist           = function(s)
  -- Taglist buttons
  local taglist_buttons = gears.table.join(
    awful.button({}, 1, function(t)
      t:view_only()
    end),
    awful.button({ Global.Keys.ModKey, }, 1, function(t)
      if client.focus then
        client.focus:move_to_tag(t)
      end
    end),
    awful.button({}, 3, awful.tag.viewtoggle),
    awful.button({ Global.Keys.ModKey, }, 3, function(t)
      if client.focus then
        client.focus:toggle_tag(t)
      end
    end),
    awful.button({}, 4, function(t)
      awful.tag.viewnext(t.screen)
    end),
    awful.button({}, 5, function(t)
      awful.tag.viewprev(t.screen)
    end)
  )
  --------------------------------------------------------------------------------
  -- Function to update the tags
  local update_tags = function(self, c3)
    local tagicon = self:get_children_by_id("icon_role")[1]
    local inner = self:get_children_by_id("inner_margin")[1]
    if #s.tags == 1 then
      --hides tags when only 1 tag
      inner.left = 0
      inner.right = 0

      tagicon.text = ""
    else
      inner.left = inner_margin_width
      inner.right = inner_margin_width

      if c3.selected then
        tagicon.text = icon_selected
      else
        if #c3:clients() == 0 then
          tagicon.text = icon_inactive_empty
        elseif #c3:clients() == 1 then
          tagicon.text = icon_inactive_single
        else
          tagicon.text = icon_inactive_many
        end
      end
    end
    -- needed so margins get updated to make the widget become invisble when just 1 one tag
    self:emit_signal_recursive("taglist_changed")
  end
  --------------------------------------------------------------------------------
  -- Function to update the margin
  local update_margin = function(self)
    self.left = #s.tags == 1 and 0 or
       outer_margin_width  --hides tags when only 1 tag
    self.right = #s.tags == 1 and 0 or outer_margin_width
    self.top = #s.tags == 1 and 0 or outer_margin_vertical
    self.bottom = #s.tags == 1 and 0 or outer_margin_vertical
  end
  --------------------------------------------------------------------------------
  local icon_taglist = wibox.widget({
    awful.widget.taglist({
      screen = s,
      buttons = taglist_buttons,
      filter = awful.widget.taglist.filter.all,
      layout = {
        layout = wibox.layout.fixed.horizontal,
      },
      widget_template = {
        {
          id = "icon_role",
          font = font,
          text = icon_inactive_empty,
          widget = wibox.widget.textbox,
        },
        id = "inner_margin",
        left = #s.tags == 1 and 0 or inner_margin_width,
        right = #s.tags == 1 and 0 or inner_margin_width,
        widget = wibox.container.margin,

        create_callback = function(self, c3)
          update_tags(self, c3)
        end,

        update_callback = function(self, c3)
          update_tags(self, c3)
        end,
      },
    }),
    id = "outer_margin",
    left = #s.tags == 1 and 0 or outer_margin_width, --hides tags when only 1 tag
    right = #s.tags == 1 and 0 or outer_margin_width,
    top = #s.tags == 1 and 0 or outer_margin_vertical,
    bottom = #s.tags == 1 and 0 or outer_margin_vertical,

    widget = wibox.container.margin,
  })
  local margin = icon_taglist:get_children_by_id("outer_margin")[1]
  margin:connect_signal("taglist_changed", update_margin, margin)

  return icon_taglist
end
--------------------------------------------------------------------------------
return get_taglist
--------------------------------------------------------------------------------
