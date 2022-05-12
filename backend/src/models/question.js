'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.hasMany(models.Answer, { foreignKey: 'questionId' });
    }
  }
  Question.init(
    {
      title: DataTypes.STRING,
      timeLimit: DataTypes.INTEGER,
      richText: DataTypes.STRING,
      image: DataTypes.STRING,
      maxPoints: DataTypes.INTEGER,
      quizId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    },
  );
  return Question;
};
