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


#enviroment variables
export QT_QPA_PLATFORMTHEME=gtk2