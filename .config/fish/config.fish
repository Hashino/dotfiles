#tere
function tere
    set --local result (command tere $argv)
    [ -n "$result" ] && cd -- "$result"
end

#PATH
set -x -a PATH $PATH:~/.local/bin

#ALIASES

##tere
alias d 'tere'

##moar
alias more 'moar'

##exa
alias ls 'exa -a --icons --group-directories-first' # just replace ls by exa and allow all other exa arguments
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

#enviroment variables
set -x TERMINAL /usr/bin/gnome-terminal
set -x EDITOR /usr/bin/nvim
set -x PAGER /usr/local/bin/moar

set -x PF_INFO "ascii title os kernel wm shell memory palette"

set -x QT_QPA_PLATFORMTHEME "qt5ct"
set -x CALIBRE_USE_DARK_PALETTE 1
set -x PATH $PATH:/home/hashino/.spicetify
