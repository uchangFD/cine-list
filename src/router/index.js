import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Browser from '../components/Browser.vue'
import Categories from '../components/Categories.vue'
import Content from '../components/Content.vue'
import Person from '../components/Person.vue'
import PersonCredits from '../components/PersonCredits.vue'
import NotFound from '../components/NotFound.vue'



Vue.use(VueRouter)




const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/browser/:browserId',
      component: Browser
    },
    {
      path: '/categories/:categoriesId',
      component: Categories
    },
    {
      path: '/content/:contentId',
      component: Content
    },

    {
      path: '/person/:personId',
      component: Person, 
      children: [{
        path: 'credits/:creditId',
        component: PersonCredits
      }]
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