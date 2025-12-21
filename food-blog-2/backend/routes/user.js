const express = require('express')
const { userSingUp, userLogin, getUser } = require('../controllers/user')

const router =  express.Router()


router.post("/signUp",userSingUp)
router.post("/login",userLogin)
router.get("/user:id",getUser)




module.exports = router

