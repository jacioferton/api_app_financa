const express = require('express')
const router = express.Router()
const Usuario = require('../Models/user')

router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll()
        res.json(usuarios)
    } catch (error) {
        console.error(`Erro ao obter a lista de usuários: ${error}`)
        res.status(500).json({error: 'Erro ao obter lista de usuários'})
    }
})

module.exports = router