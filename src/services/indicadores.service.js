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
    indicadoresDiarios = await indicadoresRepository.findAll_IndDiariosCliente_Frente_Finca();

    return indicadoresDiarios;
}

service.obtenerTodos_Indicadores_Diarios_Cliente_Frente_Finca_Equipo = async () => {
    indicadoresDiarios = await indicadoresRepository.findAll_IndDiariosCliente_Frente_Finca_Equipo();

    return indicadoresDiarios;
}

// Indicadores Semanales
service.obtenerTodos_Indicadores_Semanales_Cliente = async () => {
    indicadoresSemanales = await indicadoresRepository.findAll_IndSemCliente();

    return indicadoresSemanales;
}

service.obtenerTodos_Indicadores_Semanales_Cliente_Frente = async () => {
    indicadoresSemanales = await indicadoresRepository.findAll_IndSemCliente_Frente();

    return indicadoresSemanales;
}

service.obtenerTodos_Indicadores_Semanales_Cliente_Frente_Finca = async () => {
    indicadoresSemanales = await indicadoresRepository.findAll_IndSemCliente_Frente_Finca();

    return indicadoresSemanales;
}

service.obtenerTodos_Indicadores_Semanales_Cliente_Frente_Finca_Equipo = async () => {
    indicadoresSemanales = await indicadoresRepository.findAll_IndSemCliente_Frente_Finca_Equipo();

    return indicadoresSemanales;
}

// Indicadores Semanales Calendario
service.obtenerTodos_Indicadores_Semanales_Calendario_Cliente = async () => {
    indicadoresSemanalesCalendario = await indicadoresRepository.findAll_IndSemCal_Cliente();

    return indicadoresSemanalesCalendario;
}

service.obtenerTodos_Indicadores_Semanales_Calendario_Cliente_Frente = async () => {
    indicadoresSemanalesCalendario = await indicadoresRepository.findAll_IndSemCal_Cliente_Frente();

    return indicadoresSemanalesCalendario;
}

service.obtenerTodos_Indicadores_Semanales_Calendario_Cliente_Frente_Finca = async () => {
    indicadoresSemanalesCalendario = await indicadoresRepository.findAll_IndSemCal_Cliente_Frente_Finca();

    return indicadoresSemanalesCalendario;
}

service.obtenerTodos_Indicadores_Semanales_Calendario_Cliente_Frente_Finca_Equipo = async () => {
    indicadoresSemanalesCalendario = await indicadoresRepository.findAll_IndSemCal_Cliente_Frente_Finca_Equipo();

    return indicadoresSemanalesCalendario;
}

module.exports = service;