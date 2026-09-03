return {
  "zerochae/endpoint.nvim",
  dependencies = {
    -- Choose one or more pickers (all optional):
    "nvim-telescope/telescope.nvim", -- For telescope picker
  },
  cmd = { "Endpoint" },
  config = function()
    require("endpoint").setup()
  end,
}
