<template>
  <section class="page-city">
    <city-header></city-header>
    <city-list :hotCity="hotCity" :letterList="letterList"></city-list>
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
      hotCity: {},
      letterList: []
    }
  },
  methods: {
    async _initData() {
      try {
        let {data} = await request.get('/cityData.json')
        if (data.code !== 0) return data.msg
        // console.table(data.data)
        this.hotCity = data.data.hotCity
        this.letterList = data.data.letterList
      } catch (err) {
        console.error(err)
      }
    }
  },
  mounted() {
    this._initData()
  }
}
</script>
