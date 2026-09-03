#!/bin/bash

# Get the number of connected displays
DISPLAYS=$(yabai -m query --displays | jq length)

if [ "$DISPLAYS" -gt 1 ]; then
  # Load monitor setup
  echo "Monitor setup"
  cp ~/.config/skhd/monitorrc ~/.config/skhd/skhdrc
else
  # Load laptop-only setup
  echo "Laptop setup"
  cp ~/.config/skhd/laptoprc ~/.config/skhd/skhdrc
fi

# Reload skhd to apply the new config
#pkill -USR1 -x skhd
skhd --restart-service
yabai --restart-service
