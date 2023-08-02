const repository = {};

const Maquina = require('../models/reporteria_crm/maquina.model');
const Mantenimiento = require('../models/reporteria_crm/mantenimiento.model');
const Registro_APP = require('../models/gestion/registro.app.model');

const Ingenio = require('../models/gestion/ingenio.model');
const Finca = require('../models/gestion/finca.model');
const Frente = require('../models/gestion/frente.model');

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
repository.findAllMaquinas = async () => {
    let respuesta, vacio = false;
    await Maquina.findAll()
        .then((data) => {
            if (data.length <= 0) {
                vacio = true;
                data = {
                    mensaje: 'sin datos'
                }
            }
            respuesta = {
                mensaje: !vacio ? 'Exito' : 'Sin Datos',
                datos: data
            }

        }).catch(err => {
            respuesta = {
                mensaje: 'Error',
                datos: err.message || "Ocurrió un error al consultar Maquinas."
            };
        });


    return respuesta;
}

repository.findMaquinaById = async (maquinaId) => {
    let maquinaFounded;
    await Maquina.findOne({
        where: {
            maquina_id: maquinaId
        }
    }).then((data) => {
        maquinaFounded = data;
        console.log(maquinaFounded.toJSON());

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
repository.findAllMantenimiento = async () => {
    let respuesta, vacio = false;
    await Mantenimiento.findAll()
        .then((data) => {
            if (data.length <= 0) {
                vacio = true;
                data = {
                    mensaje: 'sin datos'
                }
            }
            respuesta = {
                mensaje: !vacio ? 'Exito' : 'Sin Datos',
                datos: data
            }

        }).catch(err => {
            respuesta = {
                mensaje: 'Error',
                datos: err.message || "Ocurrió un error al consultar Mantenimiento."
            };
        });


    return respuesta;
}

repository.findMantenimientoById = async (mantenimientoId) => {
    let mantenimientoFounded;
    await Mantenimiento.findOne({
        where: {
            mantenimiento_id: mantenimientoId
        }
    }).then((data) => {
        mantenimientoFounded = data;
        console.log(mantenimientoFounded.toJSON());

    }).catch(err => {
        mantenimientoFounded = err.message || "Ocurrió un error al consultar Mantenimiento.";
    });

    return mantenimientoFounded;
}

/**
 * *******************************************
 * ************** MANTENIMIENTO **************
 * *******************************************
 */

repository.findAllRegistroAppByForeignKeys = async (maquinaId, ingenioId, fincaId, frenteId, mantenimientoId, horaInicio) => {
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
}

repository.createNewRegistroApp = async (maquina, ingenio, finca, frente, mantenimiento, newRegistro) => {
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
}

repository.createEmptyRegistroAppAsync = async (newRegistro) => {
    let registroAppFounded, registroAppAdded, mensajeReturn;
    console.log('newRegistro: ' + JSON.stringify(newRegistro));

    /**
     * probar consulta con Include...
     * probar where en include
     */
    await Registro_APP.findAll({
        where: {
            hora_inicio: newRegistro.hora_inicio
        },
        include: [Maquina, Ingenio, Finca, Frente, Mantenimiento]
    }).then((data) => {
        if (data.length <= 0) {
            registroAppFounded = '';
        } else {
            registroAppAdded = data;
        }
    }).catch((err) => {
        registroAppAdded = '';
        mensajeReturn = {
            mensaje: 'error',
            registro: err.message || "Ocurrió un error al consultar Registro_APP."
        };
    });

    if (registroAppFounded != '') {
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
            registro: "Ocurrió un error al consultar Registro_APP."
        };
    }

    return mensajeReturn;
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