import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  build: {
      outDir: 'dist',
  },
  publicDir: 'assets/*/**',
  plugins: [react()],
  resolve: {
    alias: [{ find: '@src', replacement: path.resolve(__dirname, 'src') }],
  },

  server: {
    host: '0.0.0.0',
  }
})
