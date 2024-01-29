const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const Registro_APP = db.define("Registro_app", {
    registro_app_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    operando: {
        type: DataTypes.INTEGER,
    },
    hora_inicio: {
        type: DataTypes.STRING(100)
    },
    hora_final: {
        type: DataTypes.STRING(100)
    },
    comentario: {
        type: DataTypes.STRING
    },
    foto: {
        type: DataTypes.BLOB
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
    tableName: 'Registro_app'
});

module.exports = Registro_APP;