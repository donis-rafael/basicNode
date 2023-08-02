const service = {};
const helper = require('../config/helper');
const adminRepository = require('../repositories/admin_auth.repository');

service.registrarNuevoUsuario = async (user, password, nombreUsuario, correo, rol, ingenio, cargo, progDesarrollo) => {
    // ENCRIPTA CONTRASEÑA
    const passEncripted = await helper.encryptPassword(password);
    const tokenRegistro = await helper.encryptPassword(user + "_" + passEncripted);

    // Crea Usuario
    const usuario = {
        nombre_usuario: nombreUsuario,
        correo: correo
    };

    let userAdded = await adminRepository.createNewUsuario(usuario, rol, cargo, ingenio, progDesarrollo);
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

module.exports = service;