const router = require('express').Router();

const reportes_controller = require('../controllers/informesController');

router.get('/diario', reportes_controller.getInformeDiario_Maquina);
router.get('/semanal', reportes_controller.getInformeSemanal);
router.get('/mensual', reportes_controller.getInformeMensual);

module.exports = router;
