import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import AuthSuccess from '../components/AuthSuccess.vue';
import Home from '../components/Home.vue'
import Browser from '../components/Browser.vue'
import Categories from '../components/Categories.vue'
import Content from '../components/Content.vue'
import Person from '../components/Person.vue'
import NotFound from '../components/NotFound.vue'

import firebase from 'firebase'

Vue.use(VueRouter)


const requireAuth = (to, from, next) => {
  const loginPath = `login?rPath=${encodeURIComponent(to.path)}`
  firebase.auth().onAuthStateChanged(user => {
    user ? next() : next(loginPath)
  })
}


const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Main,
      beforeEnter: requireAuth,
      redirect: '/home',
      children: [{
          path: '/home',
          component: Home,
          beforeEnter: requireAuth,
        },
        {
          path: 'person/:personId',
          component: Person,
          beforeEnter: requireAuth,
        },
        {
          path: 'content/:contentId',
          component: Content,
          beforeEnter: requireAuth,
        },
        {
          path: 'browser/:browserId',
          component: Browser,
          beforeEnter: requireAuth,
        },
        {
          path: 'categories/:categoriesId',
          component: Categories,
          beforeEnter: requireAuth,
        }
      ]
    },
    { path: '/login', component: Login },
    { path: '/sign-up', component: SignUp },
    { path: '*', component: NotFound }
  ]
})


export default router