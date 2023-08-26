const { DataTypes } = require('sequelize');
const db = require('../../config/db');
const Usuario = require('../gestion/usuario.model');
const Maquina = require('./maquina.model');

const Usuario_Maquina = db.define("Usuario_maquina", {
    maquina_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Maquina,
            key: 'maquina_id'
        }
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'usuario_id'
        }
    }
}, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    paranoid: false,
    // so updatedAt will be updated_at
    underscored: false,
    // disable the modification of tablenames to plural; 
    freezeTableName: true,
    // define the table's name
    tableName: 'Usuario_maquina'
});

module.exports = Usuario_Maquina;