<template>
  <div class="detail-recommend">
    <h2 class="recommend-title">去哪儿推荐</h2>
    <div class="recommend-list">
      <div class="list-item" v-for="v in recommendList" :key="v.title">
        <div class="detail">
          <h3>{{v.title}}</h3>
          <p>
            <i class="iconfont icon-shijian"></i>
            <span>可订明日</span>
            <i class="iconfont icon-shijian"></i>
            <span>无购物</span>
            <i class="iconfont icon-shijian"></i>
            <span>无自费</span>
          </p>
        </div>
        <div class="price">
          <p><i>￥</i><span>{{v.price}}</span>起</p>
          <button>查看</button>
        </div>
      </div>
      <!-- <div class="list-item">
        <div class="detail">
          <h3>【促销产品巴士自由行】熊猫基地往返车位+熊猫基地门票</h3>
          <p>
            <i class="iconfont icon-shijian"></i>
            <span>可订明日</span>
            <i class="iconfont icon-shijian"></i>
            <span>无购物</span>
            <i class="iconfont icon-shijian"></i>
            <span>无自费</span>
          </p>
        </div>
        <div class="price">
          <p><i>￥</i><span>78</span>起</p>
          <button>查看</button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class DRecommend extends Vue {
  @Prop({type: Array, default: []})
  recommendList
}
</script>

<style lang="stylus" scoped>
.detail-recommend
  background-color #fff
  margin-top 40px
  padding 30px 0 30px 30px
  .recommend-title
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEUAAAD/bm7/b2//b2//eXn/b2//b2//bm7/b2//b2//bm7/b2//b2//b2//bm7/b2//b2//cXH/eHj/qqr/bm7/////cXH/iIj/oqL//f3/mJj/fHz/9/f/8PD/4eH/ycn/6+v/1dX/0ND/t7f/ra3/kpL/jo7/c3P/5ub/vr7o37bEAAAAFHRSTlMA9uZeCfny7NvLt6+PfGZONxsRA/pz1k8AAAFrSURBVEjHpZbZdoMwDERtMEvYE8YJZN/b/v8PNvicJsiYqJzcB548WGNZksUAVWZJHAVBFCdZqQTDwk8lesjUX4hxVB5iQJiPbVMXHpx4RS0czGcYZTYXAyoPb/AqYeFLvEX61nqwEEUlwSKrnl9X/JtmZfl4Oq9d53Pfan2yzurvdAs42OsHaxAKYVDOA207wcEKShlBDhfaIUBu7lsIl2UjuIASLkZTsDaCxpWMFC7ORrCBRfqw7MxZY9Z/w0YqUWLI8tLqJ+25n8BSZP3Am+aG2/Vw1IQ9XmQiwZNV9z+0mkKtJCKmAg094IgXsYg4Ab0gkQh4wRUvgv8I1kTAh7QHCYk3fQIxnbCCHXokImMFPyCJKznB9gvkaijJ7XCnl0+kU3ZISQFttp3DnWW5oQVES3S57D4Eq0RJE+DJSZvh8RRpZDwFaZU8s5o0YxZvPrXdTx0on40sfih+Nnb5wT7x6fDR42Ty8+cXnHyOvDgQEbUAAAAASUVORK5CYII=') no-repeat 0 0
    font-size 52px
    height 90px
    line-height 90px
    padding-left 100px
    margin-bottom 20px

  .recommend-list
    .list-item
      padding 30px 0
      border-top 1px solid #dedede
      display flex
      .detail
        flex 1
        padding-right 30px
        h3
          font-size 45px
          mEllipsis()
          margin-bottom 30px
        p
          font-size 36px
          margin-bottom 20px
          i
            font-size 36px
            margin-left 30px
            &:first-child
              margin-left 0
      .price
        width 320px
        border-left 1px solid #dedede
        display flex
        flex-direction column
        justify-content center
        align-items center
        padding 0 40px
        font-size 38px
        color #999
        i, span
          color #ff9800
        i
          font-style normal
        span
          font-size 54px
        button
          width 100%
          height 80px
          line-height 80px
          background-color #ff9800
          border none
          font-size 42px
          color #fff
          border-radius 8px
          margin-top 10px

</style>
