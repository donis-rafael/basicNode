const router = require('express').Router();

const admin_controller = require('../controllers/adminController');

// GETS
router.get('/ingenios', admin_controller.getIngenios);
router.get('/fincas', admin_controller.getFincas);
router.get('/obtenerFrentes', admin_controller.getFrentes);
router.get('/obtenerUsuarios', admin_controller.getUsuarios);
router.get('/obtenerRoles', admin_controller.getRoles);
router.get('/obtenerCargos', admin_controller.getCargos);
router.get('/obtenerProgDesarrollo', admin_controller.getProgramasDesarrollo);

// POSTS
router.post('/ingenios', admin_controller.setIngenio);
router.post('/fincas', admin_controller.setFinca);
router.post('/nuevoFrente', admin_controller.setFrente);
router.post('/nuevoUsuario', admin_controller.setUsuario);
router.post('/nuevoRol', admin_controller.setRol);
router.post('/nuevoCargo', admin_controller.setCargo);

// PUTS
router.put('/ingenios', admin_controller.updateIngenio);
router.put('/fincas', admin_controller.updateFinca);
router.put('/actualizaFrente', admin_controller.updateFrente);
router.put('/actualizaRol', admin_controller.updateRol);
router.put('/actualizaCargo', admin_controller.updateRol);


router.get('/execute', admin_controller.execQuerys);

module.exports = router;
