#!/bin/bash
# Hash's dotfiles install script
# https://github.com/Hashino/dotfiles

# meant to be used right after arch install
# TODO: make a fedora version


##########################################################

dotfiles_remote="https://github.com/Hashino/dotfiles"

dotfiles_local="${HOME}/.dotfiles"
log_file="${HOME}/.config/install.log"

##########################################################

RED='\033[1;31m'
GREEN='\033[1;32m'
BLUE='\033[4;34m'
ORANGE='\033[4;33m'
NORMAL='\033[0;37m'

TITLE='\033[1;36m'
QUOTE='\033[4;36m'


check_success () {
  if [ $? -eq 0 ]; then
    echo -e " | ${GREEN}Sucess${NORMAL}"
  else
    echo -e -n " | ${RED}Failed${NORMAL} more info in ${BLUE}~/.config/install.log${NORMAL}:${QUOTE}"
    wc -l $log_file | cut -f1 -d" "
    echo -e -n "${NORMAL}"
  fi
}

#resets install log
echo "" > $log_file

cat << "EOF" 
  _               _     _               __ _ _           
 | |             | |   (_)             / _(_) |          
 | |__   __ _ ___| |__  _ _ __   ___  | |_ _| | ___  ___ 
 | '_ \ / _` / __| '_ \| | '_ \ / _ \ |  _| | |/ _ \/ __|
 | | | | (_| \__ \ | | | | | | | (_) || | | | |  __/\__ \
 |_| |_|\__,_|___/_| |_|_|_| |_|\___(_)_| |_|_|\___||___/

EOF
# clone dotfiles 
echo -e "${TITLE}Cloning dotfiles${NORMAL}"
echo " "
echo -e -n "cloning ${BLUE}${dotfiles_remote}${NORMAL} to ${BLUE}${dotfiles_local}${NORMAL}"

git clone $dotfiles_remote $dotfiles_local >> $log_file 2>&1
check_success

cd "${dotfiles_local}/.config"

echo " "
echo -e "${TITLE}Creating symlinks between folders in ${ORANGE}.dotfiles/.config/${NORMAL}${TITLE} and ${BLUE}~/.config/${NORMAL}"
echo " "

#creates symlinks to configs in dotfiles inside ~/.config
for app in */ ; do
  remote_config="${dotfiles_local}/.config/${app}"
  local_config="${HOME}/.config/"
  
  echo -e -n "Symlinking ${ORANGE}" 
  echo -e -n $(head -c-2 <<< $app) 
  echo -e -n "${NORMAL} -> ${BLUE}${remote_config}${NORMAL})"
  
  #symlink command
  ln -s $remote_config $local_config >> $log_file 2>&1
  
  check_success  
done

echo " "
echo -e "${TITLE}Installing packages in ${BLUE}${dotfiles_local}/.scripts/pkg.list${NORMAL}${TITLE} using ${BLUE}yay${NORMAL}"
echo " "

#install all packages listed in /.dotfiles/.scripts/pkg.list
while read app; do
  echo -e -n "Installing ${BLUE}${app}${NORMAL}"

  #install command
  yes | yay -S $app --noconfirm --askyesremovemake --needed >> $log_file 2>&1
  
  check_success
done <"${dotfiles_local}/.scripts/pkg.list"

echo " "
echo -e "${TITLE}Done${NORMAL}"
