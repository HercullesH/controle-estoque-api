'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.criarTable('usuarios', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			nome: {
				allowNull: false,
				type: Sequelize.STRING
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING
			},
			senha: {
				allowNull: false,
				type: Sequelize.STRING
			},
			criardAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			deletedAt: {
				allowNull: true,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('usuarios');
	}
};