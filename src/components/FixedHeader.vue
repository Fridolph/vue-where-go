<template>
  <div>
    <div class="header-abs go-back" @click="$router.go(-1)" v-show="showAbs">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="header-fixed" :style="styles" v-show="!showAbs">
      <router-link to="/">
        <i class="iconfont">&#xe624;</i>
      </router-link>
      <span>成都熊猫基地</span>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class FixedHeader extends Vue {
  showAbs: boolean = true

  styles: any = {
    opacity: 0
  }

  handleScroll() {
    let top = document.documentElement.scrollTop
    // console.log(top)

    if (top > 60) {
      let opacity = top / 200
      opacity = opacity > 1 ? 1 : opacity
      opacity = opacity < 0.05 ? 0 : opacity
      this.styles = {opacity}
      this.showAbs = false
    } else {
      this.showAbs = true
    }
  }

  activated() {
    window.addEventListener('scroll', this.handleScroll)
  }

  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.header-abs
  position absolute
  z-index 20
  left 40px
  top 30px
  background rgba(0,0,0,0.5)
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

.header-fixed
  position fixed
  z-index 999
  left 0
  top 0
  width 100%
  line-height 150px
  height 150px
  overflow hidden
  background #00bcd4
  text-align center
  .iconfont
    position absolute
    left 0
    top 0
    display flex
    font-size 54px
    padding 0 30px
    width 180px
    color #fff
    font-weight bold
  span
    font-size 60px
    color #fff
</style>
