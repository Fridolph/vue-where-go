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
            <div class="star-level">
              ★★★★★
            </div>
            <div class="comment-num">{{item.commentNum}}条评论</div>
          </div>
          <div class="price">
            <span class="m-price">￥<em>{{item.price}}</em></span>起
            <span class="addr">{{item.addr}}</span>
          </div>
          <div class="popular" v-if="item.popular">
            {{item.popular}}
          </div>
        </div>
      </li>
    </ul>
    <div class="list-more-wrapper">
      <a href="javascript:;">查看更多产品</a>
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
@import '~@css/base.styl';

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
    &:last-child
      border-bottom 0
    display flex
    .img-wrapper
      margin 0.5rem 0.5rem 0 0
    .info
      margin-top 0.4rem
      flex 1
      position relative
      .title
        font-weight normal
        font-size 48px
      .comment
        margin-top 0.2rem
        .star-level, .comment-num
          display inline-block
          vertical-align top
          line-height 60px
        .star-level
          color #ffb436
          width 240px
          .iconfont
            font-size 40px
        .comment-num
          display inline-block
          margin-left 0.5rem
          font-size 40px
      .price
        margin-top 0.3rem
        font-size 40px
        width 100%
        display block
        position relative
        .m-price
          color orange
          font-weight bold
          em
            font-style normal
            margin-left -0.1rem
            font-size 66px
        .addr
          position absolute
          right 0.5rem
          top 0.2rem
          font-size 40px
      .popular
        background-color #fff9f9
        color #f55
        position absolute
        bottom 10px
        left 0
        padding 8px 16px
        border-radius 8px
        font-size 36px
        ellipsis()
.list-more-wrapper
  padding 0.5rem 0
  border-top 1px solid #dedede
  text-align center
  a
    color #00afc7
    display block
</style>
