-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local wibox       = require("wibox")
--------------------------------------------------------------------------------
local get_systray = function(s)
  local systray = wibox.widget
     {
       wibox.widget.systray(),
       bottom = 5,
       top    = 5,
       left   = 12,
       right  = 12,
       widget = wibox.container.margin,
     }
  return systray
end
--------------------------------------------------------------------------------
return get_systray
--------------------------------------------------------------------------------
