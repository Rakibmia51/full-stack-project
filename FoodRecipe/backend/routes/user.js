const express = require("express");
const { userSignUp, userLogin, getUser } = require("../controllers/user");
const router = express.Router()





router.post('/signUp', userSignUp) // signUp
router.post('/login', userLogin) // Login
router.get('/user/:id', getUser) // Add 

module.exports = router;