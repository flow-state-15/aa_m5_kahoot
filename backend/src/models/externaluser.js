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
      name: DataTypes.STRING,
      gameId: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
      token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'External_User',
    },
  );
  return External_User;
};
