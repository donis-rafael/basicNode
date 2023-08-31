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

helpers.fechaFormatoInformeDiario = () => {
    return moment("2023-08-26").utc().format("YYYY-MM-DD").toString();
}

module.exports = helpers;