const router = require('express').Router();

const auth_controller = require('../controllers/authController');

router.post('/inicio-sesion', auth_controller.iniciarSesion);
router.post('/registro', auth_controller.registro);

module.exports = router;
