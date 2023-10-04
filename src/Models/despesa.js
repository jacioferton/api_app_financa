const Sequelize = require('sequelize')
const database = require('../Database')

const Despesa = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    dataDespesa: {
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
    tableName: 'despesa',  
})

module.exports = Despesa