-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local wibox = require("wibox")
--------------------------------------------------------------------------------
local get_clock = function(_, --[[optional]] color1, --[[optional]] color2)
  local spacer = wibox.widget({
    {
      layout = wibox.layout.fixed.horizontal,
      {
        right = Theme.Spacing,
        widget = wibox.container.margin,
      },
    },
    bg = Theme.Transparent,
    widget = wibox.container.background,
  })
  local clock = wibox.widget({
    layout = wibox.layout.fixed.horizontal,
    { -- Date
      {
        layout = wibox.layout.fixed.horizontal,
        spacer,
        wibox.widget({
          format = "%a, %d - %b",
          font = Theme.Font,
          widget = wibox.widget.textclock,
        }),
        spacer,
      },
      bg = color1 or Theme.Colors.Background.Darkest,
      widget = wibox.container.background,
    },
    { -- Time
      {
        layout = wibox.layout.fixed.horizontal,
        spacer,
        wibox.widget({
          format = "%H:%M",
          font = Theme.Font,
          widget = wibox.widget.textclock,
        }),
        spacer,
      },
      bg = color2 or Theme.Colors.Background.Dark,
      widget = wibox.container.background,
    },
  })
  return clock
end
--------------------------------------------------------------------------------
return get_clock
--------------------------------------------------------------------------------
