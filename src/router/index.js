import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Lists from '../components/Lists.vue'
import Movie from '../components/Movie.vue'
import NotFound from '../components/NotFound.vue'



Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home,
      children: [{ path: 'lists/:lid', component: Lists }]
    },

    {
      path: '/movie/:mid',
      component: Movie,
    },

    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      component: NotFound
    },
  ]
})


export default router