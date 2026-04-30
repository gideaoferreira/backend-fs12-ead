import { request, response } from "express"
import { productService } from "../services/product-service.js"

function productController() {
    return {
        list: async (request, response) => {
            const service = productService()
            const products = await service.list()
            return response
                .status(200)
                .json(products)
        },
        create: async (request, response) => {
            const service = productService()
            const createProduct = await service.create(request.body)
            return await response.json(createProduct)
        },
        delete: async (request, response) => {
            const service = productService()
            const deleteProduct = await service.delete(request.params.id)
            return response.json(deleteProduct)
        },
        update: async (request, response) => {
            const service = productService()
            const updateProduct = await service.update(request.params.id, request.body)
            return response.json(updateProduct)
        }
    }
    
}

export default productController