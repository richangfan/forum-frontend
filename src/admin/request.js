import axios from 'axios'
import store from './store'

export const get = (url, data = {}) => {
  data.token = store.getters.token
  return axios
    .get(url, { params: data })
    .then(res => {
      if (res.data && res.data.error === 0) {
        return Promise.resolve(res.data.data)
      } else {
        return Promise.reject(res.data)
      }
    })
    .catch(error => {
      if (error.response) {
        if ([500, 502, 503].includes(error.response.status)) {
          return Promise.reject({ message: '服务器内部错误，请联系网站管理员' })
        } else if (error.response.status == 401) {
          store.commit('setToken', { token: null })
          store.commit('setUser', { user: null })
          window.location.replace('#/login')
          return Promise.reject({ message: '未登录' })
        } else if (error.response.status == 403) {
          return Promise.reject({ message: '禁止访问' })
        } else if (error.response.status == 404) {
          return Promise.reject({ message: '找不到资源' })
        } else if ([301, 302].includes(error.response.status)) {
          window.location.href = error.response.headers['x-redirect']
          return
        }
      }
      return Promise.reject(error)
    })
}

export const post = (url, data = {}) => {
  return axios
    .post(url, data, { params: { token: store.getters.token } })
    .then(res => {
      if (res.data && res.data.error === 0) {
        return Promise.resolve(res.data.data)
      } else {
        return Promise.reject(res.data)
      }
    })
    .catch(error => {
      if (error.response) {
        if ([500, 502, 503].includes(error.response.status)) {
          return Promise.reject({ message: '服务器内部错误，请联系网站管理员' })
        } else if (error.response.status == 401) {
          store.commit('setToken', { token: null })
          store.commit('setUser', { user: null })
          window.location.replace('#/login')
          return Promise.reject({ message: '未登录' })
        } else if (error.response.status == 403) {
          return Promise.reject({ message: '禁止访问' })
        } else if (error.response.status == 404) {
          return Promise.reject({ message: '找不到资源' })
        } else if ([301, 302].includes(error.response.status)) {
          window.location.href = error.response.headers['x-redirect']
          return
        }
      }
      return Promise.reject(error)
    })
}
