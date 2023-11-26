const router = require('express').Router();

const indicadores_controller = require('../controllers/indicadoresController');

// GETS
router.get('/fincas', indicadores_controller.getFincas);

// POSTS
//router.post('/:user/registroApp', app_movil_controller.setRegistroApp);

module.exports = router;