import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import New from '../pages/New'
import Edit from '../pages/Edit'
import Viewer from '../pages/Viewer'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/view/:id',
      name: 'view',
      component: Viewer
    },
    {
      path: '/view/:id/edit',
      name: 'edit',
      component: Edit
    }
  ]
})

export default router
