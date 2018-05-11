import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import city from './modules/city'
import detail from './modules/detail'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    city,
    detail
  },
  getters
})

export default store
