const router = require('express').Router();

const reportes_controller = require('../controllers/informesController');

// INFORMES DIARIOS
router.get('/diario/maquina', reportes_controller.getInformeDiario_Maquina);
router.get('/diario/ingenio', reportes_controller.getInformeDiario_Ingenio);
router.get('/diario/frente', reportes_controller.getInformeDiario_Frente);
router.get('/diario/fecha', reportes_controller.getInformeDiario_Fecha);

// INFORMES SEMANALES
router.get('/semanal/maquina', reportes_controller.getInformeSemanal_Maquina);
router.get('/semanal/ingenio', reportes_controller.getInformeSemanal_Ingenio);
router.get('/semanal/frente', reportes_controller.getInformeSemanal_Frente);

module.exports = router;
