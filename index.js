import express from "express"
import cors from "cors"
import homeController from "./src/controllers/home-controller.js"
import userController from "./src/controllers/user-controller.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get("/", homeController)
app.get("/users", userController)

app.listen(port, (error) => {
    if (error) {
        console.log("Ops! Tivemos um erro ao iniciar o servidor")
        return
    }
    console.log(`App is running on port: ${port}`)
})