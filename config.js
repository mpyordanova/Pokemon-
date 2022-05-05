const mongoose = require("mongoose")
require("dotenv").config()
async function main(){
    await mongoose.connect(process.env.MONGO_URI)
}

module.exports = main

// async to make the function synchronous
// await to wait for the think that comes after 