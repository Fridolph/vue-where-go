<template>
  <section class="page-city">
    <city-header></city-header>
    <city-list></city-list>
  </section>
</template>

<script>
import request from '@lib/request'
import CityHeader from './CityHeader'
import CityList from './CityList'

export default {
  components: {
    CityHeader,
    CityList
  },
  data() {
    return {
      hotCity: []
    }
  },
  methods: {
    async _initData() {
      let {data} = await request.get('/cityData.json')
      console.log(data)
      this.hotCity = data.data.hotCity
    }
  },
  mounted() {
    this._initData()
  }
}
</script>
