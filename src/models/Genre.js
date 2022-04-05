import { DataTypes } from "sequelize/types"
import { sequelize } from "../config/database"

const Genre = sequelize.define("genres", {
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
    }
}, {
    timestamps: false
})

export default Genre