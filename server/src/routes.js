//API routes
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const CustomerController = require ('./controllers/CustomerController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  //customer

  app.get('/customers',
           CustomerController.index)
  app.post('/customers/create',
            CustomerController.create)
  app.delete('/customers/delete/:customerId',
            CustomerController.remove)
}
