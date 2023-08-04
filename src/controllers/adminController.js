const controller = {};
//const helper = require('../config/helper');
const adminService = require('../services/admin.service');
const sequelize = require('../config/db');

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


/**
 * 
 * SERVICIOS ADMINS
 *
 */

controller.execQuerys = async (req, res) => {
    const [results, metadata] = await sequelize.query("alter table Finca ALTER COLUMN ingenio_id int null;");
    const [results1, metadata1] = await sequelize.query("alter table Frente ALTER COLUMN ingenio_id int null;");
    const [results2, metadata2] = await sequelize.query("alter table Usuario ALTER COLUMN rol_id int null;");
    const [results3, metadata3] = await sequelize.query("alter table Usuario ALTER COLUMN ingenio_id int null;");
    const [results4, metadata4] = await sequelize.query("alter table Usuario ALTER COLUMN cargo_id int null;");
    const [results5, metadata5] = await sequelize.query("alter table Usuario ALTER COLUMN programa_desarrollo int null;");
    const [results6, metadata6] = await sequelize.query("alter table Registro_app ALTER COLUMN maquina_id int null;");
    const [results7, metadata7] = await sequelize.query("alter table Registro_app ALTER COLUMN ingenio_id int null;");
    const [results8, metadata8] = await sequelize.query("alter table Registro_app ALTER COLUMN finca_id int null;");
    const [results9, metadata9] = await sequelize.query("alter table Registro_app ALTER COLUMN frente_id int null;");
    const [results10, metadata10] = await sequelize.query("alter table Registro_app ALTER COLUMN mantenimiento_id int null;");
    const [results11, metadata11] = await sequelize.query("alter table Credencial ALTER COLUMN usuario_id int null;");
    const [results12, metadata12] = await sequelize.query("alter table Actividad_maquina_dia ALTER COLUMN maquina_id int null;");
    const [results13, metadata13] = await sequelize.query("alter table Actividad_maquina_semana ALTER COLUMN maquina_id int null;");
    const [results14, metadata14] = await sequelize.query("alter table Maquina ALTER COLUMN tipo_maquina_id int null;");
    const [results15, metadata15] = await sequelize.query("alter table Telemetria ALTER COLUMN maquina_id int null;");
    const [results16, metadata16] = await sequelize.query("alter table Usuario_maquina ALTER COLUMN usuario_id int null;");
    const [results17, metadata17] = await sequelize.query("alter table Usuario_maquina ALTER COLUMN frente_id int null;");
    console.log(results);
    console.log(metadata);
    console.log(results1);
    console.log(metadata1);
    console.log(results2);
    console.log(metadata2);
    console.log(results3);
    console.log(metadata3);
    console.log(results4);
    console.log(metadata4);
    console.log(results5);
    console.log(metadata5);
    console.log(results6);
    console.log(metadata6);
    console.log(results7);
    console.log(metadata7);
    console.log(results8);
    console.log(metadata8);
    console.log(results9);
    console.log(metadata9);
    console.log(results10);
    console.log(metadata10);
    console.log(results11);
    console.log(metadata11);
    console.log(results12);
    console.log(metadata12);
    console.log(results13);
    console.log(metadata13);
    console.log(results14);
    console.log(metadata14);
    console.log(results15);
    console.log(metadata15);
    console.log(results16);
    console.log(metadata16);
    console.log(results17);
    console.log(metadata17);

    res.status(200).send('ejecutados exitosamente');
}

module.exports = controller;