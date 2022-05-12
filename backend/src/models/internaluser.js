'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class internalUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  internalUser.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    oauth: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'internalUser',
  });
  return internalUser;
};