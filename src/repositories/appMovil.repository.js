const repository = {};
const sequelize = require("sequelize");
const { Op } = require("sequelize");

const Mantenimiento = require('../models/gestion/mantenimiento.model');
const Registro_APP = require('../models/gestion/registro.app.model');

const Maquina = require('../models/indicadores_crm/dm_Maquina.model');
const Ingenio = require('../models/indicadores_crm/dm_Ingenio.model');
const Finca = require('../models/indicadores_crm/dm_Finca.model');
const Frente = require('../models/indicadores_crm/dm_Frente.model');

// Relacion entre Registro App y Maquina
Maquina.hasMany(Registro_APP, { foreignKey: 'maquina_id' });
Registro_APP.belongsTo(Maquina, { foreignKey: 'maquina_id' });

// Relacion entre Registro App y Ingenio
Ingenio.hasMany(Registro_APP, { foreignKey: 'ingenio_id' });
Registro_APP.belongsTo(Ingenio, { foreignKey: 'ingenio_id' });

// Relacion entre Registro App y Finca
Finca.hasMany(Registro_APP, { foreignKey: 'finca_id' });
Registro_APP.belongsTo(Finca, { foreignKey: 'finca_id' });

// Relacion entre Registro App y Frente
Frente.hasMany(Registro_APP, { foreignKey: 'frente_id' });
Registro_APP.belongsTo(Frente, { foreignKey: 'frente_id' });

// Relacion entre Registro App y Mantenimiento
Mantenimiento.hasMany(Registro_APP, { foreignKey: 'mantenimiento_id' });
Registro_APP.belongsTo(Mantenimiento, { foreignKey: 'mantenimiento_id' });

/**
 * **************************************
 * ************** MAQUINAS **************
 * **************************************
 */

repository.findMaquinaById = async (maquinaId) => {
    let maquinaFounded;
    await Maquina.findOne({
        where: {
            maquina_id: maquinaId
        }
    }).then((data) => {
        maquinaFounded = data;

    }).catch(err => {
        maquinaFounded = err.message || "Ocurrió un error al consultar Maquina.";
    });

    return maquinaFounded;
}

/**
 * *******************************************
 * ************** MANTENIMIENTO **************
 * *******************************************
 */
repository.findMantenimientoById = async (mantenimientoId) => {
    let mantenimientoFounded;
    await Mantenimiento.findOne({
        where: {
            mantenimiento_id: mantenimientoId
        }
    }).then((data) => {
        mantenimientoFounded = data;

    }).catch(err => {
        mantenimientoFounded = err.message || "Ocurrió un error al consultar Mantenimiento.";
    });

    return mantenimientoFounded;
}

/**
 * *******************************************
 * ************** REGISTRO APP ***************
 * *******************************************
 */

repository.findAllRegistroAppByForeignKeys = async (maquinaId, ingenioId, fincaId, frenteId, mantenimientoId, horaInicio) => {
    let registroAppFounded;
    await Registro_APP.findAll(
        {
            where: {
                [Op.and]: [
                    { hora_inicio: horaInicio },
                    { maquina_id: maquinaId },
                    { ingenio_id: ingenioId },
                    { finca_id: fincaId },
                    { frente_id: frenteId },
                    { mantenimiento_id: mantenimientoId }
                ]
            }
        }).then((data) => {
            if (data.length <= 0) {
                registroAppFounded = ' ';
            } else {
                registroAppFounded = data;
            }

        }).catch(err => {
            registroAppFounded = err.message || "Ocurrió un error al consultar registroApp.";
        });

    return registroAppFounded;
}

/*repository.findAllRegistroAppByForeignKeys = async (maquinaId, ingenioId, fincaId, frenteId, mantenimientoId, horaInicio) => {
    let registroAppFounded;
    await Registro_APP.findAll(
        {
            where: {
                hora_inicio: horaInicio
            },
            include: [
                {
                    model: Maquina,
                    where: {
                        maquina_id: maquinaId
                    }
                }, {
                    model: Ingenio,
                    where: {
                        ingenio_id: ingenioId
                    }
                }, {
                    model: Finca,
                    where: {
                        finca_id: fincaId
                    }
                }, {
                    model: Frente,
                    where: {
                        frente_id: frenteId
                    }
                }, {
                    model: Mantenimiento,
                    where: {
                        mantenimiento_id: mantenimientoId
                    }
                }
            ]
        }).then((data) => {
            if (data.length <= 0) {
                registroAppFounded = '';
            } else {
                registroAppFounded = data;
            }

        }).catch(err => {
            registroAppFounded = err.message || "Ocurrió un error al consultar registroApp.";
        });

    return registroAppFounded;
}*/

repository.findMaxPlusOneRegistroAppIndex = async () => {
    let maxIndexAppFounded;
    let respuesta;
    let vacio = true;
    let mensaje;
    await Registro_APP.max('registro_app_id')
        .then((data) => {
            if (data.length <= 0) {
                maxIndexAppFounded = '';
            } else {
                maxIndexAppFounded = data;
                vacio = false;
            }

            mensaje = !vacio ? 'Exito' : 'Sin Datos'

        }).catch(err => {
            mensaje = 'Error'
            maxIndexAppFounded = err.message || "Ocurrió un error al consultar registroApp.";
        });

    respuesta = {
        mensaje: mensaje,
        datos: maxIndexAppFounded
    }
    return respuesta;
}

repository.createNewRegistroApp = async (newRegistro) => {
    let respuesta;

    await Registro_APP.create(newRegistro).
        then((data) => {
            respuesta = {
                mensaje: 'Exito',
                datos: {
                    mensaje: 'Registro App creado exitosamente',
                    content: data
                }
            }
        }).catch(err => {
            respuesta = {
                mensaje: 'Error',
                registro: err.message || "Ocurrió un error al almacenar Registro_APP."
            };
        });

    return respuesta;
}

/*repository.createNewRegistroApp = async (maquina, ingenio, finca, frente, mantenimiento, newRegistro) => {
    let respuesta, registroAppAdded;
    let RegistroAdddedObject = await repository.createEmptyRegistroAppAsync(newRegistro);
    registroAppAdded = RegistroAdddedObject.registro;

    if (RegistroAdddedObject.mensaje != 'error') {
        if (maquina != null) {
            await relacionarRegistroAppMaquina(registroAppAdded, maquina);
        }

        if (ingenio != null) {
            await relacionarRegistroAppIngenio(registroAppAdded, ingenio);
        }

        if (finca != null) {
            await relacionarRegistroAppFinca(registroAppAdded, finca);
        }

        if (frente != null) {
            await relacionarRegistroAppFrente(registroAppAdded, frente);
        }

        if (mantenimiento != null) {
            await relacionarRegistroAppMantenimiento(registroAppAdded, mantenimiento);
        }

        respuesta = {
            mensaje: 'Exito',
            datos: {
                mensaje: 'Registro App creado exitosamente',
                content: registroAppAdded
            }
        }

    } else {
        respuesta = {
            mensaje: 'Error',
            datos: {
                mensaje: 'Error creando Registro App',
                content: RegistroAdddedObject.registro
            }
        };
    }

    return respuesta;
}*/

/*repository.createEmptyRegistroAppAsync = async (newRegistro) => {
    let registroAppFounded, registroAppAdded, mensajeReturn;

    await Registro_APP.findAll({
        where: {
            hora_inicio: newRegistro.hora_inicio
        },
        include: [Maquina, Ingenio, Finca, Frente, Mantenimiento]
    }).then((data) => {
        if (data.length <= 0) {
            registroAppFounded = ' ';
        } else {
            registroAppAdded = data;
        }
    }).catch((err) => {
        registroAppAdded = ' ';
        mensajeReturn = {
            mensaje: 'error',
            registro: err.message || "Ocurrió un error al consultar Registro_APP."
        };
    });

    if (registroAppFounded == ' ') {
        await Registro_APP.create(newRegistro).
            then((data) => {
                registroAppAdded = data;
                mensajeReturn = {
                    mensaje: 'exito',
                    registro: registroAppAdded
                };
            }).catch(err => {
                mensajeReturn = {
                    mensaje: 'error',
                    registro: err.message || "Ocurrió un error al almacenar Registro_APP."
                };
            });
    } else {
        mensajeReturn = {
            mensaje: 'error',
            registro: "ya existe registro con esos datos."
        };
    }

    return mensajeReturn;
}*/

repository.findAllRegistroApp = async () => {
    let registroAppFounded;
    await Registro_APP.findAll()
        .then((data) => {
            if (data.length <= 0) {
                registroAppFounded = '';
            } else {
                registroAppFounded = data;
            }

        }).catch(err => {
            registroAppFounded = err.message || "Ocurrió un error al consultar registroApp.";
        });

    return registroAppFounded;
}

repository.findAllRegistroAppComplete = async () => {
    let registroAppFounded;
    await Registro_APP.findAll(
        {
            include: [
                {
                    model: Maquina
                }, {
                    model: Ingenio
                }, {
                    model: Finca
                }, {
                    model: Frente
                }, {
                    model: Mantenimiento
                }
            ]
        }).then((data) => {
            if (data.length <= 0) {
                registroAppFounded = '';
            } else {
                registroAppFounded = data;
            }

        }).catch(err => {
            registroAppFounded = err.message || "Ocurrió un error al consultar registroApp.";
        });

    return registroAppFounded;
}

/**
 * *****************************************************
 * ************** FUNCIONES DE RELACIONES **************
 * *****************************************************
 */

async function relacionarRegistroAppMaquina(registroApp, maquina) {
    let mensajeReturn;
    await maquina.addRegistro_APP(registroApp).
        then((data) => {
            mensajeReturn = 'exito';
        }).catch((err) => {
            mensajeReturn = err.mensaje;
        })

    return mensajeReturn;
}

async function relacionarRegistroAppIngenio(registroApp, ingenio) {
    let mensajeReturn;
    await ingenio.addRegistro_APP(registroApp).
        then((data) => {
            mensajeReturn = 'exito';
        }).catch((err) => {
            mensajeReturn = err.mensaje;
        })

    return mensajeReturn;
}

async function relacionarRegistroAppFinca(registroApp, finca) {
    let mensajeReturn;
    await finca.addRegistro_APP(registroApp).
        then((data) => {
            mensajeReturn = 'exito';
        }).catch((err) => {
            mensajeReturn = err.mensaje;
        })

    return mensajeReturn;
}

async function relacionarRegistroAppFrente(registroApp, frente) {
    let mensajeReturn;
    await frente.addRegistro_APP(registroApp).
        then((data) => {
            mensajeReturn = 'exito';
        }).catch((err) => {
            mensajeReturn = err.mensaje;
        })

    return mensajeReturn;
}

async function relacionarRegistroAppMantenimiento(registroApp, mantenimiento) {
    let mensajeReturn;
    await mantenimiento.addRegistro_APP(registroApp).
        then((data) => {
            mensajeReturn = 'exito';
        }).catch((err) => {
            mensajeReturn = err.mensaje;
        })

    return mensajeReturn;
}


module.exports = repository;