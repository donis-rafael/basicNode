const router = require('express').Router();

const app_movil_controller = require('../controllers/appMovilController');

// GETS
router.get('/:user/clientes', app_movil_controller.getIngenios);
router.get('/:user/fincas', app_movil_controller.getFincas);
router.get('/:user/frentes', app_movil_controller.getFrentes);
router.get('/:user/maquinas', app_movil_controller.getMaquinas);
router.get('/:user/tipoMantenimiento', app_movil_controller.getTipoMantenimiento);
router.get('/:user/usuariosApp', app_movil_controller.getUsuariosAppMovil);
router.get('/:user/maxIndexRegistro', app_movil_controller.getMaxIndexRegApp);

// POSTS
router.post('/:user/registroApp', app_movil_controller.setRegistroApp);

module.exports = router;