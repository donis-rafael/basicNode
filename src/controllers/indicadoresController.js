const controller = {};
const indicadoresService = require('../services/indicadores.service');

/**
 * **************************************
 * *************** FINCAS ***************
 * **************************************
 */
controller.getFincas = async (req, res) => {
    let fincas = await indicadoresService.obtenerTodasLasFincas();
    console.log(fincas);

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

/**
 * **************************************
 * *************** FRENTES ***************
 * **************************************
 */
controller.getFrentes = async (req, res) => {
    let frentes = await indicadoresService.obtenerTodasLasFrentes();
    console.log(frentes);

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

/**
 * **************************************
 * *************** INGENIOS ***************
 * **************************************
 */
controller.getIngenios = async (req, res) => {
    let ingenios = await indicadoresService.obtenerTodasLasIngenios();
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

/**
 * **************************************
 * *************** MAQUINAS ***************
 * **************************************
 */
controller.getMaquinas = async (req, res) => {
    let maquinas = await indicadoresService.obtenerTodasLasMaquinas();
    console.log(maquinas);

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

module.exports = controller;