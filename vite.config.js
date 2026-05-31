import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // This explicitly tells Vite to put production files in the 'dist' folder
    outDir: 'dist', 
  }
})