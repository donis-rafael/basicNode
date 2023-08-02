const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const Usuario = db.define("Usuario", {
    usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_usuario: {
        type: DataTypes.STRING,
        unique: true
    },
    correo: {
        type: DataTypes.STRING
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
    tableName: 'Usuario'
});

module.exports = Usuario;