import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: {}
  },
  getters: {
    token: state => {
      if (!state.token) {
        state.token = JSON.parse(window.localStorage.getItem('token'))
      }
      return state.token
    },
    user: state => {
      if (!state.user.access) {
        state.user = JSON.parse(window.localStorage.getItem('user'))
      }
      return state.user
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload.token
      window.localStorage.setItem('token', JSON.stringify(payload.token))
    },
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
