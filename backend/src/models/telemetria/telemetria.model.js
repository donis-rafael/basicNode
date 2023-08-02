const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const Telemetria = db.define("Telemetria", {
    telemetria_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    horometro: {
        type: DataTypes.DECIMAL(8,2)
    },
    horas_cadena: {
        type: DataTypes.INTEGER
    },
    tiempo_ralenti: {
        type: DataTypes.DECIMAL(8,2)
    },
    consumo_combustible: {
        type: DataTypes.DECIMAL(8,2)
    },
    velocidad_dezplazamiento: {
        type: DataTypes.INTEGER
    },
    autoguidance: {
        type: DataTypes.DECIMAL(8,2)
    },
    smart_cruise: {
        type: DataTypes.DECIMAL(8,2)
    },
    auto_tracker: {
        type: DataTypes.DECIMAL(8,2)
    },
    rpm_extractor_primario: {
        type: DataTypes.DECIMAL(8,2)
    },
    presion_cortador_base: {
        type: DataTypes.INTEGER
    },
    carga_motor: {
        type: DataTypes.DECIMAL(8,2)
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
    tableName: 'Telemetria'
});

module.exports = Telemetria;