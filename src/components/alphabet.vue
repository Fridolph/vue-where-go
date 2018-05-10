<template>
  <ul class="list" ref="sidelist">
    <li
      class="item"
      :class="clickedLetter === v ? 'active' : ''"
      :key="v"
      :ref="v"
      v-for="v in list"
      @click="handleLetterClick"
    >{{v}}</li>
  </ul>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class Alphabet extends Vue {
  @Prop({default: []})
  list: any[]

  $refs: {
    sidelist: HTMLDivElement
  }
  // 定义data
  clickedLetter: string = ''
  touchStatus: boolean = false

  handleLetterClick(e) {
    this.$emit('change', e.target.innerText)
    this.clickedLetter = e.target.innerText
    console.log('点击了字母', e.target.innerText)
  }

  // handleTouchStart(e) {
  //   this.touchStatus = true
  // }

  // handleTouchMove(e) {
  //   if (this.touchStatus) {
  //     const startY = this.startY
  //     const touchY = e.touches[0].clientY
  //     const height = this.$refs['a'][0].clientHeight
  //     const listHeight = this.$refs.sidelist.clientHeight
  //     const index = Math.floor((touchY - startY) / height)
  //     if (touchY < 250 || touchY > startY + listHeight) {
  //       return false
  //     } else {
  //       if (index >= 0 && index < this.list.length) {
  //         this.$emit('change', this.list[index])
  //         this.clickedLetter = this.list[index]
  //         // console.log('触发了change', this.list[index])
  //       }
  //     }
  //   }
  // }

  // handleTouchEnd(e) {
  //   this.touchStatus = false
  // }
}
</script>

<style lang="stylus" scoped>
.list
  position fixed
  z-index 100
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
</style>
