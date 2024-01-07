function _git_branch_name
  echo (command git symbolic-ref HEAD 2> /dev/null | sed -e 's|^refs/heads/||')
end

function _is_git_dirty
  echo (command git status -s --ignore-submodules=dirty 2> /dev/null)
end

function fish_prompt
  set -l cyan (set_color cyan)
  set -l yellow (set_color yellow)
  set -l red (set_color red)
  set -l blue (set_color blue)
  set -l green (set_color green)
  set -l normal (set_color normal)
  set -l bold (set_color -o)
  # output the prompt, left to right

  # Add a newline before prompts
  #echo -e ""

  # Display [venvname] if in a virtualenv
  if set -q VIRTUAL_ENV
      echo -n -s (set_color -b cyan black) '[' (basename "$VIRTUAL_ENV") ']' $normal ' '
  end

  set -l cwd $green(pwd)$normal

  # Display the current directory name
  echo -n -s $green(string replace $HOME '~' (pwd))

  # Show git branch and dirty state
  if [ (_git_branch_name) ]
    if [ (_is_git_dirty) ]
      set git_info $blue '(' (_git_branch_name) $red " " $blue ')'
    else
      set git_info $blue '(' (_git_branch_name) $green " " $blue ')'
    end
    echo -n -s ' ' $bold $git_info $normal
  end

  # Terminate with a nice prompt char
  echo -n -s $normal'  '

end