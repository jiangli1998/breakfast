import Vue from 'vue'
import VueRouter from 'vue-router'

// 系统界面
import Classify from '../views/Classify.vue'
import List from "../views/List.vue"
import Article from "../views/Article.vue"

import Unique from '../views/Unique.vue'
import Detail from '../views/Detail.vue'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ToLogin from "../views/ToLogin.vue"
import Wode  from "../views/Wode.vue"

import Home from '../views/Home.vue'
import Video from "../views/Video.vue"
import Word from "../views/Word.vue"

import tabbar from "../testing/tabbar.vue"


Vue.use(VueRouter)

const routes = [
  // 测试
  {
    path: '/tabbar',
    name: 'tabbar',
    component:tabbar
  },

  {
    path: '/video',
    name: 'Video',
    component:Video
  },
  {
    path: '/word',
    name: 'Word',
    component:Word
  },
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
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
