const repository = {};

repository.login = async (userSearch) => {
    let credFounded, mensaje;
    await Credencial.findOne({
        where: {
            user: userSearch
        },
        include: [Usuario]
    }).then((data) => {
        mensaje = 'exito';
        credFounded = data;

    }).catch(err => {
        mensaje = 'error';
        credFounded = err.message || "Ocurrió un error al consultar sesión.";
    });

    let respuesta = {
        message: mensaje,
        cuerpo: credFounded
    }

    return respuesta;
}

module.exports = repository;