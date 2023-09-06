const express = require('express')
const router = express.Router()
const Usuario = require('../Models/user')
const Database = require('../Database/index')

router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll()
        res.json(usuarios)
    } catch (error) {
        console.error(`Erro ao obter a lista de usuários: ${error}`)
        res.status(500).json({error: 'Erro ao obter lista de usuários'})
    }
})

router.post('/buscar', async (req, res) => {
    console.log(req.body)
    const email = req.body.email
    const senha = req.body.senha

    const responseDB = await Usuario.findOne({where:{email:email, senha:senha}})

    if(responseDB = null) {
        res.send({
            "retorno": "incorretos"
        })
    } else {
        res.send({
            "retorno": "incorreto"
        })
    }
})

module.exports = router