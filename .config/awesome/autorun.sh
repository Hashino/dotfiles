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

run picom -b

run pasystray --notify=all

#run nm-applet

#turns all lights off
run sudo openrgb --mode static --color 000000

#run ckb-next --profile default  --background --close

ckb-next --profile default  --background --close & disown & exit

run discord --start-minimized

run /usr/lib/xfce-polkit/xfce-polkit

#set XSECURELOCK_PASSWORD_PROMPT asterisks
#set XSECURELOCK_COMPOSITE_OBSCURER 0
#set XSECURELOCK_SHOW_KEYBOARD_LAYOUT 0
#set XSECURELOCK_AUTH_FOREGROUND_COLOR #ddeeff
#set XSECURELOCK_FONT "Terminess Nerd Font"

run dbus-update-activation-environment --all
run gnome-keyring-daemon --start --components=secrets

run xset s 1800 5
run xss-lock -n /usr/lib/xsecurelock/dimmer -l -- xsecurelock
