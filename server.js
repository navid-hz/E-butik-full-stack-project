const express = require('express')
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')
const jwt = require('jsonwebtoken')

require('dotenv').config()

//middlewares
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Getting the routes for products with verified token
app.use('/api/store', verifyToken, require('./routes/storeRoutes'))
app.use('/user', require('./routes/userRoute'))

// Veryfi token
function verifyToken(req, res, next) {
  const bearer = req.headers['authorization']
  const token = bearer && bearer.split(' ')[1]

  if (!token) {
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.sendStatus(403)
    }

    next()
  })
}

// Connecting to MongoDB
mongoose.set('strictQuery', false)
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('DB connected')
  }
)

// Listen to server
app.listen(process.env.PORT || 5000)
