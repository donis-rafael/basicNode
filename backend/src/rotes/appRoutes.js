const router = require('express').Router();

const app_movil_controller = require('../controllers/appMovilController');

// GETS
router.get('/:user/obtenerClientes', app_movil_controller.getIngenios);
router.get('/:user/obtenerFincas', app_movil_controller.getFincas);
router.get('/:user/obtenerFrentes', app_movil_controller.getFrentes);
router.get('/:user/obtenerMaquinas', app_movil_controller.getMaquinas);
router.get('/:user/obtenerTipoMantenimiento', app_movil_controller.getTipoMantenimiento);
router.get('/:user/obtenerUsuariosApp', app_movil_controller.getUsuariosAppMovil);

// POSTS
router.post('/:user/nuevoRegistroApp', app_movil_controller.setRegistroApp);

module.exports = router;