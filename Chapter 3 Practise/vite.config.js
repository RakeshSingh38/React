import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'local.com',
    port: 80,
    strictPort: true
  }
})


