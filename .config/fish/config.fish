# walk alias
function d
  set loc (walk $argv); and cd $loc;
end

#PATH
set -x PATH /bin:/usr/bin:~/.local/bin

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
alias v 'nvim'
alias vim 'v'
alias vi 'vim'

#yay-list
alias yay-list "comm -23 <(yay -Qqe | sort) <({ yay -Qqg base-devel; expac -l '\n' '%E' base; } | sort -u) | fzf --preview 'yay -Qil {}' --layout=reverse --bind 'enter:execute(yay -Qil {} | more)'"

#remove orphan packages
alias orphans "yay -Qtdq | yay -Rns - || echo 'no orphan packages found'"

#enviroment variables
set -x TERMINAL gnome-terminal
set -x EDITOR nvim
set -x PAGER moar

set -x PF_INFO "ascii title os kernel wm shell memory palette"

# i hate qt applications
set -x QT_QPA_PLATFORMTHEME "qt5ct"
set -x CALIBRE_USE_DARK_PALETTE 1
