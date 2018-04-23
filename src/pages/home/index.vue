<template>
  <div class="page-home">
    <home-header :city="city"></home-header>
    <home-swiper :items="swiperItems"></home-swiper>
    <home-menu :items="menuItems"></home-menu>
    <split />
    <home-recommend :items="recommendItems"></home-recommend>
    <split />
    <home-like :items="likeItems"></home-like>
    <split />
    <home-weekly :items="weeklyItems"></home-weekly>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import request from '@lib/request'
import HomeHeader from './HomeHeader'
import HomeSwiper from './HomeSwiper'
import HomeMenu from './HomeMenu'
import HomeRecommend from './HomeRecommend'
import Split from '../../components/split'
import HomeLike from './HomeLike'
import HomeWeekly from './HomeWeekly'
import LayoutFooter from '@layouts/LFooter'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeMenu,
    Split,
    HomeRecommend,
    HomeLike,
    HomeWeekly,
    LayoutFooter
  },
  data() {
    return {
      city: '',
      swiperItems: [],
      menuItems: [],
      recommendItems: [],
      likeItems: [],
      weeklyItems: []
    }
  },
  methods: {
    getHomeData() {
      request.get('/homeData.json')
        .then(res => {
          console.log('拿到了数据\n', res)
          if (res.data.code !== 0) return new Error('获取数据错误')
          let { data } = res.data
          this.city = data.city
          this.swiperItems = data.swiperItems
          this.menuItems = data.menuItems
          this.recommendItems = data.recommendItems
          this.likeItems = data.likeItems
          this.weeklyItems = data.weeklyItems
        })
    }
  },
  created() {
    this.getHomeData()
  }
}
</script>
