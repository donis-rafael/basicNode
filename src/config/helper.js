const bcrypt = require('bcrypt');
const moment = require('moment');
moment.suppressDeprecationWarnings = true;
require('dotenv').config();

const helpers = {}

helpers.encryptPassword = async (contra) => {
    const salt = await bcrypt.genSalt(10);
    const encripada = await bcrypt.hash(contra, salt);
    return encripada;
}

helpers.comparaPassword = async (contraActual, contraBd) => {
    return await bcrypt.compare(contraActual, contraBd);
}

helpers.cadenaCompara = (usuario) => {
    return String(process.env.claveTecun) + '_' + usuario + '_' + helpers.fechaFormato() + '_' + String(process.env.fraseTecun) + '_' + String(process.env.claveUsac);
}

helpers.fechaFormato = () => {
    return moment(new Date()).utc().format("YYYYMMDD").toString();
}

helpers.fechaFormatoInformeDiario = (fecha) => {
    if (fecha == 'hoy') {
        return moment().utc().format("YYYY-MM-DD").toString();
    }
    return moment(fecha).utc().format("YYYY-MM-DD").toString();
}

helpers.lunesDeLaSemanaAnterior = () => {
    let fechaRetorno;

    if (moment().startOf('isoweek').utc().weekday(-7).format("dddd") == 'Sunday') {
        fechaRetorno = moment().utc().weekday(-7).add(1, 'days').format("YYYY-MM-DD");

    } else {
        fechaRetorno = moment().startOf('isoweek').utc().weekday(-7).format("YYYY-MM-DD");
    }
    return fechaRetorno;
}

helpers.lunesDeDosSemanasAtras = () => {
    let fechaRetorno;

    if (moment().startOf('isoweek').utc().weekday(-7).format("dddd") == 'Sunday') {
        fechaRetorno = moment().utc().weekday(-14).add(1, 'days').format("YYYY-MM-DD");

    } else {
        fechaRetorno = moment().weekday(-14).utc().format("YYYY-MM-DD");
    }
    return fechaRetorno;
}

helpers.lunesDeLaSemanaActual = () => {
    return moment().startOf('isoweek').utc().format("YYYY-MM-DD");
}

helpers.domingoSemanaVencida = () => {
    return moment().day(0).format("YYYY-MM-DD");
}

helpers.diaAnteriorAlActual = () => {
    return moment().subtract(1, 'days').utc().format("YYYY-MM-DD");
}

helpers.diaActual = () => {
    return moment().format('dddd');
}

helpers.probarDias = () => {
    console.log('domingo anterior: ' + moment().day(-7).format("YYYY-MM-DD"));
    console.log('domingo actual: ' + moment().day(0).format("YYYY-MM-DD"));
    console.log('domingo siguiente: ' + moment().day(7).format("YYYY-MM-DD"));
    console.log('fecha hoy: ' + moment().utc().format("YYYY-MM-DD"));
    console.log('lunes atrás: ' + moment().weekday(0).format("dddd"));
}

module.exports = helpers;