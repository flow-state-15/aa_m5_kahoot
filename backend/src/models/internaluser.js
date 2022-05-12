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
      // Still not sure what this table will look like
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      oauth: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Internal_User',
    },
  );
  return Internal_User;
};
