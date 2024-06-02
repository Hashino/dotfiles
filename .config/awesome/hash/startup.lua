-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local awful = require("awful")
--------------------------------------------------------------------------------
awesome.connect_signal("startup", function(c)
  awful.spawn("firefox")
  awful.spawn("spotify")
  awful.spawn("discord")
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
