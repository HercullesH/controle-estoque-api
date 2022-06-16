const saidaService = require('../services/saida.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const criar = async function(req, res, next) {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw createError(422, { errors: errors.array() })
		}

		const response = await saidaService.criar({
			quantidade: req.body.quantidade,
			usuario_id: req.usuario_id,
			item_id: req.body.item_id,
		});

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
		const response = await saidaService.encontrarTodos();
		res.send(response);
	} catch (error) {
		next(error);
	}
}

const encontrarPorId = async function (req, res, next) {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw createError(422, { errors: errors.array() })
		}
		
		const response = await saidaService.encontrarPorId(req.params.id);

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