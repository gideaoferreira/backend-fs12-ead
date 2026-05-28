import { request, response } from "express";
import { productService } from "../services/product-service.js";

function productController() {
  return {
    list: async (request, response) => {
      try {
        const page = request.query.page ? request.query.page : 1;
        const limit = request.query.limit ? request.query.limit : 10;
        const filter = request.query.filter ? request.query.filter : null

        const sortBy = request.query.sortBy ? request.query.sortBy : null
        const sort = request.query.sort ? request.query.sort : null
        const sortParams = { sortBy: sortBy, sort: sort}

        const service = productService();
        const products = await service.list(page, limit, filter, sortParams);
        return response.status(200).json(products);
      } catch (error) {
        console.log(error.toString())
        return response.status(500).json(error.message)
      }
    },
    details: async (request, response) => {
      const service = productService();
      const product = await service.details(request.params.id);
      return response.json(product);
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
    addVariation: async (request, response) => {
      const service = productService();
      const addVariation = await service.addVariation(request.body);
      return response.json(addVariation);
    },
    updateVariation: async (request, response) => {
      const service = productService();
      const updateVariation = await service.updateVariation(request.params.id, request.body);
      return response.json(updateVariation);
    },
    deleteVariation: async (request, response) => {
      const service = productService();
      const deleteProductVariation = await service.deleteVariation(request.params.id);
      return response.json(deleteProductVariation);
    }
  };
}

export default productController;
