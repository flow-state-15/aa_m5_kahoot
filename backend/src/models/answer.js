'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      Answer.belongsTo(models.Question, { foreignKey: 'questionId' });
    }
  }
  Answer.init(
    {
      title: DataTypes.STRING,
      questionId: DataTypes.INTEGER,
      richText: DataTypes.STRING,
      image: DataTypes.STRING,
      isCorrect: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Answer',
    },
  );
  return Answer;
};
