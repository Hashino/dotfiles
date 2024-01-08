#!/bin/bash
# Hash's dotfiles install script
# https://github.com/Hashino/dotfiles

# install an aur helper
sudo pacman -S --needed git base-devel --noconfirm && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
