const {Product, CustomComponent} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const _ = require('lodash')

module.exports = {
  async getByProductId (req, res) {
    try {
        const {productId} = req.params
        const component = await CustomComponent.find({
          where: {
            ProductId: productId
          }
        })
        if(!component) {
          return res.status(403).send(null)
        }
        else {
          res.send(component.name)
        }
      } catch (err) {
        console.log("response 500")
        res.status(500).send({
          error: err
        })
    }
  }
}
