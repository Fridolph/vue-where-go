<template>
  <div>
    <header class="city-header">
      <div class="header-top">
        城市选择
        <router-link to="/" class="city-back">
          <i class="iconfont">&#xe624;</i>
        </router-link>
      </div>

      <div class="city-search">
        <div class="search-input">
          <input v-model="keyword" type="text" placeholder="输入城市名或拼音">
        </div>
      </div>
    </header>

    <div class="search-content" ref="searchList" v-show="keyword">
      <ul>
        <li class="search-item" v-for="item of list" :key="item.id" @click="selectCity(item.name)">
          {{item.name}}
        </li>
        <li v-show="!list.length">没有找到搜索内容</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  props: {
    cities: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      keyword: '',
      timer: null,
      list: []
    }
  },
  watch: {
    keyword(newVal) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(item => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
        console.log(newVal, result)
      }, 100)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll() {
      this.scroll = new Bscroll(this.$refs.searchList, {
        click: true
      })
    },

    selectCity(cityName) {
      console.log('当前选择城市', cityName)
      this.updateCity(cityName)
      this.$router.push(`/`)
    },

    ...mapMutations({
      updateCity: 'updateCity'
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@css/varibles.styl';

.city-header
  position fixed
  left 0
  top 0
  width 100%
  z-index 100
  overflow hidden
  text-align center
  color #fff
  background-color $bgColor

.header-top
  height $headerHeight
  line-height $headerHeight
  position relative
  z-index 10
  .city-back
    position absolute
    left 0
    color #fff
    .iconfont
      padding-left 40px
      font-size 48px
      font-weight bold

.city-search
  position relative
  z-index 10
  .search-input
    padding-bottom 20px
    width 80%
    margin 0 auto
    input
      background #fff
      border none
      height 90px
      width 100%
      border-radius 8px
      text-align center
      padding 0 30px
      font-size 42px

.search-content
  position fixed
  left 0
  top 0
  top 240px
  bottom 0
  right 0
  z-index 10
  width 100%
  height 100%
  background-color #f5f5f5
  color #666
  li
    background #fff
    border-bottom 1px solid #dedede
    line-height 80px
    padding 10px 60px
    text-align left
</style>
