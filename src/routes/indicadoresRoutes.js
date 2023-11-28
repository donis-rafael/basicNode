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

// INDICADORES DIARIOS
router.get('/diario/clientes', indicadores_controller.getIndicadoresDiariosCliente);
router.get('/diario/clientes-frente', indicadores_controller.getIndicadoresDiariosCliente_Frente);
router.get('/diario/clientes-frente-finca', indicadores_controller.getIndicadoresDiariosCliente_Frente_Finca);
router.get('/diario/clientes-frente-finca-equipo', indicadores_controller.getIndicadoresDiariosCliente_Frente_Finca_Equipo);

module.exports = router;