import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/Pokemon_Memory_Game/",
  plugins: [react()],
})
