const controller = {};
const informesService = require('../services/informes.service');

/**
 * ********************************************
 * ************** INFORME DIARIO **************
 * ********************************************
 */
controller.getInformeDiario_Maquina = async (req, res) => {
    if (!req.headers['codigo_maquina']) {
        res.status(400).send({
            message: "Carece de headers requeridos"
        });
        return;
    }

    const { codigo_maquina } = req.headers;

    let maquinas = await obtenerInforme('diarioMaquina', codigo_maquina);

    let data = maquinas.cuerpo;
    let estado;

    if ((maquinas.message == 'Exito') || (maquinas.message == 'Sin Datos')) {
        estado = 200;
    } else if (maquinas.message == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getInformeDiario_Ingenio = async (req, res) => {
    if (!req.headers['codigo_ingenio']) {
        res.status(400).send({
            message: "Carece de headers requeridos"
        });
        return;
    }

    const { codigo_ingenio } = req.headers;

    let maquinas = await obtenerInforme('diarioIngenio', codigo_ingenio);

    let data = maquinas.cuerpo;
    let estado;

    if ((maquinas.message == 'Exito') || (maquinas.message == 'Sin Datos')) {
        estado = 200;
    } else if (maquinas.message == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getInformeDiario_Frente = async (req, res) => {
    if (!req.headers['codigo_frente']) {
        res.status(400).send({
            message: "Carece de headers requeridos"
        });
        return;
    }

    const { codigo_frente } = req.headers;

    let maquinas = await obtenerInforme('diarioFrente', codigo_frente);

    let data = maquinas.cuerpo;
    let estado;

    if ((maquinas.message == 'Exito') || (maquinas.message == 'Sin Datos')) {
        estado = 200;
    } else if (maquinas.message == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getInformeDiario_Fecha = async (req, res) => {
    if (!req.headers['fecha']) {
        res.status(400).send({
            message: "Carece de headers requeridos"
        });
        return;
    }

    const { fecha } = req.headers;

    let maquinas = await obtenerInforme('diarioFecha', fecha);

    let data = maquinas.cuerpo;
    let estado;

    if ((maquinas.message == 'Exito') || (maquinas.message == 'Sin Datos')) {
        estado = 200;
    } else if (maquinas.message == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

/**
 * *********************************************
 * ************** INFORME SEMANAL **************
 * *********************************************
 */
controller.getInformeSemanal_Maquina = async (req, res) => {
    console.log(req.headers);
    if (!req.headers['codigo_maquina']) {
        res.status(400).send({
            message: "Carece de codigo_maquina"
        });
        return;
    }

    const { codigo_maquina } = req.headers;

    let maquinas = await obtenerInforme('semanalMaquina', codigo_maquina);

    let data = maquinas.cuerpo;
    let estado;

    if ((maquinas.message == 'Exito') || (maquinas.message == 'Sin Datos')) {
        estado = 200;
    } else if (maquinas.message == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getInformeSemanal_Ingenio = async (req, res) => {
    if (!req.headers['codigo_ingenio']) {
        res.status(400).send({
            message: "Carece de headers requeridos"
        });
        return;
    }

    const { codigo_ingenio } = req.headers;

    let maquinas = await obtenerInforme('semanalIngenio', codigo_ingenio);

    let data = maquinas.cuerpo;
    let estado;

    if ((maquinas.message == 'Exito') || (maquinas.message == 'Sin Datos')) {
        estado = 200;
    } else if (maquinas.message == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getInformeSemanal_Frente = async (req, res) => {
    if (!req.headers['codigo_frente']) {
        res.status(400).send({
            message: "Carece de headers requeridos"
        });
        return;
    }

    const { codigo_frente } = req.headers;

    let maquinas = await obtenerInforme('semanalFrente', codigo_frente);

    let data = maquinas.cuerpo;
    let estado;

    if ((maquinas.message == 'Exito') || (maquinas.message == 'Sin Datos')) {
        estado = 200;
    } else if (maquinas.message == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

/**
 * *************************************
 * ************** GENERAL **************
 * *************************************
 */
async function obtenerInforme(tipo, filtro) {

    switch (tipo) {
        case 'diarioMaquina':
            console.log('solicitud de informe diario con filtro de máquina');
            return await informesService.obtenerInformeDiario_Maquina(filtro);

        case 'diarioIngenio':
            console.log('solicitud de informe diario con filtro de ingenio');
            return await informesService.obtenerInformeDiario_Ingenio(filtro);

        case 'diarioFrente':
            console.log('solicitud de informe diario con filtro de frente');
            return await informesService.obtenerInformeDiario_Frente(filtro);

        case 'diarioFecha':
            console.log('solicitud de informe diario con filtro de fecha');
            return await informesService.obtenerInformeDiario_Fecha(filtro);

        case 'semanalMaquina':
            console.log('solicitud de informe semanal con filtro de máquina');
            return await informesService.obtenerInformeSemanal_Maquina(filtro);

        case 'semanalIngenio':
            console.log('solicitud de informe semanal con filtro de ingenio');
            return await informesService.obtenerInformeSemanal_Ingenio(filtro);

        case 'semanalFrente':
            console.log('solicitud de informe semanal con filtro de frente');
            return await informesService.obtenerInformeSemanal_Frente(filtro);

        default:
            console.log('ningún tipo de informe');
    }
}

module.exports = controller;
