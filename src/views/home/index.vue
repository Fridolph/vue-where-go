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

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import request from '@utils/request'
import HomeHeader from './HomeHeader.vue'
import HomeSwiper from './HomeSwiper.vue'
import HomeMenu from './HomeMenu.vue'
import HomeRecommend from './HomeRecommend.vue'
import Split from '../../components/split.vue'
import HomeLike from './HomeLike.vue'
import HomeWeekly from './HomeWeekly.vue'
import LayoutFooter from '@layouts/LFooter.vue'

@Component({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeMenu,
    Split,
    HomeRecommend,
    HomeLike,
    HomeWeekly,
    LayoutFooter
  }
})
export default class Home extends Vue {
  city: string = ''
  swiperItems: any[] = []
  menuItems: any[] = []
  recommendItems: any[] = []
  likeItems: any[] = []
  weeklyItems: any[] = []

  created() {
    this._initData()
  }

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
}
</script>
