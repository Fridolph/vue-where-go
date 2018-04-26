import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "page_home" */'@views/home/index.vue')
const City = () => import(/* webpackChunkName: "page_city" */'@views/city/index.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
