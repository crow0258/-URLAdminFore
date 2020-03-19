/*global Vue*/
import Router from 'vue-router'
import HOME from '@/components/HOME'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: HOME
    }
  ]
})
