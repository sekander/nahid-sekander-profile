import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
	  host: "0.0.0.0",
	  port: 5000,
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  build: {sourcemap: false,},
  plugins: [react()],
})
