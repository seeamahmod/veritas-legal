import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { securityHeaders } from './security-headers.js'

// Dev server needs inline/eval for HMR, so the strict CSP is only applied in `vite preview`,
// which serves the production build exactly like Vercel does.
const { 'Content-Security-Policy': _csp, ...devHeaders } = securityHeaders

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { headers: devHeaders },
  preview: { headers: securityHeaders },
  build: {
    sourcemap: false,
    assetsInlineLimit: 0, // keep every asset as a file so CSP never needs data: scripts/styles
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) return 'motion'
            if (id.includes('react')) return 'react'
          }
        },
      },
    },
  },
})
