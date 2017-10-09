const {Item} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')


module.exports = {
  async index (req,res) {
    try {
      const items = await Item.findAll()
      res.send(items)
    } catch (err) {
      res.status(500).send({
        error: err
      })
    }
  },
  async post (req, res) {
    try {
      console.log(req.body)
      const item = await Item.create(req.body)
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'Error while creating customer'
      })
    }
  },

  async get (req, res) {
    try {
      const {itemId} = req.params
      const item = await Item.findOne({
        where: {
          _id: itemId
        }
      })
      if (!item) {
        return res.status(404).send({
          error: "Cliente Non Trovato"
        })
      }
      else {
        res.send(item)
      }

    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  },

  async put (req, res) {
    try {
      await Item.update(req.body, {
        where: {
          _id: req.params.itemId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'errore durante modifica item'
      })
    }
  },

  async remove (req, res) {
    try {
      const item = await Item.findOne(req.body, {
        where: {
          _id: req.params.itemId
        }
      })
      if (!item){
        return res.status(403).send({
          error: 'cannot remove item'
        })
      }
      await item.destroy()
      res.send(item)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'error trying to delete this item'
      })
    }
  }
}
