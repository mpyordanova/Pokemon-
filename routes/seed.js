const express = require("express")
const seedRouter = express.Router()
const pokeModel = require('../schema/pokeSchema')
// Insert the poke array into mongodb
seedRouter.post('/', (req, res)=>{
    pokeModel.insertMany([
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
    ], (err, pokemon)=>{
        if (err){
            res.status(400).json({message: err.message})
        
        }else {
            res.status(201).json({pokemon})
        }
    })
})

module.exports = seedRouter;