const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const usuarioValidator = require('../validators/usuario.validator');

router.post('/', usuarioValidator.criar(), usuarioController.criar)

router.get('/', usuarioController.encontrarTodos)

router.get('/:id', usuarioValidator.encontrarPorId(), usuarioController.encontrarPorId)

module.exports = router;