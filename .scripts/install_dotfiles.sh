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

##############################################################################
# GLOBAL VARIABLES

user=${USER}
branch=""
doas_option="persist"

RED='\033[1;31m'
GREEN='\033[1;32m'
BLUE='\033[1;34m'
ORANGE='\033[1;33m'
ORANGE_NORMAL='\033[0;33m'
NORMAL='\033[0;37m'
BOLD='\033[1;37m'

TITLE='\033[1;36m'
QUOTE='\033[4;36m'

RES_COL=100

##############################################################################
# FUNCTIONS

echof() {
  if [ $# -eq 2 ]; then
    echo -e $1$2$NORMAL
  elif [ $# -eq 3 ]; then
    echo -e -n $1$2$NORMAL
  fi
  echo -e $2 | sed -r "s/\x1B\[([0-9]{1,3}(;[0-9]{1,2};?)?)?[mGK]//g" >> $log_file
  return $?
}

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
  printf "\n\r"
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

##############################################################################
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
echof ${TITLE} "Elevating permissions before starting installation"
sudo clear

sleep 0.5

print_center ' _                  _      _                    __  _  _            '
print_center '| |                | |    (_)                  / _|(_)| |           '
print_center '| |__    __ _  ___ | |__   _  _ __    ___     | |_  _ | |  ___  ___ '
print_center '|  _ \  / _` |/ __||  _ \ | || `_ \  / _ \    |  _|| || | / _ \/ __|'
print_center '| | | || (_| |\__ \| | | || || | | || (_) | _ | |  | || ||  __/\__ \'
print_center '|_| |_| \__,_||___/|_| |_||_||_| |_| \___/ (_)|_|  |_||_| \___||___/'

echo " "
echof ${TITLE} "Welcome to Hashino's dotfiles install script"

cd ${HOME}

##############################################################################
# LOG FILE

echo " "
echof ${TITLE} "Creating a new log file in: ${ORANGE}${log_file}"
#resets install log
echo "" >> $log_file

##############################################################################
# INSTALLING NEEDED PACKAGES FOR SCRIPT
needed_packages="base-devel git opendoas"

cd $HOME

echo " "
echof ${TITLE} "Installing packages needed for the script (${ORANGE_NORMAL}${needed_packages}${NORMAL})" 1
sudo pacman -Syu ${needed_packages} --noconfirm --needed >> $log_file 2>&1 & spinner $!
check_success

##############################################################################
# YAY

echo " "
echof $TITLE "Installing ${QUOTE}yay"

echof $NORMAL "Cloning the ${ORANGE}yay${NORMAL} repository" 1
git clone https://aur.archlinux.org/yay.git >> $log_file 2>&1 & spinner $!
check_success

echof $NORMAL "Building ${ORANGE}yay" 1
cd yay
xterm -e 'yes | makepkg -si | tee ${log_file}' >> $log_file 2>&1 & spinner $!
check_success

echof $NORMAL "Deleting install files" 1
cd .. 
rm -rf yay >> $log_file 2>&1 & spinner $!
check_success

##############################################################################
# DOAS: CHOOSING IF USING PERSIST OR NOPASS

echo -e "${BOLD}"
read -r -p "Configure doas to use nopass instead of persist? [Y/n]" response
response=${response,,} # tolower
echo -e -n "${NORMAL}"

if [[ $response =~ ^(y| ) ]] || [[ -z $response ]]; then
  doas_option="nopass"
  echof ${ORANGE_NORMAL} "nopass${NORMAL} option chosen. After sudo is replaced with doas, the rest of the installation will be done automatically"
else
  echof ${RED} "WARNING:${NORMAL} Because you chose the ${ORANGE_NORMAL}persist${NORMAL} option, you'll need to mannualy input your password multiple times during this script"
fi

# DOAS: INSTALLING DOAS AND REPLACING SUDO

echo " "
echof ${TITLE} "Configuring ${ORANGE}doas${TITLE} and replacing ${BLUE}sudo"

echof $NORMAL "Creating and moving the ${BLUE}doas.conf${NORMAL} file with the the chosen option (${doas_option})"

echo "permit setenv {PATH=/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin} :wheel" > "${HOME}/doas.conf"
echo "permit ${doas_option} :wheel" >> "${HOME}/doas.conf"

sudo cp "${HOME}/doas.conf" /etc/doas.conf
rm "${HOME}/doas.conf"
check_success

echof $NORMAL "Installing ${ORANGE_NORMAL}doas-sudo-shim${NORMAL}" 1
yes | yay -Syu doas-sudo-shim --removemake --answerclean=n --answerdiff=n >> $log_file 2>&1 & spinner $!
check_success

##############################################################################

echo " "
echof ${TITLE} "Initial setup done. Starting main installation" 1
sleep 2 & spinner $!
cd $HOME
echo " "

##############################################################################
# CLONING DOTFILES

echo " "
echof ${TITLE} "Cloning ${BLUE}${dotfiles_remote}${TITLE} to ${BLUE}${dotfiles_local}" 1
git clone --recurse-submodules $dotfiles_remote $dotfiles_local >> $log_file 2>&1 & spinner $!
check_success

##############################################################################
# SYMLINKS

echo " "
echof ${TITLE} "Creating symlinks between folders in ${ORANGE}.dotfiles/.config/${NORMAL}${TITLE} and ${BLUE}~/.config" 1
echo " "

mkdir -p "${HOME}/.config/"

cd "${dotfiles_local}/.config"
#creates symlinks to all folder in dotfiles/.configs/ in ~/.config
for app_config in */ ; do
  remote_config="${dotfiles_local}/.config/${app_config}"
  local_config="${HOME}/.config/"

  app_name=${app_config::-1}

  #remove command
  mv "${local_config}${app_name}" "${local_config}${app_name}_old" >> $log_file 2>&1
  if [ $? -eq 0 ]; then
    echof $ORANGE_NORMAL "old config found for: ${app_name} moved to ${app_name}_old"
  fi

  echof $NORMAL "Symlinking ${ORANGE}${remote_config}${NORMAL} -> ${BLUE}${local_config}${app_config}" 1

  #symlink command
  ln -s $remote_config $local_config >> $log_file 2>&1

  check_success  
done

##############################################################################
# COMPOSER

echo " "
echof $NORMAL "Importing composer settings" 1
echo " "

ln -s "${dotfiles_local}/.config/picom.conf" "${HOME}/.config/picom.conf" >> $log_file 2>&1

##############################################################################
# REPLACING AWESOME WITH GIT VERSION

echo " "
echof $TITLE "Removing ${ORANGE}awesome${NORMAL}..." 1
yay -Rcns --noconfirm awesome >> $log_file 2>&1 & spinner $!
check_success

echof $TITLE "and installing ${ORANGE}awesome-git${NORMAL}..." 1
yay -Syu awesome-git --noconfirm --removemake --needed >> $log_file 2>&1 & spinner $!
check_success

##############################################################################
# PACKAGES TO INSTALL

cp "${dotfiles_local}/.scripts/pkg.list" "${HOME}/pkg.list"

if [[ $branch="notebook" ]]; then
  cat "${dotfiles_local}/.scripts/pkg.notebook.list" >> "${HOME}/pkg.list"
fi

nano "${HOME}/pkg.list"

##############################################################################
# INSTALLING PACKAGES

echo " "
echof ${TITLE} "Installing packages in ${BLUE}~/pkg.list${NORMAL}${TITLE} using ${BLUE}yay"
echo " "

#install all packages listed in /.dotfiles/.scripts/pkg.list
while read app; do
  
  #doesnt process lines that start with '#' to allow comments in the pkg.list file
  if [[ ! "$app" == \#* ]]; then
    echof $NORMAL "Installing ${BLUE}${app}${NORMAL}" 1

    #install command
    yes | yay -S $app --removemake --needed >> $log_file 2>&1 & spinner $!
    check_success
  fi

done <"${HOME}/pkg.list"

rm "${HOME}/pkg.list"

##############################################################################
# THEMING

echo " "
echof $TITLE "Symlinking GTK 2.0 configs" 1
ln -s "${dotfiles_local}/.gtkrc-2.0" "${HOME}/" >> $log_file 2>&1
check_success

#folder theme: papirus nord polar night 3 https://github.com/Adapta-Projects/Papirus-Nord
echo " "
echof $TITLE "Applying folder theme ${QUOTE}Papirus Nord Polar Night 3"
echo " "

echof $NORMAL "Installing ${BLUE}papirus-folders${NORMAL}" 1
cd "${HOME}/.config/Papirus-Nord/"
echo "Y" | doas ./install >> $log_file 2>&1 & spinner $!
check_success

echof $NORMAL "Applying folder theme" 1
doas ./papirus-folders -C polarnight3 >> $log_file 2>&1 & spinner $!
check_success

#setting fish as default shell
echo " "
echof $TITLE "Changing user shell to ${QUOTE}fish${NORMAL}" 1
doas chsh --shell /bin/fish $user >> $log_file 2>&1
check_success

##############################################################################
# CLEANUP

echof $TITLE "Uninstalling ${ORANGE}alacritty" 1
yes | yay -Rns alacritty >> $log_file 2>&1 & spinner $!
check_success

echo " "
echof $TITLE "Installation Complete"

echo " "
echof $NORMAL "Deleting install files and restarting Xorg in "

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

rm -rf go

rm -f install_dotfiles.sh
