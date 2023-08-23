const service = {};
const adminRepository = require('../repositories/admin_auth.repository');
const appRepository = require('../repositories/appMovil.repository');

service.obtenerTodosLosIngenios = async () => {
    ingenios = await adminRepository.findAllIngenios();

    return ingenios;
}

service.obtenerTodasLasFincas = async () => {
    fincas = await adminRepository.findAllFincas();

    return fincas;
}

service.obtenerTodosLosFrentes = async () => {
    frentes = await adminRepository.findAllFrentes();

    return frentes;
}

service.obtenerTodasLasMaquinas = async () => {
    maquinas = await appRepository.findAllMaquinas();

    return maquinas;
}

service.obtenerTodosLosMantenimientos = async () => {
    mantenimientos = await appRepository.findAllMantenimiento();

    return mantenimientos;
}

service.obtenerTodosLosUsuariosPorRol = async (rol) => {
    let usuarios = await adminRepository.findAllUserByRol(rol);

    let usuariosResp = [];
    let datos = usuarios.datos;
    for (i = 0; i < datos.length; i++) {
        let credId = null, userCred = null, contra = null;
        console.log("datos[i].Credencials: " + JSON.stringify(datos[i].Credencials));
        if (datos[i].Credencials[0].length > 0) {
            credId = datos[i].Credencials.credencial_id;
            userCred = datos[i].Credencials.user;
            contra = datos[i].Credencials.contrasenia;
        }
        let usuario = {
            usuario_id: datos[i].usuario_id,
            nombre_usuario: datos[i].nombre_usuario,
            credencial_id: credId,
            user: userCred,
            contrasenia: contra,
        }
        console.log("USUARIO: " + JSON.stringify(usuario));
        usuariosResp.push(usuario);
    }

    respuesta = {
        mensaje: usuarios.mensaje,
        datos: usuariosResp
    }

    return respuesta;
}

service.guardarNuevoRegistroApp = async (maquinaId, ingenioId, fincaId, frenteId, mantenimientoId, operando, horaInicio, horaFinal, comentario, urlFoto) => {
    let maquinaFounded, ingenioFounded, fincaFounded, frenteFounded, mantenimientoFounded, registroExistenteFounded, respuesta;

    registroExistenteFounded = await appRepository.findAllRegistroAppByForeignKeys(maquinaId, ingenioId, fincaId, frenteId, mantenimientoId, horaInicio);

    if (registroExistenteFounded != '') {
        //retorna error/
        respuesta = {
            mensaje: 'Error',
            datos: {
                mensaje: 'Error creando Registro App',
                content: 'Ya existe un registro de app'
            }
        };
    } else {

        if (maquinaId) {
            maquinaFounded = await appRepository.findMaquinaById(maquinaId);
        } else {
            maquinaFounded = null;
        }

        if (ingenioId) {
            ingenioFounded = await adminRepository.findIngenioById(ingenioId);
        } else {
            ingenioFounded = null;
        }

        if (fincaId) {
            fincaFounded = await adminRepository.findFincaById(fincaId);
        } else {
            fincaFounded = null;
        }

        if (frenteId) {
            frenteFounded = await adminRepository.findFrenteById(frenteId);
        } else {
            frenteFounded = null;
        }

        if (mantenimientoId) {
            mantenimientoFounded = await appRepository.findMantenimientoById(mantenimientoId);
        } else {
            mantenimientoFounded = null;
        }

        // Crea RegistroApp
        const RegistroApp = {
            operando: operando,
            hora_inicio: horaInicio,
            hora_final: horaFinal,
            comentario: comentario
        };

        respuesta = await appRepository.createNewRegistroApp(maquinaFounded, ingenioFounded, fincaFounded, frenteFounded, mantenimientoFounded, RegistroApp);
    }

    return respuesta;
}

module.exports = service;