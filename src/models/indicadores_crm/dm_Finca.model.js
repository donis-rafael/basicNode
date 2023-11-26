const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const DM_Finca = db.define("DM_Finca", {
    id_Finca: {
        type: DataTypes.STRING
    },
    Nombre_Finca: {
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
    tableName: 'DM_Finca'
});

module.exports = DM_Finca;