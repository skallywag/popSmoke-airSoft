import dotenv from "dotenv"
import express from 'express'
import cors from 'cors'

const app = express();
dotenv.config()
app.use(cors())
app.use(express.json())

// Controllers
import * as gameController from './controllers/game.js'


//game end points
app.get('/game/games', gameController.getAllGames)
app.post('/game/create', gameController.createGame)

const port = process.env.PORT
app.listen(port, () => console.log(`Warped to port ${port}`))