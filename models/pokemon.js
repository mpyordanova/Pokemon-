const express = require("express")
const pokeRouter = express.Router()


const pokemon = [
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
 ];

 pokeRouter.route('/', (req, res)=>{
     res.status(200).json(pokemon)
 })
 pokeRouter.post("/", (req, res)=>{
    const formBody= req.body
    pokemon.push(formBody.name)
    res.status(200).json({name: pokemon})
})

// Created this for testing purposes. It works.
 pokeRouter.get('/:id',(req, res)=>{
    res.status(200).json({id: req.params.id})
 })

 pokeRouter.put('/:name',(req, res)=>{
res.status(200).json(`Update pokemon with Name ${res.params.name}`)
 })
// export the router and then go to server.js to import it
module.exports = pokeRouter;


// Static routes always go above dinamic because express goes from top to bottom.