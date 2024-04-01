#!/bin/bash

sketchybar --add item media e \
	--set media label.color=$WHITE \
	label.max_chars=20 \
	icon.padding_left=0 \
	icon.padding_right=0 \
	label.padding_left=0 \
	label.padding_right=0 \
	scroll_texts=on \
	background.drawing=off \
	script="$PLUGIN_DIR/media.sh" \
	--subscribe media media_change
