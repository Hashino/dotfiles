export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="simple"

plugins=(
  git
  colored-man-pages
  zsh-autosuggestions
)

source $ZSH/oh-my-zsh.sh

source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

#tere
tere() {
    local result=$(command tere "$@")
    [ -n "$result" ] && cd -- "$result"
}

#PATH
export PATH=$PATH:~/.local/bin

#ALIASES

##tere
alias d='tere'

##moar
alias more='moar'

##exa
alias ls='exa -a --icons --group-directories-first' # just replace ls by exa and allow all other exa arguments
alias l='ls -lbF' #   list, size, type
alias ll='ls -la' # long, all
alias llm='ll --sort=modified' # list, long, sort by modification date
alias la='ls -lbhHigUmuSa' # all list
alias lx='ls -lbhHigUmuSa@' # all list and extended
alias tree='ls --tree --icons' # tree view
alias lS='ls -1 --icons --group-directories-first' # one column by just names
eval $(thefuck --alias)

##vim
alias v='nvim'
alias vim='v'
alias vi='vim'

#yay-list
alias yay-list="comm -23 <(yay -Qqe | sort) <({ yay -Qqg base-devel; expac -l '\n' '%E' base; } | sort -u) | fzf --preview 'yay -Qil {}' --layout=reverse --bind 'enter:execute(yay -Qil {} | more)'"

#enviroment variables
export TERMINAL=/usr/bin/gnome-terminal
export EDITOR=/usr/bin/mousepad
export PAGER=/usr/local/bin/moar

export PF_INFO="ascii title os kernel wm shell memory palette"

export QT_QPA_PLATFORMTHEME="qt5ct"
export CALIBRE_USE_DARK_PALETTE=1
