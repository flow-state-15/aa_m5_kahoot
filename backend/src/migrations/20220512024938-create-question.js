'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      timeLimit: {
        type: Sequelize.INTEGER,
      },
      richText: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      maxPoints: {
        type: Sequelize.INTEGER,
      },
      quizId: {
        type: Sequelize.INTEGER,
        references: { model: 'Quizzes' },
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
    await queryInterface.dropTable('Questions');
  },
};
