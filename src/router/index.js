import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import HomeIndex from '@/views/Home/index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: '/',
        component: HomeIndex
      } ]
    }
  ]
})
