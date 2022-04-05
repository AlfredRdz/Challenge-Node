import Sequelize from "sequelize"
import * as dotenv from 'dotenv'

dotenv.config()

const { DB_HOST, DB_NAME, DB_PASS, DB_USER } = process.env

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.')

}).catch(err => {    
     console.error('Unable to connect to the database:', err)
})                          