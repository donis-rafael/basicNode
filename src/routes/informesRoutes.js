const router = require('express').Router();

const reportes_controller = require('../controllers/informesController');

router.get('/diario/maquina', reportes_controller.getInformeDiario_Maquina);
router.get('/semanal/maquina', reportes_controller.getInformeSemanal_Maquina);
router.get('/mensual', reportes_controller.getInformeMensual);

module.exports = router;
