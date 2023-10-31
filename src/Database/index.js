const Sequelize = require('sequelize')
//IFAL
const sequelize = new Sequelize ('moneymind', 'aluno.ifal', 'aluno.ifal', {
//CASA    
// const sequelize = new Sequelize ('moneymind', 'root.jacio', 'root.jacio', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize 