import { Router } from "express"
import homeController from "../controllers/home-controller.js"
import userController from "../controllers/user-controller.js"
import productController from "../controllers/product-controller.js"

const routes = Router()

routes.get("/", homeController)
routes.get("/users", userController)
routes.get("/products", productController)

export default routes