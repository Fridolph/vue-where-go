import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "views_home" */'@views/home/index.vue')
const City = () => import(/* webpackChunkName: "views_city" */'@views/city/index.vue')
const Detail = () => import(/* webpackChunkName: "views_detail" */'@views/detail/index.vue')

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
    },
    {
      path: '/detail/:pname',
      name: 'detail',
      component: Detail
    }
  ]
})
