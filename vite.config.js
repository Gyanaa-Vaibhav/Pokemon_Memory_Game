import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
    base:'/',
    build: {
        outDir: '/var/www/html/Pokemon_Memory_Game',
        emptyOutDir: true,
    },
    server: {
        host: '0.0.0.0',
        port: 9003,
    },
    plugins: [react()],
})
