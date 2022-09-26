-- by Hashino https://github.com/Hashino/dotfiles
-----------------------------------------------------------------------------------------------------------------------
theme = {}
theme.hash 						= "~/.config/awesome/theme/hashino/"
theme.universalsize 			= 23
-----------------------------------------------------------------------------------------------------------------------
theme.font_name					= "Terminus (TTF) Medium "
theme.font          			= theme.font_name .. tostring(theme.universalsize / 2)
theme.icon_theme 				= "Papirus-Dark"

theme.wallpaper 				= "~/wallpaper.png"

theme.useless_gap   			= theme.universalsize / 8
theme.gap_single_client 		= true
-----------------------------------------------------------------------------------------------------------------------
theme.bg_normal     			= "#2a303b"
-----------------------------------------------------------------------------------------------------------------------
theme.bg_accent1    			= "#2a303b"
theme.bg_accent2    			= "#323845"
theme.bg_accent3    			= "#232935"
-----------------------------------------------------------------------------------------------------------------------
theme.transparent				= "#00000000"
-----------------------------------------------------------------------------------------------------------------------
--theme.bg_accent1    			= "#5BCEFA"
--theme.bg_accent2    			= "#F5A9B8"
--theme.bg_accent3    			= "#FFFFFF"
theme.bg_focus      			= theme.bg_normal
theme.bg_urgent     			= "#000000"
theme.bg_systray    			= theme.bg_normal
-----------------------------------------------------------------------------------------------------------------------
theme.fg_normal     			= "#ddeeff"
--theme.fg_normal     			= "#555555"
theme.fg_focus      			= theme.fg_normal
theme.fg_urgent     			= "#ff0000"
theme.fg_minimize   			= theme.fg_normal
-----------------------------------------------------------------------------------------------------------------------
theme.border_width  			= theme.universalsize / 20
theme.border_normal 			= "#353b47"
theme.border_focus  			= "#5f6677"
theme.border_marked 			= "#2c3040"
-----------------------------------------------------------------------------------------------------------------------
theme.spacing 					= theme.universalsize / 2
-----------------------------------------------------------------------------------------------------------------------
theme.tasklist_plain_task_name  = true
-----------------------------------------------------------------------------------------------------------------------
theme.systray_icon_spacing 		= theme.spacing
theme.bg_systray 				= theme.bg_accent2
-----------------------------------------------------------------------------------------------------------------------
theme.notification_bg 			= theme.bg_accent1
theme.notification_max_width 	= theme.universalsize * 20
theme.notification_max_height 	= theme.universalsize * 40
theme.notification_icon_size 	= theme.universalsize * 5
theme.notification_width		= theme.notification_max_width
theme.notification_opacity 		= 0.85
theme.notification_font 		= theme.font
-----------------------------------------------------------------------------------------------------------------------
theme.layout_tile       = theme.hash .. "/icons/tile.png"
theme.layout_fairh      = theme.hash .. "/icons/fairh.png"
theme.layout_fairv      = theme.hash .. "/icons/fairv.png"
theme.layout_floating   = theme.hash .. "/icons/floating.png"
theme.layout_magnifier  = theme.hash .. "/icons/magnifier.png"
theme.layout_max        = theme.hash .. "/icons/max.png"
theme.layout_fullscreen = theme.hash .. "/icons/fullscreen.png"
theme.layout_tilebottom = theme.hash .. "/icons/tilebottom.png"
theme.layout_tileleft   = theme.hash .. "/icons/tileleft.png"
theme.layout_tiletop    = theme.hash .. "/icons/tiletop.png"
theme.layout_spiral     = theme.hash .. "/icons/spiral.png"
theme.layout_dwindle    = theme.hash .. "/icons/dwindle.png"
-----------------------------------------------------------------------------------------------------------------------
return theme
-- vim: filetype=lua:expandtab:shiftwidth=4:tabstop=8:softtabstop=4:textwidth=80
