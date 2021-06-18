import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import showcategorie from '../views/showcategorie.vue'
import index1 from '../views/index1.vue'
import show from '../views/show.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'index1',
    component: index1
  },
  {
    path: '/show',
    name: 'show',
    component: show
  },
  {
    //path: '/showcategorie?:id',
    path: '/showcategorie',
    name: 'showcategorie',
    component: showcategorie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
