import Api from '@/services/Api'

export default {
  index () {
    return Api().get('customers')
  },
  show (customerId) {
    return Api().get(`customers/detail/${customerId}`)
  },
  create (customer) {
    return Api().post('customers/create', customer)
  },
  remove (customer) {
    return Api().delete(`customers/delete/${customer._Id}`, customer)
  },
  modify (customer) {
    return Api().put(`customers/edit/${customer._id}`, customer)
  }

}
