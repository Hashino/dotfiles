local theme_colors = {
  fg           = "#C8D0E0",
  fg_light     = "#E5E9F0",
  bg           = "#2E3440",
  gray         = "#646A76",
  light_gray   = "#6C7A96",
  cyan         = "#88C0D0",
  blue         = "#81A1C1",
  dark_blue    = "#5E81AC",
  green        = "#A3BE8C",
  light_green  = "#8FBCBB",
  dark_red     = "#BF616A",
  red          = "#D57780",
  light_red    = "#DE878F",
  pink         = "#E85B7A",
  dark_pink    = "#E44675",
  orange       = "#D08F70",
  yellow       = "#EBCB8B",
  purple       = "#B988B0",
  light_purple = "#B48EAD",
  none         = "NONE",
}

local colors = {
  -- The default text color
  foreground = theme_colors.fg,
  -- The default background color
  background = theme_colors.bg,

  -- Overrides the cell background color when the current cell is occupied by the
  -- cursor and the cursor style is set to Block
  cursor_bg = 'ddeeff',
  -- Overrides the text color when the current cell is occupied by the cursor
  cursor_fg = theme_colors.bg,
  -- Specifies the border color of the cursor when the cursor style is set to Block,
  -- or the color of the vertical or horizontal bar when the cursor style is set to
  -- Bar or Underline.
  cursor_border = '#52ad70',

  -- the foreground color of selected text
  selection_fg = 'black',
  -- the background color of selected text
  selection_bg = '#fffacd',

  -- The color of the scrollbar "thumb"; the portion that represents the current viewport
  scrollbar_thumb = '#222222',

  -- The color of the split lines between panes
  split = '#444444',

  ansi = {
    "#3b4252",
    "#bf616a",
    "#a3be8c",
    "#ebcb8b",
    "#81a1c1",
    "#b48ead",
    "#88c0d0",
    "#e5e9f0",
  },
  brights = {
    "#4c566a",
    "#bf616a",
    "#a3be8c",
    "#ebcb8b",
    "#81a1c1",
    "#b48ead",
    "#8fbcbb",
    "#eceff4"
  },

  -- Arbitrary colors of the palette in the range from 16 to 255
  indexed = { [136] = '#af8700' },

  -- Since: 20220319-142410-0fcdea07
  -- When the IME, a dead key or a leader key are being processed and are effectively
  -- holding input pending the result of input composition, change the cursor
  -- to this color to give a visual cue about the compose state.
  compose_cursor = 'orange',

  -- Colors for copy_mode and quick_select
  -- available since: 20220807-113146-c2fee766
  -- In copy_mode, the color of the active text is:
  -- 1. copy_mode_active_highlight_* if additional text was selected using the mouse
  -- 2. selection_* otherwise
  copy_mode_active_highlight_bg = { Color = '#000000' },
  -- use `AnsiColor` to specify one of the ansi color palette values
  -- (index 0-15) using one of the names "Black", "Maroon", "Green",
  --  "Olive", "Navy", "Purple", "Teal", "Silver", "Grey", "Red", "Lime",
  -- "Yellow", "Blue", "Fuchsia", "Aqua" or "White".
  copy_mode_active_highlight_fg = { AnsiColor = 'Black' },
  copy_mode_inactive_highlight_bg = { Color = '#52ad70' },
  copy_mode_inactive_highlight_fg = { AnsiColor = 'White' },

  quick_select_label_bg = { Color = 'peru' },
  quick_select_label_fg = { Color = '#ffffff' },
  quick_select_match_bg = { AnsiColor = 'Navy' },
  quick_select_match_fg = { Color = '#ffffff' },
}

-- and finally, return the configuration to wezterm
return colors
