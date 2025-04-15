import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Removed invalid import for tailwindcss plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
