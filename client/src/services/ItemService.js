import Api from '@/services/Api'

export default {
  index () {
    return Api().get('items')
  },
  show (itemId) {
    return Api().get(`items/detail/${itemId}`)
  },
  create (item) {
    return Api().post('items/create', item)
  },
  remove (item) {
    return Api().delete(`items/delete/${item._Id}`, item)
  },
  modify (item) {
    return Api().put(`items/edit/${item._id}`, item)
  }

}
