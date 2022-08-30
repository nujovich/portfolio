import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNesting from 'postcss-nested';
import EnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig({
  base: '/portfolio/',
  plugins: [
    react(),
    EnvironmentPlugin(
      { LOCAL_URL: 'http://localhost:5174' }, { defineOn: 'import.meta.env' },
      { PROD_URL: 'http://nujovich.github.io' }, { defineOn: 'import.meta.env' },
    )
  ],
  css: {
    postcss: {
      plugins: [
        postcssNesting,
      ],
    },
  },
});