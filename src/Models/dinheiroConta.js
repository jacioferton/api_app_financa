const Sequelize = require('sequelize')
const database = require('../Database')

const dinheiroConta = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    data: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    timestamps: true,
    tableName: 'dinheiroConta',  
})

module.exports = dinheiroConta