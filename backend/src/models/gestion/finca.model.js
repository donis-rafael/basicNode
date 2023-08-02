const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const Finca = db.define("Finca", {
    finca_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_finca: {
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
    tableName: 'Finca'
});

module.exports = Finca;