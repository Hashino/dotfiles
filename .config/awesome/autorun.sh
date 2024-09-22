#!/usr/bin/env bash
function run {
  if ! pgrep -f $1; then
    $@ &
    disown >"${HOME}/.local/share/xorg/startup/${1}.log" 2>&1
  fi
}

computer_type=$(cat /sys/class/dmi/id/chassis_type)

# detects if running on a notebook
if [ "$computer_type" == "8" ] || [ "$computer_type" == "9" ] || [ "$computer_type" == "10" ]; then
  # network applet
  run nm-applet
  # battery indicator
  run cbatticon
fi

# compositor
run picom -b

# audio applet
run pasystray #--notify=all

# lock screen
run xset s 1800 5
run xss-lock -n /usr/lib/xsecurelock/dimmer -l -- xsecurelock

# makes mouse disappear
run unclutter -idle 3

# polkit
run /usr/lib/xfce-polkit/xfce-polkit

# keyring
run dbus-update-activation-environment --all
run gnome-keyring-daemon --start --components=secrets

# rgb stuff
run openrgb -p default_off.orp
ckb-next --profile default --background --close
