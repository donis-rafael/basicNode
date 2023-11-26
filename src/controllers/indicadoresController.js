const controller = {};
const indicadoresService = require('../services/indicadores.service');

/**
 * **************************************
 * *************** FINCAS ***************
 * **************************************
 */
controller.getFincas = async (req, res) => {
    let fincas = await indicadoresService.obtenerTodasLasFincas();
    //console.log(fincas);

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



module.exports = controller;