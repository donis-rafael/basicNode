const bcrypt = require('bcrypt');
const format = require('date-format');
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

helpers.fechaFormato = () => {
    return format.asString('yyyyMMdd', new Date());
}

helpers.cadenaCompara = (usuario) => {
    return String(process.env.claveTecun) + '_' + usuario + '_' + helpers.fechaFormato() + '_' + String(process.env.fraseTecun) + '_' + String(process.env.claveUsac);
}

module.exports = helpers;