const express = require('express')
const server = express()
const router = require('./Routes')
const database = require('./Database')
const Usuario = require('./Models/user')
const {IP} = require('./IP')
const port = 7878

server.use(express.json())
async function iniciar() {
    try {
        await database.sync({force: false})
        console.log('database e models sincronizado com sucesso!')
    } catch (error) {
        console.error('Erro ao iniciar: ', error)
    }
}

server.listen(port, () => {
    console.log(`Server started in http://${IP}:${port}/`)
    server.use( router )
    iniciar()
})
