const express = require('express')
const router = express.Router()

// Importing product controllers
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getOneProduct
} = require('../controllers/storeController.js')

router.route('/').get(getProducts).post(createProduct)
router.route('/:id').delete(deleteProduct).put(updateProduct).get(getOneProduct)

module.exports = router
