const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const Tipo_Maquina = db.define("Tipo_maquina", {
    tipo_maquina_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_tipo_maquina: {
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
    tableName: 'Tipo_maquina'
});

module.exports = Tipo_Maquina;