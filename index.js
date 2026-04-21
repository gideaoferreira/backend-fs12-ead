import express from "express"
import cors from "cors"
import routes from "./src/routes/routes.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, (error) => {
    if (error) {
        console.log("Ops! Tivemos um erro ao iniciar o servidor")
        return
    }
    console.log(`App is running on port: ${port}`)
})