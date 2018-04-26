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
    async _initData() {
      try {
        let {data} = await request.get('/city/chengdu')
        if (data.code !== 0) return data.msg
        this.city = data.data.city
        this.swiperItems = data.data.swiperItems
        this.menuItems = data.data.menuItems
        this.recommendItems = data.data.recommendItems
        this.likeItems = data.data.likeItems
        this.weeklyItems = data.data.weeklyItems
      } catch (err) {
        console.error(err)
      }
    }
  },
  created() {
    this._initData()
  }
}
</script>
