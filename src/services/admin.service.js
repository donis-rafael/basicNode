const service = {};
const adminRepository = require('../repositories/admin_auth.repository');

// inicio Ingenios
service.obtenerTodosLosIngenios = async () => {
    ingenios = await adminRepository.findAllIngenios();

    return ingenios;
}

service.guardarNuevoIngenio = async (nombreIngenio) => {
    // Nuevo Ingenio
    const ingenio = {
        nombre_ingenio: nombreIngenio
    };
    return await adminRepository.createNewIngenio(ingenio);
}

service.actualizarIngenio = async (ingenioId, ingenioName) => {
    return await adminRepository.updateIngenio(ingenioId, ingenioName);
}

service.eliminarIngenio = async (ingenioId) => {
    return await adminRepository.destroyIngenio(ingenioId);
}
// fin Ingenios

// inicio Fincas
service.obtenerTodasLasFincas = async () => {
    fincas = await adminRepository.findAllFincas();

    return fincas;
}

service.guardarNuevaFinca = async (nombreFinca, ingenio) => {
    // Crea Finca
    const finca = {
        nombre_finca: nombreFinca
    };
    return await adminRepository.createNewFinca(finca, ingenio);
}

service.actualizarFinca = async (fincaId, fincaName) => {
    return await adminRepository.updateFinca(fincaId, fincaName);
}

service.eliminarFinca = async (fincaId) => {
    return await adminRepository.destroyFinca(fincaId);
}
// fin Fincas

// inicio Frentes
service.obtenerTodosLosFrentes = async () => {
    frentes = await adminRepository.findAllFrentes();

    return frentes;
}

service.guardarNuevoFrente = async (nombreFrente, ingenio) => {
    // Crea Frente
    const frente = {
        nombre_frente: nombreFrente
    };
    return await adminRepository.createNewFrente(frente, ingenio);
}

service.actualizarFrente = async (frenteId, frenteName) => {
    return await adminRepository.updateFrente(frenteId, frenteName);
}

service.eliminarFrente = async (frenteId) => {
    return await adminRepository.destroyFrente(frenteId);
}
// fin Frentes

// inicio Roles
service.obtenerTodosLosRoles = async () => {
    roles = await adminRepository.findAllRoles();

    return roles;
}

service.guardarNuevoRol = async (nombreRol) => {
    // Crea Rol
    const rol = {
        nombre_rol: nombreRol
    };

    return await adminRepository.createNewRol(rol);
}

service.actualizarRol = async (rolId, rolName) => {
    return await adminRepository.updateRol(rolId, rolName);
}

service.eliminarRol = async (rolId) => {
    return await adminRepository.destroyRol(rolId);
}
// fin Roles

// inicio Cargos
service.obtenerTodosLosCargos = async () => {
    cargos = await adminRepository.findAllCargos();

    return cargos;
}

service.guardarNuevoCargo = async (nombreCargo) => {
    // Crea Cargo
    const cargo = {
        nombre_cargo: nombreCargo
    };

    return await adminRepository.createNewCargo(cargo);
}

service.actualizarCargo = async (cargoId, cargoName) => {
    return await adminRepository.updateCargo(cargoId, cargoName);
}

service.eliminarCargo = async (cargoId) => {
    return await adminRepository.destroyCargo(cargoId);
}
// fin Cargos

// inicio Programa de Desarrollo
service.obtenerTodosLosProgsDesarrollo = async () => {
    programas = await adminRepository.findAllProgsDesarrollo();

    return programas;
}
// fin Programa de Desarrollo

// inicio Usuarios
service.obtenerTodosLosUsuarios = async () => {
    usuarios = await adminRepository.findAllUsers();

    return usuarios;
}

service.guardarNuevoUsuario = async (nombreUsuario, correo, rol, cargo, ingenio, progDesarrollo) => {
    // Crea Usuario
    const usuario = {
        nombre_usuario: nombreUsuario,
        correo: correo
    };

    return await adminRepository.createNewUsuario(usuario, rol, cargo, ingenio, progDesarrollo);
}
// fin Usuarios

module.exports = service;