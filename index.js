import express from "express"
import cors from "cors"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
    return response
            .status(201)
            .json("APP EM EXECUÇÃO")
})

app.listen(port, (error) => {
    if (error) {
        console.log("Ops! Tivemos um erro ao iniciar o servidor")
        return
    }
    console.log(`App is running on port: ${port}`)
})