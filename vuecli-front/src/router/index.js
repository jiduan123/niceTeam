import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import('../views/Movie.vue'),
    children:[{
			path:"comment",
			component:() => import('../components/movie/Comment.vue'),
		}
	]
  },
  {
    path: '/ktv',
    name: 'Ktv',
    component: () => import('../views/Ktv.vue')
  },
  {
    path: '/ktv',
    name: 'Ktv',
    component: () => import('../views/Ktv.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/food',
    name: 'Food',
    component: () => import('../views/Food.vue')
  },
  {
    path: '/beauty',
    name: 'Beauty',
    component: () => import('../views/Beauty.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
