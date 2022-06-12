const db = require('../database/models/index');
const { Usuario } = require('../database/models/index');

const criar = async function(usuario) {
	const usuarioCriado = await Usuario.create(usuario);
	return usuarioCriado;
}

const encontrarTodos = async function() {
	const usuarios = await Usuario.findAll();
	return usuarios;
}

const encontrarPorId = async function(id) {
	const usuario = await Usuario.findByPk(id);
	return usuario;
}
module.exports = {
	criar: criar,
	encontrarTodos: encontrarTodos,
	encontrarPorId: encontrarPorId,
}