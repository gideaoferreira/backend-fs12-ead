import { where } from "sequelize";
import { Product } from "../models/product.js";
import { ProductVariation } from "../models/product-variation.js";

export function productRepository() {
  return {
    list: async (page, limit) => {
      const limitParse = Number(limit)
      const pageParse = Number(page)
      const offset = (pageParse - 1) * limitParse
      
      const options = {
        distinct: true,
        limit: limitParse,
        offset: offset,
        include: ProductVariation,
        order: [
          ['id', 'DESC']
        ]
      }

      const { rows, count } = await Product.findAndCountAll(options);

      return {
        data: rows,
        pagination: {
          total: count,
          perPage: limitParse,
          currentPage: pageParse,
          totalPages: Math.ceil(count / limitParse)
        }
      }

    },
    create: async (data) => {
      const product = await Product.create({
        name: data.name,
        description: data.description,
        brand: data.brand,
      });

      data.variations.map(async (item) => {
        await ProductVariation.create({
          product_id: product.id,
          color: item.color,
          size: item.size,
          stock: item.stock,
          price: item.price,
          costPrice: item.costPrice,
        });
      });

      return product;
    },
    delete: async (id) => {
      return await Product.destroy({
        where: {
          id: id,
        },
      });
    },
    update: async (id, data) => {
      return await Product.update(
        {
          name: data.name,
          description: data.description,
          brand: data.brand,
        },
        {
          where: {
            id: id,
          },
        },
      );
    },
  };
}
