const express = require('express')
const cors =require("cors")
const useRouter = require('./routes/recipe')
const userRouter = require('./routes/user')

const app = express()
app.use(express.json())
app.use(cors())


app.use("/recipe",useRouter)
app.use("/",userRouter)


module.exports=app