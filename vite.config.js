import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNesting from 'postcss-nested';
import EnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({ BASE_URL: 'http://localhost:5173' }, { defineOn: 'import.meta.env' })
  ],
  css: {
    postcss: {
      plugins: [
        postcssNesting,
      ],
    },
  },
});