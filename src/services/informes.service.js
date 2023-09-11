const service = {};
const informesRepository = require('../repositories/informes.repository');
const helper = require('../config/helper');

/**
 * ********************************************
 * ************** INFORME DIARIO **************
 * ********************************************
 */
service.obtenerInformeDiario_Maquina = async (codigoMaquina) => {
    console.log('Fecha: ' + helper.fechaFormatoInformeDiario("2023-08-26"));
    let maquinas = await informesRepository.informeDiarioByMaquina(codigoMaquina, helper.fechaFormatoInformeDiario("2023-08-26"));

    return generarRespuestaDiarios(maquinas);
}

service.obtenerInformeDiario_Ingenio = async (codigoIngenio) => {
    let maquinas = await informesRepository.informeDiarioByIngenio(codigoIngenio, helper.fechaFormatoInformeDiario("2023-08-26"));

    return generarRespuestaDiarios(maquinas);
}

service.obtenerInformeDiario_Frente = async (codigoFrente) => {
    let maquinas = await informesRepository.informeDiarioByFrente(codigoFrente, helper.fechaFormatoInformeDiario("2023-08-26"));

    return generarRespuestaDiarios(maquinas);
}

service.obtenerInformeDiario_Fecha = async (fecha) => {
    let maquinas = await informesRepository.informeDiarioByFecha(helper.fechaFormatoInformeDiario(fecha));

    return generarRespuestaDiarios(maquinas);
}

/**
 * *********************************************
 * ************** INFORME SEMANAL **************
 * *********************************************
 */
service.obtenerInformeSemanal_Maquina = async (codigoMaquina) => {
    let fechaInicial, fechaFinal;

    if (helper.diaActual() == 'Monday') {
        fechaInicial = helper.lunesDeLaSemanaAnterior();
        fechaFinal = helper.diaAnteriorAlActual();
    } else {
        if (helper.lunesDeLaSemanaAnterior() == helper.lunesDeLaSemanaActual()) {
            fechaInicial = helper.lunesDeDosSemanasAtras();
        } else {
            fechaInicial = helper.lunesDeLaSemanaAnterior();
        }
        fechaFinal = helper.domingoSemanaVencida();
    }

    console.log('FECHA INICIO: ' + fechaInicial);
    console.log('FECHA FINAL: ' + fechaFinal);
    let maquinas = await informesRepository.informeSemanalByMaquina(codigoMaquina, fechaInicial, '2023-09-03');// fechaFinal);
    console.log("casos: " + JSON.stringify(maquinas.cuerpo));

    return generarRespuestaSemanal(maquinas);
}

service.obtenerInformeSemanal_Ingenio = async (codigoIngenio) => {
    let fechaInicial, fechaFinal;

    if (helper.diaActual() == 'Monday') {
        fechaInicial = helper.lunesDeLaSemanaAnterior();
        fechaFinal = helper.diaAnteriorAlActual();
    } else {
        if (helper.lunesDeLaSemanaAnterior() == helper.lunesDeLaSemanaActual()) {
            fechaInicial = helper.lunesDeDosSemanasAtras();
        } else {
            fechaInicial = helper.lunesDeLaSemanaAnterior();
        }
        fechaFinal = helper.domingoSemanaVencida();
    }

    console.log('FECHA INICIO: ' + fechaInicial);
    console.log('FECHA FINAL: ' + fechaFinal);
    let maquinas = await informesRepository.informeSemanalByIngenio(codigoIngenio, fechaInicial, '2023-09-03');// fechaFinal);
    console.log("casos: " + JSON.stringify(maquinas.cuerpo));

    return generarRespuestaSemanal(maquinas);
}

service.obtenerInformeSemanal_Frente = async (codigoFrente) => {
    let fechaInicial, fechaFinal;

    if (helper.diaActual() == 'Monday') {
        fechaInicial = helper.lunesDeLaSemanaAnterior();
        fechaFinal = helper.diaAnteriorAlActual();
    } else {
        if (helper.lunesDeLaSemanaAnterior() == helper.lunesDeLaSemanaActual()) {
            fechaInicial = helper.lunesDeDosSemanasAtras();
        } else {
            fechaInicial = helper.lunesDeLaSemanaAnterior();
        }
        fechaFinal = helper.domingoSemanaVencida();
    }

    console.log('FECHA INICIO: ' + fechaInicial);
    console.log('FECHA FINAL: ' + fechaFinal);
    let maquinas = await informesRepository.informeSemanalByFrente(codigoFrente, fechaInicial, '2023-09-03');// fechaFinal);
    console.log("casos: " + JSON.stringify(maquinas.cuerpo));

    return generarRespuestaSemanal(maquinas);
}

service.obtenerInformeSemanal_Fecha = async (fecha) => {
    return "";
}

/**
 * *** RESPEUSTAS GENERAL ****
 */

function generarRespuestaDiarios(maquinas) {
    let maquinasListas = [];

    console.log("casos: " + JSON.stringify(maquinas.cuerpo));

    if (maquinas.cuerpo != null && maquinas.cuerpo.length > 0) {
        let datosOperador = [];
        let indicadores = [];
        let AFS = [];

        if (maquinas.cuerpo[0].Frente != null && maquinas.cuerpo[0].Usuarios.length > 0) {
            console.log("casos2: " + JSON.stringify(maquinas.cuerpo));
        }

        for (a = 0; a < maquinas.cuerpo.length; a++) {

            if (maquinas.cuerpo[a].Frente != null && maquinas.cuerpo[a].Usuarios.length > 0) {
                datosOperador = [];

                for (i = 0; i < maquinas.cuerpo[a].Usuarios.length; i++) {
                    dOp = {
                        nombreOperador: maquinas.cuerpo[a].Usuarios[i].nombre_usuario,
                        progDesarrollo: maquinas.cuerpo[a].Usuarios[i].Programa_desarrollo,
                        codigoCosechadora: maquinas.cuerpo[a].codigo_maquina,
                        frente: maquinas.cuerpo[a].Frente.nombre_frente
                    }
                    datosOperador.push(dOp);
                }
            }

            if (maquinas.cuerpo[a].Actividad_maquina_dia.length > 0) {
                indicadores = [];

                for (j = 0; j < maquinas.cuerpo[a].Actividad_maquina_dia.length; j++) {
                    indics = {
                        entregaCaña: maquinas.cuerpo[a].Actividad_maquina_dia[j].entrega_cania,
                        disponibTotal: maquinas.cuerpo[a].Actividad_maquina_dia[j].disponibilidad_total,
                        disponibTecrent: maquinas.cuerpo[a].Actividad_maquina_dia[j].disponibilidad_tecrent,
                        utilizacion: maquinas.cuerpo[a].Actividad_maquina_dia[j].utilizacion_hora_dia,
                        porcentUtilizacion: maquinas.cuerpo[a].Actividad_maquina_dia[j].prcnt_utilizacion,
                        casosAbiertos: maquinas.cuerpo[a].Actividad_maquina_dia[j].casos_abiertos
                    }
                    indicadores.push(indics);
                }
            }

            if (maquinas.cuerpo[a].Telemetria.length > 0) {
                AFS = [];

                for (f = 0; f < maquinas.cuerpo[a].Telemetria.length; f++) {
                    AFSs = {
                        horometro: maquinas.cuerpo[a].Telemetria[f].horometro,
                        horasCadena: maquinas.cuerpo[a].Telemetria[f].horas_cadena,
                        tiempoRalenti: maquinas.cuerpo[a].Telemetria[f].tiempo_ralenti,
                        consumoCombustible: maquinas.cuerpo[a].Telemetria[f].consumo_combustible,
                        velocidadDesplazamiento: maquinas.cuerpo[a].Telemetria[f].velocidad_dezplazamiento,
                        autoguidance: maquinas.cuerpo[a].Telemetria[f].autoguidance,
                        smartCruise: maquinas.cuerpo[a].Telemetria[f].smart_cruise,
                        autoTracker: maquinas.cuerpo[a].Telemetria[f].auto_tracker,
                        rpmExtractorPrimario: maquinas.cuerpo[a].Telemetria[f].rpm_extractor_primario,
                        presionCortadorBae: maquinas.cuerpo[a].Telemetria[f].presion_cortador_base,
                        cargaMotor: maquinas.cuerpo[a].Telemetria[f].carga_motor
                    }
                    AFS.push(AFSs);
                }
            }

            let respTemp = {
                datosOperador: datosOperador,
                indicadores: indicadores,
                AFS: AFS
            }

            maquinasListas.push(respTemp);
        }
    }

    let respuesta = {
        message: maquinas.message,
        cuerpo: {
            maquinas: maquinasListas
        }
    }

    return respuesta;
}

function generarRespuestaSemanal(maquinas) {

    let maquinasListas = [];

    if (maquinas.cuerpo != null && maquinas.cuerpo.length > 0) {
        let datosOperador = [];
        let indicadores_diario = [];
        let indicadores_semana = [];
        let AFS = [];

        for (a = 0; a < maquinas.cuerpo.length; a++) {
            if (maquinas.cuerpo[a].Frente != null && maquinas.cuerpo[a].Usuarios.length > 0) {
                datosOperador = [];

                for (i = 0; i < maquinas.cuerpo[a].Usuarios.length; i++) {
                    dOp = {
                        nombreOperador: maquinas.cuerpo[a].Usuarios[i].nombre_usuario,
                        progDesarrollo: maquinas.cuerpo[a].Usuarios[i].Programa_desarrollo,
                        codigoCosechadora: maquinas.cuerpo[a].codigo_maquina,
                        frente: maquinas.cuerpo[a].Frente.nombre_frente
                    }
                    datosOperador.push(dOp);
                }
            }

            if (maquinas.cuerpo[a].Actividad_maquina_dia.length > 0) {
                indicadores = [];

                for (j = 0; j < maquinas.cuerpo[a].Actividad_maquina_dia.length; j++) {
                    indics = {
                        entregaCaña: maquinas.cuerpo[a].Actividad_maquina_dia[j].entrega_cania,
                        disponibTotal: maquinas.cuerpo[a].Actividad_maquina_dia[j].disponibilidad_total,
                        disponibTecrent: maquinas.cuerpo[a].Actividad_maquina_dia[j].disponibilidad_tecrent,
                        utilizacion: maquinas.cuerpo[a].Actividad_maquina_dia[j].utilizacion_hora_dia,
                        porcentUtilizacion: maquinas.cuerpo[a].Actividad_maquina_dia[j].prcnt_utilizacion,
                        casosAbiertos: maquinas.cuerpo[a].Actividad_maquina_dia[j].casos_abiertos
                    }
                    indicadores_diario.push(indics);
                }
            }

            if (maquinas.cuerpo[a].Actividad_maquina_semanas.length > 0 && casos != null) {
                indicadores_semana = [];

                for (l = 0; l < maquinas.cuerpo[a].Actividad_maquina_semanas.length; l++) {
                    indic_semana = {
                        mtbf: maquinas.cuerpo[a].Actividad_maquina_semanas[l].mtbf,
                        mttr: maquinas.cuerpo[a].Actividad_maquina_semanas[l].mttr,
                        pmrs: maquinas.cuerpo[a].Actividad_maquina_semanas[l].pmrs,
                        noPlaneados: maquinas.cuerpo[a].Actividad_maquina_semanas[l].no_planeados,
                        porcentDanios: maquinas.cuerpo[a].Actividad_maquina_semanas[l].prcnt_danios,
                        eficiencia: maquinas.cuerpo[a].Actividad_maquina_semanas[l].eficiencia_ton_hora
                    }
                    indicadores_semana.push(indic_semana);
                }
            }

            if (maquinas.cuerpo[a].Telemetria.length > 0) {
                AFS = [];

                for (f = 0; f < maquinas.cuerpo[a].Telemetria.length; f++) {
                    let AFSs = {
                        horometro: maquinas.cuerpo[a].Telemetria[f].horometro,
                        horasCadena: maquinas.cuerpo[a].Telemetria[f].horas_cadena,
                        tiempoRalenti: maquinas.cuerpo[a].Telemetria[f].tiempo_ralenti,
                        consumoCombustible: maquinas.cuerpo[a].Telemetria[f].consumo_combustible,
                        velocidadDesplazamiento: maquinas.cuerpo[a].Telemetria[f].velocidad_dezplazamiento,
                        autoguidance: maquinas.cuerpo[a].Telemetria[f].autoguidance,
                        smartCruise: maquinas.cuerpo[a].Telemetria[f].smart_cruise,
                        autoTracker: maquinas.cuerpo[a].Telemetria[f].auto_tracker,
                        rpmExtractorPrimario: maquinas.cuerpo[a].Telemetria[f].rpm_extractor_primario,
                        presionCortadorBae: maquinas.cuerpo[a].Telemetria[f].presion_cortador_base,
                        cargaMotor: maquinas.cuerpo[a].Telemetria[f].carga_motor
                    }
                    AFS.push(AFSs);
                }
            }

            let respTemp = {
                datosOperador: datosOperador,
                indicadores_diario: indicadores_diario,
                indicadores_semana: indicadores_semana,
                AFS: AFS
            }

            maquinasListas.push(respTemp);
        }
    }

    let respuesta = {
        message: maquinas.message,
        cuerpo: {
            maquinas: maquinasListas
        }
    }

    return respuesta;
}

module.exports = service;