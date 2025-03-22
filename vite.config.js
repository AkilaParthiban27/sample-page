import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import postcss from './postcss.config.cjs'; // Import PostCSS config
// import tailwindcss from 'tailwindcss';  // Import Tailwind CSS directly


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
