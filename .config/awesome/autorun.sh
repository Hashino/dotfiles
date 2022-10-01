#!/usr/bin/env bash
## run (only once) processes which spawn with the same name
#function run {
#   if (command -v $1 && ! pgrep $1); then
#     $@&
#   fi
#}
function run {
  if ! pgrep -f $1 ;
  then
    $@&
  fi
}
run thunar --daemon
run picom -b
run pasystray --notify=all
run /usr/lib/xfce-polkit/xfce-polkit

run sudo openrgb --startminimized
ckb-next --background

crd --start #chrome remote desktop


#enviroment variables
export QT_QPA_PLATFORMTHEME=gtk2
export PF_INFO="ascii title os kernel wm shell memory palette"
export TERMINAL=/usr/bin/lxterminal
