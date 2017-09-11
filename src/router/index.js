import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Login from '@/views/Login'
import Main from '@/views/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
