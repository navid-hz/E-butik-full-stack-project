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

// Function for generate token
// exports.generateToken = async (req, res) => {
//   try {
//     const user = await User.findOne({ username: req.body.username })

//     // Check if the password correct
//     const isPasswordCorrect = await bcrypt.compare(
//       req.body.password,
//       user.password
//     )

//     if (user && isPasswordCorrect) {
//       const payLoad = {
//         username: user.username,
//         date: user.date
//       }

//       // Generate token if user and password correct
//       const accessToken = jwt.sign(payLoad, process.env.JWT_SECRET)

//       res.json({ accessToken: accessToken })
//     } else {
//       res.json({ message: 'Incorrect user information' })
//     }
//   } catch (error) {
//     res.json({ message: error })
//   }
// }
