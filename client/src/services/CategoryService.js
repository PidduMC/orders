import Api from '@/services/Api'

export default {
  index () {
    return Api().get('categories')
  },
  show (categoryId) {
    return Api().get(`categories/detail/${categoryId}`)
  },
  create (category) {
    return Api().post('categories/create', category)
  },
  remove (category) {
    return Api().delete(`categories/delete/${category._id}`, category)
  },
  modify (category) {
    return Api().put(`categories/edit/${category._id}`, category)
  }

}
