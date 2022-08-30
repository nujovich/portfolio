import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNesting from 'postcss-nested';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  css: {
    postcss: {
      plugins: [
        postcssNesting,
      ],
    },
  },
});