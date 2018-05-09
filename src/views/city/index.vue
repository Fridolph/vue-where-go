<template>
  <section class="page-city">
    <city-header></city-header>
    <city-list :hotCity="hotCity" :letterList="letterList"></city-list>
  </section>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import request from '../../utils/request'
import CityHeader from './CityHeader.vue'
import CityList from './CityList.vue'

@Component({
  components: {
    CityHeader,
    CityList
  }
})
export default class City extends Vue {
  hotCity: any[] = []
  letterList: any[] = []

  mounted() {
    this._initData()
  }

  async _initData() {
    try {
      let {data} = await request.get('/citylist')
      if (data.code !== 0) return data.msg
      console.log('从服务端拿到citylist', data.data)
      this.hotCity = data.data.hotCity
      this.letterList = data.data.letterList
    } catch (err) {
      console.error(err)
    }
  }
}
</script>
