const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const DM_Maquina = db.define("DM_Maquina", {
    productid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_producto: {
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
    tableName: 'DM_Maquina'
});

module.exports = DM_Maquina;