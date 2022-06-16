const express = require('express');
const router = express.Router();
const entradaController = require('../controllers/entrada.controller');
const verifyJWT = require('../middlewares/authorizator')
const entradaValidator = require('../validators/entrada.validator')

router.post('/', verifyJWT, entradaValidator.criar(), entradaController.criar);

router.get('/', verifyJWT, entradaController.encontrarTodos);

router.get('/:id', verifyJWT, entradaValidator.encontrarPorId(), entradaController.encontrarPorId);

module.exports = router;