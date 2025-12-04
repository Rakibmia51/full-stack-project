
const app = require("./app")

const dotenv=require("dotenv").config()
const connectDb = require("./config/connectionDb")

const port = process.env.PORT || 3000
connectDb()



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
