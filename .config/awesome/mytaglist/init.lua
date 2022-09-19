local awful = require("awful")
local gears = require("gears")
local wibox = require("wibox")
local beautiful = require("beautiful")
------------------------------------

local get_taglist = function(s)
    -- Taglist buttons
    local taglist_buttons = gears.table.join(
                                awful.button({}, 1,
                                             function(t) t:view_only() end),
                                awful.button({modkey}, 1, function(t)
            if client.focus then client.focus:move_to_tag(t) end
        end), awful.button({}, 3, awful.tag.viewtoggle),
                                awful.button({modkey}, 3, function(t)
            if client.focus then client.focus:toggle_tag(t) end
        end), awful.button({}, 4, function(t)
            awful.tag.viewnext(t.screen)
        end), awful.button({}, 5, function(t)
            awful.tag.viewprev(t.screen)
        end))

----------------------------------------------------------------------
----------------------------------------------------------------------

-- Function to update the tags
local update_tags = function(self, c3)
	local tagicon = self:get_children_by_id('icon_role')[1]
	if c3.selected then
		tagicon.text = "  "
	else
		tagicon.text = "  "
	end
end
    
----------------------------------------------------------------------
----------------------------------------------------------------------

local icon_taglist = awful.widget.taglist 
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
			font = "Terminus (TTF) Medium 10", 
			text = "  ", 
			widget = wibox.widget.textbox
		},
		--id = 'background_role',
		widget = wibox.container.background,
		
		create_callback = function(self, c3, index, objects)
			update_tags(self, c3)       
		end,

		update_callback = function(self, c3, index, objects)
			update_tags(self, c3)
		end
	},
	buttons = taglist_buttons
}
return icon_taglist
end

return get_taglist