'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('agricultor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      razaoSocial: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      nomeFantasia: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      cpfCnpj: {
        type: Sequelize.STRING(14),
        allowNull: false,
      },
      celular: {
        type: Sequelize.STRING(14),
        allowNull: true,
      },
      cidade: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('agricultor');
  }
};
