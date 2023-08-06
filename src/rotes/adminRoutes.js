const router = require('express').Router();

const admin_controller = require('../controllers/adminController');

// GETS
router.get('/ingenios', admin_controller.getIngenios);
router.get('/fincas', admin_controller.getFincas);
router.get('/frentes', admin_controller.getFrentes);
router.get('/usuarios', admin_controller.getUsuarios);
router.get('/roles', admin_controller.getRoles);
router.get('/cargos', admin_controller.getCargos);
router.get('/progDesarrollo', admin_controller.getProgramasDesarrollo);

// POSTS
router.post('/ingenios', admin_controller.setIngenio);
router.post('/fincas', admin_controller.setFinca);
router.post('/frentes', admin_controller.setFrente);
router.post('/usuarios', admin_controller.setUsuario);
router.post('/roles', admin_controller.setRol);
router.post('/cargos', admin_controller.setCargo);

// PUTS
router.put('/ingenios', admin_controller.updateIngenio);
router.put('/fincas', admin_controller.updateFinca);
router.put('/frentes', admin_controller.updateFrente);
router.put('/roles', admin_controller.updateRol);
router.put('/cargos', admin_controller.updateCargo);


router.get('/execute', admin_controller.execQuerys);

module.exports = router;
