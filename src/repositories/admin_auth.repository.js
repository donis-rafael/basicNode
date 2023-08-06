const repository = {};

const Ingenio = require('../models/gestion/ingenio.model');
const Cargo = require('../models/gestion/cargo.model');
const Finca = require('../models/gestion/finca.model');
const Frente = require('../models/gestion/frente.model');
const Rol = require('../models/gestion/rol.model');
const Prog_Desarrollo = require('../models/gestion/fase.desarrollo.model');
const Usuario = require('../models/gestion/usuario.model');
const Credencial = require('../models/gestion/credencial.model');

// Relacion entre Ingenio y Finca
Ingenio.hasMany(Finca, { foreignKey: 'ingenio_id' });
Finca.belongsTo(Ingenio, { foreignKey: 'ingenio_id' });

// Relacion entre Ingenio y Frente
Ingenio.hasMany(Frente, { foreignKey: 'ingenio_id' });
Frente.belongsTo(Ingenio, { foreignKey: 'ingenio_id' });

// Relacion entre Usuario y Rol
Rol.hasMany(Usuario, { foreignKey: 'rol_id' });
Usuario.belongsTo(Rol, { foreignKey: 'rol_id' });

// Relacion entre Usuario e Ingenio
Ingenio.hasMany(Usuario, { foreignKey: 'ingenio_id' });
Usuario.belongsTo(Ingenio, { foreignKey: 'ingenio_id' });

// Relacion entre Usuario y Cargo
Cargo.hasMany(Usuario, { foreignKey: 'cargo_id' });
Usuario.belongsTo(Cargo, { foreignKey: 'cargo_id' });

// Relacion entre Usuario y Prog Desarrollo
Prog_Desarrollo.hasMany(Usuario, { foreignKey: 'programa_desarrollo' });
Usuario.belongsTo(Prog_Desarrollo, { foreignKey: 'programa_desarrollo' });

// Relacion entre Usuario y Credencial
Usuario.hasMany(Credencial, { foreignKey: 'usuario_id' });
Credencial.belongsTo(Usuario, { foreignKey: 'usuario_id' });

/**
 * **************************************
 * ************** INGENIOS **************
 * **************************************
 */
repository.findAllIngenios = async () => {
    let respuesta, vacio = false;
    await Ingenio.findAll()
        .then((data) => {
            /**
             * console.log("data: " + data);
                console.log("data.length: " + data.length);
                console.log("data[0].ingenio_id: " + data[0].ingenio_id);
                console.log("data[0].nombre_ingenio: " + data[0].nombre_ingenio);
             */
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

repository.findIngenioByNombre = async (ingenio) => {
    let ingenioFounded;
    await Ingenio.findOne({
        where: {
            nombre_ingenio: ingenio
        }
    }).then((data) => {
        ingenioFounded = data;
        console.log(ingenioFounded.toJSON());

    }).catch(err => {
        ingenioFounded = err.message || "Ocurrió un error al consultar Ingenio.";
    });

    return ingenioFounded;
}

repository.findIngenioById = async (ingenioID) => {
    let ingenioFounded;
    await Ingenio.findOne({
        where: {
            ingenio_id: ingenioID
        }
    }).then((data) => {
        ingenioFounded = data;
        console.log(ingenioFounded.toJSON());

    }).catch(err => {
        ingenioFounded = err.message || "Ocurrió un error al consultar Ingenio.";
    });

    return ingenioFounded;
}

repository.createNewIngenio = async (ingenio) => {
    let respuesta;
    // Guarda el Ingenio en la BD
    await Ingenio.create(ingenio)
        .then(data => {
            respuesta = {
                mensaje: 'Exito',
                datos: data
            }
        })
        .catch(err => {
            respuesta = {
                mensaje: 'Error',
                datos: err.message
            };
        });

    return respuesta;
}

repository.updateIngenio = async (ingenioId, ingenioName) => {
    let respuesta;

    // Actualiza el Ingenio en la BD
    await Ingenio.update(
        {
            nombre_ingenio: ingenioName
        },
        {
            where: {
                ingenio_id: ingenioId
            }
        }
    ).then(data => {
        respuesta = {
            mensaje: 'Exito',
            datos: data
        }
    }).catch(err => {
        respuesta = {
            mensaje: 'Error',
            datos: err.message
        };
    });

    return respuesta;
}

/**
 * ************************************
 * ************** FINCAS **************
 * ************************************
 */
repository.findAllFincas = async () => {
    let respuesta, vacio = false;
    await Finca.findAll()
        .then(data => {
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
    await Finca.findOne({
        where: {
            finca_id: fincaId
        }
    }).then((data) => {
        fincaFounded = data;
        console.log(fincaFounded.toJSON());

    }).catch(err => {
        fincaFounded = err.message || "Ocurrió un error al consultar Finca.";
    });

    return fincaFounded;
}

repository.createNewFinca = async (nuevaFinca, ingenio) => {
    let respuesta, ingenioFounded, fincaAdded;

    await Ingenio.findOne({
        where: {
            nombre_ingenio: ingenio
        }
    }).then((data) => {
        ingenioFounded = data;

    }).catch((err) => {
        console.log(err);
        respuesta = {
            mensaje: 'Error',
            datos: {
                mensaje: `Error almacenando frente = ${nuevaFinca.nombre_finca}`,
                content: err.message || `Error almacenando frente = ${nuevaFinca.nombre_finca}`
            }
        };
    });

    if (ingenioFounded != null) {
        await Finca.create(nuevaFinca)
            .then((data) => {
                fincaAdded = data;
                return ingenioFounded.addFinca(fincaAdded);

            }).then((data) => {
                respuesta = {
                    mensaje: 'Exito',
                    datos: {
                        mensaje: 'finca creada exitosamente',
                        content: fincaAdded.nombre_finca
                    }
                }

            }).catch((err) => {
                console.log(err);
                respuesta = {
                    mensaje: 'Error',
                    datos: {
                        mensaje: 'Error almacenando finca',
                        content: err.message || 'Error almacenando finca'
                    }
                };
            });
    } else {
        respuesta = {
            mensaje: 'Error',
            datos: {
                mensaje: `Error almacenando finca = ${nuevaFinca.nombre_finca}`,
                content: `No se encuentra ingenio con nombre ${ingenio}`
            }
        };
    }
    return respuesta;
}

repository.updateFinca = async (fincaId, fincaName) => {
    let respuesta;

    // Actualiza el Finca en la BD
    await Finca.update(
        {
            nombre_finca: fincaName
        },
        {
            where: {
                finca_id: fincaId
            }
        }
    ).then(data => {
        respuesta = {
            mensaje: 'Exito',
            datos: data
        }
    }).catch(err => {
        respuesta = {
            mensaje: 'Error',
            datos: err.message
        };
    });

    return respuesta;
}

/**
 * *************************************
 * ************** FRENTES **************
 * *************************************
 */
repository.findAllFrentes = async () => {
    let respuesta, vacio = false;
    await Frente.findAll()
        .then(data => {
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

repository.findFrenteById = async (frenteId) => {
    let frenteFounded;
    await Frente.findOne({
        where: {
            frente_id: frenteId
        }
    }).then((data) => {
        frenteFounded = data;
        console.log(frenteFounded.toJSON());

    }).catch(err => {
        frenteFounded = err.message || "Ocurrió un error al consultar Frente.";
    });

    return frenteFounded;
}

repository.createNewFrente = async (nuevoFrente, ingenio) => {
    let respuesta, ingenioFounded, frenteAdded;

    await Ingenio.findOne({
        where: {
            nombre_ingenio: ingenio
        }
    }).then((data) => {
        ingenioFounded = data;

    }).catch((err) => {
        console.log(err);
        respuesta = {
            mensaje: 'Error',
            datos: {
                mensaje: `Error almacenando frente = ${nuevoFrente.nombre_frente}`,
                content: err.message || `Error almacenando frente = ${nuevoFrente.nombre_frente}`
            }
        };
    });

    if (ingenioFounded != null) {
        await Frente.create(nuevoFrente)
            .then((data) => {
                frenteAdded = data;
                return ingenioFounded.addFrente(frenteAdded);
            }).then((data) => {
                respuesta = {
                    mensaje: 'Exito',
                    datos: {
                        mensaje: 'frente creado exitosamente',
                        content: frenteAdded.nombre_frente
                    }
                }

            }).catch((err) => {
                console.log(err);
                respuesta = {
                    mensaje: 'Error',
                    datos: {
                        mensaje: `Error almacenando frente = ${nuevoFrente.nombre_frente}`,
                        content: err.message || `Error almacenando frente = ${nuevoFrente.nombre_frente}`
                    }
                };
            });
    } else {
        respuesta = {
            mensaje: 'Error',
            datos: {
                mensaje: `Error almacenando frente = ${nuevoFrente.nombre_frente}`,
                content: `No se encuentra ingenio con nombre ${ingenio}`
            }
        };
    }

    return respuesta;
}

repository.updateFrente = async (frenteId, frenteName) => {
    let respuesta;

    // Actualiza el Frente en la BD
    await Frente.update(
        {
            nombre_frente: frenteName
        },
        {
            where: {
                frente_id: frenteId
            }
        }
    ).then(data => {
        respuesta = {
            mensaje: 'Exito',
            datos: data
        }
    }).catch(err => {
        respuesta = {
            mensaje: 'Error',
            datos: err.message
        };
    });

    return respuesta;
}

/**
 * ***********************************
 * ************** ROLES **************
 * ***********************************
 */
repository.findAllRoles = async () => {
    let respuesta, vacio = false;
    await Rol.findAll()
        .then(data => {
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
                datos: err.message || "Ocurrió un error al consultar Roles."
            };
        });


    return respuesta;
}

repository.findRolByNombre = async (rol) => {
    let rolFounded;
    await Rol.findOne({
        where: {
            nombre_rol: rol
        }
    }).then((data) => {
        rolFounded = data;

    }).catch(err => {
        rolFounded = err.message || "Ocurrió un error al consultar Rol.";
    });

    return rolFounded;
}

repository.createNewRol = async (nuevoRol) => {
    let respuesta;

    // Guarda el Rol en la BD
    await Rol.create(nuevoRol)
        .then(data => {
            respuesta = {
                mensaje: 'Exito',
                datos: data
            }
        })
        .catch(err => {
            respuesta = {
                mensaje: 'Error',
                datos: err.message
            };
        });

    return respuesta;
}

repository.updateRol = async (rolId, rolName) => {
    let respuesta;

    // Guarda el Rol en la BD
    await Rol.update(
        {
            nombre_rol: rolName
        },
        {
            where: {
                rol_id: rolId
            }
        }
    ).then(data => {
        respuesta = {
            mensaje: 'Exito',
            datos: data
        }
    }).catch(err => {
        respuesta = {
            mensaje: 'Error',
            datos: err.message
        };
    });

    return respuesta;
}

/**
 * ************************************
 * ************** CARGOS **************
 * ************************************
 */
repository.findAllCargos = async () => {
    let respuesta, vacio = false;
    await Cargo.findAll()
        .then(data => {
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
                datos: err.message || "Ocurrió un error al consultar Cargos."
            };
        });


    return respuesta;
}

repository.findCargoByNombre = async (cargo) => {
    let cargoFounded;
    await Cargo.findOne({
        where: {
            nombre_cargo: cargo
        }
    }).then((data) => {
        cargoFounded = data;

    }).catch(err => {
        cargoFounded = err.message || "Ocurrió un error al consultar Cargo.";
    });

    return cargoFounded;
}

repository.createNewCargo = async (nuevoCargo) => {
    let respuesta;

    // Guarda el Cargo en la BD
    await Cargo.create(nuevoCargo)
        .then(data => {
            respuesta = {
                mensaje: 'Exito',
                datos: data
            }
        })
        .catch(err => {
            respuesta = {
                mensaje: 'Error',
                datos: err.message
            };
        });

    return respuesta;
}

repository.updateCargo = async (cargoId, cargoName) => {
    let respuesta;

    // Actualiza el Cargo en la BD
    await Cargo.update(
        {
            nombre_cargo: cargoName
        },
        {
            where: {
                cargo_id: cargoId
            }
        }
    ).then(data => {
        respuesta = {
            mensaje: 'Exito',
            datos: data
        }
    }).catch(err => {
        respuesta = {
            mensaje: 'Error',
            datos: err.message
        };
    });

    return respuesta;
}

/**
 * **********************************************
 * ************** PROG. DESARROLLO **************
 * **********************************************
 */
repository.findAllProgsDesarrollo = async () => {
    let respuesta, vacio = false;
    await Prog_Desarrollo.findAll()
        .then(data => {
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
                datos: err.message || "Ocurrió un error al consultar Programa de desarrollo."
            };
        });


    return respuesta;
}

repository.findProgDesarrolloByNombre = async (progDesarrollo) => {
    let progDesarrolloFounded;
    await Prog_Desarrollo.findOne({
        where: {
            nombre_programa_desarrollo: progDesarrollo
        }
    }).then((data) => {
        progDesarrolloFounded = data;

    }).catch(err => {
        progDesarrolloFounded = err.message || "Ocurrió un error al consultar programa Desarrollo.";
    });

    return progDesarrolloFounded;
}

/**
 * **************************************
 * ************** USUARIOS **************
 * **************************************
 */
repository.findAllUsers = async () => {
    let respuesta, vacio = false;
    await Usuario.findAll()
        .then(data => {
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
                datos: err.message || "Ocurrió un error al consultar Usuarios."
            };
        });


    return respuesta;
}

repository.findAllUserByRol = async (rol) => {
    let rolFounded, respuesta, vacio = false;
    await Rol.findOne({
        where: {
            nombre_rol: rol
        }
    }).then((data) => {
        if (data.length <= 0) {
            vacio = true;
        } else {
            console.log(data.toJSON());
            rolFounded = data;
        }

    }).catch(err => {
        respuesta = {
            mensaje: 'Error',
            datos: err.message || "Ocurrió un error al consultar Roles."
        };
    });

    if (!vacio) {
        await rolFounded.getUsuarios().then((data) => {
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
                datos: err.message || "Ocurrió un error al consultar Usuarios."
            };
        });
    } else {
        data = {
            mensaje: 'No existe rol'
        }

        respuesta = {
            mensaje: 'Sin Datos',
            datos: data
        }
    }


    return respuesta;
}

repository.findUserById = async (userId) => {
    let usuarioFounded;
    await Usuario.findOne({
        where: {
            usuario_id: userId
        },
        include: [Rol, Ingenio]
    }).then((data) => {
        usuarioFounded = data;
        console.log(usuarioFounded.toJSON());

    }).catch(err => {
        usuarioFounded = err.message || "Ocurrió un error al consultar usuario.";
    });

    return usuarioFounded;
}

repository.createNewUsuario = async (nuevoUsuario, rol, cargo, ingenio, progDesarrollo) => {
    let respuesta;
    let ingenioFounded, rolFounded, cargoFounded, progDesarrolloFounded, userAdded;

    if (ingenio) {
        ingenioFounded = await repository.findIngenioByNombre(ingenio);
    } else {
        ingenioFounded = null;
    }

    if (rol) {
        rolFounded = await repository.findRolByNombre(rol);
    } else {
        rolFounded = null;
    }

    if (cargo) {
        cargoFounded = await repository.findCargoByNombre(cargo);
    } else {
        cargoFounded = null;
    }

    if (progDesarrollo) {
        progDesarrolloFounded = await repository.findProgDesarrolloByNombre(progDesarrollo);
    } else {
        progDesarrolloFounded = null;
    }

    let UserObject = await repository.createEmptyUserAsync(nuevoUsuario);
    userAdded = UserObject.usuario;

    if (UserObject.mensaje != 'error') {
        if (ingenioFounded != null) {
            await relacionarIngenioUsuario(userAdded, ingenioFounded);
        }

        if (rolFounded != null) {
            await relacionarRolUsuario(userAdded, rolFounded);
        }

        if (cargoFounded != null) {
            await relacionarCargiUsuario(userAdded, cargoFounded);
        }

        if (progDesarrolloFounded != null) {
            await relacionarProgramaUsuario(userAdded, progDesarrolloFounded);
        }

        respuesta = {
            mensaje: 'Exito',
            datos: {
                mensaje: 'usuario creado exitosamente',
                content: userAdded
            }
        }

    } else {
        respuesta = {
            mensaje: 'Error',
            datos: {
                mensaje: 'Error creando Usuario',
                content: UserObject.usuario
            }
        };
    }

    return respuesta;
}

repository.createEmptyUserAsync = async (newUser) => {
    let userAdded, mensajeReturn;
    console.log('newUser: ' + JSON.stringify(newUser))
    await Usuario.create(newUser).
        then((data) => {
            userAdded = data;
            mensajeReturn = {
                mensaje: 'exito',
                usuario: userAdded
            };
        }).catch(err => {
            console.log(err, newUser.nombre_usuario);
            mensajeReturn = {
                mensaje: 'error',
                usuario: err.message || "Ocurrió un error al almacenar Usuario."
            };
        });

    return mensajeReturn;
}

/**
 * ******************************************
 * ************** CREDENCIALES **************
 * ******************************************
 */
repository.login = async (userSearch) => {
    let credFounded, mensaje;
    await Credencial.findOne({
        where: {
            user: userSearch
        },
        include: [Usuario]
    }).then((data) => {
        mensaje = 'exito';
        credFounded = data;

    }).catch(err => {
        mensaje = 'error';
        credFounded = err.message || "Ocurrió un error al consultar sesión.";
    });

    let respuesta = {
        message: mensaje,
        cuerpo: credFounded
    }

    return respuesta;
}

repository.createNewCredencial = async (credencial, usuarioNew) => {
    let respuesta, credencialAdded;

    let CredObject = await repository.createEmptyCredencialAsync(credencial);
    credencialAdded = CredObject.credencial;

    if (CredObject.mensaje != 'error') {
        let relacion = await relacionarUsuarioCredencial(credencialAdded, usuarioNew);

        if (relacion == 'exito') {

            respuesta = {
                mensaje: 'Exito',
                datos: {
                    mensaje: 'credencial creada exitosamente',
                    content: credencialAdded
                }
            }
        } else {
            respuesta = {
                mensaje: 'Error',
                datos: {
                    mensaje: 'Error relacionando Credencial',
                    content: 'Credencial creada pero no se pudo relacionar con el Usuario'
                }
            };
        }

    } else {
        respuesta = {
            mensaje: 'Error',
            datos: {
                mensaje: 'Error creando Credencial',
                content: CredObject.credencial
            }
        };
    }

    return respuesta;
}

repository.createEmptyCredencialAsync = async (newCredential) => {
    let credAdded, mensajeReturn;
    console.log('newCredential: ' + JSON.stringify(newCredential));
    await Credencial.create(newCredential).
        then((data) => {
            credAdded = data;
            mensajeReturn = {
                mensaje: 'exito',
                credencial: credAdded
            };
        }).catch(err => {
            console.log(err, newCredential.user);
            mensajeReturn = {
                mensaje: 'error',
                credencial: err.message || "Ocurrió un error al almacenar Credencial."
            };
        });

    return mensajeReturn;
}

repository.findAllCreds = async () => {
    let respuesta, vacio = false;
    await Credencial.findAll()
        .then(data => {
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
                datos: err.message || "Ocurrió un error al consultar Credenciales."
            };
        });


    return respuesta;
}

/**
 * *****************************************************
 * ************** FUNCIONES DE RELACIONES **************
 * *****************************************************
 */

async function relacionarIngenioUsuario(userAdded, ingenioFounded) {
    let mensajeReturn;
    await ingenioFounded.addUsuario(userAdded).
        then((data) => {
            mensajeReturn = 'exito';
        }).catch((err) => {
            mensajeReturn = err.mensaje;
        })

    return mensajeReturn;
}

async function relacionarRolUsuario(userAdded, rolFounded) {
    let mensajeReturn;
    await rolFounded.addUsuario(userAdded).
        then((data) => {
            mensajeReturn = 'exito';
        }).catch((err) => {
            mensajeReturn = err.mensaje;
        })

    return mensajeReturn;
}

async function relacionarCargiUsuario(userAdded, cargoFounded) {
    let mensajeReturn;
    await cargoFounded.addUsuario(userAdded).
        then((data) => {
            mensajeReturn = 'exito';
        }).catch((err) => {
            mensajeReturn = err.mensaje;
        })

    return mensajeReturn;
}

async function relacionarProgramaUsuario(userAdded, progDesarrolloFounded) {
    let mensajeReturn;
    await progDesarrolloFounded.addUsuario(userAdded).
        then((data) => {
            mensajeReturn = 'exito';
        }).catch((err) => {
            mensajeReturn = err.mensaje;
        })

    return mensajeReturn;
}

async function relacionarUsuarioCredencial(credencialAdded, userAdded) {
    let mensajeReturn;
    await userAdded.addCredencial(credencialAdded).
        then((data) => {
            mensajeReturn = 'exito';
        }).catch((err) => {
            mensajeReturn = err.mensaje;
        })

    return mensajeReturn;
}

module.exports = repository;