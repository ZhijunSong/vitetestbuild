import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import vuetify from '@/plugins/vuerify'

createApp(App)
.use(router)
.use(vuetify)
.mount('#app')
