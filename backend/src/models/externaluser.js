'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class External_User extends Model {
    static associate(models) {
      External_User.belongsTo(models.Current_Game, { foreignKey: 'gameId' });
    }
  }
  External_User.init(
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: {
          args: true,
          msg: 'Sorry this username is already taken',
        },
        validate: {
          notNull: {
            args: true,
            msg: 'Please enter a username for this game',
          },
          len: {
            args: [3, 50],
            msg: 'Username must be between 3 and 50 characters',
          },
        },
      },
      gameId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'This user must belong to a game',
          },
        },
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'This user needs a score',
          },
        },
      },
      token: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'This user needs a token',
          },
          len: {
            args: [5, 100],
            msg: 'Token length must be between 5 and 100 characters',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'External_User',
    },
  );
  return External_User;
};
