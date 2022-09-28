-- by Hashino https://github.com/Hashino/dotfiles
-----------------------------------------------------------------------------------------------------------------------
local awful = require("awful")
local gears = require("gears")
local wibox = require("wibox")
local beautiful = require("beautiful")
-----------------------------------------------------------------------------------------------------------------------
font 			= theme.font_name .. tostring(theme.universalsize * (3/8))
outer_margin	= theme.universalsize / 3
inner_margin 	= outer_margin / 3
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
		local tagicon 		= self:get_children_by_id('icon_role')[1]
		local inner_margin 	= tagicon:get_children_by_id('inner_margin')[1]
		if #s.tags == 1 then
			tagicon.text = ''
			inner_margin.left	= 0
			inner_margin.right	= 0
		else
			inner_margin.left	= inner_margin
			inner_margin.right	= inner_margin
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

		self.left	= #s.tags == 1 and 0 or outer_margin
		self.right	= #s.tags == 1 and 0 or outer_margin
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
				left 	= outer_margin / 3,
				right 	= outer_margin / 3,
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
		id		= "margin",
		left	= #s.tags == 1 and 0 or outer_margin,
		right	= #s.tags == 1 and 0 or outer_margin,

		widget	= wibox.container.margin,
	}

	margin_widget = icon_taglist:get_children_by_id('margin')[1]
	margin:connect_signal("taglist_changed", update_margin, margin_widget)

	return icon_taglist
end
--------------------------------------------------------------------------------------------------------------------------------------------
return get_taglist
-----------------------------------------------------------------------------------------------------------------------