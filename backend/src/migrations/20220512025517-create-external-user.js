'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('External_Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      gameId: {
        type: Sequelize.INTEGER,
        references: { model: 'Current_Games' },
      },
      score: {
        type: Sequelize.INTEGER,
      },
      token: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('External_Users');
  },
};
