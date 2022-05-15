import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:'/music',
    children:[
      {
        path:'music',
        component:()=>import('../views/music/MusicView.vue')
      },
      {
        path:'video',
        component:()=>import('../views/video/VideoView.vue')
      }
    ]
  },
  {
    path: '/vediodetail',
    name: 'Vediodetail',
    component:()=>import('../views/video/videoDetail.vue')
  },
  {
    path: '/musicdetail',
    name: 'Musicdetail',
    component:()=>import('../views/music/musicDetail.vue')
  },
  // {
  //   path: '/poput',
  //   name: 'Poput',
  //   component:()=>import('../components/music/popup.vue')
  // },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
