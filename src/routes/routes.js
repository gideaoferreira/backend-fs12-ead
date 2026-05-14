import { Router } from "express"
import homeController from "../controllers/home-controller.js"
import userController from "../controllers/user-controller.js"
import productController from "../controllers/product-controller.js"
import { users } from "../database/seeds/generateUsers.js"
import { User } from "../models/user.js"

const routes = Router()

// Rotas da feature de usuário
routes.get("/users", userController().list)
routes.get("/users-fake", async (req, res) => {
  try {
    await User.bulkCreate(users);

    return res.status(201).json({
      message: "100 usuários criados com sucesso!"
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro ao popular banco"
    });
  }
})
routes.post("/user", userController().create)
routes.delete("/user/:id", userController().delete)
routes.put("/user/:id", userController().update)

//  Rotas da feature de produtos
routes.get("/products", productController().list)
routes.post("/products", productController().create)
routes.delete("/products/:id", productController().delete)
routes.put("/products/:id", productController().update)

export default routes