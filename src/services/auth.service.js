const service = {};
const helper = require('../config/helper');
const adminRepository = require('../repositories/admin_auth.repository');

service.registrarNuevoUsuario = async (user, password, nombreUsuario, correo, rol, ingenioId, cargo, ingenioNombre) => {
    // ENCRIPTA CONTRASEÑA
    const passEncripted = await helper.encryptPassword(password);
    const tokenRegistro = await helper.encryptPassword(user + "_" + passEncripted);

    // Crea Usuario
    const usuario = {
        nombre_usuario: nombreUsuario,
        correo: correo
    };

    let userAdded = await adminRepository.createNewUsuario(usuario, rol, cargo, ingenioId, ingenioNombre);
    let respuesta;

    if (userAdded.mensaje == 'Exito') {
        // Crea Credencial
        const credential = {
            user: user,
            contrasenia: passEncripted,
            token: tokenRegistro
        }

        respuesta = await adminRepository.createNewCredencial(credential, userAdded.datos.content);

    } else {
        respuesta = {
            mensaje: 'Error',
            datos: {
                mensaje: 'Error creando Usuario',
                content: `No fue posible crear al usuario ${nombreUsuario}`
            }
        };
    }

    return respuesta;
}

service.iniciarSesion = async (usuario, contrasenia) => {
    let respuesta;
    let credencial = await adminRepository.login(usuario);

    if (credencial.message != 'error') {
        let sesion = credencial.cuerpo;

        const matchPass = await helper.comparaPassword(contrasenia, sesion.contrasenia);
        const matchTok = await helper.comparaPassword((usuario + "_" + sesion.contrasenia), sesion.token);

        if (matchPass && matchTok) {
            respuesta = {
                mensaje: 'Exito',
                datos: {
                    mensaje: 'Sesión Correcta',
                    content: sesion.user
                }
            };
        } else {
            respuesta = {
                mensaje: 'Error',
                datos: {
                    mensaje: 'Error iniciando sesión',
                    content: 'Contraseña incorrecta'
                }
            };
        }

    } else {
        respuesta = {
            mensaje: 'Error',
            datos: {
                mensaje: 'Error iniciando sesión',
                content: credencial.cuerpo
            }
        };
    }

    return respuesta;
}

service.obtenerCredenciales = async () => {
    creds = await adminRepository.findAllCreds();

    return creds;
}

module.exports = service;