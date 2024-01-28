const User = require('../models/userModel')

// Login user
const loginUser = async (req, res) => {
    res.json({msg: 'login user'})
}

// Signup user
const signupUser = async (req, res) => {
    res.json({msg: 'signup user'})
}

module.exports = {
    loginUser,
    signupUser
}