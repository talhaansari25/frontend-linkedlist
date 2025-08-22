import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'obtaining-vacations-hazard-soil.trycloudflare.com'
    ],
    proxy: {
      '/*': {
        target: 'https://backend-linkedlist.vercel.app',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
