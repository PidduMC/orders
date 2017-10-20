// Service per CustomComponent
import Api from '@/services/Api'

export default {
  getCustomComponentName (productId) {
    return Api().get(`customcomponents/getByProductId/${productId}`)
  }
}
