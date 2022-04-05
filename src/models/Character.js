import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from "../config/database"

const Character = sequelize.define('characters', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true    
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    weight: {   
        type: DataTypes.INTEGER
    },
    history: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})

export default Character