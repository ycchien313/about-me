import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/about-me/",
  plugins: [
    eslint(),
    react()
  ],
  // 設定資料夾別名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'contexts': resolve(__dirname, 'src/contexts'),
      'layouts': resolve(__dirname, 'src/layouts'),
      'pages': resolve(__dirname, 'src/pages'),
      'router': resolve(__dirname, 'src/router'),
      'sections': resolve(__dirname, 'src/sections'),
      'theme': resolve(__dirname, 'src/theme'),
    },
  },
})
