const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const pokemon = require("./routes/pokemon")
const pokeRouter = require('./routes/pokemon')
const mongoConfig = require ("./config")
const pokeModel = require ('./schema/pokeSchema');
const seedRouter = require('./routes/seed');
const clearRouter = require('./routes/clear') 


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

const {schema} = require("./schema/pokeSchema")

server.use('/pokemon', pokeRouter)
server.use('/seed', seedRouter)
server.use('/clear', clearRouter)

// ROUTES
server.use('/pokemon', pokeRouter)

server.get("/", (req, res)=>{
    res.status(200).json({message: "Welcome to the Pokemon App!"})
})


server.listen(PORT, ()=>{
    mongoConfig()
    console.log(`Server is listening at ${PORT}`)
})