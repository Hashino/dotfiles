local awful = require("awful")
local gears = require("gears")
local wibox = require("wibox")
local beautiful = require("beautiful")

----------------------------------------------------------------------
----------------------------------------------------------------------
local naughty 	= require("naughty")

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

----------------------------------------------------------------------
----------------------------------------------------------------------

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

		if #s.tags == 1 then
			tagicon.text	= ""
		else
			if c3.selected then
				tagicon.text = "  "
			else
				tagicon.text = "  "
			end
		end
		self:emit_signal_recursive("taglist_changed")
	end
	
----------------------------------------------------------------------
----------------------------------------------------------------------

	-- Function to update the margin
	local update_margin = function(self)		
		if self ~= nil then
			if #s.tags == 1 then
				self.left	= 0
				self.right	= 0
			else		
				self.left	= 8
				self.right	= 8
			end
		end
	end
		
----------------------------------------------------------------------
----------------------------------------------------------------------

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
					font = "Terminus (TTF) Medium 8", 
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
		},
		id		= "taglist_margin",
		right	= 0,
		left	= 0,
		widget	= wibox.container.margin,
	}
	
	
	
	margin = icon_taglist:get_children_by_id('taglist_margin')[1]
	margin:connect_signal("taglist_changed", update_margin, margin)
	
	update_margin()
	
	return icon_taglist
end

return get_taglist