<template>
  <div class="page-home">
    <home-header />
    <home-swiper :items="swiperItems" />
    <home-menu :items="menuItems" />
    <split />
    <home-recommend :items="recommendItems" />
    <split />
    <home-like :items="likeItems" />
    <split />
    <home-weekly :items="weeklyItems" />
    <layout-footer />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {Getter} from 'vuex-class'
import request from '../../utils/request'
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
  swiperItems: any[] = []
  menuItems: any[] = []
  recommendItems: any[] = []
  likeItems: any[] = []
  weeklyItems: any[] = []
  lastCity: string = ''

  @Getter('currentCity') currentCity

  created() {
    this._initData()
    this.lastCity = this.currentCity
    console.log('当前城市', this.currentCity)
  }

  async activated() {
    if (this.lastCity !== this.currentCity) {
      let {data} = await request.get(`/city/chengdu?city=${this.currentCity}`)
      if (data.code !== 0) return data.msg
      // console.log('从服务端拿到数据\n', data)
      sessionStorage.setItem('city/chengdu', JSON.stringify(data))
      this.swiperItems = data.data.swiperItems
      this.menuItems = data.data.menuItems
      this.recommendItems = data.data.recommendItems
      this.likeItems = data.data.likeItems
      this.weeklyItems = data.data.weeklyItems
    }
  }

  async _initData() {
    let cache = sessionStorage['city/chengdu']
    try {
      if (cache) {
        const data = JSON.parse(cache)
        this.swiperItems = data.data.swiperItems
        this.menuItems = data.data.menuItems
        this.recommendItems = data.data.recommendItems
        this.likeItems = data.data.likeItems
        this.weeklyItems = data.data.weeklyItems
      } else {
        let {data} = await request.get(`/city/chengdu?city=${this.currentCity}`)
        if (data.code !== 0) return data.msg
        // console.log('从服务端拿到数据\n', data)
        sessionStorage.setItem('city/chengdu', JSON.stringify(data))
        this.swiperItems = data.data.swiperItems
        this.menuItems = data.data.menuItems
        this.recommendItems = data.data.recommendItems
        this.likeItems = data.data.likeItems
        this.weeklyItems = data.data.weeklyItems
      }
    } catch (err) {
      console.error(err)
    }
  }
}
</script>
