const app = require("./app")
const connectDb = require("./config/dbconnection")
require('dotenv').config()

const port = process.env.PORT || 5000
connectDb()

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
