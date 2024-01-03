const service = {};
const adminRepository = require('../repositories/admin_auth.repository');
const indicadoresRepository = require('../repositories/indicadores.repository');
const appRepository = require('../repositories/appMovil.repository');

service.obtenerTodosLosIngenios = async () => {
    //ingenios = await adminRepository.findAllIngenios();
    ingenios = await indicadoresRepository.findAllIngenios();

    return ingenios;
}

service.obtenerTodasLasFincas = async () => {
    //fincas = await adminRepository.findAllFincas();
    fincas = await indicadoresRepository.findAllFincas();

    return fincas;
}

service.obtenerTodosLosFrentesPorIngenio = async (ingenio) => {
    let cuerpoFrentes = [];
    let frentesResponse;

    frentes = await indicadoresRepository.findAll_Ingenio_FrenteByIngenio(ingenio);

    if (frentes.mensaje != 'Sin Datos' && frentes.mensaje != 'Error') {

        frentes.datos.forEach(function (val) {
            cuerpoFrentes.push(val.Frente);
        });

        frentesResponse = {
            mensaje: frentes.mensaje,
            ingenio_id: ingenio,
            ingenio_nombre: 'frentes.datos[0].DM_Ingenio.nombre_ingenio',
            frentes: cuerpoFrentes
        };

    } else {
        frentesResponse = {
            mensaje: frentes.mensaje,
            ingenio_id: ingenio,
            ingenio_nombre: 'NA',
            frentes: frentes.datos
        }
    }

    return frentesResponse;
}

service.obtenerTodasLasMaquinas = async () => {
    //maquinas = await appRepository.findAllMaquinas();
    maquinas = await indicadoresRepository.findAllMaquinas();

    return maquinas;
}

service.obtenerTodosLosMantenimientos = async () => {
    mantenimientos = await adminRepository.findAllMantenimiento();

    return mantenimientos;
}

service.obtenerTodosLosUsuariosPorRol = async (rol) => {
    let usuarios = await adminRepository.findAllUserByRol(rol);

    let usuariosResp = [];
    let datos = usuarios.datos;

    for (i = 0; i < datos.length; i++) {
        let credId = null, userCred = null, contra = null;

        if (datos[i].Credencials.length > 0) {
            credId = datos[i].Credencials[0].credencial_id;
            userCred = datos[i].Credencials[0].user;
            contra = datos[i].Credencials[0].contrasenia;
        }

        let usuario = {
            usuario_id: datos[i].usuario_id,
            nombre_usuario: datos[i].nombre_usuario,
            credencial_id: credId,
            user: userCred,
            contrasenia: contra,
        }

        usuariosResp.push(usuario);
    }

    respuesta = {
        mensaje: usuarios.mensaje,
        datos: usuariosResp
    }

    return respuesta;
}

service.obtenerMaxIndexPlusUno = async () => {
    let respuesta = await appRepository.findMaxPlusOneRegistroAppIndex();

    let valor = respuesta.datos + 1;
    respuesta.datos = valor;

    return respuesta;
}

service.guardarNuevoRegistroApp = async (maquinaId, ingenioId, fincaId, frenteId, mantenimientoId, operando, horaInicio, horaFinal, comentario, foto) => {
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
            comentario: comentario,
            foto: foto
        };

        respuesta = await appRepository.createNewRegistroApp(maquinaFounded, ingenioFounded, fincaFounded, frenteFounded, mantenimientoFounded, RegistroApp);
    }

    return respuesta;
}

module.exports = service;