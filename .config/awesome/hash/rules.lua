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
-------------------------------------------------------------------------------------------------------------------
-- Floating clients.
    ruled.client.append_rule
    {
        id       = "floating",
        rule_any =
        {
            name =
            {
                "Event Tester",  -- xev.
            },
            role =
            {
                "pop-up",         -- e.g. Google Chrome's (detached) Developer Tools.
            }
        },
        properties = { floating = true }
    }
-------------------------------------------------------------------------------------------------------------------
-- Add titlebars to normal clients and dialogs
    ruled.client.append_rule
    {
        id         = "titlebars",
        rule_any   = { type = { "normal", "dialog" } },
        properties = { titlebars_enabled = false }
    }
-------------------------------------------------------------------------------------------------------------------
-- Set Firefox to always map on the tag named "2" on screen 1.
    ruled.client.append_rule
    {
         rule       = { class = "Firefox" },
         properties = { screen = 1, tag = "2" }
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