<template>
  <section class="home-weekly">
    <h2 class="weekly-title">
      <img class="icon" src="//s.qunarzz.com/piao/image/touch/daytrip/sight.png" alt="hot">
      <span>周末去哪儿</span>
    </h2>
    <ul class="weekly-list">
      <!-- <li class="list-item">
        <figure class="img-wrapper">
          <img src="http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg" alt="img">
        </figure>
        <div class="content">
          <h3>成都必游TOP10</h3>
          <p>成都的标志，也是现代人对老成都的记忆</p>
        </div>
      </li> -->
      <li class="list-item" v-for="item in items" :key="item.title">
        <figure class="img-wrapper">
          <img :src="item.img" :alt="item.title">
        </figure>
        <div class="content">
          <h3>{{item.title}}</h3>
          <p>{{item.desc}}</p>
        </div>
      </li>
    </ul>
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
@import '~@css/base.styl';

.weekly-title
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
.weekly-list
  .list-item
    .img-wrapper
      position relative
      padding-bottom 37%
      overflow hidden
      img
        position absolute
        left 0
        top 0
        width 100%
        height 100%
    .content
      padding 0.5rem
      h3
        font-size 42px
        margin-bottom 0.2rem
        ellipsis()
      p
        font-size 42px
        ellipsis()
</style>
