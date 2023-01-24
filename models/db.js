const mongoose = require('mongoose')

const StoreSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  category: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Store', StoreSchema)
