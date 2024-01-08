#!/bin/bash

sudo pacman -S doas --noconfirm

#sudo echo "/home/${USER}/doas.conf"

sudo echo "permit setenv {PATH=/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin} :wheel" >> "${HOME}/doas.conf"
sudo echo "permit nopass :wheel" >> "${HOME}/doas.conf"
