import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import city from './modules/city'
import detail from './modules/detail'
import createLogger from 'vuex/dist/logger'

// process: any
const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    city,
    detail
  },
  getters,
  plugins: debug ? [createLogger()] : []
})

export default store
