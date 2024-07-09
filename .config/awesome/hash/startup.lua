-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local awful = require("awful")
--------------------------------------------------------------------------------
local run_once = function (class)
  awful.spawn.once(class, {}, function(c)
    return c.class == class
  end)
end
--------------------------------------------------------------------------------
awesome.connect_signal("startup", function()
  run_once("firefox")
  run_once("spotify")
  run_once("discord")
end)
--------------------------------------------------------------------------------
client.connect_signal("request::tag", function(c)
  if c.class == "Spotify" then
    c:move_to_tag(awful.screen.focused().tags[#awful.screen.focused().tags - 1])
  end
  if c.class == "discord" then
    c:move_to_tag(awful.screen.focused().tags[#awful.screen.focused().tags])
  end
end)
--------------------------------------------------------------------------------
