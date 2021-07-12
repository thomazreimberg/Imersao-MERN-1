const express = require("express")
const server = express()

const cors = require('cors')
server.use(cors())

const router = require('./routes')
server.use(router)

const port = process.env.PORT | 8080
server
    .listen(port,
        () => console.log(`Server is up and running in port ${port}`)
)
//mongodb+srv://thomaz:spy@cluster0.mjcbg.mongodb.net/