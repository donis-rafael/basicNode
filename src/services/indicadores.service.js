const service = {};
const indicadoresRepository = require('../repositories/indicadores.repository');

service.obtenerTodasLasFincas = async () => {
    fincas = await indicadoresRepository.findAllFincas();

    return fincas;
}

service.obtenerTodasLasFrentes = async () => {
    Frentes = await indicadoresRepository.findAllFrentes();

    return Frentes;
}

service.obtenerTodasLasIngenios = async () => {
    Ingenios = await indicadoresRepository.findAllIngenios();

    return Ingenios;
}

service.obtenerTodasLasMaquinas = async () => {
    Maquinas = await indicadoresRepository.findAllMaquinas();

    return Maquinas;
}

service.obtenerTodos_Ingeio_Frente = async () => {
    ingenio_frente = await indicadoresRepository.findAll_Ingenio_Frente();

    return ingenio_frente;
}

service.obtenerTodos_Ingeio_Frente_Finca = async () => {
    ingenio_frente_finca = await indicadoresRepository.findAll_Ingenio_Frente_Finca();

    return ingenio_frente_finca;
}

service.obtenerTodos_Ingeio_Frente_Finca_Equipo = async () => {
    ingenio_frente_finca_equipo = await indicadoresRepository.findAll_Ingenio_Frente_Finca_Equipo();

    return ingenio_frente_finca_equipo;
}

service.obtenerTodos_Ingeio_Frente_Finca_Equipo = async () => {
    ingenio_frente_finca_equipo = await indicadoresRepository.findAll_Ingenio_Frente_Finca_Equipo();

    return ingenio_frente_finca_equipo;
}

// INDICADORES DIARIOS

service.obtenerTodos_Indicadores_Diarios_Cliente = async () => {
    indicadoresDiarios = await indicadoresRepository.findAll_IndDiariosCliente();

    return indicadoresDiarios;
}

service.obtenerTodos_Indicadores_Diarios_Cliente_Frente = async () => {
    indicadoresDiarios = await indicadoresRepository.findAll_IndDiariosCliente_Frente();

    return indicadoresDiarios;
}

service.obtenerTodos_Indicadores_Diarios_Cliente_Frente_Finca = async () => {
    try {
        indicadoresDiarios = await indicadoresRepository.findAll_IndDiariosCliente_Frente_Finca();
    } catch (error) {
        indicadoresDiarios = error;
    }

    return indicadoresDiarios;
}

service.obtenerTodos_Indicadores_Diarios_Cliente_Frente_Finca_Equipo = async () => {
    indicadoresDiarios = await indicadoresRepository.findAll_IndDiariosCliente_Frente_Finca_Equipo();

    return indicadoresDiarios;
}

module.exports = service;