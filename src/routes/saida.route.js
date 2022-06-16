const express = require('express');
const router = express.Router();
const saidaController = require('../controllers/saida.controller');
const verifyJWT = require('../middlewares/authorizator')
const saidaValidator = require('../validators/saida.validator')

router.post('/', verifyJWT, saidaValidator.criar(), saidaController.criar);

router.get('/', verifyJWT, saidaController.encontrarTodos);

router.get('/:id', verifyJWT, saidaValidator.encontrarPorId(), saidaController.encontrarPorId);

module.exports = router;