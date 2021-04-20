import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 系统界面
import Classify from '../views/Classify.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Article from "../views/Article.vue"
import List from "../views/List.vue"

import Unique from '../views/Unique.vue'
import Detail from '../views/Detail.vue'

import ToLogin from "../views/ToLogin.vue"
import Wode  from "../views/Wode.vue"

// 测试界面
import Infinite from '../testing/Infinite.vue'

Vue.use(VueRouter)

const routes = [
  // 系统界面
  {
    path: '/list',
    name: 'List',
    component:List
  },
  {
    path: '/article',
    name: 'Article',
    component:Article
  },
  {
    path: '/wode',
    name: 'Wode',
    component:Wode
  },
  {
    path: '/toLogin',
    name: 'ToLogin',
    component:ToLogin
  },

  {
    path: '/unique',
    name: 'Unique',
    component: Unique
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // 测试界面
  {
    path: '/infinite',
    name: 'Infinite',
    component: Infinite
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
