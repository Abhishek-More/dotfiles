return {
  "cdmill/focus.nvim",
  cmd = { "Focus", "Zen", "Narrow" },
  opts = {
    window = {
      backdrop = 0.9, -- shade the backdrop of the focus window. Set to 1 to keep the same as Normal
      -- height and width can be:
      -- * an absolute number of cells when > 1
      -- * a percentage of the width / height of the editor when <= 1
      width = 80, -- width of the focus window
      options = {},
    },
  },
}
