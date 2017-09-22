const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,24}$')
      )
    }
    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: "Provide a valid mail address"
          })
          break
        case 'password':
          res.status(400).send({
            error: 'not valid password'
          })
          break
        default:
          res.status(400).send({
            error: "Invalid registration info"
          })
      }
    } else {
      next()
    }
  }
}
