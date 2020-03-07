import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

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
  },
  {
    path: "/cinema",
    name: 'Cinema',
    component: () => import('../components/movie/Cinema.vue')
  },
  {
    path: "/my",
    name: 'My',
    component: () => import('../components/movie/My.vue')
  },
  {
    path: "/detail",
    name: 'Detail',
    component: () => import('../components/movie/Detail.vue')
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
