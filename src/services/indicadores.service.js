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

module.exports = service;