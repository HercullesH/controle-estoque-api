const usuarioRepository = require('../repositories/usuario.repository');
const createError = require('http-errors');
require('dotenv').config();
const bcrypt = require('bcrypt');

const criar = async function (usuario) {
	const existeUsuario = await usuarioRepository.encontrarUmPorWhere({ email: usuario.email });

	if (existeUsuario) {
		return createError(409, 'Usuário já existe');
	}

	usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT)
	const usuarioCriado = await usuarioRepository.criar(usuario);
	return usuarioCriado;
}

const encontrarTodos = async function () {
	const usuarios = await usuarioRepository.encontrarTodos();
	return usuarios;
}

const encontrarPorId = async function (id) {
	const usuario = await usuarioRepository.encontrarPorId(id);

	if (!usuario) {
		return createError(404,  'Usuário não encontrado');
	}
	
	return usuario;
}
module.exports = {
	criar: criar,
	encontrarTodos: encontrarTodos,
	encontrarPorId: encontrarPorId,
}