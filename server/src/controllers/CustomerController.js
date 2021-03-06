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
      console.log(req.body)
      const customer = await Customer.create(req.body)
      res.send(customer)
    } catch (err) {
      res.status(500).send({
        error: 'Error while creating customer'
      })
    }
  },

  async get (req, res) {
    try {
      const {customerId} = req.params
      const customer = await Customer.findOne({
        where: {
          _id: customerId
        }
      })
      if (!customer) {
        return res.status(404).send({
          error: "Cliente Non Trovato"
        })
      }
      else {
        res.send(customer)
      }

    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  },

  async put (req, res) {
    try {
      await Customer.update(req.body, {
        where: {
          _id: req.params.customerId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'errore durante modifica cliente'
      })
    }
  },

  async remove (req, res) {
    try {
      const customer = await Customer.findOne(req.body, {
        where: {
          _id: req.params.customerId
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
