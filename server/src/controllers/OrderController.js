const {Order, Customer, Item} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const _ = require('lodash')


module.exports = {
  async index (req,res) {
    try {
      const orders = await Order.findAll({
        include : [
          { model: Customer },
          { model: Item }
        ]
      })
      res.send(orders)
    } catch (err) {
      res.status(500).send({
        error: err
      })
    }
  },
  async post (req, res) {
    try {
      console.log(req.body)
      const order = await Order.create(req.body)
      res.send(order)
    } catch (err) {
      res.status(500).send({
        error: 'Error while creating order'
      })
    }
  },

  async get (req, res) {
    try {
      const {orderId} = req.params
      const order = await Order.findOne({
        where: {
          _id: orderId
        },
        include : [
          { model: Customer },
          { model: Item }
        ]
      })
      if (!order) {
        return res.status(404).send({
          error: "ordine Non Trovato"
        })
      }
      else {
        res.send(order)
      }
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  },

  async put (req, res) {
    try {
      await Order.update(req.body, {
        where: {
          _id: req.params.orderId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'errore durante modifica ordine'
      })
    }
  },

  async remove (req, res) {
    try {
      const order = await order.findOne(req.body, {
        where: {
          _id: req.params.orderId
        }
      })
      if (!order){
        return res.status(403).send({
          error: 'cannot remove order'
        })
      }
      await order.destroy()
      res.send(order)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'error trying to delete this order'
      })
    }
  }
}
