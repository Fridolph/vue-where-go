<template>
  <section class="home-like">
    <h2 class="like-title">
      <img class="icon" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="hot">
      <span>猜你喜欢</span>
    </h2>
    <ul class="like-list-wrapper">
      <!-- <li class="like-item">
        <img src="http://img1.qunarzz.com/sight/p0/1712/5d/5d4f18e64813d0f6a3.img.jpg_200x200_2a260ea1.jpg" alt="img">
        <div class="info">
          <h3 class="title">成都欢乐谷</h3>
          <div class="comment">
            <div class="star-level">5星</div>
            <div class="comment-num">2312条评论</div>
          </div>
          <div class="price">
            <span class="m-price">￥<em>54</em></span>起
            <span class="addr">金牛区</span>
          </div>
        </div>
      </li> -->
      <li class="like-item" v-for="item in items" :key="item.title">
        <div class="img-wrapper">
          <img :src="item.img" :alt="item.title">
        </div>
        <div class="info">
          <h3 class="title">{{item.title}}</h3>
          <div class="comment">
            <div class="star-level">{{item.star}}</div>
            <div class="comment-num">{{item.commentNum}}条评论</div>
          </div>
          <div class="price">
            <span class="m-price">￥<em>{{item.price}}</em></span>起
            <span class="addr">{{item.addr}}</span>
          </div>
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
.like-title
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

.like-list-wrapper
  padding-left 0.5rem
  .like-item
    &:first-child
      padding-top 0
    padding 0.5rem 0
    border-bottom 1px solid #dddddd
    background pink
    display flex
    .img-wrapper
      margin-top 0.5rem
</style>
