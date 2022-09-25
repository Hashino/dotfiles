-------------------------------------------------
-- mpris based Arc Widget for Awesome Window Manager
-- Modelled after Pavel Makhov's work
-- @author Mohammed Gaber
-- requires - playerctl
-- @copyright 2020
-- modified by Hashino
-------------------------------------------------
local awful 	= require("awful")
local beautiful = require("beautiful")
local naughty 	= require("naughty")
local watch 	= require("awful.widget.watch")
local wibox 	= require("wibox")
local gears 	= require("gears")
-------------------------------------------------

local bar_size			= 50

local icon				= ""
local prev				= ""
local play				= ""
local pause				= ""
local next				= ""
local spacer			= "   "

local font				= "Terminus (TTF) Medium 12"
local font_icon		 	= "Terminus (TTF) Medium 12"
local font_controls 	= "Terminus (TTF) Medium 8"

local default_player 	= "ncspot"

local default_term		= "lxterminal -e "

local GET_MPD_CMD 		= "playerctl -p " .. default_player .. " -f '{{status}};{{xesam:artist}};{{xesam:title}}' metadata"

-- {{{ Error handling
-- Check if awesome encountered an error during startup and fell back to
-- another config (This code will only ever execute for the fallback config)
if awesome.startup_errors then
    naughty.notify({ preset = naughty.config.presets.critical,
                     title = "Oops, there were errors during startup!",
                     text = awesome.startup_errors })
end

-- Handle runtime errors after startup
do
    local in_error = false
    awesome.connect_signal("debug::error", function (err)
        -- Make sure we don't go into an endless error loop
        if in_error then return end
        in_error = true

        naughty.notify({ preset = naughty.config.presets.critical,
                         title = "Oops, an error happened!",
                         text = tostring(err) })
        in_error = false
    end)
end
-- }}}


local mpris_widget = wibox.widget
{
	{
		{
			{
				id = "icon",
				font = font_icon,
				text = icon,
				widget = wibox.widget.textbox,
				buttons = gears.table.join(awful.button({}, 1, nil, function ()
				    local matcher = function (c)
				        return awful.rules.match(c, {name = default_player})
				    end
				    awful.client.run_or_raise(default_term .. default_player, matcher)
				end)
				),
			},
			{
				id = "song",
				font = font,
				text = "",
				widget = wibox.widget.textbox,
				buttons = gears.table.join(
				awful.button({}, 1, nil, function ()
					awful.spawn("playerctl -p " .. default_player .. " play-pause")
				end)
				),
			},
			{
			    id = "prev",
			    font = font_controls,
			    text = prev,
			    widget = wibox.widget.textbox,
			    buttons = gears.table.join(
			        awful.button({}, 1, nil, function ()
			            awful.spawn("playerctl -p " .. default_player .. " previous")
			        end)
			    ),
			},
			{
			    id = 'playpause',
			    font = font_controls,
			    text = play,
			    widget = wibox.widget.textbox,
			    buttons = gears.table.join(
			        awful.button({}, 1, nil, function ()
			            awful.spawn("playerctl -p " .. default_player .. " play-pause")
			        end)
			    ),
			},
			{
			    id = "next",
			    font = font_controls,
			    text = next,
			    widget = wibox.widget.textbox,
			    buttons = gears.table.join(
			        awful.button({}, 1, nil, function ()
			            awful.spawn("playerctl -p " .. default_player .. " next")
			        end)
			    ),
			},
			layout = wibox.layout.fixed.horizontal,
	    },
		left  = 10,
		right = 10,
		widget = wibox.container.margin
    },

    layout = wibox.layout.fixed.horizontal,

    set_text = function(self, new_icon, new_text, new_prev, new_playpause, new_next)
    	self:get_children_by_id('icon')[1]:set_text(new_icon)
        self:get_children_by_id('song')[1]:set_text(new_text)
        self:get_children_by_id('prev')[1]:set_text(new_prev)
        self:get_children_by_id('playpause')[1]:set_text(new_playpause)
        self:get_children_by_id('next')[1]:set_text(new_next)
    end
}

local popup = awful.popup{
    visible = false,
    widget = {}
}

local function worker()

    -- retrieve song info
    local song, player_status

    local update_graphic = function(widget, stdout, _, _, _)
        local words = gears.string.split(stdout, ';')
        player_status = words[1]
        
        song = tostring(words[2]) .. " - " .. tostring(words[3])
        
        
        if song ~= nil then
        	--naughty.notify({ title = "size", text = tostring(string.len(song)), timeout = 0 })
            if string.len(song) > (bar_size - 5) then
                song = string.sub(song, 0, (bar_size - 5)) .. "..."
                song = " " .. song .. " "
                --naughty.notify({ title = "size > 35", text = tostring(string.len(song)), timeout = 0 })
            elseif string.len(song) < (bar_size - 5) then
            	size = string.len(song)
            	song = string.sub(song, 0, size - 1)
            	for i=1, ((bar_size - string.len(song)) / 2) do
            		song =  " " .. song .. " "
            	end
            	--naughty.notify({ title = "size < 35", text = tostring(string.len(song)), timeout = 0 })
            	if string.len(song) < bar_size then
            		--naughty.notify({ title = "size << 35", text = tostring(string.len(song)), timeout = 0 })
            		song = song .. " "
            	end
            end
        end
        --naughty.notify({ title = "size final", text = tostring(string.len(song)), timeout = 0 })
        
        if player_status == "Playing" then
            widget:set_text(icon, song, prev, pause, next)
        elseif player_status == "Paused" then
            widget:set_text(icon, song, prev, play, next)
        elseif player_status == "Stopped" then
            widget:set_text(icon, song, prev, play, next)
        else -- no player is running
            widget:set_text(icon, "", "", "", "")
        end
    end
	
    watch(string.format(GET_MPD_CMD, "'" .. default_player .. "'"), 1, update_graphic, mpris_widget)

    return mpris_widget

end

return setmetatable(mpris_widget, {__call = function(_, ...) return worker(...) end})
