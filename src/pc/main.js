import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'view-design/dist/styles/iview.css'
import { Page, Form, FormItem } from 'view-design'
Vue.component('Page', Page)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
