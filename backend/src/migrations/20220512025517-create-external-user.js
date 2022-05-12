'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('externalUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      gameId: {
        type: Sequelize.NUMBER
      },
      score: {
        type: Sequelize.NUMBER
      },
      token: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('externalUsers');
  }
};