import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      name: '後台',
      path: '/admin',
      component: () => import('./components/admin/dashboard'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          component: () => import('./components/admin/Products/products'),
          meta: { requiresAuth: true }
        },
        {
          path: 'orderlist',
          component: () => import('./components/admin/orderlist'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupons',
          component: () => import('./components/admin/Coupons/coupons'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      name: '登入',
      path: '/login',
      component: () => import('./components/login')
    },
    {
      path: '/index',
      component: () => import('./components/indexMode'),
      children: [
        {
          path: '',
          component: () => import('./components/custom/index')
        },
        {
          path: '/products',
          component: () => import('./components/custom/products')
        },
        {
          path: '/products/:id',
          component: () => import('./components/custom/MoreProduct')
        },
        {
          path: '/cart',
          component: () => import('./components/custom/cart')
        }
      ]
    },
    {
      path: '/checkout/:id',
      component: () => import('./components/custom/checkout')
    }
  ]
})
