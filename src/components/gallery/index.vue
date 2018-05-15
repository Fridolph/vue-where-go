<template>
  <section class="gallery-container" @click="handleGalleryClick">
    <div class="go-back">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="swiper-container">
      <swiper :options="swiperOptions" ref="gallerySwiper">
        <swiper-slide v-for="(v, i) in items" :key="i">
          <img class="swiper-img" :src="v">
        </swiper-slide>

        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
      </swiper>
      <!-- <div class="swiper-note">
        <span class="current">{{idx}}</span>
        /
        <span class="total">{{items.length}}</span>
      </div> -->
    </div>
  </section>
</template>

<script lang="ts">
import {Vue, Component, Prop, Emit} from 'vue-property-decorator'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

@Component({
  components: {
    swiper,
    swiperSlide
  }
})
export default class Gallery extends Vue {
  @Prop({type: Array, default: []})
  items

  swiperOptions: any = {
    observer: true,
    observeParents: true
  }

  idx: number = 1

  $refs: {
    gallerySwiper: any
  }

  get swiper() {
    return this.$refs.gallerySwiper.swiper
  }

  @Emit('closeGallery')
  handleGalleryClick() {
  }

  mounted() {
    let that = this
    this.swiper.on('click mousedown', e => {
      console.log(that.swiper.activeIndex)
      that.idx = that.swiper.activeIndex + 1
    })
  }
}
</script>

<style lang="stylus" scoped>
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
  color #fff
  .swiper-container
    // overflow hidden
    // width 100%
    // height 0
    // padding-bottom 100%
    .swiper-slide
      .swiper-img
        width 100%
    .swiper-note
      position fixed
      color #fff
      bottom 160px
      left 50%
      transform translateX(-50%)
      text-align center

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

<style lang="stylus">
.swiper-wrapper
  width 100%
</style>
