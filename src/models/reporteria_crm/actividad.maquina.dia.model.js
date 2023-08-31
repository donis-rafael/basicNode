const { DataTypes } = require('sequelize');
const db = require('../../config/db');
const moment = require('moment');

const Actividad_Maquina_Dia = db.define("Actividad_maquina_dia", {
    actividad_dia_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    entrega_cania: {
        type: DataTypes.DECIMAL(8, 2)
    },
    disponibilidad_total: {
        type: DataTypes.DECIMAL(8, 2)
    },
    disponibilidad_tecrent: {
        type: DataTypes.DECIMAL(8, 2)
    },
    utilizacion_hora_dia: {
        type: DataTypes.DECIMAL(8, 2)
    },
    prcnt_utilizacion: {
        type: DataTypes.DECIMAL(8, 2)
    },
    casos_abiertos: {
        type: DataTypes.INTEGER
    },
    fecha_actividad: {
        type: DataTypes.DATE,
        get() {
            const date = this.getDataValue('fecha_actividad') ? moment(this.getDataValue('fecha_actividad')).utc().format('YYYY-MM-DD') : null;
            return date;
        }
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
    tableName: 'Actividad_maquina_dia'
});

module.exports = Actividad_Maquina_Dia;