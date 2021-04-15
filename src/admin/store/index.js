import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    user: state => {
      if (!state.user.access) {
        state.user = JSON.parse(window.localStorage.getItem('user'))
      }
      return state.user
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user
      window.localStorage.setItem('user', JSON.stringify(payload.user))
    },
  },
  actions: {
  },
  modules: {
  }
})
