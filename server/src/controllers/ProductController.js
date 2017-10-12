const {Category, Product} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const _ = require('lodash')

module.exports = {
  async index (req,res) {
    try {
      const products = await Product.findAll({
        include: [
          { model: Category},
        ]
      })
      .map(product => product.toJSON())
      .map(product => _.extend(
        {},
        product.Category,
        product
      ))
      res.send(products)
    } catch (err) {
      res.status(500).send({
        error: err
      })
    }
  },
  async post (req, res) {
    try {
      console.log(req.body)
      const product = await Product.create(req.body)
      res.send(product)
    } catch (err) {
      res.status(500).send({
        error: 'Error while creating product'
      })
    }
  },

  async get (req, res) {
    try {
      const {productId} = req.params
      const product = await Product.findOne({
        where: {
          _id: productId
        },
        include: [
          { model: Category}
        ]
      })
      if (!product) {
        return res.status(404).send({
          error: "Product Non Trovato"
        })
      }
      else {
        res.send(product)
      }

    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  },

  async put (req, res) {
    try {
      await Product.update(req.body, {
        where: {
          _id: req.params.productId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'errore durante modifica product'
      })
    }
  },

  async remove (req, res) {
    try {
      const product = await Product.findOne(req.body, {
        where: {
          _id: req.params.productId
        }
      })
      if (!product){
        return res.status(403).send({
          error: 'cannot remove product'
        })
      }
      await product.destroy()
      res.send(product)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'error trying to delete this product'
      })
    }
  },

  async getByCategoryId (req, res) {
    try {
        const {categoryId} = req.params
        const products = await Product.findAll({
          where: {
            CategoryId: categoryId
          },
          order: [
            ['name', 'DESC']
          ]
        })
        if(!products) {
          return res.status(403).send({
            error: '0 Prodotti di questa Categoria!'
          })
        }
        else {
          res.send(products)
        }
      } catch (err) {
        console.log("response 500")
        res.status(500).send({
          error: err
        })
    }
  }
}
