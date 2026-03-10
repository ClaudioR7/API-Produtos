require("dotenv").config()

const express = require("express")
const connectDB = require("./src/config/db")

const orderRoutes = require("./src/routes/orderRoutes")

const app = express()

app.use(express.json())

connectDB()

app.use("/", orderRoutes)

app.listen(process.env.PORT, () => {
 console.log(`Servidor rodando na porta ${process.env.PORT}`)
})