<template>
  <section class="wrapper">
    <swiper :options="swiperOption" ref="homeSwiper" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in items" :key="item.src">
        <img class="swiper-img" :src="item.src" alt="轮播图">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </section>
</template>

<script lang="ts">
import 'swiper/dist/css/swiper.css'
import {Vue, Component, Prop} from 'vue-property-decorator'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

@Component({
  components: {
    swiper,
    swiperSlide
  }
})
export default class HomeSwiper extends Vue {
  @Prop({type: Array, required: true, default: []})
  items

  get showSwiper(): number {
    return this.items.length
  }

  swiperOption: any = {
    autoplay: 3000,
    setWrapperSize: true,
    autoHeight: true,
    loop: true,
    pagination: '.swiper-pagination'
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31%
  background #eee
  .swiper-slide
    .swiper-img
      width 100%
      height 100%
</style>

<style lang="stylus">
.wrapper
  .swiper-pagination-bullet-active
    background rgba(255,255,255,0.7)
.wrapper
  .swiper-pagination-bullet
    width 26px
    height 26px
    margin: 8px 10px
</style>
