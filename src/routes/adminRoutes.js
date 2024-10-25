const router = require('express').Router();
const cors = require('cors');
const admin_controller = require('../controllers/adminController');

// GETS
router.get('/usuarios', admin_controller.getUsuarios);
router.get('/usuarios/total', admin_controller.getUsuarios_Rol_Cargo);
router.get('/roles', admin_controller.getRoles);
router.get('/cargos', admin_controller.getCargos);
router.get('/mantenimientos', admin_controller.getMantenimiento);

// POSTS
//router.post('/usuarios', admin_controller.setUsuario); // SE USA EL REGISTRO
router.post('/roles', admin_controller.setRol);
router.post('/cargos', admin_controller.setCargo);
router.post('/mantenimientos', admin_controller.setMantenimiento);

// PUTS
router.put('/roles', admin_controller.updateRol);
router.put('/cargos', admin_controller.updateCargo);
router.put('/mantenimientos', admin_controller.updateMantenimiento);

// DELETE
router.delete('/roles', admin_controller.deleteRol);
router.delete('/cargos', admin_controller.deleteCargo);
router.delete('/mantenimientos', admin_controller.deleteMantenimiento);

router.post('/execute', admin_controller.execQuerys);

module.exports = router;
