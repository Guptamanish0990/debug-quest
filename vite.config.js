import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/debug-quest/',   // 👈 add this line
  plugins: [react()],
})
