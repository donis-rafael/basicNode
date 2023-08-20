const router = require('express').Router();

const reportes_controller = require('../controllers/informesController');

router.get('/diario', reportes_controller.getReporteDiario);
router.get('/semanal', reportes_controller.getReporteSemanal);
router.get('/mensual', reportes_controller.getReporteMensual);

module.exports = router;
