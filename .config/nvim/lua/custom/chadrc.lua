---@type ChadrcConfig
local M = {}

-- Path to overriding theme and highlights files
local highlights = require "custom.highlights"

M.ui = {
  theme = "onenord",

  hl_override = highlights.override,
  hl_add = highlights.add,

    ------------------------------- nvchad_ui modules -----------------------------
  statusline = {
    theme = "vscode_colored", -- default/vscode/vscode_colored/minimal
    -- default/round/block/arrow separators work only for default statusline theme
    -- round and block will work for minimal theme only
    separator_style = "block",
    overriden_modules = nil,
  },

  -- lazyload it when there are 1+ buffers
  tabufline = {
    show_numbers = false,
    enabled = true,
    lazyload = true,
    overriden_modules = nil,
  },

}

M.plugins = "custom.plugins"

-- check core.mappings for table structure
M.mappings = require "custom.mappings"

return M
