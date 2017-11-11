import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Industry from '@/components/Industry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/sector',
      name: 'Industry',
      component: Industry
    }
  ]
})
