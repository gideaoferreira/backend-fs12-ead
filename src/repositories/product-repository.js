import { where } from "sequelize"
import { Product } from "../models/product.js"

export function productRepository() {
    return {
        list: async () => {
            return await Product.findAll()
        },
        create: async (data) => {
            return await Product.create({
                name: data.name,
                description: data.description,
                price: data.price,
                costPrice: data.costPrice
            })
        },
        delete: async (id) => {
            return await Product.destroy({
                where: {
                    id: id
                }
            })
        },
        update: async(id, data) => {
            return await Product.update({
                name: data.name,
                description: data.description,
                price: data.price,
                costPrice: data.costPrice
            }, {
                where: {
                    id: id
                }
            })
        } 
    }
}