import express from "express"
import cors from 'cors'

//routes
import character from './routes/Character.route'
import movieSerie from './routes/Movie_Serie.route'

const app = express()

app.use(express.json())

//definicion de ruta
app.use('/api/character', character)
app.use('/api/movieSerie', movieSerie)

export default app