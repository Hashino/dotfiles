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
#run thunar --daemon
run picom -b
run pasystray --notify=all
run /usr/lib/xfce-polkit/xfce-polkit

run sudo openrgb --startminimized

ckb-next --background

#enviroment variables
export TERMINAL=/usr/bin/lxterminal
export EDITOR=/usr/bin/mousepad

export PF_INFO="ascii title os kernel wm shell memory palette"
