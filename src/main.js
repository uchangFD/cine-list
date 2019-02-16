import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faThumbsUp, faBookmark } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import firebase from 'firebase'
// import { config } from './store/firebase.config'


library.add(faAngleLeft, faThumbsUp, faBookmark)
Vue.component('FontAwesome', FontAwesomeIcon)


Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})