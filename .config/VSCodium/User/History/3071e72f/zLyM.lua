-----------------------------------------------------------------------------------------------------------------------
-- by Hashino https://github.com/Hashino/dotfiles
-----------------------------------------------------------------------------------------------------------------------
--  _    _           _     _                   _
-- | |  | |         | |   (_)                 | |
-- | |__| | __ _ ___| |__  _ _ __   ___       | |_   _  __ _
-- |  __  |/ _` / __| '_ \| | '_ \ / _ \      | | | | |/ _` |
-- | |  | | (_| \__ \ | | | | | | | (_) |  _  | | |_| | (_| |
-- |_|  |_|\__,_|___/_| |_|_|_| |_|\___/  (_) |_|\__,_|\__,_|
-----------------------------------------------------------------------------------------------------------------------
local awful = require("awful")
require("beautiful").init(awful.util.getdir("config") .. "/theme/theme.lua")
require("awful.autofocus")
-----------------------------------------------------------------------------------------------------------------------
-- Error handling
require("hash.errors")
-----------------------------------------------------------------------------------------------------------------------
-- Variable definitions
terminal    = "lxterminal"
browser     = "firefox"
filemanager = "thunar"
editor      = "mousepad"
modkey      = "Mod4"
-----------------------------------------------------------------------------------------------------------------------
-- Table of layouts to cover with awful.layout.inc, order matters.
require("hash.layouts")
-----------------------------------------------------------------------------------------------------------------------
-- Screen setup
awful.screen.connect_for_each_screen(function(s)
    --- Creates starting tags on each screen
    awful.tag({ "" , "" , "" , "", "" }, s, awful.layout.layouts[1])
    -- Wallpaper
    require("hash.wallpaper")(s)
    -- Each screen has its own tag table.
	require("hash.wibar.wibar")(s)
end)
-----------------------------------------------------------------------------------------------------------------------
-- Signals
require("hash.signals")
-----------------------------------------------------------------------------------------------------------------------
-- Rules to apply to new clients (through the "manage" signal). Also sets client keys
require("hash.rules")
-----------------------------------------------------------------------------------------------------------------------
-- Set global keys
require("hash.globalkeys")
-----------------------------------------------------------------------------------------------------------------------
-- Autorun
awful.spawn.with_shell("~/.config/awesome/autorun.sh")
-----------------------------------------------------------------------------------------------------------------------

function spawn_once(command, class, tag)
    -- create move callback
    local callback
    callback = function(c)
      if c.class == class then
        awful.client.movetotag(tag, c)
        client.remove_signal("manage", callback)
      end
    end
    client.add_signal("manage", callback)
    -- now check if not already running!
    local findme = command
    local firstspace = findme:find(" ")
    if firstspace then
      findme = findme:sub(0, firstspace-1)
    end
    -- finally run it
    awful.util.spawn_with_shell("pgrep -u $USER -x " .. findme .. " > /dev/null || (" .. command .. ")")
  end

  