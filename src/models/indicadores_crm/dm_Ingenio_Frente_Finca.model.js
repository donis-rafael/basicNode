const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const DM_Ingenio_Frente_Finca = db.define("DM_Ingenio_Frente_Finca", {
    id_cliente: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
    },
    Frente: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
    },
    id_Finca: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
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
    tableName: 'DM_Ingenio_Frente_Finca'
});

module.exports = DM_Ingenio_Frente_Finca;