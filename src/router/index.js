import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "page_home" */'@pages/home')
const City = () => import(/* webpackChunkName: "page_city" */'@pages/city')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
