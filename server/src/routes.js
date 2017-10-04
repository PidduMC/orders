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
            CustomerController.post)
  app.get('/customers/detail/:customerId',
           CustomerController.get),
  app.delete('/customers/delete/:customerId',
              CustomerController.remove)
  app.put('/customers/edit/:customerId',
            CustomerController.put)

//orders
app.get('/order',
         OrderController.index)
}
