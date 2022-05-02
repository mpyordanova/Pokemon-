const mongoose = require('mongoose')

const pokeSchema = new mongoose.Schema ({
   
   name:{type : String, required: true},
   jpg: {type: String, required: true }

})

const pokeModel = mongoose.model("Pokemon", pokeSchema)

module.exports = pokeModel