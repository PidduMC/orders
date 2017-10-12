import Api from '@/services/Api'

export default {
  index () {
    return Api().get('orders')
  },
  show (orderId) {
    return Api().get(`orders/detail/${orderId}`)
  },
  create (order) {
    return Api().post('orders/create', order)
  },
  remove (order) {
    return Api().delete(`orders/delete/${order._id}`, order)
  },
  modify (order) {
    return Api().put(`orders/edit/${order._id}`, order)
  }

}
