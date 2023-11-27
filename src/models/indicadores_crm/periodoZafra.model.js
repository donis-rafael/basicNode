const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const PeriodoZafra = db.define("PeriodoZafra", {
    new_calendario: {
        type: DataTypes.INTEGER
    },
    RangoDias: {
        type: DataTypes.STRING
    },
    Periodo: {
        type: DataTypes.INTEGER
    },
    SemanaZafra: {
        type: DataTypes.INTEGER
    },
    FI: {
        type: DataTypes.DATE
    },
    FF: {
        type: DataTypes.DATE
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
    tableName: 'PeriodoZafra'
});

PeriodoZafra.removeAttribute('id');

module.exports = PeriodoZafra;