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
    return moment().weekday(-7).utc().format("YYYY-MM-DD");
}

helpers.lunesDeDosSemanasAtras = () => {
    return moment().weekday(-14).utc().format("YYYY-MM-DD");
}

helpers.lunesDeLaSemanaActual = () => {
    return moment().startOf('isoweek').utc().format("YYYY-MM-DD");
}

helpers.domingoSemanaVencida = () => {
    return moment().day(-8).utc().format("YYYY-MM-DD");
}

helpers.diaAnteriorAlActual = () => {
    return moment().subtract(1, 'days').utc().format("YYYY-MM-DD");
}

helpers.diaActual = () => {
    return moment().format('dddd');
}

module.exports = helpers;