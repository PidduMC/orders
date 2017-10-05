const {Category} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')


module.exports = {
  async index (req,res) {
    try {
      const categories = await  Category.findAll()
      res.send(categories)
    } catch (err) {
      res.status(500).send({
        error: err
      })
    }
  },
  async post (req, res) {
    try {
      console.log(req.body)
      const category = await Category.create(req.body)
      res.send(category)
    } catch (err) {
      res.status(500).send({
        error: 'Error while creating Category'
      })
    }
  },

  async get (req, res) {
    try {
      const {categoryId} = req.params
      const category = await Category.findOne({
        where: {
          _id: categoryId
        }
      })
      if (!category) {
        return res.status(404).send({
          error: "Categoria Non Trovata"
        })
      }
      else {
        res.send(category)
      }

    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  },

  async put (req, res) {
    try {
      await Category.update(req.body, {
        where: {
          _id: req.params.categoryId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'errore durante modifica categoria'
      })
    }
  },

  async remove (req, res) {
    try {
      const category = await Category.findOne(req.body, {
        where: {
          _id: req.params.customerId
        }
      })
      if (!category){
        return res.status(403).send({
          error: 'cannot remove Category'
        })
      }
      await category.destroy()
      res.send(category)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'error trying to delete this Category'
      })
    }
  }
}
