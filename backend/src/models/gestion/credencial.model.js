const sequelize = require('sequelize');
const db = require('../../config/db');

const Credencial = db.define("Credencial", {
    credencial_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    user: {
        type: sequelize.STRING
    },
    contrasenia: {
        type: sequelize.STRING
    },
    token: {
        type: sequelize.STRING
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
    tableName: 'Credencial'
});

module.exports = Credencial;