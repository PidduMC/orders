const {Customer} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')


module.exports = {
  async index (req,res) {
    try {
      const customers = await Customer.findAll()
      res.send(customers)
    } catch (err) {
      res.status(500).send({
        error: err
      })
    }
  },
  async post (req, res) {
    try {
      const customer = await Customer.create(req.body)
      const customerJson = customer.toJSON()
      res.send({
        customer: customerJson
      })
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  },
  async remove (req, res) {
    try {
      const {customerId} = req.params
      console.log(customerId)
      const customer = await Customer.findOne({
        where: {
          _id: customerId
        }
      })
      if (!customer){
        return res.status(403).send({
          error: 'cannot remove customer'
        })
      }
      await customer.destroy()
      res.send(customer)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'error trying to delete this customer'
      })
    }
  }
}
