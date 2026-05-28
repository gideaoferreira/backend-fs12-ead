import { productRepository } from "../repositories/product-repository.js";

export function productService() {
  return {
    list: async (page, limit, filter, sortParams) => {
      const repository = productRepository();
      return await repository.list(page, limit, filter, sortParams);
    },
    details: async (id) => {
      const repository = productRepository();
      return await repository.details(id);
    },
    create: async (data) => {
      const repository = productRepository();
      const product = await repository.create(data);

      return product;
    },
    delete: async (id) => {
      const repository = productRepository();
      const deleteProduct = await repository.delete(id);
      return deleteProduct;
    },
    update: async (id, data) => {
      const repository = productRepository();
      const updateProduct = await repository.update(id, data);
      return updateProduct;
    },
    addVariation: async (data) => {
      const repository = productRepository();
      const addVariation = await repository.addVariation(data);
      return addVariation;
    },
    updateVariation: async (id, data) => {
      const repository = productRepository();
      const updateVariation = await repository.updateVariation(id, data);
      return updateVariation;
    },
    deleteVariation: async (id) => {
      const repository = productRepository();
      const deleteProductVariation = await repository.deleteVariation(id);
      return deleteProductVariation;
    }
  };
}
