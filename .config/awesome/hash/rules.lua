-- by Hashino https://github.com/Hashino/dotfiles
-------------------------------------------------------------------------------------------------------------------
local awful     = require("awful")
local gears     = require("gears")
local ruled     = require("ruled")
local theme     = require("beautiful")
-------------------------------------------------------------------------------------------------------------------
-- Rules to apply to new clients.
ruled.client.connect_signal("request::rules", function()
-------------------------------------------------------------------------------------------------------------------
-- All clients will match this rule.
    ruled.client.append_rule {
        id         = "global",
        rule       = { },
        properties = {
            focus       = awful.client.focus.filter,
            screen      = awful.screen.preferred,
            raise       = true,
            placement   = awful.placement.no_overlap+awful.placement.no_offscreen
        }
    }
end)
-------------------------------------------------------------------------------------------------------------------
ruled.notification.connect_signal('request::rules', function()
-- All notifications will match this rule.
    ruled.notification.append_rule
    {
        rule       = { },
        properties =
        {
            screen           = awful.screen.preferred,
            implicit_timeout = 5,
        }
    }
end)
-------------------------------------------------------------------------------------------------------------------