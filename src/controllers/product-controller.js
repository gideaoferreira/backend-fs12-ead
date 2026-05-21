import { request, response } from "express";
import { productService } from "../services/product-service.js";

function productController() {
  return {
    list: async (request, response) => {
      try {
        console.log(request.query.page)
        const page = request.query.page ? request.query.page : 1;
        const limit = request.query.limit ? request.query.limit : 10;

        const service = productService();
        const products = await service.list(page, limit);
        return response.status(200).json(products);
      } catch (error) {
        console.log(error.toString())
        return response.status(500).json(error.message)
      }
    },
    create: async (request, response) => {
      const service = productService();
      const createProduct = await service.create(request.body);
      return await response.status(201).json(createProduct);
    },
    delete: async (request, response) => {
      const service = productService();
      const deleteProduct = await service.delete(request.params.id);
      return response.json(deleteProduct);
    },
    update: async (request, response) => {
      const service = productService();
      const updateProduct = await service.update(
        request.params.id,
        request.body,
      );
      return response.json(updateProduct);
    },
  };
}

export default productController;
