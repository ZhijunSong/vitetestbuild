import {createRouter,createWebHistory} from 'vue-router' 
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Intro from '@/views/Intro.vue'
const routes=[
    {path:'/vitetestbuild/',name:'Intro',component:Intro},
    {path:'/vitetestbuild/about',name:'About',component:About},
    {path:'/vitetestbuild/app',name:'Home',component:Home}

]
const router= createRouter({
    history: createWebHistory(),
    routes
 
}); 
export default router;