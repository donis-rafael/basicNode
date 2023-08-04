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
    if (!req.body.rolId) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { rolId, nombreRol } = req.body;

    let rolActualizado = await adminService.actualizarRol(rolId, nombreRol);

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


module.exports = controller;