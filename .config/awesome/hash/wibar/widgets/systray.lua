-- by Hashino https://github.com/Hashino/dotfiles
-----------------------------------------------------------------------------------------------------------------------
local wibox 	= require("wibox")
local beautiful	= require("beautiful")
-----------------------------------------------------------------------------------------------------------------------
local get_systray = function()
    local systray = wibox.widget
    {
        wibox.widget.systray(),
        bottom 	= theme.universalsize / 6,
        top 	= theme.universalsize / 6,
        left	= theme.universalsize * (2/3),
        right	= theme.universalsize * (2/3),
        widget = wibox.container.margin
    }
    return systray
end
-----------------------------------------------------------------------------------------------------------------------
return get_systray
-----------------------------------------------------------------------------------------------------------------------