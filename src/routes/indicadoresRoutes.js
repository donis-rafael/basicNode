const router = require('express').Router();

const indicadores_controller = require('../controllers/indicadoresController');

// GETS
router.get('/fincas', indicadores_controller.getFincas);
router.get('/frentes', indicadores_controller.getFrentes);
router.get('/ingenios', indicadores_controller.getIngenios);
router.get('/maquinas', indicadores_controller.getMaquinas);

// POSTS
//router.post('/:user/registroApp', app_movil_controller.setRegistroApp);

module.exports = router;