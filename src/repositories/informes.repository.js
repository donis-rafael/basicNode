const repository = {};
const sequelize = require("sequelize");

const Maquina = require('../models/reporteria_crm/maquina.model');
const Caso = require('../models/reporteria_crm/caso.model');
const Maquina_Dia = require('../models/reporteria_crm/actividad.maquina.dia.model');
const Maquina_Semana = require('../models/reporteria_crm/actividad.maquina.semana.model');
const Usuario_Maquina = require('../models/reporteria_crm/usuario.maquina.model');
const Usuario = require('../models/gestion/usuario.model');

const Telemetria = require('../models/telemetria/telemetria.model');
const Ingenio = require("../models/gestion/ingenio.model");

// Relacion entre Maquina y Caso
Maquina.hasMany(Caso, { foreignKey: 'maquina_id' });
Caso.belongsTo(Maquina, { foreignKey: 'maquina_id' });

// Relacion entre Maquina y Actividad Diaria
Maquina.hasMany(Maquina_Dia, { foreignKey: 'maquina_id' });
Maquina_Dia.belongsTo(Maquina, { foreignKey: 'maquina_id' });

// Relacion entre Maquina y Actividad Semanal
Maquina.hasMany(Maquina_Semana, { foreignKey: 'maquina_id' });
Maquina_Semana.belongsTo(Maquina, { foreignKey: 'maquina_id' });

// Relacion entre Maquina y Telemetria
Maquina.hasMany(Telemetria, { foreignKey: 'maquina_id' });
Telemetria.belongsTo(Maquina, { foreignKey: 'maquina_id' });

// Relacion entre Maquina y Usuarios
Maquina.belongsToMany(Usuario, { through: Usuario_Maquina, foreignKey: 'maquina_id' });
Usuario.belongsToMany(Maquina, { through: Usuario_Maquina, foreignKey: 'usuario_id' });

/**
 * ********************************************
 * ************** INFORME DIARIO **************
 * ********************************************
 */
repository.informeDiarioByMaquina = async (codigoMaquina) => {
    let maquinaFounded, mensaje;
    /*await Maquina.findOne({
        where: {
            codigo_maquina: codigoMaquina
        },
        include: [
            [sequelize.fn('COUNT', sequelize.col(Caso)), 'Casos'],
            Maquina_Dia,
            Telemetria
        ]
    }).then((data) => {
        mensaje = 'exito';
        maquinaFounded = data;

    }).catch(err => {
        console.log("err -> " + err);
        mensaje = 'error';
        maquinaFounded = err.message || "Ocurrió un error al consultar Maquina.";
    });

    let respuesta = {
        message: mensaje,
        cuerpo: maquinaFounded
    }

    return respuesta;*/

    await Maquina.findOne({
        where: {
            codigo_maquina: codigoMaquina
        },
        include: [{
            model: Usuario,
            through: { attributes: [] },
            include: Ingenio
        }]
    }).then((data) => {
        if (data.length <= 0) {
            mensaje = 'Sin Datos';
        } else {
            mensaje = 'Exito';
        }
        maquinaFounded = data;

    }).catch(err => {
        console.log("err -> " + err);
        console.log("err.message -> " + err.message);
        mensaje: 'Error',
            maquinaFounded = err.message || "Ocurrió un error al consultar Maquina.";
    });

    let respuesta = {
        message: mensaje,
        cuerpo: maquinaFounded
    }

    return respuesta;
}


module.exports = repository;