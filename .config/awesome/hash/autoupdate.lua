-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
local awful        = require("awful")
local naughty      = require('naughty')
--------------------------------------------------------------------------------
local updates_file = '/tmp/.lastupdate'

-- checks if configs need update. if so:
--  1. figures out how many n commits the configs are behind
--  2. saves the info of the last n commits to a temporary file
--  3. creates `.updated` file as flag for the next instance of awesome
awful.spawn.easy_async_with_shell(
  "cd ~/.dotfiles/ && git fetch && git rev-list --count HEAD..@{u}",
  function(stdout)
    local commits_behind = tostring(stdout):gsub("\n[^\n]*$", "")
    if commits_behind ~= '0' then
      -- lets user know that an update is happening
      naughty.notify({
        title = 'This config is ' .. commits_behind .. ' commits behind',
        text = 'Updating now...',
        border_color = Theme.Colors.Foreground.Urgent,
        timeout = 0,
      })

      -- saves the info of the commits local is behind remote
      awful.spawn.with_shell(
        "cd ~/.dotfiles/ && git log --remotes -"
        .. commits_behind
        .. " > "
        .. updates_file
        .. " && git pull"
      )

      -- creates a temporary file to let next instance of awesome knows it has
      -- to show the commits
      awful.spawn.with_shell("touch /tmp/.updated")
      awesome.restart()
    end
  end
)
--------------------------------------------------------------------------------
-- checks if `.updated` flag file exists, if so:
--   shows the info of the n-last commits (saved to file by previous function)
local updated = io.open('/tmp/.updated', "r")
if updated ~= nil then
  -- removes file so it doesn't get show on next start
  awful.spawn.with_shell('rm /tmp/.updated')
  naughty.notify({
    title = 'Confis Updated',
    text = 'Showing changes in terminal',
    border_color = Theme.Colors.Foreground.Urgent,
    timeout = 0,
  })
  -- shows the update changes to the user
  awful.spawn(Global.Apps.Terminal ..
    " --command='cat " .. updates_file .. "'", {
      floating = true,
      width = 800,
      placement = awful.placement.bottom_right
    })
  updated:close()
end
--------------------------------------------------------------------------------
