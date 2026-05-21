import { DataTypes } from "sequelize";
import { sequelize } from "../database/configuration.js";
import { Product } from "./product.js";

export const ProductVariation = sequelize.define('Product_Variation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    product_id: {
        type: DataTypes.INTEGER,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    size: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    costPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})