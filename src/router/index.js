import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "views_home" */'@views/home/index.vue')
const City = () => import(/* webpackChunkName: "views_city" */'@views/city/index.vue')
const Detail = () => import(/* webpackChunkName: "views_detail" */'@views/detail/index.vue')

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'router-link-active',
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

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

// 路由切换后，将页面返回顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
