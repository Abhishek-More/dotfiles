# Dotfiles

Configuration for my macOS development environment.

## Contents

- Zsh, tmux, Git
- Neovim with LazyVim
- Kitty
- SketchyBar
- skhd and yabai
- Karabiner-Elements
- btop, Neofetch, and TheFuck

Root dotfiles map to `$HOME`; named directories map to `$HOME/.config/<name>`.
Run `~/.config/skhd/switch_skhd.sh` after installing the SKHD profiles to generate the active `skhdrc` for the current display layout.

## Requirements

- Homebrew
- JetBrainsMono Nerd Font and FiraCode Nerd Font
- TPM for tmux plugins
- `jq` for display-aware SketchyBar and SKHD configuration

Machine-specific credentials belong in `~/.zshrc.local`, which is intentionally ignored.
