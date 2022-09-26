-- by Hashino https://github.com/Hashino/dotfiles
-----------------------------------------------------------------------------------------------------------------------
local awful 	= require("awful")
require("awful.autofocus")
local beautiful	= require("beautiful")
beautiful.init(awful.util.getdir("config") .. "/theme/theme.lua")
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
awful.layout.layouts = require("hash.layouts")(s)
-----------------------------------------------------------------------------------------------------------------------
-- Screen setup
awful.screen.connect_for_each_screen(function(s)
    -- Wallpaper
    require("hash.wallpaper")
    -- Each screen has its own tag table.	
	require("hash.wibar.wibar")(s)
end)
-----------------------------------------------------------------------------------------------------------------------
-- Signals
require("hash.signals")
-----------------------------------------------------------------------------------------------------------------------
-- Rules to apply to new clients (through the "manage" signal).
awful.rules.rules = require("hash.rules")(s)
-----------------------------------------------------------------------------------------------------------------------
-- Set global keys
root.keys(require("hash.globalkeys")(s))
-----------------------------------------------------------------------------------------------------------------------
-- Autorun
awful.spawn.with_shell("~/.config/awesome/autorun.sh")
-----------------------------------------------------------------------------------------------------------------------