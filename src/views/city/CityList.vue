<template>
  <section class="city-list" ref="cityListScroll">
    <div class="wrapper">
      <dl class="list-hot">
        <dt class="hot-title">热门城市</dt>
        <dd class="hot-box">
          <div class="item" v-for="v in hotCity" :key="v">{{v}}</div>
        </dd>
      </dl>
      <dl class="list-letter">
        <dt class="letter-title">字母排序</dt>
        <dd class="zimu-box">
          <!-- <div class="item" v-for="v in letterList" :key="v">{{v}}</div> -->
          <div class="item" v-for="(value, key) in letterList" :key="key">{{key}}</div>
        </dd>
      </dl>
      <dl class="letter-a" v-for="(value, key) in letterList" :key="`_${key}_`">
        <dt class="letter-title">{{key}}</dt>
        <dd class="letter-box">
          <div class="item" v-for="item in value" :key="item">{{item}}</div>
        </dd>
      </dl>
    </div>
  </section>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import BScroll from 'better-scroll'

@Component
export default class CityList extends Vue {
  @Prop({default: []})
  hotCity: any[]

  @Prop({default: []})
  letterList: any[]

  $refs: {
    cityListScroll: HTMLDivElement
  }

  cityListScroll: Object = {}

  created() {
    this.$nextTick(() => {
      this._initScroll()
    })
  }

  _initScroll() {
    this.cityListScroll = new BScroll(this.$refs.cityListScroll, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@css/base.styl';

.city-list
  position absolute
  left 0
  right 0
  top 234px
  bottom 0
  dl
    dt
      background-color #f5f5f5
      font-size 40px
      color #000
      padding 0.4rem 0 0.4rem 0.7rem
    dd
      display flex
      align-items center
      flex-wrap wrap
  .hot-box
    .item
      flex 0 0 33.33%
      padding 0.5rem
      border-right 2px solid #dedede
      border-bottom 2px solid #dedede
      text-align center
      font-size 45px
      ellipsis()
      &:nth-last-child(1), &:nth-last-child(2), &:nth-last-child(3)
        border-bottom: 0
      &:nth-child(3n)
        border-right 0
  .zimu-box
    display flex
    padding 0.5rem 0
    align-items center
    flex-wrap wrap
    .item
      flex 0 0 16.66%
      height 120px
      line-height 120px
      text-align center
      font-size 44px
  .letter-box
    display flex
    align-items center
    flex-wrap wrap
    .item
      flex 0 0 25%
      height 120px
      padding: 0 20px
      line-height 120px
      border-right 2px solid #dedede
      border-bottom 2px solid #dedede
      text-align center
      font-size 45px
      ellipsis()
</style>
