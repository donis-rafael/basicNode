const controller = {};
//const helper = require('../config/helper');
const adminService = require('../services/admin.service');
const sequelize = require('../config/db');
const { QueryTypes } = require('sequelize');

/**
 * **************************************
 * ************** USUARIOS **************
 * **************************************
 */
controller.getUsuarios = async (req, res) => {
    let usuarios = await adminService.obtenerTodosLosUsuarios();

    let data = usuarios.datos;
    let estado;

    if ((usuarios.mensaje == 'Exito') || (usuarios.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (usuarios.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.getUsuarios_Rol_Cargo = async (req, res) => {
    let usuarios = await adminService.obtenerTodosLosUsuarios_Rol_Cargo();

    let data = usuarios.datos;
    let estado;

    if ((usuarios.mensaje == 'Exito') || (usuarios.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (usuarios.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

// SE USA EL REGISTRO
/*controller.setUsuario = async (req, res) => {
    // Valida información del Request
    if (!req.body.nombreUsuario) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombreUsuario, correo, rol, cargo, ingenioId, ingenioNombre } = req.body;

    let newUsuario = await adminService.guardarNuevoUsuario(nombreUsuario, correo, rol, cargo, ingenioId, ingenioNombre);

    let data = newUsuario.datos;
    let estado;

    if (newUsuario.mensaje == 'Exito') {
        estado = 200;
    } else if (newUsuario.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);

}*/

/**
 * ***********************************
 * ************** ROLES **************
 * ***********************************
 */
controller.getRoles = async (req, res) => {
    let roles = await adminService.obtenerTodosLosRoles();

    let data = roles.datos;
    let estado;

    if ((roles.mensaje == 'Exito') || (roles.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (roles.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.setRol = async (req, res) => {
    if (!req.body.nombreRol) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombreRol } = req.body;

    let newRol = await adminService.guardarNuevoRol(nombreRol);

    let data = newRol.datos;
    let estado;

    if (newRol.mensaje == 'Exito') {
        estado = 200;
    } else if (newRol.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.updateRol = async (req, res) => {
    if (!req.body.idRol) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idRol, nombreRol } = req.body;

    let rolActualizado = await adminService.actualizarRol(idRol, nombreRol);

    let data = rolActualizado.datos;
    let estado;

    if (rolActualizado.mensaje == 'Exito') {
        estado = 200;
    } else if (rolActualizado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.deleteRol = async (req, res) => {
    if (!req.body.idRol) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idRol } = req.body;

    let rolEliminado = await adminService.eliminarRol(idRol);

    let data = rolEliminado.datos;
    let estado;

    if (rolEliminado.mensaje == 'Exito') {
        if (rolEliminado.datos == 1) {
            data = `Rol con id: ${idRol}, eliminado exitosamente`
        } else {
            data = `No se eliminó ningún Rol con id: ${idRol}`
        }
        estado = 200;
    } else if (rolEliminado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

/**
 * *******************************************
 * ************** MANTENIMIENTO **************
 * *******************************************
 */
controller.getMantenimiento = async (req, res) => {
    let mantenimientos = await adminService.obtenerTodosLosMantenimientos();

    let data = mantenimientos.datos;
    let estado;

    if ((mantenimientos.mensaje == 'Exito') || (mantenimientos.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (mantenimientos.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.setMantenimiento = async (req, res) => {
    if (!req.body.nombreMantenimiento) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombreMantenimiento } = req.body;

    let newMantenimiento = await adminService.guardarNuevoMantenimientos(nombreMantenimiento);

    let data = newMantenimiento.datos;
    let estado;

    if (newMantenimiento.mensaje == 'Exito') {
        estado = 200;
    } else if (newMantenimiento.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.updateMantenimiento = async (req, res) => {
    if (!req.body.idMantenimiento) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idMantenimiento, nombreMantenimiento } = req.body;

    let mantenimientoActualizado = await adminService.actualizarMantenimientos(idMantenimiento, nombreMantenimiento);

    let data = mantenimientoActualizado.datos;
    let estado;

    if (mantenimientoActualizado.mensaje == 'Exito') {
        estado = 200;
    } else if (mantenimientoActualizado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.deleteMantenimiento = async (req, res) => {
    if (!req.body.idMantenimiento) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idMantenimiento } = req.body;

    let mantenimientoEliminado = await adminService.eliminarMantenimientos(idMantenimiento);

    let data = mantenimientoEliminado.datos;
    let estado;

    if (mantenimientoEliminado.mensaje == 'Exito') {
        if (mantenimientoEliminado.datos == 1) {
            data = `Mantenimiento con id: ${idMantenimiento}, eliminado exitosamente`
        } else {
            data = `No se eliminó ningún Mantenimiento con id: ${idMantenimiento}`
        }
        estado = 200;
    } else if (mantenimientoEliminado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

/**
 * ************************************
 * ************** CARGOS **************
 * ************************************
 */
controller.getCargos = async (req, res) => {
    let cargos = await adminService.obtenerTodosLosCargos();

    let data = cargos.datos;
    let estado;

    if ((cargos.mensaje == 'Exito') || (cargos.mensaje == 'Sin Datos')) {
        estado = 200;
    } else if (cargos.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.setCargo = async (req, res) => {
    // Valida información del Request
    if (!req.body.nombreCargo) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombreCargo } = req.body;

    let newCargo = await adminService.guardarNuevoCargo(nombreCargo);

    let data = newCargo.datos;
    let estado;

    if (newCargo.mensaje == 'Exito') {
        estado = 200;
    } else if (newCargo.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.updateCargo = async (req, res) => {
    if (!req.body.idCargo) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idCargo, nombreCargo } = req.body;

    let cargoActualizado = await adminService.actualizarCargo(idCargo, nombreCargo);

    let data = cargoActualizado.datos;
    let estado;

    if (cargoActualizado.mensaje == 'Exito') {
        estado = 200;
    } else if (cargoActualizado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}

controller.deleteCargo = async (req, res) => {
    if (!req.body.idCargo) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { idCargo } = req.body;

    let cargoEliminado = await adminService.eliminarCargo(idCargo);

    let data = cargoEliminado.datos;
    let estado;

    if (cargoEliminado.mensaje == 'Exito') {
        if (cargoEliminado.datos == 1) {
            data = `Cargo con id: ${idCargo}, eliminado exitosamente`
        } else {
            data = `No se eliminó ningún Cargo con id: ${idCargo}`
        }
        estado = 200;
    } else if (cargoEliminado.mensaje == 'Error') {
        estado = 500;
    } else {
        estado = 300;
    }

    res.status(estado).send(data);
}


/**
 * 
 * SERVICIOS ADMINS
 *
 */

/*controller.execQuerys = async (req, res) => {
    const { tabla, condicion } = req.body;
    let consulta = 'SELECT * FROM ' + tabla;

    if (condicion !== ' ') {
        consulta += ' ' + condicion
    }
    let result = ''

    await sequelize.query(consulta, {
        type: sequelize.QueryTypes.SELECT
    })
        .then(resultados => {
            console.log(resultados); // Mostrar los resultados
            result = resultados
        })
        .catch(error => {
            console.error('Error en la consulta:', error);
        });

    /*const a = await sequelize.query("select column_name, data_type, character_maximum_length from INFORMATION_SCHEMA.COLUMNS where table_name = 'Registro_app';")
        .then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    console.log(a);*//*

res.status(200).send(result);
}*/

controller.execQuerys = async (req, res) => {
    let insertString = '';

    // 1. Ingenios
    const ingenios = await sequelize.query(`
        SELECT ingenio_id, nombre_ingenio 
        FROM DM_Ingenio
        WHERE nombre_ingenio LIKE '%ngenio%'
    `, { type: QueryTypes.SELECT });

    const ingenioIds = ingenios.map(row => row.ingenio_id); // Array con los IDs filtrados

    /*ingenios.forEach(row => {
        insertString += `INSERT INTO dbo.Ingenio (ingenio_id, nombre_ingenio) VALUES ('${row.ingenio_id}', '${row.nombre_ingenio}');\n`;
    });*/

    if (ingenioIds.length > 0) {
        const idList = ingenioIds.map(id => `'${id}'`).join(',');

        /*// Fincas
        const fincas = await sequelize.query(`
            SELECT DISTINCT id_Finca AS finca_id, id_cliente AS ingenio_id 
            FROM DM_Ingenio_Frente_Finca_Equipo
            WHERE id_Finca IS NOT NULL AND id_cliente IN (${idList})
        `, { type: QueryTypes.SELECT });

        fincas.forEach(row => {
            insertString += `INSERT INTO dbo.Finca (finca_id, ingenio_id, nombre_finca) VALUES ('${row.finca_id}', '${row.ingenio_id}', '${row.finca_id}');\n`;
        });

        // Frentes
        const frentes = await sequelize.query(`
            SELECT DISTINCT Frente AS nombre_frente, id_cliente AS ingenio_id 
            FROM DM_Ingenio_Frente_Finca_Equipo
            WHERE Frente IS NOT NULL AND id_cliente IN (${idList})
        `, { type: QueryTypes.SELECT });

        frentes.forEach(row => {
            insertString += `INSERT INTO dbo.Frente (ingenio_id, nombre_frente) VALUES ('${row.ingenio_id}', '${row.nombre_frente}');\n`;
        });

        // Maquinas
        const maquinas = await sequelize.query(`
            SELECT DISTINCT productid AS maquina_id, id_cliente AS ingenio_id 
            FROM DM_Ingenio_Frente_Finca_Equipo
            WHERE productid IS NOT NULL AND id_cliente IN (${idList})
        `, { type: QueryTypes.SELECT });

        maquinas.forEach(row => {
            insertString += `INSERT INTO dbo.Maquina (maquina_id, ingenio_id) VALUES ('${row.maquina_id}', '${row.ingenio_id}');\n`;
        });

        const semanales = await sequelize.query(`
        SELECT TOP 15000 *
        FROM IndSemClienteXFrenteXFincaXEquipo
        WHERE id_Cliente IN (${idList})
        ORDER BY new_calendario DESC, Periodo DESC, SemanaZafra DESC
    `, { type: QueryTypes.SELECT });

        semanales.forEach(row => {
            insertString += `INSERT INTO dbo.Actividad_maquina_semana (
            finca_id, frente_id, maquina_id, new_calendario, Periodo, SemanaZafra, 
            Efi_Correctivo, Efi_Correctivo_Kpi, Efi_Cuchillas, Efi_Daño_Maquinaria, 
            Efi_Planificado, Efi_Predictivo, Efi_Preventivo, UtilizacionAcumulada, 
            UtilizacionHorasxDia, EntregaDiariaCoseChadora, IngresoTotal, Eficiencia, 
            Porc_Utilizacion_Equipos, Porc_Disponibilidad, Porc_DispoTecRent, 
            MetaDisponibilidad, UtilizacionProgramada, Horas, HorasDisponibles, 
            HorasTecrent, Efi_Otros, KPI_Confiabilidad, KPI_Daño_Maquinaria, 
            KPI_MTBD_Equipo, MTTR_HORAS, MTBF_HORAS, KPI_No_Planeados, KPI_PMRS, 
            HorasNODisponibles, Cant_Casos_Daño_Maquinaria, Cant_Casos_Correctivo, 
            ConteoEquipos, KPI_MTBF_Flota
        ) VALUES (
            '${row.id_Finca}', 
            (SELECT frente_id FROM Frente WHERE nombre_frente = '${row.Frente}' AND ingenio_id = '${row.id_Cliente}'), 
            '${row.Productid}', 
            ${row.new_calendario}, ${row.Periodo}, ${row.SemanaZafra},
            ${row.Efi_Correctivo ?? 'NULL'}, ${row.Efi_Correctivo_Kpi ?? 'NULL'}, ${row.Efi_Cuchillas ?? 'NULL'},
            ${row.Efi_Daño_Maquinaria ?? 'NULL'}, ${row.Efi_Planificado ?? 'NULL'}, ${row.Efi_Predictivo ?? 'NULL'},
            ${row.Efi_Preventivo ?? 'NULL'}, ${row.UtilizacionAcumulada ?? 'NULL'}, ${row.UtilizacionHorasxDia ?? 'NULL'},
            ${row.EntregaDiariaCoseChadora ?? 'NULL'}, ${row.IngresoTotal ?? 'NULL'}, ${row.Eficiencia ?? 'NULL'},
            ${row.Porc_Utilizacion_Equipos ?? 'NULL'}, ${row.Porc_Disponibilidad ?? 'NULL'}, ${row.Porc_DispoTecRent ?? 'NULL'},
            ${row.MetaDisponibilidad ?? 'NULL'}, ${row.UtilizacionProgramada ?? 'NULL'}, ${row.Horas ?? 'NULL'},
            ${row.HorasDisponibles ?? 'NULL'}, ${row.HorasTecrent ?? 'NULL'}, ${row.Efi_Otros ?? 'NULL'},
            ${row.KPI_Confiabilidad ?? 'NULL'}, ${row.KPI_Daño_Maquinaria ?? 'NULL'}, ${row.KPI_MTBD_Equipo ?? 'NULL'},
            ${row.MTTR_HORAS ?? 'NULL'}, ${row.MTBF_HORAS ?? 'NULL'}, ${row.KPI_No_Planeados ?? 'NULL'},
            ${row.KPI_PMRS ?? 'NULL'}, ${row.HorasNODisponibles ?? 'NULL'}, ${row.Cant_Casos_Daño_Maquinaria ?? 'NULL'},
            ${row.Cant_Casos_Correctivo ?? 'NULL'}, ${row.ConteoEquipos ?? 'NULL'}, ${row.KPI_MTBF_Flota ?? 'NULL'}
        );\n\N`;
        });*/

        const diarios = await sequelize.query(`
            SELECT TOP 15000 *
            FROM IndDiariosClienteXFrenteXFincaXEquipo
            WHERE id_Cliente IN (${idList})
            ORDER BY new_calendario DESC, Periodo DESC, SemanaZafra DESC
        `, { type: QueryTypes.SELECT });

        diarios.forEach(row => {
            insertString += `INSERT INTO dbo.Actividad_maquina_dia ( 
                finca_id, frente_id, maquina_id, new_calendario, Periodo, SemanaZafra, 
                Efi_Correctivo, Efi_Correctivo_Kpi, Efi_Cuchillas, Efi_Daño_Maquinaria, 
                Efi_Planificado, Efi_Predictivo, Efi_Preventivo, UtilizacionAcumulada, 
                UtilizacionHorasxDia, EntregaDiariaCoseChadora, IngresoTotal, Eficiencia, 
                Porc_Utilizacion_Equipos, Porc_Disponibilidad, Porc_DispoTecRent, 
                MetaDisponibilidad, UtilizacionProgramada, Horas, HorasDisponibles, 
                HorasTecrent, Efi_Otros, KPI_Confiabilidad, KPI_Daño_Maquinaria, 
                KPI_MTBD_Equipo, MTTR_HORAS, MTBF_HORAS, KPI_No_Planeados, KPI_PMRS, 
                HorasNODisponibles, Cant_Casos_Daño_Maquinaria, Cant_Casos_Correctivo, 
                ConteoEquipos, KPI_MTBF_Flota
            ) VALUES (
                '${row.id_Finca}', 
                (SELECT frente_id FROM Frente WHERE nombre_frente = '${row.Frente}' AND ingenio_id = '${row.id_Cliente}'), 
                '${row.Productid}', 
                ${row.new_calendario}, ${row.Periodo}, ${row.SemanaZafra},
                ${row.Efi_Correctivo ?? 'NULL'}, ${row.Efi_Correctivo_Kpi ?? 'NULL'}, ${row.Efi_Cuchillas ?? 'NULL'},
                ${row.Efi_Daño_Maquinaria ?? 'NULL'}, ${row.Efi_Planificado ?? 'NULL'}, ${row.Efi_Predictivo ?? 'NULL'},
                ${row.Efi_Preventivo ?? 'NULL'}, ${row.UtilizacionAcumulada ?? 'NULL'}, ${row.UtilizacionHorasxDia ?? 'NULL'},
                ${row.EntregaDiariaCoseChadora ?? 'NULL'}, ${row.IngresoTotal ?? 'NULL'}, ${row.Eficiencia ?? 'NULL'},
                ${row.Porc_Utilizacion_Equipos ?? 'NULL'}, ${row.Porc_Disponibilidad ?? 'NULL'}, ${row.Porc_DispoTecRent ?? 'NULL'},
                ${row.MetaDisponibilidad ?? 'NULL'}, ${row.UtilizacionProgramada ?? 'NULL'}, ${row.Horas ?? 'NULL'},
                ${row.HorasDisponibles ?? 'NULL'}, ${row.HorasTecrent ?? 'NULL'}, ${row.Efi_Otros ?? 'NULL'},
                ${row.KPI_Confiabilidad ?? 'NULL'}, ${row.KPI_Daño_Maquinaria ?? 'NULL'}, ${row.KPI_MTBD_Equipo ?? 'NULL'},
                ${row.MTTR_HORAS ?? 'NULL'}, ${row.MTBF_HORAS ?? 'NULL'}, ${row.KPI_No_Planeados ?? 'NULL'},
                ${row.KPI_PMRS ?? 'NULL'}, ${row.HorasNODisponibles ?? 'NULL'}, ${row.Cant_Casos_Daño_Maquinaria ?? 'NULL'},
                ${row.Cant_Casos_Correctivo ?? 'NULL'}, ${row.ConteoEquipos ?? 'NULL'}, ${row.KPI_MTBF_Flota ?? 'NULL'}
            );\n\n`;
        });
    }

    res.status(200).send(insertString);
}

module.exports = controller;