const controller = {};
//const helper = require('../config/helper');
const adminService = require('../services/admin.service');
const sequelize = require('../config/db');

/**
 * **************************************
 * ************** USUARIOS **************
 * **************************************
 */
controller.getUsuarios = async (req, res) => {
    let usuarios = await adminService.obtenerTodosLosUsuarios();

    let data = usuarios.datos;
    let estado;

    if ((usuarios.mensaje == 'Exito') || (usuarios.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (usuarios.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getUsuarios_Rol_Cargo = async (req, res) => {
    let usuarios = await adminService.obtenerTodosLosUsuarios_Rol_Cargo();

    let data = usuarios.datos;
    let estado;

    if ((usuarios.mensaje == 'Exito') || (usuarios.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (usuarios.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

// SE USA EL REGISTRO
/*controller.setUsuario = async (req, res) => {
    // Valida información del Request
    if (!req.body.nombreUsuario) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombreUsuario, correo, rol, cargo, ingenioId, ingenioNombre } = req.body;

    let newUsuario = await adminService.guardarNuevoUsuario(nombreUsuario, correo, rol, cargo, ingenioId, ingenioNombre);

    let data = newUsuario.datos;
    let estado;

    if (newUsuario.mensaje == 'Exito') {
        estado = 200;
    } else if (newUsuario.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);

}*/

/**
 * ***********************************
 * ************** ROLES **************
 * ***********************************
 */
controller.getRoles = async (req, res) => {
    let roles = await adminService.obtenerTodosLosRoles();

    let data = roles.datos;
    let estado;

    if ((roles.mensaje == 'Exito') || (roles.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (roles.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.setRol = async (req, res) => {
    if (!req.body.nombreRol) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombreRol } = req.body;

    let newRol = await adminService.guardarNuevoRol(nombreRol);

    let data = newRol.datos;
    let estado;

    if (newRol.mensaje == 'Exito') {
        estado = 200;
    } else if (newRol.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.updateRol = async (req, res) => {
    if (!req.body.idRol) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idRol, nombreRol } = req.body;

    let rolActualizado = await adminService.actualizarRol(idRol, nombreRol);

    let data = rolActualizado.datos;
    let estado;

    if (rolActualizado.mensaje == 'Exito') {
        estado = 200;
    } else if (rolActualizado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.deleteRol = async (req, res) => {
    if (!req.body.idRol) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idRol } = req.body;

    let rolEliminado = await adminService.eliminarRol(idRol);

    let data = rolEliminado.datos;
    let estado;

    if (rolEliminado.mensaje == 'Exito') {
        if (rolEliminado.datos == 1) {
            data = `Rol con id: ${idRol}, eliminado exitosamente`
        } else {
            data = `No se eliminó ningún Rol con id: ${idRol}`
        }
        estado = 200;
    } else if (rolEliminado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

/**
 * *******************************************
 * ************** MANTENIMIENTO **************
 * *******************************************
 */
controller.getMantenimiento = async (req, res) => {
    let mantenimientos = await adminService.obtenerTodosLosMantenimientos();

    let data = mantenimientos.datos;
    let estado;

    if ((mantenimientos.mensaje == 'Exito') || (mantenimientos.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (mantenimientos.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.setMantenimiento = async (req, res) => {
    if (!req.body.nombreMantenimiento) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombreMantenimiento } = req.body;

    let newMantenimiento = await adminService.guardarNuevoMantenimientos(nombreMantenimiento);

    let data = newMantenimiento.datos;
    let estado;

    if (newMantenimiento.mensaje == 'Exito') {
        estado = 200;
    } else if (newMantenimiento.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.updateMantenimiento = async (req, res) => {
    if (!req.body.idMantenimiento) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idMantenimiento, nombreMantenimiento } = req.body;

    let mantenimientoActualizado = await adminService.actualizarMantenimientos(idMantenimiento, nombreMantenimiento);

    let data = mantenimientoActualizado.datos;
    let estado;

    if (mantenimientoActualizado.mensaje == 'Exito') {
        estado = 200;
    } else if (mantenimientoActualizado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.deleteMantenimiento = async (req, res) => {
    if (!req.body.idMantenimiento) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idMantenimiento } = req.body;

    let mantenimientoEliminado = await adminService.eliminarMantenimientos(idMantenimiento);

    let data = mantenimientoEliminado.datos;
    let estado;

    if (mantenimientoEliminado.mensaje == 'Exito') {
        if (mantenimientoEliminado.datos == 1) {
            data = `Mantenimiento con id: ${idMantenimiento}, eliminado exitosamente`
        } else {
            data = `No se eliminó ningún Mantenimiento con id: ${idMantenimiento}`
        }
        estado = 200;
    } else if (mantenimientoEliminado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

/**
 * ************************************
 * ************** CARGOS **************
 * ************************************
 */
controller.getCargos = async (req, res) => {
    let cargos = await adminService.obtenerTodosLosCargos();

    let data = cargos.datos;
    let estado;

    if ((cargos.mensaje == 'Exito') || (cargos.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (cargos.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.setCargo = async (req, res) => {
    // Valida información del Request
    if (!req.body.nombreCargo) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombreCargo } = req.body;

    let newCargo = await adminService.guardarNuevoCargo(nombreCargo);

    let data = newCargo.datos;
    let estado;

    if (newCargo.mensaje == 'Exito') {
        estado = 200;
    } else if (newCargo.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.updateCargo = async (req, res) => {
    if (!req.body.idCargo) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idCargo, nombreCargo } = req.body;

    let cargoActualizado = await adminService.actualizarCargo(idCargo, nombreCargo);

    let data = cargoActualizado.datos;
    let estado;

    if (cargoActualizado.mensaje == 'Exito') {
        estado = 200;
    } else if (cargoActualizado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.deleteCargo = async (req, res) => {
    if (!req.body.idCargo) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idCargo } = req.body;

    let cargoEliminado = await adminService.eliminarCargo(idCargo);

    let data = cargoEliminado.datos;
    let estado;

    if (cargoEliminado.mensaje == 'Exito') {
        if (cargoEliminado.datos == 1) {
            data = `Cargo con id: ${idCargo}, eliminado exitosamente`
        } else {
            data = `No se eliminó ningún Cargo con id: ${idCargo}`
        }
        estado = 200;
    } else if (cargoEliminado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}


/**
 * 
 * SERVICIOS ADMINS
 *
 */

controller.execQuerys = async (req, res) => {
    /*const { tabla, condicion } = req.body;
    let consulta = 'SELECT * FROM ' + tabla;

    if (condicion !== ' ') {
        consulta += ' ' + condicion
    }
    let result = ''

    await sequelize.query(consulta, {
        type: sequelize.QueryTypes.SELECT
    })
        .then(resultados => {
            console.log(resultados); // Mostrar los resultados
            result = resultados
        })
        .catch(error => {
            console.error('Error en la consulta:', error);
        });

    /*const a = await sequelize.query("select column_name, data_type, character_maximum_length from INFORMATION_SCHEMA.COLUMNS where table_name = 'Registro_app';")
        .then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    console.log(a);*/

    res.status(200).send('ejecutados exitosamente\n' + result);
}

module.exports = controller;