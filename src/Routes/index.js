const express = require('express')
const router = express.Router()
const Usuario = require('../Models/user')
const Receita = require('../Models/receita')
const Despesa = require('../Models/despesa')
const Database = require('../Database/index')

router.post('/cadastrar/receita', async (req, res) => {
    const receita = await Receita.create({
        dataReceita: req.body.dataReceita,
        categoria: req.body.categoria,
        valor: req.body.valor
    })
})

router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll()
        res.json(usuarios)
    } catch (error) {
        console.error(`Erro ao obter a lista de usuários: ${error}`)
        res.status(500).json({ error: 'Erro ao obter lista de usuários' })
    }
})

router.get('/usuario/:id', async (req, res) => {
    const usuarios = await Usuario.findAll()
    res.json(usuarios[req.params.id - 1])
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
    console.log(responseDB);

    if (responseDB == null) {
        res.send({
            "retorno": "incorretos"
        })
    } else {

        if (responseDB.dataValues.senha === senha) {
            const semSenha = {
                email: responseDB.dataValues.email,
                nome: responseDB.dataValues.nome,
                id: responseDB.dataValues.id
            }
            return res.json({
                retorno: "correto",
                userData: semSenha
            })
        }
        res.send('Senha incorreta')
    }
})

module.exports = router
