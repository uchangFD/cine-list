import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'
import router from './router'
import store from './store'


new Vue({
  el: '#app',
  router,
  store,
  VueMaterial,
  render: h => h(App)
})