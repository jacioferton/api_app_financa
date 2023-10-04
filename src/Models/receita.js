const Sequelize = require('sequelize')
const database = require('../Database')

const Receita = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    dataReceita: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    valor: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
{
    timestamps: true,
    tableName: 'receita',  
})

module.exports = Receita