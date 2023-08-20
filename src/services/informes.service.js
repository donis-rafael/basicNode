const service = {};
const informesRepository = require('../repositories/informes.repository');

service.obtenerInformeDiario = async (algo) => {
    return await informesRepository.login(algo);
}

service.obtenerInformeSemanal = async (algo) => {
    return await informesRepository.login(algo);
}

service.obtenerInformeMensual = async (algo) => {
    return await informesRepository.login(algo);
}

module.exports = service;