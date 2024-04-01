#!/bin/bash

sketchybar --add item calendar right \
	--set calendar icon=􀧞 \
	update_freq=30 \
	icon.y_offset=1 \
	script="$PLUGIN_DIR/calendar.sh" \ 
