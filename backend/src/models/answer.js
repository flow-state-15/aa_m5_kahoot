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
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Please enter a title for this answer',
          },
          len: {
            args: [1, 75],
            msg: 'Answer title must be between 1 and 75 characters',
          },
        },
      },
      questionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'This answer must belong to a question',
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
      isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'You must specify if an answer is correct',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Answer',
    },
  );
  return Answer;
};
