const express = require("express")
const seedRouter = express.Router()
const pokeModel = require('../schema/pokeSchema')


// Insert the poke array into mongodb
seedRouter.post('/', (req, res) => {
    pokeModel.insertMany([
        { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
        { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
        { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
        { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
        { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
        { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
        { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" }
    ], (err, pokemon) => {
        if (err) {
            res.status(400).json({ message: err.message })

        } else {
            res.status(200).json({ pokemon })
        }
    })
})

// crete new pokemon. Could not add it from postman?!
seedRouter.post("/new", (req, res) => {
    const newPokemon = req.body
    pokeModel.create({ name: "Stretosaur", img: "http://img.pokemondb.net/artwork/charmander" }, (err, pokemon) => {
        if (err) {
            res.status(400).json({ message: err.message })
        } else {
            res.status(201).json({ pokemon })
        }
    })
})+


seedRouter.put('/update/:id', (req, res) => {
    const updatedPoke = req.body
    //   first is what its being updated, updated thing, 3.call back fn
    pokeModel.updateOne({ _id: req.params.id }, updatedPoke, (err, updatedPoke) => {
        if (err) {
            res.status(404).json({ message: err.message })
        } else {
            res.status(202).json(updatedPoke)
        }
    })
})


module.exports = seedRouter;

// only put and post requests.
// dont use findByIdandUpdateOne