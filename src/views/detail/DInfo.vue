<template>
  <div class="detail-info">
    <fade>
      <gallery :items="galleryImgs" v-show="isShow" @closeGallery="closeGallery"/>
    </fade>
    <gallery :items="galleryImgs" v-show="isShow" @closeGallery="closeGallery"/>

    <figure class="img-wrapper">
      <img :src="baseInfo.posterImg" :alt="baseInfo.title" @click="handlePosterClick">
      <h1>{{baseInfo.title}}</h1>
      <div class="img-total">
        <i class="iconfont icon-weibiaoti1"></i>
        <span>{{galleryImgs && galleryImgs.length}}</span>
      </div>
    </figure>

    <div class="detail-wrapper">
      <div class="row-item">
        <div class="item left">
          <div class="iconfont icon-qianjin"></div>
          <p class="zan">
            <strong>{{baseInfo.score}}</strong>分
            <span>超赞</span>
          </p>
          <p>
            <span>{{baseInfo.commentNum}}</span>
            <span>{{baseInfo.gonglueNum}}</span>
          </p>
        </div>
        <div class="item right">
          <div class="iconfont icon-qianjin"></div>
          <h4>景点简介</h4>
          <p>开放时间、贴士</p>
        </div>
      </div>
      <div class="addr-item">
        <i class="iconfont icon-msnui-pos"></i>
        <span>{{baseInfo.addr}}</span>
        <i class="iconfont icon-qianjin"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import Gallery from '../../components/gallery/index.vue'
import {Mutation, State, namespace} from 'vuex-class' // eslint-disable-line
import Fade from '../../components/transition/fade.vue'

// const DetailMutation = namespace('detail', Mutation)
// const DetailState = namespace('detail', State)

@Component({
  components: {
    Gallery,
    Fade
  }
})
export default class DHeader extends Vue {
  @Prop({type: Object, default: {}})
  baseInfo

  @Prop({type: Array, default: []})
  galleryImgs

  isShow: boolean = false

  @State('showPosterGallery') showPosterGallery
  // @DetailState('showPosterGallery') showPosterGallery
  @Mutation('openPosterGallery') openPosterGallery

  handlePosterClick() {
    this.isShow = true
  }

  closeGallery() {
    this.isShow = false
  }
}
</script>

<style lang="stylus" scoped>
@import '~@css/base.styl';
.detail-info
  background-color #fff
  // position relative
  .img-wrapper
    position relative
    padding-bottom 55%
    img
      position absolute
      left 0
      top 0
      width 100%
      height 100%
    h1
      position absolute
      bottom 60px
      font-size 56px
      padding 0 40px
      width 100%
      // ellipsis()
      text-shadow 2px 6px 6px rgba(0,0,0,0.5)
      color #fff
      font-weight normal
      &::after
        content ''
        position absolute
        background rgba(0,0,0,0.6)
        filter blur(25px)
        left 0
        bottom -50px
        width 100%
        height 50px
    .img-total
      position absolute
      bottom 140px
      left 40px
      background rgba(0,0,0,0.5)
      border-radius 36px
      padding 0 50px
      line-height 60px
      text-align center
      color #fff
      i,span
        vertical-align middle
        display inline-block
      .iconfont
        font-size 46px
      span
        font-size 36px

  .detail-wrapper
    background-color #fff
    border-radius 16px 16px 0 0
    transform translateY(-16px)
    padding 30px
    .row-item
      border-bottom 2px solid #dedede
      display flex
      position relative
      &:last-child
        border-bottom none
      .item
        padding 10px 0 30px 0
        .zan
          color #ff8300
          font-size 42px
          strong
            font-size 70px
            font-weight normal
        p
          font-size 38px
          color #aaa
      .left, .right
        width 48%
        position relative
        .icon-qianjin
          position absolute
          color #999
          right 0px
          top 40px
          font-size 60px
      .right
        margin-left 2%
        h4
          font-weight normal
          margin-bottom 10px
      .left
        margin-right 2%
        .icon-qianjin
          right 20px
        &::after
          content ''
          position absolute
          height 120px
          width 1px
          background-color #ccc
          right -2%
          top 10px

    .addr-item
      display flex
      flex-wrap wrap
      padding-top 30px
      .icon-msnui-pos
        font-size 54px
        width 90px
        color #ccc
      .icon-qianjin
        font-size 60px
        width 120px
        text-align right
      span
        width calc(100% - 210px)
        ellipsis()
</style>
