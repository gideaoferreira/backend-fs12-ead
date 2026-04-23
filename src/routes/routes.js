import { Router } from "express"
import homeController from "../controllers/home-controller.js"
import { createUserController, listUserController } from "../controllers/user-controller.js"
import productController from "../controllers/product-controller.js"

const routes = Router()

routes.get("/", homeController)
routes.get("/users", listUserController)
routes.post("/users", createUserController)
routes.get("/products", productController)

export default routes