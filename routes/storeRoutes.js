const express = require('express')
const router = express.Router()
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getOneProduct
} = require('../controllers/storeController.js')

// const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getProducts).post(createProduct)
router.route('/:id').delete(deleteProduct).put(updateProduct).get(getOneProduct)

module.exports = router
