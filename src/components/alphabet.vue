<template>
  <ul class="list" ref="sidelist">
    <li
      class="item"
      :class="key === letter ? 'active' : ''"
      :key="'index-' + key"
      :ref="key"
      v-for="(item, key) of list"
      @click="handleLetterClick"
    >{{key}}</li>
  </ul>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
import {Mutation, Getter} from 'vuex-class'

@Component
export default class Alphabet extends Vue {
  @Prop({default: []})
  list: any[]

  $refs: {
    sidelist: HTMLDivElement
  }

  @Getter('currentLetter') currentLetter

  letter: string = ''

  @Watch('currentLetter')
  letterChange(newVal) {
    setTimeout(() => {
      this.letter = newVal
    }, 50)
  }

  @Mutation('setLetter') setLetter

  handleLetterClick(e) {
    let text = e.target.innerText
    this.letter = text
    this.setLetter(text)
    this.$emit('cityLetterChange', text)
    console.log('派发事件 cityLetterChange', text)
  }
}
</script>

<style lang="stylus" scoped>
.list
  position fixed
  z-index 10
  right 0
  top 400px
  display flex
  flex-direction column
  justify-content center
  align-items center
  font-size 45px
  color #bbb
  background rgba(0,0,0,0.04)
  border-radius 16px
  width 60px
  li
    padding 6px
    display block
    width 100%
    text-align center
  .active
    color #00bcd4
</style>
