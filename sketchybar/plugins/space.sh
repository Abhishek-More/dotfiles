#!/bin/sh

# The $SELECTED variable is available for space components and indicates if
# the space invoking this script (with name: $NAME) is currently selected:
# https://felixkratz.github.io/SketchyBar/config/components#space----associate-mission-control-spaces-with-an-item

source "$CONFIG_DIR/colors.sh" # Loads all defined colors

if [ $SELECTED = true ]; then
	sketchybar --set $NAME background.drawing=off \
		icon="󰊠" \
		icon.width=12 \
		icon.font="JetBrainsMono Nerd Font:Semibold:19.0" \
		icon.color=$WHITE
else
	sketchybar --set $NAME background.drawing=off \
		icon="" \
		icon.width=12 \
		icon.position=center \
		icon.padding_left=2 \
		icon.font="JetBrainsMono Nerd Font:Semibold:12.0" \
		icon.color=$WHITE
fi
