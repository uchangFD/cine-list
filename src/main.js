import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faAngleLeft)

Vue.component('FontAwesome', FontAwesomeIcon)

Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})