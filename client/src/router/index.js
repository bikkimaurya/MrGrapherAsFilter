import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Home from '@/view/Home'
import Projects from '@/view/Projects'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
  
})
