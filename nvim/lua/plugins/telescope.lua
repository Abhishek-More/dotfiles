-- Find the monorepo root by walking up to find the topmost .git directory
local function get_monorepo_root()
  local path = vim.fn.getcwd()
  local root = nil
  while path ~= "/" do
    if vim.fn.isdirectory(path .. "/.git") == 1 then
      root = path
    end
    path = vim.fn.fnamemodify(path, ":h")
  end
  return root
end

local function find_files_monorepo()
  local action_state = require("telescope.actions.state")
  local line = action_state.get_current_line()
  local root = get_monorepo_root()
  if root then
    LazyVim.pick("find_files", { cwd = root, default_text = line })()
  else
    vim.notify("No monorepo root found", vim.log.levels.WARN)
  end
end

local function live_grep_monorepo()
  local action_state = require("telescope.actions.state")
  local line = action_state.get_current_line()
  local root = get_monorepo_root()
  if root then
    LazyVim.pick("live_grep", { cwd = root, default_text = line })()
  else
    vim.notify("No monorepo root found", vim.log.levels.WARN)
  end
end

return {
  {
    "nvim-telescope/telescope.nvim",
    opts = {
      defaults = {
        file_ignore_patterns = { "node_modules" },
        mappings = {
          i = {
            ["<C-r>"] = find_files_monorepo,
          },
        },
      },
    },
    keys = {
      { "<leader>fm", find_files_monorepo, desc = "Find Files (Monorepo)" },
      { "<leader>sm", live_grep_monorepo, desc = "Grep (Monorepo)" },
    },
  },
}
