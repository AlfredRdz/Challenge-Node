import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../config/database'

import Character from './Character'

const Movie = sequelize.define('movies', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    },
    rate: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
})

export default Movie