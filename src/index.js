import http from 'http'
import * as dotenv from 'dotenv'

import app from "./app"

//para usar las variables de ambiente
dotenv.config()

http.createServer(app).listen(process.env.PORT, () => {
    console.log("Servido corriendo, puerto ", process.env.PORT)
})
