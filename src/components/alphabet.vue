<template>
  <ul class="list" ref="sidelist">
    <li
      class="item"
      :class="key === clickedLetter ? 'active' : ''"
      :key="'index-' + key"
      :ref="key"
      v-for="(item, key) of list"
      @click="handleLetterClick"
    >{{key}}</li>
  </ul>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class Alphabet extends Vue {
  @Prop({default: []})
  list: any[]

  @Prop({default: 'A'})
  currentLetter: string

  $refs: {
    sidelist: HTMLDivElement
  }
  // 定义data
  clickedLetter: string = this.currentLetter
  // touchStatus: boolean = false

  handleLetterClick(e) {
    this.$emit('letterChange', e.target.innerText)
    this.clickedLetter = e.target.innerText
    console.log('点击了字母', e.target.innerText)
  }

  // moveToLetter(letter) {
  //   console.log('触发了moveToLetter事件', letter)
  //   // this.clickedLetter = letter.toUppercase()
  // }
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
