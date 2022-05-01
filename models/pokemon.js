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
//  Capitalize the first letter
//  
function capitalizeName(pokemon){
    for(let i=0; i<pokemon.length;i++)
      pokemon[i].name = pokemon[i].name[0].toUpperCase()+ pokemon[i].name.slice(1);
    return pokemon;
    }
    console.log(capitalizeName(pokemon))

 pokeRouter.route('/', (req, res)=>{
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


// TEST
 pokeRouter.put('/:name',capitalizeName,async(req, res)=>{
     const body= req.body
     res.status(200).json(`Update pokemon with Name ${res.params.name}`)
 })
// export the router and then go to server.js to import it
module.exports = pokeRouter;


// Static routes always go above dinamic because express goes from top to bottom.


// const_pokemon['name']=const_pokemon['name'].capitalize()
// pokemon[0].name