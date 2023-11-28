const controller = {};
//const helper = require('../config/helper');
const adminService = require('../services/admin.service');
const sequelize = require('../config/db');

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

controller.setUsuario = async (req, res) => {
    // Valida información del Request
    if (!req.body.nombreUsuario) {
        res.status(400).send({
            message: "No se pueden obtener datos nulos"
        });
        return;
    }

    const { nombreUsuario, correo, rol, cargo, ingenio, progDesarrollo } = req.body;

    let newUsuario = await adminService.guardarNuevoUsuario(nombreUsuario, correo, rol, cargo, ingenio, progDesarrollo);

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

}

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

controller.execQuerys = async (req, res) => {
    const c = await sequelize.query("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES")
        .then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    console.log(c);

    const a = await sequelize.query("SELECT * FROM Sys.Tables")
        .then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    console.log(a);
    /*const [results_02, metadata_02] = await sequelize.query("DROP TABLE Tipo_maquina;");
    console.log(results_02);
    console.log(metadata_02);

    const [results_03, metadata_03] = await sequelize.query("SET ANSI_NULLS ON");
    console.log(results_03);
    console.log(metadata_03);

    const [results_04, metadata_04] = await sequelize.query("SET QUOTED_IDENTIFIER ON");
    console.log(results_04);
    console.log(metadata_04);

    const [results_05, metadata_05] = await sequelize.query("CREATE TABLE [dbo].[Tipo_maquina]([tipo_maquina_id] [UNIQUEIDENTIFIER] PRIMARY KEY,[nombre_tipo_maquina] [varchar](100) NOT NULL) ON [PRIMARY]");
    console.log(results_05);
    console.log(metadata_05);

    const [results_06, metadata_06] = await sequelize.query("SET ANSI_NULLS ON");
    console.log(results_06);
    console.log(metadata_06);

    const [results_07, metadata_07] = await sequelize.query("SET QUOTED_IDENTIFIER ON");
    console.log(results_07);
    console.log(metadata_07);

    const [results_08, metadata_08] = await sequelize.query("CREATE TABLE [dbo].[Maquina]([maquina_id] [UNIQUEIDENTIFIER] PRIMARY KEY,[tipo_maquina_id] [UNIQUEIDENTIFIER] NULL,[frente_id] [UNIQUEIDENTIFIER] NULL,[codigo_maquina] [varchar](100) NOT NULL,CONSTRAINT FK_TipoMaquina FOREIGN KEY ([tipo_maquina_id]) REFERENCES [dbo].[Tipo_maquina]([tipo_maquina_id]),CONSTRAINT FK_FrenteMaquina FOREIGN KEY ([frente_id]) REFERENCES [dbo].[Frente]([frente_id])) ON [PRIMARY]");
    console.log(results_08);
    console.log(metadata_08);

    const [results_09, metadata_09] = await sequelize.query("SET ANSI_NULLS ON");
    console.log(results_09);
    console.log(metadata_09);

    const [results_10, metadata_10] = await sequelize.query("SET QUOTED_IDENTIFIER ON");
    console.log(results_10);
    console.log(metadata_10);

    const [results_11, metadata_11] = await sequelize.query("CREATE TABLE [dbo].[Caso]([caso_id] [UNIQUEIDENTIFIER] PRIMARY KEY,[maquina_id] [UNIQUEIDENTIFIER] NULL,[nombre_caso] [varchar](100) NOT NULL,[estado] [int] NULL,CONSTRAINT FK_CasoMaquina FOREIGN KEY ([maquina_id]) REFERENCES [dbo].[Maquina]([maquina_id])) ON [PRIMARY]");
    console.log(results_11);
    console.log(metadata_11);

    const [results_12, metadata_12] = await sequelize.query("SET ANSI_NULLS ON");
    console.log(results_12);
    console.log(metadata_12);

    const [results_13, metadata_13] = await sequelize.query("SET QUOTED_IDENTIFIER ON");
    console.log(results_13);
    console.log(metadata_13);

    const [results_14, metadata_14] = await sequelize.query("CREATE TABLE [dbo].[Actividad_frente_dia]([actividad_frente_dia_id] [UNIQUEIDENTIFIER] PRIMARY KEY,[frente_id] [UNIQUEIDENTIFIER] NULL,[disponibilidad_total] [decimal](8, 2) NULL,[disponibilidad_tecrent] [decimal](8, 2) NULL,[meta_disponibilidad] [decimal](8, 2) NULL,[utilizacion] [decimal](8, 2) NULL,[utilizacion_programada] [decimal](8, 2) NULL,[casos_abiertos] [int] NULL,[fecha_actividad] [date] NOT NULL,CONSTRAINT FK_ActividadFrenteDia FOREIGN KEY ([frente_id]) REFERENCES [dbo].[Frente]([frente_id])) ON [PRIMARY]");
    console.log(results_14);
    console.log(metadata_14);

    const [results_15, metadata_15] = await sequelize.query("SET ANSI_NULLS ON");
    console.log(results_15);
    console.log(metadata_15);

    const [results_16, metadata_16] = await sequelize.query("SET QUOTED_IDENTIFIER ON");
    console.log(results_16);
    console.log(metadata_16);

    const [results4, metadata4] = await sequelize.query("CREATE TABLE [dbo].[Actividad_maquina_dia]([actividad_maquina_dia_id] [UNIQUEIDENTIFIER] PRIMARY KEY,[maquina_id] [UNIQUEIDENTIFIER] NULL,[entrega_cania] [decimal](8, 2) NULL,[disponibilidad_total] [decimal](8, 2) NULL,[disponibilidad_tecrent] [decimal](8, 2) NULL,[utilizacion_hora_dia] [decimal](8, 2) NULL,[prcnt_utilizacion] [decimal](8, 2) NULL,[casos_abiertos] [int] NULL,[fecha_actividad] [date] NOT NULL,CONSTRAINT FK_ActividadMaquinaDia FOREIGN KEY ([maquina_id]) REFERENCES [dbo].[Maquina]([maquina_id])) ON [PRIMARY]");
    console.log(results4);
    console.log(metadata4);

    const [results5, metadata5] = await sequelize.query("SET ANSI_NULLS ON");
    console.log(results5);
    console.log(metadata5);

    const [results6, metadata6] = await sequelize.query("SET QUOTED_IDENTIFIER ON");
    console.log(results6);
    console.log(metadata6);

    const [results7, metadata7] = await sequelize.query("CREATE TABLE [dbo].[Actividad_frente_semana]([actividad_frente_semana_id] [UNIQUEIDENTIFIER] PRIMARY KEY,[frente_id] [UNIQUEIDENTIFIER] NULL,[disponibilidad_total_acumulado] [decimal](8, 2) NULL,[disponibilidad_tecrent_acumulado] [decimal](8, 2) NULL,[ingreso_cania] [decimal](8, 2) NULL,[utilizacion] [decimal](8, 2) NULL,[eficiencia_ton_acumulada] [decimal](8, 2) NULL,[semana] [nvarchar] NOT NULL,CONSTRAINT FK_ActividadFrenteSemana FOREIGN KEY ([frente_id]) REFERENCES [dbo].[Frente]([frente_id])) ON [PRIMARY]");
    console.log(results7);
    console.log(metadata7);

    const [results8, metadata8] = await sequelize.query("SET ANSI_NULLS ON");
    console.log(results8);
    console.log(metadata8);

    const [results9, metadata9] = await sequelize.query("SET QUOTED_IDENTIFIER ON");
    console.log(results9);
    console.log(metadata9);

    const [results_a, metadata_a] = await sequelize.query("CREATE TABLE [dbo].[Actividad_maquina_semana]([actividad_semana_id] [UNIQUEIDENTIFIER] PRIMARY KEY,[maquina_id] [UNIQUEIDENTIFIER] NULL,[disponibilidad_total] [decimal](8, 2) NULL,[disponibilidad_tecrent] [decimal](8, 2) NULL,[meta_disponibilidad] [decimal](8, 2) NULL,[pmrs] [decimal](8, 2) NULL,[mtbf] [decimal](8, 2) NULL,[mttr] [decimal](8, 2) NULL,[prcnt_danios] [decimal](8, 2) NULL,[no_planeados] [decimal](8, 2) NULL,[confiabilidad] [decimal](8, 2) NULL,[entrega_cania_diaria] [decimal](8, 2) NULL,[utilizacion_horaxdia] [decimal](8, 2) NULL,[utilizacion_acumulada] [decimal](8, 2) NULL,[prcnt_utilizacion] [decimal](8, 2) NULL,[eficiencia_ton_hora] [decimal](8, 2) NULL,[semana] [nvarchar] NOT NULL,CONSTRAINT FK_ActividadMaquinaSemana FOREIGN KEY ([maquina_id]) REFERENCES [dbo].[Maquina]([maquina_id])) ON [PRIMARY]");
    console.log(results_a);
    console.log(metadata_a);

    const [results_b, metadata_b] = await sequelize.query("ALTER TABLE Registro_app DROP CONSTRAINT FK_RegistroApp4;");
    console.log(results_b);
    console.log(metadata_b);

    const [results_c, metadata_c] = await sequelize.query("ALTER TABLE Maquina DROP CONSTRAINT FK_TipoMaquina;");
    console.log(results_c);
    console.log(metadata_c);

    const [results_d, metadata_d] = await sequelize.query("ALTER TABLE Maquina DROP CONSTRAINT FK_FrenteMaquina;");
    console.log(results_d);
    console.log(metadata_d);

    const [results_e, metadata_e] = await sequelize.query("ALTER TABLE Telemetria DROP CONSTRAINT FK_TeleMaquina;");
    console.log(results_e);
    console.log(metadata_e);

    const [results_f, metadata_f] = await sequelize.query("DELETE FROM Tipo_maquina;");
    console.log(results_f);
    console.log(metadata_f);

    const [results_g, metadata_g] = await sequelize.query("DELETE FROM Maquina;");
    console.log(results_g);
    console.log(metadata_g);

    const [results_h, metadata_h] = await sequelize.query("DELETE FROM Frente;");
    console.log(results_h);
    console.log(metadata_h);

    const [results_i, metadata_i] = await sequelize.query("DELETE FROM Usuario_maquina;");
    console.log(results_i);
    console.log(metadata_i);

    const [results_j, metadata_j] = await sequelize.query("DELETE FROM Usuario_maquina;");
    console.log(results_j);
    console.log(metadata_j);

    const [results_k, metadata_k] = await sequelize.query("DELETE FROM Usuario_maquina;");
    console.log(results_k);
    console.log(metadata_k);*/

    res.status(200).send('ejecutados exitosamente');
}

module.exports = controller;