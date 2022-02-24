import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import reactRefresh from '@vitejs/plugin-react-refresh'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), legacy()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
