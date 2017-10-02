import Api from '@/services/Api'

export default {
  index () {
    return Api().get('customers')
  }

}

/*
AuthenticationService.register({
  email: 'testing@gmail.com'
  password: '123456'
})
*/
