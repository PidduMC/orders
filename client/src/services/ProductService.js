import Api from '@/services/Api'

export default {
  index () {
    return Api().get('products')
  },
  show (productId) {
    return Api().get(`products/detail/${productId}`)
  },
  create (product) {
    return Api().post('products/create', product)
  },
  remove (product) {
    return Api().delete(`products/delete/${product._id}`, product)
  },
  modify (product) {
    return Api().put(`products/edit/${product._id}`, product)
  },
  getByCategoryId (categoryId) {
    return Api().get(`products/getByCategoryId/${categoryId}`)
  }

}
