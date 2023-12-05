const repository = {};

const DM_Finca = require('../models/indicadores_crm/dm_Finca.model');
const DM_Frente = require('../models/indicadores_crm/dm_Frente.model');
const DM_Ingenio = require('../models/indicadores_crm/dm_Ingenio.model');
const DM_Maquina = require('../models/indicadores_crm/dm_Maquina.model');

const DM_Ingenio_Frente = require('../models/indicadores_crm/dm_Ingenio_Frente.model');
const DM_Ingenio_Frente_Finca = require('../models/indicadores_crm/dm_Ingenio_Frente_Finca.model');
const DM_Ingenio_Frente_Finca_Equipo = require('../models/indicadores_crm/dm_Ingenio_Frente_Finca_Equipo.model');

// Indicadores Diarios
const IndDiariosCliente = require('../models/indicadores_crm/indDiariosCliente.model');
const IndDiariosCliente_Frente = require('../models/indicadores_crm/indDiariosClienteXFrente.model');
const IndDiariosCliente_Frente_Finca = require('../models/indicadores_crm/indDiariosClienteXFrenteXFinca.model');
const IndDiariosCliente_Frente_Finca_Equipo = require('../models/indicadores_crm/indDiariosClienteXFrenteXFincaXEquipo.model');

// Indicadores Semanales
const IndSemCliente = require('../models/indicadores_crm/indSemCliente.model');
const IndSemClienteXFrente = require('../models/indicadores_crm/indSemClienteXFrente.model');
const IndSemClienteXFrenteXFinca = require('../models/indicadores_crm/indSemClienteXFrenteXFinca.model');
const IndSemClienteXFrenteXFincaXEquipo = require('../models/indicadores_crm/indSemClienteXFrenteXFincaXEquipo.model');

// Indicadores Semanales Calendario
const IndSemCal_Cliente = require('../models/indicadores_crm/indSemCal_Cliente.model');
const IndSemCal_ClienteXFrente = require('../models/indicadores_crm/indSemCal_ClienteXFrente.model');
const IndSemCal_ClienteXFrenteXFinca = require('../models/indicadores_crm/indSemCal_ClienteXFrenteXFinca.model');
const IndSemCal_ClienteXFrenteXFincaXEquipo = require('../models/indicadores_crm/indSemCal_ClienteXFrenteXFincaXEquipo.model');


// Relacion entre Ingenio y Frente
DM_Ingenio.hasMany(DM_Ingenio_Frente, { foreignKey: 'id_cliente' });
DM_Ingenio_Frente.belongsTo(DM_Ingenio, { foreignKey: 'id_cliente' });

DM_Frente.hasMany(DM_Ingenio_Frente, { foreignKey: 'Frente' });
DM_Ingenio_Frente.belongsTo(DM_Frente, { foreignKey: 'Frente' });

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
 * ************************************************
 * *************** INGENIO - FRENTE ***************
 * ************************************************
 */
repository.findAll_Ingenio_Frente = async () => {
    let respuesta, vacio = false;
    await DM_Ingenio_Frente.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Ingenio-Frente."
            };
        });


    return respuesta;
}

/**
 * ********************************************************
 * *************** INGENIO - FRENTE - FINCA ***************
 * ********************************************************
 */
repository.findAll_Ingenio_Frente_Finca = async () => {
    let respuesta, vacio = false;
    await DM_Ingenio_Frente_Finca.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Ingenio-Frente-Finca."
            };
        });


    return respuesta;
}

/**
 * *****************************************************************
 * *************** INGENIO - FRENTE - FINCA - EQUIPO ***************
 * *****************************************************************
 */
repository.findAll_Ingenio_Frente_Finca_Equipo = async () => {
    let respuesta, vacio = false;
    await DM_Ingenio_Frente_Finca_Equipo.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Ingenio-Frente-Finca-Equipo."
            };
        });


    return respuesta;
}

/**
 * *************************************************
 * ************** INDICADORES DIARIOS **************
 * *************************************************
 */
repository.findAll_IndDiariosCliente = async () => {
    let respuesta, vacio = false;
    await IndDiariosCliente.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Indicadores diarios de cliente."
            };
        });


    return respuesta;
}

repository.findAll_IndDiariosCliente_Frente = async () => {
    let respuesta, vacio = false;
    await IndDiariosCliente_Frente.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Indicadores diarios de cliente - frente."
            };
        });


    return respuesta;
}

repository.findAll_IndDiariosCliente_Frente_Finca = async () => {
    let respuesta, vacio = false;

    await IndDiariosCliente_Frente_Finca.findAll({
        limit: 30000,
        order: [
            ['Fecha', 'DESC']]
    })
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
                datos: err.message || "Ocurrió un error al consultar Indicadores diarios de cliente - frente - finca."
            };
        });

    return respuesta;
}

repository.findAll_IndDiariosCliente_Frente_Finca_Equipo = async () => {
    let respuesta, vacio = false;
    await IndDiariosCliente_Frente_Finca_Equipo.findAll({
        limit: 20000,
        order: [
            ['Fecha', 'DESC']]
    })
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
                datos: err.message || "Ocurrió un error al consultar Indicadores diarios de cliente - frente - finca - equipo."
            };
        });


    return respuesta;
}

/**
 * ***************************************************
 * ************** INDICADORES SEMANALES **************
 * ***************************************************
 */
repository.findAll_IndSemCliente = async () => {
    let respuesta, vacio = false;
    await IndSemCliente.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Indicadores semanales de cliente."
            };
        });


    return respuesta;
}

repository.findAll_IndSemCliente_Frente = async () => {
    let respuesta, vacio = false;
    await IndSemClienteXFrente.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Indicadores semanales de cliente - frente."
            };
        });


    return respuesta;
}

repository.findAll_IndSemCliente_Frente_Finca = async () => {
    let respuesta, vacio = false;
    await IndSemClienteXFrenteXFinca.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Indicadores semanales de cliente - frente - finca."
            };
        });


    return respuesta;
}

repository.findAll_IndSemCliente_Frente_Finca_Equipo = async () => {
    let respuesta, vacio = false;
    await IndSemClienteXFrenteXFincaXEquipo.findAll()
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
            console.log('Error: ' + err);
            respuesta = {
                mensaje: 'Error',
                datos: err.message || "Ocurrió un error al consultar Indicadores semanales de cliente - frente - finca - equipo."
            };
        });


    return respuesta;
}

/**
 * **************************************************************
 * ************** INDICADORES SEMANALES CALENDARIO **************
 * **************************************************************
 */
repository.findAll_IndSemCal_Cliente = async () => {
    let respuesta, vacio = false;
    await IndSemCal_Cliente.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Indicadores semanales calendario de cliente."
            };
        });


    return respuesta;
}

repository.findAll_IndSemCal_Cliente_Frente = async () => {
    let respuesta, vacio = false;
    await IndSemCal_ClienteXFrente.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Indicadores semanales calendario de cliente - frente."
            };
        });


    return respuesta;
}

repository.findAll_IndSemCal_Cliente_Frente_Finca = async () => {
    let respuesta, vacio = false;
    await IndSemCal_ClienteXFrenteXFinca.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Indicadores semanales calendario de cliente - frente - finca."
            };
        });


    return respuesta;
}

repository.findAll_IndSemCal_Cliente_Frente_Finca_Equipo = async () => {
    let respuesta, vacio = false;
    await IndSemCal_ClienteXFrenteXFincaXEquipo.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Indicadores semanales calendario de cliente - frente - finca - equipo."
            };
        });


    return respuesta;
}

module.exports = repository;