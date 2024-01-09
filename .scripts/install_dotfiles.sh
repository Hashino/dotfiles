#!/bin/bash
# Hash's dotfiles install script
# https://github.com/Hashino/dotfiles

# meant to be used right after arch install
# TODO: make a fedora version


##########################################################

dotfiles_remote="https://github.com/Hashino/dotfiles"

dotfiles_local="${HOME}/.dotfiles"
log_file="${HOME}/.config/install.log"

##########################################################

user=${USER}

global_err=""

RED='\033[1;31m'
GREEN='\033[1;32m'
BLUE='\033[4;34m'
ORANGE='\033[4;33m'
NORMAL='\033[0;37m'

TITLE='\033[1;36m'
QUOTE='\033[4;36m'


check_success () {
  if [ $? -eq 0 ]; then
    echo -e " | ${GREEN}Success${NORMAL}"
  else
    echo -e -n " | ${RED}Failed${NORMAL} more info in ${BLUE}~/.config/install.log${NORMAL}:${QUOTE}"
    wc -l $log_file | cut -f1 -d" "
    echo -e -n "${NORMAL}"
  fi
}

spinner() {
  local pid=$!
  local delay=0.75
  local spinstr='|/-\'
  while [ "$(ps a | awk '{print $1}' | grep $pid)" ]; do
    local temp=${spinstr#?}
    printf " [%c]  " "$spinstr"
    local spinstr=$temp${spinstr%"$temp"}
    sleep $delay
    printf "\b\b\b\b\b\b"
  done
  printf "    \b\b\b\b"
  wait $pid # capture exit code
  return $?
}


echo -e "${TITLE}Installing base packages first${NORMAL}"
sudo pacman -Sq --needed git base-devel --noconfirm

echo " "
echo -e "${TITLE}Initial setup done. Starting main installer${NORMAL}"
echo " "

cat << "EOF" 
  _               _     _               __ _ _           
 | |             | |   (_)             / _(_) |          
 | |__   __ _ ___| |__  _ _ __   ___  | |_ _| | ___  ___ 
 | '_ \ / _` / __| '_ \| | '_ \ / _ \ |  _| | |/ _ \/ __|
 | | | | (_| \__ \ | | | | | | | (_) || | | | |  __/\__ \
 |_| |_|\__,_|___/_| |_|_|_| |_|\___(_)_| |_|_|\___||___/

EOF

echo -e "${TITLE}Creating a new log file in: ${QUOTE}${log_file}${NORMAL}"
#resets install log
echo "" > $log_file

echo " "
echo -e "${TITLE}Installing ${QUOTE}yay${NORMAL}"

echo " "
echo -n "Cloning yay "
git clone https://aur.archlinux.org/yay.git >> $log_file 2>&1 & spinner $!
check_success

echo -n "Building yay"
cd yay
yes | makepkg -si >> $log_file 2>&1 & spinner $!
check_success

echo -n "Removing installation files"
cd "${HOME}"
sudo rm -R yay
check_success

echo " "
echo -e "${TITLE}Replacing ${QUOTE}sudo${TITLE} with ${ORANGE}doas${NORMAL}"
curl -s https://raw.githubusercontent.com/Hashino/dotfiles/main/.scripts/replace_sudo_with_doas.sh | bash >> $log_file 2>&1 & spinner $!
check_success

# clone dotfiles 
echo -e "${TITLE}Cloning dotfiles...${NORMAL}"
echo " "
echo -e -n "cloning ${BLUE}${dotfiles_remote}${NORMAL} to ${BLUE}${dotfiles_local}${NORMAL}"

git clone $dotfiles_remote $dotfiles_local >> $log_file 2>&1 & spinner $!
check_success

cd "${dotfiles_local}/.config"

echo " "
echo -e "${TITLE}Creating symlinks between folders in ${ORANGE}.dotfiles/.config/${NORMAL}${TITLE} and ${BLUE}~/.config/${NORMAL}"
echo " "

#creates symlinks to configs in dotfiles inside ~/.config
for app in */ ; do
  remote_config="${dotfiles_local}/.config/${app}"
  local_config="${HOME}/.config/"
  
  echo -e -n "Symlinking ${ORANGE}" 
  echo -e -n $(head -c-2 <<< $app) 
  echo -e -n "${NORMAL} -> ${BLUE}${remote_config}${NORMAL}"
  
  #symlink command
  ln -s $remote_config $local_config >> $log_file 2>&1
  
  check_success  
done

echo " "
echo -e -n "Importing composer settings"
echo " "

ln -s "${dotfiles_local}/.config/picom.conf" "${HOME}/.config/picom.conf" >> $log_file 2>&1

echo " "
echo -e -n "${TITLE}Removing ${ORANGE}awesome${NORMAL}..."
yay -Rcns --noconfirm awesome >> $log_file 2>&1 & spinner $!
check_success

echo -e -n "${TITLE}and installing ${ORANGE}awesome-git${NORMAL}..."
yay -Syu awesome-git --noconfirm --askyesremovemake --needed >> $log_file 2>&1 & spinner $!
check_success

echo " "

echo -e "${TITLE}Installing packages in ${BLUE}${dotfiles_local}/.scripts/pkg.list${NORMAL}${TITLE} using ${BLUE}yay${NORMAL}"
echo " "

#install all packages listed in /.dotfiles/.scripts/pkg.list
while read app; do
  echo -e -n "Installing ${BLUE}${app}${NORMAL}"

  #install command
  yes | yay -S $app --noconfirm --askyesremovemake --needed >> $log_file 2>&1 & spinner $!
  check_success

done <"${dotfiles_local}/.scripts/pkg.list"

echo " "
echo -e -n "${TITLE}Importing ${QUOTE}wallpaper${NORMAL}"
ln -s "${dotfiles_local}/wallpaper.png" "${HOME}" >> $log_file 2>&1
check_success

echo " "
echo -e -n "${TITLE}Installing GTK theme ${QUOTE}Adapta-FrostBlue4-Nokto-Eta${NORMAL}"
ln -s "${dotfiles_local}/.themes/" "${HOME}/" >> $log_file 2>&1
check_success

echo " "
echo -e -n "${TITLE}Installing cursor theme ${QUOTE}Simp1e-Nord-Darker-Hash${NORMAL}"
ln -s "${dotfiles_local}/.icons/" "${HOME}/" >> $log_file 2>&1
check_success

echo " "
echo -e -n "${TITLE}Applying GTK configs${NORMAL}"
ln -s "${dotfiles_local}/.gtkrc-2.0" "${HOME}/" >> $log_file 2>&1
check_success

echo " "
echo -e "${TITLE}Applying folder theme ${QUOTE}Papirus Nord Polar Night 3${NORMAL}"
echo " "

echo -e -n "Installing ${BLUE}papirus-folders${NORMAL}"
cd "${HOME}/.config/Papirus-Nord/"
echo "Y" | sudo ./install >> $log_file 2>&1 & spinner $!
check_success

echo -e -n "Applying theme"
sudo ./papirus-folders -C polarnight3 >> $log_file 2>&1 & spinner $!
check_success

echo " "
echo -e -n "${TITLE}Copying ${QUOTE}.local/${NORMAL}${TITLE} to home${NORMAL}"
cp -r "${dotfiles_local}/.local/" "${HOME}" >> $log_file 2>&1
check_success

echo " "
echo -e -n "${TITLE}Chaging user shell to ${QUOTE}fish${NORMAL}"
sudo chsh --shell /bin/fish $user >> $log_file 2>&1
check_success

echo " "
echo -e -n "${TITLE}Installing and configuring ${ORANGE}nvim${TITLE}}"
git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && git clone https://github.com/Hashino/NvChad-Profile/ ~/.config/nvim/lua/custom >> $log_file 2>&1 & spinner $!
check_success
echo "nvim will finish configuring the next time you open it"

echo " "
echo -e "${TITLE}Done${NORMAL}"

echo " "
echo "Removing bash files and restarting Xorg in "

echo -n '5...'
sleep 1
echo -n '4...'
sleep 1
echo -n '3...'
sleep 1
echo -n '2...'
sleep 1
echo -n '1...'
sleep 1

rm "${HOME}/,bash_logout" && "${HOME}/,bash_profile" && "${HOME}/,bashrc" && killall Xorg
