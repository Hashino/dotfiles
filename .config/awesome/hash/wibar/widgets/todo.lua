-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local timer = require("gears.timer")
local wibox = require("wibox")
--------------------------------------------------------------------------------
local function get_task()
  local ok, res = pcall(io.lines, os.getenv("HOME") .. "/.tasks")

  if ok then
    local lines = {}
    for line in res do
      lines[#lines + 1] = line
    end
    local right = ""
    if #lines > 1 then
      right = " +" .. #lines - 1 .. " more"
    end
    return { left = lines[1], right = right, }
  else
    return ""
  end
end
--------------------------------------------------------------------------------
local get_todo = function(s)
  local systray = wibox.widget {
    bg = Theme.Colors.Transparent,
    widget = wibox.container.background,
    {
      valign = "center",
      halign = "center",
      widget = wibox.container.place,
      {
        {
          id = "left",
          font = Theme.Font_Name .. " " .. tostring(Theme.UniversalSize * (2 / 5)),
          widget = wibox.widget.textbox,
        },
        {
          id = "right",
          opacity = 0.5,
          font = Theme.Font_Name .. " " .. tostring(Theme.UniversalSize * (1 / 3)),
          widget = wibox.widget.textbox,
        },
        layout = wibox.layout.align.horizontal,
      },
    },
  }

  timer {
    timeout   = 10,
    call_now  = true,
    autostart = true,
    callback  = function()
      local curr = get_task()
      if curr.left then
        systray:get_children_by_id("left")[1]:set_text(curr.left)
        systray:get_children_by_id("right")[1]:set_text(curr.right)
      else
        systray:get_children_by_id("left")[1]:set_text("")
        systray:get_children_by_id("right")[1]:set_text("")
      end
    end,
  }

  return systray
end
--------------------------------------------------------------------------------
return get_todo
--------------------------------------------------------------------------------
