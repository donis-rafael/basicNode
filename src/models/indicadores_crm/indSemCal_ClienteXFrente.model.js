const { DataTypes } = require('sequelize');
const db = require('../../config/db');

const IndSemCal_ClienteXFrente = db.define("IndSemCal_ClienteXFrente", {
    id_Cliente: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Frente: {
        type: DataTypes.STRING
    },
    new_calendario: {
        type: DataTypes.INTEGER
    },
    Periodo: {
        type: DataTypes.INTEGER
    },
    Año: {
        type: DataTypes.INTEGER
    },
    SemanadelAño: {
        type: DataTypes.STRING
    },
    Efi_Correctivo: {
        type: DataTypes.FLOAT
    },
    Efi_Correctivo_Kpi: {
        type: DataTypes.FLOAT
    },
    Efi_Cuchillas: {
        type: DataTypes.FLOAT
    },
    Efi_Daño_Maquinaria: {
        type: DataTypes.FLOAT
    },
    Efi_Planificado: {
        type: DataTypes.FLOAT
    },
    Efi_Predictivo: {
        type: DataTypes.FLOAT
    },
    Efi_Preventivo: {
        type: DataTypes.FLOAT
    },
    UtilizacionAcumulada: {
        type: DataTypes.DOUBLE
    },
    UtilizacionHorasxDia: {
        type: DataTypes.DOUBLE
    },
    EntregaDiariaCoseChadora: {
        type: DataTypes.DOUBLE
    },
    IngresoTotal: {
        type: DataTypes.DOUBLE
    },
    Eficiencia: {
        type: DataTypes.DOUBLE
    },
    Porc_Utilizacion_Equipos: {
        type: DataTypes.FLOAT
    },
    Porc_Disponibilidad: {
        type: DataTypes.FLOAT
    },
    Porc_DispoTecRent: {
        type: DataTypes.FLOAT
    },
    MetaDisponibilidad: {
        type: DataTypes.DOUBLE
    },
    UtilizacionProgramada: {
        type: DataTypes.DOUBLE
    },
    Horas: {
        type: DataTypes.FLOAT
    },
    HorasDisponibles: {
        type: DataTypes.INTEGER
    },
    HorasTecrent: {
        type: DataTypes.FLOAT
    },
    Efi_Otros: {
        type: DataTypes.FLOAT
    },
    KPI_Confiabilidad: {
        type: DataTypes.FLOAT
    },
    KPI_Daño_Maquinaria: {
        type: DataTypes.FLOAT
    },
    KPI_MTBD_Equipo: {
        type: DataTypes.FLOAT
    },
    MTTR_HORAS: {
        type: DataTypes.FLOAT
    },
    MTBF_HORAS: {
        type: DataTypes.DOUBLE
    },
    KPI_No_Planeados: {
        type: DataTypes.FLOAT
    },
    KPI_PMRS: {
        type: DataTypes.FLOAT
    },
    HorasNODisponibles: {
        type: DataTypes.FLOAT
    },
    Cant_Casos_Daño_Maquinaria: {
        type: DataTypes.INTEGER
    },
    Cant_Casos_Correctivo: {
        type: DataTypes.INTEGER
    },
    ConteoEquipos: {
        type: DataTypes.INTEGER
    },
    KPI_MTBD_Flota: {
        type: DataTypes.DOUBLE
    },
    ConteoFrentesXCliente: {
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
    tableName: 'IndSemCal_ClienteXFrente'
});

module.exports = IndSemCal_ClienteXFrente;