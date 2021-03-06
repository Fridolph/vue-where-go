<template>
  <div class="module-city-list">
    <section class="city-list" ref="cityListScroll">
      <div class="wrapper">
        <dl class="letter-a">
          <dt class="letter-title">当前城市</dt>
          <dd class="letter-columnbox">
            <div class="item">{{currentCity}}</div>
            <div class="tips">注：仅学习用，暂只爬了成都数据，会逐步更新，敬请期待</div>
          </dd>
        </dl>

        <dl class="list-hot">
          <dt class="hot-title">热门城市</dt>
          <dd class="hot-box">
            <div class="item" v-for="item in hotCities" :key="item.id" @click="selectCity(item.name, item.spell)">{{item.name}}</div>
          </dd>
        </dl>

        <dl class="list-letter">
          <dt class="letter-title">字母排序</dt>
          <dd class="zimu-box">
            <div class="item" v-for="(item, key) of cities" :key="key" @click="handleLetterChange(key)">{{key}}</div>
          </dd>
        </dl>

        <dl class="letter-a" v-for="(item, key) of cities" :key="key" :ref="key">
          <dt class="letter-title">{{key}}</dt>
          <dd class="letter-columnbox">
            <div class="item" v-for="v in item" :key="v.id" @click="selectCity(v.name, v.spell)">{{v.name}}</div>
          </dd>
        </dl>
      </div>

      <alphabet @cityLetterChange="toLetter" :list="cities" :currentLetter="letter" />
    </section>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import Alphabet from '../../components/alphabet.vue'
import { mapMutations, mapGetters } from 'vuex'

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
      letter: '',
      scrollY: 0,
      index: 0,
      scrollYPoint: []
    }
  },

  computed: {
    ...mapGetters(['currentCity', 'currentLetter'])
  },

  watch: {
    letter(newVal) {
      if (this.letter) {
        console.log('cityList拿到字母', this.letter)
        this.letter = newVal
        this.cityListScroll.scrollToElement(this.$refs[this.letter][0], 300)
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },

  methods: {
    async _initScroll() {
      this.cityListScroll = new Bscroll(this.$refs.cityListScroll, {
        click: true,
        probeType: 3
      })

      await Object.keys(this.cities).forEach(letter => {
        this.scrollYPoint.push(this.$refs[letter][0].offsetTop)
      })

      this.cityListScroll.on('scroll', this.scrollList)
    },

    toLetter(letter) {
      this.cityListScroll.scrollToElement(this.$refs[letter][0], 300)
    },

    scrollToLetter(letter) {
      if (this.currentLetter !== letter) {
        this.setLetter(letter)
      }
    },

    scrollList(pos) {
      let y = parseInt(Math.abs(pos.y), 10)
      let arr = this.scrollYPoint

      if (y > arr[0] && y < arr[1]) {
        this.scrollToLetter('A')
      } else if (y >= arr[1] && y < arr[2]) {
        this.scrollToLetter('B')
      } else if (y >= arr[2] && y < arr[3]) {
        this.scrollToLetter('C')
      } else if (y >= arr[3] && y < arr[4]) {
        this.scrollToLetter('D')
      } else if (y >= arr[4] && y < arr[5]) {
        this.scrollToLetter('E')
      } else if (y >= arr[5] && y < arr[6]) {
        this.scrollToLetter('F')
      } else if (y >= arr[6] && y < arr[7]) {
        this.scrollToLetter('G')
      } else if (y >= arr[7] && y < arr[8]) {
        this.scrollToLetter('H')
      } else if (y >= arr[8] && y < arr[9]) {
        this.scrollToLetter('J')
      } else if (y >= arr[9] && y < arr[10]) {
        this.scrollToLetter('K')
      } else if (y >= arr[10] && y < arr[11]) {
        this.scrollToLetter('L')
      } else if (y >= arr[11] && y < arr[12]) {
        this.scrollToLetter('M')
      } else if (y >= arr[12] && y < arr[13]) {
        this.scrollToLetter('N')
      } else if (y >= arr[13] && y < arr[14]) {
        this.scrollToLetter('P')
      } else if (y >= arr[14] && y < arr[15]) {
        this.scrollToLetter('Q')
      } else if (y >= arr[15] && y < arr[16]) {
        this.scrollToLetter('R')
      } else if (y >= arr[16] && y < arr[17]) {
        this.scrollToLetter('S')
      } else if (y >= arr[17] && y < arr[18]) {
        this.scrollToLetter('T')
      } else if (y >= arr[18] && y < arr[19]) {
        this.scrollToLetter('W')
      } else if (y >= arr[19] && y < arr[20]) {
        this.scrollToLetter('X')
      } else if (y >= arr[20] && y < arr[21]) {
        this.scrollToLetter('Y')
      } else if (y >= arr[21]) {
        this.scrollToLetter('Z')
      }
    },

    handleLetterChange(letter) {
      this.letter = letter
    },

    selectCity(cityName) {
      console.log('当前选择城市', cityName)
      this.updateCity(cityName)
      this.cityListScroll.scrollTo(0, 0)
      this.$router.push(`/`)
    },

    ...mapMutations({
      updateCity: 'updateCity',
      setLetter: 'setLetter'
    })
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
  height calc(100vh - 234px)
  overflow hidden
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
      border 2px solid #dedede
      text-align center
      font-size 45px
      ellipsis()
      &:nth-child(1), &:nth-child(2), &:nth-child(3)
        border-right: 0
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
    .item, .tips
      width 100%
      height 120px
      padding 0 80px
      line-height 120px
      border-right 2px solid #dedede
      border-bottom 2px solid #dedede
      text-align left
      font-size 45px
    .item
      ellipsis()
    .tips
      height 180px
      line-height 60px
      padding-top 30px
</style>
