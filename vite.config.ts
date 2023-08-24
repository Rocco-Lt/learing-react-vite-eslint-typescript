import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteEslint from 'vite-plugin-eslint';
import { resolve } from 'path';
import postcssPresetEnv from 'postcss-preset-env';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      //  failOnError: false
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.jsx', 'src/**/*.ts']
      // exclue: ['./node_modules/**']
      // cache: false
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'parens-division'
      }
    },
    postcss: {
      plugins: [postcssPresetEnv()]
    }
  },
  server: {
    cors: true,
    // https: false,
    // 代理跨域（mock 不需要配置，这里只是个事列）
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7002 ', // easymock
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
