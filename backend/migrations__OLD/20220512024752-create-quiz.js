'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Quizzes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      folderId: {
        type: Sequelize.INTEGER,
        references: { model: 'Folders' },
      },
      moduleId: {
        type: Sequelize.INTEGER,
        references: { model: 'Modules' },
      },
      courseId: {
        type: Sequelize.INTEGER,
        references: { model: 'Courses' },
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
    await queryInterface.dropTable('Quizzes');
  },
};
