local M = {}

M.mason = {
  ensure_installed = {
    -- lua stuff
    "lua-language-server",
    "stylua",

    -- c/cpp stuff
    "clangd",
    "clang-format",

    -- rust stuff
    "rust-analyzer",
  },
}

M.treesitter = {
  ensure_installed = {
    "vim",
    "lua",
    "c",
    "cpp",
    "rust",
    --"css",
    --"javascript",
    --"typescript",
    --"markdown",
    --"markdown_inline",
  },
  indent = {
    enable = true,
    -- disable = {
    --   "python"
    -- },
  },
}

local function nvimtree_on_attach(bufnr)
    local api = require "nvim-tree.api"

    local function opts(desc)
      return { desc = "nvim-tree: " .. desc, buffer = bufnr, noremap = true, silent = true, nowait = true }
    end

    -- default mappings
    api.config.mappings.default_on_attach(bufnr)

    -- custom mappings
    vim.keymap.set('n', '<Enter>',    api.tree.change_root_to_node,         opts('Change Directory'))
    vim.keymap.set('n', '<BS>',       api.tree.change_root_to_parent,       opts('Up a Directory'))
    vim.keymap.set('n', '<Left>',     api.node.navigate.parent_close,       opts('Close Directory'))
    vim.keymap.set('n', 'h',     api.node.navigate.parent_close,       opts('Close Directory'))
    vim.keymap.set('n', '<Right>',    api.node.open.edit,                   opts('Open'))
    vim.keymap.set('n', 'l',    api.node.open.edit,                   opts('Open'))
    vim.keymap.set('n', '?',          api.tree.toggle_help,                 opts('Help'))
end
-- git support in nvimtree
M.nvimtree = {
  on_attach = nvimtree_on_attach,
  git = {
    enable = true,
  },

  renderer = {
    highlight_git = true,
    icons = {
      show = {
        git = true,
      },
      glyphs = {
        default = "󰈚",
        symlink = "",
        folder = {
          default = "",
          empty = "",
          empty_open = "",
          open = "",
          symlink = "",
          symlink_open = "",
          arrow_open = "",
          arrow_closed = "",
        },
        git = {
          unstaged = "",
          staged = "",
          unmerged = "",
          renamed = "",
          untracked = "",
          deleted = "",
          ignored = "◌",
        },
      },
    },
  },
}

require("nvterm").setup({
  terminals = {
    shell = vim.o.shell,
    list = {},
    type_opts = {
      float = {
        relative = 'editor',
        row = 0.3,
        col = 0.25,
        width = 0.5,
        height = 0.4,
        border = "single",
      },
      horizontal = { location = "rightbelow", split_ratio = .5, },
      vertical = { location = "rightbelow", split_ratio = .5 },
    }
  },
  behavior = {
    autoclose_on_quit = {
      enabled = false,
      confirm = true,
    },
    close_on_exit = true,
    auto_insert = true,
  },
})

return M
