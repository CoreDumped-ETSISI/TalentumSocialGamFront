import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Industry from '@/components/Industry'
import Question from '@/components/Question'

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
    },
    {
      path: '/preguntas',
      name: 'Question',
      component: Question
    }
  ]
})
