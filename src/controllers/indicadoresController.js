const controller = {};
const indicadoresService = require('../services/indicadores.service');

/**
 * **************************************
 * *************** FINCAS ***************
 * **************************************
 */
controller.getFincas = async (req, res) => {
    let fincas = await indicadoresService.obtenerTodasLasFincas();

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

/**
 * ************************************************
 * *************** INGENIO - FRENTE ***************
 * ************************************************
 */
controller.getIngeniosFrentes = async (req, res) => {
    let ing_frente = await indicadoresService.obtenerTodos_Ingeio_Frente();

    let data = ing_frente.datos;
    let estado;

    if ((ing_frente.mensaje == 'Exito') || (ing_frente.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (ing_frente.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

/**
 * ********************************************************
 * *************** INGENIO - FRENTE - FINCA ***************
 * ********************************************************
 */
controller.getIngeniosFrentesFincas = async (req, res) => {
    let ing_frente_finc = await indicadoresService.obtenerTodos_Ingeio_Frente_Finca();

    let data = ing_frente_finc.datos;
    let estado;

    if ((ing_frente_finc.mensaje == 'Exito') || (ing_frente_finc.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (ing_frente_finc.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

/**
 * *****************************************************************
 * *************** INGENIO - FRENTE - FINCA - EQUIPO ***************
 * *****************************************************************
 */
controller.getIngeniosFrentesFincasEquipos = async (req, res) => {
    let ing_frente_finc_equipo = await indicadoresService.obtenerTodos_Ingeio_Frente_Finca_Equipo();

    let data = ing_frente_finc_equipo.datos;
    let estado;

    if ((ing_frente_finc_equipo.mensaje == 'Exito') || (ing_frente_finc_equipo.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (ing_frente_finc_equipo.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

/**
 * *************************************************
 * ************** INDICADORES DIARIOS **************
 * *************************************************
 */
controller.getIndicadoresDiariosCliente = async (req, res) => {
    let indicadores_diarios_response = await indicadoresService.obtenerTodos_Indicadores_Diarios_Cliente();

    let data = indicadores_diarios_response.datos;
    let estado;

    if ((indicadores_diarios_response.mensaje == 'Exito') || (indicadores_diarios_response.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (indicadores_diarios_response.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getIndicadoresDiariosCliente_Frente = async (req, res) => {
    let indicadores_diarios_response = await indicadoresService.obtenerTodos_Indicadores_Diarios_Cliente_Frente();

    let data = indicadores_diarios_response.datos;
    let estado;

    if ((indicadores_diarios_response.mensaje == 'Exito') || (indicadores_diarios_response.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (indicadores_diarios_response.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getIndicadoresDiariosCliente_Frente_Finca = async (req, res) => {
    let indicadores_diarios_response = await indicadoresService.obtenerTodos_Indicadores_Diarios_Cliente_Frente_Finca();

    data = indicadores_diarios_response.datos;
    let estado;

    if ((indicadores_diarios_response.mensaje == 'Exito') || (indicadores_diarios_response.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (indicadores_diarios_response.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getIndicadoresDiariosCliente_Frente_Finca_Equipo = async (req, res) => {
    let indicadores_diarios_response = await indicadoresService.obtenerTodos_Indicadores_Diarios_Cliente_Frente_Finca_Equipo();

    let data = indicadores_diarios_response.datos;
    let estado;

    if ((indicadores_diarios_response.mensaje == 'Exito') || (indicadores_diarios_response.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (indicadores_diarios_response.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

/**
 * ***************************************************
 * ************** INDICADORES SEMANALES **************
 * ***************************************************
 */
controller.getIndicadoresSemanalesCliente = async (req, res) => {
    let indicadores_semanales_response = await indicadoresService.obtenerTodos_Indicadores_Semanales_Cliente();

    let data = indicadores_semanales_response.datos;
    let estado;

    if ((indicadores_semanales_response.mensaje == 'Exito') || (indicadores_semanales_response.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (indicadores_semanales_response.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getIndicadoresSemanalesCliente_Frente = async (req, res) => {
    let indicadores_semanales_response = await indicadoresService.obtenerTodos_Indicadores_Semanales_Cliente_Frente();

    let data = indicadores_semanales_response.datos;
    let estado;

    if ((indicadores_semanales_response.mensaje == 'Exito') || (indicadores_semanales_response.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (indicadores_semanales_response.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getIndicadoresSemanalesCliente_Frente_Finca = async (req, res) => {
    let indicadores_semanales_response = await indicadoresService.obtenerTodos_Indicadores_Semanales_Cliente_Frente_Finca();

    let data = indicadores_semanales_response.datos;
    let estado;

    if ((indicadores_semanales_response.mensaje == 'Exito') || (indicadores_semanales_response.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (indicadores_semanales_response.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getIndicadoresSemanalesCliente_Frente_Finca_Equipo = async (req, res) => {
    let indicadores_semanales_response = await indicadoresService.obtenerTodos_Indicadores_Semanales_Cliente_Frente_Finca_Equipo();

    let data = indicadores_semanales_response.datos;
    let estado;

    if ((indicadores_semanales_response.mensaje == 'Exito') || (indicadores_semanales_response.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (indicadores_semanales_response.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}


/**
 * **************************************************************
 * ************** INDICADORES SEMANALES CALENDARIO **************
 * **************************************************************
 */
controller.getIndicadoresSemanalesCalendarioCliente = async (req, res) => {
    let indicadores_semanales_calendario_response = await indicadoresService.obtenerTodos_Indicadores_Semanales_Calendario_Cliente();

    let data = indicadores_semanales_calendario_response.datos;
    let estado;

    if ((indicadores_semanales_calendario_response.mensaje == 'Exito') || (indicadores_semanales_calendario_response.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (indicadores_semanales_calendario_response.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getIndicadoresSemanalesCalendarioCliente_Frente = async (req, res) => {
    let indicadores_semanales_calendario_response = await indicadoresService.obtenerTodos_Indicadores_Semanales_Calendario_Cliente_Frente();

    let data = indicadores_semanales_calendario_response.datos;
    let estado;

    if ((indicadores_semanales_calendario_response.mensaje == 'Exito') || (indicadores_semanales_calendario_response.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (indicadores_semanales_calendario_response.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getIndicadoresSemanalesCalendarioCliente_Frente_Finca = async (req, res) => {
    let indicadores_semanales_calendario_response = await indicadoresService.obtenerTodos_Indicadores_Semanales_Calendario_Cliente_Frente_Finca();

    let data = indicadores_semanales_calendario_response.datos;
    let estado;

    if ((indicadores_semanales_calendario_response.mensaje == 'Exito') || (indicadores_semanales_calendario_response.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (indicadores_semanales_calendario_response.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getIndicadoresSemanalesCalendarioCliente_Frente_Finca_Equipo = async (req, res) => {
    let indicadores_semanales_calendario_response = await indicadoresService.obtenerTodos_Indicadores_Semanales_Calendario_Cliente_Frente_Finca_Equipo();

    let data = indicadores_semanales_calendario_response.datos;
    let estado;

    if ((indicadores_semanales_calendario_response.mensaje == 'Exito') || (indicadores_semanales_calendario_response.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (indicadores_semanales_calendario_response.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

module.exports = controller;