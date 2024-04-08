#!/bin/bash

SPACE_SIDS=(1 2 3 4 5 6 7 8 9 10)

sketchybar --add event spotify_change $SPOTIFY_EVENT \
	--add item pac left \
	--set pac \
	icon="󰮯" \
	icon.color=$WHITE \
	icon.padding_left=0 \
	icon.padding_right=0 \
	label.padding_left=0 \
	label.padding_right=0 \
	icon.font="JetBrainsMono Nerd Font:Semibold:19.0" \
	icon.y_offset=0 \
	label.drawing=off \
	background.drawing=off

for sid in "${SPACE_SIDS[@]}"; do
	sketchybar --add space space.$sid left \
		--set space.$sid space=$sid \
		icon=$sid \
		label.font="JetBrainsMono Nerd Font:Regular:16.0" \
		icon.padding_left=0 \
		icon.padding_right=0 \
		label.padding_left=0 \
		label.padding_right=0 \
		label.y_offset=-1 \
		label.padding_right=4 \
		background.drawing=off \
		script="$PLUGIN_DIR/space.sh"
done
