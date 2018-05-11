<template>
  <section class="home-recommend">
    <h2 class="recommend-title">
      <img class="icon" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="hot">
      <span>本周热门推荐榜单</span>
      <a href="javascript:;">全部榜单 ></a>
    </h2>
    <div class="list-wrapper">
      <swiper :options="swiperOption" ref="homeSwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,idx) in items" :key="item.title">
          <router-link :to="`/detail/${item.title}`" class="item-wrapper">
            <div :class="`tag tag-${idx}`"></div>
            <div class="img-wrapper">
              <img :src="item.src" :alt="item.title">
            </div>
            <div class="title">{{item.title}}</div>
            <div class="price"><span>￥<em>{{item.price}}</em></span>起</div>
          </router-link>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
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
export default class HomeRecommend extends Vue {
  @Prop({type: Array, required: true, default: []})
  items: any[]

  swiperOption: any = {
    slidesPerView: 3,
    direction: 'horizontal'
  }
}
</script>

<style lang="stylus" scoped>
@import '~@css/base.styl';

.recommend-title
  position relative
  padding 0.25rem
  margin-bottom 20px
  .icon
    width 50px
    height 50px
    transform translate(10px,20px)
  .icon, span
    vertical-align top
    display inline-block
  span
    font-size 50px
    font-weight 400
    line-height: 2
  a
    position absolute
    right 0.5rem
    font-size 40px
    padding 0.25rem
    top 24px

.list-wrapper
  overflow hidden
  overflow-x scroll
  padding: 0 0.5rem 0.5rem
  position relative
  .item-wrapper
    display block
    text-align center
    margin: 0 3%
    .tag
      display none
    .tag-0, .tag-1, .tag-2
      display block
      width 120px
      height 60px
      position absolute
      left 2%
      top 0
    .tag-0
      display block
      background url(http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png) no-repeat 0 0
      background-size cover
    .tag-1
      background url(http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png) no-repeat 0 0
      background-size cover
    .tag-2
      background url(http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png) no-repeat 0 0
      background-size cover
    img
      width 100%
    .title
      ellipsis()
      font-size 42px
      color #333
    .price
      font-size 36px
      span
        color orange
        font-size 36px
        font-weight bold
        em
          font-style normal
          margin 0 4px 0 -8px
          font-size 46px
</style>
