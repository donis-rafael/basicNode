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
    usuarios = await adminRepository.findAllUserByRol(rol);

    return usuarios;
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