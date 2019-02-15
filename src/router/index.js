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

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Main,
      meta: { requiresAuth: true },
      children: [
        { path: '/home', component: Home },
        { path: 'person/:personId', component: Person },
        { path: 'content/:contentId', component: Content },
        { path: 'browser/:browserId', component: Browser },
        { path: 'categories/:categoriesId', component: Categories }
      ]
    },
    { path: '/login', component: Login },
    { path: '/sign-up', component: SignUp },
    { path: '*', redirect: '/login' }
  ]
})


router.beforeEach((to, from, next) => {

  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  console.log(currentUser)
  console.log(requiresAuth)
  

  if (requiresAuth && !currentUser) {
    next('login')
  } else if (!requiresAuth && currentUser) {
    next('home')
  } else {
    next()
  }
})



export default router