import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../config/database'

const Movie_Serie = sequelize.define('movie_series', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
    },
}, {
    timestamps: false
})

export default Movie_Serie