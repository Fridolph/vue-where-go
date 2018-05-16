/*
 * @Author: fridolph
 * @Date: 2018-05-10 09:06:57
 * @Last Modified by: fridolph
 * @Last Modified time: 2018-05-16 16:35:30
 */

let defaultCity = localStorage.currentCity

export default {
  state: {
    currentCity: defaultCity || '成都',
    currentLetter: ''
  },

  mutations: {
    updateCity: (state, newCity) => {
      state.currentCity = newCity
      try {
        localStorage.currentCity = newCity
      } catch (e) {
        console.error(e)
      }
    },
    setLetter: (state, letter) => {
      if (state.currentLetter === letter) {
        // console.log('当前letter', letter)
      } else {
        state.currentLetter = letter
      }
    }
  },

  actions: {
    // updateCity: (ctx, newCity) => {
    //   ctx.commit('updateCity', newCity)
    // }
  }
}
