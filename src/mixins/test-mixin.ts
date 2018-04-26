import { Vue, Component } from 'vue-property-decorator'

declare module 'vue/types/vue' {
  interface Vue {
    testMixinArg: string
    testMixinFunc (): void
  }
}

@Component({})
export default class TextMixin extends Vue {
  testMixinArg: string = '这是 testMixinArg'

  testMixinFunc (): void {
    console.log('调用了mixin里的 testMixinFunc 方法')
  }
}
