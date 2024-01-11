#!/bin/bash
# Hash's dotfiles install script
# https://github.com/Hashino/dotfiles

# meant to be used right after arch install
# TODO: make a fedora version


##################################################################################################
# CONFIGURABLE VARIABLES

dotfiles_remote="https://github.com/Hashino/dotfiles"

dotfiles_local="${HOME}/.dotfiles"
log_file="${HOME}/install.log"

####################################################################################################
# GLOBAL VARIABLES

user=${USER}
is_notebook=""

RED='\033[1;31m'
GREEN='\033[1;32m'
BLUE='\033[4;34m'
ORANGE='\033[4;33m'
ORANGE_NORMAL='\033[1;33m'
NORMAL='\033[0;37m'

TITLE='\033[1;36m'
QUOTE='\033[4;36m'

####################################################################################################
# FUNCTIONS

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
  local -r pid="${1}"
  local -r delay='0.75'
  local spinstr='\|/-'
  local temp
  while ps a | awk '{print $1}' | grep -q "${pid}"; do
    temp="${spinstr#?}"
    printf " [%c]  " "${spinstr}"
    spinstr=${temp}${spinstr%"${temp}"}
    sleep "${delay}"
    printf "\b\b\b\b\b\b"
  done
  printf "    \b\b\b\b"
  wait $pid # capture exit code
  return $?
}

####################################################################################################
# START

echo -e -n "${TITLE}Checking if running on Arch Linux${NORMAL}"

if [ $(awk -F'=' '/^ID=/ {print tolower($2)}' /etc/*-release 2> /dev/null) = "arch" ]; then
  check_success
else
  exit 1;
fi

sleep 0.5

is_notebook=$(cat /sys/class/dmi/id/chassis_type)

if [ "$is_notebook" == "8" ] || [ "$is_notebook" == "9" ] || [ "$is_notebook" == "10" ]; then
  echo -e "Notebook detected"
  is_notebook="true"
else
  is_notebook="false" 
fi

sleep 0.5

echo " "
echo -e "${TITLE}Elevating permissions before starting installation${ORANGE_NORMAL}"
sudo clear

echo -e -n "${NORMAL}"

sleep 0.5

cat << "EOF" 
____________________________________________________________
|  _               _     _               __ _ _            |
| | |             | |   (_)             / _(_) |           |
| | |__   __ _ ___| |__  _ _ __   ___  | |_ _| | ___  ___  |
| | '_ \ / _` / __| '_ \| | '_ \ / _ \ |  _| | |/ _ \/ __| |
| | | | | (_| \__ \ | | | | | | | (_) || | | | |  __/\__ \ |
| |_| |_|\__,_|___/_| |_|_|_| |_|\___(_)_| |_|_|\___||___/ |
|__________________________________________________________|

EOF

echo -e "${TITLE}Welcome to Hashino's dotfiles install script${NORMAL}"

####################################################################################################
# LOG FILE
echo " "
echo -e "${TITLE}Creating a new log file in: ${ORANGE}${log_file}${NORMAL}"
#resets install log
echo "" > $log_file

####################################################################################################
# INSTALLING DOAS AND GIVING IT ACCESS WITHOUT PASSWORD: permit nopass
echo " "
echo -e "${TITLE}Giving elevated access without password to ${BLUE}doas${NORMAL}"
echo " "

echo -e "Creating the ${BLUE}doas.conf${NORMAL} with nopass"
echo "permit setenv {PATH=/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin} :wheel" > "${HOME}/doas.conf"
echo "permit nopass :wheel" >> "${HOME}/doas.conf"

sudo cp "${HOME}/doas.conf" /etc/doas.conf
rm "${HOME}/doas.conf"

echo -e -n "Installing ${BLUE}doas${NORMAL}"

sudo pacman -S --needed opendoas --noconfirm >> $log_file 2>&1 & spinner $!
check_success

cd $HOME

####################################################################################################
# INSTALLING NEEDED PACKAGES FOR SCRIPT
echo " "
echo -e -n "${TITLE}Installing packages needed for the script(${ORANGE_NORMAL}git base-devel nvim${NORMAL})"
doas pacman -Syu --needed git base-devel neovim --noconfirm >> $log_file 2>&1 & spinner $!
check_success

#sudo rm /bin/sudo
#alias sudo="/bin/doas"

sudo echo "Defaults:${user}      !authenticate" >> /etc/sudoers

####################################################################################################
# YAY
echo " "
echo -e "${TITLE}Installing ${QUOTE}yay${NORMAL}"

echo -e -n "Cloning yay repo"
git clone https://aur.archlinux.org/yay.git >> $log_file 2>&1 & spinner $!
check_success

echo -e -n "Building yay"
cd yay
yes | makepkg -si >> $log_file 2>&1 & spinner $!
check_success

echo -e -n "Deleting install files"
cd .. 
doas rm -R yay >> $log_file 2>&1 & spinner $!
check_success

####################################################################################################
# REPLACING SUDO WITH DOAS
echo " "
echo -e -n "${TITLE}Replacing ${QUOTE}sudo${NORMAL}${TITLE} with ${ORANGE}doas${NORMAL}"
yes | yay -S doas-sudo-shim >> $log_file 2>&1 & spinner $!
check_success

####################################################################################################
# PACKAGES TO INSTALL
echo " "
echo -e "${TITLE}Please choose which packages you want to include/exclude in the install process${NORMAL}"
curl -s https://raw.githubusercontent.com/Hashino/dotfiles/main/.scripts/pkg.list > pkg.list
[ "$is_notebook" == "true" ] && 
  ( curl -s https://raw.githubusercontent.com/Hashino/dotfiles/main/.scripts/pkg.notebook.list >> pkg.list)

sleep 2
#had an issue using nano and vi. had to use nvim as a workaround
nvim pkg.list

####################################################################################################
echo " "
echo -e "${TITLE}Initial setup done. Starting main installation${NORMAL}"
echo " "

sleep 2 & spinner $!

####################################################################################################
# CLONING DOTFILES
echo -e "${TITLE}Cloning dotfiles...${NORMAL}"

echo -e -n "cloning ${BLUE}${dotfiles_remote}${NORMAL} to ${BLUE}${dotfiles_local}${NORMAL}"
git clone $dotfiles_remote $dotfiles_local >> $log_file 2>&1 & spinner $!
check_success

####################################################################################################
# SYMLINKS
echo " "
echo -e "${TITLE}Creating symlinks between folders in ${ORANGE}.dotfiles/.config/${NORMAL}${TITLE} and ${BLUE}~/.config/${NORMAL}"
echo " "

cd "${dotfiles_local}/.config"
#creates symlinks to all folder in dotfiles/.configs/ in ~/.config
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

####################################################################################################
# COMPOSER
echo " "
echo -e -n "Importing composer settings"
echo " "

ln -s "${dotfiles_local}/.config/picom.conf" "${HOME}/.config/picom.conf" >> $log_file 2>&1

####################################################################################################
# REPLACING AWESOME WITH GIT VERSION
echo " "
echo -e -n "${TITLE}Removing ${ORANGE}awesome${NORMAL}..."
yay -Rcns --noconfirm awesome >> $log_file 2>&1 & spinner $!
check_success

echo -e -n "${TITLE}and installing ${ORANGE}awesome-git${NORMAL}..."
yay -Syu awesome-git --noconfirm --askyesremovemake --needed >> $log_file 2>&1 & spinner $!
check_success

####################################################################################################
# INSTALLING PACKAGES
echo " "
echo -e "${TITLE}Installing packages in ${BLUE}~/pkg.list${NORMAL}${TITLE} using ${BLUE}yay${NORMAL}"
echo " "

#install all packages listed in /.dotfiles/.scripts/pkg.list
while read app; do
  echo -e -n "Installing ${BLUE}${app}${NORMAL}"

  #install command
  yes | yay -S $app --noconfirm --askyesremovemake --needed >> $log_file 2>&1 & spinner $!
  check_success

done <"${HOME}/pkg.list"

rm "${HOME}/pkg.list"

####################################################################################################
# THEMING
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

#folder theme: papirus nord polar night 3 https://github.com/Adapta-Projects/Papirus-Nord
echo " "
echo -e "${TITLE}Applying folder theme ${QUOTE}Papirus Nord Polar Night 3${NORMAL}"
echo " "

echo -e -n "Installing ${BLUE}papirus-folders${NORMAL}"
cd "${HOME}/.config/Papirus-Nord/"
echo "Y" | doas ./install >> $log_file 2>&1 & spinner $!
check_success

echo -e -n "Applying theme"
doas ./papirus-folders -C polarnight3 >> $log_file 2>&1 & spinner $!
check_success

#local binaries: rofi-power-menu rofi-todo soundswitch
echo " "
echo -e -n "${TITLE}Copying ${QUOTE}.local/${NORMAL}${TITLE} to home${NORMAL}"
cp -r "${dotfiles_local}/.local/" "${HOME}" >> $log_file 2>&1
check_success

#setting fish as default shell
echo " "
echo -e -n "${TITLE}Changing user shell to ${QUOTE}fish${NORMAL}"
doas chsh --shell /bin/fish $user >> $log_file 2>&1
check_success

####################################################################################################
# NEOVIM
echo " "
echo -e -n "${TITLE}Configuring ${ORANGE}nvim${TITLE}}"
echo " "

echo -e -n "Cloning ${BLUE}NvChad${NORMAL}"
git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 >> $log_file 2>&1 & spinner $!
check_success

echo -e -n "Cloning ${BLUE}custom config${NORMAL}"
git clone https://github.com/Hashino/NvChad-Profile/ ~/.config/nvim/lua/custom >> $log_file 2>&1 & spinner $!
check_success

echo "${BLUE}Done${NORMAL}"
echo "neovim will finish configuring the next time you open it"

####################################################################################################
# CLEANUP
echo -e -n "${TITLE}Uninstalling ${ORANGE}alacritty${NORMAL}"
yes | yay -Rns alacritty >> $log_file 2>&1 & spinner $!
check_success

echo " "
echo -e "${TITLE}Installation Complete${NORMAL}"

echo " "
echo "Cleaning install files and restarting Xorg in "

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

rm "${HOME}/.bash_logout"
rm "${HOME}/.bash_profile"
rm "${HOME}/.bashrc"

killall Xorg
