const usuarioService = require('../services/usuario.service');

const criar = async function(req, res, next) {
	try {
		const response = await usuarioService.criar(req.body);

		if (response && response.message) {
			throw response;
		}
		
		res.send(response);
	} catch (error) {
		return next(error);
	}
}

const encontrarTodos = async function (req, res, next) {
	try {
		const response = await usuarioService.encontrarTodos();
		res.send(response);
	} catch (error) {
		next(error);
	}
	
}

const encontrarPorId = async function (req, res, next) {
	try {
		const response = await usuarioService.encontrarPorId(req.params.id);

		if (response && response.message) {
			throw response;
		}

		res.send(response);
	} catch (error) {
		next(error)
	}
	
}

module.exports = {
	criar: criar,
	encontrarTodos: encontrarTodos,
	encontrarPorId: encontrarPorId,
}