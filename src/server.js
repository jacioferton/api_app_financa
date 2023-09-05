const express = require('express')
const router = require('./Routes')

const server = express()
const port = 7878

server.use( router )

server.listen(port, () => {
    console.log(`Server started in http://localhost:${port}/`)
})
