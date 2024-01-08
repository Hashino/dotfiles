#!/bin/bash
# Hash's dotfiles install script
# https://github.com/Hashino/dotfiles

# meant to be used right after arch install
# TODO: make a fedora version

dotfiles_location="${HOME}/.dotfiles"
log_file="${HOME}/.config/install.log"

rm $log_file

# clone dotfiles
echo "Downloading dotfiles"
git clone https://github.com/Hashino/dotfiles $dotfiles_location &> $log_file

cd "${dotfiles_location}/.config"

for app in */ ; do
  remote_config="${dotfiles_location}/.config/${app}"
  local_config="${HOME}/.config/"
  ln -s $remote_config $local_config
  echo "created symlink in ${local_config} to ${remote_config}"
done

#apps=""

while read app; do
  echo "Installing ${app}"
  yay -S $app --noconfirm --askyesremovemake --overwrite &> $log_file
done <"${dotfiles_location}/.scripts/pkg.list"

#yay -S $apps --noconfirm

#yay -Syu --needed --noconfirm - < "${dotfiles_location}/.scripts/pkg.list"
