const controller = {};
const helper = require('../config/helper');
const authService = require('../services/auth.service');

controller.iniciarSesion = async (req, res) => {
    if (!req.headers['token']) {
        res.status(400).send({
            message: "Carece de token"
        });
        return;
    }

    const { token } = req.headers;
    const { user, password } = req.body;

    // VALIDAR TOKEN
    let cadenaCompara = helper.cadenaCompara(user);
    const match = await helper.comparaPassword(cadenaCompara, token);
    let cadenaComparaEncripted = await helper.encryptPassword(cadenaCompara);
    console.log(cadenaComparaEncripted);

    let mensaje, estado, data;

    if (match) {
        let sesion = await authService.iniciarSesion(user, password);

        let dataSesion = sesion.datos;

        if (sesion.mensaje == 'Exito') {
            mensaje = 'Exito';
            estado = 200;
        } else if (sesion.mensaje == 'Error') {
            mensaje = 'Error';
            estado = 500;
        } else {
            mensaje = 'Error';
            estado = 300;
            dataSesion = ''
        }

        data = {
            mensaje: mensaje,
            datos: dataSesion
        };
    } else {
        estado = 500;
        data = {
            mensaje: 'Error',
            datos: "Token no válido"
        };
    }

    res.status(estado).send(data);
}

controller.registro = async (req, res) => {
    const { user, password, nombreUsuario, correo, rol, ingenioId, cargo, ingenioNombre } = req.body;

    let newUsuario = await authService.registrarNuevoUsuario(user, password, nombreUsuario, correo, rol, ingenioId, cargo, ingenioNombre);

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

controller.getAllCredenciales = async (req, res) => {
    let creds = await authService.obtenerCredenciales();

    let data = creds.datos;
    let estado;

    if ((creds.mensaje == 'Exito') || (creds.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (creds.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

module.exports = controller;
