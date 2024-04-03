#!/bin/bash

STATE="$(echo "$INFO" | jq -r '.state')"
if [ "$STATE" = "playing" ]; then
	MEDIA="$(echo "$INFO" | jq -r '.title')"
	ARTIST="$(echo "$INFO" | jq -r '.artist')"
	COMBINED_LENGTH=$((${#MEDIA} + ${#ARTIST}))

	if [ "$COMBINED_LENGTH" -le 31 ]; then
		sketchybar --set $NAME label="$MEDIA <> $ARTIST" drawing=on
	else
		sketchybar --set $NAME label="$MEDIA" drawing=on
	fi
else
	sketchybar --set $NAME drawing=off
fi
