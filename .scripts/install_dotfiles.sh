#!/bin/bash
# Hash's dotfiles install script
# https://github.com/Hashino/dotfiles

# meant to be used right after arch install
# TODO: make a fedora version

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NORMAL='\033[0;37m' 

dotfiles_remote="https://github.com/Hashino/dotfiles"

dotfiles_local="${HOME}/.dotfiles"
log_file="${HOME}/.config/install.log"

check_success () {
  if [ $? -eq 0 ]; then
    echo -e " | ${GREEN}Sucess${NORMAL}"
  else
    echo -e " | ${RED}Failed${NORMAL} check ${log_file} for more info"
  fi
}

#resets install log
echo "" > $log_file

echo "Installing ${BLUE}Hashino's ${NORMAL}dotfiles"

# clone dotfiles
echo -n "Cloning ${BLUE}${dotfiles_remote}${NORMAL} to ${BLUE}${NORMAL}"

git clone $dotfiles_remote $dotfiles_local >> $log_file 2>&1
check_success

cd "${dotfiles_local}/.config"

echo ""
echo "Creating symlinks between folders in ${BLUE}.dotfiles/.config/${NORMAL} and ${BLUE}~/.config/${NORMAL}"
echo ""

#creates symlinks to configs in dotfiles inside ~/.config
for app in */ ; do
  remote_config="${dotfiles_local}/.config/${app}"
  local_config="${HOME}/.config/"
  
  echo -n "Symlinking ${BLUE}${local_config}${NORMAL} to ${BLUE}${remote_config}${NORMAL}"
  
  #symlink command
  ln -s $remote_config $local_config >> $log_file 2>&1
  
  check_success  
done

echo ""
echo "Installing packages in ${BLUE}${dotfiles_local}/.scripts/pkg.list${NORMAL} using ${BLUE}yay${NORMAL}"
echo ""

#install all packages listed in /.dotfiles/.scripts/pkg.list
while read app; do
  echo -n "Installing ${app}"

  #install command
  yes | yay -S $app --noconfirm --askyesremovemake >> $log_file 2>&1
  
  check_success
done <"${dotfiles_local}/.scripts/pkg.list"
