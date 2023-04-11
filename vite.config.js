import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
// import babel from '@rollup/plugin-babel'
// import resolve from '@rollup/plugin-node-resolve'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr()],
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 3001,
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        assetFileNames: `[name].[ext]`
      },
      // plugins: [
      //   resolve(),
      //   babel({
      //     exclude: 'node_modules/**'
      //   })
      // ]
    }
  }
})
