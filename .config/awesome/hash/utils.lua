-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local awful = require("awful")
local wibox = require("wibox")
--------------------------------------------------------------------------------
local Utils = {}
--------------------------------------------------------------------------------
local get_volume = function()
  local handle = assert(io.popen("wpctl get-volume @DEFAULT_AUDIO_SINK@", "r"))
  local output = assert(handle:read("*a"))
  local parts = {}
  for i in string.gmatch(output, "[^%s]+") do
    parts[#parts + 1] = i
  end
  handle:close()
  return { volume = parts[2], muted = parts[3] or "", }
end
--------------------------------------------------------------------------------
local get_curr_sink = function()
  local handle = assert(io.popen(
    "wpctl inspect @DEFAULT_AUDIO_SINK@ | grep 'alsa\\.card_name = \"[^\"]*\"' | grep -o '\"[^\"]\\+\"'",
    "r"
  ))
  local output = assert(handle:read("*a")):gsub('"',''):gsub("[\n\r]", "")
  handle:close()
  return output
end

function Utils.show_volume_notification()
  local curr_vol = get_volume()
  local popup = awful.popup {
    widget       =
       wibox.widget {
         {
           max_value        = 1,
           value            = tonumber(curr_vol.volume),
           forced_height    = Theme.UniversalSize * (3 / 5),
           forced_width     = Theme.UniversalSize * 14,
           color            = Theme.Colors.Background.Lighter,
           background_color = Theme.Colors.Background.Darkest,
           widget           = wibox.widget.progressbar,
         },
         {
           text   = get_curr_sink() .. " - " .. tostring(math.floor(curr_vol.volume * 100)) .. "% " .. (curr_vol.muted),
           valign = "center",
           halign = "center",
           widget = wibox.widget.textbox,
         },
         layout = wibox.layout.stack,
       },
    border_color = Theme.border_normal,
    border_width = Theme.border_width,
    ontop        = true,
    placement    = awful.placement.bottom,
    shape        = require("gears").shape.rectangle,
  }

  local hide = timer({ timeout = 1, })
  hide:connect_signal("timeout", function()
    print("hide")
    popup.visible = false
    hide:stop()
  end)
  hide:start()
end
--------------------------------------------------------------------------------
return Utils
--------------------------------------------------------------------------------
