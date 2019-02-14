import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main.vue'
import Auth from '../components/Auth.vue'
import AuthSuccess from '../components/AuthSuccess.vue';
import Home from '../components/Home.vue'
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
        { path: 'home', component: Home },
        { path: 'person/:personId', component: Person },
        { path: 'content/:contentId', component: Content },
        { path: 'browser/:browserId', component: Browser },
        { path: 'categories/:categoriesId', component: Categories },
      ]
    },
    { path: '/login', component: Auth },
    { path: '*', component: NotFound },
  ]
})


export default router