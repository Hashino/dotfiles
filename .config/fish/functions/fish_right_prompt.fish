# Display the compressed current working path on the right
# If the previous command returned any kind of error code, display that too

function fish_right_prompt
  set -l last_status $status
  set -l cyan (set_color cyan)
  set -l yellow (set_color yellow)
  set -l red (set_color red)
  set -l blue (set_color blue)
  set -l green (set_color green)
  set -l normal (set_color normal)
  set -l bold (set_color -o)

  #echo -n -s $cyan (prompt_pwd)

  if test $last_status -ne 0
    echo -n (set_color red)"["$last_status"] "(set_color normal)
  end

  set -l duration (math -s 0 "$CMD_DURATION / 1000")

  if test $duration -gt 1
    set -l seconds (math "$duration % 60")
    set -l minutes (math "$(math -s 0 "$duration / 60") % 60")
    set -l hours (math -s 0 "$(math -s 0 "$duration / 60") / 60")
    
    echo -n $blue"took "
    
    if test $hours -gt 0
      echo -n $hours"h "
    end
    if test $minutes -gt 0
      echo -n $minutes"m "
    end
    if test $seconds -gt 0
      echo -n $seconds"s "
    end

    echo -n $normal
  end

  #echo $green 'at' 
  echo -n (set_color -o brblack)(date +%H:%M:%S)(set_color normal)
end
