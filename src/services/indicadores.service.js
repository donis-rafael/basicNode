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

service.obtenerTodos_Ingeio_Frente= async () => {
    ingenio_frente = await indicadoresRepository.findAll_Ingenio_Frente();

    return ingenio_frente;
}

module.exports = service;