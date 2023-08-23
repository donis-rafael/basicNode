const router = require('express').Router();
const cors = require('cors');
const admin_controller = require('../controllers/adminController');

// GETS
router.get('/ingenios', admin_controller.getIngenios);
router.get('/fincas', admin_controller.getFincas);
router.get('/frentes', admin_controller.getFrentes);
router.get('/usuarios', admin_controller.getUsuarios);
router.get('/usuarios/total', admin_controller.getUsuarios_Rol_Ingenio_Cargo);
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

// DELETE
router.delete('/roles', admin_controller.deleteRol);
router.delete('/cargos', admin_controller.deleteCargo);
router.delete('/frentes', admin_controller.deleteFrente);
router.delete('/fincas', admin_controller.deleteFinca);


router.get('/execute', admin_controller.execQuerys);

module.exports = router;
