#!/bin/bash
# Hash's dotfiles install script
# https://github.com/Hashino/dotfiles

sudo pacman -S --needed git base-devel --noconfirm
git clone https://aur.archlinux.org/yay.git "${HOME}/yay"
cd "${HOME}/yay"
makepkg -si --noconfirm

sudo rm -R "${HOME}/yay"
