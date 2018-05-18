import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "views_home" */'@views/home/index.vue')
const City = () => import(/* webpackChunkName: "views_city" */'@views/city/index.vue')
const Detail = () => import(/* webpackChunkName: "views_detail" */'@views/detail/index.vue')

// import Home from '../views/home'
// import City from '../views/city'
// import Detail from '../views/detail'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'router-link-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '去哪儿 - 城市'
      }
    },
    {
      path: '/city',
      name: 'city',
      component: City,
      meta: {
        title: '去哪儿 - 选择城市'
      }
    },
    {
      path: '/detail/:pname',
      name: 'detail',
      component: Detail,
      meta: {
        title: '去哪儿 - 详情'
      }
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
