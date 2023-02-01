const User = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Function for register user
exports.registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const user = new User({
      username: req.body.username,
      password: hashedPassword
    })

    await user.save()
    res.json({ message: 'You just got registered' })
  } catch (error) {
    res.json({ message: error })
  }
}
