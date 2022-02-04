import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// =====================
import path from 'path'
const pathResolve = (dirPath: string) => path.resolve(process.cwd(), dirPath)

// https://vitejs.dev/config/
export default ({ command }) => {
  const isBuild = command === 'build'

  return defineConfig({
    plugins: [
      vue(),
      // element-plus组件样式按需引入
      styleImport({
        resolves: [ElementPlusResolve()],
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            resolveStyle: (name) => `element-plus/theme-chalk/${name}.css`
          }
        ]
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: `${pathResolve('src')}/`
        }
      ]
    },
    server: {
      port: 8002,
      proxy: {
        '/api': {
          target: 'http://152.136.185.210:5000',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, '')
        }
      }
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment'
    }
  })
}
