const express = require("express")
const pokeRouter = express.Router()
// schema import
const Pokemon = require('../schema/pokeSchema')

const pokemon = [
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
 ];
//  Capitalize the first letter
//  
function capitalizeName(pokemon){
    for(let i=0; i<pokemon.length;i++)
      pokemon[i].name = pokemon[i].name[0].toUpperCase()+ pokemon[i].name.slice(1);
    return pokemon;
    }
    console.log(capitalizeName(pokemon))

    // Add jpg
    function addJpg(pokemon){
        for(let i=0; i<pokemon.length;i++)
            pokemon[i].img = pokemon[i].img+ ".jpg";
          return pokemon;
          }
          console.log(addJpg(pokemon))

 pokeRouter.get('/', (req, res)=>{
     res.status(200).json(pokemon)
 })
 
 pokeRouter.post("/", (req, res)=>{
    const formBody= req.body
    pokemon.push(formBody.name)
    res.status(200).json({name: pokemon})
})



// add a new get route /pokemon/:id
 pokeRouter.get('/:id',(req, res)=>{
    res.status(200).json({id: req.params.id})
 })


// Changed the names with capital letters. OMG it took 2 days.
 pokeRouter.put('/:name',capitalizeName, addJpg, async(req, res)=>{
     const body= req.body
     res.status(200).json(`Update pokemon with Name ${res.params.name}`)
 })
// Add new pokemon.Not sure if its working yet.
pokeRouter.post('/add',(req, res)=>{
    const formBody = req.body
    pokemon.push(formBody.name)
    res.status(200).json({name:"Stretosaur"})
})

// Create new pokemon
pokeRouter.post("/new", (req, res) => {
const newPokemon = req.body
Pokemon.create(newPokemon, (err, pokemon)=>{
    if(err){
        res.status(400).json({message:err.message})
    }else{
        res.status(200).json({pokemon})
    }
})
})

// export the router and then go to server.js to import it
module.exports = pokeRouter;


// Static routes always go above dinamic because express goes from top to bottom.


