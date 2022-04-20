import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
const path =require('path');
// https://vitejs.dev/config/
export default defineConfig({
  alias:{
    '@':path.resolve(__dirname,'./src' )
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vitetestbuild/'
  : '/',
  // base:'/vitetestbuild/',
  plugins: [
    vue(),
    vuetify({ autoImport: true })
  ]
})
