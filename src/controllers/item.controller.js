create = async function(req, res) {
	res.send({ message: 'rota está funcionando' });
}

module.exports = {
	create: create,
}