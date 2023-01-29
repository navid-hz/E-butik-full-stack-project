// importing mongodb schema for use in the controller
const Product = require('../models/db')
// const User = require('../models/userModel')

// Get all products
const getProducts = async (req, res) => {
  const products = await Product.find()

  res.status(200).json(products)
}

// Get one product by id
const getOneProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)

  res.status(200).json(product)
}

// Create product
const createProduct = async (req, res) => {
  if (
    !req.body.title &&
    !req.body.price &&
    !req.body.stock &&
    !req.body.description
  ) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  const product = await Product.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    image: req.body.image,
    category: req.body.category
  })

  res.status(200).json(product)
}

// Update product
const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    res.status(400)
    throw new Error('Product not found')
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  )

  res.status(200).json(updatedProduct)
}

// Delete Product
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    res.status(400)
    throw new Error('Product not found')
  }

  await product.remove()

  res.status(200).json({ id: req.params.id })
}

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getOneProduct
}
