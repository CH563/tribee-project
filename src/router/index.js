import Vue from 'vue'
import Router from 'vue-router'
import Nofound from '@/components/Nofound'
import Login from '@/views/Login'
import Main from '@/views/Main'
import Default from '@/views/Default'
import ProductLists from '@/views/products/ProductLists'

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
      component: Main,
      children: [
        {
          path: '/404',
          component: Nofound,
          name: '404'
        },
        {
          path: '/default',
          name: 'Default',
          component: Default
        },
        {
          path: '/productLists',
          name: 'ProductLists',
          component: ProductLists
        }
      ]
    },
    {
      path: '*',
      redirect: { path: '/404' }
    }
  ]
})
