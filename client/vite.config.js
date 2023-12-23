import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { 
    outDir: "build",
    chunkSizeWarningLimit: 1600,
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000/',
        changeOrigin: true,
      },
    },
  },
  manualChunks: {
		lodash: ['lodash']
	},
  base: '/'
})
