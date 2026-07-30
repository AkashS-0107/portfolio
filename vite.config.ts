import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// Dynamic base path support for both Vercel (/) and GitHub Pages (/portfolio/)
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true'
const base = isVercel ? '/' : (process.env.NODE_ENV === 'production' ? '/portfolio/' : '/')

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: base,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
