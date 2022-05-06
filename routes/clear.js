const express = require('express');
const clearRouter = express.Router(0);
// import the schema
const pokemon = require('../schema/pokeSchema')

// / Remove Pokemon from database
clearRouter.delete("/", (req, res)=>{
   pokemon.deleteMany(
         (err)=>{
        if(err){
            res.status(404).json({message: err.message})
        }else{
            res.status(204).json({})
        }
    })

})

clearRouter.delete('/:id',(req, res)=>{
    pokemon.deleteOne(
        (err)=>{
            if(err){
                res.status(404).json({message: err.message})
            }else{
                res.status(204).json({})
            }
        }
    )
})



module.exports = clearRouter;