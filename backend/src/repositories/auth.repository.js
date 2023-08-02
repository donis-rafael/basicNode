const repository = {};

const Usuario = require('../models/gestion/usuario.model');
const Credencial = require('../models/gestion/credencial.model');

// Relacion entre Usuario y Rol
Usuario.hasMany(Credencial, { foreignKey: 'usuario_id' });
Credencial.belongsTo(Usuario, { foreignKey: 'usuario_id' });

/**
 * *******************************************
 * ************** INICIO SESIÓN **************
 * *******************************************
 */
repository.findSession = async (user, pass, key) => {
    let respuesta, vacio = false;
    await Frente.findAll()
        .then(data => {
            if (data.length <= 0) {
                vacio = true;
                data = {
                    mensaje: 'sin datos'
                }
            }
            respuesta = {
                mensaje: !vacio ? 'Exito' : 'Sin Datos',
                datos: data
            }

        }).catch(err => {
            respuesta = {
                mensaje: 'Error',
                datos: err.message || "Ocurrió un error al consultar Frentes."
            };
        });


    return respuesta;
}

module.exports = repository;