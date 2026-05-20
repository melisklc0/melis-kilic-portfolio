import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update 'base' to your GitHub Pages repo name if not deploying to root
// e.g., base: '/melis-kilic-portfolio/' for https://melisklc0.github.io/melis-kilic-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/melis-kilic-portfolio/',
})
