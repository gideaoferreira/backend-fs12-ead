import { DataTypes } from "sequelize";
import { sequelize } from "../database/configuration.js";

export const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    birthDate: {
        type: DataTypes.DATEONLY
    },
    gender: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.ENUM(['active', 'block', 'inactive']),
        defaultValue: 'inactive'
    }
})