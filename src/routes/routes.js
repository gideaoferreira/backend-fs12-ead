import { Router } from "express"
import homeController from "../controllers/home-controller.js"
import userController from "../controllers/user-controller.js"
import productController from "../controllers/product-controller.js"

const routes = Router()

// Rotas da feature de usuário
routes.get("/users", userController().list)
routes.post("/user", userController().create)
routes.delete("/user/:id", userController().delete)

//  Rotas da feature de produtos
routes.get("/products", productController().list)
routes.post("/products", productController().create)
routes.delete("/products/:id", productController().delete)
routes.put("/products/:id", productController().update)

export default routes