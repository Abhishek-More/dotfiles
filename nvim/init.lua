-- bootstrap lazy.nvim, LazyVim and your plugins
require("config.lazy")

vim.keymap.set("n", "<leader>o", "<CMD>Oil<CR>", { desc = "Open File Tree" })
vim.keymap.set("n", "<leader>im", function()
  local params = vim.lsp.util.make_range_params()
  params.context = {
    diagnostics = vim.lsp.diagnostic.get_line_diagnostics(),
    only = { "source.addMissingImports.ts", "quickfix" },
  }

  vim.lsp.buf_request(0, "textDocument/codeAction", params, function(err, result, ctx)
    if err or not result or #result == 0 then
      print("No import actions found")
      return
    end

    -- Find and apply the first import action
    for _, action in ipairs(result) do
      if action.title:match("[Ii]mport") or action.kind == "quickfix" then
        if action.edit then
          vim.lsp.util.apply_workspace_edit(action.edit, "utf-8")
        elseif action.command then
          vim.lsp.buf.execute_command(action.command)
        end
        print("Imported: " .. action.title)
        return
      end
    end
  end)
end, { desc = "Auto-import under cursor" })

vim.g.snacks_animate = false

-- I keep accidentally running :W instead of :w
vim.cmd("command! -nargs=0 W w")
vim.cmd("command! -nargs=0 Wq wq")
vim.cmd("command! -nargs=0 Q q")
