-- by Hashino https://github.com/Hashino/dotfiles
--------------------------------------------------------------------------------
Theme                           = {}
Theme.location                  = "~/.config/awesome/theme/"
Theme.UniversalSize             = 32
--------------------------------------------------------------------------------
Theme.Spacing                   = Theme.UniversalSize * (2 / 3)
--------------------------------------------------------------------------------
Theme.useless_gap               = Theme.UniversalSize / 5
Theme.gap_single_client         = true
--------------------------------------------------------------------------------
Theme.Font_Name                 = "Terminess Nerd Font Mono Regular"
Theme.Font_Size                 = Theme.UniversalSize * (2 / 5)
--------------------------------------------------------------------------------
Theme.Font                      = Theme.Font_Name .. " " .. tostring(Theme.Font_Size)
--------------------------------------------------------------------------------
Theme.Wallpaper                 = Theme.location .. "/wallpaper.png"
--------------------------------------------------------------------------------
Theme.Colors                    =
{
    Background =
    {
        Darkest = "#232935", --bg_color_3
        Darker  = "#2a283b", --bg_color_1
        Dark    = "#2c3040", --bg_color_6
        Neutral = "#323845", --bg_color_2
        Light   = "#353b47", --bg_color_4
        Lighter = "#5f6677", --bg_color_5
    },
    Foreground =
    {
        Normal = "#ddeeff",
        Urgent = "#ff0000",
    },
    Transparent = "#00000000",
}
--------------------------------------------------------------------------------
Theme.fg_normal                 = Theme.Colors.Foreground.Normal
Theme.fg_urgent                 = Theme.Colors.Foreground.Urgent
--------------------------------------------------------------------------------
Theme.bg_normal                 = Theme.Colors.Darker
--------------------------------------------------------------------------------
Theme.bg_focus                  = Theme.bg_normal
Theme.bg_urgent                 = "#000000"
Theme.bg_systray                = Theme.bg_normal
--------------------------------------------------------------------------------
Theme.fg_focus                  = Theme.fg_normal
Theme.fg_minimize               = Theme.fg_normal
--------------------------------------------------------------------------------
Theme.border_width              = Theme.UniversalSize / 20
Theme.border_normal             = Theme.Colors.Background.Lighter
Theme.border_focus              = Theme.Colors.Foreground.Normal
Theme.border_marked             = Theme.Colors.Background.Dark
--------------------------------------------------------------------------------
Theme.tasklist_font             = Theme.Font
Theme.tasklist_plain_task_name  = true
--------------------------------------------------------------------------------
Theme.titlebar_bg               = Theme.Colors.Background.Darkest
Theme.titlebar_fg               = Theme.Colors.Foreground.Normal
--------------------------------------------------------------------------------
Theme.systray_icon_spacing      = Theme.Spacing * (2 / 3)
Theme.bg_systray                = Theme.Colors.Background.Neutral
--------------------------------------------------------------------------------
Theme.hotkeys_font              = Theme.Font
--------------------------------------------------------------------------------
Theme.notification_bg           = Theme.Colors.Background.Dark
Theme.notification_max_width    = Theme.UniversalSize * 30
Theme.notification_max_height   = Theme.UniversalSize * 40
Theme.notification_icon_size    = Theme.UniversalSize * 5
Theme.notification_width        = Theme.notification_max_width
Theme.notification_opacity      = 0.95
Theme.notification_font         = Theme.Font
Theme.notification_border_width = Theme.UniversalSize / 2
Theme.notification_border_color = Theme.Colors.Background.Lighter
--------------------------------------------------------------------------------
Theme.layout_tile               = Theme.location .. "/layout_icons/tile.png"
Theme.layout_fairh              = Theme.location .. "/layout_icons/fairh.png"
Theme.layout_fairv              = Theme.location .. "/layout_icons/fairv.png"
Theme.layout_floating           = Theme.location .. "/layout_icons/floating.png"
Theme.layout_magnifier          = Theme.location .. "/layout_icons/magnifier.png"
Theme.layout_max                = Theme.location .. "/layout_icons/max.png"
Theme.layout_tilebottom         = Theme.location .. "/layout_icons/tilebottom.png"
Theme.layout_tileleft           = Theme.location .. "/layout_icons/tileleft.png"
Theme.layout_tiletop            = Theme.location .. "/layout_icons/tiletop.png"
Theme.layout_spiral             = Theme.location .. "/layout_icons/spiral.png"
Theme.layout_dwindle            = Theme.location .. "/layout_icons/dwindle.png"
--------------------------------------------------------------------------------
Theme.awesome_icon              = Theme.location .. "/layout_icons/awesome.png"
--------------------------------------------------------------------------------
return Theme
-- vim: filetype=lua:expandtab:shiftwidth=4:tabstop=8:softtabstop=4:textwidth=80
--------------------------------------------------------------------------------
