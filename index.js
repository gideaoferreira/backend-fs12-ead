import express from "express"
import cors from "cors"
import routes from "./src/routes/routes.js"
import { sequelize } from "./src/database/configuration.js"
import morgan from "morgan"


const app = express()
const port = 3000

app.use(morgan("combined"))
app.use(cors())
app.use(express.json())
app.use(routes)

sequelize.authenticate()
    .then(async () => {
        await sequelize.sync()
        app.listen(port, (error) => {
            if (error) {
                console.log("Ops! Tivemos um erro ao iniciar o servidor")
                return
            }
            console.log(`App is running on port: ${port}`)
        })
    })
    .catch((error) => {
        console.log(`Erro ao tentar se conectar ao banco de dados: ${error}`)
    })

