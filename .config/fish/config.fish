# walk alias
function d
  set loc (walk $argv); and cd $loc;
end

#PATH
set -g -x PATH /bin:/usr/bin:/usr/local/bin/:$HOME/.local/bin

#ALIASES

##moar
alias more 'moar'
alias less 'more'

##bat
alias cat bat

##exa
alias ls 'eza -a --icons --group-directories-first' # just replace ls by exa and allow all other exa arguments
alias l 'ls -lbF' #   list, size, type
alias ll 'ls -la' # long, all
alias llm 'll --sort modified' # list, long, sort by modification date
alias la 'ls -lbhHigUmuSa' # all list
alias lx 'ls -lbhHigUmuSa@' # all list and extended
alias tree 'ls --tree --icons' # tree view
alias lS 'ls -1 --icons --group-directories-first' # one column by just names

##vim
alias v "nvim" # -c 'NvimTreeToggle'." 
alias vi "nvim" # -c 'NvimTreeToggle' ." 
alias vim "nvim" # -c 'NvimTreeToggle' ." 
alias nvim "nvim" # -c 'NvimTreeToggle' ." 
alias neovim "nvim" # -c 'NvimTreeToggle' ." 

#yay-list
alias yay-list "comm -23 <(yay -Qqe | sort) <({ yay -Qqg base-devel; expac -l '\n' '%E' base; } | sort -u) | fzf --preview 'yay -Qil {}' --layout=reverse --bind 'enter:execute(yay -Qil {} | more)'"

#package manager
alias pm "yay -Qqen | fzf --preview 'yay -Qil {}' --layout=reverse --bind 'enter:execute(yay -Qil {} | less)' --bind 'ctrl-u:execute(yay -Rns {})' --bind 'ctrl-o:execute(yay -Qtdq | yay -Rns - )' --header='[ENTER] = Details    [CTRL+U] = Uninstall    [CTRL+O] = Remove Orphans' "

#remove orphan packages
#alias orphans "yay -Qtdq | yay -Rns - || echo 'no orphan packages found'"

#enviroment variables
set -U -x TERMINAL lxterminal
set -U -x EDITOR nvim
set -U -x PAGER moar

set -U -x PF_INFO "ascii title os kernel wm shell memory palette"

# I hate qt applications
set -U -x QT_QPA_PLATFORMTHEME qt5ct:qt6ct
#set -U -x CALIBRE_USE_DARK_PALETTE 1
set -U -x CALIBRE_USE_SYSTEM_THEME 1

#sudo informant read
