#!/bin/bash
# Hash's dotfiles install script
# https://github.com/Hashino/dotfiles

# meant to be used right after arch install
# TODO: make a fedora version

dotfiles_location="${HOME}/.dotfiles"

# clone dotfiles
git clone https://github.com/Hashino/dotfiles $dotfiles_location

cd "${dotfiles_location}/.config"

for app in */ ; do
  remote_config="${dotfiles_location}/.config/${app}"
  local_config="${HOME}/.config/"
  ln -s $remote_config $local_config
  echo "created symlink in ${local_config} to ${remote_config}"
done

#pps=""

while read app; do
  echo "Installing ${app}"
  yay -S --noconfirm $app >> "${dotfiles_location}/.config/install.log"
done <"${dotfiles_location}/.scripts/pkg.list"

#yay -S $apps --noconfirm

#yay -Syu --needed --noconfirm - < "${dotfiles_location}/.scripts/pkg.list"
