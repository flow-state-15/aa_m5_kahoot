'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Current_Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hostId: {
        type: Sequelize.INTEGER,
        references: { model: 'Internal_Users' },
      },
      quizId: {
        type: Sequelize.INTEGER,
        references: { model: 'Quizzes' },
      },
      currentQuestion: {
        type: Sequelize.INTEGER,
        references: { model: 'Questions' },
      },
      pin: {
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
    await queryInterface.dropTable('Current_Games');
  },
};
