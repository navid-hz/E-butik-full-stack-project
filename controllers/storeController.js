// const asyncHandler = require('express-async-handler')

const Product = require('../models/db')
// const User = require('../models/userModel')

const getProducts = async (req, res) => {
  const Products = await Product.find()

  res.status(200).json(Products)
}

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

// @desc    Update Product
// @route   PUT /api/Products/:id
// @access  Private
const updateProduct = async (req, res) => {
  const Product = await Product.findById(req.params.id)

  if (!Product) {
    res.status(400)
    throw new Error('Product not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the Product user
  if (Product.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
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

// @desc    Delete Product
// @route   DELETE /api/Products/:id
// @access  Private
const deleteProduct = async (req, res) => {
  const Product = await Product.findById(req.params.id)

  if (!Product) {
    res.status(400)
    throw new Error('Product not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the Product user
  if (Product.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await Product.remove()

  res.status(200).json({ id: req.params.id })
}

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
}
