import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from 'vite-plugin-dts'

const COMP_NAMES = [
  "Button",
  "Icon",
  "ButtonGroup",
  "Input",
  "Checkbox",
  "Radio",
] as const

export default defineConfig({
  plugins: [vue(), dts({
    tsconfigPath: '../../tsconfig.build.json',
    outDir: 'dist/types'
  })],
  build: {
    outDir: 'dist/es',
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'amElement',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'async-validator'
      ],
      output: {
        assetFileNames(chunkInfo) {
          if (chunkInfo.name === 'style.css') {
            return 'index.css'
          }
          return chunkInfo.name as string
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('/packages/hooks')) {
            return 'hooks'
          }
          if (id.includes('/packages/utils')) {
            return 'utils'
          }
          for (const item of COMP_NAMES) {
            if (id.includes(`/packages/components/${item}`)) {
              return item
            }
          }
        }
      }
    }
  }
})
