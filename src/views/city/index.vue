<template>
  <section class="page-city">
    <city-header :cities="cities"></city-header>
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
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
  hotCities: any[] = []
  cities: Object = {}

  mounted() {
    this._initData()
  }

  async _initData() {
    try {
      let {data} = await request.get('/citylist')
      if (data.code !== 0) return data.msg
      console.log('从服务端拿到citylist', data.data)
      this.hotCities = data.data.hotCities
      this.cities = data.data.cities
    } catch (err) {
      console.error(err)
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-city
  width 100vw
  height 100vh
</style>
