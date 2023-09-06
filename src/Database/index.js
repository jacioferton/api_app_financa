const Sequelize = require('sequelize')

const sequelize = new Sequelize ('moneymind', 'root.jacio', 'root.jacio', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize