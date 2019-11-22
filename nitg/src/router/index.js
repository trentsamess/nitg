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
      component: () => import('../components/Video.vue')
    },
    {
      path: "/website-development/",
      component: () => import('../views/WebsiteDevelopment.vue')
    },
    {
      path: "/it-outsourcing/",
      component: () => import('../views/ITOutsourcing.vue')
    },
    {
      path: "/software-engineering/",
      component: () => import('../views/SoftwareEngineering.vue')
    },
    {
      path: "/it-consulting/",
      component: () => import('../views/ITConsulting.vue')
    },
    {
      path: "/careers/",
      component: () => import('../views/Career.vue')
    },
  ]
})
