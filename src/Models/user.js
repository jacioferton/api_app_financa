const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const User = Sequelize.define ('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        senha: {
            type:DataTypes.STRING
        },
        nome:{
            type: DataTypes.STRING
        },
        Termo: {
            type: DataTypes.BOOLEAN
        }
    })
}