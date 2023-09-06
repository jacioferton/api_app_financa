const Sequelize = require('sequelize')
const database = require('../Database')

    const User = database.define ('usuario', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        senha: {
            type:Sequelize.STRING,
            allowNull: false
        },
        nome:{
            type: Sequelize.STRING,
            allowNull: false
        },
        termo: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    })

    // User.create({
    //     email: 'teste@teste',
    //     senha: 'teste',
    //     nome: 'Úsuario Teste',
    //     termo: true
    // })

    module.exports = User