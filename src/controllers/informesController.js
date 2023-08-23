const controller = {};
const informesService = require('../services/informes.service');

controller.getInformeDiario_Maquina = async (req, res) => {
    if (!req.body.codigoMaquina) {
        res.status(400).send({
            message: "Carece de código máquina"
        });
        return;
    }

    const { codigoMaquina } = req.body;

    let maquinas = await informesService.obtenerInformeDiario_Maquina(codigoMaquina);

    let data = maquinas.datos;
    let estado;

    if ((maquinas.mensaje == 'Exito') || (maquinas.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (maquinas.mensaje == 'Error') {
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

module.exports = controller;
