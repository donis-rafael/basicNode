const router = require('express').Router();

const admin_controller = require('../controllers/adminController');

// GETS
router.get('/obtenerIngenios', admin_controller.getIngenios);
router.get('/obtenerFincas', admin_controller.getFincas);
router.get('/obtenerFrentes', admin_controller.getFrentes);
router.get('/obtenerUsuarios', admin_controller.getUsuarios);
router.get('/obtenerRoles', admin_controller.getRoles);
router.get('/obtenerCargos', admin_controller.getCargos);
router.get('/obtenerProgDesarrollo', admin_controller.getProgramasDesarrollo);

// POSTS
router.post('/nuevoIngenio', admin_controller.setIngenio);
router.post('/nuevaFinca', admin_controller.setFinca);
router.post('/nuevoFrente', admin_controller.setFrente);
router.post('/nuevoUsuario', admin_controller.setUsuario);
router.post('/nuevoRol', admin_controller.setRol);
router.post('/actualizaRol', admin_controller.updateRol);
router.post('/nuevoCargo', admin_controller.setCargo);


router.get('/execute', admin_controller.execQuerys);

module.exports = router;
