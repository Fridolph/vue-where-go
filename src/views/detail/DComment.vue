<template>
  <div class="detail-comment">
    <div class="comment-title theme-line">用户评论</div>
    <div class="comment-list">
      <div class="list-item" :class="'hq-comment'" v-for="v in commentList" :key="v.date">
        <div class="info">
          <span class="star">{{'★'.repeat(v.star)}}</span>
          <div class="userinfo">
            {{v.date}}
          </div>
        </div>
        <div class="comment-text">
          {{v.content}}
        </div>
        <div class="gallery">
          <div class="img-wrapper" v-for="img in v.imgs" :key="img">
            <img :src="img">
          </div>
        </div>
      </div>
      <!-- <div class="list-item" :class="'hq-comment'">
        <div class="info">
          <span class="star">★★★★★</span>
          <div class="userinfo">
            <em>用户名</em>
            <span>2017-12-29</span>
          </div>
        </div>
        <div class="comment-text">
          最佳游览时间:一定要要早上去！！！早上七八点出发最好！时间越到中午熊猫越懒得动，基本看不到活泼的动态了。全都在睡觉。交通:最好坐景区直通车去，在宽窄巷子、武侯祠等这些地方都有黄色的大巴小站。去的单独票价是15，回来似乎是十块。园区环境非常好，冬天这个季节去其实最好。因为熊猫怕热，夏天人又多，哪怕拍个睡着的熊猫都要挤半天。总之园区很大，进去坐摆渡车虽然很好，但是排队要排很久很久，我就直接步行了。三个小时就能看得差不多了。总之园区的整体环境值回票价是肯定了。
        </div>
        <div class="gallery">
          <div class="img-wrapper">
            <img src="https://imgs.qunarzz.com/piao/fusion/1712/70/629843015e143702.jpg_228x168_dce296d4.jpg" alt="">
          </div>
          <div class="img-wrapper">
            <img src="https://imgs.qunarzz.com/piao/fusion/1712/70/629843015e143702.jpg_228x168_dce296d4.jpg" alt="">
          </div>
          <div class="img-wrapper">
            <img src="https://imgs.qunarzz.com/piao/fusion/1712/70/629843015e143702.jpg_228x168_dce296d4.jpg" alt="">
          </div>
          <div class="img-wrapper">
            <img src="https://imgs.qunarzz.com/piao/fusion/1712/70/629843015e143702.jpg_228x168_dce296d4.jpg" alt="">
          </div>
          <div class="img-wrapper">
            <img src="https://imgs.qunarzz.com/piao/fusion/1712/70/629843015e143702.jpg_228x168_dce296d4.jpg" alt="">
          </div>
          <div class="img-wrapper">
            <img src="https://imgs.qunarzz.com/piao/fusion/1712/70/629843015e143702.jpg_228x168_dce296d4.jpg" alt="">
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class DComment extends Vue {
  @Prop({type: Array, default: []})
  commentList
}
</script>

<style lang="stylus" scoped>
.detail-comment
  background #fff
  margin-top 40px

  .comment-title
    font-size 28px
    position relative
    padding 30px 30px 30px 60px
    margin-bottom 20px
    &::before
      content ''
      position absolute
      left 30px
      top 44px
      height 50px
      width 12px
      background #1ba9ba

  .comment-list
    .list-item
      border-top 1px solid #dedede
      padding 30px
      .info
        display flex
        justify-content space-between
        align-items center
        margin-bottom 20px
        .star
          color #ffb436
          font-size 50px
        .userinfo
          font-size 38px
          em
            margin-right 20px
      .comment-text
        font-size 22px
        text-align justify
        line-height 1.5
      .gallery
        margin-top 50px
        display flex
        flex-wrap wrap
        .img-wrapper
          width 31%
          position relative
          padding-bottom 24.5%
          margin-right 3.5%
          margin-bottom 10px
          &:nth-child(3n)
            margin-right 0
          img
            position absolute
            left 0
            top 0
            width 100%
</style>
