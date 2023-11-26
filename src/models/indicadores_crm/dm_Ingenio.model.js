const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const DM_Ingenio = db.define("DM_Ingenio", {
    ingenio_id: {
        type: DataTypes.UUID
    },
    nombre_ingenio: {
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
    tableName: 'DM_Ingenio'
});

module.exports = DM_Ingenio;