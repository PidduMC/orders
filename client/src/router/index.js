import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Customers from '@/components/Customers'
import CustomerDetail from '@/components/CustomerDetail'
import CustomerCreate from '@/components/CustomerCreate'
import CustomerDelete from '@/components/CustomerDelete'
import CustomerEdit from '@/components/CustomerEdit'
import Orders from '@/components/Orders'
import OrderCreate from '@/components/OrderCreate'
import Categories from '@/components/Categories'
import CategoryCreate from '@/components/CategoryCreate'
import CategoryDetail from '@/components/CategoryDetail'
import CategoryDelete from '@/components/CategoryDelete'
import CategoryEdit from '@/components/CategoryEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/customers/create',
      name: 'customercreate',
      component: CustomerCreate
    },
    {
      path: '/customers/detail/:customerId',
      name: 'customerdetail',
      component: CustomerDetail
    },
    {
      path: '/customers/delete/:customerId',
      name: 'customerdelete',
      component: CustomerDelete
    },
    {
      path: '/customers/edit/:customerId',
      name: 'customeredit',
      component: CustomerEdit
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/orders/create',
      name: 'ordercreate',
      component: OrderCreate
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/categories/create',
      name: 'categorycreate',
      component: CategoryCreate
    },
    {
      path: '/categories/detail/:categoryId',
      name: 'categorydetail',
      component: CategoryDetail
    },
    {
      path: '/categories/delete/:categoryId',
      name: 'categorydelete',
      component: CategoryDelete
    },
    {
      path: '/categories/edit/:categoryId',
      name: 'categoryedit',
      component: CategoryEdit
    }
  ]
})
