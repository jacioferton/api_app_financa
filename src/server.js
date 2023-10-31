const express = require('express')
const server = express()
const router = require('./Routes')
const database = require('./Database')
const Usuario = require('./Models/user')
const DinheiroConta = require("./Models/dinheiroConta")
const port = 7878
const IP = '10.220.30.147'
server.use(express.json())

async function iniciar() {
    try {
        await database.sync({ force: false })
        console.log('database e models sincronizado com sucesso!')
    } catch (error) {
        console.error('Erro ao iniciar: ', error)
    }
}  

server.listen(port, () => {
    console.log(`Server started in http://${IP}:${port}/`)
    server.use(router)

Usuario.hasOne(DinheiroConta, {
  foreignKey: 'userId', // Chave estrangeira em Profile que faz referência ao User
  onDelete: 'CASCADE',   // Defina o comportamento de exclusão
});
DinheiroConta.belongsTo(Usuario, {
  foreignKey: 'userId', // Chave estrangeira em Profile que faz referência ao User
});



    iniciar() 
})

