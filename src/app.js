import express from "express"
import cors from 'cors'

//routes
import character from './routes/Character.route'
import movie from './routes/Movie.route'

//import associations from './models/Associations'

const app = express()

app.use(express.json())

//definicion de ruta
app.use('/api/characters', character)
app.use('/api/movies', movie)

export default app