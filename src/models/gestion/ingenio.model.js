const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const Ingenio = db.define("Ingenio", {
    ingenio_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_ingenio: {
        type: DataTypes.STRING,
        unique: true
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
    tableName: 'Ingenio'
});

module.exports = Ingenio;