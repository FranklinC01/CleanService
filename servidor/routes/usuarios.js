//rutas     
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuariosController');

//productos
router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuario);
router.put('/:id',usuarioController.actualizarUsuario);
router.get('/:id',usuarioController.obtenerUsuarioId);
router.delete('/:id',usuarioController.eliminarUsuario);

module.exports = router;