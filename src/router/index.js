import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Home from '../components/Home.vue'
import Browser from '../components/Browser.vue'
import Categories from '../components/Categories.vue'
import CategoriesList from '../components/CategoriesList.vue'
import Content from '../components/Content.vue'
import Person from '../components/Person.vue'
import NotFound from '../components/NotFound.vue'

import firebase from 'firebase'
import { config } from '../store/firebase.config'


Vue.use(VueRouter)

firebase.initializeApp(config)

const requireAuth = (to, from, next) => {
  const loginPath = `login?rPath=${encodeURIComponent(to.path)}`
  firebase.auth().onAuthStateChanged(function(user) {
    user ? next() : next(loginPath)
  })
}


const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Main,
      redirect: '/home',
      beforeEnter: requireAuth,
      children: [{
          path: '/home',
          component: Home,
        },
        {
          path: 'person/:personId',
          component: Person,
        },
        {
          path: 'content/:contentId',
          component: Content,
        },
        {
          path: 'browser/:browserId',
          component: Browser,
        },

        {
          path: 'categories/:categoriesId',
          component: Categories,
          children: [{
            path:':pagesId',
            component: CategoriesList
          }]
        }
      ]
    },
    { path: '/login', component: Login },
    { path: '/sign-up', component: SignUp },
    {
      path: '*',
      component: NotFound,
      beforeEnter: requireAuth
    }
  ]
})


export default router