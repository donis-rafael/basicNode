const service = {};
const informesRepository = require('../repositories/informes.repository');
const helper = require('../config/helper');

/**
 * ********************************************
 * ************** INFORME DIARIO **************
 * ********************************************
 */
service.obtenerInformeDiario_Maquina = async (codigoMaquina) => {
    console.log('Fecha: ' + helper.fechaFormatoInformeDiario());
    let maquinas = await informesRepository.informeDiarioByMaquina(codigoMaquina, helper.fechaFormatoInformeDiario());
    let casos = await informesRepository.countCasosByMaquina(codigoMaquina);

    let datosOperador = null;
    let indicadores = null;
    let AFS = null;

    console.log("casos: " + JSON.stringify(maquinas.cuerpo));
    if (maquinas.cuerpo != null) {
        if (maquinas.cuerpo.Frente != null && maquinas.cuerpo.Usuarios.length > 0) {
            console.log("casos: " + JSON.stringify(maquinas.cuerpo));
        }

        /*if (maquinas.cuerpo.Frente != null && maquinas.cuerpo.Usuarios.length > 0) {
            datosOperador = {
                nombreOperador: maquinas.cuerpo.Usuarios[0].nombre_usuario,
                progDesarrollo: maquinas.cuerpo.Usuarios[0].Programa_desarrollo,
                codigoCosechadora: maquinas.cuerpo.codigo_maquina,
                frente: maquinas.cuerpo.Frente.nombre_frente
            }
        }
    
        if (maquinas.cuerpo.Actividad_maquina_dia.length > 0 && casos != null) {
            indicadores = {
                entregaCaña: maquinas.cuerpo.Actividad_maquina_dia[0].entrega_cania,
                disponibTotal: maquinas.cuerpo.Actividad_maquina_dia[0].disponibilidad_total,
                disponibTecrent: maquinas.cuerpo.Actividad_maquina_dia[0].disponibilidad_tecrent,
                utilizacion: maquinas.cuerpo.Actividad_maquina_dia[0].utilizacion_hora_dia,
                porcentUtilizacion: maquinas.cuerpo.Actividad_maquina_dia[0].prcnt_utilizacion,
                casosAbiertos: casos.cuerpo
            }
        }
    
        if (maquinas.cuerpo.Telemetria.length > 0) {
            AFS = {
                horometro: maquinas.cuerpo.Telemetria[0].horometro,
                horasCadena: maquinas.cuerpo.Telemetria[0].horas_cadena,
                tiempoRalenti: maquinas.cuerpo.Telemetria[0].tiempo_ralenti,
                consumoCombustible: maquinas.cuerpo.Telemetria[0].consumo_combustible,
                velocidadDesplazamiento: maquinas.cuerpo.Telemetria[0].velocidad_dezplazamiento,
                autoguidance: maquinas.cuerpo.Telemetria[0].autoguidance,
                smartCruise: maquinas.cuerpo.Telemetria[0].smart_cruise,
                autoTracker: maquinas.cuerpo.Telemetria[0].auto_tracker,
                rpmExtractorPrimario: maquinas.cuerpo.Telemetria[0].rpm_extractor_primario,
                presionCortadorBae: maquinas.cuerpo.Telemetria[0].presion_cortador_base,
                cargaMotor: maquinas.cuerpo.Telemetria[0].carga_motor
            }
        }*/
    }

    let respuesta = {
        message: maquinas.message,
        cuerpo: {
            datosOperador: datosOperador,
            indicadores: indicadores,
            AFS: AFS
        }
    }

    return respuesta;
    //return maquinas;
}

/**
 * *********************************************
 * ************** INFORME SEMANAL **************
 * *********************************************
 */
service.obtenerInformeSemanal_Maquina = async (codigoMaquina) => {
    let maquinas = await informesRepository.informeSemanalByMaquina(codigoMaquina);
    let casos = await informesRepository.countCasosByMaquina(codigoMaquina);

    if (maquinas.cuerpo.Frente != null && maquinas.cuerpo.Usuarios.length > 0) {
        console.log("casos: " + JSON.stringify(maquinas.cuerpo));
    }

    let datosOperador = null;
    let indicadores_diario = null;
    let indicadores_semana = null;
    let AFS = null;

    if (maquinas.cuerpo.Frente != null && maquinas.cuerpo.Usuarios.length > 0) {
        datosOperador = {
            nombreOperador: maquinas.cuerpo.Usuarios[0].nombre_usuario,
            progDesarrollo: maquinas.cuerpo.Usuarios[0].Programa_desarrollo,
            codigoCosechadora: maquinas.cuerpo.codigo_maquina,
            frente: maquinas.cuerpo.Frente.nombre_frente
        }
    }

    if (maquinas.cuerpo.Actividad_maquina_dia.length > 0 && casos != null) {
        indicadores_diario = {
            entregaCaña: maquinas.cuerpo.Actividad_maquina_dia[0].entrega_cania,
            disponibTotal: maquinas.cuerpo.Actividad_maquina_dia[0].disponibilidad_total,
            disponibTecrent: maquinas.cuerpo.Actividad_maquina_dia[0].disponibilidad_tecrent,
            utilizacion: maquinas.cuerpo.Actividad_maquina_dia[0].utilizacion_hora_dia,
            porcentUtilizacion: maquinas.cuerpo.Actividad_maquina_dia[0].prcnt_utilizacion,
            casosAbiertos: casos.cuerpo
        }
    }

    if (maquinas.cuerpo.Actividad_maquina_semanas.length > 0 && casos != null) {
        indicadores_semana = {
            mtbf: maquinas.cuerpo.Actividad_maquina_semanas[0].mtbf,
            mttr: maquinas.cuerpo.Actividad_maquina_semanas[0].mttr,
            pmrs: maquinas.cuerpo.Actividad_maquina_semanas[0].pmrs,
            noPlaneados: maquinas.cuerpo.Actividad_maquina_semanas[0].no_planeados,
            porcentDanios: maquinas.cuerpo.Actividad_maquina_semanas[0].prcnt_danios,
            eficiencia: maquinas.cuerpo.Actividad_maquina_semanas[0].eficiencia_ton_hora
        }
    }

    if (maquinas.cuerpo.Telemetria.length > 0) {
        AFS = {
            horometro: maquinas.cuerpo.Telemetria[0].horometro,
            horasCadena: maquinas.cuerpo.Telemetria[0].horas_cadena,
            tiempoRalenti: maquinas.cuerpo.Telemetria[0].tiempo_ralenti,
            consumoCombustible: maquinas.cuerpo.Telemetria[0].consumo_combustible,
            velocidadDesplazamiento: maquinas.cuerpo.Telemetria[0].velocidad_dezplazamiento,
            autoguidance: maquinas.cuerpo.Telemetria[0].autoguidance,
            smartCruise: maquinas.cuerpo.Telemetria[0].smart_cruise,
            autoTracker: maquinas.cuerpo.Telemetria[0].auto_tracker,
            rpmExtractorPrimario: maquinas.cuerpo.Telemetria[0].rpm_extractor_primario,
            presionCortadorBae: maquinas.cuerpo.Telemetria[0].presion_cortador_base,
            cargaMotor: maquinas.cuerpo.Telemetria[0].carga_motor
        }
    }

    let respuesta = {
        message: maquinas.message,
        cuerpo: {
            datosOperador: datosOperador,
            indicadores_diario: indicadores_diario,
            indicadores_semana: indicadores_semana,
            AFS: AFS
        }
    }

    return respuesta;
}

service.obtenerInformeSemanal = async (algo) => {
    return await informesRepository.login(algo);
}

service.obtenerInformeMensual = async (algo) => {
    return await informesRepository.login(algo);
}

module.exports = service;