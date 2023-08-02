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
    let cadenaCompara = helper.cadenaCompara();
    const match = await helper.comparaPassword(cadenaCompara, token);

    let mensaje, estado, data;

    if (match) {
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
    const { user, password, nombreUsuario, correo, rol, ingenio, cargo, progDesarrollo } = req.body;

    let newUsuario = await authService.registrarNuevoUsuario(user, password, nombreUsuario, correo, rol, ingenio, cargo, progDesarrollo);

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

module.exports = controller;
