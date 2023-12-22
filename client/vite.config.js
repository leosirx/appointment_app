import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://appoint-dev-kghr.1.us-1.fl0.io/',
        changeOrigin: true,
      },
    },
  }
})
