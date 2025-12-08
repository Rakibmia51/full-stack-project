const express = require('express')
const app = express()
const useRouter = require("./routes/recipe")
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.use("/",require("./routes/user"))
app.use("/recipe", useRouter)


module.exports = app;