import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    transformer: "postcss",
    postcss: {},  // ✅ Force PostCSS instead of LightningCSS
  },
   optimizeDeps: {
    exclude: ['lightningcss'], // 🚫 Don't bundle lightningcss
  },
  ssr: {
    noExternal: ['lightningcss'], // 🚫 Ignore lightningcss in SSR too
  },
})
