-- by Hashino https://github.com/Hashino/dotfiles
-----------------------------------------------------------------------------------------------------------------------
local gears 	= require("gears")
local theme	    = require("beautiful")
-----------------------------------------------------------------------------------------------------------------------
local function set_wallpaper(s)
    -- Wallpaper
    if theme.wallpaper then
        local wallpaper = theme.wallpaper
        -- If wallpaper is a function, call it with the screen
        if type(wallpaper) == "function" then
            wallpaper = wallpaper(s)
        end
        gears.wallpaper.maximized(wallpaper, s, true)
    end
end
-- Re-set wallpaper when a screen's geometry changes (e.g. different resolution)
screen.connect_signal("property::geometry", set_wallpaper)
-----------------------------------------------------------------------------------------------------------------------
return set_wallpaper
-----------------------------------------------------------------------------------------------------------------------