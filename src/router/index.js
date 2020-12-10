import Vue from 'vue'
import VueRouter from 'vue-router'
import playlist from '../views/playlist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: playlist
  },
]

const router = new VueRouter({
  routes
})

export default router
