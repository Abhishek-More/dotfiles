#!/bin/bash

sketchybar --add item media e \
	--set media label.color=$WHITE \
	icon.display=0 \
	icon.color=0xff414458 \
	background.color=$BACKGROUND_COLOR \
	icon.padding_left=0 \
	icon.padding_right=0 \
	label.padding_left=0 \
	label.padding_right=0 \
	label.max_chars=35 \
	label.font="JetBrainsMono Nerd Font:Semibold:13.0" \
	scroll_texts=on \
	script="$PLUGIN_DIR/media.sh" \
	--subscribe media media_change
