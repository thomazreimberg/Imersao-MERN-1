console.log("Iniciando API")

const express = require("express")
const server = express()

server.get('/', (req, resp) => {
    resp.send("Bom dia")
})

server.get('/ping', (req, resp) => {
    resp.send("pong")
})

server.get('/params', (req, resp) => {
    resp.send(req.params)
})

server.get('/query', (req, resp) => {
    resp.send(req.query)
})

server.listen(
    8080,
    () => console.log("API iniciada")
)