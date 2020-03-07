import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dlc',
    name: 'Delicious',
    component: () => import('../views/Delicious.vue')
  },
  {
    path: '/sortv',
    name: 'Sortv',
    component: () => import('../components/sortview.vue')
  },
  {
    path: '/shopv',
    name: 'Shopv',
    component: () => import('../components/shopview.vue')
  },
  {
    path: '/groupinfo',
    name: 'Groupinfo',
    component: () => import('../components/groupinfo.vue')
  },
  {
    path: '/buying',
    name: 'Buying',
    component: () => import('../components/buying.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../components/search.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
