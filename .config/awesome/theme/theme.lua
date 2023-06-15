-- by Hashino https://github.com/Hashino/dotfiles
-------------------------------------------------------------------------------------------------------------------
theme                                   = {}
theme.location				= "~/.config/awesome/theme/"
theme.universalsize 			= 24
-------------------------------------------------------------------------------------------------------------------
theme.spacing 				= theme.universalsize * (2/3)
-------------------------------------------------------------------------------------------------------------------
theme.font_name				= "Terminus (TTF) Medium "
theme.font_size			        = theme.universalsize / 2
theme.icon_theme 			= "Papirus-Dark"
-------------------------------------------------------------------------------------------------------------------
theme.wallpaper 			= "~/wallpaper.png"
-------------------------------------------------------------------------------------------------------------------
theme.bg_color_1    			= "#2a303b"
theme.bg_color_2    			= "#323845"
theme.bg_color_3    			= "#232935"
-------------------------------------------------------------------------------------------------------------------
theme.bg_color_4    			= "#353b47"
theme.bg_color_5    			= "#5f6677"
theme.bg_color_6    			= "#2c3040"
-------------------------------------------------------------------------------------------------------------------
theme.fg_normal     			= "#ddeeff"
theme.fg_urgent     			= "#ff0000"
-------------------------------------------------------------------------------------------------------------------
theme.useless_gap   			= theme.universalsize / 5
theme.gap_single_client 		= true
-------------------------------------------------------------------------------------------------------------------
theme.transparent			= "#00000000"
-------------------------------------------------------------------------------------------------------------------
theme.font          			= theme.font_name .. tostring(theme.font_size)
-------------------------------------------------------------------------------------------------------------------
theme.bg_normal     			= theme.bg_color_1
-------------------------------------------------------------------------------------------------------------------
theme.bg_focus      			= theme.bg_normal
theme.bg_urgent     			= "#000000"
theme.bg_systray    			= theme.bg_normal
-------------------------------------------------------------------------------------------------------------------
theme.fg_focus      			= theme.fg_normal
theme.fg_minimize   			= theme.fg_normal
-------------------------------------------------------------------------------------------------------------------
theme.border_width                      = theme.universalsize / 20
theme.border_normal                     = theme.bg_color_4
theme.border_focus                      = theme.bg_color_5
theme.border_marked                     = theme.bg_color_6
-------------------------------------------------------------------------------------------------------------------
theme.tasklist_plain_task_name          = true
-------------------------------------------------------------------------------------------------------------------
theme.systray_icon_spacing              = theme.spacing
theme.bg_systray                        = theme.bg_color_2
-------------------------------------------------------------------------------------------------------------------
theme.notification_bg                   = theme.bg_color_1
theme.notification_max_width 	        = theme.universalsize * 30
theme.notification_max_height 	        = theme.universalsize * 40
theme.notification_icon_size 	        = theme.universalsize * 5
theme.notification_width		= theme.notification_max_width
theme.notification_opacity 		= 0.95
theme.notification_font                 = theme.font
theme.notification_border_width         = theme.universalsize / 2
theme.notification_border_color         = theme.bg_color_5
-------------------------------------------------------------------------------------------------------------------
theme.layout_tile       = theme.location.. "/layout_icons/tile.png"
theme.layout_fairh      = theme.location.. "/layout_icons/fairh.png"
theme.layout_fairv      = theme.location.. "/layout_icons/fairv.png"
theme.layout_floating   = theme.location.. "/layout_icons/floating.png"
theme.layout_magnifier  = theme.location.. "/layout_icons/magnifier.png"
theme.layout_max        = theme.location.. "/layout_icons/max.png"
theme.layout_fullscreen = theme.location.. "/layout_icons/fullscreen.png"
theme.layout_tilebottom = theme.location.. "/layout_icons/tilebottom.png"
theme.layout_tileleft   = theme.location.. "/layout_icons/tileleft.png"
theme.layout_tiletop    = theme.location.. "/layout_icons/tiletop.png"
theme.layout_spiral     = theme.location.. "/layout_icons/spiral.png"
theme.layout_dwindle    = theme.location.. "/layout_icons/dwindle.png"
-------------------------------------------------------------------------------------------------------------------
theme.awesome_icon      = theme.location.. "/layout_icons/awesome.png"
-------------------------------------------------------------------------------------------------------------------
return theme
-- vim: filetype=lua:expandtab:shiftwidth=4:tabstop=8:softtabstop=4:textwidth=80
-------------------------------------------------------------------------------------------------------------------
