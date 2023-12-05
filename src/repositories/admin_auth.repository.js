const repository = {};
const { Op } = require("sequelize");

const Ingenio = require('../models/indicadores_crm/dm_Ingenio.model');
const Cargo = require('../models/gestion/cargo.model');
const Rol = require('../models/gestion/rol.model');
const Usuario = require('../models/gestion/usuario.model');
const Credencial = require('../models/gestion/credencial.model');
const Mantenimiento = require('../models/gestion/mantenimiento.model');

// Relacion entre Usuario y Rol
Rol.hasMany(Usuario, { foreignKey: 'rol_id' });
Usuario.belongsTo(Rol, { foreignKey: 'rol_id' });

// Relacion entre Usuario e Ingenio
Ingenio.hasMany(Usuario, { foreignKey: 'ingenio_id' });
Usuario.belongsTo(Ingenio, { foreignKey: 'ingenio_id' });

// Relacion entre Usuario y Cargo
Cargo.hasMany(Usuario, { foreignKey: 'cargo_id' });
Usuario.belongsTo(Cargo, { foreignKey: 'cargo_id' });

// Relacion entre Usuario y Credencial
Usuario.hasMany(Credencial, { foreignKey: 'usuario_id' });
Credencial.belongsTo(Usuario, { foreignKey: 'usuario_id' });

/**
 * **************************************
 * ************** INGENIOS **************
 * **************************************
 */

repository.findIngenioById_Nombre = async (ingenioId, ingenioNombre) => {
    let ingenioFounded;
    await Ingenio.findOne({
        where: {
            [Op.and]: [
                { ingenio_id: ingenioId },
                { nombre_ingenio: ingenioNombre }
            ]
        }
    }).then((data) => {
        ingenioFounded = data;
        console.log(ingenioFounded.toJSON());

    }).catch(err => {
        ingenioFounded = err.message || "Ocurrió un error al consultar Ingenio.";
    });

    return ingenioFounded;
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

repository.destroyRol = async (rolId) => {
    let respuesta;

    // Elimina el Rol en la BD
    await Rol.destroy(
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

repository.destroyCargo = async (cargoId) => {
    let respuesta;

    // Elimina el Cargo en la BD
    await Cargo.destroy(
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
            rolFounded = data;
        }

    }).catch(err => {
        vacio = true;
        console.log("err " + err);
        respuesta = {
            mensaje: 'Error',
            datos: err.message || "Ocurrió un error al consultar Roles."
        };
    });

    if (!vacio) {
        await rolFounded.getUsuarios({
            include: [Credencial]
        }).then((data) => {
            if (data.length <= 0) {
                vacio = true;
                data = {
                    mensaje: 'Sin Datos'
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

repository.findAllUsers_Rol_Cargo = async () => {
    let respuesta, vacio = false;
    await Usuario.findAll({
        include: [Rol, Cargo]
    })
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

repository.createNewUsuario = async (nuevoUsuario, rol, cargo, ingenioId, ingenioNombre) => {
    let respuesta;
    let ingenioFounded, rolFounded, cargoFounded, userAdded;

    if (ingenioId && ingenioNombre) {
        ingenioFounded = await repository.findIngenioById_Nombre(ingenioId, ingenioNombre);
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
            await relacionarCargoUsuario(userAdded, cargoFounded);
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
    console.log("RESPUESTA: " + respuesta);

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
 * *******************************************
 * ************** MANTENIMIENTO **************
 * *******************************************
 */
repository.findAllMantenimiento = async () => {
    let respuesta, vacio = false;
    await Mantenimiento.findAll()
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
                datos: err.message || "Ocurrió un error al consultar Mantenimientos."
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

repository.createNewMantenimiento = async (nuevoMantenimiento) => {
    let respuesta;

    // Guarda el Mantenimiento en la BD
    await Mantenimiento.create(nuevoMantenimiento)
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

repository.updateMantenimiento = async (mantenimientoId, mantenimientoName) => {
    let respuesta;

    // Guarda el Mantenimiento en la BD
    await Mantenimiento.update(
        {
            nombre_mantenimiento: mantenimientoName
        },
        {
            where: {
                mantenimiento_id: mantenimientoId
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

repository.destroyMantenimiento = async (mantenimientoId) => {
    let respuesta;

    // Elimina el Mantenimiento en la BD
    await Mantenimiento.destroy(
        {
            where: {
                mantenimiento_id: mantenimientoId
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

async function relacionarCargoUsuario(userAdded, cargoFounded) {
    let mensajeReturn;
    await cargoFounded.addUsuario(userAdded).
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