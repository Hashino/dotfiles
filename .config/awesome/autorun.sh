#!/usr/bin/env bash
function run {
  if ! pgrep -f $1 ;
  then
    $@& disown > "${HOME}/.local/share/xorg/startup/${1}.log" 2>&1
  fi
}

run picom -b

run pasystray --notify=all

#run nm-applet

# polkit
run /usr/lib/xfce-polkit/xfce-polkit

# keyring
run dbus-update-activation-environment --all
run gnome-keyring-daemon --start --components=secrets

# lock screen
run xset s 1800 5
run xss-lock -n /usr/lib/xsecurelock/dimmer -l -- xsecurelock

# makes mouse disappear
run unclutter -idle 3

# rgb stuff
run openrgb -p default_off.orp
ckb-next --profile default  --background --close
