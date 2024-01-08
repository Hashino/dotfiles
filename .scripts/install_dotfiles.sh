#!/bin/bash
# Hash's dotfiles install script
# https://github.com/Hashino/dotfiles

# meant to be used right after arch install
# TODO: make a fedora version

RED="\e[31m"
GREEN="\e[32m"
BLUE="\e[34m"
NORMAL="\e[0m"

dotfiles_location="${HOME}/.dotfiles"
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

# clone dotfiles
echo "Downloading dotfiles"

git clone https://github.com/Hashino/dotfiles $dotfiles_location &> $log_file
check_success

cd "${dotfiles_location}/.config"

#creates symlinks to configs in dotfiles inside ~/.config
for app in */ ; do
  remote_config="${dotfiles_location}/.config/${app}"
  local_config="${HOME}/.config/"
  
  echo "creating symlink in ${local_config} to ${remote_config}"
  
  ln -s $remote_config $local_config &> $log_file
  check_success  
done

#install all packages listed in /.dotfiles/.scripts/pkg.list
while read app; do
  echo -n "Installing ${app}"
  yes | yay -S $app --noconfirm --askyesremovemake &> $log_file
  check_success
done <"${dotfiles_location}/.scripts/pkg.list"
