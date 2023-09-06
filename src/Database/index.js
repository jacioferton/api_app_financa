const Sequelize = require('sequelize')

const sequelize = new Sequelize ('moneymind', 'aluno.ifal', 'aluno.ifal', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize