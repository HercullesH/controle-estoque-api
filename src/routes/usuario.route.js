const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const verifyJWT = require('../middlewares/authorizator');
const usuarioValidator = require('../validators/usuario.validator');

router.post('/', usuarioValidator.criar(), usuarioController.criar)

router.post('/login', usuarioValidator.login(), usuarioController.login)

router.get('/', verifyJWT, usuarioController.encontrarTodos)

router.get('/:id', verifyJWT, usuarioValidator.encontrarPorId(), usuarioController.encontrarPorId)

router.put('/:id', verifyJWT,  usuarioValidator.atualizar(), usuarioController.atualizar)

router.delete('/:id', verifyJWT, usuarioValidator.deletar(), usuarioController.deletar)

module.exports = router;