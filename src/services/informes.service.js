const service = {};
const informesRepository = require('../repositories/informes.repository');

service.obtenerInformeDiario_Maquina = async (codigoMaquina) => {
    let maquinas = await informesRepository.informeDiarioByMaquina(codigoMaquina);

    let datosOperador = {
        nombreOperador: "",
        progDesarrollo: "",
        codigoCosechadora: "",
        frente: ""
    }

    let indicadores = {
        entregaCaña: "",
        disponibTotal: "",
        disponibTecrent: "",
        utilizacion: "",
        porcentUtilizacion: "",
        mtbf: "",
        mttr: "",
        pmrs: "",
        noPlaneados: "",
        porcentDanios: "",
        eficiencia: "",
        casosAbiertos: ""
    }

    let AFS = {
        horometro: "",
        horasCadena: "",
        tiempoRalenti: "",
        consumoCombustible: "",
        velocidadDesplazamiento: "",
        autoguidance: "",
        smartCruise: "",
        autoTracker: "",
        rpmExtractorPrimario: "",
        presionCortadorBae: "",
        cargaMotor: ""
    }

    //return respuesta;
    return maquinas;
}

service.obtenerInformeSemanal = async (algo) => {
    return await informesRepository.login(algo);
}

service.obtenerInformeMensual = async (algo) => {
    return await informesRepository.login(algo);
}

module.exports = service;