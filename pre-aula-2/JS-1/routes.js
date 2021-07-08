const router = require("express").Router()

const MongoDB = require("mongodb").MongoClient
let mongoConnection

MongoDB
    .connect('mongodb+srv://thomaz:spy@cluster0.mjcbg.mongodb.net/', { useUnifiedTopology: true })
    .then(conn => {
        mongoConnection = conn
        console.log("Mongo connected")
    } )
    .catch(e => console.log(e))

router.get('/livros', async(req, resp) => {
    let db = mongoConnection.db('livraria').collection('livro')
    let livros = await db.find().toArray()
    resp.send(livros)
})

router.get('/quantidade', async(req, resp) => {
    let db = mongoConnection.db('livraria').collection('livro')
    let quantidade = await db.countDocuments().toArray()
    resp.send(quantidade)
})

router.get('/teste/', (req, resp) => {
    resp.send("Bom dia")
})

router.get('/teste/ping', (req, resp) => {
    resp.send("pong")
})

router.get('/teste/params/:a/:b/', (req, resp) => {
    resp.send(req.params)
})

router.get('/teste/query', (req, resp) => {
    resp.send(req.query)
})

module.exports = router