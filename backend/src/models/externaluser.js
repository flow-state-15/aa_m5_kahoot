'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class externalUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  externalUser.init({
    name: DataTypes.STRING,
    gameId: DataTypes.NUMBER,
    score: DataTypes.NUMBER,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'externalUser',
  });
  return externalUser;
};