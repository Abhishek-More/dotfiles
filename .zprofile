eval "$(/opt/homebrew/bin/brew shellenv)"

export PATH="$HOME/.rbenv/bin:$PATH"
command -v rbenv >/dev/null && eval "$(rbenv init - --no-rehash zsh)"
export PATH="$PATH:$HOME/.local/bin"
