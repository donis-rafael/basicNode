const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const Mantenimiento = db.define("Mantenimiento", {
    mantenimiento_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_mantenimiento: {
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
    tableName: 'Mantenimiento'
});

module.exports = Mantenimiento;