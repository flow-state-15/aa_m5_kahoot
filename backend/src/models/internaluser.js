'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Internal_User extends Model {
    static associate(models) {
      Internal_User.hasMany(models.Current_Game, { foreignKey: 'hostId' });
    }
  }
  Internal_User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      oauth: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Internal_User',
    },
  );
  return Internal_User;
};
