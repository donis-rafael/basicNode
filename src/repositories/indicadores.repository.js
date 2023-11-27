const repository = {};

const DM_Finca = require('../models/indicadores_crm/dm_Finca.model');
const DM_Frente = require('../models/indicadores_crm/dm_Frente.model');
const DM_Ingenio = require('../models/indicadores_crm/dm_Ingenio.model');
const DM_Maquina = require('../models/indicadores_crm/dm_Maquina.model');
/*
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
Registro_APP.belongsTo(Mantenimiento, { foreignKey: 'mantenimiento_id' });*/

/**
 * **************************************
 * *************** FINCAS ***************
 * **************************************
 */
repository.findAllFincas = async () => {
    let respuesta, vacio = false;
    await DM_Finca.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Fincas."
            };
        });


    return respuesta;
}

repository.findFincaById = async (fincaId) => {
    let fincaFounded;
    await DM_Finca.findOne({
        where: {
            id_Finca: fincaId
        }
    }).then((data) => {
        fincaFounded = data;
        console.log(fincaFounded.toJSON());

    }).catch(err => {
        fincaFounded = err.message || "Ocurrió un error al consultar Maquina.";
    });

    return fincaFounded;
}

/**
 * ***************************************
 * *************** FRENTES ***************
 * ***************************************
 */
repository.findAllFrentes = async () => {
    let respuesta, vacio = false;
    await DM_Frente.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Frentes."
            };
        });


    return respuesta;
}

/**
 * ****************************************
 * *************** INGENIOS ***************
 * ****************************************
 */
repository.findAllIngenios = async () => {
    let respuesta, vacio = false;
    await DM_Ingenio.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Ingenios."
            };
        });


    return respuesta;
}

/**
 * **************************************
 * ************** MAQUINAS **************
 * **************************************
 */
repository.findAllMaquinas = async () => {
    let respuesta, vacio = false;
    await DM_Maquina.findAll()
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

/**
 * **************************************
 * ************** MAQUINAS **************
 * **************************************
 *//*
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
*/


module.exports = repository;