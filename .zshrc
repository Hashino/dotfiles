export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="simple"

#tty sessions
if [ `tput colors` != "256" ]; then
  ZSH_THEME="simple"
fi


plugins=(
  git
  colored-man-pages
  zsh-autosuggestions
)

source $ZSH/oh-my-zsh.sh


#ALIASES

#moar
alias more=moar

#exa
alias ls='exa -a --icons --group-directories-first' # just replace ls by exa and allow all other exa arguments
alias l='ls -lbF' #   list, size, type
alias ll='ls -la' # long, all
alias llm='ll --sort=modified' # list, long, sort by modification date
alias la='ls -lbhHigUmuSa' # all list
alias lx='ls -lbhHigUmuSa@' # all list and extended
alias tree='ls --tree --icons' # tree view
alias lS='ls -1 --icons --group-directories-first' # one column by just names
eval $(thefuck --alias)

#yay-list
alias yay-list="comm -23 <(yay -Qqe | sort) <({ yay -Qqg base-devel; expac -l '\n' '%E' base; } | sort -u) | fzf --preview 'yay -Qil {}' --layout=reverse --bind 'enter:execute(yay -Qil {} | moar)'"
