import { defineConfig } from 'vite'
import { resolve } from 'path'; // 主要用于alias文件路径别名
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: '/coffeeio/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0'
  }
})
