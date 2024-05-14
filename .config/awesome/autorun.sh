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
    $@& > "${HOME}/.local/share/xorg/startup/${1}.log" 2>&1
  fi
}

run picom -b

run pasystray --notify=all

#run nm-applet

ckb-next --profile default  --background --close
run discord --start-minimized


run /usr/lib/xfce-polkit/xfce-polkit

run dbus-update-activation-environment --all
run gnome-keyring-daemon --start --components=secrets

run xset s 1800 5
run xss-lock -n /usr/lib/xsecurelock/dimmer -l -- xsecurelock

run unclutter -idle 1.5 -root
