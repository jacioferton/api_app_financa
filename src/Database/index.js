const Sequelize = require('sequelize')

const sequelize = new Sequelize ('moneyMind', 'aluno.ifal', 'aluno.ifal', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Database conected')
}).catch((error) => {
    console.log(`Conection failed: ${error}`)
})