const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');
const verifyJWT = require('../middlewares/authorizator')
const itemValidator = require('../validators/item.validator')

router.post('/', verifyJWT, itemValidator.criar(), itemController.criar);

router.get('/', verifyJWT, itemController.encontrarTodos);

router.get('/:id', verifyJWT, itemValidator.encontrarPorId(), itemController.encontrarPorId);

router.put('/:id', verifyJWT, itemValidator.atualizar(), itemController.atualizar);

router.delete('/:id', verifyJWT, itemValidator.deletar(), itemController.deletar);

module.exports = router;