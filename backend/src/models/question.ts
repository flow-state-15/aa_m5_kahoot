'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    'Question',
    {
      title: {
        type: DataTypes.STRING(75),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Please enter a question title',
          },
          len: {
            args: [3, 75],
            msg: 'Question title must be between 3 and 75 characters',
          },
        },
      },
      timeLimit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Please enter a time limit',
          },
          max: {
            args: 75,
            msg: 'Time limit must be less than or equal to 75',
          },
          min: {
            args: 3,
            msg: 'Time limit must be at least 3',
          },
        },
      },
      richText: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        validate: {
          len: {
            args: [5, 1000],
            msg: 'Rich text (if used) must be between 5 and 1000 characters',
          },
        },
      },
      image: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        validate: {
          len: {
            args: [5, 1000],
            msg: 'image url must be between 5 and 1000 characters',
          },
          isURL: {
            args: true,
            msg: 'image must be a valid URL',
          },
        },
      },
      maxPoints: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          max: {
            args: 1000,
            msg: 'Max points must be less than 1000',
          },
          min: {
            args: 100,
            msg: 'Max points must be more than 100',
          },
        },
      },
      quizId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'This question must belong to a quiz',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Question',
    },
  );
  Question.associate = models => {
    Question.hasMany(models.Answer, { foreignKey: 'questionId' });
    // Question.hasMany(models.Current_Game, { foreignKey: 'currentQuestion' });
  };
  return Question;
};
