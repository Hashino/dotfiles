-- by Hashino https://github.com/Hashino/dotfiles
-----------------------------------------------------------------------------------------------------------------------
local awful 	= require("awful")
local gears 	= require("gears")
local theme	    = require("beautiful")
-----------------------------------------------------------------------------------------------------------------------
clientkeys = gears.table.join
(
    awful.key({ modkey }, "x",      function (c) c:kill() end,
        {description = "close", group = "client"}),
    awful.key({ modkey,           }, "n",
        function (c)
            -- The client currently has the input focus, so it cannot be
            -- minimized, since minimized clients can't have the focus.
            c.minimized = true
        end ,
        {description = "minimize", group = "client"}),
    awful.key({ modkey }, "m",
        function (c)
            c.maximized = not c.maximized
            c:raise()
        end ,
        {description = "(un)maximize", group = "client"}),

    awful.key({ modkey }, "f",  awful.client.floating.toggle,
        {description = "toggle floating", group = "client"})
)
-----------------------------------------------------------------------------------------------------------------------
clientbuttons = gears.table.join
(
    awful.button({ }, 1, function (c) client.focus = c; c:raise() end),
    awful.button({ modkey }, 1, awful.mouse.client.move),
    awful.button({ modkey }, 3, awful.mouse.client.resize)
)
-----------------------------------------------------------------------------------------------------------------------
rules =
{
    -- All clients will match this rule.
    { rule = { },
        properties = {
            border_width = theme.border_width,
            border_color = theme.border_normal,
            focus = awful.client.focus.filter,
            raise = true,
            keys = clientkeys,
            buttons = clientbuttons,
            size_hints_honor = false, -- Remove gaps between terminals
            screen = awful.screen.preferred,
            callback = awful.client.setslave,
            placement = awful.placement.no_overlap+awful.placement.no_offscreen
        }
    },
-----------------------------------------------------------------------------------------------------------------------
    -- Floating clients.
    {
        rule_any =
        {
            instance =
            {

            },
            class =
            {

            },
            name =
            {
                "Event Tester",  -- xev.
            },
            role =
            {
                "pop-up",       -- e.g. Google Chrome's (detached) Developer Tools.
            }
        },
        properties = { floating = true }
    },
    -- Dialogs are always on top
    {
        rule_any = {type = { "dialog" } },
        properties = {  ontop  = true },
    },
}
-----------------------------------------------------------------------------------------------------------------------
awful.rules.rules = rules
-----------------------------------------------------------------------------------------------------------------------