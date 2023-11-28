# basicNode
# proyecto de Tesis

Nombre | Correo
---|---
*Rafael Antonio Morales Donis* | **rafael.7md@gmail.com**
*Jonnathan Antonio Castillo Avendaño* | **jonnantonicas@gmail.com**
*Jorge Antonio Rompiche Herrera* | **jorgerompiche@gmail.com**

******

Herramientas para API
------
* *FrontEnd:* React xx.xx.xx
* *Backend:* NodeJs 18.16.0

******

## Endpoints Backend ADMIN

Endpoint | Método | Párametros | Headers | Descripción
---|---|---|---|---
/api/admin/ingenios | GET | -- | -- | Obtener todos los ingenios
/api/admin/ingenios | POST | "nombreIngenio" | -- | Crea un nuevo Ingenio
/api/admin/ingenios | PUT | "idIngenio", "nombreIngenio" | -- | Actualiza un Ingenio
/api/admin/ingenios | DELETE | "idIngenio" | -- | Elimina un Ingenio
/api/admin/fincas | GET | -- | -- | Obtener todos las fincas
/api/admin/fincas | POST | "nombreFinca", "ingenio" | -- | Crea un nueva Finca
/api/admin/fincas | PUT | "idFinca", "nombreFinca" | -- | Actualiza un Finca
/api/admin/fincas | DELETE | "idFinca" | -- | Elimina una Finca
/api/admin/frentes | GET | -- | -- | Obtener todos los frentes
/api/admin/frentes | POST | "nombreFrente", "ingenio" | -- | Crea un nuevo Frente
/api/admin/frentes | PUT | "idFrente", "nombreFrente" | -- | Actualiza un Frente
/api/admin/frentes | DELETE | "idFrente" | -- | Elimina un Frente
/api/admin/roles | GET | -- | -- | Obtener todos los roles
/api/admin/roles | POST | "nombreRol" | -- | Crea un nuevo Rol
/api/admin/roles | PUT | "idRol", "nombreRol" | -- | Actualiza un Rol
/api/admin/roles | DELETE | "idRol" | -- | Elimina un Rol
/api/admin/cargos | GET | -- | -- | Obtener todos los cargos
/api/admin/cargos | POST | "nombreCargo" | -- | Crea un nuevo Cargo
/api/admin/cargos | PUT | "idCargo", "nombreCargo" | -- | Actualiza un Cargo
/api/admin/cargos | DELETE | "idCargo" | -- | Elimina un Cargo
/api/admin/usuarios | GET | -- | -- | Obtener todos los usuarios
/api/admin/usuarios/total | GET | -- | -- | Obtener todos los usuarios con sus Rol, Ingenio, Cargo y Programa de desarrollo
/api/admin/progDesarrollo | GET | -- | -- | Obtener todos los programas de desarrollo

## Endpoints Backend AUTH

Endpoint | Método | Párametros | Headers | Descripción
---|---|---|---|---
/api/auth/registro | POST | "user", "password", "nombreUsuario", "correo", "rol", "ingenio", "cargo", "progDesarrollo" | -- | Registro nuevo Usuario
/api/auth/inicio-sesion | POST | "user", "password" | "token" | Inicio de sesión de usuario

## Endpoints Backend APP MOVIL

Endpoint | Método | Párametros | Headers | Descripción
---|---|---|---|---
/api/app-movil/:user/clientes | GET | -- | "token" | Obtener todos los ingenios (clientes); ejemplo de parámetro de url ":user", suponiendo un usuario "usuario123" sería: *"/api/app-movil/usuario123/clientes"*
/api/app-movil/:user/fincas | GET | -- | "token" | Obtener todas las fincas
/api/app-movil/:user/frentes | GET | -- | "token" | Obtener todos los frentes
/api/app-movil/:user/maquinas | GET | -- | "token" | Otener todas las máquinas
/api/app-movil/:user/tipoMantenimiento | GET | -- | "token" | Obtener tipo de mantenimiento
/api/app-movil/:user/usuariosApp | GET | -- | "token" | Obtener usuarios con rol AppMovil
/api/app-movil/:user/maxIndexRegistro | GET | -- | "token" | el índex máximo + 1 de los registros de la App
/api/app-movil/:user/registroApp | POST | "maquinaId", "ingenioId", "fincaId", "frenteId", "mantenimientoId", "operando", "horaInicio", "horaFinal", "comentario", "urlFoto" | "token" | Crea un nuevo registro de App

## Endpoints Backend INFORMES

Endpoint | Método | Párametros | Headers | Descripción
---|---|---|---|---
/api/informes/diario/maquina | GET | -- | "codigo_maquina" | Obtener informe diario con filtro de código máquina
/api/informes/diario/ingenio | GET | -- | "codigo_ingenio" | Obtener informe diario con filtro de código ingenio
/api/informes/diario/frente | GET | -- | "codigo_frente" | Obtener informe diario con filtro de código frente
/api/informes/diario/fecha | GET | -- | "fecha" | Obtener informe diario con filtro de fecha, formato fecha yyyy-MM-dd
/api/informes/semanal/maquina | GET | -- | "codigo_maquina" | Obtener informe semanal con filtro de código máquina
/api/informes/semanal/ingenio | GET | -- | "codigo_ingenio" | Obtener informe semanal con filtro de código ingenio
/api/informes/semanal/frente | GET | -- | "codigo_frente" | Obtener informe semanal con filtro de código frente
