import { Product } from "../../models/product.js";
import { ProductVariation } from "../../models/product-variation.js";

const productNames = [
  "Camiseta", "Calça Jeans", "Tênis", "Jaqueta",
  "Boné", "Mochila", "Relógio", "Shorts",
  "Vestido", "Blusa"
];

const productDescriptions = [
  "Produto de alta qualidade",
  "Modelo confortável e moderno",
  "Ideal para uso diário",
  "Design exclusivo",
  "Produto premium",
  "Ótimo custo benefício",
  "Material resistente",
  "Edição limitada"
];

const brands = [
  "Nike", "Adidas", "Puma", "Lacoste",
  "Zara", "Hering", "Reserva", "Oakley",
  "Tommy", "Calvin Klein"
];

const colors = [
  "Preto", "Branco", "Azul", "Vermelho",
  "Verde", "Cinza"
];

const sizes = ["PP", "P", "M", "G", "GG"];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomPrice(min, max) {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

function randomStock() {
  return Math.floor(Math.random() * 100);
}

const products = Array.from({ length: 50 }).map((_, index) => {
  const name = randomItem(productNames);

  const product = {
    id: index + 1,
    name: `${name} ${index + 1}`,
    description: randomItem(productDescriptions),
    brand: randomItem(brands),
    Product_Variations: []
  };

  const variationCount = Math.floor(Math.random() * 4) + 1;

  for (let i = 0; i < variationCount; i++) {
    const costPrice = randomPrice(20, 200);

    product.Product_Variations.push({
      color: randomItem(colors),
      size: randomItem(sizes),
      stock: randomStock(),
      costPrice,
      price: Number((costPrice * 1.6).toFixed(2))
    });
  }

  return product;
});

export async function seedProducts() {
  for (const productData of products) {
    const product = await Product.create({
      name: productData.name,
      description: productData.description,
      brand: productData.brand
    });

    for (const variation of productData.Product_Variations) {
      await ProductVariation.create({
        product_id: product.id,
        ...variation
      });
    }
  }

  console.log("Seed finalizado!");
}