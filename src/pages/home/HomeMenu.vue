<template>
  <section class="home-menu">
    <div class="menu-wrapper">
      <div class="menu-item" v-for="item in items" :key="item.title">
        <img :src="item.img" :alt="item.title">
        <p>{{item.title}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-menu
  .menu-wrapper
    overflow hidden
    height 0
    padding-bottom 50%
    .menu-item
      float left
      width 25%
      padding-bottom 25%
      position relative
      img
        position absolute
        left 50%
        top 30px
        transform translateX(-50%)
        width 150px
      p
        position absolute
        left 0
        right 0
        width 100%
        text-align center
        bottom 30px
        font-size 48px
</style>
