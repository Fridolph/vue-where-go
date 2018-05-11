<template>
  <section class="gallery-container" @click="handleGalleryClick">
    <div class="go-back">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="wrapper">
      <swiper :options="swiperOptions" ref="detailGallerySwiper">
        <swiper-slide v-for="v in items" :key="v">
          <img class="swiper-img" :src="v">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </section>
</template>

<script lang="ts">
import 'swiper/dist/css/swiper.css'
import {Vue, Component, Emit} from 'vue-property-decorator'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

@Component({
  components: {
    swiper,
    swiperSlide
  }
})
export default class Gallery extends Vue {
  swiperOptions: any = {
  }

  items: any[] = [
    'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_r_800x800_3755d9a0.jpg',
    'http://img1.qunarzz.com/wugc/p59/201207/27/762b530b2ed2288293835fbb.jpg_r_800x800_7b6da46c.jpg',
    'http://img1.qunarzz.com/wugc/p216/201207/16/40e62ea907230da393835fbb.jpg_r_800x800_949f826e.jpg'
  ]

  mounted() {
    this.$nextTick(() => {
      this.swiperOptions = {
        observer: true,
        observeParents: true
      }
    })
  }

  @Emit('closeGallery')
  handleGalleryClick() {

  }
}
</script>

<style lang="stylus">
.gallery-container
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  width 100%
  height 100%
  z-index 100
  background-color #000
  display flex
  justify-content center
  align-items center
  .wrapper
    // overflow hidden
    width 100%
    height 0
    padding-bottom 100%
    .swiper-slide
      .swiper-img
        width 100%
    .swiper-pagination
      color #fff

  .go-back
    position absolute
    z-index 20
    left 40px
    top 30px
    background rgba(255,255,255,0.3)
    border-radius 50%
    width 100px
    height 100px
    display flex
    justify-content center
    align-items center
    i
      font-size 50px
      color #fff
      font-weight bold
</style>
