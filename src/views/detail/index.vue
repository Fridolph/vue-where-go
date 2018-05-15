<template>
  <section class="page-detail">
    <fixed-header />

    <d-info :baseInfo="baseInfo" :galleryImgs="galleryImgs" />

    <d-recommend :recommendList="recommendList" />

    <d-comment :commentList="commentList" />

    <d-footer></d-footer>
  </section>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import FixedHeader from '../../components/FixedHeader.vue'
import DInfo from './DInfo.vue'
import DRecommend from './DRecommend.vue'
import DComment from './DComment.vue'
import DFooter from './DFooter.vue'
import request from '../../utils/request'

@Component({
  components: {
    FixedHeader,
    DInfo,
    DRecommend,
    DComment,
    DFooter
  }
})
export default class Detail extends Vue {
  baseInfo: any = {}
  recommendList: any[] = []
  commentList: any[] = []
  galleryImgs: any[] = []

  created() {
    this._initData()
  }

  async _initData() {
    let cache = localStorage['detail/cd0001']
    try {
      if (cache) {
        const data = JSON.parse(cache)
        console.log('本地缓存拿数据\n', data)
        this.baseInfo = data.data.baseInfo
        this.galleryImgs = data.data.galleryImgs
        this.recommendList = data.data.recommendList
        this.commentList = data.data.commentList
      } else {
        let {data} = await request.get(`/detail/cd0001`)
        if (data.code !== 0) return data.msg
        console.log('从服务端拿数据\n', data)
        localStorage.setItem('detail/cd0001', JSON.stringify(data))
        this.baseInfo = data.data.baseInfo
        this.galleryImgs = data.data.galleryImgs
        this.recommendList = data.data.recommendList
        this.commentList = data.data.commentList
      }
    } catch (err) {
      console.error(err)
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-detail
  position relative
  min-height 100vh
  width 100%
  background-color #f5f5f5
  overflow hidden
  overflow-y auto
</style>
