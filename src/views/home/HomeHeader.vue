<template>
  <section class="home-header">
    <div class="header-left">
      <i class="iconfont">&#xe624;</i>
    </div>
    <router-link to="/city" class="header-input"><i class="iconfont">&#xe632;</i> 输入城市/游玩/精选/主题</router-link>
    <router-link to="/city">
      <div class="header-right">
        <span>{{currentCity}}</span>
        <i class="iconfont">&#xe65e;</i>
      </div>
    </router-link>
  </section>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {Getter} from 'vuex-class'

@Component
export default class HomeHeader extends Vue {
  @Getter('currentCity') currentCity
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/varibles.styl'

.home-header
  height $headerHeight
  display flex
  background $bgColor
  .header-left
    float left
    width 100px
    line-height $headerHeight
    i
      display block
      font-size 48px
      color #efefef
      font-weight bold
      text-align center
  .header-input
    flex 1
    background #fff
    margin: 24px 20px 0
    height 80px
    border-radius 12px
    color #ccc
    line-height 80px
    padding 0 32px
    i
      font-size 48px
  .header-right
    float right
    min-width 160px
    padding-right 20px
    text-align center
    line-height $headerHeight
    text-align center
    color #efefef
    i
      font-size 36px
      display inline-block
      transform translateY(-6px)

</style>
