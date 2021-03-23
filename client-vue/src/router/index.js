import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

import viewPost from '@/views/posts/viewPost.vue'
import SignUpForm from '@/views/SignUpForm'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //view Post
  {
    path: '/post/:id',
    component: viewPost,
    props: true,
    name: 'viewPost'
  },
  //filtres
  {
    path: '/filtre/:f',
    component: Home,
    props: true,
    name: 'filtre'
  },

  //sign up form
  {
    path: '/signup',
    component: SignUpForm,
    props: false,
    name: 'signupform'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
