# open ranger and cd to its final directory
function r 
  set tempfile "/tmp/ranger"
  ranger --choosedir=$tempfile
  cd -- $(cat $tempfile) || return
end

function n 
  set tempfile "/tmp/navfs"
  navfs --file=$tempfile
  cd -- $(cat $tempfile) || return
end

#PATH
set -g -x PATH /bin:/usr/bin:/usr/local/bin/:$HOME/.dotfiles/.local/bin:$HOME/.local/bin

#ALIASES

##moar
alias more 'nvim +Man!'
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
alias v "nvim ." 
alias nvim "nvim" # -c 'NvimTreeToggle' ." 

#package manager
alias pm "yay -Qqent | fzf --preview 'yay -Qil {}' --layout=reverse --bind 'enter:execute(yay -Qil {} | less)' --bind 'ctrl-u:execute(yay -Rns {})' --bind 'ctrl-o:execute(yay -Qtdq | yay -Rns - )' --header='[ENTER] = Details    [CTRL+U] = Uninstall    [CTRL+O] = Remove Orphans' "

#enviroment variables
set -U -x TERMINAL terminator
set -U -x EDITOR nvim
set -U -x PAGER 'nvim +Man!'

set -U -x PF_INFO "ascii title os kernel wm shell memory palette"

# i hate qt applications
set -U -x QT_QPA_PLATFORMTHEME qt5ct:qt6ct
