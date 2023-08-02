const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const Caso = db.define("Caso", {
    caso_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_caso: {
        type: DataTypes.STRING(100)
    },
    estado: {
        type: DataTypes.INTEGER
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
    tableName: 'Caso'
});

module.exports = Caso;