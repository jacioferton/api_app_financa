const express = require('express')
const router = express.Router()
const Usuario = require('../Models/user')
const DinheiroConta = require('../Models/dinheiroConta')

router.post('/cadastrar/dinheiroconta', async (req, res) => {
    const dinheiroConta = await DinheiroConta.create({
        data: req.body.data,
        categoria: req.body.categoria,
        valor: req.body.valor,
        tipo: req.body.tipo,
        userId: req.body.userId
    })
    res.json({ "valorSalvo" : true })
})

router.get('/usuarios/:id/conta', async (req, res) => {
    const id = req.params.id;

    const conta = await DinheiroConta.findAll({
        where: {userId: id},
        order: [['id', 'DESC']]
    })
    res.json(conta)
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
