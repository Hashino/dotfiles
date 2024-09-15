-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local wibox = require("wibox")
local awful = require("awful")
--------------------------------------------------------------------------------
local function get_wibar(s)
  -- Create the wibox
  s.wibox = awful.wibar({
    position = "top",
    screen = s,
    height = Theme.UniversalSize,
    bg = Theme.Colors.Transparent,
  })
  -- Add widgets to the wibox
  s.wibox:setup
  {
    {
      layout = wibox.layout.align.horizontal,
      { -- Left widget
        layout = wibox.layout.fixed.horizontal,
        {
          require("hash.wibar.widgets.layoutbox")(s),
          bg = Theme.Colors.Background.Darkest,
          widget = wibox.container.background,
        },
        {
          require("hash.wibar.widgets.taglist")(s),
          bg = Theme.Colors.Background.Neutral,
          widget = wibox.container.background,
        },
      },
      { -- Middle widget
        require("hash.wibar.widgets.tasklist")(s),
        bg = Theme.Transparent,
        widget = wibox.container.background,
      },
      { -- Right widgets
        layout = wibox.layout.fixed.horizontal,
        {
          require("hash.wibar.widgets.player_gui")(s),
          bg = Theme.Colors.Background.Darkest,
          widget = wibox.container.background,
        },
        {
          require("hash.wibar.widgets.systray")(s),
          bg = Theme.Colors.Background.Neutral,
          widget = wibox.container.background,
        },
        require("hash.wibar.widgets.clock")(s),
      },
    },
    left   = Theme.useless_gap * 2,
    right  = Theme.useless_gap * 2,
    top    = Theme.useless_gap,
    widget = wibox.container.margin,
  }
end
--------------------------------------------------------------------------------
return get_wibar
--------------------------------------------------------------------------------
