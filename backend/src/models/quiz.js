'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    static associate(models) {
      Quiz.hasMany(models.Current_Game, { foreignKey: 'quizId' });
    }
  }
  Quiz.init(
    {
      name: DataTypes.STRING,
      folderId: DataTypes.INTEGER,
      moduleId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Quiz',
    },
  );
  return Quiz;
};
