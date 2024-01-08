#!/bin/bash
# Hash's dotfiles install script
# https://github.com/Hashino/dotfiles

yay -S doas --noconfirm

sudo echo "permit setenv {PATH=/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin} :wheel" >> "/etc/doas.conf"
sudo echo "permit nopass :wheel" >> "/etc/doas.conf"

yay -S doas-sudo-shim --noconfirm
