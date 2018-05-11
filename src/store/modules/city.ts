/*
 * @Author: fridolph
 * @Date: 2018-05-10 09:06:57
 * @Last Modified by: fridolph
 * @Last Modified time: 2018-05-11 14:53:56
 */

let defaultCity = sessionStorage.currentCity

export default {
  state: {
    currentCity: defaultCity || '成都'
  },

  mutations: {
    updateCity: (state, newCity) => {
      state.currentCity = newCity
      try {
        sessionStorage.currentCity = newCity
      } catch (e) {
        console.error(e)
      }
    }
  },

  actions: {
    // updateCity: (ctx, newCity) => {
    //   ctx.commit('updateCity', newCity)
    // }
  }
}
