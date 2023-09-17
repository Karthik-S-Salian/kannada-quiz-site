import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// base ia added just for gh-pages to work remove is gh-pages is not used
export default defineConfig({
  plugins: [react()],
  base: "/kannada-quiz-site/"
})
