import { DataTypes } from "sequelize";
import { sequelize } from "../database/configuration.js";
import { ProductVariation } from "./product-variation.js";

export const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

Product.hasMany(ProductVariation, {
    foreignKey: "product_id"
})