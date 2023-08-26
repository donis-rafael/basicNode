const controller = {};
//const helper = require('../config/helper');
const adminService = require('../services/admin.service');

/**
 * **************************************
 * ************** INGENIOS **************
 * **************************************
 */
controller.getIngenios = async (req, res) => {
    let ingenios = await adminService.obtenerTodosLosIngenios();
    console.log(ingenios);

    let data = ingenios.datos;
    let estado;

    if ((ingenios.mensaje == 'Exito') || (ingenios.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (ingenios.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.setIngenio = async (req, res) => {

    // Valida información del Request
    if (!req.body.nombreIngenio) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombreIngenio } = req.body;

    let newIngenio = await adminService.guardarNuevoIngenio(nombreIngenio);

    let data = newIngenio.datos;
    let estado;

    if (newIngenio.mensaje == 'Exito') {
        estado = 200;
    } else if (newIngenio.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.updateIngenio = async (req, res) => {
    if (!req.body.idIngenio) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idIngenio, nombreIngenio } = req.body;

    let ingenioActualizado = await adminService.actualizarIngenio(idIngenio, nombreIngenio);

    let data = ingenioActualizado.datos;
    let estado;

    if (ingenioActualizado.mensaje == 'Exito') {
        estado = 200;
    } else if (ingenioActualizado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.deleteIngenio = async (req, res) => {
    if (!req.body.idIngenio) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idIngenio } = req.body;

    let ingenioEliminado = await adminService.eliminarFrente(idIngenio);

    let data = ingenioEliminado.datos;
    let estado;

    if (ingenioEliminado.mensaje == 'Exito') {
        if (ingenioEliminado.datos == 1) {
            data = `Ingenio con id: ${idIngenio}, eliminado exitosamente`
        } else {
            data = `No se eliminó ningún Ingenio con id: ${idIngenio}`
        }
        estado = 200;
    } else if (ingenioEliminado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

/**
 * ************************************
 * ************** FINCAS **************
 * ************************************
 */
controller.getFincas = async (req, res) => {
    let fincas = await adminService.obtenerTodasLasFincas();

    let data = fincas.datos;
    let estado;

    if ((fincas.mensaje == 'Exito') || (fincas.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (fincas.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.setFinca = async (req, res) => {
    if ((!req.body.nombreFinca) || (!req.body.ingenio)) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombreFinca, ingenio } = req.body;

    let newFinca = await adminService.guardarNuevaFinca(nombreFinca, ingenio);

    let data = newFinca.datos;
    let estado;

    if (newFinca.mensaje == 'Exito') {
        estado = 200;
    } else if (newFinca.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.updateFinca = async (req, res) => {
    if (!req.body.idFinca) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idFinca, nombreFinca } = req.body;

    let fincaActualizado = await adminService.actualizarFinca(idFinca, nombreFinca);

    let data = fincaActualizado.datos;
    let estado;

    if (fincaActualizado.mensaje == 'Exito') {
        estado = 200;
    } else if (fincaActualizado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.deleteFinca = async (req, res) => {
    if (!req.body.idFinca) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idFinca } = req.body;

    let fincaEliminada = await adminService.eliminarFinca(idFinca);

    let data = fincaEliminada.datos;
    let estado;

    if (fincaEliminada.mensaje == 'Exito') {
        if (fincaEliminada.datos == 1) {
            data = `Finca con id: ${idFinca}, eliminada exitosamente`
        } else {
            data = `No se eliminó ningúna Finca con id: ${idFinca}`
        }
        estado = 200;
    } else if (fincaEliminada.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

/**
 * *************************************
 * ************** FRENTES **************
 * *************************************
 */
controller.getFrentes = async (req, res) => {
    let frentes = await adminService.obtenerTodosLosFrentes();

    let data = frentes.datos;
    let estado;

    if ((frentes.mensaje == 'Exito') || (frentes.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (frentes.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.setFrente = async (req, res) => {
    if ((!req.body.nombreFrente) || (!req.body.ingenio)) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombreFrente, ingenio } = req.body;

    let newFrente = await adminService.guardarNuevoFrente(nombreFrente, ingenio);

    let data = newFrente.datos;
    let estado;

    if (newFrente.mensaje == 'Exito') {
        estado = 200;
    } else if (newFrente.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.updateFrente = async (req, res) => {
    if (!req.body.idFrente) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idFrente, nombreFrente } = req.body;

    let frenteActualizado = await adminService.actualizarFrente(idFrente, nombreFrente);

    let data = frenteActualizado.datos;
    let estado;

    if (frenteActualizado.mensaje == 'Exito') {
        estado = 200;
    } else if (frenteActualizado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.deleteFrente = async (req, res) => {
    if (!req.body.idFrente) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idFrente } = req.body;

    let frenteEliminado = await adminService.eliminarFrente(idFrente);

    let data = frenteEliminado.datos;
    let estado;

    if (frenteEliminado.mensaje == 'Exito') {
        if (frenteEliminado.datos == 1) {
            data = `Frente con id: ${idFrente}, eliminado exitosamente`
        } else {
            data = `No se eliminó ningún Frente con id: ${idFrente}`
        }
        estado = 200;
    } else if (frenteEliminado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

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

controller.getUsuarios_Rol_Ingenio_Cargo = async (req, res) => {
    let usuarios = await adminService.obtenerTodosLosUsuarios_Rol_Ingenio_Cargo();

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

controller.setUsuario = async (req, res) => {
    // Valida información del Request
    if (!req.body.nombreUsuario) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombreUsuario, correo, rol, cargo, ingenio, progDesarrollo } = req.body;

    let newUsuario = await adminService.guardarNuevoUsuario(nombreUsuario, correo, rol, cargo, ingenio, progDesarrollo);

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

}

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
 * **********************************************
 * ************** PROG. DESARROLLO **************
 * **********************************************
 */
controller.getProgramasDesarrollo = async (req, res) => {
    let programas = await adminService.obtenerTodosLosProgsDesarrollo();

    let data = programas.datos;
    let estado;

    if ((programas.mensaje == 'Exito') || (programas.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (programas.mensaje == 'Error') {
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
    const g = await sequelize.query("SELECT CONSTRAINT_NAME, CONSTRAINT_TYPE FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS WHERE TABLE_NAME='Tipo_maquina';");
    console.log(g);

    /*const [results, metadata] = await sequelize.query("Alter Table Tipo_maquina Drop Column tipo_maquina_id;");
    console.log(results);
    console.log(metadata);*/

    res.status(200).send('ejecutados exitosamente');
}

module.exports = controller;