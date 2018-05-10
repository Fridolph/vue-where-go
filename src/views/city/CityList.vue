<template>
  <div class="module-city-list">
    <section class="city-list" ref="cityListScroll">
      <div class="wrapper">
        <dl class="list-hot">
          <dt class="hot-title">热门城市</dt>
          <dd class="hot-box">
            <div class="item" v-for="item in hotCities" :key="item.id">{{item.name}}</div>
          </dd>
        </dl>

        <dl class="list-letter">
          <dt class="letter-title">字母排序</dt>
          <dd class="zimu-box">
            <div class="item" v-for="(item, key) of cities" :key="key">{{key}}</div>
          </dd>
        </dl>

        <dl class="letter-a" v-for="(item, key) of cities" :key="key" :ref="key">
          <dt class="letter-title">{{key}}</dt>
          <dd class="letter-columnbox">
            <div class="item" v-for="v in item" :key="v.id">{{v.name}}</div>
          </dd>
        </dl>
      </div>

      <alphabet :list="cities" @change="handleLetterChange" />
    </section>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import Alphabet from '../../components/alphabet.vue'

export default {
  components: {
    Alphabet
  },
  props: {
    hotCities: Array,
    cities: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      letter: ''
    }
  },
  watch: {
    letter(newVal) {
      if (this.letter) {
        console.log('cityList拿到字母', this.letter)
        this.letter = newVal
        this.cityListScroll.scrollToElement(this.$refs[this.letter][0])
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },

  methods: {
    _initScroll() {
      this.cityListScroll = new Bscroll(this.$refs.cityListScroll, {
        click: true
      })
    },

    handleLetterChange(letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@css/base.styl';

.module-city-list
  position relative
.city-list
  position absolute
  left 0
  right 0
  top 234px
  bottom 0
  z-index 5
  dl
    dt
      background-color #f5f5f5
      font-size 40px
      color #000
      padding 0.4rem 0 0.4rem 0.7rem
    dd
      display flex
      align-items center
      flex-wrap wrap
  .hot-box
    .item
      flex 0 0 33.33%
      padding 0.5rem
      border-right 2px solid #dedede
      border-bottom 2px solid #dedede
      text-align center
      font-size 45px
      ellipsis()
      &:nth-last-child(1), &:nth-last-child(2), &:nth-last-child(3)
        border-bottom: 0
      &:nth-child(3n)
        border-right 0
  .zimu-box
    display flex
    padding 0.5rem 0
    align-items center
    flex-wrap wrap
    .item
      flex 0 0 16.66%
      height 120px
      line-height 120px
      text-align center
      font-size 44px
      text-transform uppercase
  .letter-box
    display flex
    align-items center
    flex-wrap wrap
    .item
      flex 0 0 25%
      height 120px
      padding: 0 20px
      line-height 120px
      border-right 2px solid #dedede
      border-bottom 2px solid #dedede
      text-align center
      font-size 45px
      ellipsis()

  .letter-title
    text-transform uppercase
  .letter-columnbox
    display flex
    flex-direction column
    align-items center
    flex-wrap wrap
    .item
      width 100%
      height 120px
      padding 0 80px
      line-height 120px
      border-right 2px solid #dedede
      border-bottom 2px solid #dedede
      text-align left
      font-size 45px
      ellipsis()
</style>
