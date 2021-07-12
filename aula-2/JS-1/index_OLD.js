console.log("Iniciando API")

const express = require("express")
const server = express()

const teste = require("./testeController")
server.use(teste)

const port = process.env.PORT | 8080
server.listen(
    port,
    () => console.log(`API iniciada na PORTA ${port}`)
)

//$env:PORT=8081 (Cria uma variável de ambiente - powershell)
//set PORT=8081 (Cria uma variável de ambiente - cmd)