import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Browser from '../components/Browser.vue'
import Categories from '../components/Categories.vue'
import Content from '../components/Content.vue'
import Person from '../components/Person.vue'
import NotFound from '../components/NotFound.vue'



Vue.use(VueRouter)




const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Main,
      children: [
        {
          path: 'browser/:browserId',
          component: Browser
        },
        {
          path: 'home',
          component: Home
        },
        {
          path: 'content/:contentId',
          component: Content
        },
        {
          path: 'categories/:categoriesId',
          component: Categories
        },
        {
          path: 'person/:personId',
          component: Person
        },
      ]
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