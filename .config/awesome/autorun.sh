#
#
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
run nm-applet
#run blueman-applet

run /usr/lib/xfce-polkit/xfce-polkit

#run sudo openrgb --startminimized

#ckb-next --background

export XSECURELOCK_PASSWORD_PROMPT=asterisks
export XSECURELOCK_COMPOSITE_OBSCURER=0
export XSECURELOCK_SHOW_KEYBOARD_LAYOUT=0

export XSECURELOCK_AUTH_FOREGROUND_COLOR=#ddeeff
export XSECURELOCK_FONT="Terminess Nerd Font"

#export XSECURELOCK_SWITCH_USER_COMMAND="killall Xorg"

xset s 300 5
xss-lock -n /usr/lib/xsecurelock/dimmer -l -- xsecurelock
