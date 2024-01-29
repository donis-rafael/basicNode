const controller = {};
const helper = require('../config/helper');
const appService = require('../services/appMovil.service');

controller.getIngenios = async (req, res) => {
    if (!req.headers['token']) {
        res.status(400).send({
            message: "Carece de token"
        });
        return;
    }

    if (!req.params['user']) {
        res.status(400).send({
            message: "Carece de usuario"
        });
        return;
    }

    const { user } = req.params;
    const { token } = req.headers;

    // VALIDAR TOKEN
    let cadenaCompara = helper.cadenaCompara(user);
    let cadenaComparaEncripted = await helper.encryptPassword(cadenaCompara);
    console.log(cadenaComparaEncripted);

    const match = await helper.comparaPassword(cadenaCompara, token);

    let mensaje, estado, data;

    if (match) {
        console.log('Token válido');
        let ingenios = await appService.obtenerTodosLosIngenios();

        let dataIngenios = ingenios.datos;

        if ((ingenios.mensaje == 'Exito') || (ingenios.mensaje == 'Sin Datos')) {
            mensaje = 'Exito';
            estado = 200;
        } else if (ingenios.mensaje == 'Error') {
            mensaje = 'Error';
            estado = 500;
        } else {
            mensaje = 'Error';
            estado = 300;
            dataIngenios = ''
        }

        data = {
            mensaje: mensaje,
            datos: dataIngenios
        };
    } else {
        estado = 500;
        data = {
            mensaje: 'Error',
            datos: "Token no válido"
        };
    }

    res.status(estado).send(data);
};

controller.getFrentes = async (req, res) => {
    if (!req.headers['token']) {
        res.status(400).send({
            message: "Carece de token"
        });
        return;
    }

    if (!req.params['user']) {
        res.status(400).send({
            message: "Carece de usuario"
        });
        return;
    }

    const { user, ingenio } = req.params;
    const { token } = req.headers;

    // VALIDAR TOKEN
    let cadenaCompara = helper.cadenaCompara(user);
    const match = await helper.comparaPassword(cadenaCompara, token);

    let mensaje, estado, data;

    if (match) {
        let frentes = await appService.obtenerTodosLosFrentesPorIngenio(ingenio);

        if ((frentes.mensaje == 'Exito') || (frentes.mensaje == 'Sin Datos')) {
            mensaje = 'Exito';
            estado = 200;
        } else if (frentes.mensaje == 'Error') {
            mensaje = 'Error';
            estado = 500;
        } else {
            mensaje = 'Error';
            estado = 300;
        }

        data = frentes;
    } else {
        estado = 500;
        data = {
            mensaje: 'Error',
            datos: "Token no válido"
        };
    }

    res.status(estado).send(data);
};

controller.getFincas = async (req, res) => {
    if (!req.headers['token']) {
        res.status(400).send({
            message: "Carece de token"
        });
        return;
    }

    if (!req.params['user']) {
        res.status(400).send({
            message: "Carece de usuario"
        });
        return;
    }

    const { user, ingenio, frente } = req.params;
    const { token } = req.headers;

    // VALIDAR TOKEN
    let cadenaCompara = helper.cadenaCompara(user);
    const match = await helper.comparaPassword(cadenaCompara, token);

    let mensaje, estado, data;

    if (match) {
        let fincas = await appService.obtenerTodasLasFincas();

        let dataFincas = fincas.datos;

        if ((fincas.mensaje == 'Exito') || (fincas.mensaje == 'Sin Datos')) {
            mensaje = 'Exito';
            estado = 200;
        } else if (fincas.mensaje == 'Error') {
            mensaje = 'Error';
            estado = 500;
        } else {
            mensaje = 'Error';
            estado = 300;
            dataFincas = ''
        }

        data = {
            mensaje: mensaje,
            datos: dataFincas
        };

    } else {
        estado = 500;
        data = {
            mensaje: 'Error',
            datos: "Token no válido"
        };
    }

    res.status(estado).send(data);
};

controller.getMaquinas = async (req, res) => {
    if (!req.headers['token']) {
        res.status(400).send({
            message: "Carece de token"
        });
        return;
    }

    if (!req.params['user']) {
        res.status(400).send({
            message: "Carece de usuario"
        });
        return;
    }

    const { user } = req.params;
    const { token } = req.headers;

    // VALIDAR TOKEN
    let cadenaCompara = helper.cadenaCompara(user);
    const match = await helper.comparaPassword(cadenaCompara, token);

    let mensaje, estado, data;

    if (match) {
        let maquinas = await appService.obtenerTodasLasMaquinas();

        let dataMaquinas = maquinas.datos;

        if ((maquinas.mensaje == 'Exito') || (maquinas.mensaje == 'Sin Datos')) {
            mensaje = 'Exito';
            estado = 200;
        } else if (maquinas.mensaje == 'Error') {
            mensaje = 'Error';
            estado = 500;
        } else {
            mensaje = 'Error';
            estado = 300;
            dataMaquinas = ''
        }

        data = {
            mensaje: mensaje,
            datos: dataMaquinas
        };
    } else {
        estado = 500;
        data = {
            mensaje: 'Error',
            datos: "Token no válido"
        };
    }

    res.status(estado).send(data);
};

controller.getTipoMantenimiento = async (req, res) => {
    if (!req.headers['token']) {
        res.status(400).send({
            message: "Carece de token"
        });
        return;
    }

    if (!req.params['user']) {
        res.status(400).send({
            message: "Carece de usuario"
        });
        return;
    }

    const { user } = req.params;
    const { token } = req.headers;

    // VALIDAR TOKEN
    let cadenaCompara = helper.cadenaCompara(user);
    const match = await helper.comparaPassword(cadenaCompara, token);

    let mensaje, estado, data;

    if (match) {
        let mantenimientos = await appService.obtenerTodosLosMantenimientos();

        let dataMantenimientos = mantenimientos.datos;

        if ((mantenimientos.mensaje == 'Exito') || (mantenimientos.mensaje == 'Sin Datos')) {
            mensaje = 'Exito';
            estado = 200;
        } else if (mantenimientos.mensaje == 'Error') {
            mensaje = 'Error';
            estado = 500;
        } else {
            mensaje = 'Error';
            estado = 300;
            dataMantenimientos = ''
        }

        data = {
            mensaje: mensaje,
            datos: dataMantenimientos
        };
    } else {
        estado = 500;
        data = {
            mensaje: 'Error',
            datos: "Token no válido"
        };
    }

    res.status(estado).send(data);
};

controller.getUsuariosAppMovil = async (req, res) => {
    if (!req.headers['token']) {
        res.status(400).send({
            message: "Carece de token"
        });
        return;
    }

    if (!req.params['user']) {
        res.status(400).send({
            message: "Carece de usuario"
        });
        return;
    }

    const { user } = req.params;
    const { token } = req.headers;

    // VALIDAR TOKEN
    let cadenaCompara = helper.cadenaCompara(user);
    const match = await helper.comparaPassword(cadenaCompara, token);
    const rol = 'AppMovil';

    let mensaje, estado, data;

    if (match) {
        let usuarios = await appService.obtenerTodosLosUsuariosPorRol(rol);

        let dataUsuarios = usuarios.datos;

        if ((usuarios.mensaje == 'Exito') || (usuarios.mensaje == 'Sin Datos')) {
            mensaje = 'Exito';
            estado = 200;
        } else if (usuarios.mensaje == 'Error') {
            mensaje = 'Error';
            estado = 500;
        } else {
            mensaje = 'Error';
            estado = 300;
            dataUsuarios = ''
        }

        data = {
            mensaje: mensaje,
            datos: dataUsuarios
        };
    } else {
        estado = 500;
        data = {
            mensaje: 'Error',
            datos: "Token no válido"
        };
    }

    res.status(estado).send(data);
};

controller.getMaxIndexRegApp = async (req, res) => {
    if (!req.headers['token']) {
        res.status(400).send({
            message: "Carece de token"
        });
        return;
    }

    if (!req.params['user']) {
        res.status(400).send({
            message: "Carece de usuario"
        });
        return;
    }

    const { user } = req.params;
    const { token } = req.headers;

    // VALIDAR TOKEN
    let cadenaCompara = helper.cadenaCompara(user);
    const match = await helper.comparaPassword(cadenaCompara, token);

    let mensaje, estado, data;

    if (match) {
        let maxIndexPlus = await appService.obtenerMaxIndexPlusUno();

        let dataUsuarios = maxIndexPlus.datos;

        if ((maxIndexPlus.mensaje == 'Exito') || (maxIndexPlus.mensaje == 'Sin Datos')) {
            mensaje = 'Exito';
            estado = 200;
        } else if (maxIndexPlus.mensaje == 'Error') {
            mensaje = 'Error';
            estado = 500;
        } else {
            mensaje = 'Error';
            estado = 300;
            dataUsuarios = ''
        }

        data = {
            mensaje: mensaje,
            datos: dataUsuarios
        };
    } else {
        estado = 500;
        data = {
            mensaje: 'Error',
            datos: "Token no válido"
        };
    }

    res.status(estado).send(data);
};

controller.setRegistroApp = async (req, res) => {
    if (!req.headers['token']) {
        res.status(400).send({
            message: "Carece de token"
        });
        return;
    }

    if (!req.params['user']) {
        res.status(400).send({
            message: "Carece de usuario"
        });
        return;
    }

    const { user } = req.params;
    const { token } = req.headers;
    const { maquinaId, ingenioId, fincaId, frenteId, mantenimientoId, operando, horaInicio, horaFinal, comentario, foto } = req.body;

    // VALIDAR TOKEN
    let cadenaCompara = helper.cadenaCompara(user);
    const match = await helper.comparaPassword(cadenaCompara, token);

    let mensaje, estado, data;

    if (match) {
        let newRegistroapp = await appService.guardarNuevoRegistroApp(maquinaId, ingenioId,
            fincaId, frenteId, mantenimientoId, operando, horaInicio, horaFinal, comentario, foto);

        let dataRegistro = newRegistroapp.datos;

        console.log(JSON.stringify(newRegistroapp));

        if (newRegistroapp.mensaje == 'Exito') {
            estado = 200;
        } else if (newRegistroapp.mensaje == 'Error') {
            estado = 500;
        } else {
            estado = 300;
        }

        data = {
            mensaje: mensaje,
            datos: dataRegistro
        };

    } else {
        estado = 500;
        data = {
            mensaje: 'Error',
            datos: "Token no válido"
        };
    }

    res.status(estado).send(data);
};

controller.getIngeniosFrentes = async (req, res) => {
    if (!req.headers['token']) {
        res.status(400).send({
            message: "Carece de token"
        });
        return;
    }

    if (!req.params['user']) {
        res.status(400).send({
            message: "Carece de usuario"
        });
        return;
    }

    const { user } = req.params;
    const { token } = req.headers;

    // VALIDAR TOKEN
    let cadenaCompara = helper.cadenaCompara(user);
    let cadenaComparaEncripted = await helper.encryptPassword(cadenaCompara);
    console.log(cadenaComparaEncripted);

    const match = await helper.comparaPassword(cadenaCompara, token);

    let mensaje, estado, data;

    if (match) {
        console.log('Token válido');
        let ingen_frente = await appService.obtenerTodosLosIngeniosFrentes();

        let dataIngenios = ingen_frente.datos;

        if ((ingen_frente.mensaje == 'Exito') || (ingen_frente.mensaje == 'Sin Datos')) {
            mensaje = 'Exito';
            estado = 200;
        } else if (ingen_frente.mensaje == 'Error') {
            mensaje = 'Error';
            estado = 500;
        } else {
            mensaje = 'Error';
            estado = 300;
            dataIngenios = ''
        }

        data = {
            mensaje: mensaje,
            datos: dataIngenios
        };
    } else {
        estado = 500;
        data = {
            mensaje: 'Error',
            datos: "Token no válido"
        };
    }

    res.status(estado).send(data);
};

controller.getIngeniosFrentesFincas = async (req, res) => {
    if (!req.headers['token']) {
        res.status(400).send({
            message: "Carece de token"
        });
        return;
    }

    if (!req.params['user']) {
        res.status(400).send({
            message: "Carece de usuario"
        });
        return;
    }

    const { user } = req.params;
    const { token } = req.headers;

    // VALIDAR TOKEN
    let cadenaCompara = helper.cadenaCompara(user);
    let cadenaComparaEncripted = await helper.encryptPassword(cadenaCompara);
    console.log(cadenaComparaEncripted);

    const match = await helper.comparaPassword(cadenaCompara, token);

    let mensaje, estado, data;

    if (match) {
        console.log('Token válido');
        let ingen_frente_finc = await appService.obtenerTodosLosIngeniosFrentesFincas();

        let dataIngenios = ingen_frente_finc.datos;

        if ((ingen_frente_finc.mensaje == 'Exito') || (ingen_frente_finc.mensaje == 'Sin Datos')) {
            mensaje = 'Exito';
            estado = 200;
        } else if (ingen_frente_finc.mensaje == 'Error') {
            mensaje = 'Error';
            estado = 500;
        } else {
            mensaje = 'Error';
            estado = 300;
            dataIngenios = ''
        }

        data = {
            mensaje: mensaje,
            datos: dataIngenios
        };
    } else {
        estado = 500;
        data = {
            mensaje: 'Error',
            datos: "Token no válido"
        };
    }

    res.status(estado).send(data);
};

controller.getIngeniosFrentesFincasEquipos = async (req, res) => {
    if (!req.headers['token']) {
        res.status(400).send({
            message: "Carece de token"
        });
        return;
    }

    if (!req.params['user']) {
        res.status(400).send({
            message: "Carece de usuario"
        });
        return;
    }

    const { user } = req.params;
    const { token } = req.headers;

    // VALIDAR TOKEN
    let cadenaCompara = helper.cadenaCompara(user);
    let cadenaComparaEncripted = await helper.encryptPassword(cadenaCompara);
    console.log(cadenaComparaEncripted);

    const match = await helper.comparaPassword(cadenaCompara, token);

    let mensaje, estado, data;

    if (match) {
        console.log('Token válido');
        let ingen_frente_finc_equi = await appService.obtenerTodosLosIngeniosFrentesFincasEquipos();

        let dataIngenios = ingen_frente_finc_equi.datos;

        if ((ingen_frente_finc_equi.mensaje == 'Exito') || (ingen_frente_finc_equi.mensaje == 'Sin Datos')) {
            mensaje = 'Exito';
            estado = 200;
        } else if (ingen_frente_finc_equi.mensaje == 'Error') {
            mensaje = 'Error';
            estado = 500;
        } else {
            mensaje = 'Error';
            estado = 300;
            dataIngenios = ''
        }

        data = {
            mensaje: mensaje,
            datos: dataIngenios
        };
    } else {
        estado = 500;
        data = {
            mensaje: 'Error',
            datos: "Token no válido"
        };
    }

    res.status(estado).send(data);
};



/**
 * 
 * SERVICIOS ADMINS
 *
 */

controller.execQuerys = async (req, res) => {
    let ingen_frente_finc_equi = await appService.obtenerTodosLosRegistrosApp();

    data = {
        mensaje: 'mensaje',
        datos: ingen_frente_finc_equi
    };

    res.status(200).send(data);

}

module.exports = controller;