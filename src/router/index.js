import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Categories from '../components/Categories.vue'
import Content from '../components/Content.vue'
import NotFound from '../components/NotFound.vue'



Vue.use(VueRouter)




const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/categories/:categoriesId',
      component: Categories
    },
    {
      path: '/content/:cid',
      component: Content
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