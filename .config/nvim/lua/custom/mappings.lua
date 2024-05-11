---@type MappingsTable
local M = {}

M.general = {
  n = {
    [";"] = { ":", "enter command mode", opts = { nowait = true } },
  },
}

M.nvimtree = {
  n = {
    ["<C-Right>"] = { "<cmd> NvimTreeResize +10 <CR>" , "increase widht" },
    ["<C-Left>"] = { "<cmd> NvimTreeResize -10 <CR>" , "increase widht" },
    --["<Left>"] = { "<cmd> nvim-tree-api.node.navigate.parent_close() <CR>", "close folder" },
  },
}

-- more keybinds!

return M
