const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const pokemon = require("./models/pokemon")

// const pokeRouter = express.Router()
//configure
require("dotenv").config()

const server = express()
const PORT = process.env.PORT || 3000

// middleware
server.use(cors("*"))
server.use(helmet())
server.use(morgan("dev"))
server.use(express.json())
server.use(bodyParser.json())

// create router. Imported from pokemon.js

const pokeRouter = require('./models/pokemon')

// link the routes we created in pokemon.js
server.use('/pokemon', pokeRouter)

// ROUTES


server.get("/", (req, res)=>{
    res.status(200).json({message: "Welcome to the Pokemon App!"})
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})