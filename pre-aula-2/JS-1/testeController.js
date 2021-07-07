const router = require("express").Router()

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