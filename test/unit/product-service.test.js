import {beforeEach, expect, jest} from "@jest/globals"

const mock = jest.fn()

jest.unstable_mockModule(
  "../../src/repositories/product-repository.js",
  () => ({
    productRepository: () => ({
      list: mock,
      details: mock
    })
  })
)

const { productService } = await import("../../src/services/product-service.js");

describe("Product Service test", () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("Deve retornar uma lista de produtos", async () => {
    // Arrange
    mock.mockResolvedValue([{
      id: 1,
      name: "Tênis",
    }])
    const service = productService()

    // Act
    const listProduct = await service.list()

    // Assert
    expect(listProduct[0].name).toBe("Tênis")
  })

  test("Deve retornar um total de 2 produtos", async () => {
    // Arrange
    mock.mockResolvedValue([
      { id: 1, name: "Tênis" },
      { id: 2, name: "Tênis" },
    ])
    const service = productService()
    const totalProducts = 2

    // Act
    const listProduct = await service.list()

    // Assert
    expect(listProduct.length).toBe(totalProducts)
  })

  test("Deve retornar detalhes de um produto", async () => {
    // Arrange
    const productFake = { id: 234, name: "Adidas Hamp Preto" }
    mock.mockResolvedValue(productFake)
    const service = productService()

    //Act
    const product = await service.details(productFake.id)

    expect(product.id).toBe(productFake.id)
    expect(product.name).toBe(productFake.name)
  })
});
