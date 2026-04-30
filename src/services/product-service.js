import { productRepository } from "../repositories/product-repository.js";

export function productService() {
    return {
        list: async () => {
            const repository = productRepository()
            return await repository.list()
        },
        create: async (data) => {
            const repository = productRepository()
            const product = await repository.create(data)

            return await product
        },
        delete: async (id) => {
            const repository = productRepository()
            const deleteProduct = await repository.delete(id)
            return deleteProduct
        },
        update: async (id, data) => {
            const repository = productRepository()
            const updateProduct = await repository.update(id, data)
            return updateProduct
        }
    }
}