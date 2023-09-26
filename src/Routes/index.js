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
        res.status(500).json({ error: 'Erro ao obter lista de usuários' })
    }
})
router.post('/cadastrar', async (req, res) => {
    const responseDB = await Usuario.findOne({ where: { email: req.body.email } })

    if (responseDB == null) {
        const usuario = await Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            termo: req.body.termo
        })
        res.json(usuario)
    } else {
        res.send({ "retorno": "cadastrado" })
    }
})

router.post('/entrar', async (req, res) => {
    console.log(req.body)
    const email = req.body.email
    const senha = req.body.senha
    console.log(senha);

    const responseDB = await Usuario.findOne({ where: { email: email } })
    // console.log(responseDB); 

    if (responseDB == null) {
        res.send({
            "retorno": "incorretos"
        })
    } else {

        if (responseDB.dataValues.senha === senha) {

            return res.send({
                "retorno": "correto"
            })
        }
        res.send('Senha incorreta')
    }
})

module.exports = router