#!/bin/bash

sketchybar --add event spotify_change $SPOTIFY_EVENT \
	--add item spotify e \
	--set spotify \
	icon="" \
	icon.display=0 \
	icon.color=0xff414458 \
	icon.padding_left=8 \
	icon.padding_right=8 \
	label.padding_left=0 \
	label.padding_right=0 \
	icon.font="JetBrainsMono Nerd Font:Semibold:19.0" \
	background.color=0xffb3e1a7 \
	icon.y_offset=0 \
	label.drawing=off \
	script="$PLUGIN_DIR/spotify.sh" \
	--subscribe spotify spotify_change mouse.clicked

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
