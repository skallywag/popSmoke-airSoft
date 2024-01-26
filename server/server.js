import dotenv from "dotenv"
import express from 'express'
import cors from 'cors'

const app = express();
dotenv.config()
app.use(cors())
app.use(express.json())

// Controllers
import * as gameController from './controllers/game.js'


app.get('/mess', (req, res) => {
    console.log('hit')
    res.send({message: 'sent'});
})
app.get('/', gameController.getAllGames)

const port = process.env.PORT
app.listen(port, () => console.log(`Warped to port ${port}`))