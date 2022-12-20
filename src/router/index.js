import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AppLayout,
    name: 'AppLayout',
    meta:{},
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () =>import( '../views/dashboard/Dashboard')
      },{
        path: '/customers',
        name: 'Customers',
        component:  () => import('../views/customers/Index')
      },
      {
        path: '/customers/new',
        name: 'NewClient',
        component:  () => import('../views/customers/New')
      },
      {
        path: '/customers/:id/edit',
        name: 'EditClient',
        component:  () => import('../views/customers/Edit')
      },
      {
        path: '/attendances',
        name: 'Attendances',
        component:  () => import('../views/attendances/Index')
      },
    ],
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/auth/Login')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
