#!/bin/bash
# Hash's dotfiles install script
# https://github.com/Hashino/dotfiles

yay -S opendoas --noconfirm

echo "permit setenv {PATH=/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin} :wheel" > "${HOME}/doas.conf"
echo "permit nopass :wheel" >> "${HOME}/doas.conf"

sudo cp "${HOME}/doas.conf" /etc/doas.conf
rm "${HOME}/doas.conf"

yay -Rcns sudo --noconfirm
yay -S doas-sudo-shim --noconfirm
