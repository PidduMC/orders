//API routes
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const CustomerController = require ('./controllers/CustomerController')
const OrderController = require('./controllers/OrderController')
const CategoryController = require ('./controllers/CategoryController')
const ItemController = require('./controllers/ItemController')

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

  //order
  app.get('/orders',
           OrderController.index)

  //category
  app.get('/categories',
            CategoryController.index)
  app.post('/categories/create',
            CategoryController.post)
  app.get('/categories/detail/:categoryId',
           CategoryController.get)
  app.delete('/categories/delete/:categoryId',
              CategoryController.remove)
  app.put('/categories/edit/:categoryId',
           CategoryController.put)

  //item
  app.get('/items',
            ItemController.index)
  app.post('/items/create',
            ItemController.post)
  app.get('/items/detail/:itemId',
           ItemController.get)
  app.delete('/items/delete/:itemId',
           ItemController.remove)
  app.put('/items/edit/:itemId',
           ItemController.put)

}
