const mongoose = require("mongoose")
require('dotenv').config()


const connectDb = async()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("db is connected"))
    .catch((error)=>console.log(error.message))
}


module.exports=connectDb