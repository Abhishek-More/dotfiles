return {
  "giusgad/pets.nvim",
  dependencies = { "MunifTanjim/nui.nvim", "giusgad/hologram.nvim" },
  opts = {
    row = 7,
    col = 0,
    speed_multiplier = 1,
    default_pet = "dog",
    default_style = "brown",
    random = true,
    death_animation = true,
    popup = {
      width = "30%",
      winblend = 100,
      hl = { Normal = "Normal" },
      avoid_statusline = false,
    },
  },
}
