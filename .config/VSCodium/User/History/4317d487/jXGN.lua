-- by Hashino https://github.com/Hashino/dotfiles
-----------------------------------------------------------------------------------------------------------------------
local awful = require("awful")
local gears = require("gears")
local wibox = require("wibox")
local beautiful = require("beautiful")
-----------------------------------------------------------------------------------------------------------------------
font 			= theme.font_name .. tostring(theme.universalsize * (3/8))
margin_width	= theme.universalsize / 3
icon_inactive 	= ""
icon_selected 	= ""
-----------------------------------------------------------------------------------------------------------------------
local get_taglist = function(s)

    -- Taglist buttons
    local taglist_buttons = gears.table.join
    (
        awful.button({}, 1, function(t)
        	t:view_only()
		end),
        awful.button({modkey}, 1, function(t)
			if client.focus then
				client.focus:move_to_tag(t)
			end
		end),
        awful.button({}, 3, awful.tag.viewtoggle),
        awful.button({modkey}, 3, function(t)
            if client.focus then client.focus:toggle_tag(t) end
        end),
        awful.button({}, 4, function(t)
            awful.tag.viewnext(t.screen)
        end),
        awful.button({}, 5, function(t)
            awful.tag.viewprev(t.screen)
        end))
-----------------------------------------------------------------------------------------------------------------------
	-- Function to update the tags
	local update_tags = function(self, c3)
		local tagicon = self:get_children_by_id('icon_role')[1]

		if #s.tags == 1 then
			tagicon.text = ''
		else
			if c3.selected then
				tagicon.text = icon_selected
			else
				tagicon.text = icon_inactive
			end
		end
		self:emit_signal_recursive("taglist_changed")
	end
--------------------------------------------------------------------------------------------------------------------------------------------

	-- Function to update the margin
	local update_margin = function(self)
		if self ~= nil then
			self.left	= #s.tags == 1 and 0 or margin_width
			self.right	= #s.tags == 1 and 0 or margin_width
		end
	end
--------------------------------------------------------------------------------------------------------------------------------------------

	local icon_taglist = wibox.widget
	{
		awful.widget.taglist
		{
			screen = s,
			filter = awful.widget.taglist.filter.all,
			layout =
			{
				spacing = 0,
				layout = wibox.layout.fixed.horizontal
			},
			widget_template =
			{
				{
					id = 'icon_role',
					font = font,
					text = icon_inactive,
					widget = wibox.widget.textbox
				},
				id 		= 'inner_margin',
				left 	= margin_width / 3,
				right 	= margin_width / 3,
				widget  = wibox.container.margin,

				create_callback = function(self, c3, index, objects)
					update_tags(self, c3)
				end,

				update_callback = function(self, c3, index, objects)
					update_tags(self, c3)
				end
			},
			buttons = taglist_buttons
		},
		id		= "outer_margin",
		left	= #s.tags == 1 and 0 or margin_width,
		right	= #s.tags == 1 and 0 or margin_width,

		widget	= wibox.container.margin,
	}

	margin = icon_taglist:get_children_by_id('outer_margin')[1]
	margin:connect_signal("taglist_changed", update_margin, margin)

	return icon_taglist
end
--------------------------------------------------------------------------------------------------------------------------------------------
return get_taglist
-----------------------------------------------------------------------------------------------------------------------