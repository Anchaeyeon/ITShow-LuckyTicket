import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // 백엔드 서버 주소
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
