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
branch=""
doas_option="persist"

RED='\033[1;31m'
GREEN='\033[1;32m'
BLUE='\033[1;34m'
ORANGE='\033[1;33m'
ORANGE_NORMAL='\033[1;33m'
NORMAL='\033[0;37m'
BOLD='\033[1;37m'

TITLE='\033[1;36m'
QUOTE='\033[4;36m'

RES_COL=100

####################################################################################################
# FUNCTIONS

check_success () {
  if [ $? -eq 0 ]; then
    RES_COL=$(($(tput cols)-11))
    MOVE_TO_COL="printf \\033[${RES_COL}G"
    
    $MOVE_TO_COL
    printf "["
    printf $GREEN
    printf $" SUCCESS "
    printf $NORMAL
    printf "]"
    printf "\r"
  else
    error_line="install.log:$(wc -l $log_file | cut -f1 -d" ")"
    RES_COL=$(($(tput cols)-${#error_line}-11))

    MOVE_TO_COL="printf \\033[$((${RES_COL}-1))G"
    
    $MOVE_TO_COL
    printf $QUOTE
    printf $error_line
    printf $NORMAL
    printf " ["
    printf $RED
    printf $" FAILURE "
    printf $NORMAL
    printf "]"
    printf "\n\r"
    return 1
  fi
  rc=$?
  echo
  return $rc
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

print_center(){
  text=$1
  columns="$(tput cols)"
  printf "%*s\n" $(( (${#text} + columns) / 2)) "$text"
}

####################################################################################################
# START
clear

echo -e -n "${TITLE}Checking if running on Arch Linux${NORMAL}"

if [ $(awk -F'=' '/^ID=/ {print tolower($2)}' /etc/*-release 2> /dev/null) = "arch" ]; then
  check_success
else
  exit 1;
fi

sleep 0.5

branch=$(cat /sys/class/dmi/id/chassis_type)

if [ "$branch" == "8" ] || [ "$branch" == "9" ] || [ "$branch" == "10" ]; then
  echo -e "Notebook detected"
  branch="notebook"
else
  branch="desktop" 
fi

sleep 0.5

echo " "
echo -e "${TITLE}Elevating permissions before starting installation${ORANGE_NORMAL}"
sudo clear

echo -e -n "${NORMAL}"

sleep 0.5


print_center ' _                  _      _                    __  _  _            '
print_center '| |                | |    (_)                  / _|(_)| |           '
print_center '| |__    __ _  ___ | |__   _  _ __    ___     | |_  _ | |  ___  ___ '
print_center '|  _ \  / _` |/ __||  _ \ | || `_ \  / _ \    |  _|| || | / _ \/ __|'
print_center '| | | || (_| |\__ \| | | || || | | || (_) | _ | |  | || ||  __/\__ \'
print_center '|_| |_| \__,_||___/|_| |_||_||_| |_| \___/ (_)|_|  |_||_| \___||___/'

echo " "
echo -e "${TITLE}Welcome to Hashino's dotfiles install script${NORMAL}"

cd ${HOME}

####################################################################################################
# LOG FILE
echo " "
echo -e "${TITLE}Creating a new log file in: ${ORANGE}${log_file}${NORMAL}"
#resets install log
echo "" > $log_file

####################################################################################################
# CHOOSING IF USING PERSIST OR NOPASS

echo -e "${BOLD}"
read -r -p "Configure doas to use nopass instead of persist? [Y/n]" response
response=${response,,} # tolower
echo -e -n "${NORMAL}"
if [[ $response =~ ^(y| ) ]] || [[ -z $response ]]; then
  doas_option="nopass"
  echo -e "${ORANGE_NORMAL}nopass${NORMAL} option chosen. After sudo is replaced with doas, the rest of the installation will be done automatically"
else
  echo -e "${RED}WARNING:${NORMAL} Because you chose the ${ORANGE_NORMAL}persist${NORMAL} option, you'll need to mannualy input your password multiple times during this script"
fi

####################################################################################################
# INSTALLING NEEDED PACKAGES FOR SCRIPT
cd $HOME

echo " "
echo -e -n "${TITLE}Installing packages needed for the script ${NORMAL}(${ORANGE_NORMAL}git base-devel opendoas${NORMAL})"
sudo pacman -Syu --needed git base-devel opendoas --noconfirm >> $log_file 2>&1 & spinner $!
check_success

####################################################################################################
# INSTALLING DOAS AND REPLACING SUDO
echo " "
echo -e "${TITLE}Configuring ${ORANGE}doas${TITLE} and replacing ${BLUE}sudo${NORMAL}"

echo -e -n "Creating and moving the ${BLUE}doas.conf${NORMAL} file with the the chosen option (${doas_option})"

echo "permit setenv {PATH=/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin} :wheel" > "${HOME}/doas.conf"
echo "permit ${doas_option} :wheel" >> "${HOME}/doas.conf"

sudo cp "${HOME}/doas.conf" /etc/doas.conf
rm "${HOME}/doas.conf"
check_success

echo -e -n "Cloning the AUR repository for ${ORANGE_NORMAL}doas-sudo-shim${NORMAL}"
git clone https://aur.archlinux.org/doas-sudo-shim.git >> $log_file 2>&1 & spinner $!
check_success

echo -e -n "Building package"
cd doas-sudo-shim
yes | makepkg -si  >> $log_file 2>&1 & spinner $!
check_success

echo -e -n "Deleting install files"
cd .. 
doas rm -R doas-sudo-shim >> $log_file 2>&1 & spinner $!
check_success
####################################################################################################
# YAY
echo " "
echo -e "${TITLE}Installing ${QUOTE}yay${NORMAL}"

echo -e -n "Cloning the ${ORANGE}yay${NORMAL} repository "
git clone https://aur.archlinux.org/yay.git >> $log_file 2>&1 & spinner $!
check_success

echo -e -n "Building ${ORANGE}yay${NORMAL}"
cd yay
yes | makepkg -si >> $log_file 2>&1 & spinner $!
check_success

echo -e -n "Deleting install files"
cd .. 
doas rm -R yay >> $log_file 2>&1 & spinner $!
check_success

####################################################################################################
echo " "
echo -e -n "${TITLE}Initial setup done. Starting main installation${NORMAL}"
sleep 2 & spinner $!
cd $HOME
echo " "
####################################################################################################
# CLONING DOTFILES
echo " "
echo -e -n "${TITLE}Cloning ${BLUE}${dotfiles_remote}${TITLE} to ${BLUE}${dotfiles_local}${NORMAL}"
git clone --recurse-submodules $dotfiles_remote $dotfiles_local >> $log_file 2>&1 & spinner $!
check_success

####################################################################################################
# SYMLINKS
echo " "
echo -e "${TITLE}Creating symlinks between folders in ${ORANGE}.dotfiles/.config/${NORMAL}${TITLE} and ${BLUE}~/.config/${NORMAL}"
echo " "

mkdir -p "${HOME}/.config/"

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
# PACKAGES TO INSTALL

cp "${dotfiles_local}/.scripts/pkg.list" "${HOME}/pkg.list"

if [[ $branch="notebook" ]]; then
  cat "${dotfiles_local}/.scripts/pkg.notebook.list" >> "${HOME}/pkg.list"
fi

nano "${HOME}/pkg.list"

####################################################################################################
# INSTALLING PACKAGES
echo " "
echo -e "${TITLE}Installing packages in ${BLUE}~/pkg.list${NORMAL}${TITLE} using ${BLUE}yay${NORMAL}"
echo " "

#install all packages listed in /.dotfiles/.scripts/pkg.list
while read app; do
  
  #doesnt process lines that start with '#' to allow comments in the pkg.list file
  if [[ ! "$app" == \#* ]]; then
    echo -e -n "Installing ${BLUE}${app}${NORMAL}"

    #install command
    yes | yay -S $app --noconfirm --askyesremovemake --needed >> $log_file 2>&1 & spinner $!
    check_success
  fi

done <"${HOME}/pkg.list"

rm "${HOME}/pkg.list"

####################################################################################################
# THEMING
echo " "
echo -e -n "${TITLE}Importing ${QUOTE}wallpaper${NORMAL}"
ln -s "${dotfiles_local}/wallpaper.png" "${HOME}" >> $log_file 2>&1
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
echo -e -n "${TITLE}Symlinking ${QUOTE}.local/${NORMAL}${TITLE} to home${NORMAL}"
ln -s "${dotfiles_local}/.local/bin" "${HOME}/.local/" >> $log_file 2>&1
check_success

#setting fish as default shell
echo " "
echo -e -n "${TITLE}Changing user shell to ${QUOTE}fish${NORMAL}"
doas chsh --shell /bin/fish $user >> $log_file 2>&1
check_success

####################################################################################################
# CLEANUP
echo -e -n "${TITLE}Uninstalling ${ORANGE}alacritty${NORMAL}"
yes | yay -Rns alacritty >> $log_file 2>&1 & spinner $!
check_success

echo " "
echo -e "${TITLE}Installation Complete${NORMAL}"

echo " "
echo "Deleting install files and restarting Xorg in "

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

cd $HOME

rm -f .bash_logout
rm -f .bash_profile
rm -f .bashrc

rm -f .wget-hst

doas rm -R .config/yay 

doas rm -R go

rm -f install_dotfiles.sh
