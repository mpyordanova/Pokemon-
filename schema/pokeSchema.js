const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const pokeSchema = new mongoose.Schema ({
   
   name:{type : String, required: true},
   img: {type: String, required: true }

})

const pokeModel = mongoose.model("pokeModel", pokeSchema);


module.exports = pokeModel;