import dotenv from "dotenv"
import express from 'express'
import cors from 'cors'


const app = express();
dotenv.config()
app.use(cors())
app.use(express.json())

// Controllers
app.get('/mess', (req, res) => {
    console.log('hit')
    res.send({message: 'sent'});
})
const port = process.env.PORT
app.listen(port, () => console.log(`Warped to port ${port}`))