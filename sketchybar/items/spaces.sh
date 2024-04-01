#!/bin/bash

SPACE_SIDS=(1 2 3 4 5 6 7 8 9 10)

for sid in "${SPACE_SIDS[@]}"; do
	sketchybar --add space space.$sid left \
		--set space.$sid space=$sid \
		icon=$sid \
		label.font="sketchybar-app-font:Regular:16.0" \
		label.y_offset=-1 \
		label.padding_right=4 \
		script="$PLUGIN_DIR/space.sh"
done
