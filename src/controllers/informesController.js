const controller = {};
const informesService = require('../services/informes.service');

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


controller.getInformeSemanal = async (req, res) => {

    // prepara consulta reporte
    // realizar petición a BD
    // armar objeto
    // retornar
    res.status(200).send("data");
}

controller.getInformeMensual = async (req, res) => {

    // prepara consulta reporte
    // realizar petición a BD
    // armar objeto
    // retornar
    res.status(200).send("data");
}

async function obtenerInforme(tipo, filtro) {

    switch (tipo) {
        case 'diarioMaquina':
            console.log('solicitud de informe diario con filtro de máquina');
            return await informesService.obtenerInformeDiario_Maquina(filtro);

        case 'semanalMaquina':
            console.log('solicitud de informe semanal con filtro de máquina');
            return await informesService.obtenerInformeSemanal_Maquina(filtro);

        default:
            console.log('ningún tipo de informe');
    }
}

module.exports = controller;
