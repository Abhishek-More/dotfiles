if [ -z "$TMUX" ]; then
  neofetch
fi

# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:$PATH
export PATH="/opt/homebrew/bin:$PATH"

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

source ~/.zprofile

ZSH_THEME="robbyrussell"

tmuxswitch() {
  local session_name="$1"
  local session_dir="$2"

  if [ -z "$TMUX" ]; then
    # If not inside tmux, create a new session with specific tabs and panes
    if ! tmux has-session -t "$session_name" 2>/dev/null; then
      # Create a new session
      tmux new-session -d -s "$session_name" -c "$session_dir"

      # Create a horizontal split pane in the first window
      tmux split-window -h -c "$session_dir" -t "$session_name:1"

      tmux new-window -c "$session_dir" -t "$session_name" -n "editor"
      tmux send-keys -t "$session_name:2" 'nvim' C-m

      tmux last-window
    fi
    # Attach to the session
    tmux attach-session -t "$session_name"
  else
    # Inside tmux: Check if the session exists
    if tmux has-session -t "$session_name" 2>/dev/null; then
      # Switch to the existing session
      tmux switch-client -t "$session_name"
    else
      # Create a new session from within tmux
      tmux new-session -d -s "$session_name" -c "$session_dir"
      # Create a horizontal split pane in the first window
      tmux split-window -h -c "$session_dir" -t "$session_name:1"
      # Create a new window (tab)
      tmux new-window -c "$session_dir" -t "$session_name" -n "editor" 'nvim'
      # Attach to the newly created session
      tmux switch-client -t "$session_name"

      # tmux send-keys -t "$session_name:2" 'nvim' C-m

      tmux last-window
    fi

  fi
}

plugins=(zsh-autosuggestions)

source $ZSH/oh-my-zsh.sh

alias c="clear"
alias t='tmux'
alias tn='tmux new-session -s $(basename "$PWD")'
alias config="cd ~/.config/"
alias gitopen="git remote get-url origin"
alias spot="spotify_player"
alias nivm="nvim"
alias hot="npm run hot"
alias tablet="npm run tablet"
alias android="npm run android"
alias propen="gh pr view --web"
alias codepush="node ~/Code/code-push-server/cli/bin/script/cli.js"
alias ls="eza --icons=always --group-directories-first"

alias pos='tmuxswitch POS ~/Code/Dripos-POS-React-Native/'
alias oapp='tmuxswitch OAPP ~/Code/Dripos-React-Native/'
alias oweb='tmuxswitch OWEB ~/Code/Dripos-React-Order/'
alias hub='tmuxswitch HUB ~/Code/Dripos-Dashboard-React-Native/'
alias dash='tmuxswitch DASH ~/Code/Dripos-React-Partner/'
alias server='tmuxswitch SERVER ~/Code/V3Server/'
alias reader='tmuxswitch READER ~/Code/Dripos-React-Native-Reader/'
alias readerv3='tmuxswitch V3 ~/Code/Lets-Go-Reader/'
alias pinstall='yarn && cd ios && pod install --repo-update && cd ..'
alias readerinstall='adb uninstall com.anonymous.LetsGoReader && adb install ~/Downloads/application*.apk && adb shell am start -n com.anonymous.LetsGoReader/.MainActivity'

eval "$(starship init zsh)"
eval "$(zoxide init --cmd cd zsh)"

export PATH="/opt/homebrew/opt/libpq/bin:$PATH"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# bun completions
[ -s "$HOME/.bun/_bun" ] && source "$HOME/.bun/_bun"

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"


export PATH=$PATH:$HOME/.spicetify

[ -f "$HOME/.deno/env" ] && source "$HOME/.deno/env"

# Created by `pipx` on 2024-12-30 07:56:25
export PATH="$PATH:$HOME/.local/bin"

export PYENV_ROOT="$HOME/.pyenv"
[[ -d "$PYENV_ROOT/bin" ]] && export PATH="$PYENV_ROOT/bin:$PATH"
command -v pyenv >/dev/null && eval "$(pyenv init - zsh)"
export PATH="/opt/homebrew/opt/qt@5/bin:$PATH"

# The next line updates PATH for the Google Cloud SDK.
if [ -f "$HOME/google-cloud-sdk/path.zsh.inc" ]; then source "$HOME/google-cloud-sdk/path.zsh.inc"; fi

# The next line enables shell command completion for gcloud.
if [ -f "$HOME/google-cloud-sdk/completion.zsh.inc" ]; then source "$HOME/google-cloud-sdk/completion.zsh.inc"; fi
export PATH="/opt/homebrew/opt/mysql/bin:$PATH"

eval $(thefuck --alias)

# opencode
export PATH=$HOME/.opencode/bin:$PATH

# OpenClaw Completion
[ -f "$HOME/.openclaw/completions/openclaw.zsh" ] && source "$HOME/.openclaw/completions/openclaw.zsh"

export VISUAL="nvim"

alias fleet='python3 ~/omp-fleet/fleet.py'

# Suppress punycode deprecation warning (DEP0040) across all node processes
export NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--disable-warning=DEP0040"

killp() { local pids; pids=$(lsof -ti:"$1") && kill -9 $pids; }

[ -f "$HOME/.zshrc.local" ] && source "$HOME/.zshrc.local"
