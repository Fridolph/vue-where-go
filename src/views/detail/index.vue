<template>
  <section class="page-detail">
    <d-header :baseInfo="baseInfo"></d-header>

    <d-recommend :recommendList="recommendList"></d-recommend>

    <d-comment :commentList="commentList"></d-comment>

    <d-footer></d-footer>
  </section>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import DHeader from './DHeader.vue'
import DRecommend from './DRecommend.vue'
import DComment from './DComment.vue'
import DFooter from './DFooter.vue'
import request from '../../utils/request'

@Component({
  components: {
    DHeader,
    DRecommend,
    DComment,
    DFooter
  }
})
export default class Detail extends Vue {
  baseInfo: any = {}
  recommendList: any[] = []
  commentList: any[] = []

  created() {
    this._initData()
  }

  async _initData() {
    let cache = sessionStorage['detail/cd0001']
    try {
      if (cache) {
        const data = JSON.parse(cache)
        console.log('本地缓存拿数据\n', data)
        this.baseInfo = data.data.baseInfo
        this.recommendList = data.data.recommendList
        this.commentList = data.data.commentList
      } else {
        let {data} = await request.get(`/detail/cd0001`)
        if (data.code !== 0) return data.msg
        console.log('从服务端拿数据\n', data)
        sessionStorage.setItem('detail/cd0001', JSON.stringify(data))
        this.baseInfo = data.data.baseInfo
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
