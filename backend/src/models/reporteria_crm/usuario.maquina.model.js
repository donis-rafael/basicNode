const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const Usuario_Maquina = db.define("Usuario_maquina", {}, {
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