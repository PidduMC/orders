console.log('HeLL O')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())

app.post('/register' , (req, res) => {
  res.send({
    message: req.body.email
  })
})

app.listen(process.env.PORT || 3000)
