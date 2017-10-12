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
import OrderDetail from '@/components/OrderDetail'
import OrderEdit from '@/components/OrderEdit'
import Categories from '@/components/Categories'
import CategoryCreate from '@/components/CategoryCreate'
import CategoryDetail from '@/components/CategoryDetail'
import CategoryDelete from '@/components/CategoryDelete'
import CategoryEdit from '@/components/CategoryEdit'
import Items from '@/components/Items'
import ItemCreate from '@/components/ItemCreate'
import ItemDetail from '@/components/ItemDetail'
import ItemDelete from '@/components/ItemDelete'
import ItemEdit from '@/components/ItemEdit'
import Products from '@/components/Products'
import ProductCreate from '@/components/ProductCreate'
import ProductDetail from '@/components/ProductDetail'
import ProductDelete from '@/components/ProductDelete'
import ProductEdit from '@/components/ProductEdit'

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
      path: '/orders/detail/:orderId',
      name: 'orderdetail',
      component: OrderDetail
    },
    {
      path: '/orders/edit/:orderId',
      name: 'orderedit',
      component: OrderEdit
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
    },
    {
      path: '/items',
      name: 'items',
      component: Items
    },
    {
      path: '/items/create',
      name: 'itemcreate',
      component: ItemCreate
    },
    {
      path: '/items/detail/:itemId',
      name: 'itemdetail',
      component: ItemDetail
    },
    {
      path: '/items/delete/:itemId',
      name: 'itemdelete',
      component: ItemDelete
    },
    {
      path: '/items/edit/:itemId',
      name: 'itemedit',
      component: ItemEdit
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/products/create',
      name: 'productcreate',
      component: ProductCreate
    },
    {
      path: '/products/detail/:productId',
      name: 'productdetail',
      component: ProductDetail
    },
    {
      path: '/products/delete/:productId',
      name: 'productdelete',
      component: ProductDelete
    },
    {
      path: '/products/edit/:productId',
      name: 'productedit',
      component: ProductEdit
    }
  ]
})
