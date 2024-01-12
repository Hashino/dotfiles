-- by Hashino https://github.com/Hashino/dotfiles
-----------------------------------------------------------------------------
--  _    _           _     _                   _
-- | |  | |         | |   (_)                 | |
-- | |__| | __ _ ___| |__  _ _ __   ___       | |_   _  __ _
-- |  __  |/ _` / __| '_ \| | '_ \ / _ \      | | | | |/ _` |
-- | |  | | (_| \__ \ | | | | | | | (_) |  _  | | |_| | (_| |
-- |_|  |_|\__,_|___/_| |_|_|_| |_|\___/  (_) |_|\__,_|\__,_|
-----------------------------------------------------------------------------
local awful = require("awful")
-----------------------------------------------------------------------------
-- Error handling
require("hash.errors")
-----------------------------------------------------------------------------
-- Variable definitions
Global                  = { Apps = {}, Keys = {} }
Global.ConfigFolder     = awful.util.getdir("config")
-----------------------------------------------------------------------------
Global.Apps.Terminal    = "lxterminal"
Global.Apps.Browser     = "firefox"
Global.Apps.Filemanager = "nemo"
Global.Apps.Editor      = "mousepad"
-----------------------------------------------------------------------------
Global.Keys.ModKey      = "Mod4"
-----------------------------------------------------------------------------
-- Libraries
require("beautiful").init( Global.ConfigFolder .. "/theme/theme.lua")
require("awful.autofocus")
-----------------------------------------------------------------------------
-- Table of layouts to cover with awful.layout.inc, order matters.
require("hash.layouts")
-----------------------------------------------------------------------------
-- Screen setup
screen.connect_signal("request::desktop_decoration", function(s)
    --- Creates starting tags on each screen
    awful.tag({ "", "", "" }, s, awful.layout.layouts[1])
    -- Each screen has its own tag table.
	require("hash.wibar.wibar")(s)
end)
-----------------------------------------------------------------------------
-- Signals
require("hash.signals")
-----------------------------------------------------------------------------
-- Rules to apply to new clients
require("hash.rules")
-------------------------------------------------------------------------------------------------------------------
-- Set all keybindings
require("hash.keybindings")
-------------------------------------------------------------------------------------------------------------------
-- Wallpaper
require("hash.wallpaper")
-------------------------------------------------------------------------------------------------------------------
-- Autorun
awful.spawn.with_shell(Global.ConfigFolder .. "/autorun.sh")
-------------------------------------------------------------------------------------------------------------------
