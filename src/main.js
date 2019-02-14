import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import {config} from './store/firebase.config'



import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faThumbsUp, faBookmark } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faAngleLeft, faThumbsUp, faBookmark)
Vue.component('FontAwesome', FontAwesomeIcon)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  created() {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      user ? this.$router.push('/') : this.$router.push('/login')
     })
  },
  render: h => h(App)
})