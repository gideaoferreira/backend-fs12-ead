import { Op } from "sequelize";
import { Product } from "../models/product.js";
import { ProductVariation } from "../models/product-variation.js";

export function productRepository() {
  return {
    list: async (page, limit, filter, sortParams) => {
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

      if (filter) {
        options.where = {
          [Op.or]: [
            { name: { [Op.like]: `%${filter}%` } },
            { description: { [Op.like]: `%${filter}%` } },
            { brand: { [Op.like]: `%${filter}%` } },
            { id: { [Op.like]: `%${filter}%` } },
          ]
        }
      }

      if (sortParams.sort) {
        options.order = [[sortParams.sortBy, sortParams.sort]]
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
    details: async(id) => {
      return await Product.findByPk(id, {
        include: ProductVariation
      });
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
    addVariation: async (data) => {
      return await ProductVariation.create({
          product_id: data.product_id,
          color: data.color,
          size: data.size,
          stock: data.stock,
          price: data.price,
          costPrice: data.costPrice,
        })
    },
    updateVariation: async (id, data) => {
      return await ProductVariation.update(
        {
          color: data.color,
          size: data.size,
          stock: data.stock,
          price: data.price,
          costPrice: data.costPrice,
        },
        {
          where: {
            id: id
          }
        }
      )
    },
    deleteVariation: async (id) => {
      return ProductVariation.destroy({
        where: {
          id: id
        }
      })
    }
  };
}
