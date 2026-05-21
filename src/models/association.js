import { Product } from "./product.js";
import { ProductVariation } from "./product-variation.js";

Product.hasMany(ProductVariation, {
    foreignKey: "product_id"
});

ProductVariation.belongsTo(Product, {
    foreignKey: "product_id"
});