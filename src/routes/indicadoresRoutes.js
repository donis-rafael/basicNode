const router = require('express').Router();

const indicadores_controller = require('../controllers/indicadoresController');

// GETS
router.get('/fincas', indicadores_controller.getFincas);
router.get('/frentes', indicadores_controller.getFrentes);
router.get('/ingenios', indicadores_controller.getIngenios);
router.get('/maquinas', indicadores_controller.getMaquinas);

router.get('/ingenio-frente', indicadores_controller.getIngeniosFrentes);
router.get('/ingenio-frente-finca', indicadores_controller.getIngeniosFrentesFincas);
router.get('/ingenio-frente-finca-equipo', indicadores_controller.getIngeniosFrentesFincasEquipos);

// POSTS
//router.post('/:user/registroApp', app_movil_controller.setRegistroApp);

module.exports = router;