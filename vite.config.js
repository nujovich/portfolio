import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNesting from 'postcss-nested';
import EnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin(
      { LOCAL_URL: 'http://localhost:5174' }, { defineOn: 'import.meta.env' },
      { PROD_URL: 'https://nujovich.github.io' }, { defineOn: 'import.meta.env' },
    )
  ],
  base: '/portfolio/',
  css: {
    postcss: {
      plugins: [
        postcssNesting,
      ],
    },
  },
});