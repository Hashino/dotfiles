-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local awful = require("awful")
local ruled = require("ruled")
--------------------------------------------------------------------------------
-- Rules to apply to new clients.
ruled.client.connect_signal("request::rules", function()
  -- All clients will match this rule.
  ruled.client.append_rule {
    id         = "global",
    rule       = {},
    properties = {
      focus             = awful.client.focus.filter,
      raise             = true,
      titlebars_enabled = false,
      screen            = awful.screen.preferred,
      placement         = awful.placement.no_overlap + awful.placement.no_offscreen,
    },
  }
  -- Floating clients.
  ruled.client.append_rule {
    id         = "floating",
    rule_any   = {
      class = { "Qalculate-gtk", "Devtools", },
      -- Note that the name property shown in xprop might be set slightly after creation of the client
      -- and the name shown there might not match defined rules here.
      name  = { "Event Tester", },     -- xev.
      role  = { "pop-up", "toolbox", }, -- e.g. Google Chrome's (detached) Developer Tools.
    },
    properties = { floating = true, },
  }
end)
--------------------------------------------------------------------------------
-- Notifications rules
ruled.notification.connect_signal("request::rules", function()
  -- All notifications will match this rule.
  ruled.notification.append_rule
  {
    rule       = {},
    properties =
    {
      screen           = awful.screen.preferred,
      implicit_timeout = 5,
      position         = "bottom_middle",
    },
  }
end)
--------------------------------------------------------------------------------
