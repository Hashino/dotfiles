#!/usr/bin/env bash

#array with all enabled sinks
sinks=($(pactl list short sinks | awk '{print $2}'))
#lenght of sinks - 1
n_sinks=$((${#sinks[@]}-1))

#currently enabled sink
curr=$(pactl info | grep Sink | cut -d: -f2)

#iterates through the array of sinks
for counter in $(seq 0 $n_sinks)
do
	#checks if current element is the enabled sink
	if [ ${sinks[$counter]} == $curr ]
	then
		if [ $counter == $n_sinks ]
		then
			#wraps around array if last element
			pactl set-default-sink ${sinks[0]}
		else
			#enables the next sink in the array
			pactl set-default-sink ${sinks[$(($counter + 1))]}
		fi
	fi
done