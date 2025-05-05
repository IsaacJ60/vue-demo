import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    darkMode: true // ✅ Start in dark mode
  }),
  actions: {
    toggleTheme() {
      this.darkMode = !this.darkMode
    }
  }
})
