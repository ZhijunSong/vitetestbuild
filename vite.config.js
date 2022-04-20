import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
const path =require('path');
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src' )
    },
  },
  publicPath: '/vitetestbuild/',
  base:'/',
  plugins: [
    vue(),
    vuetify({ autoImport: true })
  ]
})
