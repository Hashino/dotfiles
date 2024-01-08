#!/bin/bash

yay -S doas --noconfirm

#sudo echo "/home/${USER}/doas.conf"

echo "permit setenv {PATH=/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin} :wheel" >> "/etc/doas.conf"
echo "permit nopass :wheel" >> "/etc/doas.conf"

yay -S doas-sudo-shim --noconfirm
