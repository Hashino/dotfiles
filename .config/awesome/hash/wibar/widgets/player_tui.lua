-- Modelled after Pavel Makhov's work
-- @author Mohammed Gaber
-- requires - playerctl
-- modified by Hashino https://github.com/Hashino/dotfiles
-------------------------------------------------------------------------------------------------------------------
local awful 	= require("awful")
local watch 	= require("awful.widget.watch")
local wibox 	= require("wibox")
local gears 	= require("gears")
local theme	    = require("beautiful")
-------------------------------------------------------------------------------------------------------------------
local bar_size			= theme.universalsize * 2

local icon				= ""
local prev				= ""
local play				= "  "
local pause				= "  "
local next				= ""
local spacer			= "   "

local font				= theme.font_name .. tostring(theme.universalsize / 2)
local font_icon		 	= theme.font_name .. tostring(theme.universalsize / 2)
local font_controls 	= theme.font_name .. tostring(theme.universalsize / (5/2))

-- name of the binary of your music player
local default_player 	= "ncspot"
-- terminal to run the player on
local default_term		= terminal .. " -e "

local GET_MPD_CMD 		= "playerctl -p " .. default_player .. " -f '{{status}};{{xesam:artist}};{{xesam:title}}' metadata"
-------------------------------------------------------------------------------------------------------------------
local player_widget = wibox.widget
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
				    local matcher = function (c)
				        return awful.rules.match(c, {name = default_player})
				    end
				    awful.client.run_or_raise(default_term .. default_player, matcher)
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
-------------------------------------------------------------------------------------------------------------------
    set_text = function(self, new_icon, new_text, new_prev, new_playpause, new_next)
    	self:get_children_by_id('icon')[1]:set_text(new_icon)
        self:get_children_by_id('song')[1]:set_text(new_text)
        self:get_children_by_id('prev')[1]:set_text(new_prev)
        self:get_children_by_id('playpause')[1]:set_text(new_playpause)
        self:get_children_by_id('next')[1]:set_text(new_next)
    end
}
-------------------------------------------------------------------------------------------------------------------
local function player_updater()
    -- retrieve song info
    local song, player_status

    local update_graphic = function(widget, stdout, _, _, _)
        local words = gears.string.split(stdout, ';')
        player_status = words[1]

        song = tostring(words[2]) .. " - " .. tostring(words[3])
-------------------------------------------------------------------------------------------------------------------
        -- Guarantees that player always has the same width
        if song ~= nil then
            if string.len(song) > (bar_size - 5) then
                song = string.sub(song, 0, (bar_size - 5)) .. "..."
                song = " " .. song .. " "
            else
            	size = string.len(song)
            	song = string.sub(song, 0, size - 1)
            	for i=1, ((bar_size - string.len(song)) / 2) do
            		song =  " " .. song .. " "
            	end
            	if string.len(song) < bar_size then
            		song = song .. " "
            	end
            end
        end
-------------------------------------------------------------------------------------------------------------------
        -- Changes buttons accordingly
        if player_status == "Playing" then
            widget:set_text(icon, song, prev, pause, next)
        elseif player_status == "Paused" then
            widget:set_text(icon, song, prev, play, next)
        elseif player_status == "Stopped" then
            widget:set_text(icon, song, prev, play, next)
        else -- no player is running, shows no song/controls
            widget:set_text(icon, "", "", "", "")
        end
    end

    watch(string.format(GET_MPD_CMD, "'" .. default_player .. "'"), 1, update_graphic, player_widget)

    return player_widget

end
-------------------------------------------------------------------------------------------------------------------
return setmetatable(player_widget, {__call = function(_, ...) return player_updater(...) end})
-------------------------------------------------------------------------------------------------------------------
