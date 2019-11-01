import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/services',
      component: () => import('../components/MainPage/Servicedetails.vue')
    },
    {
      path: "/about-us/",
      component: () => import('../views/AboutUs.vue')
    },
    {
      path: "/video/",
      component: () => import('../components/VideoPlayer.vue')
    }
  ]
})
