const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// Adding route for user controllers
router.post('/register', userController.registerUser)

module.exports = router
