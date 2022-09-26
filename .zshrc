export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="simple" 

#tty sessions
if [ `tput colors` != "256" ]; then  
  ZSH_THEME="simple"  
fi


plugins=(
git
colored-man-pages
)

source $ZSH/oh-my-zsh.sh

alias ls='exa -a --icons --group-directories-first' # just replace ls by exa and allow all other exa arguments
alias l='ls -lbF' #   list, size, type
alias ll='ls -la' # long, all
alias llm='ll --sort=modified' # list, long, sort by modification date
alias la='ls -lbhHigUmuSa' # all list
alias lx='ls -lbhHigUmuSa@' # all list and extended
alias tree='ls --tree --icons' # tree view
alias lS='ls -1 --icons --group-directories-first' # one column by just names
eval $(thefuck --alias)
