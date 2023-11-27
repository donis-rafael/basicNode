const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const DM_Frente = db.define("DM_Frente", {
    frente: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
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
    tableName: 'DM_Frente'
});

module.exports = DM_Frente;