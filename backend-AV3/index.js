const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const funcionarioController = require('./controller/funcionarioController')
app.use("/funcionario", funcionarioController)

const PORT = 3071

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} `)
})