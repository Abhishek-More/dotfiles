return {
  "ibhagwan/fzf-lua",
  -- optional for icon support
  dependencies = { "echasnovski/mini.icons" },
  opts = {
    files = {
      -- hide dotfiles by default (no --hidden flag)
      fd_opts = "--color=never --type f --follow --exclude .git",
      rg_opts = "--color=never --files --follow --glob '!.git' --glob '!.*'",
    },
  },
  config = function(_, opts)
    local actions = require("fzf-lua.actions")
    opts.files = opts.files or {}
    opts.files.actions = {
      -- toggle dotfiles visibility with <alt-h>
      ["alt-h"] = { actions.toggle_hidden },
    }
    require("fzf-lua").setup(opts)
  end,
}
