console.log("Iniciando API")

const express = require("express")
const server = express()

let alunos = []

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

server.post('/', (req, resp) => {
    let aluno = req.body
    alunos.push(aluno)
    resp.end()
})

server.put('/:pos', (req, resp) => {
    let aluno = alunos[pos]
    aluno.nome = req.body.name
    resp.end()
})

server.delete('/:pos', (req, resp) => {
    
})

server.listen(
    8080,
    () => console.log("API iniciada")
)