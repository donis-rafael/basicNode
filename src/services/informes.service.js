const service = {};
const informesRepository = require('../repositories/informes.repository');

service.obtenerInformeDiario_Maquina = async (codigoMaquina) => {
    return await informesRepository.informeDiarioByMaquina(codigoMaquina);
}

service.obtenerInformeSemanal = async (algo) => {
    return await informesRepository.login(algo);
}

service.obtenerInformeMensual = async (algo) => {
    return await informesRepository.login(algo);
}

module.exports = service;