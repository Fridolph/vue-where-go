<template>
  <div class="hell">
    <h1>{{msg}}</h1>
    <h2> - vue-typescript-starter - </h2>
    <p>mixin数据：{{testMixinArg}}</p>
    <p>store数据：{{info}}</p>
    <render-component></render-component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import RenderComponent from '@/components/renderComponent.vue'
import TestMixin from '../mixins/test-mixin'
import { Getter } from 'vuex-class'

@Component({
  components: {
    RenderComponent
  },
  mixins: [TestMixin]
})
export default class Hello extends Vue {
  @Getter info

  msg: string = '你好 vue-typescript app'

  mounted() {
    console.log(`这是 _.assign({}) ${_.assign({})}`)
  }
}
</script>

