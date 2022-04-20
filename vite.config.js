import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
const path =require('path');
// https://vitejs.dev/config/
export default defineConfig({
  alias:{
    '@':path.resolve(__dirname,'./src' )
  },
  
  publicPath: '/vitetestbuild/',
<<<<<<< HEAD
  base:'/vitetestbuild/',
=======
  base:'/dist/',
>>>>>>> parent of 845e68f (new build update resolve. alias)
  plugins: [
    vue(),
    vuetify({ autoImport: true })
  ]
})
