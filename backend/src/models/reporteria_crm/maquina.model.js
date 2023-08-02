const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const Maquina = db.define("Maquina", {
    maquina_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    codigo_maquina: {
        type: DataTypes.STRING(50)
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
    tableName: 'Maquina'
});

module.exports = Maquina;