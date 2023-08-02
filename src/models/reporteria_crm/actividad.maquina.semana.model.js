const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const Actividad_Maquina_Semana = db.define("Actividad_maquina_semana", {
    actividad_sem_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    mtbf: {
        type: DataTypes.DECIMAL(8,2)
    },
    mttr: {
        type: DataTypes.DECIMAL(8,2)
    },
    pmrs: {
        type: DataTypes.DECIMAL(8,2)
    },
    no_planeados: {
        type: DataTypes.DECIMAL(8,2)
    },
    prcnt_danios: {
        type: DataTypes.DECIMAL(8,2)
    },
    eficiencia_ton_hora: {
        type: DataTypes.DECIMAL(8,2)
    },
    fecha_actividad: {
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
    tableName: 'Actividad_maquina_semana'
});

module.exports = Actividad_Maquina_Semana;