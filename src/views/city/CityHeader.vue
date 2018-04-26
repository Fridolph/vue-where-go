<template>
  <header class="city-header">
    <div class="header-top">
      城市选择
      <router-link to="/" class="city-back">
        <i class="iconfont">&#xe624;</i>
      </router-link>
    </div>

    <div class="city-tab">
      <ul class="tab-box">
        <div class="tab-item active">境内</div>
        <div class="tab-item">境外·暂不支持</div>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import '~@css/varibles.styl';

.city-header
  position fixed
  left 0
  top 0
  width 100%
  z-index 10
  overflow hidden
  text-align center
  color #fff
  background-color $bgColor

.header-top
  height $headerHeight
  line-height $headerHeight
  .city-back
    position absolute
    left 0
    color #fff
    .iconfont
      padding-left 40px
      font-size 48px
      font-weight bold

.city-tab
  background-color $bgColor
  display flex
  justify-content center
  *
    box-sizing border-box
  .tab-box
    width 76%
    display flex
    justify-content center
    font-size 42px
    text-align center
    border: 4px solid #fff
    margin-bottom: 0.3rem
    border-radius 6px
    .tab-item
      width 50%
      color #fff
      padding 10px 0
    .active
      background-color #fff
      border-color $bgColor
      color $bgColor
</style>
