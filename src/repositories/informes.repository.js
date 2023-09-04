const repository = {};
const { sequelize, Op } = require("sequelize");

const Maquina = require('../models/reporteria_crm/maquina.model');
const Caso = require('../models/reporteria_crm/caso.model');
const Maquina_Dia = require('../models/reporteria_crm/actividad.maquina.dia.model');
const Maquina_Semana = require('../models/reporteria_crm/actividad.maquina.semana.model');
const Usuario_Maquina = require('../models/reporteria_crm/usuario.maquina.model');
const Usuario = require('../models/gestion/usuario.model');

const Telemetria = require('../models/telemetria/telemetria.model');
const Prog_Desarrollo = require("../models/gestion/fase.desarrollo.model");
const Ingenio = require('../models/gestion/ingenio.model');
const Frente = require("../models/gestion/frente.model");


// Relacion entre Ingenio y Frente
Ingenio.hasMany(Frente, { foreignKey: 'ingenio_id' });
Frente.belongsTo(Ingenio, { foreignKey: 'ingenio_id' });

// Relacion entre Maquina y Frente
Frente.hasMany(Maquina, { foreignKey: 'frente_id' });
Maquina.belongsTo(Frente, { foreignKey: 'frente_id' });

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
repository.informeDiarioByMaquina = async (codigoMaquina, fechaHoy) => {
    let maquinaFounded, mensaje;

    await Maquina.findAll({
        where: {
            codigo_maquina: codigoMaquina
        },
        include: [{
            model: Usuario,
            through: { attributes: [] },
            include: Prog_Desarrollo
        },
            Frente,
            Telemetria,
        {
            model: Maquina_Dia,
            where: {
                fecha_actividad: fechaHoy
            }
        }]
    }).then((data) => {
        if (data == null || data.length <= 0) {
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

repository.informeDiarioByIngenio = async (codigoIngenio, fechaHoy) => {
    let maquinaFounded, mensaje;

    await Maquina.findAll({
        include: [{
            model: Usuario,
            through: { attributes: [] },
            include: Prog_Desarrollo
        },
        {
            model: Frente,
            include: {
                model: Ingenio,
                where: {
                    ingenio_id: codigoIngenio
                }
            }
        },
            Telemetria,
        {
            model: Maquina_Dia,
            where: {
                fecha_actividad: fechaHoy
            }
        }]
    }).then((data) => {
        if (data == null || data.length <= 0) {
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

repository.informeDiarioByFrente = async (codigoFrente, fechaHoy) => {
    let maquinaFounded, mensaje;

    await Maquina.findAll({
        include: [{
            model: Usuario,
            through: { attributes: [] },
            include: Prog_Desarrollo
        },
        {
            model: Frente,
            where: {
                frente_id: codigoFrente
            }
        },
            Telemetria,
        {
            model: Maquina_Dia,
            where: {
                fecha_actividad: fechaHoy
            }
        }]
    }).then((data) => {
        if (data == null || data.length <= 0) {
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

repository.informeDiarioByFecha = async (fechaBusqueda) => {
    let maquinaFounded, mensaje;

    await Maquina.findAll({
        include: [{
            model: Usuario,
            through: { attributes: [] },
            include: Prog_Desarrollo
        },
            Frente,
            Telemetria,
        {
            model: Maquina_Dia,
            where: {
                fecha_actividad: fechaBusqueda
            }
        }]
    }).then((data) => {
        if (data == null || data.length <= 0) {
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

/**
 * *********************************************
 * ************** INFORME SEMANAL **************
 * *********************************************
 */
repository.informeSemanalByMaquina = async (codigoMaquina, fechaInicio, fechaFin) => {
    let maquinaFounded, mensaje;
    startDate = '';
    endDate = '';

    await Maquina.findAll({
        where: {
            codigo_maquina: codigoMaquina
        },
        include: [{
            model: Usuario,
            through: { attributes: [] },
            include: Prog_Desarrollo
        },
            Frente,
            Maquina_Semana,
            Telemetria,
        {
            model: Maquina_Dia,
            where: {
                fecha_actividad: {
                    [Op.between]: [fechaInicio, fechaFin]
                }
            }
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

repository.informeSemanalByIngenio = async (codigoIngenio, fechaInicio, fechaFin) => {
    let maquinaFounded, mensaje;

    await Maquina.findAll({
        include: [{
            model: Usuario,
            through: { attributes: [] },
            include: Prog_Desarrollo
        },
        {
            model: Frente,
            include: {
                model: Ingenio,
                where: {
                    ingenio_id: codigoIngenio
                }
            }
        },
            Maquina_Semana,
            Telemetria,
        {
            model: Maquina_Dia,
            where: {
                fecha_actividad: {
                    [Op.between]: [fechaInicio, fechaFin]
                }
            }
        }]
    }).then((data) => {
        if (data == null || data.length <= 0) {
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

repository.informeSemanalByFrente = async (codigoFrente, fechaInicio, fechaFin) => {
    let maquinaFounded, mensaje;

    await Maquina.findAll({
        include: [{
            model: Usuario,
            through: { attributes: [] },
            include: Prog_Desarrollo
        },
        {
            model: Frente,
            where: {
                frente_id: codigoFrente
            }
        },
            Maquina_Semana,
            Telemetria,
        {
            model: Maquina_Dia,
            where: {
                fecha_actividad: {
                    [Op.between]: [fechaInicio, fechaFin]
                }
            }
        }]
    }).then((data) => {
        if (data == null || data.length <= 0) {
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


/**
 * ***********************************
 * ************** OTROS **************
 * ***********************************
 */
repository.countCasosByMaquina = async (codigoMaquina) => {
    let cantCasos, mensaje;
    await Caso.count({
        include: [{
            model: Maquina,
            where: {
                codigo_maquina: codigoMaquina
            }
        }]
    }).then((data) => {
        if (data.length <= 0) {
            mensaje = 'Sin Datos';
        } else {
            mensaje = 'Exito';
        }
        cantCasos = data;

    }).catch(err => {
        console.log("err -> " + err);
        console.log("err.message -> " + err.message);
        mensaje: 'Error',
            cantCasos = err.message || "Ocurrió un error al consultar cantidad de Casos.";
    });

    let respuesta = {
        message: mensaje,
        cuerpo: cantCasos
    }

    return respuesta;
}


module.exports = repository;