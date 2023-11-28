const service = {};
const adminRepository = require('../repositories/admin_auth.repository');

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

// inicio Usuarios
service.obtenerTodosLosUsuarios = async () => {
    usuarios = await adminRepository.findAllUsers();

    return usuarios;
}

service.obtenerTodosLosUsuarios_Rol_Cargo = async () => {
    usuarios = await adminRepository.findAllUsers_Rol_Cargo();

    return usuarios;
}

service.guardarNuevoUsuario = async (nombreUsuario, correo, rol, cargo) => {
    // Crea Usuario
    const usuario = {
        nombre_usuario: nombreUsuario,
        correo: correo
    };

    return await adminRepository.createNewUsuario(usuario, rol, cargo);
}
// fin Usuarios

module.exports = service;