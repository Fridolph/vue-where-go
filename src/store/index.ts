import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import city from './modules/city'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    city
  },
  getters
})

export default store
